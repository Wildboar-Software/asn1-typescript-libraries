/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";


/**
 * @summary Reverse
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Reverse{OPERATION:OperationSet} OPERATION ::= {Forward{{OperationSet.&Linked}}}
 * ```
 * 
 * @type {OPERATION}
 */
export
type Reverse = OPERATION; // VALUE_SET_TYPE

let _cached_decoder_for_Reverse: $.ASN1Decoder<Reverse> | null = null;

export
function _decode_Reverse (el: _Element) {    if (!_cached_decoder_for_Reverse) { _cached_decoder_for_Reverse = _decode_OPERATION; }    return _cached_decoder_for_Reverse(el);}

let _cached_encoder_for_Reverse: $.ASN1Encoder<Reverse> | null = null;

export
function _encode_Reverse (value: Reverse, elGetter: $.ASN1Encoder<Reverse>) {    if (!_cached_encoder_for_Reverse) { _cached_encoder_for_Reverse = _encode_OPERATION; }    return _cached_encoder_for_Reverse(value, elGetter);}

/* eslint-enable */
