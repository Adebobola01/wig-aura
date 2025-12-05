import React from "react";

const FeatureCollections = () => {
  return (
    <section>
      <h2 className="text-white text-3xl font-bold font-serif leading-tight tracking-[-0.015em] my-4 pt-5">
        Featured Collections
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="group relative overflow-hidden rounded-xl">
          <div
            className="bg-cover bg-center flex flex-col gap-3 justify-end p-6 aspect-[3/4] transition-transform duration-300 ease-in-out group-hover:scale-105"
            data-alt="A high-quality lace front wig on a mannequin head."
            style={{
              backgroundImage:
                "linear-gradient(0deg,rgba(0, 0, 0, 0.5) 0%,rgba(0, 0, 0, 0) 60%),url('https://lh3.googleusercontent.com/aida-public/AB6AXuCSDH1iUxzR6jjB_uOEKq4vI4SA9GyvXhJpEU_D3fMbc0cx3ZuzFxBGA_SOxJs5JyqGaI-7rCKvQsgmdnPGU-0WVDW-UToyxLehUsBCzLZPZhh62L59sOn8iYGRHTN0w0FyilL5xOMmEsM9SvyIMko8NB2fhEQG_CERFQ_2YaKD_kIJpY1Z94GnzOa--SK6UXXCSVZT2kUh9jj6s9fdV9FG8gtKglFWkHi3IuVyAT7_l-HBR3MbkunA6afvGBVn72ww33B_5dyyqDE')",
            }}
          >
            <p className="text-white text-2xl font-bold font-serif leading-tight">
              Lace Front Wigs
            </p>
            <a
              className="text-(--primary) text-sm font-bold uppercase tracking-wider"
              href="#"
            >
              Explore
            </a>
          </div>
        </div>
        <div className="group relative overflow-hidden rounded-xl">
          <div
            className="bg-cover bg-center flex flex-col gap-3 justify-end p-6 aspect-[3/4] transition-transform duration-300 ease-in-out group-hover:scale-105"
            data-alt="A glueless wig with a natural-looking hairline."
            style={{
              backgroundImage:
                "linear-gradient(0deg,rgba(0, 0, 0, 0.5) 0%,rgba(0, 0, 0, 0) 60%),url('https://lh3.googleusercontent.com/aida-public/AB6AXuDx0y4Kp8yo8pI-NJhzJIiL5SXUSzNZuDFcgdW7JD3v1NBArMYkxBOl10hHNVYu1Pw92tZvIASSHfsRhqWA3d2ybj_eUbbeRMLyZFlsZwcQM3vHDpLrPwtFVBora-qD01ISUUxJ8GEul_yxJ-mNiGLXSROs42q1pnVW12_MKcDhI5QPQu6geCVpQZd-w1fTnTnMEYYOfevsYZGQMZPRXpjBCgvD2ov9u7iS8oE1kIzNDM36jYbd5_QlYewahGRZ3VXZWsOdxmNxH3Y')",
            }}
          >
            <p className="text-white text-2xl font-bold font-serif leading-tight">
              Glueless Wigs
            </p>
            <a
              className="text-(--primary) text-sm font-bold uppercase tracking-wider"
              href="#"
            >
              Explore
            </a>
          </div>
        </div>
        <div className="group relative overflow-hidden rounded-xl">
          <div
            className="bg-cover bg-center flex flex-col gap-3 justify-end p-6 aspect-[3/4] transition-transform duration-300 ease-in-out group-hover:scale-105"
            data-alt="A collection of vibrantly colored wigs in shades of red, blue, and purple."
            style={{
              backgroundImage:
                "linear-gradient(0deg,rgba(0, 0, 0, 0.5) 0%,rgba(0, 0, 0, 0) 60%),url('https://lh3.googleusercontent.com/aida-public/AB6AXuAMr5ZWVM7yK7Q2ykBhlr_hC0tpnyDb_jSVOAuCutc5k7-VeVopxW4f6FIR_l0IJa6_zbNun4dKv20eyaQpIGBwBHfM3B5I9K7_x5afDDjTPdNWLpyP22sJUUGQ9xB-WZFYpdiABcISuaqtDD_ZRZfX4vr0fZeByY6EWNjzaKjjIS0b2I55wPDuyT6Tj0mEIUGN6lNDGjQDMJBy_hEcIFSavGxaBbPKTdZwLdk8wi2FA_NA_vZ_KDOMvBtZvlxUpRB4N1StTBLwKTE')",
            }}
          >
            <p className="text-white text-2xl font-bold font-serif leading-tight">
              Vibrant Hues
            </p>
            <a
              className="text-(--primary) text-sm font-bold uppercase tracking-wider"
              href="#"
            >
              Explore
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureCollections;
