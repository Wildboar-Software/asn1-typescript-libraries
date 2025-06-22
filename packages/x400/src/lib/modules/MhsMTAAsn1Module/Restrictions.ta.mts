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
} from 'asn1-ts';
import * as $ from '@wildboar/asn1/functional';
import {
    Restriction,
    _decode_Restriction,
    _encode_Restriction,
} from '../MTSAbstractService/Restriction.ta.mjs';
/**
 * @summary Restrictions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Restrictions  ::=  SET OF Restriction
 * ```
 */
export type Restrictions = Restriction[]; // SetOfType

let _cached_decoder_for_Restrictions: $.ASN1Decoder<Restrictions> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Restrictions
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Restrictions} The decoded data structure.
 */
export function _decode_Restrictions(el: _Element) {
    if (!_cached_decoder_for_Restrictions) {
        _cached_decoder_for_Restrictions = $._decodeSetOf<Restriction>(
            () => _decode_Restriction
        );
    }
    return _cached_decoder_for_Restrictions(el);
}

let _cached_encoder_for_Restrictions: $.ASN1Encoder<Restrictions> | null = null;

/**
 * @summary Encodes a(n) Restrictions into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Restrictions, encoded as an ASN.1 Element.
 */
export function _encode_Restrictions(
    value: Restrictions,
    elGetter: $.ASN1Encoder<Restrictions>
) {
    if (!_cached_encoder_for_Restrictions) {
        _cached_encoder_for_Restrictions = $._encodeSetOf<Restriction>(
            () => _encode_Restriction,
            $.BER
        );
    }
    return _cached_encoder_for_Restrictions(value, elGetter);
}


/* eslint-enable */
