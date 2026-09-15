/* eslint-disable */
import {
    ASN1Element as _Element,
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
 * @summary requestedInfoError_ParameterType
 * @description
 *
 * Parameter of `requestedInfoError`: `unknownRequestedInfo` (1) or
 * `requestedInfoNotAvailable` (2). gsmSSF reports that CallInformationRequest
 * data is unknown or not available.
 * (3GPP TS 29.078 V19.0.0 clauses 5.2 and 10.1.8).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * requestedInfoError-ParameterType ::= SEQUENCE {
 *     unknownRequestedInfo	(1),
 *     requestedInfoNotAvailable	(2)
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
 * Parameter of `requestedInfoError`: `unknownRequestedInfo` (1) or
 * `requestedInfoNotAvailable` (2). gsmSSF reports that CallInformationRequest
 * data is unknown or not available.
 * (3GPP TS 29.078 V19.0.0 clauses 5.2 and 10.1.8).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * requestedInfoError-ParameterType ::= SEQUENCE {
 *     unknownRequestedInfo	(1),
 *     requestedInfoNotAvailable	(2)
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
 * Parameter of `requestedInfoError`: `unknownRequestedInfo` (1) or
 * `requestedInfoNotAvailable` (2). gsmSSF reports that CallInformationRequest
 * data is unknown or not available.
 * (3GPP TS 29.078 V19.0.0 clauses 5.2 and 10.1.8).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * requestedInfoError-ParameterType ::= SEQUENCE {
 *     unknownRequestedInfo	(1),
 *     requestedInfoNotAvailable	(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const requestedInfoError_ParameterType = _enum_for_requestedInfoError_ParameterType;

/**
 * @summary requestedInfoError_ParameterType_unknownRequestedInfo
 * @description
 *
 * Requested information is not known to the gsmSSF.
 * (3GPP TS 29.078 V19.0.0 clauses 5.2 and 10.1.8).
 *
 * @constant
 * @type {number}
 */
export
const requestedInfoError_ParameterType_unknownRequestedInfo: requestedInfoError_ParameterType = requestedInfoError_ParameterType.unknownRequestedInfo; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknownRequestedInfo
 * @description
 *
 * Requested information is not known to the gsmSSF.
 * (3GPP TS 29.078 V19.0.0 clauses 5.2 and 10.1.8).
 *
 * @constant
 * @type {number}
 */
export
const unknownRequestedInfo: requestedInfoError_ParameterType = requestedInfoError_ParameterType.unknownRequestedInfo; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary requestedInfoError_ParameterType_requestedInfoNotAvailable
 * @description
 *
 * Requested information is not available at the gsmSSF.
 * (3GPP TS 29.078 V19.0.0 clauses 5.2 and 10.1.8).
 *
 * @constant
 * @type {number}
 */
export
const requestedInfoError_ParameterType_requestedInfoNotAvailable: requestedInfoError_ParameterType = requestedInfoError_ParameterType.requestedInfoNotAvailable; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary requestedInfoNotAvailable
 * @description
 *
 * Requested information is not available at the gsmSSF.
 * (3GPP TS 29.078 V19.0.0 clauses 5.2 and 10.1.8).
 *
 * @constant
 * @type {number}
 */
export
const requestedInfoNotAvailable: requestedInfoError_ParameterType = requestedInfoError_ParameterType.requestedInfoNotAvailable; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_requestedInfoError_ParameterType = $._decodeEnumerated;
export const _encode_requestedInfoError_ParameterType = $._encodeEnumerated;


/* eslint-enable */
