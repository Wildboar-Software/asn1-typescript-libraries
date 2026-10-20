/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";


/**
 * @summary ConsumerPerforms
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ConsumerPerforms{OPERATION-PACKAGE:package} OPERATION ::= {Forward{{package.&Consumer}} | Forward{{package.&Both}} |
 *    Reverse{{package.&Supplier}} | Reverse{{package.&Both}}}
 * ```
 * 
 * @type {OPERATION}
 */
export
type ConsumerPerforms = OPERATION; // VALUE_SET_TYPE

let _cached_decoder_for_ConsumerPerforms: $.ASN1Decoder<ConsumerPerforms> | null = null;

export
function _decode_ConsumerPerforms (el: _Element) {    if (!_cached_decoder_for_ConsumerPerforms) { _cached_decoder_for_ConsumerPerforms = _decode_OPERATION; }    return _cached_decoder_for_ConsumerPerforms(el);}

let _cached_encoder_for_ConsumerPerforms: $.ASN1Encoder<ConsumerPerforms> | null = null;

export
function _encode_ConsumerPerforms (value: ConsumerPerforms, elGetter: $.ASN1Encoder<ConsumerPerforms>) {    if (!_cached_encoder_for_ConsumerPerforms) { _cached_encoder_for_ConsumerPerforms = _encode_OPERATION; }    return _cached_encoder_for_ConsumerPerforms(value, elGetter);}

/* eslint-enable */
