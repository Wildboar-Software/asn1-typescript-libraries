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
 * @summary EnvironmentalInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EnvironmentalInformation ::= SEQUENCE {
 *     exceptionalCondition    VisibleString,
 *     celsiusTemp             REAL OPTIONAL, -- temperature
 *     dBNoise                 REAL OPTIONAL, -- ambient noise
 *     lightingInfo            VisibleString OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class EnvironmentalInformation {
    constructor (
        /**
         * @summary `exceptionalCondition`.
         * @public
         * @readonly
         */
        readonly exceptionalCondition: VisibleString,
        /**
         * @summary `celsiusTemp`.
         * @public
         * @readonly
         */
        readonly celsiusTemp: OPTIONAL<REAL>,
        /**
         * @summary `dBNoise`.
         * @public
         * @readonly
         */
        readonly dBNoise: OPTIONAL<REAL>,
        /**
         * @summary `lightingInfo`.
         * @public
         * @readonly
         */
        readonly lightingInfo: OPTIONAL<VisibleString>
    ) {}

    /**
     * @summary Restructures an object into a EnvironmentalInformation
     * @description
     * 
     * This takes an `object` and converts it to a `EnvironmentalInformation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EnvironmentalInformation`.
     * @returns {EnvironmentalInformation}
     */
    public static _from_object (_o: { [_K in keyof (EnvironmentalInformation)]: (EnvironmentalInformation)[_K] }): EnvironmentalInformation {
        return new EnvironmentalInformation(_o.exceptionalCondition, _o.celsiusTemp, _o.dBNoise, _o.lightingInfo);
    }


}

/**
 * @summary The Leading Root Component Types of EnvironmentalInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EnvironmentalInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("exceptionalCondition", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("celsiusTemp", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("dBNoise", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("lightingInfo", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of EnvironmentalInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EnvironmentalInformation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EnvironmentalInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EnvironmentalInformation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EnvironmentalInformation: $.ASN1Decoder<EnvironmentalInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EnvironmentalInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EnvironmentalInformation (el: _Element): EnvironmentalInformation {
    if (!_cached_decoder_for_EnvironmentalInformation) { _cached_decoder_for_EnvironmentalInformation = function (el: _Element): EnvironmentalInformation {
    let exceptionalCondition!: VisibleString;
    let celsiusTemp: OPTIONAL<REAL>;
    let dBNoise: OPTIONAL<REAL>;
    let lightingInfo: OPTIONAL<VisibleString>;
    const callbacks: $.DecodingMap = {
        "exceptionalCondition": (_el: _Element): void => { exceptionalCondition = $._decodeVisibleString(_el); },
        "celsiusTemp": (_el: _Element): void => { celsiusTemp = $._decodeReal(_el); },
        "dBNoise": (_el: _Element): void => { dBNoise = $._decodeReal(_el); },
        "lightingInfo": (_el: _Element): void => { lightingInfo = $._decodeVisibleString(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EnvironmentalInformation,
        _extension_additions_list_spec_for_EnvironmentalInformation,
        _root_component_type_list_2_spec_for_EnvironmentalInformation,
        undefined,
    );
    return new EnvironmentalInformation(
        exceptionalCondition,
        celsiusTemp,
        dBNoise,
        lightingInfo
    );
}; }
    return _cached_decoder_for_EnvironmentalInformation(el);
}

let _cached_encoder_for_EnvironmentalInformation: $.ASN1Encoder<EnvironmentalInformation> | null = null;

/**
 * @summary Encodes a(n) EnvironmentalInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EnvironmentalInformation, encoded as an ASN.1 Element.
 */
export
function _encode_EnvironmentalInformation (value: EnvironmentalInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EnvironmentalInformation) { _cached_encoder_for_EnvironmentalInformation = function (value: EnvironmentalInformation, elGetter: $.ASN1Encoder<EnvironmentalInformation>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED  */ $._encode_implicit(_TagClass.context, 0, () => $._encodeVisibleString, $.BER)(value.exceptionalCondition, $.BER),
            /* IF_ABSENT */ ((value.celsiusTemp === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeReal, $.BER)(value.celsiusTemp, $.BER)),
            /* IF_ABSENT */ ((value.dBNoise === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeReal, $.BER)(value.dBNoise, $.BER)),
            /* IF_ABSENT */ ((value.lightingInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeVisibleString, $.BER)(value.lightingInfo, $.BER)),
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EnvironmentalInformation(value, elGetter);
}


/* eslint-enable */
