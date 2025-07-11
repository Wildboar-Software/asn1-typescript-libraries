/* eslint-disable */
import { type SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca.mjs";
import { id_asx_pwdAlphabetDescription } from "../PasswordPolicy/id-asx-pwdAlphabetDescription.va.mjs";
import {
    PwdAlphabet,
    _decode_PwdAlphabet,
    _encode_PwdAlphabet,
} from "../PasswordPolicy/PwdAlphabet.ta.mjs";
/**
 * @summary pwdAlphabetDescription
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pwdAlphabetDescription SYNTAX-NAME ::= {
 *   LDAP-DESC         "Password Alphabet Description"
 *   DIRECTORY SYNTAX  PwdAlphabet
 *   ID                id-asx-pwdAlphabetDescription }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME<PwdAlphabet>}
 * @implements {SYNTAX_NAME<PwdAlphabet>}
 */
export const pwdAlphabetDescription: SYNTAX_NAME<PwdAlphabet> = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": _decode_PwdAlphabet,
    },
    encoderFor: {
        "&Type": _encode_PwdAlphabet,
    },
    "&ldapDesc": "Password Alphabet Description" /* OBJECT_FIELD_SETTING */,
    "&id": id_asx_pwdAlphabetDescription /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
