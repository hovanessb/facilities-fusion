import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function InquiryForm() {
    const [isFormModalOpen, setIsFormModalOpen] = useState(false);
    const [isError, setError] = useState(false);
    let error = 0
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const target = event.target as typeof event.target & {
        fullName: { value: string };
        org: { value: string };
        email: { value: string };
        phone: { value: string };
        data: { value: string };
      };
  
      const dataBody = {
        name: target.fullName.value,
        org: target.org.value,
        email: target.email.value,
        phone: target.phone.value,
        data: target.data.value
      };
      //call to the Netlify Function you created`
      const result = await fetch(  "/.netlify/functions/emails/thankyou", {
        method: "POST",
        body: JSON.stringify(dataBody),
      });
      if(result.status == 200){
        setIsFormModalOpen(true)
      } else {
        setIsFormModalOpen(true)
        setError(true)
      }
    };

    return ( <span> 
            {!isFormModalOpen && 
            (<form
              netlify
              netlify-honeypot="bot-field"
              name="inquiry-request"
              method="POST"
              onSubmit={handleSubmit}
              className="flex flex-col gap-8 lg:gap-5 xl:gap-8 px-4 w-full items-center "
              >
              <p class="hidden">
                  <label>
                  Don’t fill this out if you’re human: <input name="bot-field" />
                  </label>
              </p>
              <input className="px-4 py-4 w-full text-gray-500 font-medium   placeholder-gray-500 outline-none border bg-gray-300 border-gray-300 rounded-lg focus:ring focus:ring-indigo-300" type="hidden" name="form-name" value="inquiry-request" />
              <input className="px-4 py-4 w-full text-gray-500 font-medium  placeholder-gray-500 outline-none border bg-gray-300 border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"  placeholder="Name" id="fullName" type="text" name="fullName" required />
              <input className="px-4 py-4 w-full text-gray-500 font-medium   placeholder-gray-500 outline-none border bg-gray-300 border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"  placeholder="Organization"id="org" type="text" name="org" />
              <input className="px-4 py-4 w-full text-gray-500 font-medium  last: placeholder-gray-500 outline-none border bg-gray-300 border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"  placeholder="Email" id="email" type="email" name="email" required />
              <input className="px-4 py-4 w-full text-gray-500 font-medium  last: placeholder-gray-500 outline-none border bg-gray-300 border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"  placeholder="Phone" id="phone" type="phone" name="phone"  />
              <textarea className="px-4 py-4 w-full text-gray-500 font-medium   placeholder-gray-500 outline-none border bg-gray-300 border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"  placeholder="Describe your needs" id="data" wrap="soft" name="data" required></textarea>
              <button type="submit" style={{backgroundColor: '#29f8c8ff'}} className="w-[210px] h-12 custom-button-colored mr-10">Submit</button>
              </form>  ) }
              {isFormModalOpen && !isError && 
                (<AnimatePresence>
                  <motion.div
                    initial={{ opacity: 0, zIndex: 50 }}
                    animate={{ opacity: 1, zIndex: 50 }}
                    transition={{ duration: 0.1 }}
                    exit={{ opacity: 0 }}
                  ><h1 className="mt-6 mb-2 text-5xl font-bold tracking-normal text-white">Thank You</h1>
                <p className="text-white">Your request has been sent.</p>
                </motion.div>
                </AnimatePresence>)}
                {isFormModalOpen && isError &&
                (<AnimatePresence>
                  <motion.div
                    initial={{ opacity: 0, zIndex: 50 }}
                    animate={{ opacity: 1, zIndex: 50 }}
                    transition={{ duration: 0.1 }}
                    exit={{ opacity: 0 }}
                  ><h1 className="mt-6 mb-2 text-5xl font-bold tracking-normal text-white">Woops</h1>
                  <p className="text-white">We had a problem sending the information on our end, please call us with your inquiry at <br/>408 499-2428.</p>
                </motion.div>
                </AnimatePresence>)}
              </span>
    );
}
