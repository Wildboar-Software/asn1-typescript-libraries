import {
    type ASN1Element as _Element,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary UnavailableNetworkResource
 * @description
 *
 * Network resource that failed. (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UnavailableNetworkResource ::= ENUMERATED {
 *  unavailableResources		(0),
 *  componentFailure			(1),
 *  basicCallProcessingException	(2),
 *  resourceStatusFailure		(3),
 *  endUserFailure			(4)
 *  }
 * ```
 *
 */
export enum _enum_for_UnavailableNetworkResource {
    unavailableResources = 0,
    componentFailure = 1,
    basicCallProcessingException = 2,
    resourceStatusFailure = 3,
    endUserFailure = 4,
}
export type UnavailableNetworkResource = _enum_for_UnavailableNetworkResource;
export const UnavailableNetworkResource: typeof _enum_for_UnavailableNetworkResource = _enum_for_UnavailableNetworkResource;
/**
 * @summary UnavailableNetworkResource_unavailableResources
 * @description
 *
 * `unavailableResources (0)`. (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const UnavailableNetworkResource_unavailableResources: _enum_for_UnavailableNetworkResource.unavailableResources = UnavailableNetworkResource.unavailableResources;
/**
 * @summary unavailableResources
 * @description
 *
 * `unavailableResources (0)`. (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const unavailableResources: _enum_for_UnavailableNetworkResource.unavailableResources = UnavailableNetworkResource.unavailableResources;
/**
 * @summary UnavailableNetworkResource_componentFailure
 * @description
 *
 * `componentFailure (1)`. (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const UnavailableNetworkResource_componentFailure: _enum_for_UnavailableNetworkResource.componentFailure = UnavailableNetworkResource.componentFailure;
/**
 * @summary componentFailure
 * @description
 *
 * `componentFailure (1)`. (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const componentFailure: _enum_for_UnavailableNetworkResource.componentFailure = UnavailableNetworkResource.componentFailure;
/**
 * @summary UnavailableNetworkResource_basicCallProcessingException
 * @description
 *
 * `basicCallProcessingException (2)`. (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const UnavailableNetworkResource_basicCallProcessingException: _enum_for_UnavailableNetworkResource.basicCallProcessingException = UnavailableNetworkResource.basicCallProcessingException;
/**
 * @summary basicCallProcessingException
 * @description
 *
 * `basicCallProcessingException (2)`. (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const basicCallProcessingException: _enum_for_UnavailableNetworkResource.basicCallProcessingException = UnavailableNetworkResource.basicCallProcessingException;
/**
 * @summary UnavailableNetworkResource_resourceStatusFailure
 * @description
 *
 * `resourceStatusFailure (3)`. (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const UnavailableNetworkResource_resourceStatusFailure: _enum_for_UnavailableNetworkResource.resourceStatusFailure = UnavailableNetworkResource.resourceStatusFailure;
/**
 * @summary resourceStatusFailure
 * @description
 *
 * `resourceStatusFailure (3)`. (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const resourceStatusFailure: _enum_for_UnavailableNetworkResource.resourceStatusFailure = UnavailableNetworkResource.resourceStatusFailure;
/**
 * @summary UnavailableNetworkResource_endUserFailure
 * @description
 *
 * `endUserFailure (4)`. (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const UnavailableNetworkResource_endUserFailure: _enum_for_UnavailableNetworkResource.endUserFailure = UnavailableNetworkResource.endUserFailure;
/**
 * @summary endUserFailure
 * @description
 *
 * `endUserFailure (4)`. (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const endUserFailure: _enum_for_UnavailableNetworkResource.endUserFailure = UnavailableNetworkResource.endUserFailure;
export const _decode_UnavailableNetworkResource: $.ASN1Decoder<number> = $._decodeEnumerated;
export const _encode_UnavailableNetworkResource: $.ASN1Encoder<number> = $._encodeEnumerated;
