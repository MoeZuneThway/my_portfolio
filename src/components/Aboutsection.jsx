import { Briefcase, Code, User } from "lucide-react";
import React from "react";

const Aboutsection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE */}
          <div className="space-y-6 flex flex-col items-center">

            {/* 🔥 Animated Glowing Border */}
            <div className="relative p-3 rounded-xl animate-float ">
              {/* Glow Ring */}
              <div className="absolute inset-0 rounded-xl 
                glow-ring animate-glow">
              </div>
              {/* Inner Border + Image */}
              <div className="relative   p-3 ">
                <img
                  src="./profile.png"
                  alt="Profile"
                  className="rounded-xl w-56 h-56 md:w-64 md:h-64 object-cover shadow-xl animate-pulse-subtle"
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="./public/Moe_Zune_Thway_Software_Developer_CV_with_Lines.docx" download target="_blank"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/20 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10">
                  <Code className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive websites and web apps with modern technologies
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10">
                  <User className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Highlight Achievement</h4>
                  <p className="text-muted-foreground">
                    Achieved a perfect score (100%) in the full-stack development module.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10">
                  <Briefcase className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Collaboration</h4>
                  <p className="text-muted-foreground">
                    Highly adaptable and collaborative, adept at Jira, Git, and managing workflows.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Aboutsection;
