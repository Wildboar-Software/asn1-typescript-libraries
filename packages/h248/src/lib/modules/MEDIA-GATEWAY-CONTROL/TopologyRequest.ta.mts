/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TerminationID, _decode_TerminationID, _encode_TerminationID } from "../MEDIA-GATEWAY-CONTROL/TerminationID.ta.mjs";
import { TopologyRequest_topologyDirection, _decode_TopologyRequest_topologyDirection, _encode_TopologyRequest_topologyDirection, _enum_for_TopologyRequest_topologyDirection } from "../MEDIA-GATEWAY-CONTROL/TopologyRequest-topologyDirection.ta.mjs";
import { StreamID, _decode_StreamID, _encode_StreamID } from "../MEDIA-GATEWAY-CONTROL/StreamID.ta.mjs";
import { TopologyRequest_topologyDirectionExtension, _decode_TopologyRequest_topologyDirectionExtension, _encode_TopologyRequest_topologyDirectionExtension, _enum_for_TopologyRequest_topologyDirectionExtension } from "../MEDIA-GATEWAY-CONTROL/TopologyRequest-topologyDirectionExtension.ta.mjs";


/**
 * @summary TopologyRequest
 * @description
 * 
 * One topology triple: media flow from `terminationFrom` toward `terminationTo`
 * (ITU-T Rec. H.248.1 (03/2013) clause 7.1.18).
 *
 * The descriptor is optional to implement. It appears before the commands in an
 * action, and an action may contain only topology when the context already
 * exists. A termination not mentioned keeps its current associations. A
 * termination newly added to a context defaults to bothway with the others,
 * except where this descriptor says otherwise.
 *
 * Do not mix a pair of terminations with and without `streamID` in the same
 * descriptor; the MG returns error 421 ("Unknown action or illegal combination
 * of actions"). If `topologyDirectionExtension` is present it takes precedence
 * over `topologyDirection` (Annex A).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TopologyRequest ::= SEQUENCE
 *     {
 *         terminationFrom                [0] TerminationID,
 *         terminationTo                [1] TerminationID,
 *         topologyDirection            [2] ENUMERATED
 *         {
 *             bothway(0),
 *             isolate(1),
 *             oneway(2)
 *         },
 *         ...,
 *         streamID                    [3]StreamID OPTIONAL,
 *         topologyDirectionExtension    [4] ENUMERATED
 *         {
 *             onewayexternal(0),
 *             onewayboth(1),
 *             ...
 *         } OPTIONAL
 *     }
 * ```
 * 
 * @class
 */
export
class TopologyRequest {
    constructor (
        /**
         * @summary `terminationFrom`.
         * @description
         *
         * Source side of the association. ALL and CHOOSE are allowed with the
         * restrictions in clause 7.1.18.4. ALL means every termination in the
         * context except the other termination named in this triple.
         *
         * @public
         * @readonly
         */
        readonly terminationFrom: TerminationID,
        /**
         * @summary `terminationTo`.
         * @description
         *
         * Sink side of the association. Same wildcard rules as
         * `terminationFrom`. A oneway association must not use ALL for both
         * sides.
         *
         * @public
         * @readonly
         */
        readonly terminationTo: TerminationID,
        /**
         * @summary `topologyDirection`.
         * @description
         *
         * Base association: bothway, isolate, or oneway. Ignored when
         * `topologyDirectionExtension` is present (Annex A).
         *
         * @public
         * @readonly
         */
        readonly topologyDirection: TopologyRequest_topologyDirection,
        /**
         * @summary `streamID`.
         * @description
         *
         * When present, the association applies only to this stream. Other
         * streams between the same terminations are unchanged (clause
         * 7.1.18.5). Omitted, the association applies to every stream.
         *
         * @public
         * @readonly
         */
        readonly streamID: OPTIONAL<StreamID>,
        /**
         * @summary `topologyDirectionExtension`.
         * @description
         *
         * OnewayExternal or OnewayBoth. When present, this direction is the one
         * that applies and `topologyDirection` is not (Annex A). OnewayExternal
         * feeds T2 the media T1 sends externally, and forbids ALL on T1.
         * OnewayBoth feeds T2 both the media T1 sends and the media T1 receives
         * externally, and forbids ALL on either side (clause 7.1.18.3).
         *
         * @public
         * @readonly
         */
        readonly topologyDirectionExtension: OPTIONAL<TopologyRequest_topologyDirectionExtension>,
        /**
         * @summary Extensions that are not recognized.
         * @description
         *
         * Extension additions this version does not define. Kept so a later
         * peer can still carry them (ITU-T Rec. H.248.1 (03/2013) clause 11.7).
         *
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a TopologyRequest
     * @description
     * 
     * This takes an `object` and converts it to a `TopologyRequest`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TopologyRequest`.
     * @returns {TopologyRequest}
     */
    public static _from_object (_o: { [_K in keyof (TopologyRequest)]: (TopologyRequest)[_K] }): TopologyRequest {
        return new TopologyRequest(_o.terminationFrom, _o.terminationTo, _o.topologyDirection, _o.streamID, _o.topologyDirectionExtension, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `topologyDirection`
         * @public
         * @static
         */

    public static _enum_for_topologyDirection = _enum_for_TopologyRequest_topologyDirection;        /**
         * @summary The enum used as the type of the component `topologyDirectionExtension`
         * @public
         * @static
         */

    public static _enum_for_topologyDirectionExtension = _enum_for_TopologyRequest_topologyDirectionExtension;
}

/**
 * @summary The Leading Root Component Types of TopologyRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TopologyRequest: $.ComponentSpec[] = [
    new $.ComponentSpec("terminationFrom", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("terminationTo", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("topologyDirection", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of TopologyRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TopologyRequest: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TopologyRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TopologyRequest: $.ComponentSpec[] = [
    new $.ComponentSpec("streamID", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("topologyDirectionExtension", true, $.hasTag(_TagClass.context, 4))
];

let _cached_decoder_for_TopologyRequest: $.ASN1Decoder<TopologyRequest> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TopologyRequest
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TopologyRequest (el: _Element): TopologyRequest {
    if (!_cached_decoder_for_TopologyRequest) { _cached_decoder_for_TopologyRequest = function (el: _Element): TopologyRequest {
    let terminationFrom!: TerminationID;
    let terminationTo!: TerminationID;
    let topologyDirection!: TopologyRequest_topologyDirection;
    let streamID: OPTIONAL<StreamID>;
    let topologyDirectionExtension: OPTIONAL<TopologyRequest_topologyDirectionExtension>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "terminationFrom": (_el: _Element): void => { terminationFrom = $._decode_implicit<TerminationID>(() => _decode_TerminationID)(_el); },
        "terminationTo": (_el: _Element): void => { terminationTo = $._decode_implicit<TerminationID>(() => _decode_TerminationID)(_el); },
        "topologyDirection": (_el: _Element): void => { topologyDirection = $._decode_implicit<TopologyRequest_topologyDirection>(() => _decode_TopologyRequest_topologyDirection)(_el); },
        "streamID": (_el: _Element): void => { streamID = $._decode_implicit<StreamID>(() => _decode_StreamID)(_el); },
        "topologyDirectionExtension": (_el: _Element): void => { topologyDirectionExtension = $._decode_implicit<TopologyRequest_topologyDirectionExtension>(() => _decode_TopologyRequest_topologyDirectionExtension)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TopologyRequest,
        _extension_additions_list_spec_for_TopologyRequest,
        _root_component_type_list_2_spec_for_TopologyRequest,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new TopologyRequest(
        terminationFrom,
        terminationTo,
        topologyDirection,
        streamID,
        topologyDirectionExtension,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_TopologyRequest(el);
}

let _cached_encoder_for_TopologyRequest: $.ASN1Encoder<TopologyRequest> | null = null;

/**
 * @summary Encodes a(n) TopologyRequest into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TopologyRequest, encoded as an ASN.1 Element.
 */
export
function _encode_TopologyRequest (value: TopologyRequest, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TopologyRequest) { _cached_encoder_for_TopologyRequest = function (value: TopologyRequest, elGetter: $.ASN1Encoder<TopologyRequest>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_TerminationID, $.BER)(value.terminationFrom, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_TerminationID, $.BER)(value.terminationTo, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_TopologyRequest_topologyDirection, $.BER)(value.topologyDirection, $.BER)
        ],
        [
            /* IF_ABSENT  */ ((value.streamID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_StreamID, $.BER)(value.streamID, $.BER)),
            /* IF_ABSENT  */ ((value.topologyDirectionExtension === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_TopologyRequest_topologyDirectionExtension, $.BER)(value.topologyDirectionExtension, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TopologyRequest(value, elGetter);
}


/* eslint-enable */
