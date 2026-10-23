/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TCMessage, _decode_TCMessage, _encode_TCMessage } from "../TCAPMessages/TCMessage.ta.mjs";
// export { TCMessage, _decode_TCMessage, _encode_TCMessage } from "../TCAPMessages/TCMessage.ta.mjs";


/**
 * @summary BasicSCFc_SCFs_PDUs
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BasicSCFc-SCFs-PDUs  ::= 
 *   TCMessage{{SCFc-SCFs-Invokable}, {SCFc-SCFs-Returnable}}
 * ```
 */
export
type BasicSCFc_SCFs_PDUs = TCMessage; // DefinedType

let _cached_decoder_for_BasicSCFc_SCFs_PDUs: $.ASN1Decoder<BasicSCFc_SCFs_PDUs> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BasicSCFc_SCFs_PDUs
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BasicSCFc_SCFs_PDUs (el: _Element): BasicSCFc_SCFs_PDUs {
    if (!_cached_decoder_for_BasicSCFc_SCFs_PDUs) { _cached_decoder_for_BasicSCFc_SCFs_PDUs = _decode_TCMessage; }
    return _cached_decoder_for_BasicSCFc_SCFs_PDUs(el);
}

let _cached_encoder_for_BasicSCFc_SCFs_PDUs: $.ASN1Encoder<BasicSCFc_SCFs_PDUs> | null = null;

/**
 * @summary Encodes a(n) BasicSCFc_SCFs_PDUs into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BasicSCFc_SCFs_PDUs, encoded as an ASN.1 Element.
 */
export
function _encode_BasicSCFc_SCFs_PDUs (value: BasicSCFc_SCFs_PDUs, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BasicSCFc_SCFs_PDUs) { _cached_encoder_for_BasicSCFc_SCFs_PDUs = _encode_TCMessage; }
    return _cached_encoder_for_BasicSCFc_SCFs_PDUs(value, elGetter);
}


/* eslint-enable */
