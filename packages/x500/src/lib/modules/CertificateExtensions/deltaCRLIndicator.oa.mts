/* eslint-disable */
import { type EXTENSION } from "../AuthenticationFramework/EXTENSION.oca.mjs";
import {
    BaseCRLNumber,
    _decode_BaseCRLNumber,
    _encode_BaseCRLNumber,
} from "../CertificateExtensions/BaseCRLNumber.ta.mjs";
import { id_ce_deltaCRLIndicator } from "../CertificateExtensions/id-ce-deltaCRLIndicator.va.mjs";
/**
 * @summary deltaCRLIndicator
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * deltaCRLIndicator EXTENSION ::= {
 *   SYNTAX         BaseCRLNumber
 *   IDENTIFIED BY  id-ce-deltaCRLIndicator }
 * ```
 *
 * @constant
 * @type {EXTENSION<BaseCRLNumber>}
 * @implements {EXTENSION<BaseCRLNumber>}
 */
export const deltaCRLIndicator: EXTENSION<BaseCRLNumber> = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_BaseCRLNumber,
    },
    encoderFor: {
        "&ExtnType": _encode_BaseCRLNumber,
    },
    "&id": id_ce_deltaCRLIndicator /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
