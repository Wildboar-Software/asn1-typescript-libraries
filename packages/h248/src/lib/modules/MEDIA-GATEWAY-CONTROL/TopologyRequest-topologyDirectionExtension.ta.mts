/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_TopologyRequest_topologyDirectionExtension {
    onewayexternal = 0,
    onewayboth = 1,
}

/**
 * @summary TopologyRequest_topologyDirectionExtension
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TopologyRequest-topologyDirectionExtension ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
type TopologyRequest_topologyDirectionExtension = _enum_for_TopologyRequest_topologyDirectionExtension | ENUMERATED;

/**
 * @summary TopologyRequest_topologyDirectionExtension_onewayexternal
 * @constant
 * @type {number}
 */
export
const TopologyRequest_topologyDirectionExtension_onewayexternal: TopologyRequest_topologyDirectionExtension = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary onewayexternal
 * @constant
 * @type {number}
 */
export
const onewayexternal: TopologyRequest_topologyDirectionExtension = TopologyRequest_topologyDirectionExtension_onewayexternal; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TopologyRequest_topologyDirectionExtension_onewayboth
 * @constant
 * @type {number}
 */
export
const TopologyRequest_topologyDirectionExtension_onewayboth: TopologyRequest_topologyDirectionExtension = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary onewayboth
 * @constant
 * @type {number}
 */
export
const onewayboth: TopologyRequest_topologyDirectionExtension = TopologyRequest_topologyDirectionExtension_onewayboth; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_TopologyRequest_topologyDirectionExtension: $.ASN1Decoder<TopologyRequest_topologyDirectionExtension> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TopologyRequest_topologyDirectionExtension
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TopologyRequest_topologyDirectionExtension (el: _Element): TopologyRequest_topologyDirectionExtension {
    if (!_cached_decoder_for_TopologyRequest_topologyDirectionExtension) { _cached_decoder_for_TopologyRequest_topologyDirectionExtension = $._decodeEnumerated; }
    return _cached_decoder_for_TopologyRequest_topologyDirectionExtension(el);
}

let _cached_encoder_for_TopologyRequest_topologyDirectionExtension: $.ASN1Encoder<TopologyRequest_topologyDirectionExtension> | null = null;

/**
 * @summary Encodes a(n) TopologyRequest_topologyDirectionExtension into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TopologyRequest_topologyDirectionExtension, encoded as an ASN.1 Element.
 */
export
function _encode_TopologyRequest_topologyDirectionExtension (value: TopologyRequest_topologyDirectionExtension, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TopologyRequest_topologyDirectionExtension) { _cached_encoder_for_TopologyRequest_topologyDirectionExtension = $._encodeEnumerated; }
    return _cached_encoder_for_TopologyRequest_topologyDirectionExtension(value, elGetter);
}


/* eslint-enable */
