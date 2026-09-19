/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ChargePartyStationType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChargePartyStationType  ::=  [20] IMPLICIT INTEGER(0..99)
 * ```
 */
export
type ChargePartyStationType = INTEGER;

let _cached_decoder_for_ChargePartyStationType: $.ASN1Decoder<ChargePartyStationType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ChargePartyStationType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ChargePartyStationType (el: _Element): ChargePartyStationType {
    if (!_cached_decoder_for_ChargePartyStationType) { _cached_decoder_for_ChargePartyStationType = $._decode_implicit<ChargePartyStationType>(() => $._decodeInteger); }
    return _cached_decoder_for_ChargePartyStationType(el);
}

let _cached_encoder_for_ChargePartyStationType: $.ASN1Encoder<ChargePartyStationType> | null = null;

/**
 * @summary Encodes a(n) ChargePartyStationType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ChargePartyStationType, encoded as an ASN.1 Element.
 */
export
function _encode_ChargePartyStationType (value: ChargePartyStationType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ChargePartyStationType) { _cached_encoder_for_ChargePartyStationType = $._encode_implicit(_TagClass.context, 20, () => $._encodeInteger, $.BER); }
    return _cached_encoder_for_ChargePartyStationType(value, elGetter);
}


/* eslint-enable */
