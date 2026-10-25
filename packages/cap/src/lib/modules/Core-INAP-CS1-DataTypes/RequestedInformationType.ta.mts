/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RequestedInformationType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RequestedInformationType      ::=  ENUMERATED {
 *      callAttemptElapsedTime(0),
 *      callStopTime(1),
 *      callConnectedElapsedTime(2),
 *      calledAddress(3),
 *      releaseCause(30)
 *      }
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
 * RequestedInformationType      ::=  ENUMERATED {
 *      callAttemptElapsedTime(0),
 *      callStopTime(1),
 *      callConnectedElapsedTime(2),
 *      calledAddress(3),
 *      releaseCause(30)
 *      }
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
 * RequestedInformationType      ::=  ENUMERATED {
 *      callAttemptElapsedTime(0),
 *      callStopTime(1),
 *      callConnectedElapsedTime(2),
 *      calledAddress(3),
 *      releaseCause(30)
 *      }
 * ```
 * 
 * @enum {number}
 */
export
const RequestedInformationType: typeof _enum_for_RequestedInformationType = _enum_for_RequestedInformationType;

/**
 * @summary RequestedInformationType_callAttemptElapsedTime
 * @constant
 * @type {number}
 */
export
const RequestedInformationType_callAttemptElapsedTime: _enum_for_RequestedInformationType.callAttemptElapsedTime = RequestedInformationType.callAttemptElapsedTime; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callAttemptElapsedTime
 * @constant
 * @type {number}
 */
export
const callAttemptElapsedTime: _enum_for_RequestedInformationType.callAttemptElapsedTime = RequestedInformationType.callAttemptElapsedTime; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RequestedInformationType_callStopTime
 * @constant
 * @type {number}
 */
export
const RequestedInformationType_callStopTime: _enum_for_RequestedInformationType.callStopTime = RequestedInformationType.callStopTime; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callStopTime
 * @constant
 * @type {number}
 */
export
const callStopTime: _enum_for_RequestedInformationType.callStopTime = RequestedInformationType.callStopTime; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RequestedInformationType_callConnectedElapsedTime
 * @constant
 * @type {number}
 */
export
const RequestedInformationType_callConnectedElapsedTime: _enum_for_RequestedInformationType.callConnectedElapsedTime = RequestedInformationType.callConnectedElapsedTime; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callConnectedElapsedTime
 * @constant
 * @type {number}
 */
export
const callConnectedElapsedTime: _enum_for_RequestedInformationType.callConnectedElapsedTime = RequestedInformationType.callConnectedElapsedTime; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RequestedInformationType_calledAddress
 * @constant
 * @type {number}
 */
export
const RequestedInformationType_calledAddress: _enum_for_RequestedInformationType.calledAddress = RequestedInformationType.calledAddress; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary calledAddress
 * @constant
 * @type {number}
 */
export
const calledAddress: _enum_for_RequestedInformationType.calledAddress = RequestedInformationType.calledAddress; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RequestedInformationType_releaseCause
 * @constant
 * @type {number}
 */
export
const RequestedInformationType_releaseCause: _enum_for_RequestedInformationType.releaseCause = RequestedInformationType.releaseCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary releaseCause
 * @constant
 * @type {number}
 */
export
const releaseCause: _enum_for_RequestedInformationType.releaseCause = RequestedInformationType.releaseCause; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_RequestedInformationType: $.ASN1Decoder<number> = $._decodeEnumerated;
export const _encode_RequestedInformationType: $.ASN1Encoder<number> = $._encodeEnumerated;


/* eslint-enable */
