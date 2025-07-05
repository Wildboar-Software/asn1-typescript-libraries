/* eslint-disable */
import { id_replaceAvlRsp } from "../PkiPMIProtocolSpecifications/id-replaceAvlRsp.va.mjs";
import {
    ReplaceAvlRsp,
    _decode_ReplaceAvlRsp,
    _encode_ReplaceAvlRsp,
} from "../PkiPMIProtocolSpecifications/ReplaceAvlRsp.ta.mjs";
import { type WRAPPED_PDU } from "../PkiPmiWrapper/WRAPPED-PDU.oca.mjs";
/**
 * @summary replaceAvlRsp
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * replaceAvlRsp WRAPPED-PDU ::= {
 *                  ReplaceAvlRsp
 *   IDENTIFIED BY  id-replaceAvlRsp }
 * ```
 *
 * @constant
 * @type {WRAPPED_PDU<ReplaceAvlRsp>}
 * @implements {WRAPPED_PDU<ReplaceAvlRsp>}
 */
export const replaceAvlRsp: WRAPPED_PDU = {
    class: "TYPE-IDENTIFIER",
    decoderFor: {
        "&Type": _decode_ReplaceAvlRsp,
    },
    encoderFor: {
        "&Type": _encode_ReplaceAvlRsp,
    },
    "&id": id_replaceAvlRsp /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
