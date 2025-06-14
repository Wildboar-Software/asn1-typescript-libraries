/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
import { id_oa_pwdAlphabet } from "../PasswordPolicy/id-oa-pwdAlphabet.va.mjs";
import {
    PwdAlphabet,
    _decode_PwdAlphabet,
    _encode_PwdAlphabet,
} from "../PasswordPolicy/PwdAlphabet.ta.mjs";
import { pwdAlphabetDescription } from "../PasswordPolicy/pwdAlphabetDescription.oa.mjs";
/* START_OF_SYMBOL_DEFINITION pwdAlphabet */
/**
 * @summary pwdAlphabet
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pwdAlphabet ATTRIBUTE ::= {
 *   WITH SYNTAX              PwdAlphabet
 *   SINGLE VALUE             TRUE
 *   USAGE                    directoryOperation
 *   LDAP-SYNTAX              pwdAlphabetDescription.&id
 *   LDAP-NAME                {"pwdAlphabet"}
 *   ID                       id-oa-pwdAlphabet }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<PwdAlphabet>}
 * @implements {ATTRIBUTE<PwdAlphabet>}
 */
export const pwdAlphabet: ATTRIBUTE<PwdAlphabet> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_PwdAlphabet,
    },
    encoderFor: {
        "&Type": _encode_PwdAlphabet,
    },
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&usage": directoryOperation /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": pwdAlphabetDescription["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["pwdAlphabet"],
    "&id": id_oa_pwdAlphabet /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION pwdAlphabet */

/* eslint-enable */
