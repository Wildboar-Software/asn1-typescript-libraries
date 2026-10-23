/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TCMessage, _decode_TCMessage, _encode_TCMessage } from "../TCAPMessages/TCMessage.ta.mjs";
// export { TCMessage, _decode_TCMessage, _encode_TCMessage } from "../TCAPMessages/TCMessage.ta.mjs";


/**
 * @summary BasicSCF_SCF_PDUs
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BasicSCF-SCF-PDUs  ::=  TCMessage{{SCF-SCF-Invokable}, {SCF-SCF-Returnable}}
 * ```
 */
export
type BasicSCF_SCF_PDUs = TCMessage; // DefinedType

let _cached_decoder_for_BasicSCF_SCF_PDUs: $.ASN1Decoder<BasicSCF_SCF_PDUs> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BasicSCF_SCF_PDUs
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BasicSCF_SCF_PDUs (el: _Element): BasicSCF_SCF_PDUs {
    if (!_cached_decoder_for_BasicSCF_SCF_PDUs) { _cached_decoder_for_BasicSCF_SCF_PDUs = _decode_TCMessage; }
    return _cached_decoder_for_BasicSCF_SCF_PDUs(el);
}

let _cached_encoder_for_BasicSCF_SCF_PDUs: $.ASN1Encoder<BasicSCF_SCF_PDUs> | null = null;

/**
 * @summary Encodes a(n) BasicSCF_SCF_PDUs into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BasicSCF_SCF_PDUs, encoded as an ASN.1 Element.
 */
export
function _encode_BasicSCF_SCF_PDUs (value: BasicSCF_SCF_PDUs, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BasicSCF_SCF_PDUs) { _cached_encoder_for_BasicSCF_SCF_PDUs = _encode_TCMessage; }
    return _cached_encoder_for_BasicSCF_SCF_PDUs(value, elGetter);
}


/* eslint-enable */
