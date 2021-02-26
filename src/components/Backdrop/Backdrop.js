import React from "react";
import "./Backdrop.css";
function Backdrop() {
  return (
    <div className="backdrop">
      <div className="backdrop-left">
        <img
          className="logo-img"
          src="https://lh3.googleusercontent.com/u20EExD20DQOYn1NvoU0pGQrCRGqYSKee3s1AcY9AOEHgA1Vw2zXyyNSfxl1arYnhLRIn515vz1EbpgUJ-MVBTly_IcXt-vfUBoRuQS3U07fpjzT1RoH1LxiRXQ0BOO-nFYCYnohw-xzDRCliR9J2uN2J1UHSJNjkhCvIFstoLrVF5LAwVzoh85u2lbXZF5KyAqs2o3WOiUd4cd8IWRnQrZbNKOKtqGv0aySs8zRmrEMVLRrtskU47UdNEt7y-xfyUezZKcQYSEO6uSYCG-StqyD6kIedbqyQzUwRiEXY92bwvJu1K-92vuFM2Jm2y5-hrvSa6HXxFFdaJ56Y2RleIj_nbWbqTkadpYUrIR-rGA68grFSLxQ8rbNIEfKMaQSPgubLrxpFsfrAwVvOquGvRDkBfzECgBCdk6USLztHqmTnDABV6PzCMBN0vN_H_4a7NjaDtvX7tQwjPmu5fmAHwzTFgZ2Twu99WLidy7_jqm7ykdm7R-ln7YRZHxdiNM-5ykX398Z8N4GzSS3o3EGxr2uN2oqxhWvjufpl_M1AVnH51UNdX1oKWUVoHKtJKj-cg_y-TBK8O8zKImTyF4FDOwwP53Zz-xKJOHcqM-yXiAkxv0t5Heg-j4joQo8eGsEDvhokt_IN0hNmyQea-QX0cnEz3Acq87pzpVwwOHLio5y5wjPOG65uGOboPSohoE=s929-no?authuser=0"
        />
      </div>
      <div className="backdrop-right">
        <div className="backdrop-data">
          <h1 className="heading">
            VACCINE BOOKING <br /> PLATFORM
          </h1>
          <button className="register">REGISTER YOURS</button>
        </div>
      </div>
    </div>
  );
}

export default Backdrop;
