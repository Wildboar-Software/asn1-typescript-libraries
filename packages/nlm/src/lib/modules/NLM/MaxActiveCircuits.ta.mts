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
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    ChoiceInteger,
    _decode_ChoiceInteger,
    _encode_ChoiceInteger,
} from '../NLM/ChoiceInteger.ta.mjs';

/**
 * @summary MaxActiveCircuits
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MaxActiveCircuits  ::=  ChoiceInteger
 * ```
 */
export type MaxActiveCircuits = ChoiceInteger; // DefinedType


let _cached_decoder_for_MaxActiveCircuits: $.ASN1Decoder<MaxActiveCircuits> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) MaxActiveCircuits
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MaxActiveCircuits} The decoded data structure.
 */
export function _decode_MaxActiveCircuits(el: _Element) {
    if (!_cached_decoder_for_MaxActiveCircuits) {
        _cached_decoder_for_MaxActiveCircuits = _decode_ChoiceInteger;
    }
    return _cached_decoder_for_MaxActiveCircuits(el);
}


let _cached_encoder_for_MaxActiveCircuits: $.ASN1Encoder<MaxActiveCircuits> | null = null;


/**
 * @summary Encodes a(n) MaxActiveCircuits into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MaxActiveCircuits, encoded as an ASN.1 Element.
 */
export function _encode_MaxActiveCircuits(
    value: MaxActiveCircuits,
    elGetter: $.ASN1Encoder<MaxActiveCircuits>
) {
    if (!_cached_encoder_for_MaxActiveCircuits) {
        _cached_encoder_for_MaxActiveCircuits = _encode_ChoiceInteger;
    }
    return _cached_encoder_for_MaxActiveCircuits(value, elGetter);
}


/* eslint-enable */
