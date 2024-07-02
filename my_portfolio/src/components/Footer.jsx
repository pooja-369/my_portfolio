import { Typography } from "@material-tailwind/react";
import { FaFacebook ,FaInstagram,FaTwitter,FaLinkedin } from "react-icons/fa";

 function Footer() {
  return (
    <footer className=" w-full  items-center bg-slate-950 z-20 relative gap-y-6 gap-x-12  py-6 text-center md:justify-between ">


       <Typography color="blue-gray" className=" text-blue-500 font-normal md:text-2xl text-xl pb-4 font-bold">
       Pooja Goyal
       
      </Typography>
      <div className="flex flex-wrap justify-center items-center gap-y-2 gap-x-8 pb-4 ">
      <FaFacebook className=" hover:text-blue-500 focus:text-blue-500" />
       <FaInstagram className=" hover:text-blue-500 focus:text-blue-500"/>
       <FaTwitter className=" hover:text-blue-500 focus:text-blue-500"/>
       <FaLinkedin className=" hover:text-blue-500 focus:text-blue-500"/>
      </div> 
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8 justify-center  md:text-xl pb-4">
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500 font-bold"
          >
          Skills
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500 font-bold"
          >
            Experience
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500 font-bold"
          >
          Projects
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500 font-bold"
          >
            Education
          </Typography>
        </li>
      </ul>

      <Typography color="blue-gray" className="font-normal">
        &copy; 2024 All Right Reserved
      </Typography>
     
    </footer>
  
  );
}

export default Footer;