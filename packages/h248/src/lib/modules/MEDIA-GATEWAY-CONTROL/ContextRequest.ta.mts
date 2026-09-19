/* eslint-disable */
import {
    BOOLEAN,
    INTEGER,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TopologyRequest, _decode_TopologyRequest, _encode_TopologyRequest } from "../MEDIA-GATEWAY-CONTROL/TopologyRequest.ta.mjs";
// export { TopologyRequest, _decode_TopologyRequest, _encode_TopologyRequest } from "../MEDIA-GATEWAY-CONTROL/TopologyRequest.ta.mjs";
import { PropertyParm, _decode_PropertyParm, _encode_PropertyParm } from "../MEDIA-GATEWAY-CONTROL/PropertyParm.ta.mjs";
// export { PropertyParm, _decode_PropertyParm, _encode_PropertyParm } from "../MEDIA-GATEWAY-CONTROL/PropertyParm.ta.mjs";
import { ContextIDinList, _decode_ContextIDinList, _encode_ContextIDinList } from "../MEDIA-GATEWAY-CONTROL/ContextIDinList.ta.mjs";
// export { ContextIDinList, _decode_ContextIDinList, _encode_ContextIDinList } from "../MEDIA-GATEWAY-CONTROL/ContextIDinList.ta.mjs";


/**
 * @summary ContextRequest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ContextRequest ::= SEQUENCE
 *     {
 *         priority                [0] INTEGER(0..15) OPTIONAL,
 *         emergency                [1] BOOLEAN OPTIONAL,
 *         topologyReq                [2] SEQUENCE OF TopologyRequest OPTIONAL,
 *         ...,
 *         iepscallind                [3] BOOLEAN OPTIONAL,
 *         contextProp                [4] SEQUENCE OF PropertyParm OPTIONAL,
 * 
 *         -- Wireshark Specific
 *         -- contextList                [5] SEQUENCE OF ContextID OPTIONAL
 *         contextList                [5] SEQUENCE OF ContextIDinList OPTIONAL
 *         -- Currently the way that WS tracing code's persistent data is
 *         -- organized disallows to relate a request to multiple contexts
 *     }
 * ```
 * 
 * @class
 */
export
class ContextRequest {
    constructor (
        /**
         * @summary `priority`.
         * @public
         * @readonly
         */
        readonly priority: OPTIONAL<INTEGER>,
        /**
         * @summary `emergency`.
         * @public
         * @readonly
         */
        readonly emergency: OPTIONAL<BOOLEAN>,
        /**
         * @summary `topologyReq`.
         * @public
         * @readonly
         */
        readonly topologyReq: OPTIONAL<TopologyRequest[]>,
        /**
         * @summary `iepscallind`.
         * @public
         * @readonly
         */
        readonly iepscallind: OPTIONAL<BOOLEAN>,
        /**
         * @summary `contextProp`.
         * @public
         * @readonly
         */
        readonly contextProp: OPTIONAL<PropertyParm[]>,
        /**
         * @summary `contextList`.
         * @public
         * @readonly
         */
        readonly contextList: OPTIONAL<ContextIDinList[]>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ContextRequest
     * @description
     * 
     * This takes an `object` and converts it to a `ContextRequest`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ContextRequest`.
     * @returns {ContextRequest}
     */
    public static _from_object (_o: { [_K in keyof (ContextRequest)]: (ContextRequest)[_K] }): ContextRequest {
        return new ContextRequest(_o.priority, _o.emergency, _o.topologyReq, _o.iepscallind, _o.contextProp, _o.contextList, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of ContextRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ContextRequest: $.ComponentSpec[] = [
    new $.ComponentSpec("priority", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("emergency", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("topologyReq", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of ContextRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ContextRequest: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ContextRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ContextRequest: $.ComponentSpec[] = [
    new $.ComponentSpec("iepscallind", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("contextProp", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("contextList", true, $.hasTag(_TagClass.context, 5))
];

let _cached_decoder_for_ContextRequest: $.ASN1Decoder<ContextRequest> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ContextRequest
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ContextRequest (el: _Element): ContextRequest {
    if (!_cached_decoder_for_ContextRequest) { _cached_decoder_for_ContextRequest = function (el: _Element): ContextRequest {
    let priority: OPTIONAL<INTEGER>;
    let emergency: OPTIONAL<BOOLEAN>;
    let topologyReq: OPTIONAL<TopologyRequest[]>;
    let iepscallind: OPTIONAL<BOOLEAN>;
    let contextProp: OPTIONAL<PropertyParm[]>;
    let contextList: OPTIONAL<ContextIDinList[]>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "priority": (_el: _Element): void => { priority = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "emergency": (_el: _Element): void => { emergency = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "topologyReq": (_el: _Element): void => { topologyReq = $._decode_implicit<TopologyRequest[]>(() => $._decodeSequenceOf<TopologyRequest>(() => _decode_TopologyRequest))(_el); },
        "iepscallind": (_el: _Element): void => { iepscallind = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "contextProp": (_el: _Element): void => { contextProp = $._decode_implicit<PropertyParm[]>(() => $._decodeSequenceOf<PropertyParm>(() => _decode_PropertyParm))(_el); },
        "contextList": (_el: _Element): void => { contextList = $._decode_implicit<ContextIDinList[]>(() => $._decodeSequenceOf<ContextIDinList>(() => _decode_ContextIDinList))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ContextRequest,
        _extension_additions_list_spec_for_ContextRequest,
        _root_component_type_list_2_spec_for_ContextRequest,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ContextRequest(
        priority,
        emergency,
        topologyReq,
        iepscallind,
        contextProp,
        contextList,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ContextRequest(el);
}

let _cached_encoder_for_ContextRequest: $.ASN1Encoder<ContextRequest> | null = null;

/**
 * @summary Encodes a(n) ContextRequest into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ContextRequest, encoded as an ASN.1 Element.
 */
export
function _encode_ContextRequest (value: ContextRequest, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ContextRequest) { _cached_encoder_for_ContextRequest = function (value: ContextRequest, elGetter: $.ASN1Encoder<ContextRequest>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.priority === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.priority, $.BER)),
            /* IF_ABSENT  */ ((value.emergency === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeBoolean, $.BER)(value.emergency, $.BER)),
            /* IF_ABSENT  */ ((value.topologyReq === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<TopologyRequest>(() => _encode_TopologyRequest, $.BER), $.BER)(value.topologyReq, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.iepscallind === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeBoolean, $.BER)(value.iepscallind, $.BER)),
            /* IF_ABSENT  */ ((value.contextProp === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => $._encodeSequenceOf<PropertyParm>(() => _encode_PropertyParm, $.BER), $.BER)(value.contextProp, $.BER)),
            /* IF_ABSENT  */ ((value.contextList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => $._encodeSequenceOf<ContextIDinList>(() => _encode_ContextIDinList, $.BER), $.BER)(value.contextList, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ContextRequest(value, elGetter);
}


/* eslint-enable */
