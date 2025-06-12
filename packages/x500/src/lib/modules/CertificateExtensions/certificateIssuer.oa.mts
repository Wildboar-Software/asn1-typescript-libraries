/* eslint-disable */
import { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca.mjs";
import {
    GeneralNames,
    _decode_GeneralNames,
    _encode_GeneralNames,
} from "../CertificateExtensions/GeneralNames.ta.mjs";
import { id_ce_certificateIssuer } from "../CertificateExtensions/id-ce-certificateIssuer.va.mjs";
export { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca.mjs";
export {
    GeneralNames,
    _decode_GeneralNames,
    _encode_GeneralNames,
} from "../CertificateExtensions/GeneralNames.ta.mjs";
export { id_ce_certificateIssuer } from "../CertificateExtensions/id-ce-certificateIssuer.va.mjs";

/* START_OF_SYMBOL_DEFINITION certificateIssuer */
/**
 * @summary certificateIssuer
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * certificateIssuer EXTENSION ::= {
 *   SYNTAX         GeneralNames
 *   IDENTIFIED BY  id-ce-certificateIssuer }
 * ```
 *
 * @constant
 * @type {EXTENSION<GeneralNames>}
 * @implements {EXTENSION<GeneralNames>}
 */
export const certificateIssuer: EXTENSION<GeneralNames> = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_GeneralNames,
    },
    encoderFor: {
        "&ExtnType": _encode_GeneralNames,
    },
    "&id": id_ce_certificateIssuer /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION certificateIssuer */

/* eslint-enable */
