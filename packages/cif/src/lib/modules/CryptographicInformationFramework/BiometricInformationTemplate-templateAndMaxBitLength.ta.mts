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
 * @summary BiometricInformationTemplate_templateAndMaxBitLength
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BiometricInformationTemplate-templateAndMaxBitLength ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class BiometricInformationTemplate_templateAndMaxBitLength {
    constructor (
        /**
         * @summary `maxBITLength`.
         * @public
         * @readonly
         */
        readonly maxBITLength: OPTIONAL<INTEGER>,
        /**
         * @summary `biometricInformationTemplate`.
         * @public
         * @readonly
         */
        readonly biometricInformationTemplate: OCTET_STRING
    ) {}

    /**
     * @summary Restructures an object into a BiometricInformationTemplate_templateAndMaxBitLength
     * @description
     * 
     * This takes an `object` and converts it to a `BiometricInformationTemplate_templateAndMaxBitLength`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `BiometricInformationTemplate_templateAndMaxBitLength`.
     * @returns {BiometricInformationTemplate_templateAndMaxBitLength}
     */
    public static _from_object (_o: { [_K in keyof (BiometricInformationTemplate_templateAndMaxBitLength)]: (BiometricInformationTemplate_templateAndMaxBitLength)[_K] }): BiometricInformationTemplate_templateAndMaxBitLength {
        return new BiometricInformationTemplate_templateAndMaxBitLength(_o.maxBITLength, _o.biometricInformationTemplate);
    }


}

/**
 * @summary The Leading Root Component Types of BiometricInformationTemplate_templateAndMaxBitLength
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_BiometricInformationTemplate_templateAndMaxBitLength: $.ComponentSpec[] = [
    new $.ComponentSpec("maxBITLength", true, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("biometricInformationTemplate", false, $.hasTag(_TagClass.universal, 4))
];

/**
 * @summary The Trailing Root Component Types of BiometricInformationTemplate_templateAndMaxBitLength
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_BiometricInformationTemplate_templateAndMaxBitLength: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of BiometricInformationTemplate_templateAndMaxBitLength
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_BiometricInformationTemplate_templateAndMaxBitLength: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_BiometricInformationTemplate_templateAndMaxBitLength: $.ASN1Decoder<BiometricInformationTemplate_templateAndMaxBitLength> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BiometricInformationTemplate_templateAndMaxBitLength
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BiometricInformationTemplate_templateAndMaxBitLength (el: _Element): BiometricInformationTemplate_templateAndMaxBitLength {
    if (!_cached_decoder_for_BiometricInformationTemplate_templateAndMaxBitLength) { _cached_decoder_for_BiometricInformationTemplate_templateAndMaxBitLength = function (el: _Element): BiometricInformationTemplate_templateAndMaxBitLength {
    let maxBITLength: OPTIONAL<INTEGER>;
    let biometricInformationTemplate!: OCTET_STRING;
    const callbacks: $.DecodingMap = {
        "maxBITLength": (_el: _Element): void => { maxBITLength = $._decodeInteger(_el); },
        "biometricInformationTemplate": (_el: _Element): void => { biometricInformationTemplate = $._decodeOctetString(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_BiometricInformationTemplate_templateAndMaxBitLength,
        _extension_additions_list_spec_for_BiometricInformationTemplate_templateAndMaxBitLength,
        _root_component_type_list_2_spec_for_BiometricInformationTemplate_templateAndMaxBitLength,
        undefined,
    );
    return new BiometricInformationTemplate_templateAndMaxBitLength(
        maxBITLength,
        biometricInformationTemplate
    );
}; }
    return _cached_decoder_for_BiometricInformationTemplate_templateAndMaxBitLength(el);
}

let _cached_encoder_for_BiometricInformationTemplate_templateAndMaxBitLength: $.ASN1Encoder<BiometricInformationTemplate_templateAndMaxBitLength> | null = null;

/**
 * @summary Encodes a(n) BiometricInformationTemplate_templateAndMaxBitLength into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BiometricInformationTemplate_templateAndMaxBitLength, encoded as an ASN.1 Element.
 */
export
function _encode_BiometricInformationTemplate_templateAndMaxBitLength (value: BiometricInformationTemplate_templateAndMaxBitLength, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BiometricInformationTemplate_templateAndMaxBitLength) { _cached_encoder_for_BiometricInformationTemplate_templateAndMaxBitLength = function (value: BiometricInformationTemplate_templateAndMaxBitLength, elGetter: $.ASN1Encoder<BiometricInformationTemplate_templateAndMaxBitLength>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.maxBITLength === undefined) ? undefined : $._encodeInteger(value.maxBITLength, $.BER)),
            /* REQUIRED   */ $._encodeOctetString(value.biometricInformationTemplate, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_BiometricInformationTemplate_templateAndMaxBitLength(value, elGetter);
}


/* eslint-enable */
