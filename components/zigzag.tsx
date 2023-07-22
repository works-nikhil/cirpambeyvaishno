import Image from 'next/image'

import FeatImage01 from '@/public/images/features-03-image-01.jpg'
import FeatImage02 from '@/public/images/features-03-image-02.jpg'
import FeatImage03 from '@/public/images/features-03-image-03.jpg'
import FeatImage04 from '@/public/images/features-03-image-04.jpg'
import FeatImage05 from '@/public/images/features-03-image-05.jpg'
import FeatImage06 from '@/public/images/features-03-image-06.jpg'
import FeatImage07 from '@/public/images/features-03-image-07.jpg'
import FeatImage08 from '@/public/images/features-03-image-08.jpg'
import FeatImage09 from '@/public/images/features-03-image-09.jpg'
import FeatImage10 from '@/public/images/features-03-image-10.jpg'
import FeatImage11 from '@/public/images/features-03-image-11.jpg'
import FeatImage12 from '@/public/images/features-03-image-12.jpg'
import FeatImage13 from '@/public/images/features-03-image-13.jpg'
import FeatImage14 from '@/public/images/features-03-image-14.jpg'
import FeatImage15 from '@/public/images/features-03-image-15.jpg'
import FeatImage16 from '@/public/images/features-03-image-16.jpg'
import FeatImage17 from '@/public/images/features-03-image-17.jpg'
import FeatImage18 from '@/public/images/features-03-image-18.jpg'

export default function Zigzag() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">
              Welcome to M/s Ambey Vaishno Steels Pvt. Ltd.
            </div>
            {/* <h1 className="h2 mb-4">Explore Our Locations</h1>
            <p className="text-xl text-gray-400">Explore our locations and envision yourself as part of our thriving community.</p> */}
          </div>

          {/* Items */}
          <div className="grid gap-20">
            <div className="flex justify-center items-center">
              {/* Image */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                data-aos="fade-up"
              >
                <Image
                  className="max-w-full mx-auto md:max-w-none h-auto"
                  src={FeatImage01}
                  width={540}
                  height={405}
                  alt="Features 01"
                />
              </div>
            </div>

            {/* 2nd item */}
            <div className="flex justify-center items-center">
              {/* Image */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                data-aos="fade-up"
              >
                <Image
                  className="max-w-full mx-auto md:max-w-none h-auto"
                  src={FeatImage02}
                  width={540}
                  height={405}
                  alt="Features 02"
                />
              </div>
            </div>

            {/* 3rd item */}
            <div className="flex justify-center items-center">
              {/* Image */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                data-aos="fade-up"
              >
                <Image
                  className="max-w-full mx-auto md:max-w-none h-auto"
                  src={FeatImage03}
                  width={540}
                  height={405}
                  alt="Features 03"
                />
              </div>
            </div>

            {/* 4th item */}
            <div className="flex justify-center items-center">
              {/* Image */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                data-aos="fade-up"
              >
                <Image
                  className="max-w-full mx-auto md:max-w-none h-auto"
                  src={FeatImage04}
                  width={540}
                  height={405}
                  alt="Features 04"
                />
              </div>
            </div>

            <div className="flex justify-center items-center">
              {/* Image */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                data-aos="fade-up"
              >
                <Image
                  className="max-w-full mx-auto md:max-w-none h-auto"
                  src={FeatImage05}
                  width={540}
                  height={405}
                  alt="Features 05"
                />
              </div>
            </div>

            <div className="flex justify-center items-center">
              {/* Image */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                data-aos="fade-up"
              >
                <Image
                  className="max-w-full mx-auto md:max-w-none h-auto"
                  src={FeatImage06}
                  width={540}
                  height={405}
                  alt="Features 06"
                />
              </div>
            </div>

            <div className="flex justify-center items-center">
              {/* Image */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                data-aos="fade-up"
              >
                <Image
                  className="max-w-full mx-auto md:max-w-none h-auto"
                  src={FeatImage07}
                  width={540}
                  height={405}
                  alt="Features 07"
                />
              </div>
            </div>

            <div className="flex justify-center items-center">
              {/* Image */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                data-aos="fade-up"
              >
                <Image
                  className="max-w-full mx-auto md:max-w-none h-auto"
                  src={FeatImage08}
                  width={540}
                  height={405}
                  alt="Features 08"
                />
              </div>
            </div>

            {/* 3rd item */}
            <div className="flex justify-center items-center">
              {/* Image */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                data-aos="fade-up"
              >
                <Image
                  className="max-w-full mx-auto md:max-w-none h-auto"
                  src={FeatImage09}
                  width={540}
                  height={405}
                  alt="Features 09"
                />
              </div>
            </div>

            {/* Div Block 10 */}
            <div className="flex justify-center items-center">
              {/* Image */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                data-aos="fade-up"
              >
                <Image
                  className="max-w-full mx-auto md:max-w-none h-auto"
                  src={FeatImage10}
                  width={540}
                  height={405}
                  alt="Features 10"
                />
              </div>
            </div>

            {/* Div Block 11 */}
            <div className="flex justify-center items-center">
              {/* Image */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                data-aos="fade-up"
              >
                <Image
                  className="max-w-full mx-auto md:max-w-none h-auto"
                  src={FeatImage11}
                  width={540}
                  height={405}
                  alt="Features 11"
                />
              </div>
            </div>

            {/* Div Block 12 */}
            <div className="flex justify-center items-center">
              {/* Image */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                data-aos="fade-up"
              >
                <Image
                  className="max-w-full mx-auto md:max-w-none h-auto"
                  src={FeatImage12}
                  width={540}
                  height={405}
                  alt="Features 12"
                />
              </div>
            </div>

            {/* Div Block 13 */}
            <div className="flex justify-center items-center">
              {/* Image */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                data-aos="fade-up"
              >
                <Image
                  className="max-w-full mx-auto md:max-w-none h-auto"
                  src={FeatImage13}
                  width={540}
                  height={405}
                  alt="Features 13"
                />
              </div>
            </div>

            {/* Div Block 14 */}
            <div className="flex justify-center items-center">
              {/* Image */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                data-aos="fade-up"
              >
                <Image
                  className="max-w-full mx-auto md:max-w-none h-auto"
                  src={FeatImage14}
                  width={540}
                  height={405}
                  alt="Features 14"
                />
              </div>
            </div>

            {/* Div Block 15 */}
            <div className="flex justify-center items-center">
              {/* Image */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                data-aos="fade-up"
              >
                <Image
                  className="max-w-full mx-auto md:max-w-none h-auto"
                  src={FeatImage15}
                  width={540}
                  height={405}
                  alt="Features 15"
                />
              </div>
            </div>

            {/* Div Block 16 */}
            <div className="flex justify-center items-center">
              {/* Image */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                data-aos="fade-up"
              >
                <Image
                  className="max-w-full mx-auto md:max-w-none h-auto"
                  src={FeatImage16}
                  width={540}
                  height={405}
                  alt="Features 16"
                />
              </div>
            </div>

            {/* Div Block 17 */}
            <div className="flex justify-center items-center">
              {/* Image */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                data-aos="fade-up"
              >
                <Image
                  className="max-w-full mx-auto md:max-w-none h-auto"
                  src={FeatImage17}
                  width={540}
                  height={405}
                  alt="Features 17"
                />
              </div>
            </div>

            {/* Div Block 18 */}
            <div className="flex justify-center items-center">
              {/* Image */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                data-aos="fade-up"
              >
                <Image
                  className="max-w-full mx-auto md:max-w-none h-auto"
                  src={FeatImage18}
                  width={540}
                  height={405}
                  alt="Features 18"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
