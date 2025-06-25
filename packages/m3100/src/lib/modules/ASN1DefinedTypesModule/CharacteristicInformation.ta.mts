/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
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


/**
 * @summary CharacteristicInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CharacteristicInformation  ::=  OBJECT IDENTIFIER
 * ```
 */
export type CharacteristicInformation = OBJECT_IDENTIFIER; // ObjectIdentifierType


let _cached_decoder_for_CharacteristicInformation: $.ASN1Decoder<CharacteristicInformation> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) CharacteristicInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CharacteristicInformation} The decoded data structure.
 */
export function _decode_CharacteristicInformation(el: _Element): CharacteristicInformation {
    if (!_cached_decoder_for_CharacteristicInformation) {
        _cached_decoder_for_CharacteristicInformation =
            $._decodeObjectIdentifier;
    }
    return _cached_decoder_for_CharacteristicInformation(el);
}


let _cached_encoder_for_CharacteristicInformation: $.ASN1Encoder<CharacteristicInformation> | null = null;


/**
 * @summary Encodes a(n) CharacteristicInformation into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CharacteristicInformation, encoded as an ASN.1 Element.
 */
export function _encode_CharacteristicInformation(
    value: CharacteristicInformation,
    elGetter: $.ASN1Encoder<CharacteristicInformation>
): _Element {
    if (!_cached_encoder_for_CharacteristicInformation) {
        _cached_encoder_for_CharacteristicInformation =
            $._encodeObjectIdentifier;
    }
    return _cached_encoder_for_CharacteristicInformation(value, elGetter);
}


/* eslint-enable */
