
export const signInStyles = {
    container: 'w-[1440px] h-[1024px] mx-auto flex rounded-[20px] bg-[#FCFCFC]',
    left: {
      section: 'w-[770px] h-[1024px] ml-[-70px]',
      wrapper: 'h-[827px] ml-[146px] mr-[96px] my-[98px] mt-[160px] flex flex-col items-center gap-[32px]',
      header: 'w-[528px] h-[203px] flex flex-col items-center gap-[24px]',
      logo: 'text-4xl font-inter font-extrabold text-[#1A093F]',
      title: 'text-4xl font-sofia-pro-semibold text-g900 text-center',
      socialBtn: 'w-[528px] h-[64px] flex items-center justify-center gap-[16px] border border-g300 rounded-[10px]',
      divider: 'flex items-center divider-with-lines',
      form: 'flex flex-col gap-[24px]',
      inputWrapper: 'flex flex-col gap-[8px]',
      inputLabel: 'text-base font-sofia-pro-medium text-g400',
      inputField: 'w-[528px] h-[64px] border border-[#CBCAD7] rounded-[6px] px-[20px] placeholder-g500',
      passwordWrapper: 'relative w-[528px] h-[64px]',
      passwordInput: 'w-full h-full border border-[#CBCAD7] rounded-[6px] px-[20px] pr-[48px] placeholder-g500',
      toggleBtn: 'absolute right-[16px] top-1/2 transform -translate-y-1/2 text-g600',
    },
    right: {
      section: 'w-[744px] h-[1024px] rounded-tl-[60px] rounded-bl-[60px] z-50 overflow-hidden bg-[#7874FF] rounded-[20px] relative',
      bgImage: 'opacity-60 w-[744px] h-[1024px] scale-x-[-1]',
      swiperWrapper: 'absolute top-0 left-0 w-full h-full z-10 flex items-center justify-center',
      controlWrapper: 'w-[523px] h-[95px] absolute top-[809px] left-[110px] flex flex-col items-center gap-[40px] z-20',
      footerText: 'text-g25 opacity-90 text-center text-lg leading-[27px] font-sofia-pro-medium',
      navBtn: 'text-white text-xl font-bold',
      pagination: 'custom-swiper-pagination signup-swiper-pagination flex gap-2 justify-center',
    },
  };
  
  export const signUpStyles = {
    container: 'w-[1440px] h-[1024px] mx-auto flex',
    leftPanel: 'w-[744px] h-[1024px] rounded-tr-[60px] rounded-br-[60px] z-50 overflow-hidden bg-[#7874FF] rounded-[20px] relative',
    leftImage: 'opacity-60 w-[744px] h-[1024px] scale-x-[-1]',
    swiperWrapper: 'absolute top-0 left-0 w-full h-full z-10 flex items-center justify-center',
    navPaginationWrapper: 'w-[523px] h-[95px] absolute top-[809px] left-[110px] flex flex-col items-center gap-[40px] z-20',
    navText: 'text-g25 opacity-90 text-center text-lg leading-[27px] font-sofia-pro-medium',
    navButtons: 'flex items-center justify-between w-full',
    rightPanel: 'w-[770px] rounded-[20px] h-[1024px] ml-[-70px] bg-[#FCFCFC]',
    rightContentWrapper: 'h-[827px] ml-[146px] mr-[96px] my-[98px] flex flex-col items-center gap-[32px]',
    headerSection: 'w-[528px] h-[203px] flex flex-col items-center gap-[24px]',
    logoText: 'text-4xl font-inter font-extrabold text-[#1A093F]',
    headingText: 'text-4xl font-sofia-pro-semibold text-g900 text-center',
    googleBtn: 'w-[528px] h-[64px] flex items-center justify-center gap-[16px] border border-g300 rounded-[10px]',
    googleBtnText: 'text-base font-sofia-pro-medium text-g800',
    divider: 'flex items-center divider-with-lines',
    formWrapper: 'flex flex-col gap-[24px]',
    formGroup: 'flex flex-col gap-[8px]',
    label: 'text-base font-sofia-pro-medium text-g400',
    input: 'w-[528px] h-[64px] border border-[#CBCAD7] rounded-[6px] px-[20px] placeholder-g500',
    passwordInputWrapper: 'relative w-[528px] h-[64px]',
    passwordInput: 'w-full h-full border border-[#CBCAD7] rounded-[6px] px-[20px] pr-[48px] placeholder-g500',
    toggleBtn: 'absolute right-[16px] top-1/2 transform -translate-y-1/2 text-g600',
  };
  
  export const footerMainStyles = {
    wrapper: "max-w-[1115px] mx-auto flex gap-[113px] mb-[85px]",
    section: {
      brand: "w-[299px] flex flex-col gap-[21px]",
      quickLinks: "w-[126px] flex flex-col gap-[6px]",
      categories: "w-[125px] flex flex-col gap-[6px]",
      getInTouch: "w-[226px] flex flex-col gap-[14px]",
    },
    text: "text-[#8C849F] text-base leading-[28.8px] font-sofia-pro-regular",
    heading: "font-sofia-pro-bold text-2xl leading-[33.6px] text-[#1A093F]",
    linkHover: "hover:border-b-2 hover:border-[#7874FF]",
    input: {
      wrapper: "w-[220px] h-[50px] border border-[#8C849F] rounded-full px-4 flex items-center relative",
      field: "w-[78px] h-[29px] bg-transparent text-[#8C849F] text-base leading-[28.8px] font-sofia-pro-regular outline-none placeholder:text-[#8C849F]",
      button: "absolute right-2 top-1/2 transform -translate-y-1/2 w-[40px] h-[40px] bg-[#7370FF] rounded-full flex items-center justify-center hover:bg-[#5a57e5] transition duration-300",
    },
    socialIcons: "w-[112px] flex items-center justify-between text-[#1A093F] cursor-pointer",
    followUsText: "text-[#1A093F] text-base leading-[28.8px] font-sofia-pro-regular",
  };
  
  
  export const heroSectionStyles = {
    badgeText: "absolute mt-[67px] ml-[42px] h-[25px] font-sofia-pro-bold leading-[25.2px] text-[#E97B0C] text-lg",
    titleUnderline: "w-[369px] h-[21px] absolute top-[147px] left-[332px] bg-[#FAE180]",
    heroTitle: "absolute w-[721px] h-[140px] mt-[109px] ml-[42px] font-sofia-pro-black text-[64px] text-[#1A093F] leading-[70.4px]",
    heroDescription: "absolute w-[691px] ml-[42px] mt-[266px] h-[58px] text-[#868093]",
    primaryBtn: "w-[171px] bg-[#7874FF] text-white text-base font-sofia-pro-medium text-center leading-[22.4px] shadow-[0px_4px_30px_rgba(120,116,255,0.2)] rounded-[100px]",
    secondaryBtn: "w-[171px] bg-[#EFF2FC] text-[#1C1C1C] text-base font-sofia-pro-medium text-center leading-[22.4px] rounded-[100px]",
    mockCardWrapper: "absolute w-[444px] h-[440px] top-[44px] right-[33px] rounded-[20px] bg-gradient-to-b from-[#CBD5F8] to-[#F6EFFC]",
    mockCard: "w-[324px] h-[367px] mx-[60px] mt-[36px] mb-[37px] rounded-[14px] bg-[#FFFFFF] shadow-[0px_4px_21.9px_0px_rgba(0,0,0,0.15)] flex flex-col",
    cardImage: "w-[296px] h-[95px] rounded-[5px] overflow-hidden",
    contentBlock: "bg-[#EAEDF0] rounded-[1px]",
    starRatingCard: "absolute w-[208px] h-[49px] rounded-[7.28px] p-[11.64px] flex gap-[11.64px] bg-[#FFFFFF] shadow-[0px_5.82px_27.65px_rgba(0,0,0,0.15)] ml-[876px] mt-[346px]",
    emojiCard: "absolute w-[111px] h-[111px] top-[418px] left-[1310px] rounded-[14.92px] p-[23.87px] bg-[#FFFFFF] shadow-[0px_11.94px_56.7px_0px_rgba(0,0,0,0.15)]",
  };
  
  export const howItWorksStyles = {
    heading: "text-5xl font-sofia-pro-black text-[#1A093F] leading-[67.2px] text-center",
    subHeading: "text-lg font-sofia-pro-bold text-[#E97B0C] text-center",
    paragraph: "text-base font-sofia-pro-regular text-[#8C849F] leading-[28.8px] text-center",
    cardTitle: "text-[20px] font-sofia-pro-black text-[#1A093F] leading-[30px] text-center",
    cardDesc: "text-base font-sofia-pro-regular text-[#8C849F] leading-[28.8px] text-center",
  };
  
  export const sandstoryStyles = {
    heading: "font-sofia-pro-extrabold text-lg text-[#E97B0C] leading-[25.2px]",
    title: "text-5xl leading-[67.2px] text-[#1A093F] font-sofia-pro-black",
    description: "w-[460px] text-[#191825BF] text-base font-sofia-pro-regular leading-[28.8px]",
    numberText: "font-sofia-pro-black text-[#F94681] text-[45.36px] leading-[45.36px]",
    statText: "text-[#191825BF] leading-[28.8px] text-base font-sofia-pro-regular",
    smallCircle: "w-[13px] h-[13px] rounded-[7.33px]",
    squareCircle: "w-[13px] h-[13px] rounded-[4.51px]",
    emojiSize: "w-[30px] h-[30px]",
    feedbackCard: "absolute w-[244px] h-[111px] top-[406px] left-[0px] rounded-[22px] p-[20px] bg-[#FFFFFF] shadow-[0px_16.9px_67.62px_0px_rgba(0,0,0,0.1)]",
  };
  
  export const testimonialStyles = {
    sectionWrapper: 'h-[422px] relative mx-[182px] mb-[113px] rounded-[60px] overflow-hidden',
    overlay: 'absolute inset-0 bg-[#7874FF] opacity-60 backdrop-blur-[30px]',
    heading: 'max-w-[950px] mx-auto mt-[60px] font-sofia-pro-black text-5xl leading-[67.2px] text-center text-white',
    avatarWrapper: 'flex justify-center mt-[17px] -space-x-4',
    avatarFrame: 'rounded-full border-2 border-white shadow-md flex items-center justify-center',
    avatarText: 'flex items-center justify-center text-[#1C1C1C] leading-[19.6px] text-sm font-sofia-pro-semibold',
    description: 'mx-auto text-center mt-[17px] max-w-[535px] font-sofia-pro-regular text-base leading-[28.8px] text-white/75',
    buttonWrapper: 'mt-[40px] flex items-center mx-auto space-x-2 px-4 py-2 rounded-full bg-white shadow-[0px_4px_30px_0px_rgba(120,116,255,0.2)]',
    buttonText: 'text-[#7874FF] font-sofia-pro-medium text-base leading-[22.4px]',
    buttonIconWrapper: 'w-[31px] h-[31px] flex items-center justify-center bg-[#7874FF] rounded-full',
  };
  
  export const topStoriesCardStyles = {
    container: "w-[301px] h-[512px] flex flex-col gap-[16px]",
    imageContainer: "w-[301px] h-[340px]",
    image: "h-full object-cover rounded-[30px]",
    descriptionContainer: "flex flex-col h-[147px] gap-[10px]",
    title: "text-2xl font-sofia-pro-semibold leading-[140%] text-[#1A093F]",
    authorDate: "text-[#8C849F] text-lg leading-[140%] font-sofia-pro-medium",
    ratingContainer: "flex items-center justify-center w-[72px] h-[30px] rounded-[15px] bg-[#FFF7EB] gap-[6px]",
    ratingText: "text-[#8C849F] text-[15px] leading-[30px] font-sofia-pro-medium",
  };
  
  export const whatTheySaysCardStyles = {
    container: "w-[310px] h-[347px] bg-[#F5F5F5] rounded-[10px] flex flex-col justify-between p-[20px] gap-[4px]",
    content: "w-[270px] h-[208px] flex flex-col gap-[20px]",
    title: "text-2xl font-sofia-pro-bold text-[#1A093F] leading-[140%]",
    description: "h-[87px] text-[#18191F] text-base font-sofia-pro-regular leading-[180%]",
    ratingContainer: "w-[138px] h-[20px] flex items-center gap-[11px]",
    ratingText: "text-[15px] font-sofia-pro-medium text-[#8C849F]",
    quoteIconContainer: "flex justify-end",
    authorContainer: "w-[227px] h-[59px] flex items-center gap-[8px]",
    authorImage: "rounded-full object-cover w-[56px] h-[56px]",
    authorInfo: "flex flex-col w-[163px]",
    authorName: "text-[20px] font-sofia-pro-bold text-[#18191F] leading-[30px] capitalize",
    authorCompany: "text-base font-sofia-pro-regular text-[#474A57] leading-[180%]",
  };
  