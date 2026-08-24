/* eslint-disable */
import { ASN1Element as _Element, ENUMERATED } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

export enum _enum_for_InitializationRej_diag {
    unsupportedVersions = 0,
}

/**
 * @summary InitializationRej_diag
 * @description
 *
 * Why the TB (server) rejected `InitializationReq`. ASN.1 name is `unsupportedVersions` (plural); wrap the PrPDU in `HandshakeProRej`.
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
 * @description
 *
 * Server supports none of the versions the client proposed.
 *
 * @constant
 * @type {number}
 */
export const InitializationRej_diag_unsupportedVersions: InitializationRej_diag = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unsupportedVersions
 * @description
 *
 * Server supports none of the versions the client proposed.
 *
 * @constant
 * @type {number}
 */
export const unsupportedVersions: InitializationRej_diag = InitializationRej_diag_unsupportedVersions; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_InitializationRej_diag = $._decodeEnumerated;


export const _encode_InitializationRej_diag = $._encodeEnumerated;


/* eslint-enable */
