
export const Form = () =>  (
<form
    netlify
    netlify-honeypot
    name="feedback"
    method="POST"
    action="/contact"
    className="flex flex-col gap-8 lg:gap-5 xl:gap-8 mx-auto items-center "
    >
    <p class="hidden">
        <label>
        Don’t fill this out if you’re human: <input name="bot-field" />
        </label>
    </p>
    <input className="px-4 py-4 w-full text-gray-500 font-medium   placeholder-gray-500 outline-none border bg-gray-300 border-gray-300 rounded-lg focus:ring focus:ring-indigo-300" type="hidden" name="form-name" value="feedback" />
    <input className="px-4 py-4 w-full text-gray-500 font-medium  placeholder-gray-500 outline-none border bg-gray-300 border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"  placeholder="Name" id="name" type="text" name="name" required />
    <input className="px-4 py-4 w-full text-gray-500 font-medium   placeholder-gray-500 outline-none border bg-gray-300 border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"  placeholder="Organization"id="org" type="text" name="org" />
    <input className="px-4 py-4 w-full text-gray-500 font-medium  last: placeholder-gray-500 outline-none border bg-gray-300 border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"  placeholder="Email" id="email" type="email" name="email" required />
    <textarea className="px-4 py-4 w-full text-gray-500 font-medium   placeholder-gray-500 outline-none border bg-gray-300 border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"  placeholder="Describe your needs" id="data" wrap="soft" name="data" required></textarea>
    <div type="submit" className="w-[210px] h-12 custom-button-colored mr-10">Submit</div>
    </form>  
) ;