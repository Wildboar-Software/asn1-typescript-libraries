/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary EntryInformationSelection_infoTypes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EntryInformationSelection-infoTypes ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type EntryInformationSelection_infoTypes = INTEGER;

/**
 * @summary EntryInformationSelection_infoTypes_attributeTypesOnly
 * @constant
 * @type {number}
 */
export const EntryInformationSelection_infoTypes_attributeTypesOnly: EntryInformationSelection_infoTypes = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EntryInformationSelection_infoTypes_attributeTypesOnly
 * @constant
 * @type {number}
 */
export const attributeTypesOnly: EntryInformationSelection_infoTypes = EntryInformationSelection_infoTypes_attributeTypesOnly; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EntryInformationSelection_infoTypes_attributeTypesAndValues
 * @constant
 * @type {number}
 */
export const EntryInformationSelection_infoTypes_attributeTypesAndValues: EntryInformationSelection_infoTypes = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EntryInformationSelection_infoTypes_attributeTypesAndValues
 * @constant
 * @type {number}
 */
export const attributeTypesAndValues: EntryInformationSelection_infoTypes = EntryInformationSelection_infoTypes_attributeTypesAndValues; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_EntryInformationSelection_infoTypes: $.ASN1Decoder<EntryInformationSelection_infoTypes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EntryInformationSelection_infoTypes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EntryInformationSelection_infoTypes} The decoded data structure.
 */
export function _decode_EntryInformationSelection_infoTypes(el: _Element): EntryInformationSelection_infoTypes {
    if (!_cached_decoder_for_EntryInformationSelection_infoTypes) {
        _cached_decoder_for_EntryInformationSelection_infoTypes =
            $._decodeInteger;
    }
    return _cached_decoder_for_EntryInformationSelection_infoTypes(el);
}

let _cached_encoder_for_EntryInformationSelection_infoTypes: $.ASN1Encoder<EntryInformationSelection_infoTypes> | null = null;

/**
 * @summary Encodes a(n) EntryInformationSelection_infoTypes into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EntryInformationSelection_infoTypes, encoded as an ASN.1 Element.
 */
export function _encode_EntryInformationSelection_infoTypes(
    value: EntryInformationSelection_infoTypes,
    elGetter: $.ASN1Encoder<EntryInformationSelection_infoTypes>
): _Element {
    if (!_cached_encoder_for_EntryInformationSelection_infoTypes) {
        _cached_encoder_for_EntryInformationSelection_infoTypes =
            $._encodeInteger;
    }
    return _cached_encoder_for_EntryInformationSelection_infoTypes(
        value,
        elGetter
    );
}


/* eslint-enable */
