/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
import { id_oa_pwdVocabulary } from "../PasswordPolicy/id-oa-pwdVocabulary.va.mjs";
import {
    PwdVocabulary,
    _decode_PwdVocabulary,
    _encode_PwdVocabulary,
} from "../PasswordPolicy/PwdVocabulary.ta.mjs";
import { pwdVocabularyDescription } from "../PasswordPolicy/pwdVocabularyDescription.oa.mjs";
import { bitStringMatch } from "../SelectedAttributeTypes/bitStringMatch.oa.mjs";
/* START_OF_SYMBOL_DEFINITION pwdVocabulary */
/**
 * @summary pwdVocabulary
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pwdVocabulary ATTRIBUTE ::= {
 *   WITH SYNTAX              PwdVocabulary
 *   EQUALITY MATCHING RULE   bitStringMatch
 *   SINGLE VALUE             TRUE
 *   USAGE                    directoryOperation
 *   LDAP-SYNTAX              pwdVocabularyDescription.&id
 *   LDAP-NAME                {"pwdVocabulary"}
 *   ID                       id-oa-pwdVocabulary }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<PwdVocabulary>}
 * @implements {ATTRIBUTE<PwdVocabulary>}
 */
export const pwdVocabulary: ATTRIBUTE<PwdVocabulary> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_PwdVocabulary,
    },
    encoderFor: {
        "&Type": _encode_PwdVocabulary,
    },
    "&equality-match": bitStringMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&usage": directoryOperation /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": pwdVocabularyDescription["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["pwdVocabulary"],
    "&id": id_oa_pwdVocabulary /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION pwdVocabulary */

/* eslint-enable */
