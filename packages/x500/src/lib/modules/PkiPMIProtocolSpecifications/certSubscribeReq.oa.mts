/* eslint-disable */
import {
    CertSubscribeReq,
    _decode_CertSubscribeReq,
    _encode_CertSubscribeReq,
} from "../PkiPMIProtocolSpecifications/CertSubscribeReq.ta.mjs";
import { id_certSubscribeReq } from "../PkiPMIProtocolSpecifications/id-certSubscribeReq.va.mjs";
import { type WRAPPED_PDU } from "../PkiPmiWrapper/WRAPPED-PDU.oca.mjs";
/**
 * @summary certSubscribeReq
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * certSubscribeReq WRAPPED-PDU ::= {
 *                  CertSubscribeReq
 *   IDENTIFIED BY  id-certSubscribeReq }
 * ```
 *
 * @constant
 * @type {WRAPPED_PDU<CertSubscribeReq>}
 * @implements {WRAPPED_PDU<CertSubscribeReq>}
 */
export const certSubscribeReq: WRAPPED_PDU = {
    class: "TYPE-IDENTIFIER",
    decoderFor: {
        "&Type": _decode_CertSubscribeReq,
    },
    encoderFor: {
        "&Type": _encode_CertSubscribeReq,
    },
    "&id": id_certSubscribeReq /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
