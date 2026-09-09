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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";



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

let _cached_decoder_for_UnavailableNetworkResource: $.ASN1Decoder<UnavailableNetworkResource> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UnavailableNetworkResource
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UnavailableNetworkResource (el: _Element): UnavailableNetworkResource {
    if (!_cached_decoder_for_UnavailableNetworkResource) { _cached_decoder_for_UnavailableNetworkResource = $._decodeEnumerated; }
    return _cached_decoder_for_UnavailableNetworkResource(el);
}

let _cached_encoder_for_UnavailableNetworkResource: $.ASN1Encoder<UnavailableNetworkResource> | null = null;

/**
 * @summary Encodes a(n) UnavailableNetworkResource into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UnavailableNetworkResource, encoded as an ASN.1 Element.
 */
export
function _encode_UnavailableNetworkResource (value: UnavailableNetworkResource, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UnavailableNetworkResource) { _cached_encoder_for_UnavailableNetworkResource = $._encodeEnumerated; }
    return _cached_encoder_for_UnavailableNetworkResource(value, elGetter);
}


/* eslint-enable */
