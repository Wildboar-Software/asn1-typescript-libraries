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
 * @summary DiagFormat_attCombo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiagFormat-attCombo ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class DiagFormat_attCombo {
    constructor (
        /**
         * @summary `unsupportedCombination`.
         * @public
         * @readonly
         */
        readonly unsupportedCombination: AttributeList,
        /**
         * @summary `recommendedAlternatives`.
         * @public
         * @readonly
         */
        readonly recommendedAlternatives: OPTIONAL<AttributeList[]>
    ) {}

    /**
     * @summary Restructures an object into a DiagFormat_attCombo
     * @description
     * 
     * This takes an `object` and converts it to a `DiagFormat_attCombo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DiagFormat_attCombo`.
     * @returns {DiagFormat_attCombo}
     */
    public static _from_object (_o: { [_K in keyof (DiagFormat_attCombo)]: (DiagFormat_attCombo)[_K] }): DiagFormat_attCombo {
        return new DiagFormat_attCombo(_o.unsupportedCombination, _o.recommendedAlternatives);
    }


}

/**
 * @summary The Leading Root Component Types of DiagFormat_attCombo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DiagFormat_attCombo: $.ComponentSpec[] = [
    /* FIXME: unsupportedCombination COULD_NOT_RESOLVE_TYPE_DEF */,
    new $.ComponentSpec("recommendedAlternatives", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of DiagFormat_attCombo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DiagFormat_attCombo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DiagFormat_attCombo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DiagFormat_attCombo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DiagFormat_attCombo: $.ASN1Decoder<DiagFormat_attCombo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DiagFormat_attCombo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DiagFormat_attCombo (el: _Element): DiagFormat_attCombo {
    if (!_cached_decoder_for_DiagFormat_attCombo) { _cached_decoder_for_DiagFormat_attCombo = function (el: _Element): DiagFormat_attCombo {
    let unsupportedCombination!: AttributeList;
    let recommendedAlternatives: OPTIONAL<AttributeList[]>;
    const callbacks: $.DecodingMap = {
        "unsupportedCombination": (_el: _Element): void => { unsupportedCombination = $._decode_implicit<AttributeList>(() => _decode_AttributeList)(_el); },
        "recommendedAlternatives": (_el: _Element): void => { recommendedAlternatives = $._decode_implicit<AttributeList[]>(() => $._decodeSequenceOf<AttributeList>(() => _decode_AttributeList))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DiagFormat_attCombo,
        _extension_additions_list_spec_for_DiagFormat_attCombo,
        _root_component_type_list_2_spec_for_DiagFormat_attCombo,
        undefined,
    );
    return new DiagFormat_attCombo(
        unsupportedCombination,
        recommendedAlternatives
    );
}; }
    return _cached_decoder_for_DiagFormat_attCombo(el);
}

let _cached_encoder_for_DiagFormat_attCombo: $.ASN1Encoder<DiagFormat_attCombo> | null = null;

/**
 * @summary Encodes a(n) DiagFormat_attCombo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DiagFormat_attCombo, encoded as an ASN.1 Element.
 */
export
function _encode_DiagFormat_attCombo (value: DiagFormat_attCombo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DiagFormat_attCombo) { _cached_encoder_for_DiagFormat_attCombo = function (value: DiagFormat_attCombo, elGetter: $.ASN1Encoder<DiagFormat_attCombo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_AttributeList, $.BER)(value.unsupportedCombination, $.BER),
            /* IF_ABSENT  */ ((value.recommendedAlternatives === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<AttributeList>(() => _encode_AttributeList, $.BER), $.BER)(value.recommendedAlternatives, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DiagFormat_attCombo(value, elGetter);
}


/* eslint-enable */
