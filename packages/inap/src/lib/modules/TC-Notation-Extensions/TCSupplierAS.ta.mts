/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TCMessage, _decode_TCMessage, _encode_TCMessage } from "../TCAPMessages/TCMessage.ta.mjs";
// export { TCMessage, _decode_TCMessage, _encode_TCMessage } from "../TCAPMessages/TCMessage.ta.mjs";


/**
 * @summary TCSupplierAS
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TCSupplierAS{OPERATION-PACKAGE:package}  ::= 
 *   TCMessage{{SupplierPerforms  {package}}, {SupplierPerforms  {package}}}
 * ```
 */
export
type TCSupplierAS = TCMessage; // DefinedType

let _cached_decoder_for_TCSupplierAS: $.ASN1Decoder<TCSupplierAS> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TCSupplierAS
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TCSupplierAS (el: _Element): TCSupplierAS {
    if (!_cached_decoder_for_TCSupplierAS) { _cached_decoder_for_TCSupplierAS = _decode_TCMessage; }
    return _cached_decoder_for_TCSupplierAS(el);
}

let _cached_encoder_for_TCSupplierAS: $.ASN1Encoder<TCSupplierAS> | null = null;

/**
 * @summary Encodes a(n) TCSupplierAS into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TCSupplierAS, encoded as an ASN.1 Element.
 */
export
function _encode_TCSupplierAS (value: TCSupplierAS, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TCSupplierAS) { _cached_encoder_for_TCSupplierAS = _encode_TCMessage; }
    return _cached_encoder_for_TCSupplierAS(value, elGetter);
}


/* eslint-enable */
