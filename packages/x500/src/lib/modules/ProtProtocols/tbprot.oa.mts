/* eslint-disable */
import { id_tbprot } from "../ProtProtocols/id-tbprot.va.mjs";
import {
    TBprot,
    _decode_TBprot,
    _encode_TBprot,
} from "../TrustBroker/TBprot.ta.mjs";
import { WRAPPED_PROT } from "../Wrapper/WRAPPED-PROT.oca.mjs";
/**
 * @summary tbprot
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * tbprot WRAPPED-PROT ::= {
 *                  TBprot
 *   IDENTIFIED BY  id-tbprot }
 * ```
 *
 * @constant
 * @type {WRAPPED_PROT<TBprot>}
 * @implements {WRAPPED_PROT<TBprot>}
 */
export const tbprot: WRAPPED_PROT = {
    class: "TYPE-IDENTIFIER",
    decoderFor: {
        "&Type": _decode_TBprot,
    },
    encoderFor: {
        "&Type": _encode_TBprot,
    },
    "&id": id_tbprot /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
