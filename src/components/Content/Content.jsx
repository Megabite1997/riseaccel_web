import React from "react";

import clickThroughRate from "../../assets/images/click-through-rate.png";
import howItWork1 from "../../assets/images/how-it-work-1.png";
import howItWork2 from "../../assets/images/how-it-work-2.png";
import howItWork3 from "../../assets/images/how-it-work-3.png";
import howItWork4 from "../../assets/images/how-it-work-4.png";
import powerUp2 from "../../assets/images/power-up-2.png";
import powerUp3 from "../../assets/images/power-up-3.png";

const Content = () => {
  return (
    <div>
      <div className="grid1">
        <div className="content">
          <h1 className="title">Higher click-through rates for your product</h1>
          <p className="description">
            Don't stop tracking your product and better analyze your customers
            just too easy steps.
          </p>
        </div>

        <div className="crop-image">
          <img
            src={clickThroughRate}
            alt="click-through-rate"
            className="img-responsive"
          />
        </div>
      </div>

      <div className="grid2">
        <div className="content">
          <h1 className="title">How BetterGoods works?</h1>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            eget neque dignissim, feugiat nisl id, malesuada mi. Integer
            tincidunt lorem sit amet eros gravida, eget condimentum mauris
            porttitor.
          </p>
        </div>

        <div className="points">
          <div className="point1">
            <img src={howItWork1} alt="how-it-work-1" />
            <h4>1. Lorem ipsum oder</h4>
            <p>
              Quisque aliquet pulvinar finibus. Fusce dignissim nisi a rutrum
              pulvinar. Suspendisse viverra feugiat varius.
            </p>
          </div>
          <div className="point2">
            <img src={howItWork2} alt="how-it-work-2" />
            <h4>2. Lorem ipsum oder</h4>
            <p>
              Quisque aliquet pulvinar finibus. Fusce dignissim nisi a rutrum
              pulvinar. Suspendisse viverra feugiat varius.
            </p>
          </div>
          <div className="point3">
            <img src={howItWork3} alt="how-it-work-3" />
            <h4>3. Lorem ipsum oder</h4>
            <p>
              Quisque aliquet pulvinar finibus. Fusce dignissim nisi a rutrum
              pulvinar. Suspendisse viverra feugiat varius.
            </p>
          </div>
          <div className="point4">
            <img src={howItWork4} alt="how-it-work-4" />
            <h4>4. Lorem ipsum oder</h4>
            <p>
              Quisque aliquet pulvinar finibus. Fusce dignissim nisi a rutrum
              pulvinar. Suspendisse viverra feugiat varius.
            </p>
          </div>
        </div>
      </div>
      <div className="grid3">
        <div className="content">
          <h1 className="title">Power-up your performance</h1>
          <p className="paragraph1">
            Quisque aliquet pulvinar finibus. Fusce dignissim nisi a rutrum
            pulvinar. Suspendisse viverra feugiat varius. Praesent et ligula
            cursus ante sodales cursus et in arcu. Suspendisse congue euismod
            mi, at facilisis massa imperdiet a. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae; Aenean ut
            elit aliquet, malesuada enim id, posuere purus. In sit amet molestie
            augue. Etiam tristique volutpat nisi vitae mollis. Vivamus
            vestibulum elementum ipsum ut congue. Suspendisse ultricies augue
            non arcu dictum, sed aliquam risus mattis. Integer nec turpis eu
            ante interdum ornare. Quisque sed risus pharetra, faucibus felis at,
            ultrices odio. Proin sed imperdiet mi. Nunc nec dolor eu mi molestie
            scelerisque. Nam egestas augue eros, ac lacinia est lacinia et.
          </p>
          <p className="paragraph2">
            Integer ullamcorper tortor a est bibendum, eget consequat diam
            ullamcorper. Donec gravida, purus vulputate vehicula mattis, est
            elit blandit lectus, vitae tincidunt lacus urna euismod tortor.
            Nulla egestas dui quis tempor euismod. Proin posuere pretium
            sodales. Nunc at tortor malesuada, ullamcorper tellus quis,
            malesuada tortor. Nullam nulla ligula, molestie a est id, venenatis
            bibendum nunc. Cras nec lectus magna. Fusce eget nibh venenatis,
            gravida risus consequat, porta nibh. Nam a libero ut tellus viverra
            tincidunt sit amet et dolor. Donec bibendum porta consequat. Sed in
            nulla arcu. Phasellus pellentesque elit a libero facilisis congue.
            Phasellus mollis tristique nunc, in feugiat ipsum. Duis consectetur
            vel sem volutpat pretium. Maecenas sit amet semper ipsum, eu viverra
            nibh.
          </p>
        </div>
      </div>
      <div className="grid4">
        <div className="points">
          <div className="point1">
            <img src={powerUp2} alt="power-up-2" className="img-responsive" />
            <h1>Lorem ipsum oder</h1>
            <p>
              Quisque aliquet pulvinar finibus. Fusce dignissim nisi a rutrum
              pulvinar. Suspendisse viverra feugiat varius.
            </p>
          </div>
          <div className="point2">
            <img src={powerUp3} alt="power-up-3" className="img-responsive" />
            <h1>Lorem ipsum oder</h1>
            <p>
              Quisque aliquet pulvinar finibus. Fusce dignissim nisi a rutrum
              pulvinar. Suspendisse viverra feugiat varius.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
