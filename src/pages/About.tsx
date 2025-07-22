import React from 'react';
import { Award, Target, Heart, Users } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Our Mission',
      description:
        'To empower individuals to achieve their fitness goals through expert guidance, state-of-the-art facilities, and a supportive community.',
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Our Passion',
      description:
        'We believe fitness is not just about physical transformation, but about building confidence, discipline, and a healthier lifestyle.',
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Our Excellence',
      description:
        'Committed to providing the highest quality equipment, training, and facilities to ensure you reach your peak performance.',
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Our Community',
      description:
        'Creating an inclusive environment where everyone feels welcome, supported, and motivated to achieve their best.',
    },
  ];

  const team = [
    {
      name: 'Rohan Rawat',
      role: 'Manager',
      bio: '10+ years of experience in fitness training and nutrition',
    },
    {
      name: 'Sukhpreet Singh',
      role: 'Strength & Conditioning Coach',
      bio: (
        <>
          SIS30321 Certificate III in Fitness
          <br />
          SIS40221 Certificate IV in Fitness
          <br />
          11046NAT Certificate IV in Nutrition
        </>
      ),
    },
    {
      name: 'Lovepreet Singh',
      role: 'Yoga & Wellness Instructor',
      bio: 'Certified yoga instructor specializing in mindfulness and flexibility',
    },
  ];

  return (
    <div className="min-h-screen bg-[#1a2a24] pt-16">
      {/* Hero Section */}
      <section
        className="relative py-28 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1200&h=800)',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-wide">Course Creation</h1>
          <p className="text-xl text-gray-300 mb-8 font-semibold">Expert Tips</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-[#21332a] max-w-7xl mx-auto px-6 md:px-12 rounded-lg shadow-lg mx-4 md:mx-auto my-12">
        <h2 className="text-4xl font-bold text-[#d98e38] mb-8 text-center md:text-left">
          💪 Our Story: From Total Paralysis to Transformation
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start text-gray-300 leading-relaxed">
          <div className="space-y-4 text-justify">
            <p>
              In 2015, I was diagnosed with{' '}
              <strong className="text-[#d98e38]">Guillain-Barré Syndrome (GBS)</strong>—a rare
              neurological disorder that left me <strong>completely paralyzed</strong>. I couldn’t
              move, walk, or even sit on my own. My body shut down. I was bedridden, dependent on
              others for even the most basic needs.
            </p>
            <p>It felt like life had come to a full stop.</p>
            <p>But somewhere deep inside, a fire still burned.</p>
            <p>
              What followed was not just a recovery—it was a <strong>reawakening</strong>. Day by
              day, inch by inch, I fought to regain movement. With every small twitch, every painful
              stretch, I chose to keep going—even when the world said it would never be the same
              again.
            </p>
            <p>
              Years of dedication, struggle, and pure determination led me to do what many thought
              was impossible:
            </p>
            <ul className="list-disc list-inside marker:text-[#d98e38] space-y-1">
              <li>
                I lost <strong className="text-[#d98e38]">over 40 kg</strong> of weight and fat.
              </li>
              <li>
                I built strength—mentally and physically—from the ground up.
              </li>
              <li>
                I turned a life of stillness into a life of{' '}
                <strong className="text-[#d98e38]">movement, energy, and purpose</strong>.
              </li>
            </ul>
            <p>
              To turn this battle into a mission, I studied at the{' '}
              <strong className="text-[#d98e38]">Australian Institute of Fitness</strong>, earning:
            </p>
            <ul className="list-inside marker:text-[#d98e38] space-y-1">
              <li>📘 SIS30321 Certificate III in Fitness</li>
              <li>📘 SIS40221 Certificate IV in Fitness</li>
              <li>📘 11046NAT Certificate IV in Nutrition</li>
            </ul>
            <p>
              Today, I’ve launched this online fitness and nutrition coaching platform—not just to
              train bodies, but to <strong>inspire lives</strong>.
            </p>
            <p>
              This isn’t just about workouts. It’s about <strong>hope</strong>,{' '}
              <strong>resilience</strong>, and the power of <strong>never giving up</strong>.
            </p>
            <p>
              If you’re feeling stuck, broken, or like change isn’t possible—know that I was once
              where you are.
            </p>
            <blockquote className="border-l-4 border-[#d98e38] pl-4 italic text-[#d98e38] font-semibold">
              And if I can rise from total paralysis, so can you.
            </blockquote>
            <p>
              Welcome to a new beginning. Let’s transform—<strong>together</strong>.
            </p>
          </div>

          <div className="space-y-4 text-yellow-200 text-justify leading-relaxed bg-[#1f362b] rounded-lg p-8 shadow-inner">
            <h3 className="text-2xl font-bold mb-6 text-center">
              💪 ਸਾਡੀ ਕਹਾਣੀ: ਜ਼ਮੀਨ ਤੋਂ ਚਮਕਦੀ ਉਡਾਣ
            </h3>
            <p>
              ਸਾਲ 2015 ਵਿੱਚ, ਮੈਨੂੰ{' '}
              <strong className="text-[#d98e38]">Guillain-Barré Syndrome (GBS)</strong> ਹੋਇਆ—ਇੱਕ
              ਗੰਭੀਰ ਬਿਮਾਰੀ ਜਿਸ ਨੇ ਮੈਨੂੰ{' '}
              <strong>ਪੂਰੀ ਤਰ੍ਹਾਂ ਅਚਲ ਅਤੇ ਬਿਸਤਰੇ ਤੱਕ ਸੀਮਿਤ ਕਰ ਦਿੱਤਾ।</strong> ਮੈਂ ਨਾ ਚੱਲ ਸਕਦਾ
              ਸੀ, ਨਾ ਹਿੱਲ ਸਕਦਾ ਸੀ, ਨਾ ਆਪਣੇ ਆਪ ਨੂੰ ਵੀ ਸੰਭਾਲ ਸਕਦਾ ਸੀ। ਮੈ ਬਿਲਕੁਲ ਲਾਚਾਰ ਸੀ। ਜੀਵਨ
              ਪੂਰੀ ਤਰ੍ਹਾਂ ਰੁੱਕ ਗਿਆ ਸੀ।
            </p>
            <p>ਪਰ ਮੇਰੇ ਅੰਦਰ ਇਕ ਚਿੰਗਾਰੀ ਅਜੇ ਵੀ ਜਿੰਦਾਂ ਸੀ।</p>
            <p>ਮੈਂ ਹਾਰ ਮੰਨਣ ਦੀ ਥਾਂ, ਲੜਨ ਦਾ ਫੈਸਲਾ ਕੀਤਾ।</p>
            <p>
              ਮੈਂ ਹਰ ਦਿਨ, ਇਕ-ਇਕ ਮਿੰਟ, ਇਕ-ਇਕ ਇੰਚ ਆਪਣੀ ਹਿਲਚਲ ਵਾਪਸ ਹਾਸਲ ਕਰਨ ਲਈ ਲਗਾਤਾਰ ਕੋਸ਼ਿਸ਼
              ਕਰਦਾ ਰਿਹਾ। ਜਿਥੇ ਲੋਕ ਹੌਸਲਾ ਛੱਡ ਦਿੰਦੇ ਹਨ, ਓਥੇ ਮੈਂ ਆਪਣੇ ਲਈ ਇੱਕ ਨਵੀਂ ਦਿਸ਼ਾ ਬਣਾਈ।
            </p>
            <p>
              ਕਈ ਸਾਲ ਦੀ ਮਿਹਨਤ, ਦਰਦ, ਤੇ ਹੌਸਲੇ ਨਾਲ—ਮੈਂ{' '}
              <strong className="text-[#d98e38]">40 ਕਿ.ਗ੍ਰਾ ਤੋਂ ਵੱਧ ਵਜ਼ਨ ਘਟਾਇਆ</strong>, ਆਪਣੀ
              ਸਰੀਰਕ ਤੇ ਮਾਨਸਿਕ ਤਾਕਤ ਦੁਬਾਰਾ ਖੜੀ ਕੀਤੀ, ਤੇ ਇੱਕ ਅਜਿਹੀ ਜ਼ਿੰਦਗੀ ਵੱਲ ਵਾਪਸੀ ਕੀਤੀ ਜਿਸ ਦੀ
              ਉਮੀਦ ਵੀ ਮੁਸ਼ਕਿਲ ਸੀ।
            </p>
            <p>
              ਮੈਂ ਆਪਣਾ ਤਜਰਬਾ ਦੂਜਿਆਂ ਲਈ ਰੋਸ਼ਨੀ ਬਣੇ, ਇਸ ਲਈ ਮੈਂ{' '}
              <strong className="text-[#d98e38]">Australian Institute of Fitness</strong> ਤੋਂ ਇਹ
              ਪ੍ਰਮਾਣਪੱਤਰ ਹਾਸਲ ਕੀਤੇ:
            </p>
            <ul className="list-inside marker:text-[#d98e38] space-y-1">
              <li>📘 SIS30321 Certificate III in Fitness</li>
              <li>📘 SIS40221 Certificate IV in Fitness</li>
              <li>📘 11046NAT Certificate IV in Nutrition</li>
            </ul>
            <p>
              ਹੁਣ ਮੈਂ ਆਪਣਾ ਆਨਲਾਈਨ ਫਿਟਨੈੱਸ ਅਤੇ ਪੋਸ਼ਣ ਬਿਜ਼ਨੈੱਸ ਸ਼ੁਰੂ ਕਰ ਰਿਹਾ ਹਾਂ—ਇਹ ਸਿਰਫ਼ ਵਰਕਆਉਟ
              ਜਾਂ ਖੁਰਾਕ ਲਈ ਨਹੀਂ, ਇਹ ਉਹਨਾਂ ਲਈ ਹੈ ਜੋ ਕਦੇ ਆਪਣੇ ਆਪ 'ਤੇ ਵਿਸ਼ਵਾਸ ਖੋ ਬੈਠਦੇ ਹਨ।
            </p>
            <blockquote className="border-l-4 border-[#d98e38] pl-4 italic font-semibold text-[#d98e38]">
              ਜੇ ਮੈਂ ਬਿਸਤਰੇ ਤੋਂ ਉੱਠ ਕੇ ਆਪਣੀ ਜ਼ਿੰਦਗੀ ਬਦਲ ਸਕਦਾ ਹਾਂ, ਤਾਂ <strong>ਤੁਸੀਂ ਵੀ ਕਰ ਸਕਦੇ ਹੋ।</strong>
            </blockquote>
            <p>
              ਇਹ ਸਿਰਫ਼ ਕੋਚਿੰਗ ਨਹੀਂ, ਇਹ <strong>ਜੀਵਨ ਬਦਲਣ ਵਾਲੀ ਯਾਤਰਾ</strong> ਦੀ ਸ਼ੁਰੂਆਤ ਹੈ।
            </p>
            <p>ਆਓ, ਅਸੀਂ ਇਕੱਠੇ ਤਬਦੀਲੀ ਲਿਆਈਏ। <strong>ਹੁਣੇ ਤੋਂ। ਅੱਜ ਤੋਂ।</strong></p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-[#1a2a24]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Our Values</h2>
          <p className="text-xl text-gray-400 mb-16">
            The principles that guide everything we do
          </p>
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
          <p className="text-xl text-gray-400 mb-16">
            Expert trainers dedicated to your success
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="text-center bg-[#1a2a24] rounded-lg p-6 hover:bg-[#263a30] transition-all duration-300 hover:scale-105"
              >
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
                  />
                ) : (
                  <div className="w-32 h-32 rounded-full bg-gray-700 flex items-center justify-center mx-auto mb-4 text-[#d98e38] font-bold text-3xl select-none">
                    {member.name.charAt(0)}
                  </div>
                )}
                <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-[#d98e38] font-medium mb-3">{member.role}</p>
                <p className="text-gray-400 text-sm whitespace-pre-line">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-20 bg-[#1a2a24]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Our Facilities</h2>
          <p className="text-xl text-gray-400 mb-16">
            State-of-the-art equipment and amenities
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {['Cardio Zone', 'Weight Training', 'Group Classes'].map((label, i) => (
              <div key={i} className="relative group overflow-hidden rounded-lg shadow-lg">
                <img
                  src={
                    [
                      'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg',
                      'https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg',
                      'https://images.pexels.com/photos/3823207/pexels-photo-3823207.jpeg',
                    ][i] + '?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
                  }
                  alt={label}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300 rounded-lg"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-lg">
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
