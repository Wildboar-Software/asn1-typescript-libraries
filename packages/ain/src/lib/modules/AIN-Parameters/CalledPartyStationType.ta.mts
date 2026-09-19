/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CalledPartyStationType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CalledPartyStationType  ::=  [16] IMPLICIT INTEGER(0..99)
 * ```
 */
export
type CalledPartyStationType = INTEGER;

let _cached_decoder_for_CalledPartyStationType: $.ASN1Decoder<CalledPartyStationType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CalledPartyStationType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CalledPartyStationType (el: _Element): CalledPartyStationType {
    if (!_cached_decoder_for_CalledPartyStationType) { _cached_decoder_for_CalledPartyStationType = $._decode_implicit<CalledPartyStationType>(() => $._decodeInteger); }
    return _cached_decoder_for_CalledPartyStationType(el);
}

let _cached_encoder_for_CalledPartyStationType: $.ASN1Encoder<CalledPartyStationType> | null = null;

/**
 * @summary Encodes a(n) CalledPartyStationType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CalledPartyStationType, encoded as an ASN.1 Element.
 */
export
function _encode_CalledPartyStationType (value: CalledPartyStationType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CalledPartyStationType) { _cached_encoder_for_CalledPartyStationType = $._encode_implicit(_TagClass.context, 16, () => $._encodeInteger, $.BER); }
    return _cached_encoder_for_CalledPartyStationType(value, elGetter);
}


/* eslint-enable */
