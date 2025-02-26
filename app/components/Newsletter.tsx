import Image from "next/image"

import NewsletterEmail from '../../public/assests/NewsletterEmail.svg'
import AppstoreSvg from '../../public/assests/Appstore.svg'
import GoogleStoreSvg from '../../public/assests/googlestore.svg'
import Link from "next/link"



export function Newsletter() {
    return (
        <div className="pt-16">
            <div className="lg:rounded-[24px] border-[1px] border-[#EFF0F6] py-14 bg-Fozanova-Black max-w-[1058px] mx-auto flex flex-col items-center justify-center">
                <div>
                    <Image width={89.4} height={86.32} src={NewsletterEmail} alt="newsletterEmail" />
                </div>

                <h1 className="pt-[20px] font-normal lg:text-[48px] text-[40px] lg:leading-[58px] leading-[50px] tracking-[-1px] max-w-[633px] text-center text-Fazanova-white">Let&apos;s help you enjoy your elderhood!</h1>

                <p className="pt-[15px] font-normal lg:text-[17px] text-[15px] lg:leading-[26px] leading-[22px] tracking-[-0.4%] max-w-[410.12px] text-Fazanova-white text-center">Stay in the loop with updates from our team and community. Once a week.</p>

                <div className="lg:flex lg:flex-row flex flex-col gap-[10px] pt-[15px]">
                    <div>
                        <div >
                            <input className="News rounded-[6px] border-[1px] border-[#CBD5E1] lg:w-[358px] h-[42px] outline-none " type="email" name="email" id="email" placeholder="Enter your email" />
                        </div>
                        <span className="font-normal text-[14px] leading-[20px] text-Fazanova-white">Subscribe to our newsletter</span>
                    </div>

                    <Link href="" className="mx-auto lg:mx-0">
                        <button className="mx-auto lg:mx-0 bg-Fozanova-gold w-[116px] rounded-[6px] lg:text-[17px] leading-[24px] font-semibold  text-Fazanova-white py-[8px] px-[16px]">
                            Subscribe
                        </button>
                    </Link>
                </div>

                <div className="hidden lg:flex gap-[17.82px] pt-[20px]">
                    <Link href="/">
                        <button>
                            <Image width={169.82} height={63.84} src={AppstoreSvg} alt="appStoreSvg" />
                        </button>
                    </Link>

                    <Link href="/">
                        <button>
                            <Image width={169.71} height={63.67} src={GoogleStoreSvg} alt="googleStoreSvg" />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}