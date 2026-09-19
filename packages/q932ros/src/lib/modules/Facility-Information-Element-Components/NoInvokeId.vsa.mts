/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { InvokeId, _decode_InvokeId, _encode_InvokeId } from "../Facility-Information-Element-Components/InvokeId.ta.mjs";
// export { InvokeId, _decode_InvokeId, _encode_InvokeId } from "../Facility-Information-Element-Components/InvokeId.ta.mjs";


/**
 * @summary NoInvokeId
 * @description
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
function _decode_NoInvokeId (el: _Element) {    if (!_cached_decoder_for_NoInvokeId) { _cached_decoder_for_NoInvokeId = _decode_InvokeId; }    return _cached_decoder_for_NoInvokeId(el);}

let _cached_encoder_for_NoInvokeId: $.ASN1Encoder<NoInvokeId> | null = null;

export
function _encode_NoInvokeId (value: NoInvokeId, elGetter: $.ASN1Encoder<NoInvokeId>) {    if (!_cached_encoder_for_NoInvokeId) { _cached_encoder_for_NoInvokeId = _encode_InvokeId; }    return _cached_encoder_for_NoInvokeId(value, elGetter);}

/* eslint-enable */
