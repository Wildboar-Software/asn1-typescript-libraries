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
import { RequestID, _decode_RequestID, _encode_RequestID } from "../MEDIA-GATEWAY-CONTROL/RequestID.ta.mjs";
// export { RequestID, _decode_RequestID, _encode_RequestID } from "../MEDIA-GATEWAY-CONTROL/RequestID.ta.mjs";
import { PkgdName, _decode_PkgdName, _encode_PkgdName } from "../MEDIA-GATEWAY-CONTROL/PkgdName.ta.mjs";
// export { PkgdName, _decode_PkgdName, _encode_PkgdName } from "../MEDIA-GATEWAY-CONTROL/PkgdName.ta.mjs";
import { StreamID, _decode_StreamID, _encode_StreamID } from "../MEDIA-GATEWAY-CONTROL/StreamID.ta.mjs";
// export { StreamID, _decode_StreamID, _encode_StreamID } from "../MEDIA-GATEWAY-CONTROL/StreamID.ta.mjs";


/**
 * @summary IndAudEventsDescriptor
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IndAudEventsDescriptor ::= SEQUENCE
 *     {
 *         requestID                    [0] RequestID OPTIONAL,
 *         pkgdName                    [1] PkgdName,
 *         streamID                    [2] StreamID OPTIONAL,
 *         ...
 *     }
 * ```
 * 
 * @class
 */
export
class IndAudEventsDescriptor {
    constructor (
        /**
         * @summary `requestID`.
         * @public
         * @readonly
         */
        readonly requestID: OPTIONAL<RequestID>,
        /**
         * @summary `pkgdName`.
         * @public
         * @readonly
         */
        readonly pkgdName: PkgdName,
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
     * @summary Restructures an object into a IndAudEventsDescriptor
     * @description
     * 
     * This takes an `object` and converts it to a `IndAudEventsDescriptor`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IndAudEventsDescriptor`.
     * @returns {IndAudEventsDescriptor}
     */
    public static _from_object (_o: { [_K in keyof (IndAudEventsDescriptor)]: (IndAudEventsDescriptor)[_K] }): IndAudEventsDescriptor {
        return new IndAudEventsDescriptor(_o.requestID, _o.pkgdName, _o.streamID, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of IndAudEventsDescriptor
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_IndAudEventsDescriptor: $.ComponentSpec[] = [
    new $.ComponentSpec("requestID", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("pkgdName", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("streamID", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of IndAudEventsDescriptor
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IndAudEventsDescriptor: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IndAudEventsDescriptor
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_IndAudEventsDescriptor: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_IndAudEventsDescriptor: $.ASN1Decoder<IndAudEventsDescriptor> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IndAudEventsDescriptor
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IndAudEventsDescriptor (el: _Element): IndAudEventsDescriptor {
    if (!_cached_decoder_for_IndAudEventsDescriptor) { _cached_decoder_for_IndAudEventsDescriptor = function (el: _Element): IndAudEventsDescriptor {
    let requestID: OPTIONAL<RequestID>;
    let pkgdName!: PkgdName;
    let streamID: OPTIONAL<StreamID>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "requestID": (_el: _Element): void => { requestID = $._decode_implicit<RequestID>(() => _decode_RequestID)(_el); },
        "pkgdName": (_el: _Element): void => { pkgdName = $._decode_implicit<PkgdName>(() => _decode_PkgdName)(_el); },
        "streamID": (_el: _Element): void => { streamID = $._decode_implicit<StreamID>(() => _decode_StreamID)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_IndAudEventsDescriptor,
        _extension_additions_list_spec_for_IndAudEventsDescriptor,
        _root_component_type_list_2_spec_for_IndAudEventsDescriptor,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new IndAudEventsDescriptor(
        requestID,
        pkgdName,
        streamID,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_IndAudEventsDescriptor(el);
}

let _cached_encoder_for_IndAudEventsDescriptor: $.ASN1Encoder<IndAudEventsDescriptor> | null = null;

/**
 * @summary Encodes a(n) IndAudEventsDescriptor into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IndAudEventsDescriptor, encoded as an ASN.1 Element.
 */
export
function _encode_IndAudEventsDescriptor (value: IndAudEventsDescriptor, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IndAudEventsDescriptor) { _cached_encoder_for_IndAudEventsDescriptor = function (value: IndAudEventsDescriptor, elGetter: $.ASN1Encoder<IndAudEventsDescriptor>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.requestID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_RequestID, $.BER)(value.requestID, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_PkgdName, $.BER)(value.pkgdName, $.BER),
            /* IF_ABSENT  */ ((value.streamID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_StreamID, $.BER)(value.streamID, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_IndAudEventsDescriptor(value, elGetter);
}


/* eslint-enable */
