/* eslint-disable */
import { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
import { id_mr_userPwdMatch } from "../PasswordPolicy/id-mr-userPwdMatch.va.mjs";
import { _decode_UserPwd, _encode_UserPwd } from "../PasswordPolicy/UserPwd.ta.mjs";
import { userPwdDescription } from "../PasswordPolicy/userPwdDescription.oa.mjs";
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

/* eslint-enable */
