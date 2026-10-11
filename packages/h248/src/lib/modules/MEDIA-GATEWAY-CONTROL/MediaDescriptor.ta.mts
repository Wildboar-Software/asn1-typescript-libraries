/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TerminationStateDescriptor, _decode_TerminationStateDescriptor, _encode_TerminationStateDescriptor } from "../MEDIA-GATEWAY-CONTROL/TerminationStateDescriptor.ta.mjs";
import { MediaDescriptor_streams, _decode_MediaDescriptor_streams, _encode_MediaDescriptor_streams } from "../MEDIA-GATEWAY-CONTROL/MediaDescriptor-streams.ta.mjs";


/**
 * @summary MediaDescriptor
 * @description
 * 
 * All media streams of a termination, plus the termination properties that are
 * not stream-specific (ITU-T Rec. H.248.1 (03/2013) clause 7.1.4).
 *
 * `streams` may be omitted and LocalControl, Local, Remote, or Statistics
 * placed so that they apply to stream 1. That convenience form is the
 * `oneStream` alternative. Streams of one termination are synchronized with
 * each other. Setting a new copy of a subsidiary descriptor replaces the
 * previous copy entirely (clauses 7.1.7 and 7.1.8).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MediaDescriptor ::= SEQUENCE
 *     {
 *         termStateDescr                [0] TerminationStateDescriptor OPTIONAL,
 *         streams                        [1] CHOICE
 *         {
 *             oneStream        [0] StreamParms,
 *             multiStream        [1] SEQUENCE OF StreamDescriptor
 *         } OPTIONAL,
 *         ...
 *     }
 * ```
 * 
 * @class
 */
export
class MediaDescriptor {
    constructor (
        /**
         * @summary `termStateDescr`.
         * @description
         *
         * Properties that apply to the whole termination: ServiceStates,
         * EventBufferControl, and packaged properties that are not stream
         * specific (clause 7.1.5).
         *
         * @public
         * @readonly
         */
        readonly termStateDescr: OPTIONAL<TerminationStateDescriptor>,
        /**
         * @summary `streams`.
         * @description
         *
         * One stream or many. `oneStream` is the convenience form and means
         * StreamID 1 (clause 7.1.4). `multiStream` identifies each stream.
         *
         * @public
         * @readonly
         */
        readonly streams: OPTIONAL<MediaDescriptor_streams>,
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
     * @summary Restructures an object into a MediaDescriptor
     * @description
     * 
     * This takes an `object` and converts it to a `MediaDescriptor`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MediaDescriptor`.
     * @returns {MediaDescriptor}
     */
    public static _from_object (_o: { [_K in keyof (MediaDescriptor)]: (MediaDescriptor)[_K] }): MediaDescriptor {
        return new MediaDescriptor(_o.termStateDescr, _o.streams, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of MediaDescriptor
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MediaDescriptor: $.ComponentSpec[] = [
    new $.ComponentSpec("termStateDescr", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("streams", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of MediaDescriptor
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MediaDescriptor: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MediaDescriptor
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MediaDescriptor: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MediaDescriptor: $.ASN1Decoder<MediaDescriptor> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MediaDescriptor
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MediaDescriptor (el: _Element): MediaDescriptor {
    if (!_cached_decoder_for_MediaDescriptor) { _cached_decoder_for_MediaDescriptor = function (el: _Element): MediaDescriptor {
    let termStateDescr: OPTIONAL<TerminationStateDescriptor>;
    let streams: OPTIONAL<MediaDescriptor_streams>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "termStateDescr": (_el: _Element): void => { termStateDescr = $._decode_implicit<TerminationStateDescriptor>(() => _decode_TerminationStateDescriptor)(_el); },
        "streams": (_el: _Element): void => { streams = $._decode_explicit<MediaDescriptor_streams>(() => _decode_MediaDescriptor_streams)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MediaDescriptor,
        _extension_additions_list_spec_for_MediaDescriptor,
        _root_component_type_list_2_spec_for_MediaDescriptor,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new MediaDescriptor(
        termStateDescr,
        streams,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_MediaDescriptor(el);
}

let _cached_encoder_for_MediaDescriptor: $.ASN1Encoder<MediaDescriptor> | null = null;

/**
 * @summary Encodes a(n) MediaDescriptor into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MediaDescriptor, encoded as an ASN.1 Element.
 */
export
function _encode_MediaDescriptor (value: MediaDescriptor, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MediaDescriptor) { _cached_encoder_for_MediaDescriptor = function (value: MediaDescriptor, elGetter: $.ASN1Encoder<MediaDescriptor>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.termStateDescr === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_TerminationStateDescriptor, $.BER)(value.termStateDescr, $.BER)),
            /* IF_ABSENT  */ ((value.streams === undefined) ? undefined : $._encode_explicit(_TagClass.context, 1, () => _encode_MediaDescriptor_streams, $.BER)(value.streams, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_MediaDescriptor(value, elGetter);
}


/* eslint-enable */
