/* eslint-disable */
import { ASN1Element as _Element, ASN1ConstructionError as _ConstructionError } from "@wildboar/asn1";
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
const requestedInfoError_ParameterType_unknownRequestedInfo = requestedInfoError_ParameterType.unknownRequestedInfo satisfies requestedInfoError_ParameterType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknownRequestedInfo
 * @constant
 * @type {number}
 */
export
const unknownRequestedInfo = requestedInfoError_ParameterType.unknownRequestedInfo satisfies requestedInfoError_ParameterType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary requestedInfoError_ParameterType_requestedInfoNotAvailable
 * @constant
 * @type {number}
 */
export
const requestedInfoError_ParameterType_requestedInfoNotAvailable = requestedInfoError_ParameterType.requestedInfoNotAvailable satisfies requestedInfoError_ParameterType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary requestedInfoNotAvailable
 * @constant
 * @type {number}
 */
export
const requestedInfoNotAvailable = requestedInfoError_ParameterType.requestedInfoNotAvailable satisfies requestedInfoError_ParameterType; /* SHORT_NAMED_ENUMERATED_VALUE */

export
function _decode_requestedInfoError_ParameterType(el: _Element): requestedInfoError_ParameterType {
    const enumerated = $._decodeEnumerated(el);
    switch (enumerated) {
        case requestedInfoError_ParameterType.unknownRequestedInfo: return requestedInfoError_ParameterType.unknownRequestedInfo;
        case requestedInfoError_ParameterType.requestedInfoNotAvailable: return requestedInfoError_ParameterType.requestedInfoNotAvailable;
        default:
            throw new _ConstructionError(
                "Invalid ENUMERATED value " + enumerated + " for requestedInfoError_ParameterType.",
                el,
            );
    }
}

export
const _encode_requestedInfoError_ParameterType: $.ASN1Encoder<requestedInfoError_ParameterType> = $._encodeEnumerated as $.ASN1Encoder<requestedInfoError_ParameterType>;

/* eslint-enable */
