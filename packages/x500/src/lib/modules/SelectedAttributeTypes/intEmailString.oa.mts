/* eslint-disable */
import { type SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca.mjs";
import { id_asx_intEmailString } from "../SelectedAttributeTypes/id-asx-intEmailString.va.mjs";
import {
    IntEmail,
    _decode_IntEmail,
    _encode_IntEmail,
} from "../SelectedAttributeTypes/IntEmail.ta.mjs";
/**
 * @summary intEmailString
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * intEmailString SYNTAX-NAME ::= {
 *   LDAP-DESC         "Internationalized Email"
 *   DIRECTORY SYNTAX  IntEmail
 *   ID                id-asx-intEmailString }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME<IntEmail>}
 * @implements {SYNTAX_NAME<IntEmail>}
 */
export const intEmailString: SYNTAX_NAME<IntEmail> = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": _decode_IntEmail,
    },
    encoderFor: {
        "&Type": _encode_IntEmail,
    },
    "&ldapDesc": "Internationalized Email" /* OBJECT_FIELD_SETTING */,
    "&id": id_asx_intEmailString /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
