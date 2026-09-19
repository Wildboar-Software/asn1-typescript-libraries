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
import { PkgdName, _decode_PkgdName, _encode_PkgdName } from "../MEDIA-GATEWAY-CONTROL/PkgdName.ta.mjs";
// export { PkgdName, _decode_PkgdName, _encode_PkgdName } from "../MEDIA-GATEWAY-CONTROL/PkgdName.ta.mjs";
import { StreamID, _decode_StreamID, _encode_StreamID } from "../MEDIA-GATEWAY-CONTROL/StreamID.ta.mjs";
// export { StreamID, _decode_StreamID, _encode_StreamID } from "../MEDIA-GATEWAY-CONTROL/StreamID.ta.mjs";


/**
 * @summary IndAudEventBufferDescriptor
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IndAudEventBufferDescriptor ::= SEQUENCE
 *     {
 *         eventName                    [0] PkgdName,
 *         streamID                    [1] StreamID OPTIONAL,
 *         ...
 *     }
 * ```
 * 
 * @class
 */
export
class IndAudEventBufferDescriptor {
    constructor (
        /**
         * @summary `eventName`.
         * @public
         * @readonly
         */
        readonly eventName: PkgdName,
        /**
         * @summary `streamID`.
         * @public
         * @readonly
         */
        readonly streamID: OPTIONAL<StreamID>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a IndAudEventBufferDescriptor
     * @description
     * 
     * This takes an `object` and converts it to a `IndAudEventBufferDescriptor`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IndAudEventBufferDescriptor`.
     * @returns {IndAudEventBufferDescriptor}
     */
    public static _from_object (_o: { [_K in keyof (IndAudEventBufferDescriptor)]: (IndAudEventBufferDescriptor)[_K] }): IndAudEventBufferDescriptor {
        return new IndAudEventBufferDescriptor(_o.eventName, _o.streamID, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of IndAudEventBufferDescriptor
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_IndAudEventBufferDescriptor: $.ComponentSpec[] = [
    new $.ComponentSpec("eventName", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("streamID", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of IndAudEventBufferDescriptor
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IndAudEventBufferDescriptor: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IndAudEventBufferDescriptor
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_IndAudEventBufferDescriptor: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_IndAudEventBufferDescriptor: $.ASN1Decoder<IndAudEventBufferDescriptor> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IndAudEventBufferDescriptor
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IndAudEventBufferDescriptor (el: _Element): IndAudEventBufferDescriptor {
    if (!_cached_decoder_for_IndAudEventBufferDescriptor) { _cached_decoder_for_IndAudEventBufferDescriptor = function (el: _Element): IndAudEventBufferDescriptor {
    let eventName!: PkgdName;
    let streamID: OPTIONAL<StreamID>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "eventName": (_el: _Element): void => { eventName = $._decode_implicit<PkgdName>(() => _decode_PkgdName)(_el); },
        "streamID": (_el: _Element): void => { streamID = $._decode_implicit<StreamID>(() => _decode_StreamID)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_IndAudEventBufferDescriptor,
        _extension_additions_list_spec_for_IndAudEventBufferDescriptor,
        _root_component_type_list_2_spec_for_IndAudEventBufferDescriptor,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new IndAudEventBufferDescriptor(
        eventName,
        streamID,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_IndAudEventBufferDescriptor(el);
}

let _cached_encoder_for_IndAudEventBufferDescriptor: $.ASN1Encoder<IndAudEventBufferDescriptor> | null = null;

/**
 * @summary Encodes a(n) IndAudEventBufferDescriptor into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IndAudEventBufferDescriptor, encoded as an ASN.1 Element.
 */
export
function _encode_IndAudEventBufferDescriptor (value: IndAudEventBufferDescriptor, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IndAudEventBufferDescriptor) { _cached_encoder_for_IndAudEventBufferDescriptor = function (value: IndAudEventBufferDescriptor, elGetter: $.ASN1Encoder<IndAudEventBufferDescriptor>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_PkgdName, $.BER)(value.eventName, $.BER),
            /* IF_ABSENT  */ ((value.streamID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_StreamID, $.BER)(value.streamID, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_IndAudEventBufferDescriptor(value, elGetter);
}


/* eslint-enable */
