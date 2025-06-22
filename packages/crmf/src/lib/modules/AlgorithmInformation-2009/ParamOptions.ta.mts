/* eslint-disable */
import { ASN1Element as _Element, ENUMERATED } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


export enum _enum_for_ParamOptions {
    required = 0,
    preferredPresent = 1,
    preferredAbsent = 2,
    absent = 3,
    inheritable = 4,
    optional = 5,
}


/**
 * @summary ParamOptions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ParamOptions  ::=  ENUMERATED {
 *     required,         -- Parameters MUST be encoded in structure
 *     preferredPresent, -- Parameters SHOULD be encoded in structure
 *     preferredAbsent,  -- Parameters SHOULD NOT be encoded in structure
 *     absent,           -- Parameters MUST NOT be encoded in structure
 *     inheritable,      -- Parameters are inherited if not present
 *     optional,         -- Parameters MAY be encoded in the structure
 *     ...
 * }
 * ```
 *
 * @enum {number}
 */
export type ParamOptions = _enum_for_ParamOptions | ENUMERATED;


/**
 * @summary ParamOptions_required
 * @constant
 * @type {number}
 */
export const ParamOptions_required: ParamOptions = 0; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary required
 * @constant
 * @type {number}
 */
export const required: ParamOptions = ParamOptions_required; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary ParamOptions_preferredPresent
 * @constant
 * @type {number}
 */
export const ParamOptions_preferredPresent: ParamOptions = 1; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary preferredPresent
 * @constant
 * @type {number}
 */
export const preferredPresent: ParamOptions = ParamOptions_preferredPresent; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary ParamOptions_preferredAbsent
 * @constant
 * @type {number}
 */
export const ParamOptions_preferredAbsent: ParamOptions = 2; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary preferredAbsent
 * @constant
 * @type {number}
 */
export const preferredAbsent: ParamOptions = ParamOptions_preferredAbsent; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary ParamOptions_absent
 * @constant
 * @type {number}
 */
export const ParamOptions_absent: ParamOptions = 3; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary absent
 * @constant
 * @type {number}
 */
export const absent: ParamOptions = ParamOptions_absent; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary ParamOptions_inheritable
 * @constant
 * @type {number}
 */
export const ParamOptions_inheritable: ParamOptions = 4; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary inheritable
 * @constant
 * @type {number}
 */
export const inheritable: ParamOptions = ParamOptions_inheritable; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary ParamOptions_optional
 * @constant
 * @type {number}
 */
export const ParamOptions_optional: ParamOptions = 5; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary optional
 * @constant
 * @type {number}
 */
export const optional: ParamOptions = ParamOptions_optional; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_ParamOptions = $._decodeEnumerated;




export const _encode_ParamOptions = $._encodeEnumerated;


/* eslint-enable */
