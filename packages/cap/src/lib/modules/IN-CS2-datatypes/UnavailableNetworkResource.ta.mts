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
 * @summary UnavailableNetworkResource
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UnavailableNetworkResource  ::=  ENUMERATED {
 *   unavailableResources(0), componentFailure(1),
 *   basicCallProcessingException(2), resourceStatusFailure(3), endUserFailure(4)
 * }
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
 * UnavailableNetworkResource  ::=  ENUMERATED {
 *   unavailableResources(0), componentFailure(1),
 *   basicCallProcessingException(2), resourceStatusFailure(3), endUserFailure(4)
 * }
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
 * UnavailableNetworkResource  ::=  ENUMERATED {
 *   unavailableResources(0), componentFailure(1),
 *   basicCallProcessingException(2), resourceStatusFailure(3), endUserFailure(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const UnavailableNetworkResource: typeof _enum_for_UnavailableNetworkResource = _enum_for_UnavailableNetworkResource;

/**
 * @summary UnavailableNetworkResource_unavailableResources
 * @constant
 * @type {number}
 */
export
const UnavailableNetworkResource_unavailableResources: _enum_for_UnavailableNetworkResource.unavailableResources = UnavailableNetworkResource.unavailableResources; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unavailableResources
 * @constant
 * @type {number}
 */
export
const unavailableResources: _enum_for_UnavailableNetworkResource.unavailableResources = UnavailableNetworkResource.unavailableResources; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UnavailableNetworkResource_componentFailure
 * @constant
 * @type {number}
 */
export
const UnavailableNetworkResource_componentFailure: _enum_for_UnavailableNetworkResource.componentFailure = UnavailableNetworkResource.componentFailure; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary componentFailure
 * @constant
 * @type {number}
 */
export
const componentFailure: _enum_for_UnavailableNetworkResource.componentFailure = UnavailableNetworkResource.componentFailure; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UnavailableNetworkResource_basicCallProcessingException
 * @constant
 * @type {number}
 */
export
const UnavailableNetworkResource_basicCallProcessingException: _enum_for_UnavailableNetworkResource.basicCallProcessingException = UnavailableNetworkResource.basicCallProcessingException; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary basicCallProcessingException
 * @constant
 * @type {number}
 */
export
const basicCallProcessingException: _enum_for_UnavailableNetworkResource.basicCallProcessingException = UnavailableNetworkResource.basicCallProcessingException; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UnavailableNetworkResource_resourceStatusFailure
 * @constant
 * @type {number}
 */
export
const UnavailableNetworkResource_resourceStatusFailure: _enum_for_UnavailableNetworkResource.resourceStatusFailure = UnavailableNetworkResource.resourceStatusFailure; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary resourceStatusFailure
 * @constant
 * @type {number}
 */
export
const resourceStatusFailure: _enum_for_UnavailableNetworkResource.resourceStatusFailure = UnavailableNetworkResource.resourceStatusFailure; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UnavailableNetworkResource_endUserFailure
 * @constant
 * @type {number}
 */
export
const UnavailableNetworkResource_endUserFailure: _enum_for_UnavailableNetworkResource.endUserFailure = UnavailableNetworkResource.endUserFailure; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary endUserFailure
 * @constant
 * @type {number}
 */
export
const endUserFailure: _enum_for_UnavailableNetworkResource.endUserFailure = UnavailableNetworkResource.endUserFailure; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_UnavailableNetworkResource: $.ASN1Decoder<number> = $._decodeEnumerated;
export const _encode_UnavailableNetworkResource: $.ASN1Encoder<number> = $._encodeEnumerated;


/* eslint-enable */
