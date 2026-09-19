/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { StreamFormat, _decode_StreamFormat, _encode_StreamFormat } from "../EmberPlus-Glow/StreamFormat.ta.mjs";
// export { StreamFormat, StreamFormat_unsignedInt8 /* IMPORTED_LONG_NAMED_INTEGER */, unsignedInt8 /* IMPORTED_SHORT_NAMED_INTEGER */, StreamFormat_unsignedInt16BigEndian /* IMPORTED_LONG_NAMED_INTEGER */, unsignedInt16BigEndian /* IMPORTED_SHORT_NAMED_INTEGER */, StreamFormat_unsignedInt16LittleEndian /* IMPORTED_LONG_NAMED_INTEGER */, unsignedInt16LittleEndian /* IMPORTED_SHORT_NAMED_INTEGER */, StreamFormat_unsignedInt32BigEndian /* IMPORTED_LONG_NAMED_INTEGER */, unsignedInt32BigEndian /* IMPORTED_SHORT_NAMED_INTEGER */, StreamFormat_unsignedInt32LittleEndian /* IMPORTED_LONG_NAMED_INTEGER */, unsignedInt32LittleEndian /* IMPORTED_SHORT_NAMED_INTEGER */, StreamFormat_unsignedInt64BigEndian /* IMPORTED_LONG_NAMED_INTEGER */, unsignedInt64BigEndian /* IMPORTED_SHORT_NAMED_INTEGER */, StreamFormat_unsignedInt64LittleEndian /* IMPORTED_LONG_NAMED_INTEGER */, unsignedInt64LittleEndian /* IMPORTED_SHORT_NAMED_INTEGER */, StreamFormat_signedInt8 /* IMPORTED_LONG_NAMED_INTEGER */, signedInt8 /* IMPORTED_SHORT_NAMED_INTEGER */, StreamFormat_signedInt16BigEndian /* IMPORTED_LONG_NAMED_INTEGER */, signedInt16BigEndian /* IMPORTED_SHORT_NAMED_INTEGER */, StreamFormat_signedInt16LittleEndian /* IMPORTED_LONG_NAMED_INTEGER */, signedInt16LittleEndian /* IMPORTED_SHORT_NAMED_INTEGER */, StreamFormat_signedInt32BigEndian /* IMPORTED_LONG_NAMED_INTEGER */, signedInt32BigEndian /* IMPORTED_SHORT_NAMED_INTEGER */, StreamFormat_signedInt32LittleEndian /* IMPORTED_LONG_NAMED_INTEGER */, signedInt32LittleEndian /* IMPORTED_SHORT_NAMED_INTEGER */, StreamFormat_signedInt64BigEndian /* IMPORTED_LONG_NAMED_INTEGER */, signedInt64BigEndian /* IMPORTED_SHORT_NAMED_INTEGER */, StreamFormat_signedInt64LittleEndian /* IMPORTED_LONG_NAMED_INTEGER */, signedInt64LittleEndian /* IMPORTED_SHORT_NAMED_INTEGER */, StreamFormat_ieeeFloat32BigEndian /* IMPORTED_LONG_NAMED_INTEGER */, ieeeFloat32BigEndian /* IMPORTED_SHORT_NAMED_INTEGER */, StreamFormat_ieeeFloat32LittleEndian /* IMPORTED_LONG_NAMED_INTEGER */, ieeeFloat32LittleEndian /* IMPORTED_SHORT_NAMED_INTEGER */, StreamFormat_ieeeFloat64BigEndian /* IMPORTED_LONG_NAMED_INTEGER */, ieeeFloat64BigEndian /* IMPORTED_SHORT_NAMED_INTEGER */, StreamFormat_ieeeFloat64LittleEndian /* IMPORTED_LONG_NAMED_INTEGER */, ieeeFloat64LittleEndian /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_StreamFormat, _encode_StreamFormat } from "../EmberPlus-Glow/StreamFormat.ta.mjs";
import { Integer32, _decode_Integer32, _encode_Integer32 } from "../EmberPlus-Glow/Integer32.ta.mjs";
// export { Integer32, _decode_Integer32, _encode_Integer32 } from "../EmberPlus-Glow/Integer32.ta.mjs";


/**
 * @summary StreamDescription
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StreamDescription ::= [APPLICATION 12] IMPLICIT
 *         SEQUENCE {
 *             streamFormat [0] StreamFormat,
 *             offset [1] Integer32  -- byte offset of the value in the streamed blob.
 *         }
 * ```
 * 
 * @class
 */
export
class StreamDescription {
    constructor (
        /**
         * @summary `streamFormat`.
         * @public
         * @readonly
         */
        readonly streamFormat: StreamFormat,
        /**
         * @summary `offset`.
         * @public
         * @readonly
         */
        readonly offset: Integer32
    ) {}

    /**
     * @summary Restructures an object into a StreamDescription
     * @description
     * 
     * This takes an `object` and converts it to a `StreamDescription`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `StreamDescription`.
     * @returns {StreamDescription}
     */
    public static _from_object (_o: { [_K in keyof (StreamDescription)]: (StreamDescription)[_K] }): StreamDescription {
        return new StreamDescription(_o.streamFormat, _o.offset);
    }


}

/**
 * @summary The Leading Root Component Types of StreamDescription
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_StreamDescription: $.ComponentSpec[] = [
    new $.ComponentSpec("streamFormat", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("offset", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of StreamDescription
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_StreamDescription: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of StreamDescription
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_StreamDescription: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_StreamDescription: $.ASN1Decoder<StreamDescription> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) StreamDescription
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_StreamDescription (el: _Element): StreamDescription {
    if (!_cached_decoder_for_StreamDescription) { _cached_decoder_for_StreamDescription = $._decode_implicit<StreamDescription>(() => function (el: _Element): StreamDescription {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("StreamDescription contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "streamFormat";
    sequence[1].name = "offset";
    let streamFormat!: StreamFormat;
    let offset!: Integer32;
    streamFormat = $._decode_explicit<StreamFormat>(() => _decode_StreamFormat)(sequence[0]);
    offset = $._decode_explicit<Integer32>(() => _decode_Integer32)(sequence[1]);
    return new StreamDescription(
        streamFormat,
        offset,

    );
}); }
    return _cached_decoder_for_StreamDescription(el);
}

let _cached_encoder_for_StreamDescription: $.ASN1Encoder<StreamDescription> | null = null;

/**
 * @summary Encodes a(n) StreamDescription into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The StreamDescription, encoded as an ASN.1 Element.
 */
export
function _encode_StreamDescription (value: StreamDescription, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_StreamDescription) { _cached_encoder_for_StreamDescription = $._encode_implicit(_TagClass.application, 12, () => function (value: StreamDescription, elGetter: $.ASN1Encoder<StreamDescription>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_StreamFormat, $.BER)(value.streamFormat, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_Integer32, $.BER)(value.offset, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_StreamDescription(value, elGetter);
}


/* eslint-enable */
