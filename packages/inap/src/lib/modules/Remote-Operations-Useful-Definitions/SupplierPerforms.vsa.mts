/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";


/**
 * @summary SupplierPerforms
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SupplierPerforms{OPERATION-PACKAGE:package} OPERATION ::= {Forward{{package.&Supplier}} | Forward{{package.&Both}} |
 *    Reverse{{package.&Consumer}} | Reverse{{package.&Both}}}
 * ```
 * 
 * @type {OPERATION}
 */
export
type SupplierPerforms = OPERATION; // VALUE_SET_TYPE

let _cached_decoder_for_SupplierPerforms: $.ASN1Decoder<SupplierPerforms> | null = null;

export
function _decode_SupplierPerforms (el: _Element) {    if (!_cached_decoder_for_SupplierPerforms) { _cached_decoder_for_SupplierPerforms = _decode_OPERATION; }    return _cached_decoder_for_SupplierPerforms(el);}

let _cached_encoder_for_SupplierPerforms: $.ASN1Encoder<SupplierPerforms> | null = null;

export
function _encode_SupplierPerforms (value: SupplierPerforms, elGetter: $.ASN1Encoder<SupplierPerforms>) {    if (!_cached_encoder_for_SupplierPerforms) { _cached_encoder_for_SupplierPerforms = _encode_OPERATION; }    return _cached_encoder_for_SupplierPerforms(value, elGetter);}

/* eslint-enable */
