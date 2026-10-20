/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TCMessage, _decode_TCMessage, _encode_TCMessage } from "../TCAPMessages/TCMessage.ta.mjs";
// export { TCMessage, _decode_TCMessage, _encode_TCMessage } from "../TCAPMessages/TCMessage.ta.mjs";


/**
 * @summary GenericSCF_SSF_PDUs
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GenericSCF-SSF-PDUs  ::= 
 *   TCMessage{{ScfToSsfGenericInvokable}, {ScfToSsfGenericReturnable}}
 * ```
 */
export
type GenericSCF_SSF_PDUs = TCMessage; // DefinedType

let _cached_decoder_for_GenericSCF_SSF_PDUs: $.ASN1Decoder<GenericSCF_SSF_PDUs> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GenericSCF_SSF_PDUs
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GenericSCF_SSF_PDUs (el: _Element): GenericSCF_SSF_PDUs {
    if (!_cached_decoder_for_GenericSCF_SSF_PDUs) { _cached_decoder_for_GenericSCF_SSF_PDUs = _decode_TCMessage; }
    return _cached_decoder_for_GenericSCF_SSF_PDUs(el);
}

let _cached_encoder_for_GenericSCF_SSF_PDUs: $.ASN1Encoder<GenericSCF_SSF_PDUs> | null = null;

/**
 * @summary Encodes a(n) GenericSCF_SSF_PDUs into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GenericSCF_SSF_PDUs, encoded as an ASN.1 Element.
 */
export
function _encode_GenericSCF_SSF_PDUs (value: GenericSCF_SSF_PDUs, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GenericSCF_SSF_PDUs) { _cached_encoder_for_GenericSCF_SSF_PDUs = _encode_TCMessage; }
    return _cached_encoder_for_GenericSCF_SSF_PDUs(value, elGetter);
}


/* eslint-enable */
