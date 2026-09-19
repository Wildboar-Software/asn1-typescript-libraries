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
 * @summary AttributeValue
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AttributeValue ::= SEQUENCE {
 *   value            [0] StringOrNumeric,
 *   description      [1] IMPLICIT HumanString OPTIONAL,
 *   subAttributes    [2] IMPLICIT SEQUENCE OF StringOrNumeric OPTIONAL,
 *   superAttributes  [3] IMPLICIT SEQUENCE OF StringOrNumeric OPTIONAL,
 *   partialSupport   [4] IMPLICIT NULL OPTIONAL 
 *                           -- partialSupport indicates that an attributeValue is
 *                           -- accepted, but may not be processed in the
 *                           -- "expected" way. One important reason for this is
 *                           -- composite databases: in this case partialSupport
 *                           -- may indicate that only some of the subDbs support
 *                           -- the attribute, and others ignore it.
 *                       }
 * ```
 * 
 * @class
 */
export
class AttributeValue {
    constructor (
        /**
         * @summary `value`.
         * @public
         * @readonly
         */
        readonly value: StringOrNumeric,
        /**
         * @summary `description`.
         * @public
         * @readonly
         */
        readonly description: OPTIONAL<HumanString>,
        /**
         * @summary `subAttributes`.
         * @public
         * @readonly
         */
        readonly subAttributes: OPTIONAL<StringOrNumeric[]>,
        /**
         * @summary `superAttributes`.
         * @public
         * @readonly
         */
        readonly superAttributes: OPTIONAL<StringOrNumeric[]>,
        /**
         * @summary `partialSupport`.
         * @public
         * @readonly
         */
        readonly partialSupport: OPTIONAL<NULL>
    ) {}

    /**
     * @summary Restructures an object into a AttributeValue
     * @description
     * 
     * This takes an `object` and converts it to a `AttributeValue`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AttributeValue`.
     * @returns {AttributeValue}
     */
    public static _from_object (_o: { [_K in keyof (AttributeValue)]: (AttributeValue)[_K] }): AttributeValue {
        return new AttributeValue(_o.value, _o.description, _o.subAttributes, _o.superAttributes, _o.partialSupport);
    }


}

/**
 * @summary The Leading Root Component Types of AttributeValue
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AttributeValue: $.ComponentSpec[] = [
    /* FIXME: value COULD_NOT_RESOLVE_TYPE_DEF */,
    new $.ComponentSpec("description", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("subAttributes", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("superAttributes", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("partialSupport", true, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of AttributeValue
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AttributeValue: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AttributeValue
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AttributeValue: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AttributeValue: $.ASN1Decoder<AttributeValue> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AttributeValue
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AttributeValue (el: _Element): AttributeValue {
    if (!_cached_decoder_for_AttributeValue) { _cached_decoder_for_AttributeValue = function (el: _Element): AttributeValue {
    let value!: StringOrNumeric;
    let description: OPTIONAL<HumanString>;
    let subAttributes: OPTIONAL<StringOrNumeric[]>;
    let superAttributes: OPTIONAL<StringOrNumeric[]>;
    let partialSupport: OPTIONAL<NULL>;
    const callbacks: $.DecodingMap = {
        "value": (_el: _Element): void => { value = $._decode_explicit<StringOrNumeric>(() => _decode_StringOrNumeric)(_el); },
        "description": (_el: _Element): void => { description = $._decode_implicit<HumanString>(() => _decode_HumanString)(_el); },
        "subAttributes": (_el: _Element): void => { subAttributes = $._decode_implicit<StringOrNumeric[]>(() => $._decodeSequenceOf<StringOrNumeric>(() => _decode_StringOrNumeric))(_el); },
        "superAttributes": (_el: _Element): void => { superAttributes = $._decode_implicit<StringOrNumeric[]>(() => $._decodeSequenceOf<StringOrNumeric>(() => _decode_StringOrNumeric))(_el); },
        "partialSupport": (_el: _Element): void => { partialSupport = $._decode_implicit<NULL>(() => $._decodeNull)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AttributeValue,
        _extension_additions_list_spec_for_AttributeValue,
        _root_component_type_list_2_spec_for_AttributeValue,
        undefined,
    );
    return new AttributeValue(
        value,
        description,
        subAttributes,
        superAttributes,
        partialSupport
    );
}; }
    return _cached_decoder_for_AttributeValue(el);
}

let _cached_encoder_for_AttributeValue: $.ASN1Encoder<AttributeValue> | null = null;

/**
 * @summary Encodes a(n) AttributeValue into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeValue, encoded as an ASN.1 Element.
 */
export
function _encode_AttributeValue (value: AttributeValue, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AttributeValue) { _cached_encoder_for_AttributeValue = function (value: AttributeValue, elGetter: $.ASN1Encoder<AttributeValue>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_StringOrNumeric, $.BER)(value.value, $.BER),
            /* IF_ABSENT  */ ((value.description === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_HumanString, $.BER)(value.description, $.BER)),
            /* IF_ABSENT  */ ((value.subAttributes === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<StringOrNumeric>(() => _encode_StringOrNumeric, $.BER), $.BER)(value.subAttributes, $.BER)),
            /* IF_ABSENT  */ ((value.superAttributes === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeSequenceOf<StringOrNumeric>(() => _encode_StringOrNumeric, $.BER), $.BER)(value.superAttributes, $.BER)),
            /* IF_ABSENT  */ ((value.partialSupport === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => $._encodeNull, $.BER)(value.partialSupport, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AttributeValue(value, elGetter);
}


/* eslint-enable */
