export const metadata = {
    title: 'Contact Us',
    description: 'Page description',
  }
  
import Footer from '@/components/ui/footer'
  import Link from 'next/link'
  
  export default function ContactUs() {
    return (
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            {/* Page header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h1 className="h1">M/s Ambey Vaishno Steels Private Limited</h1>
            </div>

            {/* Address */}
            <div className="max-w-sm mx-auto">
              <div className="flex flex-wrap -mx-3">
                <div className="w-full px-3">
                  <div className="btn px-0 text-white bg-red-600 hover:bg-red-700 w-full relative flex items-center">
                    <span className="h-6 flex items-center border-r border-white border-opacity-25 mr-4">
                      REGISTERED OFFICE
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center my-6">
                <div className="text-gray-400 text-center mx-auto">
                  M/s Ambey Vaishno Steels Pvt. Ltd. <br />
                  505-A, Dempo Trade Centre, <br />
                  Patto Plaza, Panaji, Goa 403001, India.
                </div>
              </div>

              <div className="flex flex-wrap -mx-3">
                <div className="w-full px-3">
                  <div className="btn text-white bg-purple-600 hover:bg-purple-700 w-full">
                    <span className="h-6 flex items-center border-r border-white border-opacity-25 mr-4">
                      FACTORY ADDRESS
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center my-6">
                <div className="text-gray-400 text-center mx-auto">
                  M/s Ambey Vaishno Steels Pvt. Ltd. <br />
                  B-71, Kagal MIDC, <br />
                  in the Karveer sub-district <br />
                  of Kolhapur, Maharashtra.
                </div>
              </div>

              <div className="text-center">
                <p className="text-xl mb-4 mt-8">
                  Contact us at{" "}
                  <a
                    href="mailto:ccirp.ambeyvaishno@gmail.com"
                    className="text-blue-500 underline"
                  >
                    cirp.ambeyvaishno@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    );
  }
  