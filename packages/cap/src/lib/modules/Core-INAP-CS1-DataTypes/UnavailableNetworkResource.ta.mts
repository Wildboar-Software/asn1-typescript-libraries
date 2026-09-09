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
 * @summary UnavailableNetworkResource
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UnavailableNetworkResource      ::=  ENUMERATED {
 *      unavailableResources(0),
 *      componentFailure(1),
 *      basicCallProcessingException(2),
 *      resourceStatusFailure(3),
 *      endUserFailure(4)
 *      }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_UnavailableNetworkResource {
    unavailableResources = 0,
    componentFailure = 1,
    basicCallProcessingException = 2,
    resourceStatusFailure = 3,
    endUserFailure = 4,
}

/**
 * @summary UnavailableNetworkResource
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UnavailableNetworkResource      ::=  ENUMERATED {
 *      unavailableResources(0),
 *      componentFailure(1),
 *      basicCallProcessingException(2),
 *      resourceStatusFailure(3),
 *      endUserFailure(4)
 *      }
 * ```
 * 
 * @enum {number}
 */
export
type UnavailableNetworkResource = _enum_for_UnavailableNetworkResource;

/**
 * @summary UnavailableNetworkResource
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UnavailableNetworkResource      ::=  ENUMERATED {
 *      unavailableResources(0),
 *      componentFailure(1),
 *      basicCallProcessingException(2),
 *      resourceStatusFailure(3),
 *      endUserFailure(4)
 *      }
 * ```
 * 
 * @enum {number}
 */
export
const UnavailableNetworkResource = _enum_for_UnavailableNetworkResource;

/**
 * @summary UnavailableNetworkResource_unavailableResources
 * @constant
 * @type {number}
 */
export
const UnavailableNetworkResource_unavailableResources: UnavailableNetworkResource = UnavailableNetworkResource.unavailableResources; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unavailableResources
 * @constant
 * @type {number}
 */
export
const unavailableResources: UnavailableNetworkResource = UnavailableNetworkResource.unavailableResources; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UnavailableNetworkResource_componentFailure
 * @constant
 * @type {number}
 */
export
const UnavailableNetworkResource_componentFailure: UnavailableNetworkResource = UnavailableNetworkResource.componentFailure; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary componentFailure
 * @constant
 * @type {number}
 */
export
const componentFailure: UnavailableNetworkResource = UnavailableNetworkResource.componentFailure; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UnavailableNetworkResource_basicCallProcessingException
 * @constant
 * @type {number}
 */
export
const UnavailableNetworkResource_basicCallProcessingException: UnavailableNetworkResource = UnavailableNetworkResource.basicCallProcessingException; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary basicCallProcessingException
 * @constant
 * @type {number}
 */
export
const basicCallProcessingException: UnavailableNetworkResource = UnavailableNetworkResource.basicCallProcessingException; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UnavailableNetworkResource_resourceStatusFailure
 * @constant
 * @type {number}
 */
export
const UnavailableNetworkResource_resourceStatusFailure: UnavailableNetworkResource = UnavailableNetworkResource.resourceStatusFailure; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary resourceStatusFailure
 * @constant
 * @type {number}
 */
export
const resourceStatusFailure: UnavailableNetworkResource = UnavailableNetworkResource.resourceStatusFailure; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UnavailableNetworkResource_endUserFailure
 * @constant
 * @type {number}
 */
export
const UnavailableNetworkResource_endUserFailure: UnavailableNetworkResource = UnavailableNetworkResource.endUserFailure; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary endUserFailure
 * @constant
 * @type {number}
 */
export
const endUserFailure: UnavailableNetworkResource = UnavailableNetworkResource.endUserFailure; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_UnavailableNetworkResource = $._decodeEnumerated;
export const _encode_UnavailableNetworkResource = $._encodeEnumerated;


/* eslint-enable */
