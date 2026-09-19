/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IndAudTerminationStateDescriptor, _decode_IndAudTerminationStateDescriptor, _encode_IndAudTerminationStateDescriptor } from "../MEDIA-GATEWAY-CONTROL/IndAudTerminationStateDescriptor.ta.mjs";
// export { IndAudTerminationStateDescriptor, _decode_IndAudTerminationStateDescriptor, _encode_IndAudTerminationStateDescriptor } from "../MEDIA-GATEWAY-CONTROL/IndAudTerminationStateDescriptor.ta.mjs";
import { IndAudMediaDescriptor_streams, _decode_IndAudMediaDescriptor_streams, _encode_IndAudMediaDescriptor_streams } from "../MEDIA-GATEWAY-CONTROL/IndAudMediaDescriptor-streams.ta.mjs";
// export { IndAudMediaDescriptor_streams, _decode_IndAudMediaDescriptor_streams, _encode_IndAudMediaDescriptor_streams } from "../MEDIA-GATEWAY-CONTROL/IndAudMediaDescriptor-streams.ta.mjs";


/**
 * @summary IndAudMediaDescriptor
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IndAudMediaDescriptor ::= SEQUENCE
 *     {
 *         termStateDescr                [0] IndAudTerminationStateDescriptor OPTIONAL,
 *         streams                        [1] CHOICE
 *         {
 *             oneStream        [0] IndAudStreamParms,
 *             multiStream        [1] SEQUENCE OF IndAudStreamDescriptor
 *         } OPTIONAL,
 *         ...
 *     }
 * ```
 * 
 * @class
 */
export
class IndAudMediaDescriptor {
    constructor (
        /**
         * @summary `termStateDescr`.
         * @public
         * @readonly
         */
        readonly termStateDescr: OPTIONAL<IndAudTerminationStateDescriptor>,
        /**
         * @summary `streams`.
         * @public
         * @readonly
         */
        readonly streams: OPTIONAL<IndAudMediaDescriptor_streams>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a IndAudMediaDescriptor
     * @description
     * 
     * This takes an `object` and converts it to a `IndAudMediaDescriptor`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IndAudMediaDescriptor`.
     * @returns {IndAudMediaDescriptor}
     */
    public static _from_object (_o: { [_K in keyof (IndAudMediaDescriptor)]: (IndAudMediaDescriptor)[_K] }): IndAudMediaDescriptor {
        return new IndAudMediaDescriptor(_o.termStateDescr, _o.streams, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of IndAudMediaDescriptor
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_IndAudMediaDescriptor: $.ComponentSpec[] = [
    new $.ComponentSpec("termStateDescr", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("streams", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of IndAudMediaDescriptor
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IndAudMediaDescriptor: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IndAudMediaDescriptor
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_IndAudMediaDescriptor: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_IndAudMediaDescriptor: $.ASN1Decoder<IndAudMediaDescriptor> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IndAudMediaDescriptor
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IndAudMediaDescriptor (el: _Element): IndAudMediaDescriptor {
    if (!_cached_decoder_for_IndAudMediaDescriptor) { _cached_decoder_for_IndAudMediaDescriptor = function (el: _Element): IndAudMediaDescriptor {
    let termStateDescr: OPTIONAL<IndAudTerminationStateDescriptor>;
    let streams: OPTIONAL<IndAudMediaDescriptor_streams>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "termStateDescr": (_el: _Element): void => { termStateDescr = $._decode_implicit<IndAudTerminationStateDescriptor>(() => _decode_IndAudTerminationStateDescriptor)(_el); },
        "streams": (_el: _Element): void => { streams = $._decode_explicit<IndAudMediaDescriptor_streams>(() => _decode_IndAudMediaDescriptor_streams)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_IndAudMediaDescriptor,
        _extension_additions_list_spec_for_IndAudMediaDescriptor,
        _root_component_type_list_2_spec_for_IndAudMediaDescriptor,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new IndAudMediaDescriptor(
        termStateDescr,
        streams,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_IndAudMediaDescriptor(el);
}

let _cached_encoder_for_IndAudMediaDescriptor: $.ASN1Encoder<IndAudMediaDescriptor> | null = null;

/**
 * @summary Encodes a(n) IndAudMediaDescriptor into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IndAudMediaDescriptor, encoded as an ASN.1 Element.
 */
export
function _encode_IndAudMediaDescriptor (value: IndAudMediaDescriptor, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IndAudMediaDescriptor) { _cached_encoder_for_IndAudMediaDescriptor = function (value: IndAudMediaDescriptor, elGetter: $.ASN1Encoder<IndAudMediaDescriptor>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.termStateDescr === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_IndAudTerminationStateDescriptor, $.BER)(value.termStateDescr, $.BER)),
            /* IF_ABSENT  */ ((value.streams === undefined) ? undefined : $._encode_explicit(_TagClass.context, 1, () => _encode_IndAudMediaDescriptor_streams, $.BER)(value.streams, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_IndAudMediaDescriptor(value, elGetter);
}


/* eslint-enable */
