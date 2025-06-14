/* eslint-disable */
import { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca.mjs";
import {
    EpcFormat,
    _decode_EpcFormat,
    _encode_EpcFormat,
} from "../SelectedAttributeTypes/EpcFormat.ta.mjs";
import { id_asx_epcForm } from "../SelectedAttributeTypes/id-asx-epcForm.va.mjs";
/* START_OF_SYMBOL_DEFINITION epcForm */
/**
 * @summary epcForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * epcForm SYNTAX-NAME ::= {
 *   LDAP-DESC         "EPC Format"
 *   DIRECTORY SYNTAX  EpcFormat
 *   ID                id-asx-epcForm }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME<EpcFormat>}
 * @implements {SYNTAX_NAME<EpcFormat>}
 */
export const epcForm: SYNTAX_NAME<EpcFormat> = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": _decode_EpcFormat,
    },
    encoderFor: {
        "&Type": _encode_EpcFormat,
    },
    "&ldapDesc": "EPC Format" /* OBJECT_FIELD_SETTING */,
    "&id": id_asx_epcForm /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION epcForm */

/* eslint-enable */
