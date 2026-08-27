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
 * `ENUMERATED` controlling whether algorithm parameters appear in an
 * `AlgorithmIdentifier` for the information-object classes in
 * `AlgorithmInformation-2009` ([RFC 5911 §2](https://datatracker.ietf.org/doc/html/rfc5911#section-2);
 * also [RFC 5912 §3](https://datatracker.ietf.org/doc/html/rfc5912#section-3)).
 *
 * > Parameters MUST / SHOULD / SHOULD NOT / MUST NOT be encoded,
 * > may be inherited if absent, or MAY be encoded, per the named
 * > alternatives (`required`, `preferredPresent`, `preferredAbsent`,
 * > `absent`, `inheritable`, `optional`).
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
 * @description
 *
 * `required`(0): parameters MUST be encoded in the structure
 * ([RFC 5911 §2](https://datatracker.ietf.org/doc/html/rfc5911#section-2)).
 *
 * @constant
 * @type {number}
 */
export const ParamOptions_required: ParamOptions = 0; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary required
 * @description
 *
 * Short name for `ParamOptions_required`
 * ([RFC 5911 §2](https://datatracker.ietf.org/doc/html/rfc5911#section-2)).
 *
 * @constant
 * @type {number}
 */
export const required: ParamOptions = ParamOptions_required; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary ParamOptions_preferredPresent
 * @description
 *
 * `preferredPresent`(1): parameters SHOULD be encoded
 * ([RFC 5911 §2](https://datatracker.ietf.org/doc/html/rfc5911#section-2)).
 *
 * @constant
 * @type {number}
 */
export const ParamOptions_preferredPresent: ParamOptions = 1; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary preferredPresent
 * @description
 *
 * Short name for `ParamOptions_preferredPresent`
 * ([RFC 5911 §2](https://datatracker.ietf.org/doc/html/rfc5911#section-2)).
 *
 * @constant
 * @type {number}
 */
export const preferredPresent: ParamOptions = ParamOptions_preferredPresent; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary ParamOptions_preferredAbsent
 * @description
 *
 * `preferredAbsent`(2): parameters SHOULD NOT be encoded
 * ([RFC 5911 §2](https://datatracker.ietf.org/doc/html/rfc5911#section-2)).
 *
 * @constant
 * @type {number}
 */
export const ParamOptions_preferredAbsent: ParamOptions = 2; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary preferredAbsent
 * @description
 *
 * Short name for `ParamOptions_preferredAbsent`
 * ([RFC 5911 §2](https://datatracker.ietf.org/doc/html/rfc5911#section-2)).
 *
 * @constant
 * @type {number}
 */
export const preferredAbsent: ParamOptions = ParamOptions_preferredAbsent; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary ParamOptions_absent
 * @description
 *
 * `absent`(3): parameters MUST NOT be encoded
 * ([RFC 5911 §2](https://datatracker.ietf.org/doc/html/rfc5911#section-2)).
 *
 * @constant
 * @type {number}
 */
export const ParamOptions_absent: ParamOptions = 3; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary absent
 * @description
 *
 * Short name for `ParamOptions_absent`
 * ([RFC 5911 §2](https://datatracker.ietf.org/doc/html/rfc5911#section-2)).
 *
 * @constant
 * @type {number}
 */
export const absent: ParamOptions = ParamOptions_absent; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary ParamOptions_inheritable
 * @description
 *
 * `inheritable`(4): parameters are inherited if not present
 * ([RFC 5911 §2](https://datatracker.ietf.org/doc/html/rfc5911#section-2)).
 *
 * @constant
 * @type {number}
 */
export const ParamOptions_inheritable: ParamOptions = 4; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary inheritable
 * @description
 *
 * Short name for `ParamOptions_inheritable`
 * ([RFC 5911 §2](https://datatracker.ietf.org/doc/html/rfc5911#section-2)).
 *
 * @constant
 * @type {number}
 */
export const inheritable: ParamOptions = ParamOptions_inheritable; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary ParamOptions_optional
 * @description
 *
 * `optional`(5): parameters MAY be encoded in the structure
 * ([RFC 5911 §2](https://datatracker.ietf.org/doc/html/rfc5911#section-2)).
 *
 * @constant
 * @type {number}
 */
export const ParamOptions_optional: ParamOptions = 5; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary optional
 * @description
 *
 * Short name for `ParamOptions_optional`
 * ([RFC 5911 §2](https://datatracker.ietf.org/doc/html/rfc5911#section-2)).
 *
 * @constant
 * @type {number}
 */
export const optional: ParamOptions = ParamOptions_optional; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_ParamOptions = $._decodeEnumerated;




export const _encode_ParamOptions = $._encodeEnumerated;


/* eslint-enable */
