/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TCMessage, _decode_TCMessage, _encode_TCMessage } from "../TCAPMessages/TCMessage.ta.mjs";
// export { TCMessage, _decode_TCMessage, _encode_TCMessage } from "../TCAPMessages/TCMessage.ta.mjs";


/**
 * @summary BASIC_SCF_CUSF_PDUs
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BASIC-SCF-CUSF-PDUs  ::=  TCMessage{{SCF-CUSF-Invokable}, {SCF-CUSF-Returnable}}
 * ```
 */
export
type BASIC_SCF_CUSF_PDUs = TCMessage; // DefinedType

let _cached_decoder_for_BASIC_SCF_CUSF_PDUs: $.ASN1Decoder<BASIC_SCF_CUSF_PDUs> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BASIC_SCF_CUSF_PDUs
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BASIC_SCF_CUSF_PDUs (el: _Element): BASIC_SCF_CUSF_PDUs {
    if (!_cached_decoder_for_BASIC_SCF_CUSF_PDUs) { _cached_decoder_for_BASIC_SCF_CUSF_PDUs = _decode_TCMessage; }
    return _cached_decoder_for_BASIC_SCF_CUSF_PDUs(el);
}

let _cached_encoder_for_BASIC_SCF_CUSF_PDUs: $.ASN1Encoder<BASIC_SCF_CUSF_PDUs> | null = null;

/**
 * @summary Encodes a(n) BASIC_SCF_CUSF_PDUs into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BASIC_SCF_CUSF_PDUs, encoded as an ASN.1 Element.
 */
export
function _encode_BASIC_SCF_CUSF_PDUs (value: BASIC_SCF_CUSF_PDUs, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BASIC_SCF_CUSF_PDUs) { _cached_encoder_for_BASIC_SCF_CUSF_PDUs = _encode_TCMessage; }
    return _cached_encoder_for_BASIC_SCF_CUSF_PDUs(value, elGetter);
}


/* eslint-enable */
