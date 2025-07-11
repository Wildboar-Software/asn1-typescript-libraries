/* eslint-disable */
import {
    DeleteAvlRsp,
    _decode_DeleteAvlRsp,
    _encode_DeleteAvlRsp,
} from "../PkiPMIProtocolSpecifications/DeleteAvlRsp.ta.mjs";
import { id_deleteAvlRsp } from "../PkiPMIProtocolSpecifications/id-deleteAvlRsp.va.mjs";
import { type WRAPPED_PDU } from "../PkiPmiWrapper/WRAPPED-PDU.oca.mjs";
/**
 * @summary deleteAvlRsp
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * deleteAvlRsp WRAPPED-PDU ::= {
 *                  DeleteAvlRsp
 *   IDENTIFIED BY  id-deleteAvlRsp }
 * ```
 *
 * @constant
 * @type {WRAPPED_PDU<DeleteAvlRsp>}
 * @implements {WRAPPED_PDU<DeleteAvlRsp>}
 */
export const deleteAvlRsp: WRAPPED_PDU = {
    class: "TYPE-IDENTIFIER",
    decoderFor: {
        "&Type": _decode_DeleteAvlRsp,
    },
    encoderFor: {
        "&Type": _encode_DeleteAvlRsp,
    },
    "&id": id_deleteAvlRsp /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
