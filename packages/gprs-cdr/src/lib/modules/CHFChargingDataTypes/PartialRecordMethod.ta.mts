/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PartialRecordMethod
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PartialRecordMethod  ::=  ENUMERATED {
 *    default       ( 0 ),
 *    individual    ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_PartialRecordMethod {
    default_ = 0,
    individual = 1,
}

/**
 * @summary PartialRecordMethod
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PartialRecordMethod  ::=  ENUMERATED {
 *    default       ( 0 ),
 *    individual    ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
type PartialRecordMethod = _enum_for_PartialRecordMethod;

/**
 * @summary PartialRecordMethod
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PartialRecordMethod  ::=  ENUMERATED {
 *    default       ( 0 ),
 *    individual    ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
const PartialRecordMethod = _enum_for_PartialRecordMethod;

/**
 * @summary PartialRecordMethod_default_
 * @constant
 * @type {number}
 */
export
const PartialRecordMethod_default_ = PartialRecordMethod.default_ satisfies PartialRecordMethod; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary default_
 * @constant
 * @type {number}
 */
export
const default_ = PartialRecordMethod.default_ satisfies PartialRecordMethod; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PartialRecordMethod_individual
 * @constant
 * @type {number}
 */
export
const PartialRecordMethod_individual = PartialRecordMethod.individual satisfies PartialRecordMethod; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary individual
 * @constant
 * @type {number}
 */
export
const individual = PartialRecordMethod.individual satisfies PartialRecordMethod; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_PartialRecordMethod: $.ASN1Decoder<PartialRecordMethod> = $._decodeEnumerated;

export
const _encode_PartialRecordMethod: $.ASN1Encoder<PartialRecordMethod> = $._encodeEnumerated;

/* eslint-enable */
