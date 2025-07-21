import React from 'react';
import { Award, Target, Heart, Users } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Our Mission',
      description: 'To empower individuals to achieve their fitness goals through expert guidance, state-of-the-art facilities, and a supportive community.'
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Our Passion',
      description: 'We believe fitness is not just about physical transformation, but about building confidence, discipline, and a healthier lifestyle.'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Our Excellence',
      description: 'Committed to providing the highest quality equipment, training, and facilities to ensure you reach your peak performance.'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Our Community',
      description: 'Creating an inclusive environment where everyone feels welcome, supported, and motivated to achieve their best.'
    }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Head Trainer & Founder',
      image: 'https://images.pexels.com/photos/3823207/pexels-photo-3823207.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: '10+ years of experience in fitness training and nutrition'
    },
    {
      name: 'Mike Rodriguez',
      role: 'Strength & Conditioning Coach',
      image: 'https://images.pexels.com/photos/3490348/pexels-photo-3490348.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'Former professional athlete with expertise in performance training'
    },
    {
      name: 'Emily Chen',
      role: 'Yoga & Wellness Instructor',
      image: 'https://images.pexels.com/photos/3823322/pexels-photo-3823322.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'Certified yoga instructor specializing in mindfulness and flexibility'
    }
  ];

  return (
    <div className="min-h-screen bg-[#1a2a24] pt-16">
      {/* Hero Section */}
      <section className="relative py-28 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1200&h=800)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Course Creation
          </h1>
          <p className="text-xl text-gray-200 mb-8">Expert Tips</p>
         
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-[#21332a]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Our Story</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                FitZone was born from a simple belief: everyone deserves access to 
                world-class fitness facilities and expert guidance. Our founder, 
                Sarah Johnson, started this journey in a small space with just a 
                few pieces of equipment and a big vision.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Today, we've grown into a premier fitness destination, but our 
                core values remain the same: creating an inclusive, supportive 
                environment where every member can thrive and achieve their goals.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#d98e38] mb-2">5000+</div>
                  <div className="text-gray-400">Happy Members</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#d98e38] mb-2">8</div>
                  <div className="text-gray-400">Years of Excellence</div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/3253501/pexels-photo-3253501.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Gym interior"
                className="w-full h-96 object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-[#1a2a24]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Our Values</h2>
          <p className="text-xl text-gray-400 mb-16">The principles that guide everything we do</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-6 bg-[#21332a] rounded-lg hover:bg-[#263a30] transition-all duration-300 hover:scale-105"
              >
                <div className="text-[#d98e38] mb-4 flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-[#21332a]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Meet Our Team</h2>
          <p className="text-xl text-gray-400 mb-16">Expert trainers dedicated to your success</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="text-center bg-[#1a2a24] rounded-lg p-6 hover:bg-[#263a30] transition-all duration-300 hover:scale-105"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-[#d98e38] font-medium mb-3">{member.role}</p>
                <p className="text-gray-400 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-20 bg-[#1a2a24]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Our Facilities</h2>
          <p className="text-xl text-gray-400 mb-16">State-of-the-art equipment and amenities</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {['Cardio Zone', 'Weight Training', 'Group Classes'].map((label, i) => (
              <div key={i} className="relative group overflow-hidden rounded-lg">
                <img
                  src={
                    [
                      'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg',
                      'https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg',
                      'https://images.pexels.com/photos/3823207/pexels-photo-3823207.jpeg'
                    ][i] + '?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
                  }
                  alt={label}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <h3 className="text-white text-xl font-semibold">{label}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
