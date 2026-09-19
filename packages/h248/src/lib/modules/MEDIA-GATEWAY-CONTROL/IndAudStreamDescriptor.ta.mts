/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { StreamID, _decode_StreamID, _encode_StreamID } from "../MEDIA-GATEWAY-CONTROL/StreamID.ta.mjs";
// export { StreamID, _decode_StreamID, _encode_StreamID } from "../MEDIA-GATEWAY-CONTROL/StreamID.ta.mjs";
import { IndAudStreamParms, _decode_IndAudStreamParms, _encode_IndAudStreamParms } from "../MEDIA-GATEWAY-CONTROL/IndAudStreamParms.ta.mjs";
// export { IndAudStreamParms, _decode_IndAudStreamParms, _encode_IndAudStreamParms } from "../MEDIA-GATEWAY-CONTROL/IndAudStreamParms.ta.mjs";


/**
 * @summary IndAudStreamDescriptor
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IndAudStreamDescriptor ::= SEQUENCE
 *     {
 *         streamID        [0] StreamID,
 *         streamParms        [1] IndAudStreamParms
 *     }
 * ```
 * 
 * @class
 */
export
class IndAudStreamDescriptor {
    constructor (
        /**
         * @summary `streamID`.
         * @public
         * @readonly
         */
        readonly streamID: StreamID,
        /**
         * @summary `streamParms`.
         * @public
         * @readonly
         */
        readonly streamParms: IndAudStreamParms
    ) {}

    /**
     * @summary Restructures an object into a IndAudStreamDescriptor
     * @description
     * 
     * This takes an `object` and converts it to a `IndAudStreamDescriptor`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IndAudStreamDescriptor`.
     * @returns {IndAudStreamDescriptor}
     */
    public static _from_object (_o: { [_K in keyof (IndAudStreamDescriptor)]: (IndAudStreamDescriptor)[_K] }): IndAudStreamDescriptor {
        return new IndAudStreamDescriptor(_o.streamID, _o.streamParms);
    }


}

/**
 * @summary The Leading Root Component Types of IndAudStreamDescriptor
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_IndAudStreamDescriptor: $.ComponentSpec[] = [
    new $.ComponentSpec("streamID", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("streamParms", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of IndAudStreamDescriptor
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IndAudStreamDescriptor: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IndAudStreamDescriptor
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_IndAudStreamDescriptor: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_IndAudStreamDescriptor: $.ASN1Decoder<IndAudStreamDescriptor> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IndAudStreamDescriptor
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IndAudStreamDescriptor (el: _Element): IndAudStreamDescriptor {
    if (!_cached_decoder_for_IndAudStreamDescriptor) { _cached_decoder_for_IndAudStreamDescriptor = function (el: _Element): IndAudStreamDescriptor {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("IndAudStreamDescriptor contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "streamID";
    sequence[1].name = "streamParms";
    let streamID!: StreamID;
    let streamParms!: IndAudStreamParms;
    streamID = $._decode_implicit<StreamID>(() => _decode_StreamID)(sequence[0]);
    streamParms = $._decode_implicit<IndAudStreamParms>(() => _decode_IndAudStreamParms)(sequence[1]);
    return new IndAudStreamDescriptor(
        streamID,
        streamParms,

    );
}; }
    return _cached_decoder_for_IndAudStreamDescriptor(el);
}

let _cached_encoder_for_IndAudStreamDescriptor: $.ASN1Encoder<IndAudStreamDescriptor> | null = null;

/**
 * @summary Encodes a(n) IndAudStreamDescriptor into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IndAudStreamDescriptor, encoded as an ASN.1 Element.
 */
export
function _encode_IndAudStreamDescriptor (value: IndAudStreamDescriptor, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IndAudStreamDescriptor) { _cached_encoder_for_IndAudStreamDescriptor = function (value: IndAudStreamDescriptor, elGetter: $.ASN1Encoder<IndAudStreamDescriptor>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_StreamID, $.BER)(value.streamID, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_IndAudStreamParms, $.BER)(value.streamParms, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_IndAudStreamDescriptor(value, elGetter);
}


/* eslint-enable */
