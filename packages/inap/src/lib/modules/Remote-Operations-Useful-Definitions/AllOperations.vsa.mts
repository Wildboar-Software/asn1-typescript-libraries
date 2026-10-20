/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";


/**
 * @summary AllOperations
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AllOperations{OPERATION-PACKAGE:package} OPERATION ::= {ConsumerPerforms{package} | SupplierPerforms{package}}
 * ```
 * 
 * @type {OPERATION}
 */
export
type AllOperations = OPERATION; // VALUE_SET_TYPE

let _cached_decoder_for_AllOperations: $.ASN1Decoder<AllOperations> | null = null;

export
function _decode_AllOperations (el: _Element) {    if (!_cached_decoder_for_AllOperations) { _cached_decoder_for_AllOperations = _decode_OPERATION; }    return _cached_decoder_for_AllOperations(el);}

let _cached_encoder_for_AllOperations: $.ASN1Encoder<AllOperations> | null = null;

export
function _encode_AllOperations (value: AllOperations, elGetter: $.ASN1Encoder<AllOperations>) {    if (!_cached_encoder_for_AllOperations) { _cached_encoder_for_AllOperations = _encode_OPERATION; }    return _cached_encoder_for_AllOperations(value, elGetter);}

/* eslint-enable */
