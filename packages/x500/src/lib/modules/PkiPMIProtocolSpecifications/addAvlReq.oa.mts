/* eslint-disable */
import {
    AddAvlReq,
    _decode_AddAvlReq,
    _encode_AddAvlReq,
} from "../PkiPMIProtocolSpecifications/AddAvlReq.ta.mjs";
import { id_addAvlReq } from "../PkiPMIProtocolSpecifications/id-addAvlReq.va.mjs";
import { WRAPPED_PDU } from "../PkiPmiWrapper/WRAPPED-PDU.oca.mjs";
/**
 * @summary addAvlReq
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * addAvlReq WRAPPED-PDU ::= {
 *                 AddAvlReq
 *   IDENTIFIED BY id-addAvlReq }
 * ```
 *
 * @constant
 * @type {WRAPPED_PDU<AddAvlReq>}
 * @implements {WRAPPED_PDU<AddAvlReq>}
 */
export const addAvlReq: WRAPPED_PDU = {
    class: "TYPE-IDENTIFIER",
    decoderFor: {
        "&Type": _decode_AddAvlReq,
    },
    encoderFor: {
        "&Type": _encode_AddAvlReq,
    },
    "&id": id_addAvlReq /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
