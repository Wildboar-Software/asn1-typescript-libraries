/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";


/**
 * @summary Forward
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Forward{OPERATION:OperationSet} OPERATION ::= {OperationSet | OperationSet.&Linked.&Linked |
 *    OperationSet.&Linked.&Linked.&Linked.&Linked}
 * ```
 * 
 * @type {OPERATION}
 */
export
type Forward = OPERATION; // VALUE_SET_TYPE

let _cached_decoder_for_Forward: $.ASN1Decoder<Forward> | null = null;

export
function _decode_Forward (el: _Element) {    if (!_cached_decoder_for_Forward) { _cached_decoder_for_Forward = _decode_OPERATION; }    return _cached_decoder_for_Forward(el);}

let _cached_encoder_for_Forward: $.ASN1Encoder<Forward> | null = null;

export
function _encode_Forward (value: Forward, elGetter: $.ASN1Encoder<Forward>) {    if (!_cached_encoder_for_Forward) { _cached_encoder_for_Forward = _encode_OPERATION; }    return _cached_encoder_for_Forward(value, elGetter);}

/* eslint-enable */
