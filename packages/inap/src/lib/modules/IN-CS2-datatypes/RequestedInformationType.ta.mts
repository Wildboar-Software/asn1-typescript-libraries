/* eslint-disable */
import { ASN1Element as _Element, ASN1ConstructionError as _ConstructionError } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RequestedInformationType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RequestedInformationType  ::=  ENUMERATED {
 *   callAttemptElapsedTime(0), callStopTime(1), callConnectedElapsedTime(2),
 *   calledAddress(3), releaseCause(30)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_RequestedInformationType {
    callAttemptElapsedTime = 0,
    callStopTime = 1,
    callConnectedElapsedTime = 2,
    calledAddress = 3,
    releaseCause = 30,
}

/**
 * @summary RequestedInformationType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RequestedInformationType  ::=  ENUMERATED {
 *   callAttemptElapsedTime(0), callStopTime(1), callConnectedElapsedTime(2),
 *   calledAddress(3), releaseCause(30)}
 * ```
 * 
 * @enum {number}
 */
export
type RequestedInformationType = _enum_for_RequestedInformationType;

/**
 * @summary RequestedInformationType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RequestedInformationType  ::=  ENUMERATED {
 *   callAttemptElapsedTime(0), callStopTime(1), callConnectedElapsedTime(2),
 *   calledAddress(3), releaseCause(30)}
 * ```
 * 
 * @enum {number}
 */
export
const RequestedInformationType = _enum_for_RequestedInformationType;

/**
 * @summary RequestedInformationType_callAttemptElapsedTime
 * @constant
 * @type {number}
 */
export
const RequestedInformationType_callAttemptElapsedTime: RequestedInformationType = RequestedInformationType.callAttemptElapsedTime; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callAttemptElapsedTime
 * @constant
 * @type {number}
 */
export
const callAttemptElapsedTime: RequestedInformationType = RequestedInformationType.callAttemptElapsedTime; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RequestedInformationType_callStopTime
 * @constant
 * @type {number}
 */
export
const RequestedInformationType_callStopTime: RequestedInformationType = RequestedInformationType.callStopTime; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callStopTime
 * @constant
 * @type {number}
 */
export
const callStopTime: RequestedInformationType = RequestedInformationType.callStopTime; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RequestedInformationType_callConnectedElapsedTime
 * @constant
 * @type {number}
 */
export
const RequestedInformationType_callConnectedElapsedTime: RequestedInformationType = RequestedInformationType.callConnectedElapsedTime; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callConnectedElapsedTime
 * @constant
 * @type {number}
 */
export
const callConnectedElapsedTime: RequestedInformationType = RequestedInformationType.callConnectedElapsedTime; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RequestedInformationType_calledAddress
 * @constant
 * @type {number}
 */
export
const RequestedInformationType_calledAddress: RequestedInformationType = RequestedInformationType.calledAddress; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary calledAddress
 * @constant
 * @type {number}
 */
export
const calledAddress: RequestedInformationType = RequestedInformationType.calledAddress; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RequestedInformationType_releaseCause
 * @constant
 * @type {number}
 */
export
const RequestedInformationType_releaseCause: RequestedInformationType = RequestedInformationType.releaseCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary releaseCause
 * @constant
 * @type {number}
 */
export
const releaseCause: RequestedInformationType = RequestedInformationType.releaseCause; /* SHORT_NAMED_ENUMERATED_VALUE */

export
function _decode_RequestedInformationType(el: _Element): RequestedInformationType {
    const enumerated = $._decodeEnumerated(el);
    switch (enumerated) {
        case RequestedInformationType.callAttemptElapsedTime: return RequestedInformationType.callAttemptElapsedTime;
        case RequestedInformationType.callStopTime: return RequestedInformationType.callStopTime;
        case RequestedInformationType.callConnectedElapsedTime: return RequestedInformationType.callConnectedElapsedTime;
        case RequestedInformationType.calledAddress: return RequestedInformationType.calledAddress;
        case RequestedInformationType.releaseCause: return RequestedInformationType.releaseCause;
        default:
            throw new _ConstructionError(
                "Invalid ENUMERATED value " + enumerated + " for RequestedInformationType.",
                el,
            );
    }
}

export
const _encode_RequestedInformationType: $.ASN1Encoder<RequestedInformationType> = $._encodeEnumerated as $.ASN1Encoder<RequestedInformationType>;

/* eslint-enable */
