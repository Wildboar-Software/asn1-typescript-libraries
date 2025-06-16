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


/**
 * @summary FastSelect
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FastSelect  ::=  ENUMERATED {
 *   notSpecified(0), fastSelect(1), fastSelectWithRestrictedResponse(2),
 *   noFastSelect(3)}
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_FastSelect {
    notSpecified = 0,
    fastSelect = 1,
    fastSelectWithRestrictedResponse = 2,
    noFastSelect = 3,
}


/**
 * @summary FastSelect
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FastSelect  ::=  ENUMERATED {
 *   notSpecified(0), fastSelect(1), fastSelectWithRestrictedResponse(2),
 *   noFastSelect(3)}
 * ```
 *
 * @enum {number}
 */
export type FastSelect = _enum_for_FastSelect;


/**
 * @summary FastSelect
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FastSelect  ::=  ENUMERATED {
 *   notSpecified(0), fastSelect(1), fastSelectWithRestrictedResponse(2),
 *   noFastSelect(3)}
 * ```
 *
 * @enum {number}
 */
export const FastSelect = _enum_for_FastSelect;


/**
 * @summary FastSelect_notSpecified
 * @constant
 * @type {number}
 */
export const FastSelect_notSpecified: FastSelect =
    FastSelect.notSpecified; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary notSpecified
 * @constant
 * @type {number}
 */
export const notSpecified: FastSelect =
    FastSelect.notSpecified; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary FastSelect_fastSelect
 * @constant
 * @type {number}
 */
export const FastSelect_fastSelect: FastSelect =
    FastSelect.fastSelect; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary fastSelect
 * @constant
 * @type {number}
 */
export const fastSelect: FastSelect =
    FastSelect.fastSelect; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary FastSelect_fastSelectWithRestrictedResponse
 * @constant
 * @type {number}
 */
export const FastSelect_fastSelectWithRestrictedResponse: FastSelect =
    FastSelect.fastSelectWithRestrictedResponse; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary fastSelectWithRestrictedResponse
 * @constant
 * @type {number}
 */
export const fastSelectWithRestrictedResponse: FastSelect =
    FastSelect.fastSelectWithRestrictedResponse; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary FastSelect_noFastSelect
 * @constant
 * @type {number}
 */
export const FastSelect_noFastSelect: FastSelect =
    FastSelect.noFastSelect; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary noFastSelect
 * @constant
 * @type {number}
 */
export const noFastSelect: FastSelect =
    FastSelect.noFastSelect; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_FastSelect = $._decodeEnumerated;




export const _encode_FastSelect = $._encodeEnumerated;


/* eslint-enable */
