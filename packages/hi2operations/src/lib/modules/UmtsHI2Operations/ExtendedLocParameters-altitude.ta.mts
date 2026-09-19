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
 * @summary ExtendedLocParameters_altitude
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ExtendedLocParameters-altitude ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class ExtendedLocParameters_altitude {
    constructor (
        /**
         * @summary `alt`.
         * @public
         * @readonly
         */
        readonly alt: PrintableString,
        /**
         * @summary `alt_uncertainty`.
         * @public
         * @readonly
         */
        readonly alt_uncertainty: OPTIONAL<PrintableString>
    ) {}

    /**
     * @summary Restructures an object into a ExtendedLocParameters_altitude
     * @description
     * 
     * This takes an `object` and converts it to a `ExtendedLocParameters_altitude`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ExtendedLocParameters_altitude`.
     * @returns {ExtendedLocParameters_altitude}
     */
    public static _from_object (_o: { [_K in keyof (ExtendedLocParameters_altitude)]: (ExtendedLocParameters_altitude)[_K] }): ExtendedLocParameters_altitude {
        return new ExtendedLocParameters_altitude(_o.alt, _o.alt_uncertainty);
    }


}

/**
 * @summary The Leading Root Component Types of ExtendedLocParameters_altitude
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ExtendedLocParameters_altitude: $.ComponentSpec[] = [
    new $.ComponentSpec("alt", false, $.hasTag(_TagClass.universal, 19)),
    new $.ComponentSpec("alt-uncertainty", true, $.hasTag(_TagClass.universal, 19))
];

/**
 * @summary The Trailing Root Component Types of ExtendedLocParameters_altitude
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ExtendedLocParameters_altitude: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ExtendedLocParameters_altitude
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ExtendedLocParameters_altitude: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ExtendedLocParameters_altitude: $.ASN1Decoder<ExtendedLocParameters_altitude> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ExtendedLocParameters_altitude
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ExtendedLocParameters_altitude (el: _Element): ExtendedLocParameters_altitude {
    if (!_cached_decoder_for_ExtendedLocParameters_altitude) { _cached_decoder_for_ExtendedLocParameters_altitude = function (el: _Element): ExtendedLocParameters_altitude {
    let alt!: PrintableString;
    let alt_uncertainty: OPTIONAL<PrintableString>;
    const callbacks: $.DecodingMap = {
        "alt": (_el: _Element): void => { alt = $._decodePrintableString(_el); },
        "alt-uncertainty": (_el: _Element): void => { alt_uncertainty = $._decodePrintableString(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ExtendedLocParameters_altitude,
        _extension_additions_list_spec_for_ExtendedLocParameters_altitude,
        _root_component_type_list_2_spec_for_ExtendedLocParameters_altitude,
        undefined,
    );
    return new ExtendedLocParameters_altitude(
        alt,
        alt_uncertainty
    );
}; }
    return _cached_decoder_for_ExtendedLocParameters_altitude(el);
}

let _cached_encoder_for_ExtendedLocParameters_altitude: $.ASN1Encoder<ExtendedLocParameters_altitude> | null = null;

/**
 * @summary Encodes a(n) ExtendedLocParameters_altitude into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExtendedLocParameters_altitude, encoded as an ASN.1 Element.
 */
export
function _encode_ExtendedLocParameters_altitude (value: ExtendedLocParameters_altitude, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ExtendedLocParameters_altitude) { _cached_encoder_for_ExtendedLocParameters_altitude = function (value: ExtendedLocParameters_altitude, elGetter: $.ASN1Encoder<ExtendedLocParameters_altitude>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodePrintableString(value.alt, $.BER),
            /* IF_ABSENT  */ ((value.alt_uncertainty === undefined) ? undefined : $._encodePrintableString(value.alt_uncertainty, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ExtendedLocParameters_altitude(value, elGetter);
}


/* eslint-enable */
