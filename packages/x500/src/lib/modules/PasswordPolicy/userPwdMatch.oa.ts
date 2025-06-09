/* eslint-disable */
import { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.js";
import { id_mr_userPwdMatch } from "../PasswordPolicy/id-mr-userPwdMatch.va.js";
import { _decode_UserPwd, _encode_UserPwd } from "../PasswordPolicy/UserPwd.ta.js";
import { userPwdDescription } from "../PasswordPolicy/userPwdDescription.oa.js";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.js";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.js";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca.js";
export { id_mr_userPwdMatch } from "../PasswordPolicy/id-mr-userPwdMatch.va.js";
export {
    UserPwd,
    _decode_UserPwd,
    _encode_UserPwd,
} from "../PasswordPolicy/UserPwd.ta.js";
export { userPwdDescription } from "../PasswordPolicy/userPwdDescription.oa.js";

/* START_OF_SYMBOL_DEFINITION userPwdMatch */
/**
 * @summary userPwdMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * userPwdMatch MATCHING-RULE ::= {
 *   SYNTAX       UserPwd
 *   LDAP-SYNTAX  userPwdDescription.&id
 *   LDAP-NAME    {"userPwdMatch"}
 *   ID           id-mr-userPwdMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const userPwdMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_UserPwd,
    },
    encoderFor: {
        "&AssertionType": _encode_UserPwd,
    },
    "&ldapSyntax": userPwdDescription["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["userPwdMatch"],
    "&id": id_mr_userPwdMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION userPwdMatch */

/* eslint-enable */
