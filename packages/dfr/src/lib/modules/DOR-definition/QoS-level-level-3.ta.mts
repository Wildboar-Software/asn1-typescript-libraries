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



/**
 * @summary QoS_level_level_3
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * QoS-level-level-3 ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class QoS_level_level_3 {
    constructor (
        /**
         * @summary `produce_time`.
         * @public
         * @readonly
         */
        readonly produce_time: GeneralizedTime,
        /**
         * @summary `fidelity_time`.
         * @public
         * @readonly
         */
        readonly fidelity_time: GeneralizedTime
    ) {}

    /**
     * @summary Restructures an object into a QoS_level_level_3
     * @description
     * 
     * This takes an `object` and converts it to a `QoS_level_level_3`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `QoS_level_level_3`.
     * @returns {QoS_level_level_3}
     */
    public static _from_object (_o: { [_K in keyof (QoS_level_level_3)]: (QoS_level_level_3)[_K] }): QoS_level_level_3 {
        return new QoS_level_level_3(_o.produce_time, _o.fidelity_time);
    }


}

/**
 * @summary The Leading Root Component Types of QoS_level_level_3
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_QoS_level_level_3: $.ComponentSpec[] = [
    new $.ComponentSpec("produce-time", false, $.hasTag(_TagClass.universal, 24)),
    new $.ComponentSpec("fidelity-time", false, $.hasTag(_TagClass.universal, 24))
];

/**
 * @summary The Trailing Root Component Types of QoS_level_level_3
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_QoS_level_level_3: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of QoS_level_level_3
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_QoS_level_level_3: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_QoS_level_level_3: $.ASN1Decoder<QoS_level_level_3> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) QoS_level_level_3
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_QoS_level_level_3 (el: _Element): QoS_level_level_3 {
    if (!_cached_decoder_for_QoS_level_level_3) { _cached_decoder_for_QoS_level_level_3 = function (el: _Element): QoS_level_level_3 {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("QoS-level-level-3 contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "produce-time";
    sequence[1].name = "fidelity-time";
    let produce_time!: GeneralizedTime;
    let fidelity_time!: GeneralizedTime;
    produce_time = $._decodeGeneralizedTime(sequence[0]);
    fidelity_time = $._decodeGeneralizedTime(sequence[1]);
    return new QoS_level_level_3(
        produce_time,
        fidelity_time,

    );
}; }
    return _cached_decoder_for_QoS_level_level_3(el);
}

let _cached_encoder_for_QoS_level_level_3: $.ASN1Encoder<QoS_level_level_3> | null = null;

/**
 * @summary Encodes a(n) QoS_level_level_3 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The QoS_level_level_3, encoded as an ASN.1 Element.
 */
export
function _encode_QoS_level_level_3 (value: QoS_level_level_3, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_QoS_level_level_3) { _cached_encoder_for_QoS_level_level_3 = function (value: QoS_level_level_3, elGetter: $.ASN1Encoder<QoS_level_level_3>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeGeneralizedTime(value.produce_time, $.BER),
            /* REQUIRED   */ $._encodeGeneralizedTime(value.fidelity_time, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_QoS_level_level_3(value, elGetter);
}


/* eslint-enable */
