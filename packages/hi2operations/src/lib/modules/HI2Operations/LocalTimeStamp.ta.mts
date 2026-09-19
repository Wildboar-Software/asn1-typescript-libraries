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
import { LocalTimeStamp_winterSummerIndication, _enum_for_LocalTimeStamp_winterSummerIndication, LocalTimeStamp_winterSummerIndication_notProvided /* IMPORTED_LONG_ENUMERATION_ITEM */, notProvided /* IMPORTED_SHORT_ENUMERATION_ITEM */, LocalTimeStamp_winterSummerIndication_winterTime /* IMPORTED_LONG_ENUMERATION_ITEM */, winterTime /* IMPORTED_SHORT_ENUMERATION_ITEM */, LocalTimeStamp_winterSummerIndication_summerTime /* IMPORTED_LONG_ENUMERATION_ITEM */, summerTime /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_LocalTimeStamp_winterSummerIndication, _encode_LocalTimeStamp_winterSummerIndication } from "../HI2Operations/LocalTimeStamp-winterSummerIndication.ta.mjs";
// export { LocalTimeStamp_winterSummerIndication, _enum_for_LocalTimeStamp_winterSummerIndication, LocalTimeStamp_winterSummerIndication_notProvided /* IMPORTED_LONG_ENUMERATION_ITEM */, notProvided /* IMPORTED_SHORT_ENUMERATION_ITEM */, LocalTimeStamp_winterSummerIndication_winterTime /* IMPORTED_LONG_ENUMERATION_ITEM */, winterTime /* IMPORTED_SHORT_ENUMERATION_ITEM */, LocalTimeStamp_winterSummerIndication_summerTime /* IMPORTED_LONG_ENUMERATION_ITEM */, summerTime /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_LocalTimeStamp_winterSummerIndication, _encode_LocalTimeStamp_winterSummerIndication } from "../HI2Operations/LocalTimeStamp-winterSummerIndication.ta.mjs";


/**
 * @summary LocalTimeStamp
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LocalTimeStamp ::= SEQUENCE
 * {
 *     generalizedTime                    [0] GeneralizedTime,
 *         -- The minimum resolution required is one second.
 *         -- "Resolution" is the smallest incremental change that can be measured for time and
 *         -- is expressed with a definite number of decimal digits or bits.
 *     winterSummerIndication            [1] ENUMERATED
 *     {
 *         notProvided(0),
 *         winterTime(1),
 *         summerTime(2),
 *         ...
 *     }
 * }
 * ```
 * 
 * @class
 */
export
class LocalTimeStamp {
    constructor (
        /**
         * @summary `generalizedTime`.
         * @public
         * @readonly
         */
        readonly generalizedTime: GeneralizedTime,
        /**
         * @summary `winterSummerIndication`.
         * @public
         * @readonly
         */
        readonly winterSummerIndication: LocalTimeStamp_winterSummerIndication
    ) {}

    /**
     * @summary Restructures an object into a LocalTimeStamp
     * @description
     * 
     * This takes an `object` and converts it to a `LocalTimeStamp`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LocalTimeStamp`.
     * @returns {LocalTimeStamp}
     */
    public static _from_object (_o: { [_K in keyof (LocalTimeStamp)]: (LocalTimeStamp)[_K] }): LocalTimeStamp {
        return new LocalTimeStamp(_o.generalizedTime, _o.winterSummerIndication);
    }

        /**
         * @summary The enum used as the type of the component `winterSummerIndication`
         * @public
         * @static
         */

    public static _enum_for_winterSummerIndication = _enum_for_LocalTimeStamp_winterSummerIndication;
}

/**
 * @summary The Leading Root Component Types of LocalTimeStamp
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_LocalTimeStamp: $.ComponentSpec[] = [
    new $.ComponentSpec("generalizedTime", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("winterSummerIndication", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of LocalTimeStamp
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_LocalTimeStamp: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of LocalTimeStamp
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_LocalTimeStamp: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_LocalTimeStamp: $.ASN1Decoder<LocalTimeStamp> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LocalTimeStamp
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LocalTimeStamp (el: _Element): LocalTimeStamp {
    if (!_cached_decoder_for_LocalTimeStamp) { _cached_decoder_for_LocalTimeStamp = function (el: _Element): LocalTimeStamp {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("LocalTimeStamp contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "generalizedTime";
    sequence[1].name = "winterSummerIndication";
    let generalizedTime!: GeneralizedTime;
    let winterSummerIndication!: LocalTimeStamp_winterSummerIndication;
    generalizedTime = $._decode_implicit<GeneralizedTime>(() => $._decodeGeneralizedTime)(sequence[0]);
    winterSummerIndication = $._decode_implicit<LocalTimeStamp_winterSummerIndication>(() => _decode_LocalTimeStamp_winterSummerIndication)(sequence[1]);
    return new LocalTimeStamp(
        generalizedTime,
        winterSummerIndication,

    );
}; }
    return _cached_decoder_for_LocalTimeStamp(el);
}

let _cached_encoder_for_LocalTimeStamp: $.ASN1Encoder<LocalTimeStamp> | null = null;

/**
 * @summary Encodes a(n) LocalTimeStamp into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LocalTimeStamp, encoded as an ASN.1 Element.
 */
export
function _encode_LocalTimeStamp (value: LocalTimeStamp, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LocalTimeStamp) { _cached_encoder_for_LocalTimeStamp = function (value: LocalTimeStamp, elGetter: $.ASN1Encoder<LocalTimeStamp>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeGeneralizedTime, $.BER)(value.generalizedTime, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_LocalTimeStamp_winterSummerIndication, $.BER)(value.winterSummerIndication, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_LocalTimeStamp(value, elGetter);
}


/* eslint-enable */
