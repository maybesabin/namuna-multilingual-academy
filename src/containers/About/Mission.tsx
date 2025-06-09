import React from "react";
import { Heart, Star, Globe } from "lucide-react";
import Image from "next/image";

export default function Mission() {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-blue-900 mb-6">
              Our Mission
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              dicta eligendi unde sit voluptatibus, quaerat, magni ipsa
              architecto exercitationem quasi quisquam et quidem? Eaque odit
              ipsa corrupti deserunt labore tenetur.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Heart className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-blue-900">
                    Nurturing Environment
                  </h4>
                  <p className="text-gray-600">
                    Creating a safe, supportive space for all learners
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Star className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-blue-900">
                    Excellence in Education
                  </h4>
                  <p className="text-gray-600">
                    Maintaining the highest academic standards
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Globe className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-blue-900">
                    Global Perspective
                  </h4>
                  <p className="text-gray-600">
                    Preparing students for an interconnected world
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/placeholder.svg?height=400&width=500"
              alt="Students in classroom"
              width={500}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
