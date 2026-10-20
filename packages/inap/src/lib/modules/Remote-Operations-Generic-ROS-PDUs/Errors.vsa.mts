/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";
// export { ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";


/**
 * @summary Errors
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Errors{OPERATION:Operations} ERROR ::= {Operations.&Errors}
 * ```
 * 
 * @type {ERROR}
 */
export
type Errors = ERROR; // VALUE_SET_TYPE

let _cached_decoder_for_Errors: $.ASN1Decoder<Errors> | null = null;

export
function _decode_Errors (el: _Element) {    if (!_cached_decoder_for_Errors) { _cached_decoder_for_Errors = _decode_ERROR; }    return _cached_decoder_for_Errors(el);}

let _cached_encoder_for_Errors: $.ASN1Encoder<Errors> | null = null;

export
function _encode_Errors (value: Errors, elGetter: $.ASN1Encoder<Errors>) {    if (!_cached_encoder_for_Errors) { _cached_encoder_for_Errors = _encode_ERROR; }    return _cached_encoder_for_Errors(value, elGetter);}

/* eslint-enable */
