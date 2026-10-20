/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary requestedInfoError_ParameterType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * requestedInfoError-ParameterType ::=
 * ENUMERATED {
 *   unknownRequestedInfo(1),
 *   requestedInfoNotAvailable(2)  -- other values FFS
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_requestedInfoError_ParameterType {
    unknownRequestedInfo = 1,
    requestedInfoNotAvailable = 2,
}

/**
 * @summary requestedInfoError_ParameterType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * requestedInfoError-ParameterType ::=
 * ENUMERATED {
 *   unknownRequestedInfo(1),
 *   requestedInfoNotAvailable(2)  -- other values FFS
 * }
 * ```
 * 
 * @enum {number}
 */
export
type requestedInfoError_ParameterType = _enum_for_requestedInfoError_ParameterType;

/**
 * @summary requestedInfoError_ParameterType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * requestedInfoError-ParameterType ::=
 * ENUMERATED {
 *   unknownRequestedInfo(1),
 *   requestedInfoNotAvailable(2)  -- other values FFS
 * }
 * ```
 * 
 * @enum {number}
 */
export
const requestedInfoError_ParameterType = _enum_for_requestedInfoError_ParameterType;

/**
 * @summary requestedInfoError_ParameterType_unknownRequestedInfo
 * @constant
 * @type {number}
 */
export
const requestedInfoError_ParameterType_unknownRequestedInfo: requestedInfoError_ParameterType = requestedInfoError_ParameterType.unknownRequestedInfo; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknownRequestedInfo
 * @constant
 * @type {number}
 */
export
const unknownRequestedInfo: requestedInfoError_ParameterType = requestedInfoError_ParameterType.unknownRequestedInfo; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary requestedInfoError_ParameterType_requestedInfoNotAvailable
 * @constant
 * @type {number}
 */
export
const requestedInfoError_ParameterType_requestedInfoNotAvailable: requestedInfoError_ParameterType = requestedInfoError_ParameterType.requestedInfoNotAvailable; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary requestedInfoNotAvailable
 * @constant
 * @type {number}
 */
export
const requestedInfoNotAvailable: requestedInfoError_ParameterType = requestedInfoError_ParameterType.requestedInfoNotAvailable; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_requestedInfoError_ParameterType: $.ASN1Decoder<requestedInfoError_ParameterType> = $._decodeEnumerated;

export
const _encode_requestedInfoError_ParameterType: $.ASN1Encoder<requestedInfoError_ParameterType> = $._encodeEnumerated;

/* eslint-enable */
