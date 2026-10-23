/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TCMessage, _decode_TCMessage, _encode_TCMessage } from "../TCAPMessages/TCMessage.ta.mjs";
// export { TCMessage, _decode_TCMessage, _encode_TCMessage } from "../TCAPMessages/TCMessage.ta.mjs";


/**
 * @summary BasicDSSP_PDUs
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BasicDSSP-PDUs  ::=  TCMessage{{DSSP-Invokable}, {DSSP-Returnable}}
 * ```
 */
export
type BasicDSSP_PDUs = TCMessage; // DefinedType

let _cached_decoder_for_BasicDSSP_PDUs: $.ASN1Decoder<BasicDSSP_PDUs> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BasicDSSP_PDUs
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BasicDSSP_PDUs (el: _Element): BasicDSSP_PDUs {
    if (!_cached_decoder_for_BasicDSSP_PDUs) { _cached_decoder_for_BasicDSSP_PDUs = _decode_TCMessage; }
    return _cached_decoder_for_BasicDSSP_PDUs(el);
}

let _cached_encoder_for_BasicDSSP_PDUs: $.ASN1Encoder<BasicDSSP_PDUs> | null = null;

/**
 * @summary Encodes a(n) BasicDSSP_PDUs into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BasicDSSP_PDUs, encoded as an ASN.1 Element.
 */
export
function _encode_BasicDSSP_PDUs (value: BasicDSSP_PDUs, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BasicDSSP_PDUs) { _cached_encoder_for_BasicDSSP_PDUs = _encode_TCMessage; }
    return _cached_encoder_for_BasicDSSP_PDUs(value, elGetter);
}


/* eslint-enable */
