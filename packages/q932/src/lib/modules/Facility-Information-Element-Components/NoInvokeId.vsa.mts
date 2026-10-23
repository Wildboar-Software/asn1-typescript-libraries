/* eslint-disable */
import {
    ASN1ConstructionError,
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { InvokeId, _decode_InvokeId, _encode_InvokeId } from "../Facility-Information-Element-Components/InvokeId.ta.mjs";


/**
 * @summary NoInvokeId
 * @description
 * 
 * The invoke-identifier value set whose only permitted value is `noInvokeId`.
 *
 * ITU-T Rec. Q.932 (1998) Amd.1 (06/2000) Table 8-7 bis.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NoInvokeId InvokeId ::= {noInvokeId}
 * ```
 * 
 * @type {InvokeId}
 */
export
type NoInvokeId = InvokeId; // VALUE_SET_TYPE

let _cached_decoder_for_NoInvokeId: $.ASN1Decoder<NoInvokeId> | null = null;

export
function _decode_NoInvokeId (el: _Element): NoInvokeId {
    if (!_cached_decoder_for_NoInvokeId) { _cached_decoder_for_NoInvokeId = _decode_InvokeId; }
    const value = _cached_decoder_for_NoInvokeId(el);
    if (!("absent" in value)) {
        throw new ASN1ConstructionError("NoInvokeId only permits noInvokeId");
    }
    return value;
}

export const _encode_NoInvokeId: $.ASN1Encoder<NoInvokeId> = _encode_InvokeId;

/* eslint-enable */
