/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TopologyRequest_topologyDirection
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TopologyRequest-topologyDirection ::= ENUMERATED {
 *     bothway(0),
 *     isolate(1),
 *     oneway(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_TopologyRequest_topologyDirection {
    bothway = 0,
    isolate = 1,
    oneway = 2,
}

/**
 * @summary TopologyRequest_topologyDirection
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TopologyRequest-topologyDirection ::= ENUMERATED {
 *     bothway(0),
 *     isolate(1),
 *     oneway(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type TopologyRequest_topologyDirection = _enum_for_TopologyRequest_topologyDirection;

/**
 * @summary TopologyRequest_topologyDirection
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TopologyRequest-topologyDirection ::= ENUMERATED {
 *     bothway(0),
 *     isolate(1),
 *     oneway(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const TopologyRequest_topologyDirection = _enum_for_TopologyRequest_topologyDirection;

/**
 * @summary TopologyRequest_topologyDirection_bothway
 * @constant
 * @type {number}
 */
export
const TopologyRequest_topologyDirection_bothway: TopologyRequest_topologyDirection = TopologyRequest_topologyDirection.bothway; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary bothway
 * @constant
 * @type {number}
 */
export
const bothway: TopologyRequest_topologyDirection = TopologyRequest_topologyDirection.bothway; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TopologyRequest_topologyDirection_isolate
 * @constant
 * @type {number}
 */
export
const TopologyRequest_topologyDirection_isolate: TopologyRequest_topologyDirection = TopologyRequest_topologyDirection.isolate; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary isolate
 * @constant
 * @type {number}
 */
export
const isolate: TopologyRequest_topologyDirection = TopologyRequest_topologyDirection.isolate; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TopologyRequest_topologyDirection_oneway
 * @constant
 * @type {number}
 */
export
const TopologyRequest_topologyDirection_oneway: TopologyRequest_topologyDirection = TopologyRequest_topologyDirection.oneway; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary oneway
 * @constant
 * @type {number}
 */
export
const oneway: TopologyRequest_topologyDirection = TopologyRequest_topologyDirection.oneway; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_TopologyRequest_topologyDirection = $._decodeEnumerated;
export const _encode_TopologyRequest_topologyDirection = $._encodeEnumerated;


/* eslint-enable */
