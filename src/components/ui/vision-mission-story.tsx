import Image from "next/image"
import { Quote } from "lucide-react"

export default function VisionMissionStory() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* Header Section */}
      <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Our Story, Vision, and Values
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Learn about our commitment to excellence, innovation, and the principles that guide our work every day.
          </p>
        </div>

        <div className="relative">
          <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 shadow-sm shadow-black/20">
            <Image
              src="/7.jpg"
              alt="Abstract spiral design representing our vision"
              width={500}
              height={400}
              className="w-full h-full object-cover "
            />
          </div>
          <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center">
            <div className="w-6 h-6 border-2 border-white rounded-full bg-emerald-400"></div>
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <div className="bg-gray-50 rounded-3xl p-8 lg:p-12 mb-16">
        <div className="max-w-4xl">
          <Quote className="w-8 h-8 text-gray-400 mb-6" />
          <blockquote className="text-xl lg:text-2xl text-gray-800 font-medium leading-relaxed mb-8">
            "This university with a global perspective has been established under The Adamas University Act, 2014, of West Bengal.The University envisions becoming a highly respected global institute by imparting socially-relevant education and creating new knowledge through research and innovation for the benefit of industry and society as a whole. Right from inception, we have worked to make the campus vibrant with international collaborations and mentoring by national and international experts."
          </blockquote>
        </div>
      </div>

      {/* Vision and Mission Cards */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white border border-gray-200 rounded-2xl p-8 relative overflow-hidden">
          <div className="absolute top-6 right-6 w-3 h-3 bg-emerald-500 rounded-full"></div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">VISION</h2>
          <p className="text-gray-600 leading-relaxed">
            Graduates of the Department of Computer Science and Software Engineering will be recognized as innovative leaders in the fields of computer science and software engineering. This recognition will come from their work in software development in a myriad of application areas, as well as through their work in advanced study and research.
            The faculty is and will continue to be, known for their passion for teaching and for their knowledge, expertise, and innovation in advancing the frontiers of knowledge in computer science and software engineering.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-8 relative overflow-hidden">
          <div className="absolute top-6 right-6 w-3 h-3 bg-emerald-500 rounded-full"></div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">MISSION</h2>
          <p className="text-gray-600 leading-relaxed">
           Our mission is to teach and prepare liberally educated, articulate, and skilled computer scientists and software engineers for leadership and professional careers and for advanced study.
          The program will serve as a resource to inform society about innovations related to the production and uses of computers and software.
          A central objective of our program is to contribute to society by advancing the fields of computer science and software engineering through innovations in teaching and research, thus enhancing student knowledge through interactive instruction, global engagement, and experiential learning.
          To impart moral and ethical values, and interpersonal skills to the students.
          </p>
        </div>
      </div>

      {/* Additional Story Section */}
      <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-800 rounded-3xl p-8 lg:p-12 text-white">
        <div className="max-w-3xl">
          <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-blue-200">ABOUT US</h3>
          <p className="text-lg leading-relaxed mb-6">
            Department of Computer Science & Engineering prepares students to address the most compelling challenges of the world, backed by sound knowledge, integrity, research, and innovation. The department provides options to the students for specialization in contemporary topics like Artificial Intelligence, Machine Learning, Data Science, Cyber Security and Forensics, Cloud Computing and so on. With state-of-the-art infrastructure, faculty of the highest professional standards, a carefully crafted curriculum, active industry-academia collaborations, and global exposure, we provide students with specialised knowledge and practical skills along with value-added courses to prepare them for life. The department also maintains a specialized research centre on high performance computing.
          </p>
          <p className="text-lg leading-relaxed opacity-90">
The department provides options to the students for specialization in contemporary topics like Artificial Intelligence, Machine Learning, Data Science, Cyber Security and Forensics, Cloud Computing and so on. With state-of-the-art infrastructure, faculty of the highest professional standards, a carefully crafted curriculum, active industry-academia collaborations, and global exposure, we provide students with specialised knowledge and practical skills along with value-added courses to prepare them for life. The department also maintains a specialized research centre on high performance computing.
          </p>
        </div>
      </div>
    </div>
  )
}
