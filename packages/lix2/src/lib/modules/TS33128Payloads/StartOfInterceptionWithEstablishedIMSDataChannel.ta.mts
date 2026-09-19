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
import { IMPU, _decode_IMPU, _encode_IMPU } from "../TS33128Payloads/IMPU.ta.mjs";
// export { IMPU, _decode_IMPU, _encode_IMPU } from "../TS33128Payloads/IMPU.ta.mjs";
import { SBIType, _decode_SBIType, _encode_SBIType } from "../TS33128Payloads/SBIType.ta.mjs";
// export { SBIType, _decode_SBIType, _encode_SBIType } from "../TS33128Payloads/SBIType.ta.mjs";


/**
 * @summary StartOfInterceptionWithEstablishedIMSDataChannel
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StartOfInterceptionWithEstablishedIMSDataChannel ::= SEQUENCE
 * {
 *     targetIdentity            [1] IMPU,
 *     callingIdentity           [2] IMPU OPTIONAL,
 *     calledIdentities          [3] SEQUENCE OF IMPU OPTIONAL,
 *     sessionEventNotification  [4] SBIType OPTIONAL,
 *     mediaInstructions         [5] SBIType OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class StartOfInterceptionWithEstablishedIMSDataChannel {
    constructor (
        /**
         * @summary `targetIdentity`.
         * @public
         * @readonly
         */
        readonly targetIdentity: IMPU,
        /**
         * @summary `callingIdentity`.
         * @public
         * @readonly
         */
        readonly callingIdentity: OPTIONAL<IMPU>,
        /**
         * @summary `calledIdentities`.
         * @public
         * @readonly
         */
        readonly calledIdentities: OPTIONAL<IMPU[]>,
        /**
         * @summary `sessionEventNotification`.
         * @public
         * @readonly
         */
        readonly sessionEventNotification: OPTIONAL<SBIType>,
        /**
         * @summary `mediaInstructions`.
         * @public
         * @readonly
         */
        readonly mediaInstructions: OPTIONAL<SBIType>
    ) {}

    /**
     * @summary Restructures an object into a StartOfInterceptionWithEstablishedIMSDataChannel
     * @description
     * 
     * This takes an `object` and converts it to a `StartOfInterceptionWithEstablishedIMSDataChannel`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `StartOfInterceptionWithEstablishedIMSDataChannel`.
     * @returns {StartOfInterceptionWithEstablishedIMSDataChannel}
     */
    public static _from_object (_o: { [_K in keyof (StartOfInterceptionWithEstablishedIMSDataChannel)]: (StartOfInterceptionWithEstablishedIMSDataChannel)[_K] }): StartOfInterceptionWithEstablishedIMSDataChannel {
        return new StartOfInterceptionWithEstablishedIMSDataChannel(_o.targetIdentity, _o.callingIdentity, _o.calledIdentities, _o.sessionEventNotification, _o.mediaInstructions);
    }


}

/**
 * @summary The Leading Root Component Types of StartOfInterceptionWithEstablishedIMSDataChannel
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_StartOfInterceptionWithEstablishedIMSDataChannel: $.ComponentSpec[] = [
    new $.ComponentSpec("targetIdentity", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("callingIdentity", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("calledIdentities", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("sessionEventNotification", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("mediaInstructions", true, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of StartOfInterceptionWithEstablishedIMSDataChannel
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_StartOfInterceptionWithEstablishedIMSDataChannel: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of StartOfInterceptionWithEstablishedIMSDataChannel
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_StartOfInterceptionWithEstablishedIMSDataChannel: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_StartOfInterceptionWithEstablishedIMSDataChannel: $.ASN1Decoder<StartOfInterceptionWithEstablishedIMSDataChannel> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) StartOfInterceptionWithEstablishedIMSDataChannel
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_StartOfInterceptionWithEstablishedIMSDataChannel (el: _Element): StartOfInterceptionWithEstablishedIMSDataChannel {
    if (!_cached_decoder_for_StartOfInterceptionWithEstablishedIMSDataChannel) { _cached_decoder_for_StartOfInterceptionWithEstablishedIMSDataChannel = function (el: _Element): StartOfInterceptionWithEstablishedIMSDataChannel {
    let targetIdentity!: IMPU;
    let callingIdentity: OPTIONAL<IMPU>;
    let calledIdentities: OPTIONAL<IMPU[]>;
    let sessionEventNotification: OPTIONAL<SBIType>;
    let mediaInstructions: OPTIONAL<SBIType>;
    const callbacks: $.DecodingMap = {
        "targetIdentity": (_el: _Element): void => { targetIdentity = $._decode_explicit<IMPU>(() => _decode_IMPU)(_el); },
        "callingIdentity": (_el: _Element): void => { callingIdentity = $._decode_explicit<IMPU>(() => _decode_IMPU)(_el); },
        "calledIdentities": (_el: _Element): void => { calledIdentities = $._decode_implicit<IMPU[]>(() => $._decodeSequenceOf<IMPU>(() => _decode_IMPU))(_el); },
        "sessionEventNotification": (_el: _Element): void => { sessionEventNotification = $._decode_implicit<SBIType>(() => _decode_SBIType)(_el); },
        "mediaInstructions": (_el: _Element): void => { mediaInstructions = $._decode_implicit<SBIType>(() => _decode_SBIType)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_StartOfInterceptionWithEstablishedIMSDataChannel,
        _extension_additions_list_spec_for_StartOfInterceptionWithEstablishedIMSDataChannel,
        _root_component_type_list_2_spec_for_StartOfInterceptionWithEstablishedIMSDataChannel,
        undefined,
    );
    return new StartOfInterceptionWithEstablishedIMSDataChannel(
        targetIdentity,
        callingIdentity,
        calledIdentities,
        sessionEventNotification,
        mediaInstructions
    );
}; }
    return _cached_decoder_for_StartOfInterceptionWithEstablishedIMSDataChannel(el);
}

let _cached_encoder_for_StartOfInterceptionWithEstablishedIMSDataChannel: $.ASN1Encoder<StartOfInterceptionWithEstablishedIMSDataChannel> | null = null;

/**
 * @summary Encodes a(n) StartOfInterceptionWithEstablishedIMSDataChannel into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The StartOfInterceptionWithEstablishedIMSDataChannel, encoded as an ASN.1 Element.
 */
export
function _encode_StartOfInterceptionWithEstablishedIMSDataChannel (value: StartOfInterceptionWithEstablishedIMSDataChannel, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_StartOfInterceptionWithEstablishedIMSDataChannel) { _cached_encoder_for_StartOfInterceptionWithEstablishedIMSDataChannel = function (value: StartOfInterceptionWithEstablishedIMSDataChannel, elGetter: $.ASN1Encoder<StartOfInterceptionWithEstablishedIMSDataChannel>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_IMPU, $.BER)(value.targetIdentity, $.BER),
            /* IF_ABSENT  */ ((value.callingIdentity === undefined) ? undefined : $._encode_explicit(_TagClass.context, 2, () => _encode_IMPU, $.BER)(value.callingIdentity, $.BER)),
            /* IF_ABSENT  */ ((value.calledIdentities === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeSequenceOf<IMPU>(() => _encode_IMPU, $.BER), $.BER)(value.calledIdentities, $.BER)),
            /* IF_ABSENT  */ ((value.sessionEventNotification === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_SBIType, $.BER)(value.sessionEventNotification, $.BER)),
            /* IF_ABSENT  */ ((value.mediaInstructions === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_SBIType, $.BER)(value.mediaInstructions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_StartOfInterceptionWithEstablishedIMSDataChannel(value, elGetter);
}


/* eslint-enable */
