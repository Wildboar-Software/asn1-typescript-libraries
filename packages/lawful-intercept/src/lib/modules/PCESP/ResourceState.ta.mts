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

let _cached_decoder_for_ResourceState: $.ASN1Decoder<ResourceState> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ResourceState
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ResourceState (el: _Element): ResourceState {
    if (!_cached_decoder_for_ResourceState) { _cached_decoder_for_ResourceState = $._decodeEnumerated; }
    return _cached_decoder_for_ResourceState(el);
}

let _cached_encoder_for_ResourceState: $.ASN1Encoder<ResourceState> | null = null;

/**
 * @summary Encodes a(n) ResourceState into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ResourceState, encoded as an ASN.1 Element.
 */
export
function _encode_ResourceState (value: ResourceState, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ResourceState) { _cached_encoder_for_ResourceState = $._encodeEnumerated; }
    return _cached_encoder_for_ResourceState(value, elGetter);
}


/* eslint-enable */
