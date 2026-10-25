/* eslint-disable */
import { ASN1Element as _Element, type ENUMERATED } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

export enum _enum_for_InitializationRej_diag {
    unsupportedVersion = 0,
}

/**
 * @summary InitializationRej_diag
 * @description
 *
 * Server reject of `InitializationRec`. Sole named value `unsupportedVersion` (0): none of the client’s Version bits are supported. Prose sometimes says unsupportedVersions — use this TS name.
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
 * @summary InitializationRej_diag_unsupportedVersion
 * @description
 *
 * Server supports none of the Version bits offered in `InitializationRec`.
 *
 * @constant
 * @type {number}
 */
export const InitializationRej_diag_unsupportedVersion = _enum_for_InitializationRej_diag.unsupportedVersion satisfies InitializationRej_diag; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unsupportedVersion
 * @description
 *
 * Server supports none of the Version bits offered in `InitializationRec`.
 *
 * @constant
 * @type {number}
 */
export const unsupportedVersion = InitializationRej_diag_unsupportedVersion satisfies InitializationRej_diag; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_InitializationRej_diag = $._decodeEnumerated;


export const _encode_InitializationRej_diag = $._encodeEnumerated;


/* eslint-enable */
