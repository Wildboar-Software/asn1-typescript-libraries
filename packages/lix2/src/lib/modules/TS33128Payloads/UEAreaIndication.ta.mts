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
 * @summary UEAreaIndication
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UEAreaIndication ::= SEQUENCE
 * {
 *     country                      [1] UTF8String (SIZE(2)) OPTIONAL,
 *     internationalAreaIndication  [2] BOOLEAN OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class UEAreaIndication {
    constructor (
        /**
         * @summary `country`.
         * @public
         * @readonly
         */
        readonly country: OPTIONAL<UTF8String>,
        /**
         * @summary `internationalAreaIndication`.
         * @public
         * @readonly
         */
        readonly internationalAreaIndication: OPTIONAL<BOOLEAN>
    ) {}

    /**
     * @summary Restructures an object into a UEAreaIndication
     * @description
     * 
     * This takes an `object` and converts it to a `UEAreaIndication`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UEAreaIndication`.
     * @returns {UEAreaIndication}
     */
    public static _from_object (_o: { [_K in keyof (UEAreaIndication)]: (UEAreaIndication)[_K] }): UEAreaIndication {
        return new UEAreaIndication(_o.country, _o.internationalAreaIndication);
    }


}

/**
 * @summary The Leading Root Component Types of UEAreaIndication
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_UEAreaIndication: $.ComponentSpec[] = [
    new $.ComponentSpec("country", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("internationalAreaIndication", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of UEAreaIndication
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_UEAreaIndication: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of UEAreaIndication
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_UEAreaIndication: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_UEAreaIndication: $.ASN1Decoder<UEAreaIndication> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UEAreaIndication
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UEAreaIndication (el: _Element): UEAreaIndication {
    if (!_cached_decoder_for_UEAreaIndication) { _cached_decoder_for_UEAreaIndication = function (el: _Element): UEAreaIndication {
    let country: OPTIONAL<UTF8String>;
    let internationalAreaIndication: OPTIONAL<BOOLEAN>;
    const callbacks: $.DecodingMap = {
        "country": (_el: _Element): void => { country = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "internationalAreaIndication": (_el: _Element): void => { internationalAreaIndication = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_UEAreaIndication,
        _extension_additions_list_spec_for_UEAreaIndication,
        _root_component_type_list_2_spec_for_UEAreaIndication,
        undefined,
    );
    return new UEAreaIndication(
        country,
        internationalAreaIndication
    );
}; }
    return _cached_decoder_for_UEAreaIndication(el);
}

let _cached_encoder_for_UEAreaIndication: $.ASN1Encoder<UEAreaIndication> | null = null;

/**
 * @summary Encodes a(n) UEAreaIndication into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UEAreaIndication, encoded as an ASN.1 Element.
 */
export
function _encode_UEAreaIndication (value: UEAreaIndication, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UEAreaIndication) { _cached_encoder_for_UEAreaIndication = function (value: UEAreaIndication, elGetter: $.ASN1Encoder<UEAreaIndication>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.country === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeUTF8String, $.BER)(value.country, $.BER)),
            /* IF_ABSENT  */ ((value.internationalAreaIndication === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeBoolean, $.BER)(value.internationalAreaIndication, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_UEAreaIndication(value, elGetter);
}


/* eslint-enable */
