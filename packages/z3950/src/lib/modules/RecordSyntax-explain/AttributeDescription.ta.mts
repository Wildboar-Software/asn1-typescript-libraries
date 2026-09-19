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
 * @summary AttributeDescription
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AttributeDescription ::= SEQUENCE {
 *          name                   [0] IMPLICIT InternationalString OPTIONAL,
 *          description            [1] IMPLICIT HumanString OPTIONAL,
 *          attributeValue         [2] StringOrNumeric,
 *          equivalentAttributes   [3] IMPLICIT SEQUENCE OF StringOrNumeric
 *                                                  OPTIONAL
 *                                        -- each is an occurence of
 *                                        -- 'attributeValue' from
 *                                        --AttributeDescription for a
 *                                        -- different attribute. Equivalences
 *                                        -- listed here should be derived from the
 *                                        -- attribute set definition, not from a
 *                                        -- particular server's behavior.  
 *                               }
 * ```
 * 
 * @class
 */
export
class AttributeDescription {
    constructor (
        /**
         * @summary `name`.
         * @public
         * @readonly
         */
        readonly name: OPTIONAL<InternationalString>,
        /**
         * @summary `description`.
         * @public
         * @readonly
         */
        readonly description: OPTIONAL<HumanString>,
        /**
         * @summary `attributeValue`.
         * @public
         * @readonly
         */
        readonly attributeValue: StringOrNumeric,
        /**
         * @summary `equivalentAttributes`.
         * @public
         * @readonly
         */
        readonly equivalentAttributes: OPTIONAL<StringOrNumeric[]>
    ) {}

    /**
     * @summary Restructures an object into a AttributeDescription
     * @description
     * 
     * This takes an `object` and converts it to a `AttributeDescription`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AttributeDescription`.
     * @returns {AttributeDescription}
     */
    public static _from_object (_o: { [_K in keyof (AttributeDescription)]: (AttributeDescription)[_K] }): AttributeDescription {
        return new AttributeDescription(_o.name, _o.description, _o.attributeValue, _o.equivalentAttributes);
    }


}

/**
 * @summary The Leading Root Component Types of AttributeDescription
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AttributeDescription: $.ComponentSpec[] = [
    /* FIXME: name COULD_NOT_RESOLVE_TYPE_DEF */,
    new $.ComponentSpec("description", true, $.hasTag(_TagClass.context, 1)),
    /* FIXME: attributeValue COULD_NOT_RESOLVE_TYPE_DEF */,
    new $.ComponentSpec("equivalentAttributes", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of AttributeDescription
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AttributeDescription: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AttributeDescription
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AttributeDescription: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AttributeDescription: $.ASN1Decoder<AttributeDescription> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AttributeDescription
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AttributeDescription (el: _Element): AttributeDescription {
    if (!_cached_decoder_for_AttributeDescription) { _cached_decoder_for_AttributeDescription = function (el: _Element): AttributeDescription {
    let name: OPTIONAL<InternationalString>;
    let description: OPTIONAL<HumanString>;
    let attributeValue!: StringOrNumeric;
    let equivalentAttributes: OPTIONAL<StringOrNumeric[]>;
    const callbacks: $.DecodingMap = {
        "name": (_el: _Element): void => { name = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); },
        "description": (_el: _Element): void => { description = $._decode_implicit<HumanString>(() => _decode_HumanString)(_el); },
        "attributeValue": (_el: _Element): void => { attributeValue = $._decode_explicit<StringOrNumeric>(() => _decode_StringOrNumeric)(_el); },
        "equivalentAttributes": (_el: _Element): void => { equivalentAttributes = $._decode_implicit<StringOrNumeric[]>(() => $._decodeSequenceOf<StringOrNumeric>(() => _decode_StringOrNumeric))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AttributeDescription,
        _extension_additions_list_spec_for_AttributeDescription,
        _root_component_type_list_2_spec_for_AttributeDescription,
        undefined,
    );
    return new AttributeDescription(
        name,
        description,
        attributeValue,
        equivalentAttributes
    );
}; }
    return _cached_decoder_for_AttributeDescription(el);
}

let _cached_encoder_for_AttributeDescription: $.ASN1Encoder<AttributeDescription> | null = null;

/**
 * @summary Encodes a(n) AttributeDescription into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeDescription, encoded as an ASN.1 Element.
 */
export
function _encode_AttributeDescription (value: AttributeDescription, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AttributeDescription) { _cached_encoder_for_AttributeDescription = function (value: AttributeDescription, elGetter: $.ASN1Encoder<AttributeDescription>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.name === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_InternationalString, $.BER)(value.name, $.BER)),
            /* IF_ABSENT  */ ((value.description === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_HumanString, $.BER)(value.description, $.BER)),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_StringOrNumeric, $.BER)(value.attributeValue, $.BER),
            /* IF_ABSENT  */ ((value.equivalentAttributes === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeSequenceOf<StringOrNumeric>(() => _encode_StringOrNumeric, $.BER), $.BER)(value.equivalentAttributes, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AttributeDescription(value, elGetter);
}


/* eslint-enable */
