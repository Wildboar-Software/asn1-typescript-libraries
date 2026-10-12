/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_ResourceState {
    reserved = 1,
    committed = 2,
}

/**
 * @summary ResourceState
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ResourceState  ::=  ENUMERATED {
 *     reserved (1),
 *     committed (2),
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type ResourceState = _enum_for_ResourceState | ENUMERATED;

/**
 * @summary ResourceState_reserved
 * @constant
 * @type {number}
 */
export
const ResourceState_reserved: ResourceState = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reserved
 * @constant
 * @type {number}
 */
export
const reserved: ResourceState = ResourceState_reserved; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ResourceState_committed
 * @constant
 * @type {number}
 */
export
const ResourceState_committed: ResourceState = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary committed
 * @constant
 * @type {number}
 */
export
const committed: ResourceState = ResourceState_committed; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_ResourceState: $.ASN1Decoder<ResourceState> = $._decodeEnumerated;
export const _encode_ResourceState: $.ASN1Encoder<ResourceState> = $._encodeEnumerated;


/* eslint-enable */
