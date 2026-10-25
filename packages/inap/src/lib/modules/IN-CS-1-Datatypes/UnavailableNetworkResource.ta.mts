/* eslint-disable */
import { ASN1Element as _Element, ASN1ConstructionError as _ConstructionError } from "@wildboar/asn1";
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
const UnavailableNetworkResource = _enum_for_UnavailableNetworkResource;

/**
 * @summary UnavailableNetworkResource_unavailableResources
 * @constant
 * @type {number}
 */
export
const UnavailableNetworkResource_unavailableResources = UnavailableNetworkResource.unavailableResources satisfies UnavailableNetworkResource; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unavailableResources
 * @constant
 * @type {number}
 */
export
const unavailableResources = UnavailableNetworkResource.unavailableResources satisfies UnavailableNetworkResource; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UnavailableNetworkResource_componentFailure
 * @constant
 * @type {number}
 */
export
const UnavailableNetworkResource_componentFailure = UnavailableNetworkResource.componentFailure satisfies UnavailableNetworkResource; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary componentFailure
 * @constant
 * @type {number}
 */
export
const componentFailure = UnavailableNetworkResource.componentFailure satisfies UnavailableNetworkResource; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UnavailableNetworkResource_basicCallProcessingException
 * @constant
 * @type {number}
 */
export
const UnavailableNetworkResource_basicCallProcessingException = UnavailableNetworkResource.basicCallProcessingException satisfies UnavailableNetworkResource; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary basicCallProcessingException
 * @constant
 * @type {number}
 */
export
const basicCallProcessingException = UnavailableNetworkResource.basicCallProcessingException satisfies UnavailableNetworkResource; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UnavailableNetworkResource_resourceStatusFailure
 * @constant
 * @type {number}
 */
export
const UnavailableNetworkResource_resourceStatusFailure = UnavailableNetworkResource.resourceStatusFailure satisfies UnavailableNetworkResource; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary resourceStatusFailure
 * @constant
 * @type {number}
 */
export
const resourceStatusFailure = UnavailableNetworkResource.resourceStatusFailure satisfies UnavailableNetworkResource; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UnavailableNetworkResource_endUserFailure
 * @constant
 * @type {number}
 */
export
const UnavailableNetworkResource_endUserFailure = UnavailableNetworkResource.endUserFailure satisfies UnavailableNetworkResource; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary endUserFailure
 * @constant
 * @type {number}
 */
export
const endUserFailure = UnavailableNetworkResource.endUserFailure satisfies UnavailableNetworkResource; /* SHORT_NAMED_ENUMERATED_VALUE */

export
function _decode_UnavailableNetworkResource(el: _Element): UnavailableNetworkResource {
    const enumerated = $._decodeEnumerated(el);
    switch (enumerated) {
        case UnavailableNetworkResource.unavailableResources: return UnavailableNetworkResource.unavailableResources;
        case UnavailableNetworkResource.componentFailure: return UnavailableNetworkResource.componentFailure;
        case UnavailableNetworkResource.basicCallProcessingException: return UnavailableNetworkResource.basicCallProcessingException;
        case UnavailableNetworkResource.resourceStatusFailure: return UnavailableNetworkResource.resourceStatusFailure;
        case UnavailableNetworkResource.endUserFailure: return UnavailableNetworkResource.endUserFailure;
        default:
            throw new _ConstructionError(
                "Invalid ENUMERATED value " + enumerated + " for UnavailableNetworkResource.",
                el,
            );
    }
}

export
const _encode_UnavailableNetworkResource: $.ASN1Encoder<UnavailableNetworkResource> = $._encodeEnumerated as $.ASN1Encoder<UnavailableNetworkResource>;

/* eslint-enable */
