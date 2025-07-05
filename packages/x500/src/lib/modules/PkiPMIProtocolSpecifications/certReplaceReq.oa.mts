/* eslint-disable */
import {
    CertReplaceReq,
    _decode_CertReplaceReq,
    _encode_CertReplaceReq,
} from "../PkiPMIProtocolSpecifications/CertReplaceReq.ta.mjs";
import { id_certReplaceReq } from "../PkiPMIProtocolSpecifications/id-certReplaceReq.va.mjs";
import { type WRAPPED_PDU } from "../PkiPmiWrapper/WRAPPED-PDU.oca.mjs";
/**
 * @summary certReplaceReq
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * certReplaceReq WRAPPED-PDU ::= {
 *                  CertReplaceReq
 *   IDENTIFIED BY  id-certReplaceReq }
 * ```
 *
 * @constant
 * @type {WRAPPED_PDU<CertReplaceReq>}
 * @implements {WRAPPED_PDU<CertReplaceReq>}
 */
export const certReplaceReq: WRAPPED_PDU = {
    class: "TYPE-IDENTIFIER",
    decoderFor: {
        "&Type": _decode_CertReplaceReq,
    },
    encoderFor: {
        "&Type": _encode_CertReplaceReq,
    },
    "&id": id_certReplaceReq /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
