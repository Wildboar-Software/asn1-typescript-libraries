/* eslint-disable */
import { id_replaceAvlReq } from "../PkiPMIProtocolSpecifications/id-replaceAvlReq.va.mjs";
import {
    ReplaceAvlReq,
    _decode_ReplaceAvlReq,
    _encode_ReplaceAvlReq,
} from "../PkiPMIProtocolSpecifications/ReplaceAvlReq.ta.mjs";
import { type WRAPPED_PDU } from "../PkiPmiWrapper/WRAPPED-PDU.oca.mjs";
/**
 * @summary replaceAvlReq
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * replaceAvlReq WRAPPED-PDU ::= {
 *                  ReplaceAvlReq
 *   IDENTIFIED BY  id-replaceAvlReq }
 * ```
 *
 * @constant
 * @type {WRAPPED_PDU<ReplaceAvlReq>}
 * @implements {WRAPPED_PDU<ReplaceAvlReq>}
 */
export const replaceAvlReq: WRAPPED_PDU = {
    class: "TYPE-IDENTIFIER",
    decoderFor: {
        "&Type": _decode_ReplaceAvlReq,
    },
    encoderFor: {
        "&Type": _encode_ReplaceAvlReq,
    },
    "&id": id_replaceAvlReq /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
