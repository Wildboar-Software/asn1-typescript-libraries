/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
import { id_at_userPwd } from "../PasswordPolicy/id-at-userPwd.va.mjs";
import {
    UserPwd,
    _decode_UserPwd,
    _encode_UserPwd,
} from "../PasswordPolicy/UserPwd.ta.mjs";
import { userPwdDescription } from "../PasswordPolicy/userPwdDescription.oa.mjs";
import { userPwdMatch } from "../PasswordPolicy/userPwdMatch.oa.mjs";
/**
 * @summary userPwd
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * userPwd    ATTRIBUTE ::= {
 *   WITH SYNTAX              UserPwd
 *   EQUALITY MATCHING RULE   userPwdMatch
 *   SINGLE VALUE             TRUE
 *   LDAP-SYNTAX              userPwdDescription.&id
 *   LDAP-NAME                {"userPwd"}
 *   ID                       id-at-userPwd }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<UserPwd>}
 * @implements {ATTRIBUTE<UserPwd>}
 */
export const userPwd: ATTRIBUTE<UserPwd> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_UserPwd,
    },
    encoderFor: {
        "&Type": _encode_UserPwd,
    },
    "&equality-match": userPwdMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": userPwdDescription["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["userPwd"],
    "&id": id_at_userPwd /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
