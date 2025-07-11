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
    CharacteristicInformation,
    _decode_CharacteristicInformation,
    _encode_CharacteristicInformation,
} from '../ASN1DefinedTypesModule/CharacteristicInformation.ta.mjs';


/**
 * @summary PayloadLevel
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PayloadLevel  ::=  CharacteristicInformation
 * ```
 */
export type PayloadLevel = CharacteristicInformation; // DefinedType


let _cached_decoder_for_PayloadLevel: $.ASN1Decoder<PayloadLevel> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) PayloadLevel
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PayloadLevel} The decoded data structure.
 */
export function _decode_PayloadLevel(el: _Element): PayloadLevel {
    if (!_cached_decoder_for_PayloadLevel) {
        _cached_decoder_for_PayloadLevel = _decode_CharacteristicInformation;
    }
    return _cached_decoder_for_PayloadLevel(el);
}


let _cached_encoder_for_PayloadLevel: $.ASN1Encoder<PayloadLevel> | null = null;


/**
 * @summary Encodes a(n) PayloadLevel into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PayloadLevel, encoded as an ASN.1 Element.
 */
export function _encode_PayloadLevel(
    value: PayloadLevel,
    elGetter: $.ASN1Encoder<PayloadLevel>
): _Element {
    if (!_cached_encoder_for_PayloadLevel) {
        _cached_encoder_for_PayloadLevel = _encode_CharacteristicInformation;
    }
    return _cached_encoder_for_PayloadLevel(value, elGetter);
}


/* eslint-enable */
