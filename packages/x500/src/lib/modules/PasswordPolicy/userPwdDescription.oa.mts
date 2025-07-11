/* eslint-disable */
import { type SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca.mjs";
import { id_asx_userPwdDescription } from "../PasswordPolicy/id-asx-userPwdDescription.va.mjs";
import {
    UserPwd,
    _decode_UserPwd,
    _encode_UserPwd,
} from "../PasswordPolicy/UserPwd.ta.mjs";
/**
 * @summary userPwdDescription
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * userPwdDescription SYNTAX-NAME ::= {
 *   LDAP-DESC         "User Password Description"
 *   DIRECTORY SYNTAX  UserPwd
 *   ID                id-asx-userPwdDescription }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME<UserPwd>}
 * @implements {SYNTAX_NAME<UserPwd>}
 */
export const userPwdDescription: SYNTAX_NAME<UserPwd> = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": _decode_UserPwd,
    },
    encoderFor: {
        "&Type": _encode_UserPwd,
    },
    "&ldapDesc": "User Password Description" /* OBJECT_FIELD_SETTING */,
    "&id": id_asx_userPwdDescription /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
