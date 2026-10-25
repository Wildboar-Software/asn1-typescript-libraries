/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
const _enum_for_TopologyRequest_topologyDirectionExtension = {
    /**
     * T2 receives the media that T1 sends externally, and not the reverse. ALL
     * is not used for T1 (clause 7.1.18.3). When this extension is present it
     * replaces `topologyDirection`.
     */
    onewayexternal: 0,
    /**
     * T2 receives both the media T1 sends externally and the media T1 receives
     * from outside, and not the reverse. ALL is not used for T1 or T2 (clause
     * 7.1.18.3).
     */
    onewayboth: 1,
} as const;

export type _enum_for_TopologyRequest_topologyDirectionExtension = (typeof _enum_for_TopologyRequest_topologyDirectionExtension)[keyof typeof _enum_for_TopologyRequest_topologyDirectionExtension];

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
const TopologyRequest_topologyDirectionExtension_onewayexternal: 0 = _enum_for_TopologyRequest_topologyDirectionExtension.onewayexternal; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary onewayexternal
 * @constant
 * @type {number}
 */
export
const onewayexternal: 0 = TopologyRequest_topologyDirectionExtension_onewayexternal; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const TopologyRequest_topologyDirectionExtension_onewayboth: 1 = _enum_for_TopologyRequest_topologyDirectionExtension.onewayboth; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary onewayboth
 * @constant
 * @type {number}
 */
export
const onewayboth: 1 = TopologyRequest_topologyDirectionExtension_onewayboth; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_TopologyRequest_topologyDirectionExtension: $.ASN1Decoder<TopologyRequest_topologyDirectionExtension> = $._decodeEnumerated as $.ASN1Decoder<TopologyRequest_topologyDirectionExtension>;
export const _encode_TopologyRequest_topologyDirectionExtension: $.ASN1Encoder<TopologyRequest_topologyDirectionExtension> = $._encodeEnumerated as $.ASN1Encoder<TopologyRequest_topologyDirectionExtension>;


/* eslint-enable */
