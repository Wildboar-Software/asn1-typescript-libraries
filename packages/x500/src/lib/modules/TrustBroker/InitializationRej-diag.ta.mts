/* eslint-disable */
import { ASN1Element as _Element, ENUMERATED } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

export enum _enum_for_InitializationRej_diag {
    unsupportedVersions = 0,
}

/**
 * @summary InitializationRej_diag
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InitializationRej-diag ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export type InitializationRej_diag =
    | _enum_for_InitializationRej_diag
    | ENUMERATED;

/**
 * @summary InitializationRej_diag_unsupportedVersions
 * @constant
 * @type {number}
 */
export const InitializationRej_diag_unsupportedVersions: InitializationRej_diag = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unsupportedVersions
 * @constant
 * @type {number}
 */
export const unsupportedVersions: InitializationRej_diag = InitializationRej_diag_unsupportedVersions; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_InitializationRej_diag = $._decodeEnumerated;


export const _encode_InitializationRej_diag = $._encodeEnumerated;


/* eslint-enable */
