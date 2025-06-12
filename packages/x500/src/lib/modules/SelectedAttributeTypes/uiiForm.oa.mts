/* eslint-disable */
import { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca.mjs";
import { id_asx_uiiForm } from "../SelectedAttributeTypes/id-asx-uiiForm.va.mjs";
import {
    UiiFormat,
    _decode_UiiFormat,
    _encode_UiiFormat,
} from "../SelectedAttributeTypes/UiiFormat.ta.mjs";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca.mjs";
export { id_asx_uiiForm } from "../SelectedAttributeTypes/id-asx-uiiForm.va.mjs";
export {
    UiiFormat,
    _decode_UiiFormat,
    _encode_UiiFormat,
} from "../SelectedAttributeTypes/UiiFormat.ta.mjs";

/* START_OF_SYMBOL_DEFINITION uiiForm */
/**
 * @summary uiiForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * uiiForm SYNTAX-NAME ::= {
 *   LDAP-DESC         "UII Format"
 *   DIRECTORY SYNTAX  UiiFormat
 *   ID                id-asx-uiiForm }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME<UiiFormat>}
 * @implements {SYNTAX_NAME<UiiFormat>}
 */
export const uiiForm: SYNTAX_NAME<UiiFormat> = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": _decode_UiiFormat,
    },
    encoderFor: {
        "&Type": _encode_UiiFormat,
    },
    "&ldapDesc": "UII Format" /* OBJECT_FIELD_SETTING */,
    "&id": id_asx_uiiForm /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION uiiForm */

/* eslint-enable */
