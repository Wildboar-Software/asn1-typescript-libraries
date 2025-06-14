/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
import { id_oa_pwdEncAlg } from "../PasswordPolicy/id-oa-pwdEncAlg.va.mjs";
import {
    PwdEncAlg,
    _decode_PwdEncAlg,
    _encode_PwdEncAlg,
} from "../PasswordPolicy/PwdEncAlg.ta.mjs";
import { pwdEncAlgDescription } from "../PasswordPolicy/pwdEncAlgDescription.oa.mjs";
import { pwdEncAlgMatch } from "../PasswordPolicy/pwdEncAlgMatch.oa.mjs";
/* START_OF_SYMBOL_DEFINITION pwdEncAlg */
/**
 * @summary pwdEncAlg
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pwdEncAlg ATTRIBUTE ::= {
 *   WITH SYNTAX              PwdEncAlg
 *   EQUALITY MATCHING RULE   pwdEncAlgMatch
 *   SINGLE VALUE             TRUE
 *   USAGE                    directoryOperation
 *   LDAP-SYNTAX              pwdEncAlgDescription.&id
 *   LDAP-NAME                {"pwdEncAlg"}
 *   ID                       id-oa-pwdEncAlg }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<PwdEncAlg>}
 * @implements {ATTRIBUTE<PwdEncAlg>}
 */
export const pwdEncAlg: ATTRIBUTE<PwdEncAlg> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_PwdEncAlg,
    },
    encoderFor: {
        "&Type": _encode_PwdEncAlg,
    },
    "&equality-match": pwdEncAlgMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&usage": directoryOperation /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": pwdEncAlgDescription["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["pwdEncAlg"],
    "&id": id_oa_pwdEncAlg /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION pwdEncAlg */

/* eslint-enable */
