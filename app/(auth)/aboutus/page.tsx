export const metadata = {
  title: "About Us",
  description: "Page description",
};

import Footer from "@/components/ui/footer";
import Link from "next/link";

export default function AboutUs() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1">About Us</h1>
          </div>

          <h5 className="h5 py-12">
            M/s Ambey Vaishno Steels Private Limited (formerly engaged in the
            manufacture of basic iron & steel at Kolhapur, Maharashtra) invites
            expressions of interest under Regulation 36A(1) of the Insolvency
            and Bankruptcy Board of India (Insolvency Resolution Process for
            Corporate Persons) Regulations, 2016.
          </h5>

          <h3 className="h3">Corporate Information:</h3>
          <h5 className="h5 py-12">
            Ambey Vaishno Steels Private Limited CIN/LLP No.
            U27109GA2009PTC006107, is a steel manufacturing company that was
            incorporated on 12th June 2009. Our registered office is located at
            505-A, Dempo Trade Centre, Patto Plaza, Panaji, Goa 403001, India.
          </h5>

          <h3 className="h3">Our Assets:</h3>
          <h5 className="h5 py-12">
            The majority of our fixed assets are situated on a land measuring
            8,494 square meters at B-71, Kagal MIDC, in the Karveer sub-district
            of Kolhapur, Maharashtra.
          </h5>

          <h3 className="h3">Installed Capacity and Operations:</h3>
          <h5 className="h5 py-12">
            Presently, our factory is at the dismantled stage, lacking any plant
            and machinery. The structure is in a dilapidated condition, leading
            to a NIL installed capacity. In the last financial year, no main
            products or services were sold.
          </h5>

          <h3 className="h3">Employees and Workforce:</h3>
          <h5 className="h5 py-12">
            As of the current situation, the company does not have any employees
            or workmen.
          </h5>

          <h3 className="h3">Expression of Interest:</h3>
          <h5 className="h5 py-12">
            For parties interested in the resolution process, further details,
            including the last available financial statements (with schedules)
            of the past two years, lists of creditors, and relevant dates for
            subsequent events of the process, are available upon request.
            Eligibility criteria for resolution applicants under Section
            25(2)(h) of the Code can also be obtained through the email address:{" "}
            <a
              href="mailto:ccirp.ambeyvaishno@gmail.com"
              className="text-blue-500 underline"
            >
              cirp.ambeyvaishno@gmail.com
            </a>
          </h5>

          <h3 className="h3">Important Dates:</h3>
          <h5 className="h5 py-12">
            The last date for receipt of expressions of interest is 17th August
            2023. The provisional list of prospective resolution applicants will
            be issued on 28th August 2023, and the last date for submission of
            objections to the provisional list is 2nd September 2023.
          </h5>

          <h3 className="h3">Installed Capacity and Operations:</h3>
          <h5 className="h5 py-12">
            Presently, our factory is at the dismantled stage, lacking any plant
            and machinery. The structure is in a dilapidated condition, leading
            to a NIL installed capacity. In the last financial year, no main
            products or services were sold.
          </h5>

          <h3 className="h3">Contact Details:</h3>
          <h5 className="h5 py-12">
            For submission of expressions of interest or any communication
            regarding the resolution process, <br></br> please reach out to{" "}
            <a
              href="mailto:ccirp.ambeyvaishno@gmail.com"
              className="text-blue-500 underline"
            >
              cirp.ambeyvaishno@gmail.com
            </a>
            <p>
              <br></br><br></br>
              Manoj Kumar Mishra <br></br> Resolution Professional Ambey Vaishno Steels
              Private Limited,<br></br> IP Regn. No.
              IBBI/IPA-001/IP-P01152/2018-2019/11902. <br></br> Room 1406, Building 4B,
              New Hind Mill Mhada Sankul,<br></br> Ram Bhau Bhogle Marg, Ghodapdev,
              Mumbai City, Maharashtra 400033.<br></br><br></br> Communication Address: <br></br> 18, 3rd
              Floor, Dholakwala Building, Fort, Mumbai 400001.
            </p>
          </h5>
        </div>
      </div>
      <Footer />
    </section>
  );
}
