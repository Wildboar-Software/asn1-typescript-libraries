/* eslint-disable */
import {
    CertReq,
    _decode_CertReq,
    _encode_CertReq,
} from "../PkiPMIProtocolSpecifications/CertReq.ta.mjs";
import { id_certReq } from "../PkiPMIProtocolSpecifications/id-certReq.va.mjs";
import { type WRAPPED_PDU } from "../PkiPmiWrapper/WRAPPED-PDU.oca.mjs";
/**
 * @summary certReq
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * certReq WRAPPED-PDU ::= {
 *                 CertReq
 *   IDENTIFIED BY id-certReq }
 * ```
 *
 * @constant
 * @type {WRAPPED_PDU<CertReq>}
 * @implements {WRAPPED_PDU<CertReq>}
 */
export const certReq: WRAPPED_PDU = {
    class: "TYPE-IDENTIFIER",
    decoderFor: {
        "&Type": _decode_CertReq,
    },
    encoderFor: {
        "&Type": _encode_CertReq,
    },
    "&id": id_certReq /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
