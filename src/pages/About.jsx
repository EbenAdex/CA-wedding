import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section className="interview-section">
      <h2 className="interview-title">Our Story: Told Separately</h2>
      <div className="interview-wrapper">
        
        {/* Wife's Interview */}
        <div className="interview-box">
          <h3 className="participant-name">Interview with the Bride</h3>
          <p className="question">How did you two meet?</p>
          <p className="answer">
            We met at church as kids—our parents were both pastors. I remember seeing him often, but it wasn’t until my 10th birthday in 2007 that he really stood out… though not for the best reason. He made a comment about my dancing that really hurt me.
          </p>
          <p className="question">When did things begin to change?</p>
          <p className="answer">
            In 2012, we saw each other again at church camp. It wasn’t dramatic, but something subtle rekindled. A year later, his dad was transferred to my church. That’s when we started talking again.
          </p>
          <p className="question">Did your relationship evolve from there?</p>
          <p className="answer">
            Definitely. In 2014, I lost my dad. He comforted me, and his music brought me so much peace. By 2015, he somehow got my number from my mom and called me. That moment felt like something was restarting.
          </p>
          <p className="question">What happened between 2016 and now?</p>
          <p className="answer">
            We dated between 2016 and 2017. He even surprised me during his sister’s wedding trip. But life happened, and we drifted. He checked on me in 2020 during #EndSARS. I wasn't ready in 2022 when we tried planning a wedding. But in 2023, he showed up on my birthday, completely surprised me, and asked me to be his girlfriend again. Now, we’re engaged.
          </p>
        </div>

        {/* Husband's Interview */}
        <div className="interview-box">
          <h3 className="participant-name">Interview with the Groom</h3>
          <p className="question">Tell us how you remember meeting her.</p>
          <p className="answer">
            We were both pastor’s kids in the same church—so we grew up knowing each other. In 2007, I made fun of her dance at her birthday. I didn’t realize how much that affected her.
          </p>
          <p className="question">How did your dynamic shift over the years?</p>
          <p className="answer">
            Between 2008 and 2015, we had some cute phases—friends, almost dating, drifting apart again. In 2015, I just had to call her. She always had a way of coming back into my life.
          </p>
          <p className="question">Was dating ever official?</p>
          <p className="answer">
            Oh, absolutely. We dated in 2016, but distance and life pressures made things hard. Even when we weren’t together, I felt connected to her. In 2020, I reached out again during the protests. It wasn’t romantic at the surface… but I knew.
          </p>
          <p className="question">What led to your engagement?</p>
          <p className="answer">
            In 2023, I flew in secretly and worked with her friend to surprise her on her birthday. I asked her out again. This time, it felt right. And here we are—engaged and planning forever.
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;
