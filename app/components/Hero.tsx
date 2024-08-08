"use client";

import { useEffect, useRef, useState } from 'react';
import Image from "next/image";
import { CountUp } from 'countup.js';

import Appstore from '../../public/assests/Appstore.svg';
import Googlestore from '../../public/assests/googlestore.svg';
import HeroImg from '../../public/assests/oldwoman.png';

export function Hero() {
    const count1Ref = useRef<HTMLSpanElement>(null);
    const count2Ref = useRef<HTMLSpanElement>(null);
    const count3Ref = useRef<HTMLSpanElement>(null);
    const [isCount1Complete, setIsCount1Complete] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const options = {
            threshold: 0.5,
        };
    
        const count1Node = count1Ref.current;
        const count2Node = count2Ref.current;
        const count3Node = count3Ref.current;
    
        const handleIntersection = (entries: IntersectionObserverEntry[]) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (!hasAnimated) {
                        const countUp1 = new CountUp(count1Node as HTMLElement, 8000, {
                            duration: 2,
                            formattingFn: (num) => num.toFixed(0),
                        });
                        const countUp2 = new CountUp(count2Node as HTMLElement, 2425, { duration: 2 });
                        const countUp3 = new CountUp(count3Node as HTMLElement, 98, { duration: 2 });
    
                        countUp1.start(() => {
                            setIsCount1Complete(true);
                        });
                        countUp2.start();
                        countUp3.start();
    
                        setHasAnimated(true);
                    }
                } else {
                    setHasAnimated(false);
                    setIsCount1Complete(false);
                }
            });
        };
    
        const observer = new IntersectionObserver(handleIntersection, options);
    
        if (count1Node && count2Node && count3Node) {
            observer.observe(count1Node);
            observer.observe(count2Node);
            observer.observe(count3Node);
        }
    
        return () => {
            if (count1Node && count2Node && count3Node) {
                observer.unobserve(count1Node);
                observer.unobserve(count2Node);
                observer.unobserve(count3Node);
            }
        };
    }, [hasAnimated]);
    

    return (
        <div className="lg:pt-40 pt-16">
            <div className="px-[20px]">
                <h1 className="text-center lg:text-[72px] text-[34px] mx-auto text-Fozanova-Black font-bold lg:leading-82 leading-[40px] lg:max-w-[1200px] mx-w-[1050px] lg:tracking-customTight">
                    The older adults in your family deserve very good care and a befitting farewell.
                </h1>

                <p className="pt-6 text-center font-normal lg:text-[17px] text-[15px] lg:leading-[27px] leading-[25px] text-p-grey lg:max-w-[1050px] max-w-[1050px] mx-auto tracking-normal">
                    Solace is a healthcare app for the 14.8 million older adults aged 60 and above in Nigeria. Healthy Elders Club offers elderly members up to 25% cashback on medical expenses yearly and more. Solace Farewell Cover provides subscribers with a dignified farewell for their loved ones in the event of their passing, offering a service benefit of up to ₦8 million.
                </p>

                <div className="pt-8 flex items-center justify-center gap-[15px] w-full">
                    <a href="#">
                        <button>
                            <Image width={169.82} height={63.84} src={Appstore} alt="appstore" />
                        </button>
                    </a>
                    <a href="#">
                        <button>
                            <Image width={169.71} height={63.67} src={Googlestore} alt="googlestore" />
                        </button>
                    </a>
                </div>

                <div className="pt-6 max-w-[1058px] mx-auto">
                    <Image src={HeroImg} alt="HeroImg" className="rounded-xl" />
                </div>

                <div className="pt-10">
                    <div className="bg-Fazanova-white max-w-[931px] border border-border-custom py-[16px] rounded-xl px-[48px] flex text-center lg:flex-row flex-col lg:gap-32 gap-20 mx-auto">
                        <div className="text-center">
                            <h1 className="text-center text-[44px] font-bold leading-[58px] text-Fozanova-gold">
                                <span ref={count1Ref}>0</span>{isCount1Complete && 'K'}
                            </h1>
                            <p className="text-[17px] text-center font-semibold leading-[24px] text-Fozanova-Black">Active App Users</p>
                        </div>
              
                        <div className='lg:border-l-[1px] lg:border-r-[1px] lg:border-r-border-custom lg:border-l-border-custom lg:pl-10 lg:pr-10'>
                            <h1 className="text-center text-[44px] font-bold leading-[58px] text-Fozanova-gold">
                                <span ref={count2Ref}>0</span>
                            </h1>
                            <p className="text-[17px] text-center font-semibold leading-[24px] text-Fozanova-Black">Caregivers & Partners</p>
                        </div>
                     
                        <div>
                            <h1 className="text-center text-[44px] font-bold leading-[58px] text-Fozanova-gold">
                                <span ref={count3Ref}>0</span>%
                            </h1>
                            <p className="text-[17px] text-center font-semibold leading-[24px] text-Fozanova-Black">Satisfied Customers</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
