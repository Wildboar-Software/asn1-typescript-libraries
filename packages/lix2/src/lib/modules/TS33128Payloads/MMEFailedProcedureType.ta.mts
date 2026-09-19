/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
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
 * @summary MMEFailedProcedureType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMEFailedProcedureType  ::=  ENUMERATED
 * {
 *     attachReject(1),
 *     authenticationReject(2),
 *     securityModeReject(3),
 *     serviceReject(4),
 *     trackingAreaUpdateReject(5),
 *     activateDedicatedEPSBearerContextReject(6),
 *     activateDefaultEPSBearerContextReject(7),
 *     bearerResourceAllocationReject(8),
 *     bearerResourceModificationReject(9),
 *     modifyEPSBearerContectReject(10),
 *     pDNConnectivityReject(11),
 *     pDNDisconnectReject(12)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_MMEFailedProcedureType {
    attachReject = 1,
    authenticationReject = 2,
    securityModeReject = 3,
    serviceReject = 4,
    trackingAreaUpdateReject = 5,
    activateDedicatedEPSBearerContextReject = 6,
    activateDefaultEPSBearerContextReject = 7,
    bearerResourceAllocationReject = 8,
    bearerResourceModificationReject = 9,
    modifyEPSBearerContectReject = 10,
    pDNConnectivityReject = 11,
    pDNDisconnectReject = 12,
}

/**
 * @summary MMEFailedProcedureType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMEFailedProcedureType  ::=  ENUMERATED
 * {
 *     attachReject(1),
 *     authenticationReject(2),
 *     securityModeReject(3),
 *     serviceReject(4),
 *     trackingAreaUpdateReject(5),
 *     activateDedicatedEPSBearerContextReject(6),
 *     activateDefaultEPSBearerContextReject(7),
 *     bearerResourceAllocationReject(8),
 *     bearerResourceModificationReject(9),
 *     modifyEPSBearerContectReject(10),
 *     pDNConnectivityReject(11),
 *     pDNDisconnectReject(12)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type MMEFailedProcedureType = _enum_for_MMEFailedProcedureType;

/**
 * @summary MMEFailedProcedureType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMEFailedProcedureType  ::=  ENUMERATED
 * {
 *     attachReject(1),
 *     authenticationReject(2),
 *     securityModeReject(3),
 *     serviceReject(4),
 *     trackingAreaUpdateReject(5),
 *     activateDedicatedEPSBearerContextReject(6),
 *     activateDefaultEPSBearerContextReject(7),
 *     bearerResourceAllocationReject(8),
 *     bearerResourceModificationReject(9),
 *     modifyEPSBearerContectReject(10),
 *     pDNConnectivityReject(11),
 *     pDNDisconnectReject(12)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const MMEFailedProcedureType = _enum_for_MMEFailedProcedureType;

/**
 * @summary MMEFailedProcedureType_attachReject
 * @constant
 * @type {number}
 */
export
const MMEFailedProcedureType_attachReject: MMEFailedProcedureType = MMEFailedProcedureType.attachReject; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary attachReject
 * @constant
 * @type {number}
 */
export
const attachReject: MMEFailedProcedureType = MMEFailedProcedureType.attachReject; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMEFailedProcedureType_authenticationReject
 * @constant
 * @type {number}
 */
export
const MMEFailedProcedureType_authenticationReject: MMEFailedProcedureType = MMEFailedProcedureType.authenticationReject; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary authenticationReject
 * @constant
 * @type {number}
 */
export
const authenticationReject: MMEFailedProcedureType = MMEFailedProcedureType.authenticationReject; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMEFailedProcedureType_securityModeReject
 * @constant
 * @type {number}
 */
export
const MMEFailedProcedureType_securityModeReject: MMEFailedProcedureType = MMEFailedProcedureType.securityModeReject; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary securityModeReject
 * @constant
 * @type {number}
 */
export
const securityModeReject: MMEFailedProcedureType = MMEFailedProcedureType.securityModeReject; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMEFailedProcedureType_serviceReject
 * @constant
 * @type {number}
 */
export
const MMEFailedProcedureType_serviceReject: MMEFailedProcedureType = MMEFailedProcedureType.serviceReject; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary serviceReject
 * @constant
 * @type {number}
 */
export
const serviceReject: MMEFailedProcedureType = MMEFailedProcedureType.serviceReject; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMEFailedProcedureType_trackingAreaUpdateReject
 * @constant
 * @type {number}
 */
export
const MMEFailedProcedureType_trackingAreaUpdateReject: MMEFailedProcedureType = MMEFailedProcedureType.trackingAreaUpdateReject; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary trackingAreaUpdateReject
 * @constant
 * @type {number}
 */
export
const trackingAreaUpdateReject: MMEFailedProcedureType = MMEFailedProcedureType.trackingAreaUpdateReject; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMEFailedProcedureType_activateDedicatedEPSBearerContextReject
 * @constant
 * @type {number}
 */
export
const MMEFailedProcedureType_activateDedicatedEPSBearerContextReject: MMEFailedProcedureType = MMEFailedProcedureType.activateDedicatedEPSBearerContextReject; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary activateDedicatedEPSBearerContextReject
 * @constant
 * @type {number}
 */
export
const activateDedicatedEPSBearerContextReject: MMEFailedProcedureType = MMEFailedProcedureType.activateDedicatedEPSBearerContextReject; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMEFailedProcedureType_activateDefaultEPSBearerContextReject
 * @constant
 * @type {number}
 */
export
const MMEFailedProcedureType_activateDefaultEPSBearerContextReject: MMEFailedProcedureType = MMEFailedProcedureType.activateDefaultEPSBearerContextReject; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary activateDefaultEPSBearerContextReject
 * @constant
 * @type {number}
 */
export
const activateDefaultEPSBearerContextReject: MMEFailedProcedureType = MMEFailedProcedureType.activateDefaultEPSBearerContextReject; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMEFailedProcedureType_bearerResourceAllocationReject
 * @constant
 * @type {number}
 */
export
const MMEFailedProcedureType_bearerResourceAllocationReject: MMEFailedProcedureType = MMEFailedProcedureType.bearerResourceAllocationReject; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary bearerResourceAllocationReject
 * @constant
 * @type {number}
 */
export
const bearerResourceAllocationReject: MMEFailedProcedureType = MMEFailedProcedureType.bearerResourceAllocationReject; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMEFailedProcedureType_bearerResourceModificationReject
 * @constant
 * @type {number}
 */
export
const MMEFailedProcedureType_bearerResourceModificationReject: MMEFailedProcedureType = MMEFailedProcedureType.bearerResourceModificationReject; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary bearerResourceModificationReject
 * @constant
 * @type {number}
 */
export
const bearerResourceModificationReject: MMEFailedProcedureType = MMEFailedProcedureType.bearerResourceModificationReject; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMEFailedProcedureType_modifyEPSBearerContectReject
 * @constant
 * @type {number}
 */
export
const MMEFailedProcedureType_modifyEPSBearerContectReject: MMEFailedProcedureType = MMEFailedProcedureType.modifyEPSBearerContectReject; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary modifyEPSBearerContectReject
 * @constant
 * @type {number}
 */
export
const modifyEPSBearerContectReject: MMEFailedProcedureType = MMEFailedProcedureType.modifyEPSBearerContectReject; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMEFailedProcedureType_pDNConnectivityReject
 * @constant
 * @type {number}
 */
export
const MMEFailedProcedureType_pDNConnectivityReject: MMEFailedProcedureType = MMEFailedProcedureType.pDNConnectivityReject; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pDNConnectivityReject
 * @constant
 * @type {number}
 */
export
const pDNConnectivityReject: MMEFailedProcedureType = MMEFailedProcedureType.pDNConnectivityReject; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMEFailedProcedureType_pDNDisconnectReject
 * @constant
 * @type {number}
 */
export
const MMEFailedProcedureType_pDNDisconnectReject: MMEFailedProcedureType = MMEFailedProcedureType.pDNDisconnectReject; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pDNDisconnectReject
 * @constant
 * @type {number}
 */
export
const pDNDisconnectReject: MMEFailedProcedureType = MMEFailedProcedureType.pDNDisconnectReject; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_MMEFailedProcedureType: $.ASN1Decoder<MMEFailedProcedureType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MMEFailedProcedureType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MMEFailedProcedureType (el: _Element): MMEFailedProcedureType {
    if (!_cached_decoder_for_MMEFailedProcedureType) { _cached_decoder_for_MMEFailedProcedureType = $._decodeEnumerated; }
    return _cached_decoder_for_MMEFailedProcedureType(el);
}

let _cached_encoder_for_MMEFailedProcedureType: $.ASN1Encoder<MMEFailedProcedureType> | null = null;

/**
 * @summary Encodes a(n) MMEFailedProcedureType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMEFailedProcedureType, encoded as an ASN.1 Element.
 */
export
function _encode_MMEFailedProcedureType (value: MMEFailedProcedureType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MMEFailedProcedureType) { _cached_encoder_for_MMEFailedProcedureType = $._encodeEnumerated; }
    return _cached_encoder_for_MMEFailedProcedureType(value, elGetter);
}


/* eslint-enable */
