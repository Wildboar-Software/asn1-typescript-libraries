/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    Restriction,
    _decode_Restriction,
    _encode_Restriction,
} from '../MTSAbstractService/Restriction.ta.mjs';
/**
 * @summary RestrictedDelivery
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RestrictedDelivery  ::=  SEQUENCE SIZE (1..ub-restrictions) OF Restriction
 * ```
 */
export type RestrictedDelivery = Restriction[]; // SequenceOfType

let _cached_decoder_for_RestrictedDelivery: $.ASN1Decoder<RestrictedDelivery> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RestrictedDelivery
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RestrictedDelivery} The decoded data structure.
 */
export function _decode_RestrictedDelivery(el: _Element): RestrictedDelivery {
    if (!_cached_decoder_for_RestrictedDelivery) {
        _cached_decoder_for_RestrictedDelivery = $._decodeSequenceOf<Restriction>(
            () => _decode_Restriction
        );
    }
    return _cached_decoder_for_RestrictedDelivery(el);
}

let _cached_encoder_for_RestrictedDelivery: $.ASN1Encoder<RestrictedDelivery> | null = null;

/**
 * @summary Encodes a(n) RestrictedDelivery into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RestrictedDelivery, encoded as an ASN.1 Element.
 */
export function _encode_RestrictedDelivery(
    value: RestrictedDelivery,
    elGetter: $.ASN1Encoder<RestrictedDelivery>
): _Element {
    if (!_cached_encoder_for_RestrictedDelivery) {
        _cached_encoder_for_RestrictedDelivery = $._encodeSequenceOf<Restriction>(
            () => _encode_Restriction,
            $.BER
        );
    }
    return _cached_encoder_for_RestrictedDelivery(value, elGetter);
}


/* eslint-enable */
