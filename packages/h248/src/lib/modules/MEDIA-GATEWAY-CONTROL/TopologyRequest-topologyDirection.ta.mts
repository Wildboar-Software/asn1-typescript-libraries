/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TopologyRequest_topologyDirection
 * @description
 * 
 * Base topology association between two terminations (ITU-T Rec. H.248.1
 * (03/2013) clause 7.1.18.3).
 *
 * Bothway, isolate, or oneway. Superseded when `topologyDirectionExtension` is
 * also present (Annex A).
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
    /**
     * Each side receives the other's media. A termination that matches both T1
     * and T2 does not loop back to itself (clause 7.1.18.3). This is the
     * default association for a termination added to a context.
     */
    bothway = 0,
    /**
     * Neither side receives media from the other (clause 7.1.18.3).
     */
    isolate = 1,
    /**
     * Terminations matching T2 receive media from terminations matching T1, and
     * not the reverse. ALL may match one side without matching the other.
     * Implemented so that other terminations in the context do not observe the
     * change (clauses 7.1.18.3 and 7.1.18.6).
     */
    oneway = 2,
}

/**
 * @summary TopologyRequest_topologyDirection
 * @description
 * 
 * Base topology association between two terminations (ITU-T Rec. H.248.1
 * (03/2013) clause 7.1.18.3).
 *
 * Bothway, isolate, or oneway. Superseded when `topologyDirectionExtension` is
 * also present (Annex A).
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
 * Base topology association between two terminations (ITU-T Rec. H.248.1
 * (03/2013) clause 7.1.18.3).
 *
 * Bothway, isolate, or oneway. Superseded when `topologyDirectionExtension` is
 * also present (Annex A).
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
 * @description
 *
 * Each side receives the other's media. A termination that matches both T1 and
 * T2 does not loop back to itself (clause 7.1.18.3). This is the default
 * association for a termination added to a context.
 *
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
 * @description
 *
 * Neither side receives media from the other (clause 7.1.18.3).
 *
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
 * @description
 *
 * Terminations matching T2 receive media from terminations matching T1, and not
 * the reverse. ALL may match one side without matching the other. Implemented
 * so that other terminations in the context do not observe the change (clauses
 * 7.1.18.3 and 7.1.18.6).
 *
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
