export const ENABLE_REDIS = false;
export const { REDIS_HOST, REDIS_PASS, REDIS_KEY_PREFIX } = {
  REDIS_HOST: "",
  REDIS_PASS: "",
  REDIS_KEY_PREFIX: "",
};

export const LARK_VERIFICATION_TOKEN = (
  process.env.LARK_VERIFICATION_TOKEN ?? ""
).split(",");

export const LARK_ENCRYPT_KEY = (process.env.LARK_APP_SECRET ?? "")!.split(",");

export const PROJECT_DOCX =
  "https://github.com/guMcrey";
export const ICON_DOCX =
  "https://github.com/guMcrey";

export const SITE_TITLE = "Advance 自定义飞书链接预览";
export const EDITOR_TITLE = "Advance 自定义飞书链接预览编辑器";
