/* eslint-disable */
import { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.js";
import { id_mr_pwdEncAlgMatch } from "../PasswordPolicy/id-mr-pwdEncAlgMatch.va.js";
import {
    PwdEncAlg,
    _decode_PwdEncAlg,
    _encode_PwdEncAlg,
} from "../PasswordPolicy/PwdEncAlg.ta.js";
import { pwdEncAlgDescription } from "../PasswordPolicy/pwdEncAlgDescription.oa.js";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.js";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.js";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca.js";
export { id_mr_pwdEncAlgMatch } from "../PasswordPolicy/id-mr-pwdEncAlgMatch.va.js";
export {
    PwdEncAlg,
    _decode_PwdEncAlg,
    _encode_PwdEncAlg,
} from "../PasswordPolicy/PwdEncAlg.ta.js";
export { pwdEncAlgDescription } from "../PasswordPolicy/pwdEncAlgDescription.oa.js";

/* START_OF_SYMBOL_DEFINITION pwdEncAlgMatch */
/**
 * @summary pwdEncAlgMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pwdEncAlgMatch MATCHING-RULE ::= {
 *   SYNTAX       PwdEncAlg
 *   LDAP-SYNTAX  pwdEncAlgDescription.&id
 *   LDAP-NAME    {"pwdEncAlgMatch"}
 *   ID           id-mr-pwdEncAlgMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE<PwdEncAlg>}
 * @implements {MATCHING_RULE<PwdEncAlg>}
 */
export const pwdEncAlgMatch: MATCHING_RULE<PwdEncAlg> = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_PwdEncAlg,
    },
    encoderFor: {
        "&AssertionType": _encode_PwdEncAlg,
    },
    "&ldapSyntax": pwdEncAlgDescription["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["pwdEncAlgMatch"],
    "&id": id_mr_pwdEncAlgMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION pwdEncAlgMatch */

/* eslint-enable */
