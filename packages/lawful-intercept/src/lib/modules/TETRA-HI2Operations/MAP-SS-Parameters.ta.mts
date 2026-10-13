/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MAP_SS_Parameters
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MAP-SS-Parameters  ::=  SET SIZE (1..256) OF OCTET STRING (SIZE (1..256))
 * ```
 */
export
type MAP_SS_Parameters = OCTET_STRING[]; // SetOfType

let _cached_decoder_for_MAP_SS_Parameters: $.ASN1Decoder<MAP_SS_Parameters> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MAP_SS_Parameters
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MAP_SS_Parameters (el: _Element): MAP_SS_Parameters {
    if (!_cached_decoder_for_MAP_SS_Parameters) { _cached_decoder_for_MAP_SS_Parameters = $._decodeSetOf<OCTET_STRING>(() => $._decodeOctetString); }
    const _value = _cached_decoder_for_MAP_SS_Parameters(el);
    if (_value.length < 1 || _value.length > 256) {
        throw new ASN1SizeError("MAP_SS_Parameters violates SIZE constraint");
    }
    for (const _item of _value) {
        if (_item.length < 1 || _item.length > 256) {
            throw new ASN1SizeError("MAP_SS_Parameters element violates SIZE constraint");
        }
    }
    return _value;
}

let _cached_encoder_for_MAP_SS_Parameters: $.ASN1Encoder<MAP_SS_Parameters> | null = null;

/**
 * @summary Encodes a(n) MAP_SS_Parameters into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MAP_SS_Parameters, encoded as an ASN.1 Element.
 */
export
function _encode_MAP_SS_Parameters (value: MAP_SS_Parameters, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MAP_SS_Parameters) { _cached_encoder_for_MAP_SS_Parameters = $._encodeSetOf<OCTET_STRING>(() => $._encodeOctetString, $.BER); }
    return _cached_encoder_for_MAP_SS_Parameters(value, elGetter);
}


/* eslint-enable */
