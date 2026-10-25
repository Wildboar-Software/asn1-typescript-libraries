/* eslint-disable */
import {
    type ASN1Element as _Element,
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
 * @summary DLPolicy_return_of_content
 * @description
 *
 * Defined in ITU-T X.402 (1999) (§17 / Annex A).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DLPolicy-return-of-content ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_DLPolicy_return_of_content {
    unchanged = 0,
    content_return_not_requested = 1,
    content_return_requested = 2,
}

/**
 * @summary DLPolicy_return_of_content
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DLPolicy-return-of-content ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export type DLPolicy_return_of_content = _enum_for_DLPolicy_return_of_content;

/**
 * @summary DLPolicy_return_of_content
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DLPolicy-return-of-content ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export const DLPolicy_return_of_content = _enum_for_DLPolicy_return_of_content;

/**
 * @summary DLPolicy_return_of_content_unchanged
 * @constant
 * @type {number}
 */
export const DLPolicy_return_of_content_unchanged =
    DLPolicy_return_of_content.unchanged satisfies DLPolicy_return_of_content; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unchanged
 * @constant
 * @type {number}
 */
export const unchanged =
    DLPolicy_return_of_content.unchanged satisfies DLPolicy_return_of_content; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DLPolicy_return_of_content_content_return_not_requested
 * @constant
 * @type {number}
 */
export const DLPolicy_return_of_content_content_return_not_requested =
    DLPolicy_return_of_content.content_return_not_requested satisfies DLPolicy_return_of_content; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary content_return_not_requested
 * @constant
 * @type {number}
 */
export const content_return_not_requested =
    DLPolicy_return_of_content.content_return_not_requested satisfies DLPolicy_return_of_content; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DLPolicy_return_of_content_content_return_requested
 * @constant
 * @type {number}
 */
export const DLPolicy_return_of_content_content_return_requested =
    DLPolicy_return_of_content.content_return_requested satisfies DLPolicy_return_of_content; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary content_return_requested
 * @constant
 * @type {number}
 */
export const content_return_requested =
    DLPolicy_return_of_content.content_return_requested satisfies DLPolicy_return_of_content; /* SHORT_NAMED_ENUMERATED_VALUE */


export function _decode_DLPolicy_return_of_content(el: _Element): DLPolicy_return_of_content {
    const enumerated = $._decodeEnumerated(el);
    switch (enumerated) {
        case DLPolicy_return_of_content.unchanged: return DLPolicy_return_of_content.unchanged;
        case DLPolicy_return_of_content.content_return_not_requested: return DLPolicy_return_of_content.content_return_not_requested;
        case DLPolicy_return_of_content.content_return_requested: return DLPolicy_return_of_content.content_return_requested;
        default:
            throw new _ConstructionError(
                'Invalid ENUMERATED value ' + enumerated + ' for DLPolicy_return_of_content.',
                el,
            );
    }
}


export const _encode_DLPolicy_return_of_content: $.ASN1Encoder<DLPolicy_return_of_content> = $._encodeEnumerated as $.ASN1Encoder<DLPolicy_return_of_content>;


/* eslint-enable */
