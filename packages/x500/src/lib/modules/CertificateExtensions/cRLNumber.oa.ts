/* eslint-disable */
import { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca.js";
import {
    CRLNumber,
    _decode_CRLNumber,
    _encode_CRLNumber,
} from "../CertificateExtensions/CRLNumber.ta.js";
import { id_ce_cRLNumber } from "../CertificateExtensions/id-ce-cRLNumber.va.js";
export { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca.js";
export {
    CRLNumber,
    _decode_CRLNumber,
    _encode_CRLNumber,
} from "../CertificateExtensions/CRLNumber.ta.js";
export { id_ce_cRLNumber } from "../CertificateExtensions/id-ce-cRLNumber.va.js";

/* START_OF_SYMBOL_DEFINITION cRLNumber */
/**
 * @summary cRLNumber
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * cRLNumber EXTENSION ::= {
 *   SYNTAX         CRLNumber
 *   IDENTIFIED BY  id-ce-cRLNumber }
 * ```
 *
 * @constant
 * @type {EXTENSION<CRLNumber>}
 * @implements {EXTENSION<CRLNumber>}
 */
export const cRLNumber: EXTENSION<CRLNumber> = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_CRLNumber,
    },
    encoderFor: {
        "&ExtnType": _encode_CRLNumber,
    },
    "&id": id_ce_cRLNumber /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION cRLNumber */

/* eslint-enable */
