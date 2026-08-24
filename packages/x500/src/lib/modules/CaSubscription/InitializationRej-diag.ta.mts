/* eslint-disable */
import { ASN1Element as _Element, ENUMERATED } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

export enum _enum_for_InitializationRej_diag {
    unsupportedVersion = 0,
}

/**
 * @summary InitializationRej_diag
 * @description
 *
 * Init-reject diagnostic. TS/ASN.1 name is `unsupportedVersion`(0); clause
 * 14.5 prose says unsupportedVersions.
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
 * Server supports none of the versions the client proposed.
 * @constant
 * @type {number}
 */
export const InitializationRej_diag_unsupportedVersion: InitializationRej_diag = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unsupportedVersion
 * @description
 *
 * Server supports none of the versions the client proposed.
 * @constant
 * @type {number}
 */
export const unsupportedVersion: InitializationRej_diag = InitializationRej_diag_unsupportedVersion; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_InitializationRej_diag = $._decodeEnumerated;


export const _encode_InitializationRej_diag = $._encodeEnumerated;


/* eslint-enable */
