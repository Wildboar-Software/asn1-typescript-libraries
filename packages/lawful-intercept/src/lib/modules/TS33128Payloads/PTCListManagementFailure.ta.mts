/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PTCListManagementFailure
 * @description
 * 
 * Report when list management request is unsuccessful.
 *
 * 3GPP TS 33.128, clause 7.5.2.17.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCListManagementFailure   ::=  ENUMERATED
 * {
 *     requestUnsuccessful(1),
 *     requestUnknown(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_PTCListManagementFailure {
    requestUnsuccessful = 1,
    requestUnknown = 2,
}

/**
 * @summary PTCListManagementFailure
 * @description
 * 
 * Report when list management request is unsuccessful.
 *
 * 3GPP TS 33.128, clause 7.5.2.17.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCListManagementFailure   ::=  ENUMERATED
 * {
 *     requestUnsuccessful(1),
 *     requestUnknown(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type PTCListManagementFailure = _enum_for_PTCListManagementFailure;

/**
 * @summary PTCListManagementFailure
 * @description
 * 
 * Report when list management request is unsuccessful.
 *
 * 3GPP TS 33.128, clause 7.5.2.17.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCListManagementFailure   ::=  ENUMERATED
 * {
 *     requestUnsuccessful(1),
 *     requestUnknown(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const PTCListManagementFailure = _enum_for_PTCListManagementFailure;

/**
 * @summary PTCListManagementFailure_requestUnsuccessful
 * @constant
 * @type {number}
 */
export
const PTCListManagementFailure_requestUnsuccessful = PTCListManagementFailure.requestUnsuccessful satisfies PTCListManagementFailure; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary requestUnsuccessful
 * @constant
 * @type {number}
 */
export
const requestUnsuccessful = PTCListManagementFailure.requestUnsuccessful satisfies PTCListManagementFailure; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCListManagementFailure_requestUnknown
 * @constant
 * @type {number}
 */
export
const PTCListManagementFailure_requestUnknown = PTCListManagementFailure.requestUnknown satisfies PTCListManagementFailure; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary requestUnknown
 * @constant
 * @type {number}
 */
export
const requestUnknown = PTCListManagementFailure.requestUnknown satisfies PTCListManagementFailure; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_PTCListManagementFailure: $.ASN1Decoder<PTCListManagementFailure> = $._decodeEnumerated;
export const _encode_PTCListManagementFailure: $.ASN1Encoder<PTCListManagementFailure> = $._encodeEnumerated;


/* eslint-enable */
