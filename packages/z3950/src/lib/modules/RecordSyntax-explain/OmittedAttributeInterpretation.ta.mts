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
import { HumanString, _decode_HumanString, _encode_HumanString } from "../RecordSyntax-explain/HumanString.ta.mjs";
// export { HumanString, _decode_HumanString, _encode_HumanString } from "../RecordSyntax-explain/HumanString.ta.mjs";


/**
 * @summary OmittedAttributeInterpretation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OmittedAttributeInterpretation ::= SEQUENCE {
 *       defaultValue           [0] StringOrNumeric OPTIONAL,
 *                                    -- A default value is listed if that's how
 *                                    -- the server works
 *       defaultDescription     [1] IMPLICIT HumanString OPTIONAL }
 * ```
 * 
 * @class
 */
export
class OmittedAttributeInterpretation {
    constructor (
        /**
         * @summary `defaultValue`.
         * @public
         * @readonly
         */
        readonly defaultValue: OPTIONAL<StringOrNumeric>,
        /**
         * @summary `defaultDescription`.
         * @public
         * @readonly
         */
        readonly defaultDescription: OPTIONAL<HumanString>
    ) {}

    /**
     * @summary Restructures an object into a OmittedAttributeInterpretation
     * @description
     * 
     * This takes an `object` and converts it to a `OmittedAttributeInterpretation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `OmittedAttributeInterpretation`.
     * @returns {OmittedAttributeInterpretation}
     */
    public static _from_object (_o: { [_K in keyof (OmittedAttributeInterpretation)]: (OmittedAttributeInterpretation)[_K] }): OmittedAttributeInterpretation {
        return new OmittedAttributeInterpretation(_o.defaultValue, _o.defaultDescription);
    }


}

/**
 * @summary The Leading Root Component Types of OmittedAttributeInterpretation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_OmittedAttributeInterpretation: $.ComponentSpec[] = [
    /* FIXME: defaultValue COULD_NOT_RESOLVE_TYPE_DEF */,
    new $.ComponentSpec("defaultDescription", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of OmittedAttributeInterpretation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_OmittedAttributeInterpretation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of OmittedAttributeInterpretation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_OmittedAttributeInterpretation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_OmittedAttributeInterpretation: $.ASN1Decoder<OmittedAttributeInterpretation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OmittedAttributeInterpretation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_OmittedAttributeInterpretation (el: _Element): OmittedAttributeInterpretation {
    if (!_cached_decoder_for_OmittedAttributeInterpretation) { _cached_decoder_for_OmittedAttributeInterpretation = function (el: _Element): OmittedAttributeInterpretation {
    let defaultValue: OPTIONAL<StringOrNumeric>;
    let defaultDescription: OPTIONAL<HumanString>;
    const callbacks: $.DecodingMap = {
        "defaultValue": (_el: _Element): void => { defaultValue = $._decode_explicit<StringOrNumeric>(() => _decode_StringOrNumeric)(_el); },
        "defaultDescription": (_el: _Element): void => { defaultDescription = $._decode_implicit<HumanString>(() => _decode_HumanString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_OmittedAttributeInterpretation,
        _extension_additions_list_spec_for_OmittedAttributeInterpretation,
        _root_component_type_list_2_spec_for_OmittedAttributeInterpretation,
        undefined,
    );
    return new OmittedAttributeInterpretation(
        defaultValue,
        defaultDescription
    );
}; }
    return _cached_decoder_for_OmittedAttributeInterpretation(el);
}

let _cached_encoder_for_OmittedAttributeInterpretation: $.ASN1Encoder<OmittedAttributeInterpretation> | null = null;

/**
 * @summary Encodes a(n) OmittedAttributeInterpretation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OmittedAttributeInterpretation, encoded as an ASN.1 Element.
 */
export
function _encode_OmittedAttributeInterpretation (value: OmittedAttributeInterpretation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_OmittedAttributeInterpretation) { _cached_encoder_for_OmittedAttributeInterpretation = function (value: OmittedAttributeInterpretation, elGetter: $.ASN1Encoder<OmittedAttributeInterpretation>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.defaultValue === undefined) ? undefined : $._encode_explicit(_TagClass.context, 0, () => _encode_StringOrNumeric, $.BER)(value.defaultValue, $.BER)),
            /* IF_ABSENT  */ ((value.defaultDescription === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_HumanString, $.BER)(value.defaultDescription, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_OmittedAttributeInterpretation(value, elGetter);
}


/* eslint-enable */
