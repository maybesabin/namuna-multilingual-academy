import React from "react";
import { Users, Award, Globe, Star } from "lucide-react";

export default function Achievement() {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-blue-900 mb-4">
            Our Achievements
          </h3>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Recognition and awards that reflect our commitment to educational
            excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-10 h-10 text-white" />
            </div>
            <h4 className="font-bold text-blue-900 text-xl mb-2">
              Blue Ribbon School
            </h4>
            <p className="text-gray-600">
              National recognition for academic excellence
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-10 h-10 text-white" />
            </div>
            <h4 className="font-bold text-blue-900 text-xl mb-2">
              98% Graduation Rate
            </h4>
            <p className="text-gray-600">Consistently high graduation rates</p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="w-10 h-10 text-white" />
            </div>
            <h4 className="font-bold text-blue-900 text-xl mb-2">
              International Recognition
            </h4>
            <p className="text-gray-600">
              Global education partnership programs
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-10 h-10 text-white" />
            </div>
            <h4 className="font-bold text-blue-900 text-xl mb-2">
              Community Impact
            </h4>
            <p className="text-gray-600">
              Outstanding community service programs
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
