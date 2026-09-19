/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SIPCNICellInfoAge
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SIPCNICellInfoAge  ::=  INTEGER(0..999999999)
 * ```
 */
export
type SIPCNICellInfoAge = INTEGER;

let _cached_decoder_for_SIPCNICellInfoAge: $.ASN1Decoder<SIPCNICellInfoAge> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SIPCNICellInfoAge
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SIPCNICellInfoAge (el: _Element): SIPCNICellInfoAge {
    if (!_cached_decoder_for_SIPCNICellInfoAge) { _cached_decoder_for_SIPCNICellInfoAge = $._decodeInteger; }
    return _cached_decoder_for_SIPCNICellInfoAge(el);
}

let _cached_encoder_for_SIPCNICellInfoAge: $.ASN1Encoder<SIPCNICellInfoAge> | null = null;

/**
 * @summary Encodes a(n) SIPCNICellInfoAge into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SIPCNICellInfoAge, encoded as an ASN.1 Element.
 */
export
function _encode_SIPCNICellInfoAge (value: SIPCNICellInfoAge, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SIPCNICellInfoAge) { _cached_encoder_for_SIPCNICellInfoAge = $._encodeInteger; }
    return _cached_encoder_for_SIPCNICellInfoAge(value, elGetter);
}


/* eslint-enable */
