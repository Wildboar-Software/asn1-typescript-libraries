/* eslint-disable */
import { ASN1Element as _Element, type ENUMERATED } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

export enum _enum_for_InitializationAbort_diag {
    unsupportedVersion = 0,
    onlySingleVersionAllowed = 1,
}

/**
 * @summary InitializationAbort_diag
 * @description
 *
 * Client abort of `InitializationAcc`. `unsupportedVersion` (0): server version not in the client’s bits. `onlySingleVersionAllowed` (1): server returned **multiple** version bits.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InitializationAbort-diag ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export type InitializationAbort_diag =
    | _enum_for_InitializationAbort_diag
    | ENUMERATED;

/**
 * @summary InitializationAbort_diag_unsupportedVersion
 * @description
 *
 * Server selected a Version bit not among those offered in `InitializationRec`.
 *
 * @constant
 * @type {number}
 */
export const InitializationAbort_diag_unsupportedVersion: _enum_for_InitializationAbort_diag.unsupportedVersion = _enum_for_InitializationAbort_diag.unsupportedVersion; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unsupportedVersion
 * @description
 *
 * Server selected a Version bit not among those offered in `InitializationRec`.
 *
 * @constant
 * @type {number}
 */
export const unsupportedVersion: _enum_for_InitializationAbort_diag.unsupportedVersion = InitializationAbort_diag_unsupportedVersion; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary InitializationAbort_diag_onlySingleVersionAllowed
 * @description
 *
 * `InitializationAcc.version` had more than one bit set; the server shall set exactly one.
 *
 * @constant
 * @type {number}
 */
export const InitializationAbort_diag_onlySingleVersionAllowed: _enum_for_InitializationAbort_diag.onlySingleVersionAllowed = _enum_for_InitializationAbort_diag.onlySingleVersionAllowed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary onlySingleVersionAllowed
 * @description
 *
 * `InitializationAcc.version` had more than one bit set; the server shall set exactly one.
 *
 * @constant
 * @type {number}
 */
export const onlySingleVersionAllowed: _enum_for_InitializationAbort_diag.onlySingleVersionAllowed = InitializationAbort_diag_onlySingleVersionAllowed; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_InitializationAbort_diag: $.ASN1Decoder<number> = $._decodeEnumerated;


export const _encode_InitializationAbort_diag: $.ASN1Encoder<number> = $._encodeEnumerated;


/* eslint-enable */
