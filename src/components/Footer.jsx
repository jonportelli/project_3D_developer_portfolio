import Logo from "../assets/logo.svg"
const Footer = () => {

    return (

<footer class="p-4 bg-white md:p-8 lg:p-10 dark:bg-white">
  <div class="mx-auto max-w-screen-xl text-center">
      <a href="#" class="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-primary">
         <img src={Logo} className="w-16 h-16"/>
          {/* Underscore Technology     */}
      </a>
      <p class="my-6 text-gray-500 dark:text-gray-400">Award-Winning Digital Automation Agency</p>
      <ul class="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-primary">
          <li>
              <a href="#about" class="mr-4 hover:underline md:mr-6 text-primary ">About</a>
          </li>
          <li>
              <a href="#" class="mr-4 hover:underline md:mr-6 text-primary">Terms & Conditions</a>
          </li>
          <li>
              <a href="#" class="mr-4 hover:underline md:mr-6 text-primary">Privacy</a>
          </li>
          <li>
              <a href="#contact" class="mr-4 hover:underline md:mr-6 text-primary">Contact</a>
          </li>
      </ul>
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="#" class="hover:underline">Underscore Technology™</a>. All Rights Reserved.</span>
  </div>
</footer>
    )
}

export default Footer;