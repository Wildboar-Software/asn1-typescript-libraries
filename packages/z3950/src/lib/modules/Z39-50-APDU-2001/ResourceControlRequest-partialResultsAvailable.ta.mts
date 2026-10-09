/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ResourceControlRequest_partialResultsAvailable
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ResourceControlRequest-partialResultsAvailable ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type ResourceControlRequest_partialResultsAvailable = INTEGER;

/**
 * @summary ResourceControlRequest_partialResultsAvailable_subset
 * @constant
 * @type {number}
 */
export
const ResourceControlRequest_partialResultsAvailable_subset: ResourceControlRequest_partialResultsAvailable = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ResourceControlRequest_partialResultsAvailable_subset
 * @constant
 * @type {number}
 */
export
const subset: ResourceControlRequest_partialResultsAvailable = ResourceControlRequest_partialResultsAvailable_subset; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ResourceControlRequest_partialResultsAvailable_interim
 * @constant
 * @type {number}
 */
export
const ResourceControlRequest_partialResultsAvailable_interim: ResourceControlRequest_partialResultsAvailable = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ResourceControlRequest_partialResultsAvailable_interim
 * @constant
 * @type {number}
 */
export
const interim: ResourceControlRequest_partialResultsAvailable = ResourceControlRequest_partialResultsAvailable_interim; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ResourceControlRequest_partialResultsAvailable_none
 * @constant
 * @type {number}
 */
export
const ResourceControlRequest_partialResultsAvailable_none: ResourceControlRequest_partialResultsAvailable = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ResourceControlRequest_partialResultsAvailable_none
 * @constant
 * @type {number}
 */
export
const none: ResourceControlRequest_partialResultsAvailable = ResourceControlRequest_partialResultsAvailable_none; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_ResourceControlRequest_partialResultsAvailable: $.ASN1Decoder<ResourceControlRequest_partialResultsAvailable> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ResourceControlRequest_partialResultsAvailable
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ResourceControlRequest_partialResultsAvailable (el: _Element): ResourceControlRequest_partialResultsAvailable {
    if (!_cached_decoder_for_ResourceControlRequest_partialResultsAvailable) { _cached_decoder_for_ResourceControlRequest_partialResultsAvailable = $._decodeInteger; }
    return _cached_decoder_for_ResourceControlRequest_partialResultsAvailable(el);
}

let _cached_encoder_for_ResourceControlRequest_partialResultsAvailable: $.ASN1Encoder<ResourceControlRequest_partialResultsAvailable> | null = null;

/**
 * @summary Encodes a(n) ResourceControlRequest_partialResultsAvailable into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ResourceControlRequest_partialResultsAvailable, encoded as an ASN.1 Element.
 */
export
function _encode_ResourceControlRequest_partialResultsAvailable (value: ResourceControlRequest_partialResultsAvailable, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ResourceControlRequest_partialResultsAvailable) { _cached_encoder_for_ResourceControlRequest_partialResultsAvailable = $._encodeInteger; }
    return _cached_encoder_for_ResourceControlRequest_partialResultsAvailable(value, elGetter);
}


/* eslint-enable */
