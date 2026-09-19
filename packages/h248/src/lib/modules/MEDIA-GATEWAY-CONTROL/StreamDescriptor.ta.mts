/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { StreamID, _decode_StreamID, _encode_StreamID } from "../MEDIA-GATEWAY-CONTROL/StreamID.ta.mjs";
// export { StreamID, _decode_StreamID, _encode_StreamID } from "../MEDIA-GATEWAY-CONTROL/StreamID.ta.mjs";
import { StreamParms, _decode_StreamParms, _encode_StreamParms } from "../MEDIA-GATEWAY-CONTROL/StreamParms.ta.mjs";
// export { StreamParms, _decode_StreamParms, _encode_StreamParms } from "../MEDIA-GATEWAY-CONTROL/StreamParms.ta.mjs";


/**
 * @summary StreamDescriptor
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StreamDescriptor ::= SEQUENCE
 *     {
 *         streamID                    [0] StreamID,
 *         streamParms                    [1] StreamParms
 *     }
 * ```
 * 
 * @class
 */
export
class StreamDescriptor {
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
        readonly streamParms: StreamParms
    ) {}

    /**
     * @summary Restructures an object into a StreamDescriptor
     * @description
     * 
     * This takes an `object` and converts it to a `StreamDescriptor`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `StreamDescriptor`.
     * @returns {StreamDescriptor}
     */
    public static _from_object (_o: { [_K in keyof (StreamDescriptor)]: (StreamDescriptor)[_K] }): StreamDescriptor {
        return new StreamDescriptor(_o.streamID, _o.streamParms);
    }


}

/**
 * @summary The Leading Root Component Types of StreamDescriptor
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_StreamDescriptor: $.ComponentSpec[] = [
    new $.ComponentSpec("streamID", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("streamParms", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of StreamDescriptor
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_StreamDescriptor: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of StreamDescriptor
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_StreamDescriptor: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_StreamDescriptor: $.ASN1Decoder<StreamDescriptor> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) StreamDescriptor
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_StreamDescriptor (el: _Element): StreamDescriptor {
    if (!_cached_decoder_for_StreamDescriptor) { _cached_decoder_for_StreamDescriptor = function (el: _Element): StreamDescriptor {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("StreamDescriptor contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "streamID";
    sequence[1].name = "streamParms";
    let streamID!: StreamID;
    let streamParms!: StreamParms;
    streamID = $._decode_implicit<StreamID>(() => _decode_StreamID)(sequence[0]);
    streamParms = $._decode_implicit<StreamParms>(() => _decode_StreamParms)(sequence[1]);
    return new StreamDescriptor(
        streamID,
        streamParms,

    );
}; }
    return _cached_decoder_for_StreamDescriptor(el);
}

let _cached_encoder_for_StreamDescriptor: $.ASN1Encoder<StreamDescriptor> | null = null;

/**
 * @summary Encodes a(n) StreamDescriptor into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The StreamDescriptor, encoded as an ASN.1 Element.
 */
export
function _encode_StreamDescriptor (value: StreamDescriptor, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_StreamDescriptor) { _cached_encoder_for_StreamDescriptor = function (value: StreamDescriptor, elGetter: $.ASN1Encoder<StreamDescriptor>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_StreamID, $.BER)(value.streamID, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_StreamParms, $.BER)(value.streamParms, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_StreamDescriptor(value, elGetter);
}


/* eslint-enable */
