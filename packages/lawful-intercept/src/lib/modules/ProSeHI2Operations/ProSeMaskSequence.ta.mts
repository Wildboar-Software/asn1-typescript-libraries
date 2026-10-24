/* eslint-disable */
import {
    ASN1Element as _Element,
    type OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ProSeMaskSequence
 * @description
 * 
 * Several 23-octet masks for one ProSe application code at the monitoring UE.
 * Each mask is formatted like the application code. 3GPP TS 33.108, annex B.13.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProSeMaskSequence         ::=  SEQUENCE OF OCTET STRING (SIZE (23))
 * ```
 */
export
type ProSeMaskSequence = OCTET_STRING[]; // SequenceOfType

let _cached_decoder_for_ProSeMaskSequence: $.ASN1Decoder<ProSeMaskSequence> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ProSeMaskSequence
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ProSeMaskSequence (el: _Element): ProSeMaskSequence {
    if (!_cached_decoder_for_ProSeMaskSequence) { _cached_decoder_for_ProSeMaskSequence = $._decodeSequenceOf<OCTET_STRING>(() => $._decodeOctetString); }
    const _value = _cached_decoder_for_ProSeMaskSequence(el);
    for (const _item of _value) {
        if (_item.length < 23 || _item.length > 23) {
            throw new ASN1SizeError("ProSeMaskSequence element violates SIZE constraint");
        }
    }
    return _value;
}

let _cached_encoder_for_ProSeMaskSequence: $.ASN1Encoder<ProSeMaskSequence> | null = null;

/**
 * @summary Encodes a(n) ProSeMaskSequence into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProSeMaskSequence, encoded as an ASN.1 Element.
 */
export
function _encode_ProSeMaskSequence (value: ProSeMaskSequence, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ProSeMaskSequence) { _cached_encoder_for_ProSeMaskSequence = $._encodeSequenceOf<OCTET_STRING>(() => $._encodeOctetString, $.BER); }
    return _cached_encoder_for_ProSeMaskSequence(value, elGetter);
}


/* eslint-enable */
