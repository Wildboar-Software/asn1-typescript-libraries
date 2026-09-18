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
 * @summary ExpressionPointDETCurve
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ExpressionPointDETCurve ::= SEQUENCE {
 *     threshold   REAL OPTIONAL, -- 0 for unavailable, -1 for unknown
 *     typeIError  REAL,
 *     typeIIError REAL
 * }
 * ```
 * 
 * @class
 */
export
class ExpressionPointDETCurve {
    constructor (
        /**
         * @summary `threshold`.
         * @public
         * @readonly
         */
        readonly threshold: OPTIONAL<REAL>,
        /**
         * @summary `typeIError`.
         * @public
         * @readonly
         */
        readonly typeIError: REAL,
        /**
         * @summary `typeIIError`.
         * @public
         * @readonly
         */
        readonly typeIIError: REAL
    ) {}

    /**
     * @summary Restructures an object into a ExpressionPointDETCurve
     * @description
     * 
     * This takes an `object` and converts it to a `ExpressionPointDETCurve`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ExpressionPointDETCurve`.
     * @returns {ExpressionPointDETCurve}
     */
    public static _from_object (_o: { [_K in keyof (ExpressionPointDETCurve)]: (ExpressionPointDETCurve)[_K] }): ExpressionPointDETCurve {
        return new ExpressionPointDETCurve(_o.threshold, _o.typeIError, _o.typeIIError);
    }


}

/**
 * @summary The Leading Root Component Types of ExpressionPointDETCurve
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ExpressionPointDETCurve: $.ComponentSpec[] = [
    new $.ComponentSpec("threshold", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("typeIError", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("typeIIError", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of ExpressionPointDETCurve
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ExpressionPointDETCurve: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ExpressionPointDETCurve
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ExpressionPointDETCurve: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ExpressionPointDETCurve: $.ASN1Decoder<ExpressionPointDETCurve> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ExpressionPointDETCurve
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ExpressionPointDETCurve (el: _Element): ExpressionPointDETCurve {
    if (!_cached_decoder_for_ExpressionPointDETCurve) { _cached_decoder_for_ExpressionPointDETCurve = function (el: _Element): ExpressionPointDETCurve {
    let threshold: OPTIONAL<REAL>;
    let typeIError!: REAL;
    let typeIIError!: REAL;
    const callbacks: $.DecodingMap = {
        "threshold": (_el: _Element): void => { threshold = $._decodeReal(_el); },
        "typeIError": (_el: _Element): void => { typeIError = $._decodeReal(_el); },
        "typeIIError": (_el: _Element): void => { typeIIError = $._decodeReal(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ExpressionPointDETCurve,
        _extension_additions_list_spec_for_ExpressionPointDETCurve,
        _root_component_type_list_2_spec_for_ExpressionPointDETCurve,
        undefined,
    );
    return new ExpressionPointDETCurve(
        threshold,
        typeIError,
        typeIIError
    );
}; }
    return _cached_decoder_for_ExpressionPointDETCurve(el);
}

let _cached_encoder_for_ExpressionPointDETCurve: $.ASN1Encoder<ExpressionPointDETCurve> | null = null;

/**
 * @summary Encodes a(n) ExpressionPointDETCurve into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExpressionPointDETCurve, encoded as an ASN.1 Element.
 */
export
function _encode_ExpressionPointDETCurve (value: ExpressionPointDETCurve, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ExpressionPointDETCurve) { _cached_encoder_for_ExpressionPointDETCurve = function (value: ExpressionPointDETCurve, elGetter: $.ASN1Encoder<ExpressionPointDETCurve>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT */ ((value.threshold === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeReal, $.BER)(value.threshold, $.BER)),
            /* REQUIRED  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeReal, $.BER)(value.typeIError, $.BER),
            /* REQUIRED  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeReal, $.BER)(value.typeIIError, $.BER),
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ExpressionPointDETCurve(value, elGetter);
}


/* eslint-enable */
