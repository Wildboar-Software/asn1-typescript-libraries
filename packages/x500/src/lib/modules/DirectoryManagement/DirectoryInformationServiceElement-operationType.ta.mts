/* eslint-disable */
import { ASN1Element as _Element, BIT_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/**
 * @summary DirectoryInformationServiceElement_operationType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DirectoryInformationServiceElement-operationType ::= BIT STRING { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type DirectoryInformationServiceElement_operationType = BIT_STRING;

/**
 * @summary DirectoryInformationServiceElement_operationType_read
 * @constant
 */
export const DirectoryInformationServiceElement_operationType_read: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary read
 * @constant
 */
export const read: number = DirectoryInformationServiceElement_operationType_read; /* SHORT_NAMED_BIT */

/**
 * @summary DirectoryInformationServiceElement_operationType_compare
 * @constant
 */
export const DirectoryInformationServiceElement_operationType_compare: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary compare
 * @constant
 */
export const compare: number = DirectoryInformationServiceElement_operationType_compare; /* SHORT_NAMED_BIT */

/**
 * @summary DirectoryInformationServiceElement_operationType_abandon
 * @constant
 */
export const DirectoryInformationServiceElement_operationType_abandon: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary abandon
 * @constant
 */
export const abandon: number = DirectoryInformationServiceElement_operationType_abandon; /* SHORT_NAMED_BIT */

/**
 * @summary DirectoryInformationServiceElement_operationType_list
 * @constant
 */
export const DirectoryInformationServiceElement_operationType_list: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary list
 * @constant
 */
export const list: number = DirectoryInformationServiceElement_operationType_list; /* SHORT_NAMED_BIT */

/**
 * @summary DirectoryInformationServiceElement_operationType_search
 * @constant
 */
export const DirectoryInformationServiceElement_operationType_search: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary search
 * @constant
 */
export const search: number = DirectoryInformationServiceElement_operationType_search; /* SHORT_NAMED_BIT */

/**
 * @summary DirectoryInformationServiceElement_operationType_addEntry
 * @constant
 */
export const DirectoryInformationServiceElement_operationType_addEntry: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary addEntry
 * @constant
 */
export const addEntry: number = DirectoryInformationServiceElement_operationType_addEntry; /* SHORT_NAMED_BIT */

/**
 * @summary DirectoryInformationServiceElement_operationType_removeEntry
 * @constant
 */
export const DirectoryInformationServiceElement_operationType_removeEntry: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary removeEntry
 * @constant
 */
export const removeEntry: number = DirectoryInformationServiceElement_operationType_removeEntry; /* SHORT_NAMED_BIT */

/**
 * @summary DirectoryInformationServiceElement_operationType_modifyEntry
 * @constant
 */
export const DirectoryInformationServiceElement_operationType_modifyEntry: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary modifyEntry
 * @constant
 */
export const modifyEntry: number = DirectoryInformationServiceElement_operationType_modifyEntry; /* SHORT_NAMED_BIT */

/**
 * @summary DirectoryInformationServiceElement_operationType_modifyDN
 * @constant
 */
export const DirectoryInformationServiceElement_operationType_modifyDN: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary modifyDN
 * @constant
 */
export const modifyDN: number = DirectoryInformationServiceElement_operationType_modifyDN; /* SHORT_NAMED_BIT */

let _cached_decoder_for_DirectoryInformationServiceElement_operationType: $.ASN1Decoder<DirectoryInformationServiceElement_operationType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DirectoryInformationServiceElement_operationType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DirectoryInformationServiceElement_operationType} The decoded data structure.
 */
export function _decode_DirectoryInformationServiceElement_operationType(
    el: _Element
) {
    if (!_cached_decoder_for_DirectoryInformationServiceElement_operationType) {
        _cached_decoder_for_DirectoryInformationServiceElement_operationType =
            $._decodeBitString;
    }
    return _cached_decoder_for_DirectoryInformationServiceElement_operationType(
        el
    );
}

let _cached_encoder_for_DirectoryInformationServiceElement_operationType: $.ASN1Encoder<DirectoryInformationServiceElement_operationType> | null = null;

/**
 * @summary Encodes a(n) DirectoryInformationServiceElement_operationType into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DirectoryInformationServiceElement_operationType, encoded as an ASN.1 Element.
 */
export function _encode_DirectoryInformationServiceElement_operationType(
    value: DirectoryInformationServiceElement_operationType,
    elGetter: $.ASN1Encoder<DirectoryInformationServiceElement_operationType>
) {
    if (!_cached_encoder_for_DirectoryInformationServiceElement_operationType) {
        _cached_encoder_for_DirectoryInformationServiceElement_operationType =
            $._encodeBitString;
    }
    return _cached_encoder_for_DirectoryInformationServiceElement_operationType(
        value,
        elGetter
    );
}


/* eslint-enable */
