/* eslint-disable */
import {
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_TopologyRequest_topologyDirectionExtension {
    /**
     * T2 receives the media that T1 sends externally, and not the reverse. ALL
     * is not used for T1 (clause 7.1.18.3). When this extension is present it
     * replaces `topologyDirection`.
     */
    onewayexternal = 0,
    /**
     * T2 receives both the media T1 sends externally and the media T1 receives
     * from outside, and not the reverse. ALL is not used for T1 or T2 (clause
     * 7.1.18.3).
     */
    onewayboth = 1,
}

/**
 * @summary TopologyRequest_topologyDirectionExtension
 * @description
 * 
 * Additional topology directions (ITU-T Rec. H.248.1 (03/2013) clause
 * 7.1.18.3).
 *
 * When present on a `TopologyRequest`, this value is the association that
 * applies and the base `topologyDirection` is ignored (Annex A).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TopologyRequest-topologyDirectionExtension ::= ENUMERATED {
 *     onewayexternal(0),
 *     onewayboth(1),
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type TopologyRequest_topologyDirectionExtension = _enum_for_TopologyRequest_topologyDirectionExtension | ENUMERATED;

/**
 * @summary TopologyRequest_topologyDirectionExtension_onewayexternal
 * @description
 *
 * T2 receives the media that T1 sends externally, and not the reverse. ALL is
 * not used for T1 (clause 7.1.18.3). When this extension is present it replaces
 * `topologyDirection`.
 *
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
 * @description
 *
 * T2 receives both the media T1 sends externally and the media T1 receives from
 * outside, and not the reverse. ALL is not used for T1 or T2 (clause 7.1.18.3).
 *
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
