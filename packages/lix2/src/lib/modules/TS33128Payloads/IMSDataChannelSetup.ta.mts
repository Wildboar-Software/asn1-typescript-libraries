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
 * @summary IMSDataChannelSetup
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IMSDataChannelSetup ::= SEQUENCE
 * {
 *     targetIdentity            [1] IMPU,
 *     callingIdentity           [2] IMPU OPTIONAL,
 *     calledIdentity            [3] SEQUENCE (SIZE (1..MAX)) OF IMPU OPTIONAL,
 *     sessionEventNotification  [4] SBIType OPTIONAL,
 *     mediaInstructionData      [5] SBIType OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class IMSDataChannelSetup {
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
         * @summary `calledIdentity`.
         * @public
         * @readonly
         */
        readonly calledIdentity: OPTIONAL<IMPU[]>,
        /**
         * @summary `sessionEventNotification`.
         * @public
         * @readonly
         */
        readonly sessionEventNotification: OPTIONAL<SBIType>,
        /**
         * @summary `mediaInstructionData`.
         * @public
         * @readonly
         */
        readonly mediaInstructionData: OPTIONAL<SBIType>
    ) {}

    /**
     * @summary Restructures an object into a IMSDataChannelSetup
     * @description
     * 
     * This takes an `object` and converts it to a `IMSDataChannelSetup`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IMSDataChannelSetup`.
     * @returns {IMSDataChannelSetup}
     */
    public static _from_object (_o: { [_K in keyof (IMSDataChannelSetup)]: (IMSDataChannelSetup)[_K] }): IMSDataChannelSetup {
        return new IMSDataChannelSetup(_o.targetIdentity, _o.callingIdentity, _o.calledIdentity, _o.sessionEventNotification, _o.mediaInstructionData);
    }


}

/**
 * @summary The Leading Root Component Types of IMSDataChannelSetup
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_IMSDataChannelSetup: $.ComponentSpec[] = [
    new $.ComponentSpec("targetIdentity", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("callingIdentity", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("calledIdentity", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("sessionEventNotification", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("mediaInstructionData", true, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of IMSDataChannelSetup
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IMSDataChannelSetup: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IMSDataChannelSetup
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_IMSDataChannelSetup: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_IMSDataChannelSetup: $.ASN1Decoder<IMSDataChannelSetup> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IMSDataChannelSetup
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IMSDataChannelSetup (el: _Element): IMSDataChannelSetup {
    if (!_cached_decoder_for_IMSDataChannelSetup) { _cached_decoder_for_IMSDataChannelSetup = function (el: _Element): IMSDataChannelSetup {
    let targetIdentity!: IMPU;
    let callingIdentity: OPTIONAL<IMPU>;
    let calledIdentity: OPTIONAL<IMPU[]>;
    let sessionEventNotification: OPTIONAL<SBIType>;
    let mediaInstructionData: OPTIONAL<SBIType>;
    const callbacks: $.DecodingMap = {
        "targetIdentity": (_el: _Element): void => { targetIdentity = $._decode_explicit<IMPU>(() => _decode_IMPU)(_el); },
        "callingIdentity": (_el: _Element): void => { callingIdentity = $._decode_explicit<IMPU>(() => _decode_IMPU)(_el); },
        "calledIdentity": (_el: _Element): void => { calledIdentity = $._decode_implicit<IMPU[]>(() => $._decodeSequenceOf<IMPU>(() => _decode_IMPU))(_el); },
        "sessionEventNotification": (_el: _Element): void => { sessionEventNotification = $._decode_implicit<SBIType>(() => _decode_SBIType)(_el); },
        "mediaInstructionData": (_el: _Element): void => { mediaInstructionData = $._decode_implicit<SBIType>(() => _decode_SBIType)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_IMSDataChannelSetup,
        _extension_additions_list_spec_for_IMSDataChannelSetup,
        _root_component_type_list_2_spec_for_IMSDataChannelSetup,
        undefined,
    );
    return new IMSDataChannelSetup(
        targetIdentity,
        callingIdentity,
        calledIdentity,
        sessionEventNotification,
        mediaInstructionData
    );
}; }
    return _cached_decoder_for_IMSDataChannelSetup(el);
}

let _cached_encoder_for_IMSDataChannelSetup: $.ASN1Encoder<IMSDataChannelSetup> | null = null;

/**
 * @summary Encodes a(n) IMSDataChannelSetup into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IMSDataChannelSetup, encoded as an ASN.1 Element.
 */
export
function _encode_IMSDataChannelSetup (value: IMSDataChannelSetup, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IMSDataChannelSetup) { _cached_encoder_for_IMSDataChannelSetup = function (value: IMSDataChannelSetup, elGetter: $.ASN1Encoder<IMSDataChannelSetup>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_IMPU, $.BER)(value.targetIdentity, $.BER),
            /* IF_ABSENT  */ ((value.callingIdentity === undefined) ? undefined : $._encode_explicit(_TagClass.context, 2, () => _encode_IMPU, $.BER)(value.callingIdentity, $.BER)),
            /* IF_ABSENT  */ ((value.calledIdentity === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeSequenceOf<IMPU>(() => _encode_IMPU, $.BER), $.BER)(value.calledIdentity, $.BER)),
            /* IF_ABSENT  */ ((value.sessionEventNotification === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_SBIType, $.BER)(value.sessionEventNotification, $.BER)),
            /* IF_ABSENT  */ ((value.mediaInstructionData === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_SBIType, $.BER)(value.mediaInstructionData, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_IMSDataChannelSetup(value, elGetter);
}


/* eslint-enable */
