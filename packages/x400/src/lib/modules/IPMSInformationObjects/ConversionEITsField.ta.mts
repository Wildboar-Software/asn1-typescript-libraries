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
    EncodedInformationTypes,
    _decode_EncodedInformationTypes,
    _encode_EncodedInformationTypes,
} from '../MTSAbstractService/EncodedInformationTypes.ta.mjs';
/**
 * @summary ConversionEITsField
 * @description
 *
 * Defined in ITU-T X.420 (1999) (§7).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ConversionEITsField  ::=  EncodedInformationTypes
 * ```
 */
export type ConversionEITsField = EncodedInformationTypes; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) ConversionEITsField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ConversionEITsField} The decoded data structure.
 */
export const _decode_ConversionEITsField: $.ASN1Decoder<ConversionEITsField> = _decode_EncodedInformationTypes;

/**
 * @summary Encodes a(n) ConversionEITsField into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConversionEITsField, encoded as an ASN.1 Element.
 */
export const _encode_ConversionEITsField: $.ASN1Encoder<ConversionEITsField> = _encode_EncodedInformationTypes;


/* eslint-enable */
