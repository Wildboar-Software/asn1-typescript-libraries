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
 * @summary DeviationDescription
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DeviationDescription ::= SEQUENCE{
 *     description PrintableString OPTIONAL,
 *     deviationType OBJECT IDENTIFIER,
 *     parameters [0] ANY DEFINED BY deviationType OPTIONAL,
 *     nationalUse [1] ANY OPTIONAL
 *     -- The nationalUse field is for internal State use, and is not governed
 *     -- by an ICAO specification.
 * }
 * ```
 * 
 * @class
 */
export
class DeviationDescription {
    constructor (
        /**
         * @summary `description`.
         * @public
         * @readonly
         */
        readonly description: OPTIONAL<PrintableString>,
        /**
         * @summary `deviationType`.
         * @public
         * @readonly
         */
        readonly deviationType: OBJECT_IDENTIFIER,
// FIXME: readonly parameters: PrefixedType,
// FIXME: readonly nationalUse: PrefixedType
    ) {}

    /**
     * @summary Restructures an object into a DeviationDescription
     * @description
     * 
     * This takes an `object` and converts it to a `DeviationDescription`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DeviationDescription`.
     * @returns {DeviationDescription}
     */
    public static _from_object (_o: { [_K in keyof (DeviationDescription)]: (DeviationDescription)[_K] }): DeviationDescription {
        return new DeviationDescription(_o.description, _o.deviationType, _o., _o.);
    }


}

/**
 * @summary The Leading Root Component Types of DeviationDescription
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DeviationDescription: $.ComponentSpec[] = [
    new $.ComponentSpec("description", true, $.hasTag(_TagClass.universal, 19)),
    new $.ComponentSpec("deviationType", false, $.hasTag(_TagClass.universal, 6)),
    new $.ComponentSpec("parameters", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("nationalUse", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of DeviationDescription
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DeviationDescription: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DeviationDescription
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DeviationDescription: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DeviationDescription: $.ASN1Decoder<DeviationDescription> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DeviationDescription
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DeviationDescription (el: _Element): DeviationDescription {
    if (!_cached_decoder_for_DeviationDescription) { _cached_decoder_for_DeviationDescription = function (el: _Element): DeviationDescription {
    let description: OPTIONAL<PrintableString>;
    let deviationType!: OBJECT_IDENTIFIER;
    let parameters: OPTIONAL</* FIXME: parameters COULD_NOT_COMPILE_TYPE */>;
    let nationalUse: OPTIONAL</* FIXME: nationalUse COULD_NOT_COMPILE_TYPE */>;
    const callbacks: $.DecodingMap = {
        "description": (_el: _Element): void => { description = $._decodePrintableString(_el); },
        "deviationType": (_el: _Element): void => { deviationType = $._decodeObjectIdentifier(_el); },
        "parameters": (_el: _Element): void => { parameters = /* FIXME: COULD_NOT_COMPILE_TYPE_DECODER */ },
        "nationalUse": (_el: _Element): void => { nationalUse = /* FIXME: COULD_NOT_COMPILE_TYPE_DECODER */ }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DeviationDescription,
        _extension_additions_list_spec_for_DeviationDescription,
        _root_component_type_list_2_spec_for_DeviationDescription,
        undefined,
    );
    return new DeviationDescription(
        description,
        deviationType,
        parameters,
        nationalUse
    );
}; }
    return _cached_decoder_for_DeviationDescription(el);
}

let _cached_encoder_for_DeviationDescription: $.ASN1Encoder<DeviationDescription> | null = null;

/**
 * @summary Encodes a(n) DeviationDescription into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeviationDescription, encoded as an ASN.1 Element.
 */
export
function _encode_DeviationDescription (value: DeviationDescription, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DeviationDescription) { _cached_encoder_for_DeviationDescription = function (value: DeviationDescription, elGetter: $.ASN1Encoder<DeviationDescription>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.description === undefined) ? undefined : $._encodePrintableString(value.description, $.BER)),
            /* REQUIRED   */ $._encodeObjectIdentifier(value.deviationType, $.BER),
            /* IF_ABSENT  */ ((value.parameters === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeAny, $.BER)(value.parameters, $.BER)),
            /* IF_ABSENT  */ ((value.nationalUse === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeAny, $.BER)(value.nationalUse, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DeviationDescription(value, elGetter);
}


/* eslint-enable */
