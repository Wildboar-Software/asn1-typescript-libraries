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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";



/**
 * @summary ErrorControl_Item_ecStatistics
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ErrorControl-Item-ecStatistics ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class ErrorControl_Item_ecStatistics {
    constructor (
        /**
         * @summary `framesSentAck`.
         * @public
         * @readonly
         */
        readonly framesSentAck: OPTIONAL<INTEGER>,
        /**
         * @summary `framesRetransmitted`.
         * @public
         * @readonly
         */
        readonly framesRetransmitted: OPTIONAL<INTEGER>,
        /**
         * @summary `framesReceivedAck`.
         * @public
         * @readonly
         */
        readonly framesReceivedAck: OPTIONAL<INTEGER>,
        /**
         * @summary `framesReceivedDiscard`.
         * @public
         * @readonly
         */
        readonly framesReceivedDiscard: OPTIONAL<INTEGER>
    ) {}

    /**
     * @summary Restructures an object into a ErrorControl_Item_ecStatistics
     * @description
     * 
     * This takes an `object` and converts it to a `ErrorControl_Item_ecStatistics`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ErrorControl_Item_ecStatistics`.
     * @returns {ErrorControl_Item_ecStatistics}
     */
    public static _from_object (_o: { [_K in keyof (ErrorControl_Item_ecStatistics)]: (ErrorControl_Item_ecStatistics)[_K] }): ErrorControl_Item_ecStatistics {
        return new ErrorControl_Item_ecStatistics(_o.framesSentAck, _o.framesRetransmitted, _o.framesReceivedAck, _o.framesReceivedDiscard);
    }


}

/**
 * @summary The Leading Root Component Types of ErrorControl_Item_ecStatistics
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ErrorControl_Item_ecStatistics: $.ComponentSpec[] = [
    new $.ComponentSpec("framesSentAck", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("framesRetransmitted", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("framesReceivedAck", true, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("framesReceivedDiscard", true, $.hasTag(_TagClass.context, 3), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of ErrorControl_Item_ecStatistics
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ErrorControl_Item_ecStatistics: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ErrorControl_Item_ecStatistics
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ErrorControl_Item_ecStatistics: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ErrorControl_Item_ecStatistics: $.ASN1Decoder<ErrorControl_Item_ecStatistics> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ErrorControl_Item_ecStatistics
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ErrorControl_Item_ecStatistics (el: _Element): ErrorControl_Item_ecStatistics {
    if (!_cached_decoder_for_ErrorControl_Item_ecStatistics) { _cached_decoder_for_ErrorControl_Item_ecStatistics = function (el: _Element): ErrorControl_Item_ecStatistics {
    let framesSentAck: OPTIONAL<INTEGER>;
    let framesRetransmitted: OPTIONAL<INTEGER>;
    let framesReceivedAck: OPTIONAL<INTEGER>;
    let framesReceivedDiscard: OPTIONAL<INTEGER>;
    const callbacks: $.DecodingMap = {
        "framesSentAck": (_el: _Element): void => { framesSentAck = $._decodeInteger(_el); },
        "framesRetransmitted": (_el: _Element): void => { framesRetransmitted = $._decodeInteger(_el); },
        "framesReceivedAck": (_el: _Element): void => { framesReceivedAck = $._decodeInteger(_el); },
        "framesReceivedDiscard": (_el: _Element): void => { framesReceivedDiscard = $._decodeInteger(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ErrorControl_Item_ecStatistics,
        _extension_additions_list_spec_for_ErrorControl_Item_ecStatistics,
        _root_component_type_list_2_spec_for_ErrorControl_Item_ecStatistics,
        undefined,
    );
    return new ErrorControl_Item_ecStatistics(
        framesSentAck,
        framesRetransmitted,
        framesReceivedAck,
        framesReceivedDiscard
    );
}; }
    return _cached_decoder_for_ErrorControl_Item_ecStatistics(el);
}

let _cached_encoder_for_ErrorControl_Item_ecStatistics: $.ASN1Encoder<ErrorControl_Item_ecStatistics> | null = null;

/**
 * @summary Encodes a(n) ErrorControl_Item_ecStatistics into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ErrorControl_Item_ecStatistics, encoded as an ASN.1 Element.
 */
export
function _encode_ErrorControl_Item_ecStatistics (value: ErrorControl_Item_ecStatistics, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ErrorControl_Item_ecStatistics) { _cached_encoder_for_ErrorControl_Item_ecStatistics = function (value: ErrorControl_Item_ecStatistics, elGetter: $.ASN1Encoder<ErrorControl_Item_ecStatistics>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.framesSentAck === undefined) ? undefined : $._encodeInteger(value.framesSentAck, $.BER)),
            /* IF_ABSENT  */ ((value.framesRetransmitted === undefined) ? undefined : $._encodeInteger(value.framesRetransmitted, $.BER)),
            /* IF_ABSENT  */ ((value.framesReceivedAck === undefined) ? undefined : $._encodeInteger(value.framesReceivedAck, $.BER)),
            /* IF_ABSENT  */ ((value.framesReceivedDiscard === undefined) ? undefined : $._encodeInteger(value.framesReceivedDiscard, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ErrorControl_Item_ecStatistics(value, elGetter);
}


/* eslint-enable */
