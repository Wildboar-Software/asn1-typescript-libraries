/* eslint-disable */
import { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca.js";
import {
    GeneralNames,
    _decode_GeneralNames,
    _encode_GeneralNames,
} from "../CertificateExtensions/GeneralNames.ta.js";
import { id_ce_issuerAltName } from "../CertificateExtensions/id-ce-issuerAltName.va.js";
export { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca.js";
export {
    GeneralNames,
    _decode_GeneralNames,
    _encode_GeneralNames,
} from "../CertificateExtensions/GeneralNames.ta.js";
export { id_ce_issuerAltName } from "../CertificateExtensions/id-ce-issuerAltName.va.js";

/* START_OF_SYMBOL_DEFINITION issuerAltName */
/**
 * @summary issuerAltName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * issuerAltName EXTENSION ::= {
 *   SYNTAX         GeneralNames
 *   IDENTIFIED BY  id-ce-issuerAltName }
 * ```
 *
 * @constant
 * @type {EXTENSION<GeneralNames>}
 * @implements {EXTENSION<GeneralNames>}
 */
export const issuerAltName: EXTENSION<GeneralNames> = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_GeneralNames,
    },
    encoderFor: {
        "&ExtnType": _encode_GeneralNames,
    },
    "&id": id_ce_issuerAltName /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION issuerAltName */

/* eslint-enable */
