import { useState, useEffect } from 'react';
import { Sun, Moon, Briefcase, User, Code, Image, ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const revealEasterEgg = () => {
    setShowEasterEgg(true);
    setTimeout(() => setShowEasterEgg(false), 3000);
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-orange-50 text-gray-900'} transition-colors duration-300`}>
      <header className="fixed top-0 left-0 right-0 z-50 bg-opacity-90 backdrop-blur-sm">
        <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-orange-600">Whats up</h1>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleDarkMode}
            className="rounded-full"
          >
            {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </nav>
      </header>

      <main className="pt-16">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-400 to-pink-500 text-white">
          <div className="text-center">
            <h2 className="text-5xl font-bold mb-4">Welcome to My Sunset World</h2>
            <p className="text-xl mb-8">Discover the beauty of professional design and hidden surprises</p>
            <Button
              onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-orange-500 hover:bg-orange-100"
            >
              Explore More
            </Button>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center text-orange-600">About Me</h2>
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <img src="/placeholder.svg" alt="Profile" className="rounded-full w-64 h-64 mx-auto object-cover border-4 border-orange-400" />
              </div>
              <div className="md:w-1/2">
                <p className="text-lg mb-4">
                  Hey there! I'm a passionate developer and designer with a love for creating beautiful and functional web experiences. My motto? "Whats up" - always staying curious and ready for the next challenge!
                </p>
                <p className="text-lg">
                  With a keen eye for detail and a knack for problem-solving, I bring ideas to life through code and creativity. Let's build something amazing together!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="py-20 bg-orange-100 dark:bg-gray-700">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center text-orange-600">My Portfolio</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <Card key={item} className="overflow-hidden">
                  <img src={`/placeholder.svg`} alt={`Project ${item}`} className="w-full h-48 object-cover" />
                  <CardContent className="p-4">
                    <h3 className="text-xl font-semibold mb-2">Project {item}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      A brief description of this amazing project. Click to learn more!
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center text-orange-600">My Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: <Code className="h-8 w-8 mb-2" />, name: "Web Development" },
                { icon: <Image className="h-8 w-8 mb-2" />, name: "UI/UX Design" },
                { icon: <Briefcase className="h-8 w-8 mb-2" />, name: "Project Management" },
                { icon: <User className="h-8 w-8 mb-2" />, name: "Client Relations" },
              ].map((skill, index) => (
                <div key={index} className="text-center">
                  {skill.icon}
                  <h3 className="font-semibold">{skill.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gradient-to-br from-orange-400 to-pink-500 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
            <p className="text-xl mb-8">Ready to start your next project? Let's talk!</p>
            <Button className="bg-white text-orange-500 hover:bg-orange-100">
              Contact Me
            </Button>
          </div>
        </section>

        {/* Easter Egg */}
        <div
          className="fixed bottom-4 right-4 cursor-pointer"
          onClick={revealEasterEgg}
        >
          <ChevronDown className="h-8 w-8 text-orange-500 animate-bounce" />
        </div>
        {showEasterEgg && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4 text-orange-600">You found the Easter Egg!</h3>
              <p className="text-lg">Congratulations! You're as curious as I am. Let's create something extraordinary together!</p>
            </div>
          </div>
        )}
      </main>

      <footer className="bg-gray-100 dark:bg-gray-900 py-6">
        <div className="container mx-auto px-6 text-center text-gray-600 dark:text-gray-400">
          <p>&copy; 2024 Whats up. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
