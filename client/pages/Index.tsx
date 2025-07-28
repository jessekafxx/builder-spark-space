import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Index() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#f2f1ee] font-sans">
      {/* Navigation */}
      <nav className={cn(
        "fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-4xl px-4 transition-all duration-300",
        isScrolled && "top-4"
      )}>
        <div className="flex items-center justify-between bg-white rounded-xl px-4 py-3 shadow-[0_0.602px_-1.25px_rgba(0,0,0,0.18),0_2.289px_-2.5px_rgba(0,0,0,0.16),0_10px_-3.75px_rgba(0,0,0,0.06)]">
          <div className="flex items-center gap-4">
            <div className="w-9 h-9 flex items-center justify-center">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M11.395 0.464844H23.66C25.183 0.464844 26.44 0.464844 27.464 0.547844C28.527 0.634844 29.504 0.821844 30.423 1.28984C31.8469 2.01533 33.0045 3.17297 33.73 4.59684C34.198 5.51484 34.384 6.49284 34.471 7.55684C34.555 8.57984 34.555 9.83684 34.555 11.3598V17.9478C34.555 19.4708 34.555 20.7278 34.471 21.7508C34.384 22.8148 34.198 23.7918 33.731 24.7108C33.0053 26.1349 31.8472 27.2925 30.423 28.0178C29.505 28.4858 28.527 28.6718 27.463 28.7578C26.44 28.8428 25.183 28.8428 23.66 28.8428H23.263L17.528 35.5348L11.793 28.8428H11.396C9.872 28.8428 8.616 28.8428 7.592 28.7588C6.528 28.6718 5.551 28.4858 4.632 28.0178C3.20797 27.2921 2.05031 26.1341 1.325 24.7098C0.857 23.7918 0.671 22.8148 0.584 21.7508C0.5 20.7268 0.5 19.4708 0.5 17.9478V11.3598C0.5 9.83684 0.5 8.57984 0.584 7.55584C0.671 6.49284 0.857 5.51584 1.325 4.59584C2.05071 3.17238 3.20832 2.01512 4.632 1.28984C5.551 0.821844 6.528 0.634844 7.592 0.547844C8.616 0.464844 9.872 0.464844 11.395 0.464844ZM7.9 4.31984C7.07 4.38684 6.646 4.50984 6.35 4.66084C5.63819 5.02383 5.05955 5.60282 4.697 6.31484C4.546 6.61084 4.423 7.03484 4.355 7.86484C4.285 8.71484 4.285 9.81684 4.285 11.4378V17.8688C4.285 19.4898 4.285 20.5918 4.355 21.4428C4.423 22.2728 4.545 22.6968 4.697 22.9928C5.059 23.7048 5.638 24.2828 6.35 24.6458C6.646 24.7968 7.07 24.9198 7.9 24.9878C8.751 25.0578 9.853 25.0578 11.473 25.0578H13.533L17.528 29.7198L21.522 25.0588H23.582C25.202 25.0588 26.304 25.0568 27.156 24.9878C27.985 24.9198 28.409 24.7978 28.706 24.6458C29.4177 24.2831 29.9963 23.7045 30.359 22.9928C30.509 22.6968 30.632 22.2728 30.7 21.4428C30.77 20.5918 30.771 19.4898 30.771 17.8688V11.4378C30.771 9.81784 30.77 8.71584 30.701 7.86384C30.632 7.03384 30.509 6.61084 30.359 6.31384C29.996 5.60204 29.417 5.0234 28.705 4.66084C28.409 4.51084 27.985 4.38684 27.155 4.31984C26.304 4.24984 25.202 4.24884 23.582 4.24884H11.473C9.853 4.24884 8.751 4.24984 7.9 4.31884V4.31984ZM11.852 7.24884L18.312 13.7088L11.852 20.1678L9.176 17.4918L12.96 13.7078L9.176 9.92384L11.852 7.24884ZM17.528 17.4918H25.095V21.2758H17.528V17.4918Z" fill="black"/>
              </svg>
            </div>
            <div className="w-px h-5 bg-gray-200"></div>
            <div className={cn(
              "hidden md:flex items-center gap-6",
              isMenuOpen && "md:hidden"
            )}>
              <button onClick={() => scrollToSection('curriculum')} className="text-black text-sm font-normal hover:text-[#ff6f00] transition-colors">Curriculum</button>
              <button onClick={() => scrollToSection('reviews')} className="text-black text-sm font-normal hover:text-[#ff6f00] transition-colors">Reviews</button>
              <button onClick={() => scrollToSection('pricing')} className="text-black text-sm font-normal hover:text-[#ff6f00] transition-colors">Pricing</button>
              <button onClick={() => scrollToSection('why-us')} className="text-black text-sm font-normal hover:text-[#ff6f00] transition-colors">Why us</button>
              <button onClick={() => scrollToSection('faqs')} className="text-black text-sm font-normal hover:text-[#ff6f00] transition-colors">FAQs</button>
            </div>
          </div>
          
          <Button 
            onClick={() => scrollToSection('pricing')}
            className="hidden md:flex bg-[#ff6f00] hover:bg-[#ff6f00]/90 text-white rounded-lg px-6 py-3 shadow-[0_10px_0_rgba(255,111,0,0.10)_inset,0_-4px_8px_rgba(255,111,0,0.20)_inset] hover:transform hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(255,111,0,0.4)] transition-all duration-300"
          >
            Enroll now for $499
            <div className="w-10 h-9 flex items-center justify-center bg-white rounded-md ml-4">
              <svg width="16" height="14" viewBox="0 0 17 14" fill="none">
                <path d="M0.97998 6V8H12.98V10H14.98V8H16.98V6H14.98V4H12.98V6H0.97998ZM10.98 2H12.98V4H10.98V2ZM10.98 2H8.97998V0H10.98V2ZM10.98 12H12.98V10H10.98V12ZM10.98 12H8.97998V14H10.98V12Z" fill="#FF6F00"/>
              </svg>
            </div>
          </Button>

          <button
            onClick={toggleMenu}
            className="md:hidden text-2xl"
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 bg-white rounded-xl p-4 shadow-lg">
            <div className="flex flex-col gap-3">
              <button onClick={() => scrollToSection('curriculum')} className="text-black text-sm font-normal text-left hover:text-[#ff6f00] transition-colors">Curriculum</button>
              <button onClick={() => scrollToSection('reviews')} className="text-black text-sm font-normal text-left hover:text-[#ff6f00] transition-colors">Reviews</button>
              <button onClick={() => scrollToSection('pricing')} className="text-black text-sm font-normal text-left hover:text-[#ff6f00] transition-colors">Pricing</button>
              <button onClick={() => scrollToSection('why-us')} className="text-black text-sm font-normal text-left hover:text-[#ff6f00] transition-colors">Why us</button>
              <button onClick={() => scrollToSection('faqs')} className="text-black text-sm font-normal text-left hover:text-[#ff6f00] transition-colors">FAQs</button>
              <Button 
                onClick={() => scrollToSection('pricing')}
                className="mt-3 bg-[#ff6f00] hover:bg-[#ff6f00]/90 text-white rounded-lg"
              >
                Enroll now for $499
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="bg-white pt-24 pb-32 mt-20 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-5 right-[10%] w-10 h-10 rounded-full bg-gradient-to-br from-[#ff6f00] to-[#ffb74d] opacity-80"></div>
        <div className="absolute left-[5%] top-1/2 w-5 h-5 rounded-full bg-gradient-to-br from-[#4caf50] to-[#81c784] opacity-60"></div>
        <div className="absolute bottom-5 right-[15%] w-8 h-8 rounded-full bg-gradient-to-br from-[#2196f3] to-[#64b5f6] opacity-70"></div>

        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="inline-block bg-[#ff6f00]/10 rounded-full px-4 py-2 mb-8">
            <span className="text-[#ff6f00] text-sm font-medium">Registrations Ongoing!</span>
          </div>

          <div className="flex justify-center items-center gap-4 mb-8">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#ff6f00] to-[#ffb74d] border-3 border-white shadow-lg"></div>
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#4caf50] to-[#81c784] border-4 border-white shadow-xl z-10"></div>
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#2196f3] to-[#64b5f6] border-3 border-white shadow-lg"></div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-black">
            <span>Master AI for </span>
            <span className="text-[#ff6f00]">Viral TikTok</span>
            <span> Content Creation</span>
          </h1>

          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Learn the exact Custom GPT system used by top creators to generate viral TikTok content that gets millions of views and builds massive followings.
          </p>

          <div className="relative inline-block mb-12">
            <span className="text-gray-500 text-base transform -rotate-3 inline-block font-handwriting">
              Join 5,000+ creators already dominating TikTok
            </span>
            <div className="absolute -top-5 -right-8 w-10 h-10 bg-[url('data:image/svg+xml,%3csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22%23FF6F00%22%3e%3cpath d=%22M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z%22/%3e%3c/svg%3e')] bg-no-repeat bg-center bg-contain"></div>
          </div>

          <Button 
            onClick={() => scrollToSection('pricing')}
            className="bg-[#ff6f00] hover:bg-[#ff6f00]/90 text-white text-lg font-semibold px-8 py-4 rounded-xl shadow-[0_8px_25px_rgba(255,111,0,0.3)] hover:transform hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(255,111,0,0.4)] transition-all duration-300 mb-12"
          >
            Get Instant Access - Save $200 Today
          </Button>

          {/* Feature Grid */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-[#ff6f00]/5 rounded-2xl p-6 text-center">
              <div className="w-15 h-15 bg-[#ff6f00] rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-black">30-Day Intensive Training</h3>
              <p className="text-gray-600 text-sm">Complete system from beginner to viral creator</p>
            </div>
            
            <div className="bg-[#4caf50]/5 rounded-2xl p-6 text-center">
              <div className="w-15 h-15 bg-[#4caf50] rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-black">Proven Results System</h3>
              <p className="text-gray-600 text-sm">Students average 100K+ views within 30 days</p>
            </div>
            
            <div className="bg-[#2196f3]/5 rounded-2xl p-6 text-center">
              <div className="w-15 h-15 bg-[#2196f3] rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-black">Lifetime Access & Updates</h3>
              <p className="text-gray-600 text-sm">Always stay ahead with the latest AI techniques</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#f2f1ee]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[#ff6f00] mb-2">5,000+</div>
              <div className="text-gray-600">Students Enrolled</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#ff6f00] mb-2">50M+</div>
              <div className="text-gray-600">Views Generated</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#ff6f00] mb-2">92%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#ff6f00] mb-2">$2.3M+</div>
              <div className="text-gray-600">Student Revenue</div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section id="curriculum" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Complete AI TikTok Mastery Curriculum</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to create viral content using cutting-edge AI technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-[#ff6f00] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">1</div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">AI Fundamentals for Content Creation</h3>
                  <p className="text-gray-600">Master the basics of AI and how it applies to viral content creation</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-[#ff6f00] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">2</div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Custom GPT Development</h3>
                  <p className="text-gray-600">Build your own specialized GPT for TikTok content generation</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-[#ff6f00] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">3</div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Viral Content Frameworks</h3>
                  <p className="text-gray-600">Learn the psychological triggers that make content go viral</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-[#ff6f00] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">4</div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Algorithm Optimization</h3>
                  <p className="text-gray-600">Understand and exploit TikTok's algorithm for maximum reach</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-[#ff6f00] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">5</div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Content Production Pipeline</h3>
                  <p className="text-gray-600">Streamline your content creation process with AI automation</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-[#ff6f00] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">6</div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Trend Analysis & Prediction</h3>
                  <p className="text-gray-600">Use AI to identify and capitalize on emerging trends</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-[#ff6f00] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">7</div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Monetization Strategies</h3>
                  <p className="text-gray-600">Turn your viral content into sustainable income streams</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-[#ff6f00] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">8</div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Advanced AI Techniques</h3>
                  <p className="text-gray-600">Cutting-edge methods used by top creators</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-[#f2f1ee]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Why This Course Changes Everything</h2>
            <p className="text-lg text-gray-600">
              The difference between struggling creators and viral sensations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-[#ff6f00] rounded-2xl flex items-center justify-center mb-6">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
                  <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">10x Faster Content Creation</h3>
              <p className="text-gray-600">What used to take hours now takes minutes. Create weeks of content in a single session.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-[#4caf50] rounded-2xl flex items-center justify-center mb-6">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
                  <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Guaranteed Viral Results</h3>
              <p className="text-gray-600">Our AI system is trained on millions of viral videos to predict what will perform.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-[#2196f3] rounded-2xl flex items-center justify-center mb-6">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Zero Creative Block</h3>
              <p className="text-gray-600">Never run out of ideas again. Get unlimited fresh content concepts on-demand.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="reviews" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Real Results from Real Students</h2>
            <p className="text-lg text-gray-600">
              See how our students transformed their TikTok presence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#f8f9fa] rounded-2xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#ff6f00] to-[#ffb74d] rounded-full"></div>
                <div className="ml-3">
                  <h4 className="font-semibold">Sarah Chen</h4>
                  <p className="text-sm text-gray-600">@sarahcreatess • 2.3M followers</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <p className="text-gray-700">"Went from 50K to 2.3M followers in 6 months using the AI system. My content creation time went from 8 hours to 30 minutes per day!"</p>
            </div>

            <div className="bg-[#f8f9fa] rounded-2xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#4caf50] to-[#81c784] rounded-full"></div>
                <div className="ml-3">
                  <h4 className="font-semibold">Marcus Johnson</h4>
                  <p className="text-sm text-gray-600">@marcusvibes • 1.8M followers</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <p className="text-gray-700">"Made $85K in my first month after implementing the monetization strategies. This course literally changed my life!"</p>
            </div>

            <div className="bg-[#f8f9fa] rounded-2xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#2196f3] to-[#64b5f6] rounded-full"></div>
                <div className="ml-3">
                  <h4 className="font-semibold">Emma Rodriguez</h4>
                  <p className="text-sm text-gray-600">@emmacreates • 950K followers</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <p className="text-gray-700">"The Custom GPT system is incredible. I've had 15 videos go viral in the past month - my engagement rate increased by 400%!"</p>
            </div>
          </div>
        </div>
      </section>

      {/* Instructor Section */}
      <section className="py-20 bg-[#f2f1ee]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">Meet Your AI TikTok Mentor</h2>
              <p className="text-lg text-gray-600 mb-6">
                Alex Thompson is a former TikTok algorithm engineer who discovered the secret patterns that make content go viral. After helping over 100 creators reach millions of followers, he's now sharing his complete AI system.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-[#ff6f00] rounded-full flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                  </div>
                  <span className="text-gray-700">Former TikTok Algorithm Engineer</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-[#ff6f00] rounded-full flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                  </div>
                  <span className="text-gray-700">500M+ Total Views Generated</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-[#ff6f00] rounded-full flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                  </div>
                  <span className="text-gray-700">AI Specialist & Content Creator</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-[#ff6f00] to-[#ffb74d] rounded-2xl"></div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-white rounded-2xl shadow-lg flex items-center justify-center">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="#ff6f00">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bonus Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Exclusive Bonuses Worth $2,000</h2>
            <p className="text-lg text-gray-600">
              Get these premium resources absolutely free when you enroll today
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="border-2 border-[#ff6f00] rounded-2xl p-6 relative">
              <div className="absolute -top-3 left-6 bg-[#ff6f00] text-white px-3 py-1 rounded-full text-sm font-bold">
                BONUS #1
              </div>
              <h3 className="text-xl font-bold mb-3 mt-2">Custom GPT Templates</h3>
              <p className="text-gray-600 mb-4">50+ proven GPT prompts for different content types</p>
              <div className="text-2xl font-bold text-[#ff6f00]">Value: $497</div>
            </div>

            <div className="border-2 border-[#4caf50] rounded-2xl p-6 relative">
              <div className="absolute -top-3 left-6 bg-[#4caf50] text-white px-3 py-1 rounded-full text-sm font-bold">
                BONUS #2
              </div>
              <h3 className="text-xl font-bold mb-3 mt-2">Viral Video Database</h3>
              <p className="text-gray-600 mb-4">Access to 10,000+ viral videos with AI analysis</p>
              <div className="text-2xl font-bold text-[#4caf50]">Value: $697</div>
            </div>

            <div className="border-2 border-[#2196f3] rounded-2xl p-6 relative">
              <div className="absolute -top-3 left-6 bg-[#2196f3] text-white px-3 py-1 rounded-full text-sm font-bold">
                BONUS #3
              </div>
              <h3 className="text-xl font-bold mb-3 mt-2">Private Community</h3>
              <p className="text-gray-600 mb-4">Exclusive Discord with 5,000+ creators</p>
              <div className="text-2xl font-bold text-[#2196f3]">Value: $297</div>
            </div>

            <div className="border-2 border-[#9c27b0] rounded-2xl p-6 relative">
              <div className="absolute -top-3 left-6 bg-[#9c27b0] text-white px-3 py-1 rounded-full text-sm font-bold">
                BONUS #4
              </div>
              <h3 className="text-xl font-bold mb-3 mt-2">Weekly Live Calls</h3>
              <p className="text-gray-600 mb-4">Direct access to Alex for Q&A sessions</p>
              <div className="text-2xl font-bold text-[#9c27b0]">Value: $297</div>
            </div>

            <div className="border-2 border-[#ff5722] rounded-2xl p-6 relative">
              <div className="absolute -top-3 left-6 bg-[#ff5722] text-white px-3 py-1 rounded-full text-sm font-bold">
                BONUS #5
              </div>
              <h3 className="text-xl font-bold mb-3 mt-2">Automation Tools</h3>
              <p className="text-gray-600 mb-4">Scripts to automate your entire workflow</p>
              <div className="text-2xl font-bold text-[#ff5722]">Value: $197</div>
            </div>

            <div className="border-2 border-[#795548] rounded-2xl p-6 relative">
              <div className="absolute -top-3 left-6 bg-[#795548] text-white px-3 py-1 rounded-full text-sm font-bold">
                BONUS #6
              </div>
              <h3 className="text-xl font-bold mb-3 mt-2">Monetization Blueprint</h3>
              <p className="text-gray-600 mb-4">Step-by-step guide to making $10K/month</p>
              <div className="text-2xl font-bold text-[#795548]">Value: $397</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-[#f2f1ee]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">Choose Your Path to Viral Success</h2>
          <p className="text-lg text-gray-600 mb-12">
            Join thousands of creators who are already dominating TikTok with AI
          </p>

          <div className="bg-white rounded-3xl p-8 shadow-2xl border-4 border-[#ff6f00] relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#ff6f00] text-white px-6 py-2 rounded-full font-bold">
              MOST POPULAR
            </div>
            
            <h3 className="text-2xl font-bold mb-4 mt-4">AI TikTok Mastery Complete</h3>
            
            <div className="mb-6">
              <div className="text-gray-500 line-through text-lg">Regular Price: $699</div>
              <div className="text-5xl font-bold text-[#ff6f00] mb-2">$499</div>
              <div className="text-gray-600">One-time payment • Lifetime access</div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8 text-left">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[#ff6f00]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>Complete AI TikTok System</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[#ff6f00]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>Custom GPT Templates</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[#ff6f00]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>Viral Video Database</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[#ff6f00]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>Private Discord Community</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[#ff6f00]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>Weekly Live Coaching</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[#ff6f00]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>Automation Tools & Scripts</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[#ff6f00]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>Monetization Blueprint</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[#ff6f00]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>Lifetime Updates</span>
                </div>
              </div>
            </div>

            <Button className="bg-[#ff6f00] hover:bg-[#ff6f00]/90 text-white text-xl font-bold px-12 py-4 rounded-xl shadow-[0_8px_25px_rgba(255,111,0,0.3)] hover:transform hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(255,111,0,0.4)] transition-all duration-300 w-full mb-4">
              Get Instant Access Now - Save $200
            </Button>
            
            <p className="text-sm text-gray-600">30-day money-back guarantee • Secure payment</p>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-gradient-to-br from-[#ff6f00]/10 to-[#ffb74d]/10 rounded-3xl p-12">
            <div className="w-24 h-24 bg-[#ff6f00] rounded-full flex items-center justify-center mx-auto mb-6">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="white">
                <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11.5C15.4,11.9 16,12.4 16,13V16C16,17.1 15.1,18 14,18H10C8.9,18 8,17.1 8,16V13C8,12.4 8.4,11.9 9,11.5V10C9,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.2,9.2 10.2,10V11.5H13.8V10C13.8,9.2 12.8,8.2 12,8.2Z"/>
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">100% Risk-Free Guarantee</h2>
            <p className="text-lg text-gray-600 mb-6">
              We're so confident in our AI TikTok system that we offer a full 30-day money-back guarantee. If you don't see results or aren't completely satisfied, get every penny back.
            </p>
            <div className="text-[#ff6f00] font-bold text-xl">
              No Questions Asked • Full Refund • Your Success is Guaranteed
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faqs" className="py-20 bg-[#f2f1ee]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">
              Everything you need to know about the course
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6">
              <h3 className="text-lg font-bold mb-3">How quickly will I see results?</h3>
              <p className="text-gray-600">Most students see their first viral video within 7-14 days of implementing our AI system. The key is consistency and following the exact frameworks we teach.</p>
            </div>

            <div className="bg-white rounded-2xl p-6">
              <h3 className="text-lg font-bold mb-3">Do I need any prior AI experience?</h3>
              <p className="text-gray-600">Absolutely not! Our course is designed for complete beginners. We start with the basics and gradually build up to advanced techniques. No coding or technical skills required.</p>
            </div>

            <div className="bg-white rounded-2xl p-6">
              <h3 className="text-lg font-bold mb-3">What if I'm in a competitive niche?</h3>
              <p className="text-gray-600">Our AI system works in ANY niche. We'll show you how to find unique angles and untapped opportunities even in the most saturated markets.</p>
            </div>

            <div className="bg-white rounded-2xl p-6">
              <h3 className="text-lg font-bold mb-3">How much time do I need to invest daily?</h3>
              <p className="text-gray-600">With our AI automation system, you can create viral content in just 30 minutes per day. We'll show you how to batch create weeks of content in a single session.</p>
            </div>

            <div className="bg-white rounded-2xl p-6">
              <h3 className="text-lg font-bold mb-3">Is this just theory or do you show real examples?</h3>
              <p className="text-gray-600">This is 100% practical. You'll get access to our database of 10,000+ viral videos, real case studies, and step-by-step implementation guides.</p>
            </div>

            <div className="bg-white rounded-2xl p-6">
              <h3 className="text-lg font-bold mb-3">What if TikTok changes their algorithm?</h3>
              <p className="text-gray-600">Our system is built on fundamental psychological principles that transcend algorithm changes. Plus, you get lifetime updates to stay ahead of any platform changes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="why-us" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Why Choose AI TikTok Mastery?</h2>
            <p className="text-lg text-gray-600">
              The difference between us and everyone else
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-red-600">Other Courses</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                    </svg>
                  </div>
                  <span className="text-gray-700">Generic content strategies</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                    </svg>
                  </div>
                  <span className="text-gray-700">Outdated techniques</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                    </svg>
                  </div>
                  <span className="text-gray-700">No real support</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                    </svg>
                  </div>
                  <span className="text-gray-700">Theory-based learning</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                    </svg>
                  </div>
                  <span className="text-gray-700">No AI integration</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-[#ff6f00]">AI TikTok Mastery</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-[#ff6f00] rounded-full flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                  </div>
                  <span className="text-gray-700">AI-powered custom strategies</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-[#ff6f00] rounded-full flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                  </div>
                  <span className="text-gray-700">Cutting-edge 2024 methods</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-[#ff6f00] rounded-full flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                  </div>
                  <span className="text-gray-700">Direct access to instructor</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-[#ff6f00] rounded-full flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                  </div>
                  <span className="text-gray-700">Hands-on implementation</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-[#ff6f00] rounded-full flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                  </div>
                  <span className="text-gray-700">Complete AI automation system</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#ff6f00] to-[#ffb74d] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Don't Let This Opportunity Slip Away</h2>
          <p className="text-lg mb-8 opacity-90">
            While you're reading this, thousands of creators are already using AI to dominate TikTok. Every day you wait is another day your competitors get ahead.
          </p>
          
          <div className="bg-white/10 rounded-2xl p-6 mb-8">
            <div className="text-2xl font-bold mb-2">⏰ Limited Time Offer</div>
            <div className="text-lg">Price increases to $699 in 48 hours</div>
          </div>

          <Button 
            onClick={() => scrollToSection('pricing')}
            className="bg-white text-[#ff6f00] hover:bg-gray-100 text-xl font-bold px-12 py-4 rounded-xl shadow-lg hover:transform hover:-translate-y-1 transition-all duration-300 mb-4"
          >
            Secure Your Spot Now - $499
          </Button>
          
          <p className="text-sm opacity-75">Join 5,000+ creators already crushing it with AI</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#e9e7e2] py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M11.395 0.464844H23.66C25.183 0.464844 26.44 0.464844 27.464 0.547844C28.527 0.634844 29.504 0.821844 30.423 1.28984C31.8469 2.01533 33.0045 3.17297 33.73 4.59684C34.198 5.51484 34.384 6.49284 34.471 7.55684C34.555 8.57984 34.555 9.83684 34.555 11.3598V17.9478C34.555 19.4708 34.555 20.7278 34.471 21.7508C34.384 22.8148 34.198 23.7918 33.731 24.7108C33.0053 26.1349 31.8472 27.2925 30.423 28.0178C29.505 28.4858 28.527 28.6718 27.463 28.7578C26.44 28.8428 25.183 28.8428 23.66 28.8428H23.263L17.528 35.5348L11.793 28.8428H11.396C9.872 28.8428 8.616 28.8428 7.592 28.7588C6.528 28.6718 5.551 28.4858 4.632 28.0178C3.20797 27.2921 2.05031 26.1341 1.325 24.7098C0.857 23.7918 0.671 22.8148 0.584 21.7508C0.5 20.7268 0.5 19.4708 0.5 17.9478V11.3598C0.5 9.83684 0.5 8.57984 0.584 7.55584C0.671 6.49284 0.857 5.51584 1.325 4.59584C2.05071 3.17238 3.20832 2.01512 4.632 1.28984C5.551 0.821844 6.528 0.634844 7.592 0.547844C8.616 0.464844 9.872 0.464844 11.395 0.464844ZM7.9 4.31984C7.07 4.38684 6.646 4.50984 6.35 4.66084C5.63819 5.02383 5.05955 5.60282 4.697 6.31484C4.546 6.61084 4.423 7.03484 4.355 7.86484C4.285 8.71484 4.285 9.81684 4.285 11.4378V17.8688C4.285 19.4898 4.285 20.5918 4.355 21.4428C4.423 22.2728 4.545 22.6968 4.697 22.9928C5.059 23.7048 5.638 24.2828 6.35 24.6458C6.646 24.7968 7.07 24.9198 7.9 24.9878C8.751 25.0578 9.853 25.0578 11.473 25.0578H13.533L17.528 29.7198L21.522 25.0588H23.582C25.202 25.0588 26.304 25.0568 27.156 24.9878C27.985 24.9198 28.409 24.7978 28.706 24.6458C29.4177 24.2831 29.9963 23.7045 30.359 22.9928C30.509 22.6968 30.632 22.2728 30.7 21.4428C30.77 20.5918 30.771 19.4898 30.771 17.8688V11.4378C30.771 9.81784 30.77 8.71584 30.701 7.86384C30.632 7.03384 30.509 6.61084 30.359 6.31384C29.996 5.60204 29.417 5.0234 28.705 4.66084C28.409 4.51084 27.985 4.38684 27.155 4.31984C26.304 4.24984 25.202 4.24884 23.582 4.24884H11.473C9.853 4.24884 8.751 4.24984 7.9 4.31884V4.31984ZM11.852 7.24884L18.312 13.7088L11.852 20.1678L9.176 17.4918L12.96 13.7078L9.176 9.92384L11.852 7.24884ZM17.528 17.4918H25.095V21.2758H17.528V17.4918Z" fill="black"/>
                </svg>
                <div className="text-black font-bold text-xl">AI TikTok Mastery</div>
              </div>
              <p className="text-gray-600 mb-6 max-w-md">
                Learn the skill that turns everyday AI into extraordinary TikTok results. Join thousands of creators already dominating the platform.
              </p>
              <div className="flex gap-4">
                {[
                  { color: '#FF0000', icon: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' },
                  { color: '#1DA1F2', icon: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' },
                  { color: '#0077B5', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
                  { color: '#E4405F', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' }
                ].map((social, i) => (
                  <div key={i} className="w-10 h-10 bg-white rounded-lg flex items-center justify-center cursor-pointer hover:transform hover:-translate-y-1 transition-all">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill={social.color}>
                      <path d={social.icon}/>
                    </svg>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-semibold mb-4 text-black">Links</h4>
                <div className="space-y-3">
                  <button onClick={() => scrollToSection('curriculum')} className="block text-gray-600 text-sm hover:text-[#ff6f00] transition-colors">Curriculum</button>
                  <button onClick={() => scrollToSection('pricing')} className="block text-gray-600 text-sm hover:text-[#ff6f00] transition-colors">Pricing</button>
                  <button onClick={() => scrollToSection('reviews')} className="block text-gray-600 text-sm hover:text-[#ff6f00] transition-colors">Testimonials</button>
                  <button onClick={() => scrollToSection('faqs')} className="block text-gray-600 text-sm hover:text-[#ff6f00] transition-colors">FAQs</button>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4 text-black">Legal</h4>
                <div className="space-y-3">
                  <a href="#terms" className="block text-gray-600 text-sm hover:text-[#ff6f00] transition-colors">Terms of Service</a>
                  <a href="#privacy" className="block text-gray-600 text-sm hover:text-[#ff6f00] transition-colors">Privacy Policy</a>
                  <a href="#refund" className="block text-gray-600 text-sm hover:text-[#ff6f00] transition-colors">Refund Policy</a>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4 text-black">Contact</h4>
                <div className="space-y-4">
                  <div>
                    <a href="mailto:support@aitiktokmastery.com" className="text-blue-600 text-sm hover:underline">support@aitiktokmastery.com</a>
                    <p className="text-gray-600 text-xs mt-1">For all your questions</p>
                  </div>
                  <div>
                    <a href="tel:+1-555-0123" className="text-blue-600 text-sm hover:underline">+1 (555) 012-3456</a>
                    <p className="text-gray-600 text-xs mt-1">9am-8pm ET, Mon-Fri</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-300 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <span className="text-gray-600 text-sm">© 2024 AI TikTok Mastery.</span>
            <span className="text-gray-600 text-sm">All Rights Reserved.</span>
          </div>
        </div>
      </footer>

      {/* Get Template Button */}
      <div className="fixed bottom-5 right-5 z-50">
        <div className="bg-white rounded-xl p-3 shadow-lg cursor-pointer hover:transform hover:-translate-y-1 transition-all">
          <div className="flex items-center gap-3">
            <svg width="11" height="16" viewBox="0 0 12 17" fill="none">
              <path d="M11.5 0.46875V5.80175H6L0.5 0.46875H11.5ZM0.5 5.80175H6L11.5 11.1357H6V16.4688L0.5 11.1357V5.80175Z" fill="#222222"/>
            </svg>
            <span className="text-xs text-black font-medium">Get this template</span>
          </div>
        </div>
      </div>
    </div>
  );
}
