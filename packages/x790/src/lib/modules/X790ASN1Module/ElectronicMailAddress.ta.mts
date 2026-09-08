/* eslint-disable */
import {
    SET,
    IA5String,
    ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ElectronicMailAddress
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ElectronicMailAddress  ::=  SET OF IA5String(SIZE (0..64))
 * ```
 */
export
type ElectronicMailAddress = IA5String[]; // SetOfType

let _cached_decoder_for_ElectronicMailAddress: $.ASN1Decoder<ElectronicMailAddress> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ElectronicMailAddress
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ElectronicMailAddress (el: _Element): ElectronicMailAddress {
    if (!_cached_decoder_for_ElectronicMailAddress) { _cached_decoder_for_ElectronicMailAddress = $._decodeSetOf<IA5String>(() => $._decodeIA5String); }
    const value = _cached_decoder_for_ElectronicMailAddress(el);
    if (value.some((s) => s.length > 64)) {
        throw new ASN1SizeError("ElectronicMailAddress violates SIZE constraint");
    }
    return value;
}

let _cached_encoder_for_ElectronicMailAddress: $.ASN1Encoder<ElectronicMailAddress> | null = null;

/**
 * @summary Encodes a(n) ElectronicMailAddress into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ElectronicMailAddress, encoded as an ASN.1 Element.
 */
export
function _encode_ElectronicMailAddress (value: ElectronicMailAddress, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ElectronicMailAddress) { _cached_encoder_for_ElectronicMailAddress = $._encodeSetOf<IA5String>(() => $._encodeIA5String, $.BER); }
    return _cached_encoder_for_ElectronicMailAddress(value, elGetter);
}


/* eslint-enable */
