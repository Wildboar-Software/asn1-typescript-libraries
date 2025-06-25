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
 * @summary ListOfCharacteristicInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ListOfCharacteristicInformation  ::=  SET OF CharacteristicInformation
 * ```
 */
export type ListOfCharacteristicInformation = CharacteristicInformation[]; // SetOfType


let _cached_decoder_for_ListOfCharacteristicInformation: $.ASN1Decoder<ListOfCharacteristicInformation> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ListOfCharacteristicInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ListOfCharacteristicInformation} The decoded data structure.
 */
export function _decode_ListOfCharacteristicInformation(el: _Element): ListOfCharacteristicInformation {
    if (!_cached_decoder_for_ListOfCharacteristicInformation) {
        _cached_decoder_for_ListOfCharacteristicInformation = $._decodeSetOf<CharacteristicInformation>(
            () => _decode_CharacteristicInformation
        );
    }
    return _cached_decoder_for_ListOfCharacteristicInformation(el);
}


let _cached_encoder_for_ListOfCharacteristicInformation: $.ASN1Encoder<ListOfCharacteristicInformation> | null = null;


/**
 * @summary Encodes a(n) ListOfCharacteristicInformation into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ListOfCharacteristicInformation, encoded as an ASN.1 Element.
 */
export function _encode_ListOfCharacteristicInformation(
    value: ListOfCharacteristicInformation,
    elGetter: $.ASN1Encoder<ListOfCharacteristicInformation>
): _Element {
    if (!_cached_encoder_for_ListOfCharacteristicInformation) {
        _cached_encoder_for_ListOfCharacteristicInformation = $._encodeSetOf<CharacteristicInformation>(
            () => _encode_CharacteristicInformation,
            $.BER
        );
    }
    return _cached_encoder_for_ListOfCharacteristicInformation(value, elGetter);
}


/* eslint-enable */
