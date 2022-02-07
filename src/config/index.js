const isStaging = false;

const CONFIG = {
  ANDROID_PAYMENT_ENVIRONMENT: isStaging ? 0 : 1,
  APPLE_PAY_MERCHANT_ID: isStaging ? '.....' : '....',
  BASE_URL: isStaging ? '.....' : '.....',
};

export default CONFIG;
