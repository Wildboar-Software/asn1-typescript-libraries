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
 * Why the relying party (client) aborted `InitializationAcc`. Wrap this PrPDU in an `ApplAbort` WrPDU (15.6), not `HandshakeProAbort`.
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
 * Server specified a single version not among those the client proposed.
 *
 * @constant
 * @type {number}
 */
export const InitializationAbort_diag_unsupportedVersion: _enum_for_InitializationAbort_diag.unsupportedVersion = _enum_for_InitializationAbort_diag.unsupportedVersion; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unsupportedVersion
 * @description
 *
 * Server specified a single version not among those the client proposed.
 *
 * @constant
 * @type {number}
 */
export const unsupportedVersion: _enum_for_InitializationAbort_diag.unsupportedVersion = InitializationAbort_diag_unsupportedVersion; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary InitializationAbort_diag_onlySingleVersionAllowed
 * @description
 *
 * Server returned more than one `version` bit. The server shall set exactly one.
 *
 * @constant
 * @type {number}
 */
export const InitializationAbort_diag_onlySingleVersionAllowed: _enum_for_InitializationAbort_diag.onlySingleVersionAllowed = _enum_for_InitializationAbort_diag.onlySingleVersionAllowed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary onlySingleVersionAllowed
 * @description
 *
 * Server returned more than one `version` bit. The server shall set exactly one.
 *
 * @constant
 * @type {number}
 */
export const onlySingleVersionAllowed: _enum_for_InitializationAbort_diag.onlySingleVersionAllowed = InitializationAbort_diag_onlySingleVersionAllowed; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_InitializationAbort_diag: $.ASN1Decoder<number> = $._decodeEnumerated;


export const _encode_InitializationAbort_diag: $.ASN1Encoder<number> = $._encodeEnumerated;


/* eslint-enable */
