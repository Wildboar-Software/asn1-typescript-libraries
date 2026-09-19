/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { LocalControlDescriptor, _decode_LocalControlDescriptor, _encode_LocalControlDescriptor } from "../MEDIA-GATEWAY-CONTROL/LocalControlDescriptor.ta.mjs";
// export { LocalControlDescriptor, _decode_LocalControlDescriptor, _encode_LocalControlDescriptor } from "../MEDIA-GATEWAY-CONTROL/LocalControlDescriptor.ta.mjs";
import { LocalRemoteDescriptor, _decode_LocalRemoteDescriptor, _encode_LocalRemoteDescriptor } from "../MEDIA-GATEWAY-CONTROL/LocalRemoteDescriptor.ta.mjs";
// export { LocalRemoteDescriptor, _decode_LocalRemoteDescriptor, _encode_LocalRemoteDescriptor } from "../MEDIA-GATEWAY-CONTROL/LocalRemoteDescriptor.ta.mjs";
import { StatisticsDescriptor, _decode_StatisticsDescriptor, _encode_StatisticsDescriptor } from "../MEDIA-GATEWAY-CONTROL/StatisticsDescriptor.ta.mjs";
// export { StatisticsDescriptor, _decode_StatisticsDescriptor, _encode_StatisticsDescriptor } from "../MEDIA-GATEWAY-CONTROL/StatisticsDescriptor.ta.mjs";


/**
 * @summary StreamParms
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StreamParms ::= SEQUENCE
 *     {
 *         localControlDescriptor        [0] LocalControlDescriptor OPTIONAL,
 *         localDescriptor                [1] LocalRemoteDescriptor OPTIONAL,
 *         remoteDescriptor            [2] LocalRemoteDescriptor OPTIONAL,
 *         ...,
 *         statisticsDescriptor        [3] StatisticsDescriptor OPTIONAL
 *     }
 * ```
 * 
 * @class
 */
export
class StreamParms {
    constructor (
        /**
         * @summary `localControlDescriptor`.
         * @public
         * @readonly
         */
        readonly localControlDescriptor: OPTIONAL<LocalControlDescriptor>,
        /**
         * @summary `localDescriptor`.
         * @public
         * @readonly
         */
        readonly localDescriptor: OPTIONAL<LocalRemoteDescriptor>,
        /**
         * @summary `remoteDescriptor`.
         * @public
         * @readonly
         */
        readonly remoteDescriptor: OPTIONAL<LocalRemoteDescriptor>,
        /**
         * @summary `statisticsDescriptor`.
         * @public
         * @readonly
         */
        readonly statisticsDescriptor: OPTIONAL<StatisticsDescriptor>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a StreamParms
     * @description
     * 
     * This takes an `object` and converts it to a `StreamParms`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `StreamParms`.
     * @returns {StreamParms}
     */
    public static _from_object (_o: { [_K in keyof (StreamParms)]: (StreamParms)[_K] }): StreamParms {
        return new StreamParms(_o.localControlDescriptor, _o.localDescriptor, _o.remoteDescriptor, _o.statisticsDescriptor, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of StreamParms
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_StreamParms: $.ComponentSpec[] = [
    new $.ComponentSpec("localControlDescriptor", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("localDescriptor", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("remoteDescriptor", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of StreamParms
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_StreamParms: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of StreamParms
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_StreamParms: $.ComponentSpec[] = [
    new $.ComponentSpec("statisticsDescriptor", true, $.hasTag(_TagClass.context, 3))
];

let _cached_decoder_for_StreamParms: $.ASN1Decoder<StreamParms> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) StreamParms
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_StreamParms (el: _Element): StreamParms {
    if (!_cached_decoder_for_StreamParms) { _cached_decoder_for_StreamParms = function (el: _Element): StreamParms {
    let localControlDescriptor: OPTIONAL<LocalControlDescriptor>;
    let localDescriptor: OPTIONAL<LocalRemoteDescriptor>;
    let remoteDescriptor: OPTIONAL<LocalRemoteDescriptor>;
    let statisticsDescriptor: OPTIONAL<StatisticsDescriptor>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "localControlDescriptor": (_el: _Element): void => { localControlDescriptor = $._decode_implicit<LocalControlDescriptor>(() => _decode_LocalControlDescriptor)(_el); },
        "localDescriptor": (_el: _Element): void => { localDescriptor = $._decode_implicit<LocalRemoteDescriptor>(() => _decode_LocalRemoteDescriptor)(_el); },
        "remoteDescriptor": (_el: _Element): void => { remoteDescriptor = $._decode_implicit<LocalRemoteDescriptor>(() => _decode_LocalRemoteDescriptor)(_el); },
        "statisticsDescriptor": (_el: _Element): void => { statisticsDescriptor = $._decode_implicit<StatisticsDescriptor>(() => _decode_StatisticsDescriptor)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_StreamParms,
        _extension_additions_list_spec_for_StreamParms,
        _root_component_type_list_2_spec_for_StreamParms,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new StreamParms(
        localControlDescriptor,
        localDescriptor,
        remoteDescriptor,
        statisticsDescriptor,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_StreamParms(el);
}

let _cached_encoder_for_StreamParms: $.ASN1Encoder<StreamParms> | null = null;

/**
 * @summary Encodes a(n) StreamParms into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The StreamParms, encoded as an ASN.1 Element.
 */
export
function _encode_StreamParms (value: StreamParms, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_StreamParms) { _cached_encoder_for_StreamParms = function (value: StreamParms, elGetter: $.ASN1Encoder<StreamParms>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.localControlDescriptor === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_LocalControlDescriptor, $.BER)(value.localControlDescriptor, $.BER)),
            /* IF_ABSENT  */ ((value.localDescriptor === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_LocalRemoteDescriptor, $.BER)(value.localDescriptor, $.BER)),
            /* IF_ABSENT  */ ((value.remoteDescriptor === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_LocalRemoteDescriptor, $.BER)(value.remoteDescriptor, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.statisticsDescriptor === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_StatisticsDescriptor, $.BER)(value.statisticsDescriptor, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_StreamParms(value, elGetter);
}


/* eslint-enable */
