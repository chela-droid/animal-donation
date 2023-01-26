import React from 'react';

const AboutUs = () => {
  return (
        <div className="about-us">
            <h1 style={{ color: '#fba633' }}>About Us</h1>
            <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                <img src={('https://www.milofoundation.org/wp-content/uploads/2020/06/kb_milo_62-scaled-847x1024.jpg')}></img>

                <p style={{ fontSize: '30px', background: '#2878e8', marginTop: '10%' }}>At our organization, we believe that every dog deserves a loving home. That's why we've dedicated ourselves to rescuing and rehoming dogs in need. We've seen firsthand the transformative power of love and care, and we're committed to making a difference in the lives of as many dogs as possible.

                    Our work is made possible by the generosity of donors like you. Your donation will go directly towards the care and rehabilitation of our rescue dogs. From providing food and shelter, to medical treatment and training, your donation will make a real impact in the life of a dog in need.

                    Thank you for considering a donation to our organization. Together, we can give dogs the second chance they deserve.
                </p>
            </div>
        </div>

    );
};

export default AboutUs;