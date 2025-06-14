/* eslint-disable */
import { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca.mjs";
import { id_asx_pwdVocabularyDescription } from "../PasswordPolicy/id-asx-pwdVocabularyDescription.va.mjs";
import {
    PwdVocabulary,
    _decode_PwdVocabulary,
    _encode_PwdVocabulary,
} from "../PasswordPolicy/PwdVocabulary.ta.mjs";
/* START_OF_SYMBOL_DEFINITION pwdVocabularyDescription */
/**
 * @summary pwdVocabularyDescription
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pwdVocabularyDescription SYNTAX-NAME ::= {
 *   LDAP-DESC         "Password Vocabulary Description"
 *   DIRECTORY SYNTAX  PwdVocabulary
 *   ID                id-asx-pwdVocabularyDescription }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME<PwdVocabulary>}
 * @implements {SYNTAX_NAME<PwdVocabulary>}
 */
export const pwdVocabularyDescription: SYNTAX_NAME<PwdVocabulary> = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": _decode_PwdVocabulary,
    },
    encoderFor: {
        "&Type": _encode_PwdVocabulary,
    },
    "&ldapDesc": "Password Vocabulary Description" /* OBJECT_FIELD_SETTING */,
    "&id": id_asx_pwdVocabularyDescription /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION pwdVocabularyDescription */

/* eslint-enable */
