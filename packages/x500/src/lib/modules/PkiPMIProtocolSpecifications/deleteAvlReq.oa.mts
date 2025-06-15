/* eslint-disable */
import {
    DeleteAvlReq,
    _decode_DeleteAvlReq,
    _encode_DeleteAvlReq,
} from "../PkiPMIProtocolSpecifications/DeleteAvlReq.ta.mjs";
import { id_deleteAvlReq } from "../PkiPMIProtocolSpecifications/id-deleteAvlReq.va.mjs";
import { WRAPPED_PDU } from "../PkiPmiWrapper/WRAPPED-PDU.oca.mjs";
/**
 * @summary deleteAvlReq
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * deleteAvlReq WRAPPED-PDU ::= {
 *                  DeleteAvlReq
 *   IDENTIFIED BY  id-deleteAvlReq }
 * ```
 *
 * @constant
 * @type {WRAPPED_PDU<DeleteAvlReq>}
 * @implements {WRAPPED_PDU<DeleteAvlReq>}
 */
export const deleteAvlReq: WRAPPED_PDU = {
    class: "TYPE-IDENTIFIER",
    decoderFor: {
        "&Type": _decode_DeleteAvlReq,
    },
    encoderFor: {
        "&Type": _encode_DeleteAvlReq,
    },
    "&id": id_deleteAvlReq /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
