/* eslint-disable */
import { id_rejectCAsubscribe } from "../PkiPMIProtocolSpecifications/id-rejectCAsubscribe.va.mjs";
import {
    RejectCAsubscribe,
    _decode_RejectCAsubscribe,
    _encode_RejectCAsubscribe,
} from "../PkiPMIProtocolSpecifications/RejectCAsubscribe.ta.mjs";
import { WRAPPED_PDU } from "../PkiPmiWrapper/WRAPPED-PDU.oca.mjs";
/**
 * @summary rejectCAsubscribe
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * rejectCAsubscribe  WRAPPED-PDU ::= {
 *                  RejectCAsubscribe
 *   IDENTIFIED BY  id-rejectCAsubscribe }
 * ```
 *
 * @constant
 * @type {WRAPPED_PDU<RejectCAsubscribe>}
 * @implements {WRAPPED_PDU<RejectCAsubscribe>}
 */
export const rejectCAsubscribe: WRAPPED_PDU = {
    class: "TYPE-IDENTIFIER",
    decoderFor: {
        "&Type": _decode_RejectCAsubscribe,
    },
    encoderFor: {
        "&Type": _encode_RejectCAsubscribe,
    },
    "&id": id_rejectCAsubscribe /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
