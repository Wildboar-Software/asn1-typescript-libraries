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
import { AttributeDescription, _decode_AttributeDescription, _encode_AttributeDescription } from "../RecordSyntax-explain/AttributeDescription.ta.mjs";
// export { AttributeDescription, _decode_AttributeDescription, _encode_AttributeDescription } from "../RecordSyntax-explain/AttributeDescription.ta.mjs";


/**
 * @summary AttributeType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AttributeType ::= SEQUENCE {
 *          name             [0] IMPLICIT InternationalString OPTIONAL,
 *          description      [1] IMPLICIT HumanString OPTIONAL,
 *          attributeType    [2] IMPLICIT INTEGER,
 *          attributeValues  [3] IMPLICIT SEQUENCE OF AttributeDescription}
 * ```
 * 
 * @class
 */
export
class AttributeType {
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
         * @summary `attributeType`.
         * @public
         * @readonly
         */
        readonly attributeType: INTEGER,
        /**
         * @summary `attributeValues`.
         * @public
         * @readonly
         */
        readonly attributeValues: AttributeDescription[]
    ) {}

    /**
     * @summary Restructures an object into a AttributeType
     * @description
     * 
     * This takes an `object` and converts it to a `AttributeType`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AttributeType`.
     * @returns {AttributeType}
     */
    public static _from_object (_o: { [_K in keyof (AttributeType)]: (AttributeType)[_K] }): AttributeType {
        return new AttributeType(_o.name, _o.description, _o.attributeType, _o.attributeValues);
    }


}

/**
 * @summary The Leading Root Component Types of AttributeType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AttributeType: $.ComponentSpec[] = [
    /* FIXME: name COULD_NOT_RESOLVE_TYPE_DEF */,
    new $.ComponentSpec("description", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("attributeType", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("attributeValues", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of AttributeType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AttributeType: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AttributeType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AttributeType: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AttributeType: $.ASN1Decoder<AttributeType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AttributeType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AttributeType (el: _Element): AttributeType {
    if (!_cached_decoder_for_AttributeType) { _cached_decoder_for_AttributeType = function (el: _Element): AttributeType {
    let name: OPTIONAL<InternationalString>;
    let description: OPTIONAL<HumanString>;
    let attributeType!: INTEGER;
    let attributeValues!: AttributeDescription[];
    const callbacks: $.DecodingMap = {
        "name": (_el: _Element): void => { name = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); },
        "description": (_el: _Element): void => { description = $._decode_implicit<HumanString>(() => _decode_HumanString)(_el); },
        "attributeType": (_el: _Element): void => { attributeType = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "attributeValues": (_el: _Element): void => { attributeValues = $._decode_implicit<AttributeDescription[]>(() => $._decodeSequenceOf<AttributeDescription>(() => _decode_AttributeDescription))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AttributeType,
        _extension_additions_list_spec_for_AttributeType,
        _root_component_type_list_2_spec_for_AttributeType,
        undefined,
    );
    return new AttributeType(
        name,
        description,
        attributeType,
        attributeValues
    );
}; }
    return _cached_decoder_for_AttributeType(el);
}

let _cached_encoder_for_AttributeType: $.ASN1Encoder<AttributeType> | null = null;

/**
 * @summary Encodes a(n) AttributeType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeType, encoded as an ASN.1 Element.
 */
export
function _encode_AttributeType (value: AttributeType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AttributeType) { _cached_encoder_for_AttributeType = function (value: AttributeType, elGetter: $.ASN1Encoder<AttributeType>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.name === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_InternationalString, $.BER)(value.name, $.BER)),
            /* IF_ABSENT  */ ((value.description === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_HumanString, $.BER)(value.description, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.attributeType, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeSequenceOf<AttributeDescription>(() => _encode_AttributeDescription, $.BER), $.BER)(value.attributeValues, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AttributeType(value, elGetter);
}


/* eslint-enable */
