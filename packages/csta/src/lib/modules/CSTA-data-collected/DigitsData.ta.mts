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
 * @summary DigitsData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DigitsData ::= SEQUENCE
 * {    digitsDetected            IA5String (SIZE(0..64)),
 *     digitsDuration            [0] IMPLICIT SEQUENCE OF INTEGER    OPTIONAL,
 *     digitsPauseDuration        [1] IMPLICIT SEQUENCE OF INTEGER    OPTIONAL }
 * ```
 * 
 * @class
 */
export
class DigitsData {
    constructor (
        /**
         * @summary `digitsDetected`.
         * @public
         * @readonly
         */
        readonly digitsDetected: IA5String,
        /**
         * @summary `digitsDuration`.
         * @public
         * @readonly
         */
        readonly digitsDuration: OPTIONAL<INTEGER[]>,
        /**
         * @summary `digitsPauseDuration`.
         * @public
         * @readonly
         */
        readonly digitsPauseDuration: OPTIONAL<INTEGER[]>
    ) {}

    /**
     * @summary Restructures an object into a DigitsData
     * @description
     * 
     * This takes an `object` and converts it to a `DigitsData`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DigitsData`.
     * @returns {DigitsData}
     */
    public static _from_object (_o: { [_K in keyof (DigitsData)]: (DigitsData)[_K] }): DigitsData {
        return new DigitsData(_o.digitsDetected, _o.digitsDuration, _o.digitsPauseDuration);
    }


}

/**
 * @summary The Leading Root Component Types of DigitsData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DigitsData: $.ComponentSpec[] = [
    new $.ComponentSpec("digitsDetected", false, $.hasTag(_TagClass.universal, 22), undefined, undefined),
    new $.ComponentSpec("digitsDuration", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("digitsPauseDuration", true, $.hasTag(_TagClass.context, 1), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of DigitsData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DigitsData: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DigitsData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DigitsData: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DigitsData: $.ASN1Decoder<DigitsData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DigitsData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DigitsData (el: _Element): DigitsData {
    if (!_cached_decoder_for_DigitsData) { _cached_decoder_for_DigitsData = function (el: _Element): DigitsData {
    let digitsDetected!: IA5String;
    let digitsDuration: OPTIONAL<INTEGER[]>;
    let digitsPauseDuration: OPTIONAL<INTEGER[]>;
    const callbacks: $.DecodingMap = {
        "digitsDetected": (_el: _Element): void => { digitsDetected = $._decodeIA5String(_el); },
        "digitsDuration": (_el: _Element): void => { digitsDuration = $._decode_implicit<INTEGER[]>(() => $._decodeSequenceOf<INTEGER>(() => $._decodeInteger))(_el); },
        "digitsPauseDuration": (_el: _Element): void => { digitsPauseDuration = $._decode_implicit<INTEGER[]>(() => $._decodeSequenceOf<INTEGER>(() => $._decodeInteger))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DigitsData,
        _extension_additions_list_spec_for_DigitsData,
        _root_component_type_list_2_spec_for_DigitsData,
        undefined,
    );
    return new DigitsData(
        digitsDetected,
        digitsDuration,
        digitsPauseDuration
    );
}; }
    return _cached_decoder_for_DigitsData(el);
}

let _cached_encoder_for_DigitsData: $.ASN1Encoder<DigitsData> | null = null;

/**
 * @summary Encodes a(n) DigitsData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DigitsData, encoded as an ASN.1 Element.
 */
export
function _encode_DigitsData (value: DigitsData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DigitsData) { _cached_encoder_for_DigitsData = function (value: DigitsData, elGetter: $.ASN1Encoder<DigitsData>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeIA5String(value.digitsDetected, $.BER),
            /* IF_ABSENT  */ ((value.digitsDuration === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeSequenceOf<INTEGER>(() => $._encodeInteger, $.BER), $.BER)(value.digitsDuration, $.BER)),
            /* IF_ABSENT  */ ((value.digitsPauseDuration === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<INTEGER>(() => $._encodeInteger, $.BER), $.BER)(value.digitsPauseDuration, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DigitsData(value, elGetter);
}


/* eslint-enable */
