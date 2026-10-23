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

/**
 * @summary Decodes an ASN.1 element into a(n) PayloadLevel
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PayloadLevel} The decoded data structure.
 */
export const _decode_PayloadLevel: $.ASN1Decoder<PayloadLevel> = _decode_CharacteristicInformation;

/**
 * @summary Encodes a(n) PayloadLevel into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PayloadLevel, encoded as an ASN.1 Element.
 */
export const _encode_PayloadLevel: $.ASN1Encoder<PayloadLevel> = _encode_CharacteristicInformation;


/* eslint-enable */
