import Props from './interface';
import Image from 'next/image';

export default function Card(props: Props) {
  const imgSrc = `/imgs/Cards/${props.image}.png`;

  return (
    <div className="my-10 flex max-w-sm">
      {/* Card */}
      <div className="group relative flex flex-col overflow-hidden rounded-bl-3xl rounded-br-md rounded-tl-md rounded-tr-3xl bg-green-800 transition-all  duration-[0.5s] hover:scale-105 hover:shadow-lg hover:shadow-black focus:scale-105 focus:shadow-lg focus:shadow-black">
        {/* Image */}
        <div className="relative h-52">
          <Image
            src={imgSrc}
            alt={props.image}
            fill
            className="h-auto w-full overflow-hidden object-cover"
          />
        </div>
        {/* Content */}
        <div className="p-5 text-gray-100">
          {/* Title */}
          <div className="card_title absolute right-0 top-3 z-[1] h-auto w-[90%] origin-[left_top] rotate-[-3.3deg] overflow-hidden rounded-[5px_0_0_5px] bg-green-900 p-2 text-[1.325rem] font-semibold text-white transition-transform ease-in-out group-hover:scale-125 group-hover:shadow-lg group-hover:duration-100">
            {props.title}
          </div>
          {/* Text */}
          <div className="indent-2 text-base">{props.children}</div>
          {/* Emphasys */}
          {props.emphasysText ? (
            <div className="relative z-0 overflow-hidden rounded-b-lg bg-fuchsia-900 px-3 py-2 text-black before:left-0 before:top-2  after:bottom-5 after:right-0 before:after:absolute before:after:-z-10 before:after:block before:after:text-5xl before:after:leading-none before:after:text-purple-700 before:after:opacity-5 before:after:content-['+']">
              props.emphasysText
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}
