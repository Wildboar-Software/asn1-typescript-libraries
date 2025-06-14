/* eslint-disable */
import { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca.mjs";
import { id_ce_issuingDistributionPoint } from "../CertificateExtensions/id-ce-issuingDistributionPoint.va.mjs";
import {
    IssuingDistPointSyntax,
    _decode_IssuingDistPointSyntax,
    _encode_IssuingDistPointSyntax,
} from "../CertificateExtensions/IssuingDistPointSyntax.ta.mjs";
/* START_OF_SYMBOL_DEFINITION issuingDistributionPoint */
/**
 * @summary issuingDistributionPoint
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * issuingDistributionPoint EXTENSION ::= {
 *   SYNTAX         IssuingDistPointSyntax
 *   IDENTIFIED BY  id-ce-issuingDistributionPoint }
 * ```
 *
 * @constant
 * @type {EXTENSION<IssuingDistPointSyntax>}
 * @implements {EXTENSION<IssuingDistPointSyntax>}
 */
export const issuingDistributionPoint: EXTENSION<IssuingDistPointSyntax> = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_IssuingDistPointSyntax,
    },
    encoderFor: {
        "&ExtnType": _encode_IssuingDistPointSyntax,
    },
    "&id": id_ce_issuingDistributionPoint /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION issuingDistributionPoint */

/* eslint-enable */
