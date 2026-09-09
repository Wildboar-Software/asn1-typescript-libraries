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
import { MessageID, _decode_MessageID, _encode_MessageID } from "../Core-INAP-CS1-DataTypes/MessageID.ta.mjs";
// export { MessageID, _decode_MessageID, _encode_MessageID } from "../Core-INAP-CS1-DataTypes/MessageID.ta.mjs";


/**
 * @summary InbandInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InbandInfo ::= SEQUENCE {
 *      messageID     [0] MessageID,
 *      numberOfRepetitions     [1] INTEGER (1..127)          OPTIONAL,
 *      duration     [2] INTEGER (0..32767)          OPTIONAL,
 *      interval     [3] INTEGER (0..32767)          OPTIONAL
 *      }
 * ```
 * 
 * @class
 */
export
class InbandInfo {
    constructor (
        /**
         * @summary `messageID`.
         * @public
         * @readonly
         */
        readonly messageID: MessageID,
        /**
         * @summary `numberOfRepetitions`.
         * @public
         * @readonly
         */
        readonly numberOfRepetitions: OPTIONAL<INTEGER>,
        /**
         * @summary `duration`.
         * @public
         * @readonly
         */
        readonly duration: OPTIONAL<INTEGER>,
        /**
         * @summary `interval`.
         * @public
         * @readonly
         */
        readonly interval: OPTIONAL<INTEGER>
    ) {}

    /**
     * @summary Restructures an object into a InbandInfo
     * @description
     * 
     * This takes an `object` and converts it to a `InbandInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `InbandInfo`.
     * @returns {InbandInfo}
     */
    public static _from_object (_o: { [_K in keyof (InbandInfo)]: (InbandInfo)[_K] }): InbandInfo {
        return new InbandInfo(_o.messageID, _o.numberOfRepetitions, _o.duration, _o.interval);
    }


}

/**
 * @summary The Leading Root Component Types of InbandInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_InbandInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("messageID", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("numberOfRepetitions", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("duration", true, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("interval", true, $.hasTag(_TagClass.context, 3), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of InbandInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_InbandInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of InbandInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_InbandInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_InbandInfo: $.ASN1Decoder<InbandInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) InbandInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_InbandInfo (el: _Element): InbandInfo {
    if (!_cached_decoder_for_InbandInfo) { _cached_decoder_for_InbandInfo = function (el: _Element): InbandInfo {
    let messageID!: MessageID;
    let numberOfRepetitions: OPTIONAL<INTEGER>;
    let duration: OPTIONAL<INTEGER>;
    let interval: OPTIONAL<INTEGER>;
    const callbacks: $.DecodingMap = {
        "messageID": (_el: _Element): void => { messageID = $._decode_explicit<MessageID>(() => _decode_MessageID)(_el); },
        "numberOfRepetitions": (_el: _Element): void => { numberOfRepetitions = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "duration": (_el: _Element): void => { duration = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "interval": (_el: _Element): void => { interval = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_InbandInfo,
        _extension_additions_list_spec_for_InbandInfo,
        _root_component_type_list_2_spec_for_InbandInfo,
        undefined,
    );
    return new InbandInfo(
        messageID,
        numberOfRepetitions,
        duration,
        interval
    );
}; }
    return _cached_decoder_for_InbandInfo(el);
}

let _cached_encoder_for_InbandInfo: $.ASN1Encoder<InbandInfo> | null = null;

/**
 * @summary Encodes a(n) InbandInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InbandInfo, encoded as an ASN.1 Element.
 */
export
function _encode_InbandInfo (value: InbandInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_InbandInfo) { _cached_encoder_for_InbandInfo = function (value: InbandInfo, elGetter: $.ASN1Encoder<InbandInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_MessageID, $.BER)(value.messageID, $.BER),
            /* IF_ABSENT  */ ((value.numberOfRepetitions === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.numberOfRepetitions, $.BER)),
            /* IF_ABSENT  */ ((value.duration === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.duration, $.BER)),
            /* IF_ABSENT  */ ((value.interval === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeInteger, $.BER)(value.interval, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_InbandInfo(value, elGetter);
}


/* eslint-enable */
