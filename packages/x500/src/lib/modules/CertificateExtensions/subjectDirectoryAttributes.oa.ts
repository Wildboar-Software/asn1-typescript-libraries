/* eslint-disable */
import { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca.js";
import {
    AttributesSyntax,
    _decode_AttributesSyntax,
    _encode_AttributesSyntax,
} from "../CertificateExtensions/AttributesSyntax.ta.js";
import { id_ce_subjectDirectoryAttributes } from "../CertificateExtensions/id-ce-subjectDirectoryAttributes.va.js";
export { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca.js";
export {
    AttributesSyntax,
    _decode_AttributesSyntax,
    _encode_AttributesSyntax,
} from "../CertificateExtensions/AttributesSyntax.ta.js";
export { id_ce_subjectDirectoryAttributes } from "../CertificateExtensions/id-ce-subjectDirectoryAttributes.va.js";

/* START_OF_SYMBOL_DEFINITION subjectDirectoryAttributes */
/**
 * @summary subjectDirectoryAttributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * subjectDirectoryAttributes EXTENSION ::= {
 *   SYNTAX         AttributesSyntax
 *   IDENTIFIED BY  id-ce-subjectDirectoryAttributes }
 * ```
 *
 * @constant
 * @type {EXTENSION<AttributesSyntax>}
 * @implements {EXTENSION<AttributesSyntax>}
 */
export const subjectDirectoryAttributes: EXTENSION<AttributesSyntax> = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_AttributesSyntax,
    },
    encoderFor: {
        "&ExtnType": _encode_AttributesSyntax,
    },
    "&id": id_ce_subjectDirectoryAttributes /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION subjectDirectoryAttributes */

/* eslint-enable */
