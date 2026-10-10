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
export const _decode_TopologyRequest_topologyDirectionExtension = $._decodeEnumerated;
export const _encode_TopologyRequest_topologyDirectionExtension = $._encodeEnumerated;


/* eslint-enable */
