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


/**
 * @summary FastSelect
 * @description
 *
 * Fast-select use for a call. Syntax of `fastSelect`. On an IVMO: `fastSelect`,
 * `fastSelectWithRestrictedResponse`, `noFastSelect`, or `notSpecified` (no
 * preference). On a non-IVMO: `fastSelect` or `noFastSelect` as actually used.
 * ITU-T Rec. X.283 (12/97)
 * [§5.11](https://www.itu.int/rec/T-REC-X.283-199712-I).
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
 * Fast-select use for a call. Syntax of `fastSelect`. On an IVMO: `fastSelect`,
 * `fastSelectWithRestrictedResponse`, `noFastSelect`, or `notSpecified` (no
 * preference). On a non-IVMO: `fastSelect` or `noFastSelect` as actually used.
 * ITU-T Rec. X.283 (12/97)
 * [§5.11](https://www.itu.int/rec/T-REC-X.283-199712-I).
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
 * Fast-select use for a call. Syntax of `fastSelect`. On an IVMO: `fastSelect`,
 * `fastSelectWithRestrictedResponse`, `noFastSelect`, or `notSpecified` (no
 * preference). On a non-IVMO: `fastSelect` or `noFastSelect` as actually used.
 * ITU-T Rec. X.283 (12/97)
 * [§5.11](https://www.itu.int/rec/T-REC-X.283-199712-I).
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
 * @description
 *
 * IVMO only: no preference for fast select.
 * ITU-T Rec. X.283 (12/97)
 * [§5.11](https://www.itu.int/rec/T-REC-X.283-199712-I).
 *
 * @constant
 * @type {number}
 */
export const FastSelect_notSpecified: FastSelect =
    FastSelect.notSpecified; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary notSpecified
 * @description
 *
 * IVMO only: no preference for fast select.
 * ITU-T Rec. X.283 (12/97)
 * [§5.11](https://www.itu.int/rec/T-REC-X.283-199712-I).
 *
 * @constant
 * @type {number}
 */
export const notSpecified: FastSelect =
    FastSelect.notSpecified; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary FastSelect_fastSelect
 * @description
 *
 * Fast select is (IVMO) to be used or (non-IVMO) was used.
 * ITU-T Rec. X.283 (12/97)
 * [§5.11](https://www.itu.int/rec/T-REC-X.283-199712-I).
 *
 * @constant
 * @type {number}
 */
export const FastSelect_fastSelect: FastSelect =
    FastSelect.fastSelect; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary fastSelect
 * @description
 *
 * Fast select is (IVMO) to be used or (non-IVMO) was used.
 * ITU-T Rec. X.283 (12/97)
 * [§5.11](https://www.itu.int/rec/T-REC-X.283-199712-I).
 *
 * @constant
 * @type {number}
 */
export const fastSelect: FastSelect =
    FastSelect.fastSelect; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary FastSelect_fastSelectWithRestrictedResponse
 * @description
 *
 * IVMO: request fast select with restricted response.
 * ITU-T Rec. X.283 (12/97)
 * [§5.11](https://www.itu.int/rec/T-REC-X.283-199712-I).
 *
 * @constant
 * @type {number}
 */
export const FastSelect_fastSelectWithRestrictedResponse: FastSelect =
    FastSelect.fastSelectWithRestrictedResponse; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary fastSelectWithRestrictedResponse
 * @description
 *
 * IVMO: request fast select with restricted response.
 * ITU-T Rec. X.283 (12/97)
 * [§5.11](https://www.itu.int/rec/T-REC-X.283-199712-I).
 *
 * @constant
 * @type {number}
 */
export const fastSelectWithRestrictedResponse: FastSelect =
    FastSelect.fastSelectWithRestrictedResponse; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary FastSelect_noFastSelect
 * @description
 *
 * Do not use (IVMO) / did not use (non-IVMO) fast select.
 * ITU-T Rec. X.283 (12/97)
 * [§5.11](https://www.itu.int/rec/T-REC-X.283-199712-I).
 *
 * @constant
 * @type {number}
 */
export const FastSelect_noFastSelect: FastSelect =
    FastSelect.noFastSelect; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary noFastSelect
 * @description
 *
 * Do not use (IVMO) / did not use (non-IVMO) fast select.
 * ITU-T Rec. X.283 (12/97)
 * [§5.11](https://www.itu.int/rec/T-REC-X.283-199712-I).
 *
 * @constant
 * @type {number}
 */
export const noFastSelect: FastSelect =
    FastSelect.noFastSelect; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_FastSelect = $._decodeEnumerated;




export const _encode_FastSelect = $._encodeEnumerated;


/* eslint-enable */
