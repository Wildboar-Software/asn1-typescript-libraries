/* eslint-disable */
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
 *   basicCallProcessingException(2), resourceStatusFailure(3), endUserFailure(4),
 *   screening(5)}
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
    screening = 5,
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
 *   basicCallProcessingException(2), resourceStatusFailure(3), endUserFailure(4),
 *   screening(5)}
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
 *   basicCallProcessingException(2), resourceStatusFailure(3), endUserFailure(4),
 *   screening(5)}
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

/**
 * @summary UnavailableNetworkResource_screening
 * @constant
 * @type {number}
 */
export
const UnavailableNetworkResource_screening: UnavailableNetworkResource = UnavailableNetworkResource.screening; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary screening
 * @constant
 * @type {number}
 */
export
const screening: UnavailableNetworkResource = UnavailableNetworkResource.screening; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_UnavailableNetworkResource: $.ASN1Decoder<UnavailableNetworkResource> = $._decodeEnumerated;

export
const _encode_UnavailableNetworkResource: $.ASN1Encoder<UnavailableNetworkResource> = $._encodeEnumerated;

/* eslint-enable */
