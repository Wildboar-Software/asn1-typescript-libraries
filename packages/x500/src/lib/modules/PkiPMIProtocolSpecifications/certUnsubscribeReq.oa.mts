/* eslint-disable */
import {
    CertUnsubscribeReq,
    _decode_CertUnsubscribeReq,
    _encode_CertUnsubscribeReq,
} from "../PkiPMIProtocolSpecifications/CertUnsubscribeReq.ta.mjs";
import { id_certUnsubscribeReq } from "../PkiPMIProtocolSpecifications/id-certUnsubscribeReq.va.mjs";
import { type WRAPPED_PDU } from "../PkiPmiWrapper/WRAPPED-PDU.oca.mjs";
/**
 * @summary certUnsubscribeReq
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * certUnsubscribeReq WRAPPED-PDU ::= {
 *                  CertUnsubscribeReq
 *   IDENTIFIED BY  id-certUnsubscribeReq }
 * ```
 *
 * @constant
 * @type {WRAPPED_PDU<CertUnsubscribeReq>}
 * @implements {WRAPPED_PDU<CertUnsubscribeReq>}
 */
export const certUnsubscribeReq: WRAPPED_PDU = {
    class: "TYPE-IDENTIFIER",
    decoderFor: {
        "&Type": _decode_CertUnsubscribeReq,
    },
    encoderFor: {
        "&Type": _encode_CertUnsubscribeReq,
    },
    "&id": id_certUnsubscribeReq /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
