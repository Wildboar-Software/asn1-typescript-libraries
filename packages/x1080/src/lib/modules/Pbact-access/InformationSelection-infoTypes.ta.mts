/* eslint-disable */
import {
    ENUMERATED,
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


export enum _enum_for_InformationSelection_infoTypes {
    attributeTypesOnly = 0,
    attributeTypeAndValue = 1,
}


/**
 * @summary InformationSelection_infoTypes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InformationSelection-infoTypes ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export type InformationSelection_infoTypes =
    | _enum_for_InformationSelection_infoTypes
    | ENUMERATED;


/**
 * @summary InformationSelection_infoTypes_attributeTypesOnly
 * @constant
 * @type {number}
 */
export const InformationSelection_infoTypes_attributeTypesOnly: InformationSelection_infoTypes = 0; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary attributeTypesOnly
 * @constant
 * @type {number}
 */
export const attributeTypesOnly: InformationSelection_infoTypes = InformationSelection_infoTypes_attributeTypesOnly; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary InformationSelection_infoTypes_attributeTypeAndValue
 * @constant
 * @type {number}
 */
export const InformationSelection_infoTypes_attributeTypeAndValue: InformationSelection_infoTypes = 1; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary attributeTypeAndValue
 * @constant
 * @type {number}
 */
export const attributeTypeAndValue: InformationSelection_infoTypes = InformationSelection_infoTypes_attributeTypeAndValue; /* SHORT_NAMED_ENUMERATED_VALUE */


let _cached_decoder_for_InformationSelection_infoTypes: $.ASN1Decoder<InformationSelection_infoTypes> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) InformationSelection_infoTypes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {InformationSelection_infoTypes} The decoded data structure.
 */
export function _decode_InformationSelection_infoTypes(el: _Element) {
    if (!_cached_decoder_for_InformationSelection_infoTypes) {
        _cached_decoder_for_InformationSelection_infoTypes =
            $._decodeEnumerated;
    }
    return _cached_decoder_for_InformationSelection_infoTypes(el);
}


let _cached_encoder_for_InformationSelection_infoTypes: $.ASN1Encoder<InformationSelection_infoTypes> | null = null;


/**
 * @summary Encodes a(n) InformationSelection_infoTypes into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InformationSelection_infoTypes, encoded as an ASN.1 Element.
 */
export function _encode_InformationSelection_infoTypes(
    value: InformationSelection_infoTypes,
    elGetter: $.ASN1Encoder<InformationSelection_infoTypes>
) {
    if (!_cached_encoder_for_InformationSelection_infoTypes) {
        _cached_encoder_for_InformationSelection_infoTypes =
            $._encodeEnumerated;
    }
    return _cached_encoder_for_InformationSelection_infoTypes(value, elGetter);
}


/* eslint-enable */
