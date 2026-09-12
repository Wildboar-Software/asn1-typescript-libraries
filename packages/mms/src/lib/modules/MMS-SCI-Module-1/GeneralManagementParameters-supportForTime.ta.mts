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
 * @summary GeneralManagementParameters_supportForTime
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GeneralManagementParameters-supportForTime ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class GeneralManagementParameters_supportForTime {
    constructor (
        /**
         * @summary `timeOfDay`.
         * @public
         * @readonly
         */
        readonly timeOfDay: BOOLEAN,
        /**
         * @summary `timeSequence`.
         * @public
         * @readonly
         */
        readonly timeSequence: BOOLEAN
    ) {}

    /**
     * @summary Restructures an object into a GeneralManagementParameters_supportForTime
     * @description
     * 
     * This takes an `object` and converts it to a `GeneralManagementParameters_supportForTime`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GeneralManagementParameters_supportForTime`.
     * @returns {GeneralManagementParameters_supportForTime}
     */
    public static _from_object (_o: { [_K in keyof (GeneralManagementParameters_supportForTime)]: (GeneralManagementParameters_supportForTime)[_K] }): GeneralManagementParameters_supportForTime {
        return new GeneralManagementParameters_supportForTime(_o.timeOfDay, _o.timeSequence);
    }


}

/**
 * @summary The Leading Root Component Types of GeneralManagementParameters_supportForTime
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GeneralManagementParameters_supportForTime: $.ComponentSpec[] = [
    new $.ComponentSpec("timeOfDay", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("timeSequence", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of GeneralManagementParameters_supportForTime
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GeneralManagementParameters_supportForTime: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GeneralManagementParameters_supportForTime
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GeneralManagementParameters_supportForTime: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GeneralManagementParameters_supportForTime: $.ASN1Decoder<GeneralManagementParameters_supportForTime> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GeneralManagementParameters_supportForTime
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GeneralManagementParameters_supportForTime (el: _Element): GeneralManagementParameters_supportForTime {
    if (!_cached_decoder_for_GeneralManagementParameters_supportForTime) { _cached_decoder_for_GeneralManagementParameters_supportForTime = function (el: _Element): GeneralManagementParameters_supportForTime {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("GeneralManagementParameters-supportForTime contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "timeOfDay";
    sequence[1].name = "timeSequence";
    let timeOfDay!: BOOLEAN;
    let timeSequence!: BOOLEAN;
    timeOfDay = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(sequence[0]);
    timeSequence = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(sequence[1]);
    return new GeneralManagementParameters_supportForTime(
        timeOfDay,
        timeSequence,

    );
}; }
    return _cached_decoder_for_GeneralManagementParameters_supportForTime(el);
}

let _cached_encoder_for_GeneralManagementParameters_supportForTime: $.ASN1Encoder<GeneralManagementParameters_supportForTime> | null = null;

/**
 * @summary Encodes a(n) GeneralManagementParameters_supportForTime into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GeneralManagementParameters_supportForTime, encoded as an ASN.1 Element.
 */
export
function _encode_GeneralManagementParameters_supportForTime (value: GeneralManagementParameters_supportForTime, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GeneralManagementParameters_supportForTime) { _cached_encoder_for_GeneralManagementParameters_supportForTime = function (value: GeneralManagementParameters_supportForTime, elGetter: $.ASN1Encoder<GeneralManagementParameters_supportForTime>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeBoolean, $.BER)(value.timeOfDay, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeBoolean, $.BER)(value.timeSequence, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GeneralManagementParameters_supportForTime(value, elGetter);
}


/* eslint-enable */
