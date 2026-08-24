/* eslint-disable */
import { ASN1Element as _Element, ENUMERATED } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary IdmBindError_aETitleError
 * @description
 *
 * Optional BindError when both peers use AE titles. Extensible.
 *
 * @enum {number}
 */
export enum _enum_for_IdmBindError_aETitleError {
    callingAETitleNotAccepted = 0,
    calledAETitleNotRecognized = 1,
}

/**
 * @summary IdmBindError_aETitleError
 * @description
 *
 * Optional BindError reason for AE titles. (0) calling AE title not
 * acceptable; (1) called AE title not this DSA's name. Only if both
 * sides use AE-title information. Extensible.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IdmBindError-aETitleError ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export type IdmBindError_aETitleError =
    | _enum_for_IdmBindError_aETitleError
    | ENUMERATED;

/**
 * @summary IdmBindError_aETitleError_callingAETitleNotAccepted
 * @description
 *
 * callingAETitle present but not acceptable. (0)
 *
 * @constant
 * @type {number}
 */
export const IdmBindError_aETitleError_callingAETitleNotAccepted: IdmBindError_aETitleError = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callingAETitleNotAccepted
 * @description
 *
 * callingAETitle present but not acceptable. (0)
 *
 * @constant
 * @type {number}
 */
export const callingAETitleNotAccepted: IdmBindError_aETitleError = IdmBindError_aETitleError_callingAETitleNotAccepted; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IdmBindError_aETitleError_calledAETitleNotRecognized
 * @description
 *
 * calledAETitle present but is not this AE's name. (1)
 *
 * @constant
 * @type {number}
 */
export const IdmBindError_aETitleError_calledAETitleNotRecognized: IdmBindError_aETitleError = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary calledAETitleNotRecognized
 * @description
 *
 * calledAETitle present but is not this AE's name. (1)
 *
 * @constant
 * @type {number}
 */
export const calledAETitleNotRecognized: IdmBindError_aETitleError = IdmBindError_aETitleError_calledAETitleNotRecognized; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_IdmBindError_aETitleError = $._decodeEnumerated;


export const _encode_IdmBindError_aETitleError = $._encodeEnumerated;


/* eslint-enable */
