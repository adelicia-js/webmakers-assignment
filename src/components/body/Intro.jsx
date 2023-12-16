const HeadingDescription = () => {
  return (
    <section id="intro-header-wrapper" className="flex flex-col gap-6 justify-center items-center text-center min-h-[40vh]">
      <h1 id="intro-header" className="text-4xl sm:text-6xl md:text-7xl text-center font-bold">
        Elevate Your Presence with{" "}
        <span className="xl:whitespace-pre">
          Seamless Design and Innovation.
        </span>
      </h1>
      <h2 id="intro-header-description" className="font-heading text-md md:text-xl ">
        From strategic planning to digital presence, we{`'`}re your dedicated
        partner in achieving solo success.
      </h2>
      <a id="intro-pricing-link"
        className="font-general text-md md:text-lg bg-black border border-transparent hover:border-white/60 hover:shadow-lg hover:shadow-pink-200 text-white px-10 py-3 rounded-md"
        href="#pricing"
      >
        View Pricing
      </a>
    </section>
  );
};

const CompaniesDescription = () => {
  return (
    <section id="intro-companies-wrapper" className="font-general text-gray-400 mt-4 md:mt-6 lg:mt-8 flex flex-col justify-center md:justify-end items-center gap-6 sm:min-h-[15vh]">
      <p id="intro-companies-header" className="text-sm md:text-md">Trusted by 250+ Companies</p>
      <ul id="intro-companies-list" className="gap-12 sm:p-4 py-4 grid grid-rows-3 grid-cols-2 min-[350px]:grid-rows-2 min-[350px]:grid-cols-3 lg:flex lg:flex-row md:gap-20 lg:gap-16 justify-center sm:place-items-center lg:justify-end items-center">
        <li id="zapier-logo" className="justify-self-center">
          <svg
            width="72"
            height="34"
            viewBox="0 0 72 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="sm:w-24 sm:h-12"
          >
            <path
              d="M0.389648 26.0727L7.80329 14.5368H1.26789C1.21251 14.2045 1.18877 13.8405 1.18877 13.437C1.18877 13.0493 1.21251 12.6933 1.26789 12.3689H11.8464L11.9809 12.7249L4.51185 24.2845H11.5141C11.5694 24.6485 11.5932 25.0283 11.5932 25.408C11.5932 25.772 11.5694 26.1201 11.5141 26.4524H0.524154L0.389648 26.0727Z"
              fill="#9CA3AF"
            />
            <path
              d="M21.784 17.1717C21.784 16.0877 21.5071 15.344 20.9612 14.9167C20.4152 14.4974 19.6161 14.2838 18.5717 14.2838C17.9308 14.2838 17.3295 14.3313 16.7757 14.4341C16.2139 14.537 15.6759 14.6636 15.1379 14.8297C14.7897 14.2284 14.6157 13.5005 14.6157 12.6618C15.2407 12.464 15.9212 12.3058 16.6728 12.195C17.4245 12.0842 18.1445 12.0288 18.8407 12.0288C20.6684 12.0288 22.0609 12.4482 23.0183 13.2789C23.9678 14.1097 24.4504 15.4469 24.4504 17.2746V26.0886C23.8095 26.2311 23.0341 26.3893 22.1163 26.5396C21.1985 26.6979 20.2649 26.7691 19.3154 26.7691C18.4214 26.7691 17.6064 26.69 16.8864 26.5238C16.1664 26.3577 15.5493 26.0965 15.0429 25.7247C14.5365 25.3607 14.1488 24.8939 13.8719 24.3242C13.595 23.7546 13.4605 23.0662 13.4605 22.2671C13.4605 21.4838 13.6187 20.7875 13.9431 20.1941C14.2596 19.6007 14.6948 19.1022 15.2486 18.7146C15.7946 18.319 16.4275 18.0262 17.1475 17.8363C17.8596 17.6464 18.6113 17.5436 19.4025 17.5436C19.988 17.5436 20.4706 17.5594 20.8425 17.5831C21.2143 17.6069 21.5308 17.6464 21.7919 17.6781V17.1717H21.784ZM21.784 19.8381C21.5071 19.7985 21.159 19.7669 20.7396 19.7273C20.3203 19.6877 19.9642 19.6719 19.6715 19.6719C18.5321 19.6719 17.6697 19.8855 17.0763 20.3049C16.4829 20.7242 16.1823 21.3651 16.1823 22.2275C16.1823 22.7735 16.2851 23.2086 16.4829 23.5172C16.6807 23.8258 16.9339 24.0631 17.2346 24.2293C17.5352 24.3954 17.8675 24.4983 18.2394 24.53C18.6034 24.5695 18.9515 24.5853 19.2838 24.5853C19.7031 24.5853 20.1383 24.5616 20.5893 24.5141C21.0403 24.4667 21.4359 24.4034 21.784 24.3084V19.8381Z"
              fill="#9CA3AF"
            />
            <path
              d="M27.4174 12.3695C27.5994 12.3299 27.7892 12.3062 27.9791 12.2904C28.169 12.2745 28.3668 12.2666 28.5725 12.2666C28.7545 12.2666 28.9444 12.2745 29.1501 12.2904C29.3479 12.3062 29.5457 12.3378 29.7277 12.3695C29.7435 12.4091 29.7673 12.5198 29.7989 12.7097C29.8227 12.8996 29.8543 13.1053 29.878 13.3269C29.9018 13.5484 29.9334 13.7541 29.9572 13.9598C29.9809 14.1655 29.9967 14.2921 29.9967 14.3475C30.1787 14.0548 30.4002 13.7699 30.6534 13.493C30.9066 13.2161 31.2152 12.9708 31.5712 12.7493C31.9273 12.5277 32.3308 12.3537 32.7818 12.2271C33.2328 12.1005 33.7312 12.0372 34.2772 12.0372C35.1 12.0372 35.8675 12.1717 36.5717 12.4486C37.2758 12.7255 37.8772 13.1449 38.3835 13.7225C38.8899 14.3 39.2776 15.0359 39.5624 15.922C39.8473 16.8082 39.9897 17.8605 39.9897 19.071C39.9897 21.4921 39.333 23.3831 38.0275 24.744C36.7141 26.1049 34.8627 26.7933 32.4653 26.7933C32.0618 26.7933 31.6503 26.7695 31.231 26.7141C30.8117 26.6588 30.4398 26.5875 30.1312 26.4926V32.9489C29.9097 32.9884 29.6802 33.0122 29.427 33.028C29.1818 33.0438 28.9523 33.0517 28.7545 33.0517C28.5567 33.0517 28.3273 33.0438 28.082 33.028C27.8367 33.0122 27.6073 32.9805 27.4095 32.9489V12.3695H27.4174ZM30.1391 24.1506C30.4873 24.2772 30.8433 24.3722 31.2073 24.4275C31.5712 24.4829 32.046 24.5067 32.6394 24.5067C33.2961 24.5067 33.9053 24.4038 34.4512 24.1902C34.9972 23.9765 35.4719 23.6522 35.8675 23.217C36.2631 22.7739 36.5717 22.2201 36.8011 21.5554C37.0306 20.8908 37.1413 20.0917 37.1413 19.1818C37.1413 17.7181 36.8723 16.555 36.3343 15.6926C35.7963 14.8302 34.9101 14.4029 33.6838 14.4029C33.2248 14.4029 32.7897 14.482 32.3624 14.6482C31.9431 14.8143 31.5633 15.0596 31.2389 15.3919C30.9066 15.7242 30.6455 16.1357 30.4398 16.642C30.2341 17.1484 30.1391 17.7418 30.1391 18.4381V24.1506Z"
              fill="#9CA3AF"
            />
            <path
              d="M43.3761 14.5052H41.5879C41.5484 14.3548 41.5246 14.1887 41.5088 13.9988C41.493 13.8089 41.4851 13.619 41.4851 13.437C41.4851 13.2551 41.493 13.0652 41.5088 12.8753C41.5246 12.6854 41.5563 12.5113 41.5879 12.3689H46.0424V26.4604C45.8446 26.4999 45.6152 26.5236 45.3699 26.5395C45.1246 26.5553 44.8952 26.5632 44.6974 26.5632C44.5154 26.5632 44.3018 26.5553 44.0486 26.5395C43.8033 26.5236 43.5739 26.492 43.3761 26.4604V14.5052Z"
              fill="#9CA3AF"
            />
            <path
              d="M51.8895 20.0835C51.929 21.6185 52.3246 22.7499 53.0842 23.462C53.8438 24.1741 54.9673 24.5302 56.4468 24.5302C57.7444 24.5302 58.9866 24.3007 60.1576 23.8418C60.3079 24.1187 60.4266 24.451 60.5137 24.8466C60.6086 25.2422 60.6561 25.6299 60.6798 26.0176C60.0785 26.2708 59.4139 26.4686 58.686 26.5952C57.966 26.7218 57.1589 26.7851 56.2807 26.7851C54.9989 26.7851 53.8991 26.6031 52.9813 26.2471C52.0635 25.891 51.3119 25.3847 50.7185 24.7359C50.1251 24.0871 49.6899 23.3196 49.413 22.4255C49.1361 21.5394 49.0016 20.5662 49.0016 19.4981C49.0016 18.4537 49.1361 17.4805 49.3972 16.5706C49.6583 15.6607 50.0697 14.8774 50.6156 14.2049C51.1616 13.5402 51.8578 13.0022 52.6886 12.6145C53.5194 12.2189 54.5084 12.0211 55.6398 12.0211C56.613 12.0211 57.4596 12.1873 58.1954 12.5196C58.9312 12.8519 59.5405 13.3029 60.0389 13.8805C60.5295 14.458 60.9093 15.1464 61.1624 15.9376C61.4156 16.7367 61.5501 17.5991 61.5501 18.5328C61.5501 18.786 61.5422 19.0629 61.5185 19.3398C61.5027 19.6246 61.4789 19.8699 61.4631 20.0677H51.8895V20.0835ZM58.8679 18.0501C58.8679 17.5359 58.7967 17.0453 58.6622 16.5785C58.5277 16.1117 58.322 15.7082 58.0609 15.36C57.7919 15.0119 57.4596 14.735 57.0482 14.5213C56.6367 14.3077 56.1462 14.2049 55.5765 14.2049C54.4609 14.2049 53.6064 14.5451 53.0051 15.2176C52.4117 15.898 52.0477 16.8396 51.9211 18.0501H58.8679Z"
              fill="#9CA3AF"
            />
            <path
              d="M64.5568 12.3689C64.7546 12.3293 64.9524 12.3056 65.1344 12.2898C65.3164 12.274 65.5062 12.266 65.712 12.266C65.9098 12.266 66.1155 12.274 66.3133 12.2898C66.5111 12.3056 66.701 12.3372 66.8592 12.3689C66.9146 12.6458 66.97 13.0019 67.0254 13.4529C67.0808 13.9038 67.1045 14.2836 67.1045 14.5922C67.4922 13.9671 67.9986 13.4291 68.6315 12.9702C69.2645 12.5113 70.0715 12.2819 71.0605 12.2819C71.2109 12.2819 71.3612 12.2898 71.5115 12.2977C71.6698 12.3056 71.7964 12.3214 71.9071 12.3372C71.9467 12.5034 71.9704 12.6775 71.9863 12.8594C72.0021 13.0414 72.01 13.2313 72.01 13.437C72.01 13.6586 71.9942 13.888 71.9704 14.1254C71.9467 14.3627 71.9071 14.5922 71.8755 14.8137C71.7252 14.7742 71.5748 14.7584 71.4245 14.7584C71.2663 14.7584 71.1476 14.7584 71.0526 14.7584C70.5621 14.7584 70.0873 14.8296 69.6364 14.9641C69.1854 15.0986 68.7819 15.3438 68.4258 15.692C68.0698 16.0401 67.7849 16.5148 67.5713 17.1241C67.3577 17.7254 67.2548 18.5087 67.2548 19.4581V26.4604C67.057 26.4999 66.8276 26.5237 66.5823 26.5395C66.337 26.5553 66.1076 26.5632 65.9098 26.5632C65.712 26.5632 65.4825 26.5553 65.2372 26.5395C64.992 26.5237 64.7546 26.492 64.5331 26.4604V12.3689H64.5568Z"
              fill="#9CA3AF"
            />
            <path
              d="M48.6296 4.07732H45.9711L47.8542 2.19424C47.7039 1.98853 47.5377 1.79072 47.3637 1.60874C47.1817 1.42677 46.9918 1.26061 46.7782 1.11819L44.8951 3.00127V0.342807C44.6498 0.303247 44.3966 0.27951 44.1355 0.27951H44.1276C43.8665 0.27951 43.6133 0.303247 43.368 0.342807V3.00127L41.485 1.11819C41.2792 1.26852 41.0814 1.43468 40.8995 1.60874C40.7175 1.79072 40.5592 1.98061 40.4089 2.19424L42.2999 4.07732H39.6414C39.6414 4.07732 39.5781 4.57578 39.5781 4.83688C39.5781 5.09798 39.6019 5.35117 39.6414 5.59644H42.2999L40.4168 7.47952C40.7096 7.89095 41.0735 8.25491 41.4929 8.55557L43.376 6.67249V9.33096C43.6212 9.37052 43.8744 9.39425 44.1355 9.39425H44.1434C44.4045 9.39425 44.6577 9.37052 44.903 9.33096V6.67249L46.7861 8.55557C46.9918 8.40524 47.1896 8.23909 47.3716 8.06502C47.5535 7.88304 47.7197 7.69315 47.8621 7.47952L45.979 5.59644H48.6375C48.6771 5.35117 48.7008 5.09798 48.7008 4.83688V4.82897C48.6929 4.57578 48.6771 4.3226 48.6296 4.07732ZM45.2749 4.84479C45.2749 5.18501 45.2116 5.50941 45.1008 5.81007C44.8001 5.92084 44.4757 5.98414 44.1355 5.98414C43.7953 5.98414 43.4709 5.92084 43.1702 5.81007C43.0595 5.50941 42.9962 5.18501 42.9962 4.84479V4.83688C42.9962 4.49666 43.0595 4.17227 43.1702 3.87161C43.4709 3.76084 43.7953 3.69754 44.1355 3.69754C44.4757 3.69754 44.8001 3.76084 45.1008 3.87161C45.2116 4.17227 45.2749 4.49666 45.2749 4.84479Z"
              fill="#9CA3AF"
            />
          </svg>
        </li>
        <li id="spotify-logo" className="justify-self-center">
          <svg
            width="107"
            height="33"
            viewBox="0 0 107 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="sm:w-32 sm:h-12"
          >
            <path
              d="M16.693 0.760651C7.96764 0.760651 0.894043 7.83405 0.894043 16.5594C0.894043 25.285 7.96764 32.3579 16.693 32.3579C25.4192 32.3579 32.492 25.285 32.492 16.5594C32.492 7.83462 25.4192 0.761405 16.6928 0.761405L16.693 0.760651ZM23.9382 23.5469C23.6552 24.011 23.0478 24.1582 22.5837 23.8733C18.8742 21.6075 14.2045 21.0943 8.70511 22.3508C8.17517 22.4716 7.64692 22.1395 7.52618 21.6094C7.40487 21.0793 7.73559 20.551 8.26685 20.4303C14.2851 19.0553 19.4474 19.6473 23.6118 22.1923C24.0759 22.4772 24.2231 23.0828 23.9382 23.5469ZM25.872 19.2451C25.5154 19.8247 24.757 20.0077 24.1778 19.6511C19.9311 17.0408 13.4576 16.2849 8.43457 17.8096C7.78313 18.0064 7.09509 17.6392 6.89738 16.9889C6.70117 16.3375 7.06849 15.6508 7.7188 15.4527C13.4565 13.7117 20.5895 14.555 25.4664 17.5519C26.0456 17.9085 26.2286 18.6669 25.872 19.2453V19.2451ZM26.038 14.7656C20.9461 11.7412 12.5451 11.4631 7.68352 12.9386C6.90285 13.1754 6.07727 12.7347 5.84069 11.954C5.60411 11.1729 6.04445 10.3479 6.82568 10.1106C12.4064 8.41644 21.6837 8.74377 27.5462 12.224C28.2499 12.6407 28.48 13.5476 28.0631 14.2488C27.648 14.951 26.7387 15.1825 26.0388 14.7656H26.038ZM43.8776 15.3451C41.1496 14.6946 40.6648 14.2381 40.6648 13.2788C40.6648 12.3724 41.5175 11.7625 42.7872 11.7625C44.0173 11.7625 45.236 12.2257 46.5151 13.1791C46.5528 13.208 46.6019 13.2195 46.6491 13.212C46.6981 13.2048 46.7396 13.1786 46.7679 13.1392L48.0998 11.2616C48.1546 11.1843 48.1395 11.0777 48.0659 11.0186C46.5434 9.79743 44.8304 9.20372 42.8268 9.20372C39.8818 9.20372 37.8236 10.9713 37.8236 13.5002C37.8236 16.2122 39.5988 17.1725 42.6665 17.9137C45.2756 18.515 45.7171 19.0187 45.7171 19.919C45.7171 20.917 44.8266 21.5377 43.3928 21.5377C41.8005 21.5377 40.5006 21 39.048 19.7435C39.0121 19.7115 38.9631 19.6983 38.9178 19.7002C38.8687 19.7039 38.8253 19.7266 38.7952 19.7624L37.301 21.5396C37.2387 21.615 37.2463 21.7245 37.318 21.7886C39.0083 23.2979 41.0874 24.094 43.3324 24.094C46.5057 24.094 48.5564 22.3603 48.5564 19.6756C48.5621 17.4104 47.2056 16.1558 43.8833 15.3476L43.8776 15.3451ZM55.7368 12.6549C54.3615 12.6549 53.2333 13.1967 52.3013 14.307V13.0573C52.3013 12.9586 52.222 12.8782 52.1239 12.8782H49.6808C49.5827 12.8782 49.5035 12.9586 49.5035 13.0573V26.9428C49.5035 27.0409 49.5827 27.122 49.6808 27.122H52.1239C52.222 27.122 52.3013 27.0409 52.3013 26.9428V22.5602C53.2333 23.6035 54.3615 24.1148 55.7368 24.1148C58.2931 24.1148 60.8815 22.1471 60.8815 18.3854C60.8853 14.623 58.2969 12.6547 55.7387 12.6547L55.7368 12.6549ZM58.0403 18.3854C58.0403 20.3001 56.8612 21.6377 55.1708 21.6377C53.5012 21.6377 52.2409 20.2397 52.2409 18.3854C52.2409 16.5309 53.5012 15.1333 55.1708 15.1333C56.8329 15.1331 58.0403 16.5005 58.0403 18.3852V18.3854ZM67.5129 12.6549C64.2208 12.6549 61.6418 15.1897 61.6418 18.4263C61.6418 21.6283 64.2038 24.1355 67.4733 24.1355C70.7767 24.1355 73.3632 21.6094 73.3632 18.3854C73.3632 15.1723 70.7937 12.6552 67.5129 12.6552V12.6549ZM67.5129 21.6566C65.7621 21.6566 64.4415 20.2492 64.4415 18.3844C64.4415 16.5112 65.7169 15.152 67.4733 15.152C69.2354 15.152 70.5635 16.5588 70.5635 18.4254C70.5635 20.2982 69.2806 21.6566 67.5129 21.6566ZM80.3927 12.8782H77.7043V10.1302C77.7043 10.0317 77.6251 9.95138 77.5269 9.95138H75.0838C74.9857 9.95138 74.9046 10.0317 74.9046 10.1302V12.8782H73.7311C73.633 12.8782 73.5538 12.9586 73.5538 13.0573V15.1565C73.5538 15.255 73.633 15.3355 73.7311 15.3355H74.9046V20.768C74.9046 22.9621 75.9969 24.0752 78.1533 24.0752C79.0287 24.0752 79.755 23.8941 80.4398 23.5054C80.4964 23.4752 80.5304 23.4149 80.5304 23.3507V21.3509C80.5304 21.2906 80.4983 21.2321 80.4455 21.2C80.3927 21.166 80.3267 21.1642 80.2719 21.1925C79.8022 21.4283 79.3475 21.5377 78.8381 21.5377C78.0552 21.5377 77.7043 21.1811 77.7043 20.385V15.3365H80.3927C80.4908 15.3365 80.57 15.2561 80.57 15.1574V13.0584C80.5738 12.9597 80.4946 12.8794 80.3946 12.8794L80.3927 12.8782ZM89.7577 12.889V12.5515C89.7577 11.5586 90.1388 11.1158 90.9916 11.1158C91.501 11.1158 91.9103 11.2169 92.3688 11.3697C92.4254 11.3875 92.4839 11.3786 92.5291 11.3448C92.5763 11.311 92.6027 11.2569 92.6027 11.1995V9.14127C92.6027 9.0626 92.5537 8.99299 92.4763 8.96978C91.9934 8.82584 91.3745 8.67811 90.4463 8.67811C88.1919 8.67811 86.9977 9.94855 86.9977 12.3507V12.8677H85.8242C85.7261 12.8677 85.645 12.948 85.645 13.0465V15.1565C85.645 15.255 85.7261 15.3355 85.8242 15.3355H86.9977V23.7129C86.9977 23.8129 87.0788 23.8922 87.1769 23.8922H89.6181C89.7181 23.8922 89.7974 23.8129 89.7974 23.7129V15.3361H92.0782L95.5722 23.7129C95.176 24.5921 94.7855 24.7675 94.2535 24.7675C93.8233 24.7675 93.3687 24.6393 92.9065 24.3846C92.8631 24.3619 92.8102 24.3582 92.765 24.3714C92.7178 24.3883 92.6782 24.4223 92.6593 24.4676L91.8311 26.2844C91.7915 26.3711 91.8254 26.4711 91.9085 26.5164C92.7725 26.9843 93.5517 27.1843 94.5157 27.1843C96.3193 27.1843 97.3173 26.3428 98.1946 24.0827L102.432 13.1335C102.455 13.0784 102.447 13.0161 102.413 12.9673C102.381 12.9188 102.326 12.8896 102.268 12.8896H99.7246C99.6473 12.8896 99.5794 12.938 99.5548 13.0095L96.9494 20.4491L94.0969 13.0046C94.0705 12.9354 94.0045 12.8896 93.9309 12.8896H89.7577V12.889ZM84.3281 12.8782H81.885C81.7869 12.8782 81.7057 12.9586 81.7057 13.0573V23.7129C81.7057 23.8129 81.7869 23.8922 81.885 23.8922H84.3281C84.4262 23.8922 84.5073 23.8129 84.5073 23.7129V13.058C84.5073 12.9594 84.4281 12.879 84.3281 12.879V12.8782ZM83.1207 8.02611C82.1529 8.02611 81.368 8.80942 81.368 9.77705C81.368 10.7453 82.1529 11.5295 83.1207 11.5295C84.0885 11.5295 84.8715 10.7453 84.8715 9.77705C84.8715 8.80961 84.0866 8.02611 83.1207 8.02611ZM104.518 16.3045C103.553 16.3045 102.8 15.5281 102.8 14.5854C102.8 13.6427 103.562 12.8575 104.528 12.8575C105.494 12.8575 106.247 13.6336 106.247 14.5756C106.247 15.5183 105.484 16.3045 104.518 16.3045ZM104.528 13.0284C103.647 13.0284 102.981 13.7283 102.981 14.5854C102.981 15.4421 103.643 16.1326 104.518 16.1326C105.399 16.1326 106.065 15.4332 106.065 14.5756C106.065 13.7189 105.403 13.0284 104.528 13.0284ZM104.909 14.7524L105.396 15.4331H104.984L104.547 14.8086H104.171V15.4331H103.828V13.6287H104.632C105.052 13.6287 105.328 13.8432 105.328 14.2043C105.33 14.5001 105.158 14.6809 104.911 14.7524H104.909ZM104.618 13.9383H104.171V14.509H104.618C104.841 14.509 104.975 14.3998 104.975 14.2234C104.975 14.0377 104.841 13.9383 104.618 13.9383Z"
              fill="#9CA3AF"
            />
          </svg>
        </li>
        <li id="zoom-logo" className="justify-self-center">
          <svg
            width="75"
            height="18"
            viewBox="0 0 75 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="sm:w-20 sm:h-12"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M60.6017 5.94192C60.8832 6.42764 60.9753 6.98027 61.0057 7.60154L61.0457 8.4296V14.22L61.0865 15.0489C61.1682 16.4027 62.1666 17.4037 63.5307 17.4888L64.3553 17.5297V8.4296L64.3962 7.60154C64.4301 6.98722 64.5213 6.42417 64.8072 5.93497C65.0985 5.43321 65.5166 5.01691 66.0197 4.72787C66.5228 4.43884 67.093 4.28724 67.6732 4.2883C68.2534 4.28935 68.8231 4.44303 69.3251 4.73389C69.8271 5.02476 70.2438 5.44258 70.5333 5.9454C70.8148 6.43112 70.9025 6.99417 70.9364 7.60154L70.9773 8.427V14.22L71.0181 15.0489C71.1033 16.4096 72.0938 17.4106 73.4623 17.4888L74.2869 17.5297V7.60154C74.2869 5.84597 73.5897 4.16227 72.3486 2.92066C71.1075 1.67904 69.424 0.981161 67.6685 0.980469C66.7289 0.979478 65.7998 1.17902 64.9435 1.56576C64.0871 1.9525 63.3232 2.51754 62.7027 3.22312C62.0819 2.51781 61.3179 1.95291 60.4616 1.56606C59.6054 1.1792 58.6765 0.979277 57.7369 0.9796C56.3623 0.9796 55.0867 1.39668 54.0301 2.117C53.3854 1.39754 51.943 0.9796 51.1149 0.9796V17.5297L51.943 17.4888C53.328 17.3976 54.329 16.4235 54.3829 15.0489L54.4272 14.22V8.4296L54.4681 7.60154C54.5028 6.97679 54.5897 6.42764 54.8721 5.93845C55.1636 5.437 55.5816 5.0208 56.0843 4.73141C56.587 4.44202 57.1568 4.28956 57.7369 4.28926C58.3174 4.28939 58.8876 4.44215 59.3904 4.73222C59.8932 5.02229 60.311 5.43947 60.6017 5.94192ZM3.94638 17.4897L4.77445 17.5297H17.1868L17.1459 16.7042C17.0338 15.3435 16.0702 14.3495 14.7052 14.2608L13.8771 14.22H6.43058L16.3587 4.2884L16.3179 3.4638C16.2536 2.08919 15.2491 1.09603 13.8771 1.02044L13.049 0.983076L0.636719 0.9796L0.677557 1.80767C0.786171 3.15534 1.76369 4.17022 3.11745 4.24843L3.94638 4.28926H11.3929L1.46479 14.2209L1.50562 15.0489C1.5873 16.4131 2.57177 17.4011 3.94638 17.4888V17.4897ZM47.8661 3.40211C48.6347 4.1705 49.2443 5.08277 49.6603 6.0868C50.0762 7.09084 50.2903 8.16698 50.2903 9.25376C50.2903 10.3405 50.0762 11.4167 49.6603 12.4207C49.2443 13.4248 48.6347 14.337 47.8661 15.1054C46.3134 16.6569 44.2082 17.5284 42.0132 17.5284C39.8181 17.5284 37.7129 16.6569 36.1602 15.1054C32.9287 11.8739 32.9287 6.63357 36.1602 3.40211C36.9281 2.63398 37.8397 2.02461 38.843 1.60881C39.8464 1.193 40.9218 0.978901 42.0079 0.978731C43.0958 0.977976 44.1732 1.1917 45.1784 1.60767C46.1836 2.02365 47.0969 2.63372 47.8661 3.40298V3.40211ZM45.5244 5.74555C46.4552 6.67704 46.978 7.93998 46.978 9.2568C46.978 10.5736 46.4552 11.8366 45.5244 12.7681C44.5929 13.6988 43.33 14.2217 42.0132 14.2217C40.6963 14.2217 39.4334 13.6988 38.5019 12.7681C37.5711 11.8366 37.0483 10.5736 37.0483 9.2568C37.0483 7.93998 37.5711 6.67704 38.5019 5.74555C39.4334 4.81477 40.6963 4.29192 42.0132 4.29192C43.33 4.29192 44.5929 4.81477 45.5244 5.74555ZM24.6402 0.978731C25.7264 0.979015 26.8019 1.19325 27.8052 1.60921C28.8086 2.02516 29.7202 2.63469 30.488 3.40298C33.7203 6.63357 33.7203 11.8748 30.488 15.1054C28.9352 16.6569 26.83 17.5284 24.635 17.5284C22.44 17.5284 20.3348 16.6569 18.7821 15.1054C15.5506 11.8739 15.5506 6.63357 18.7821 3.40211C19.5499 2.63398 20.4616 2.02461 21.4649 1.60881C22.4683 1.193 23.5437 0.978901 24.6298 0.978731H24.6402ZM28.1463 5.74381C29.0773 6.67534 29.6003 7.93846 29.6003 9.2555C29.6003 10.5725 29.0773 11.8357 28.1463 12.7672C27.2148 13.698 25.9519 14.2208 24.635 14.2208C23.3182 14.2208 22.0553 13.698 21.1238 12.7672C20.193 11.8357 19.6702 10.5728 19.6702 9.25593C19.6702 7.93911 20.193 6.67617 21.1238 5.74468C22.0553 4.8139 23.3182 4.29105 24.635 4.29105C25.9519 4.29105 27.2148 4.8139 28.1463 5.74468V5.74381Z"
              fill="#9CA3AF"
            />
          </svg>
        </li>
        <li id="slack-logo" className="justify-self-center">
          <svg
            width="93"
            height="37"
            viewBox="0 0 93 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="sm:w-[6.5rem] sm:h-12"
          >
            <g clipPath="url(#clip0_12_47011)">
              <path
                d="M29.516 24.8416L30.6205 22.26C31.8298 23.1556 33.4072 23.6296 34.9849 23.6296C36.1418 23.6296 36.8779 23.182 36.8779 22.4972C36.8515 20.6005 29.9104 22.0756 29.8576 17.307C29.8312 14.8835 31.9874 13.0131 35.0377 13.0131C36.8515 13.0131 38.666 13.4611 39.9541 14.4886L38.9221 17.1252C37.7369 16.3631 36.273 15.8318 34.8797 15.8318C33.9332 15.8318 33.302 16.2794 33.302 16.8594C33.3283 18.7297 40.3226 17.7022 40.4014 22.26C40.4014 24.7363 38.2976 26.4751 35.3001 26.4751C33.0919 26.4751 31.0673 25.9483 29.5156 24.8416H29.516ZM73.4949 21.3252C73.2161 21.8206 72.8105 22.2329 72.3198 22.5198C71.8292 22.8067 71.271 22.958 70.7025 22.958C68.931 22.958 67.495 21.519 67.495 19.7441C67.495 17.9692 68.931 16.5302 70.7025 16.5302C71.271 16.5302 71.8292 16.6815 72.3198 16.9684C72.8105 17.2553 73.2161 17.6676 73.4949 18.163L76.5655 16.4585C75.4154 14.403 73.2215 13.0131 70.7025 13.0131C66.9924 13.0131 63.9847 16.0264 63.9847 19.7441C63.9847 23.4614 66.9924 26.4751 70.7025 26.4751C73.2215 26.4751 75.4154 25.0852 76.5655 23.0297L73.4949 21.3252ZM42.3939 26.2115H46.2326V7.40997H42.3943L42.3939 26.2115ZM78.5041 7.40997V26.2115H82.3428V20.5786L86.8916 26.2115H91.7983L86.0138 19.5197L91.3775 13.2756H86.6812L82.3428 18.4669V7.40997H78.5041ZM58.0592 13.2763V14.8046C57.4283 13.7507 55.877 13.0131 54.2469 13.0131C50.8814 13.0131 48.2259 15.9902 48.2259 19.7309C48.2259 23.4716 50.8814 26.4751 54.2469 26.4751C55.877 26.4751 57.4283 25.7375 58.0592 24.6836V26.2115H61.8979V13.2763H58.0592ZM58.0592 21.3512C57.5071 22.2732 56.3502 22.9576 55.0621 22.9576C53.2902 22.9576 51.8542 21.519 51.8542 19.7441C51.8542 17.9692 53.2902 16.5302 55.0621 16.5302C56.3502 16.5302 57.5071 17.2414 58.0592 18.1894V21.3512Z"
                fill="#9CA3AF"
              />
              <path
                d="M9.24382 6.9924C7.99981 6.9924 6.99148 8.00299 6.99148 9.24926C6.99118 9.54534 7.0492 9.83858 7.16223 10.1122C7.27526 10.3859 7.44109 10.6346 7.65023 10.8442C7.85938 11.0537 8.10776 11.2201 8.38119 11.3336C8.65462 11.4472 8.94774 11.5058 9.24382 11.5061H11.4965V9.24926C11.497 8.65127 11.26 8.07757 10.8375 7.65434C10.4151 7.2311 9.84181 6.993 9.24382 6.9924ZM9.24382 13.0107H3.2372C1.99319 13.0107 0.984863 14.0213 0.984863 15.2679C0.984863 16.5142 1.99319 17.5248 3.2372 17.5248H9.24419C10.4878 17.5248 11.4965 16.5142 11.4965 15.2679C11.4965 14.0213 10.4878 13.0107 9.24382 13.0107Z"
                fill="#9CA3AF"
              />
              <path
                d="M23.5092 15.2679C23.5092 14.0213 22.5005 13.0107 21.2565 13.0107C20.0125 13.0107 19.0042 14.0213 19.0042 15.2679V17.5248H21.2565C21.8545 17.5242 22.4278 17.2861 22.8502 16.8629C23.2727 16.4396 23.5097 15.8659 23.5092 15.2679ZM17.5026 15.2679V9.24926C17.5031 8.65127 17.2661 8.07757 16.8436 7.65433C16.4212 7.2311 15.8479 6.993 15.2499 6.9924C14.0059 6.9924 12.9976 8.00299 12.9976 9.24926V15.2676C12.9976 16.5146 14.0059 17.5252 15.2499 17.5252C15.8479 17.5246 16.4212 17.2865 16.8436 16.8632C17.2661 16.44 17.5031 15.8663 17.5026 15.2683"
                fill="#9CA3AF"
              />
              <path
                d="M15.2499 29.5628C15.8479 29.5622 16.4212 29.3241 16.8436 28.9009C17.2661 28.4776 17.5031 27.9039 17.5026 27.3059C17.5031 26.7079 17.2661 26.1342 16.8436 25.711C16.4212 25.2878 15.8479 25.0497 15.2499 25.0491H12.9976V27.3059C12.9976 28.5522 14.0059 29.5628 15.2499 29.5628ZM15.2499 23.5445H21.2569C22.5005 23.5445 23.5092 22.5339 23.5092 21.2873C23.5097 20.6893 23.2727 20.1156 22.8502 19.6923C22.4278 19.2691 21.8545 19.031 21.2565 19.0304H15.2499C14.0059 19.0304 12.9976 20.041 12.9976 21.2873C12.9973 21.5833 13.0553 21.8766 13.1683 22.1502C13.2813 22.4239 13.4472 22.6726 13.6563 22.8822C13.8655 23.0917 14.1138 23.2581 14.3873 23.3716C14.6607 23.4852 14.9538 23.5438 15.2499 23.5441"
                fill="#9CA3AF"
              />
              <path
                d="M0.984864 21.2873C0.984567 21.5833 1.04259 21.8766 1.15562 22.1502C1.26865 22.4239 1.43447 22.6726 1.64362 22.8822C1.85277 23.0917 2.10115 23.2581 2.37458 23.3716C2.648 23.4852 2.94112 23.5438 3.2372 23.5441C3.8352 23.5435 4.40846 23.3054 4.83092 22.8822C5.25337 22.459 5.49042 21.8853 5.48992 21.2873V19.0304H3.2372C1.99319 19.0304 0.984864 20.041 0.984864 21.2873ZM6.99148 21.2873V27.3056C6.99148 28.5522 7.99981 29.5628 9.24382 29.5628C9.84181 29.5622 10.4151 29.3241 10.8375 28.9009C11.26 28.4776 11.497 27.9039 11.4965 27.3059V21.2873C11.4968 20.9911 11.4388 20.6979 11.3257 20.4242C11.2127 20.1505 11.0468 19.9018 10.8376 19.6922C10.6285 19.4826 10.38 19.3163 10.1066 19.2028C9.83309 19.0892 9.53993 19.0306 9.24382 19.0304C7.99981 19.0304 6.99148 20.041 6.99148 21.2873Z"
                fill="#9CA3AF"
              />
            </g>
            <defs>
              <clipPath id="clip0_12_47011">
                <rect
                  width="91.0301"
                  height="36.1111"
                  fill="white"
                  transform="translate(0.984863 0.444458)"
                />
              </clipPath>
            </defs>
          </svg>
        </li>
        <li id="amazon-logo" className="justify-self-center">
          <svg
            width="83"
            height="37"
            viewBox="0 0 83 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="sm:w-32 sm:h-12"
          >
            <g clipPath="url(#clip0_12_47018)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M51.23 28.8864C46.4426 32.4151 39.5035 34.2978 33.5292 34.2978C25.1521 34.2978 17.6106 31.1994 11.9051 26.0463C11.4569 25.641 11.8585 25.0888 12.3964 25.4044C18.5537 28.9868 26.167 31.1421 34.0312 31.1421C39.335 31.1421 45.1695 30.0447 50.5343 27.7676C51.3447 27.4233 52.0225 28.2983 51.23 28.8864Z"
                fill="#9CA3AF"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M53.2203 26.6093C52.6107 25.8275 49.1752 26.2399 47.6332 26.4228C47.1635 26.4802 47.0917 26.0714 47.5149 25.7773C50.2511 23.8516 54.7408 24.4075 55.2644 25.0529C55.7879 25.702 55.1281 30.2025 52.5569 32.3506C52.1624 32.6805 51.7859 32.5048 51.9616 32.0673C52.539 30.6257 53.8335 27.3947 53.2203 26.6093Z"
                fill="#9CA3AF"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M47.7421 12.1833V10.3114C47.7421 10.0281 47.9572 9.83801 48.2154 9.83801H56.5961C56.865 9.83801 57.0802 10.0317 57.0802 10.3114V11.9143C57.0766 12.1833 56.8507 12.5347 56.449 13.0906L52.1063 19.2909C53.72 19.2514 55.4234 19.4917 56.8865 20.3165C57.2165 20.503 57.3061 20.7755 57.3312 21.0445V23.0419C57.3312 23.3145 57.03 23.6336 56.7144 23.4687C54.136 22.1167 50.7113 21.9697 47.8604 23.483C47.5699 23.6408 47.2651 23.3252 47.2651 23.0527V21.1556C47.2651 20.8508 47.2687 20.3309 47.5735 19.8682L52.6048 12.6531H48.2262C47.9572 12.6531 47.7421 12.463 47.7421 12.1833Z"
                fill="#9CA3AF"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.1708 23.8632H14.6211C14.3772 23.8452 14.1836 23.6623 14.1656 23.4292V10.3437C14.1656 10.0819 14.3844 9.8739 14.6569 9.8739H17.0345C17.2819 9.88465 17.4792 10.0747 17.4971 10.3114V12.022H17.5437C18.1641 10.3688 19.3296 9.59777 20.9003 9.59777C22.4961 9.59777 23.493 10.3688 24.2102 12.022C24.827 10.3688 26.2292 9.59777 27.7318 9.59777C28.8004 9.59777 29.9695 10.0389 30.6831 11.0286C31.49 12.1295 31.325 13.7289 31.325 15.1311L31.3214 23.3898C31.3214 23.6516 31.1027 23.8632 30.8301 23.8632H28.284C28.0294 23.8452 27.825 23.6408 27.825 23.3898V16.4543C27.825 15.9021 27.8752 14.525 27.7533 14.0015C27.5632 13.1229 26.993 12.8754 26.2543 12.8754C25.6375 12.8754 24.992 13.2878 24.7302 13.9477C24.4684 14.6075 24.4935 15.712 24.4935 16.4543V23.3898C24.4935 23.6516 24.2748 23.8632 24.0022 23.8632H21.4561C21.1979 23.8452 20.9971 23.6408 20.9971 23.3898L20.9935 16.4543C20.9935 14.9948 21.2338 12.8467 19.4228 12.8467C17.5903 12.8467 17.6621 14.941 17.6621 16.4543V23.3898C17.6621 23.6516 17.4433 23.8632 17.1708 23.8632Z"
                fill="#9CA3AF"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M64.2953 9.59777C68.0786 9.59777 70.1262 12.8467 70.1262 16.9779C70.1262 20.9692 67.8634 24.1357 64.2953 24.1357C60.5801 24.1357 58.5576 20.8867 58.5576 16.838C58.5576 12.7643 60.6052 9.59777 64.2953 9.59777ZM64.3168 12.2694C62.4377 12.2694 62.3193 14.8298 62.3193 16.4256C62.3193 18.025 62.2942 21.439 64.2953 21.439C66.2712 21.439 66.3644 18.6849 66.3644 17.0066C66.3644 15.9021 66.3178 14.5824 65.9843 13.5353C65.6974 12.6244 65.1272 12.2694 64.3168 12.2694Z"
                fill="#9CA3AF"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M75.0321 23.8632H72.4931C72.2385 23.8452 72.0341 23.6408 72.0341 23.3898L72.0305 10.3006C72.052 10.0604 72.2636 9.8739 72.5218 9.8739H74.885C75.1074 9.88465 75.2903 10.0353 75.3405 10.2397V12.2407H75.3871C76.1007 10.4513 77.1012 9.59777 78.862 9.59777C80.0059 9.59777 81.1212 10.0102 81.8384 11.1398C82.5054 12.1869 82.5054 13.9477 82.5054 15.2136V23.4508C82.4767 23.6803 82.2652 23.8632 82.0141 23.8632H79.4573C79.2242 23.8452 79.0305 23.6731 79.0054 23.4508V16.3432C79.0054 14.9123 79.1704 12.8181 77.4096 12.8181C76.7892 12.8181 76.2191 13.234 75.9358 13.8652C75.5771 14.6649 75.5305 15.461 75.5305 16.3432V23.3898C75.5269 23.6516 75.3046 23.8632 75.0321 23.8632Z"
                fill="#9CA3AF"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M41.0612 17.6126C41.0612 18.606 41.0863 19.4343 40.5843 20.3165C40.1791 21.0337 39.5336 21.4748 38.8199 21.4748C37.8409 21.4748 37.2672 20.7289 37.2672 19.628C37.2672 17.4548 39.2144 17.0604 41.0612 17.0604V17.6126ZM43.6324 23.8273C43.4639 23.9779 43.22 23.9886 43.03 23.8882C42.1837 23.1854 42.0295 22.859 41.5669 22.1884C40.1683 23.6157 39.1749 24.0424 37.364 24.0424C35.2159 24.0424 33.5484 22.7192 33.5484 20.0691C33.5484 17.9999 34.6673 16.5906 36.2667 15.9021C37.6509 15.2924 39.5838 15.1848 41.0612 15.0163V14.6864C41.0612 14.0803 41.1078 13.3631 40.7492 12.8396C40.4408 12.3698 39.8455 12.1761 39.3184 12.1761C38.3466 12.1761 37.4823 12.6746 37.2707 13.7074C37.2277 13.9369 37.0592 14.1628 36.8261 14.1736L34.3553 13.9082C34.1473 13.8616 33.9142 13.693 33.9751 13.3739C34.5417 10.3759 37.2528 9.47223 39.677 9.47223C40.9178 9.47223 42.5387 9.80215 43.5177 10.7417C44.7585 11.9 44.6401 13.4456 44.6401 15.1275V19.1008C44.6401 20.295 45.135 20.8186 45.6012 21.4641C45.7626 21.6936 45.7984 21.9697 45.5904 22.1418C45.0704 22.5757 44.1452 23.3826 43.636 23.8344L43.6324 23.8273Z"
                fill="#9CA3AF"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.63538 17.6126C7.63538 18.6059 7.66047 19.4343 7.15843 20.3165C6.7532 21.0337 6.11129 21.4748 5.39408 21.4748C4.41508 21.4748 3.8449 20.7289 3.8449 19.628C3.8449 17.4548 5.79213 17.0604 7.63538 17.0604V17.6126ZM10.2066 23.8273C10.038 23.9779 9.79419 23.9886 9.60413 23.8882C8.75781 23.1854 8.6072 22.859 8.14101 22.1884C6.74244 23.6157 5.75269 24.0424 3.93814 24.0424C1.79366 24.0424 0.122559 22.7192 0.122559 20.0691C0.122559 17.9999 1.245 16.5906 2.8408 15.9021C4.22502 15.2924 6.15791 15.1848 7.63538 15.0163V14.6864C7.63538 14.0803 7.68199 13.3631 7.32697 12.8395C7.01498 12.3698 6.4197 12.1761 5.89613 12.1761C4.92431 12.1761 4.05648 12.6746 3.8449 13.7074C3.80187 13.9369 3.63332 14.1628 3.40381 14.1736L0.929424 13.9082C0.721432 13.8616 0.491923 13.693 0.5493 13.3739C1.11949 10.3759 3.82697 9.47223 6.25115 9.47223C7.49193 9.47223 9.11283 9.80215 10.0918 10.7417C11.3326 11.9 11.2143 13.4456 11.2143 15.1275V19.1008C11.2143 20.295 11.7091 20.8186 12.1753 21.464C12.3403 21.6936 12.3762 21.9697 12.1682 22.1418C11.6482 22.5757 10.723 23.3826 10.2138 23.8344L10.2066 23.8273Z"
                fill="#9CA3AF"
              />
            </g>
            <defs>
              <clipPath id="clip0_12_47018">
                <rect
                  width="82.7546"
                  height="36.1111"
                  fill="white"
                  transform="translate(0.122559 0.444458)"
                />
              </clipPath>
            </defs>
          </svg>
        </li>
        <li id="adobe-logo" className="justify-self-center">
          <svg
            width="101"
            height="37"
            viewBox="0 0 101 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="sm:w-[7rem] sm:h-12"
          >
            <g clipPath="url(#clip0_12_47022)">
              <path
                d="M11.4813 4.95831H0.471191V31.2893L11.4813 4.95831Z"
                fill="#9CA3AF"
              />
              <path
                d="M19.2285 4.95831H30.2243V31.2893L19.2285 4.95831Z"
                fill="#9CA3AF"
              />
              <path
                d="M15.3539 14.6632L22.3616 31.2895H17.7639L15.6695 25.9961H10.541L15.3539 14.6632Z"
                fill="#9CA3AF"
              />
              <path
                d="M48.1861 21.7026L49.4843 25.4252C49.5274 25.5184 49.5919 25.5615 49.7067 25.5615H52.2028C52.3391 25.5615 52.3606 25.4969 52.3391 25.3606L47.1819 11.0367C47.1604 10.922 47.1389 10.9005 47.0241 10.9005H43.9255C43.8394 10.9005 43.7892 10.965 43.7892 11.0583C43.7462 11.8114 43.6816 12.0409 43.5884 12.2633L38.9907 25.3391C38.9691 25.4969 39.0194 25.5615 39.1485 25.5615H41.3792C41.5155 25.5615 41.58 25.5184 41.6302 25.3822L42.8568 21.7026H48.1861ZM43.5669 19.271C44.2411 17.234 45.1305 14.6231 45.4891 13.1312H45.5107C45.9554 14.6948 47.0026 17.7934 47.476 19.271H43.5669Z"
                fill="#9CA3AF"
              />
              <path
                d="M58.9688 25.7831C60.3101 25.7831 61.7374 25.5393 63.1863 24.9152C63.3011 24.8722 63.3226 24.822 63.3226 24.7144C63.2796 24.3127 63.2294 23.7317 63.2294 23.287V9.80233C63.2294 9.71625 63.2294 9.67322 63.1218 9.67322H60.6902C60.597 9.67322 60.5539 9.71625 60.5539 9.83102V14.4C60.1738 14.357 59.9084 14.3355 59.5928 14.3355C55.6693 14.3355 53.2593 16.9248 53.2593 20.1597C53.2593 23.911 55.7339 25.7831 58.9688 25.7831ZM60.5539 23.287C60.1523 23.4161 59.7075 23.4663 59.2557 23.4663C57.4768 23.4663 56.0208 22.4622 56.0208 20.0234C56.0208 17.8645 57.5199 16.5877 59.5067 16.5877C59.9084 16.5877 60.2598 16.6307 60.5539 16.7455V23.287Z"
                fill="#9CA3AF"
              />
              <path
                d="M71.0788 14.3352C67.7292 14.3352 65.6562 16.903 65.6562 20.0734C65.6562 22.9066 67.306 25.7829 71.0286 25.7829C74.1774 25.7829 76.3866 23.4661 76.3866 20.0016C76.3866 16.9461 74.5145 14.3352 71.0788 14.3352ZM70.9425 16.5874C72.8361 16.5874 73.6395 18.2156 73.6395 20.0734C73.6395 22.3686 72.456 23.5091 71.0788 23.5091C69.3789 23.5091 68.3747 22.0817 68.3747 20.0232C68.3747 17.9072 69.4434 16.5874 70.9425 16.5874Z"
                fill="#9CA3AF"
              />
              <path
                d="M78.901 9.67322C78.8077 9.67322 78.7432 9.71625 78.7432 9.83102V25.0945C78.7432 25.1591 78.8077 25.2739 78.901 25.2954C79.9697 25.6253 81.0886 25.7831 82.2434 25.7831C85.5501 25.7831 88.7634 23.7317 88.7634 19.6002C88.7634 16.6092 86.712 14.3355 83.4987 14.3355C82.7599 14.3355 82.0713 14.4502 81.4688 14.6511L81.4401 9.85254C81.4401 9.69474 81.3971 9.67322 81.2393 9.67322H78.901ZM86.0163 19.8728C86.0163 22.3474 84.3235 23.5094 82.4945 23.5094C82.1143 23.5094 81.7772 23.4879 81.4688 23.3946V16.8818C81.8203 16.7455 82.2434 16.6307 83.0253 16.6307C84.7897 16.6307 86.0163 17.7497 86.0163 19.8728Z"
                fill="#9CA3AF"
              />
              <path
                d="M97.8385 20.6759C98.9288 20.6759 99.8254 20.6544 100.134 20.5826C100.249 20.5611 100.292 20.5181 100.313 20.4248C100.378 20.181 100.406 19.6717 100.406 19.0477C100.406 16.9246 99.1296 14.3352 95.8302 14.3352C92.459 14.3352 90.5869 17.0824 90.5869 20.181C90.5869 22.9281 92.0358 25.7829 96.0956 25.7829C97.6162 25.7829 98.5988 25.539 99.4452 25.1373C99.5313 25.0943 99.5743 25.0225 99.5743 24.8934V23.0357C99.5743 22.9281 99.5097 22.9066 99.4452 22.9496C98.5988 23.3083 97.6807 23.4876 96.6765 23.4876C94.4028 23.4876 93.3699 22.2324 93.3054 20.6759H97.8385ZM93.3054 18.7536C93.4847 17.6633 94.1733 16.4798 95.7154 16.4798C97.4153 16.4798 97.86 17.9072 97.86 18.5528C97.86 18.5743 97.86 18.6675 97.86 18.7321C97.7668 18.7536 97.4799 18.7536 96.6335 18.7536H93.3054Z"
                fill="#9CA3AF"
              />
            </g>
            <defs>
              <clipPath id="clip0_12_47022">
                <rect
                  width="100.058"
                  height="36.1111"
                  fill="white"
                  transform="translate(0.471191 0.444458)"
                />
              </clipPath>
            </defs>
          </svg>
        </li>
      </ul>
    </section>
  );
};

export default function Introduction() {
  return (
    <section id="intro" className="pt-4 p-8 sm:p-12 md:p-8 sm:m-8 sm:min-h-[80vh] flex flex-col justify-start sm:place-content-center ">
      <HeadingDescription />
      <CompaniesDescription/>
    </section>
  );
}
