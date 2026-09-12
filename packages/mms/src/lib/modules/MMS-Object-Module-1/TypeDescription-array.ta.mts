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
import { Unsigned32, _decode_Unsigned32, _encode_Unsigned32 } from "../ISO-9506-MMS-1/Unsigned32.ta.mjs";
// export { Unsigned32, _decode_Unsigned32, _encode_Unsigned32 } from "../ISO-9506-MMS-1/Unsigned32.ta.mjs";
import { TypeSpecification, _decode_TypeSpecification, _encode_TypeSpecification } from "../ISO-9506-MMS-1/TypeSpecification.ta.mjs";
// export { TypeSpecification, _decode_TypeSpecification, _encode_TypeSpecification } from "../ISO-9506-MMS-1/TypeSpecification.ta.mjs";


/**
 * @summary TypeDescription_array
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TypeDescription-array ::= SEQUENCE {
 *     packed [0] IMPLICIT BOOLEAN DEFAULT FALSE,
 *     numberOfElements [1] IMPLICIT Unsigned32,
 *     elementType [2] TypeSpecification
 * }
 * ```
 * 
 * @class
 */
export
class TypeDescription_array {
    constructor (
        /**
         * @summary `packed`.
         * @public
         * @readonly
         */
        readonly packed: OPTIONAL<BOOLEAN>,
        /**
         * @summary `numberOfElements`.
         * @public
         * @readonly
         */
        readonly numberOfElements: Unsigned32,
        /**
         * @summary `elementType`.
         * @public
         * @readonly
         */
        readonly elementType: TypeSpecification
    ) {}

    /**
     * @summary Restructures an object into a TypeDescription_array
     * @description
     * 
     * This takes an `object` and converts it to a `TypeDescription_array`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TypeDescription_array`.
     * @returns {TypeDescription_array}
     */
    public static _from_object (_o: { [_K in keyof (TypeDescription_array)]: (TypeDescription_array)[_K] }): TypeDescription_array {
        return new TypeDescription_array(_o.packed, _o.numberOfElements, _o.elementType);
    }

    /**
     * @summary Getter that returns the default value for `packed`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_packed () { return false; }
}

/**
 * @summary The Leading Root Component Types of TypeDescription_array
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TypeDescription_array: $.ComponentSpec[] = [
    new $.ComponentSpec("packed", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("numberOfElements", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("elementType", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of TypeDescription_array
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TypeDescription_array: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TypeDescription_array
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TypeDescription_array: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TypeDescription_array: $.ASN1Decoder<TypeDescription_array> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TypeDescription_array
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TypeDescription_array (el: _Element): TypeDescription_array {
    if (!_cached_decoder_for_TypeDescription_array) { _cached_decoder_for_TypeDescription_array = function (el: _Element): TypeDescription_array {
    let packed: OPTIONAL<BOOLEAN> = TypeDescription_array._default_value_for_packed;
    let numberOfElements!: Unsigned32;
    let elementType!: TypeSpecification;
    const callbacks: $.DecodingMap = {
        "packed": (_el: _Element): void => { packed = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "numberOfElements": (_el: _Element): void => { numberOfElements = $._decode_implicit<Unsigned32>(() => _decode_Unsigned32)(_el); },
        "elementType": (_el: _Element): void => { elementType = $._decode_explicit<TypeSpecification>(() => _decode_TypeSpecification)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TypeDescription_array,
        _extension_additions_list_spec_for_TypeDescription_array,
        _root_component_type_list_2_spec_for_TypeDescription_array,
        undefined,
    );
    return new TypeDescription_array(
        packed,
        numberOfElements,
        elementType
    );
}; }
    return _cached_decoder_for_TypeDescription_array(el);
}

let _cached_encoder_for_TypeDescription_array: $.ASN1Encoder<TypeDescription_array> | null = null;

/**
 * @summary Encodes a(n) TypeDescription_array into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TypeDescription_array, encoded as an ASN.1 Element.
 */
export
function _encode_TypeDescription_array (value: TypeDescription_array, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TypeDescription_array) { _cached_encoder_for_TypeDescription_array = function (value: TypeDescription_array, elGetter: $.ASN1Encoder<TypeDescription_array>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_DEFAULT */ (value.packed === undefined || $.deepEq(value.packed, TypeDescription_array._default_value_for_packed) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeBoolean, $.BER)(value.packed, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_Unsigned32, $.BER)(value.numberOfElements, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_TypeSpecification, $.BER)(value.elementType, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TypeDescription_array(value, elGetter);
}


/* eslint-enable */
