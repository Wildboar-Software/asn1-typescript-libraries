import {
    ENUMERATED,
    ASN1Element as _Element,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary UnavailableNetworkResource
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UnavailableNetworkResource ::= ENUMERATED {
 unavailableResources		(0),
 componentFailure			(1),
 basicCallProcessingException	(2),
 resourceStatusFailure		(3),
 endUserFailure			(4)
 }
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
export const UnavailableNetworkResource = _enum_for_UnavailableNetworkResource;
export const UnavailableNetworkResource_unavailableResources: UnavailableNetworkResource = UnavailableNetworkResource.unavailableResources;
export const unavailableResources: UnavailableNetworkResource = UnavailableNetworkResource.unavailableResources;
export const UnavailableNetworkResource_componentFailure: UnavailableNetworkResource = UnavailableNetworkResource.componentFailure;
export const componentFailure: UnavailableNetworkResource = UnavailableNetworkResource.componentFailure;
export const UnavailableNetworkResource_basicCallProcessingException: UnavailableNetworkResource = UnavailableNetworkResource.basicCallProcessingException;
export const basicCallProcessingException: UnavailableNetworkResource = UnavailableNetworkResource.basicCallProcessingException;
export const UnavailableNetworkResource_resourceStatusFailure: UnavailableNetworkResource = UnavailableNetworkResource.resourceStatusFailure;
export const resourceStatusFailure: UnavailableNetworkResource = UnavailableNetworkResource.resourceStatusFailure;
export const UnavailableNetworkResource_endUserFailure: UnavailableNetworkResource = UnavailableNetworkResource.endUserFailure;
export const endUserFailure: UnavailableNetworkResource = UnavailableNetworkResource.endUserFailure;
export const _decode_UnavailableNetworkResource = $._decodeEnumerated;
export const _encode_UnavailableNetworkResource = $._encodeEnumerated;
