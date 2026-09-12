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
import { TypeDescription_structure_components_Item, _decode_TypeDescription_structure_components_Item, _encode_TypeDescription_structure_components_Item } from "../MMS-Object-Module-1/TypeDescription-structure-components-Item.ta.mjs";
// export { TypeDescription_structure_components_Item, _decode_TypeDescription_structure_components_Item, _encode_TypeDescription_structure_components_Item } from "../MMS-Object-Module-1/TypeDescription-structure-components-Item.ta.mjs";


/**
 * @summary TypeDescription_structure
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TypeDescription-structure ::= SEQUENCE {
 *     packed [0] IMPLICIT BOOLEAN DEFAULT FALSE,
 *     components [1] IMPLICIT SEQUENCE OF SEQUENCE {
 *         componentName [0] IMPLICIT Identifier OPTIONAL,
 *         componentType [1] TypeSpecification
 *     }
 * }
 * ```
 * 
 * @class
 */
export
class TypeDescription_structure {
    constructor (
        /**
         * @summary `packed`.
         * @public
         * @readonly
         */
        readonly packed: OPTIONAL<BOOLEAN>,
        /**
         * @summary `components`.
         * @public
         * @readonly
         */
        readonly components: TypeDescription_structure_components_Item[]
    ) {}

    /**
     * @summary Restructures an object into a TypeDescription_structure
     * @description
     * 
     * This takes an `object` and converts it to a `TypeDescription_structure`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TypeDescription_structure`.
     * @returns {TypeDescription_structure}
     */
    public static _from_object (_o: { [_K in keyof (TypeDescription_structure)]: (TypeDescription_structure)[_K] }): TypeDescription_structure {
        return new TypeDescription_structure(_o.packed, _o.components);
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
 * @summary The Leading Root Component Types of TypeDescription_structure
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TypeDescription_structure: $.ComponentSpec[] = [
    new $.ComponentSpec("packed", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("components", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of TypeDescription_structure
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TypeDescription_structure: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TypeDescription_structure
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TypeDescription_structure: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TypeDescription_structure: $.ASN1Decoder<TypeDescription_structure> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TypeDescription_structure
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TypeDescription_structure (el: _Element): TypeDescription_structure {
    if (!_cached_decoder_for_TypeDescription_structure) { _cached_decoder_for_TypeDescription_structure = function (el: _Element): TypeDescription_structure {
    let packed: OPTIONAL<BOOLEAN> = TypeDescription_structure._default_value_for_packed;
    let components!: TypeDescription_structure_components_Item[];
    const callbacks: $.DecodingMap = {
        "packed": (_el: _Element): void => { packed = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "components": (_el: _Element): void => { components = $._decode_implicit<TypeDescription_structure_components_Item[]>(() => $._decodeSequenceOf<TypeDescription_structure_components_Item>(() => _decode_TypeDescription_structure_components_Item))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TypeDescription_structure,
        _extension_additions_list_spec_for_TypeDescription_structure,
        _root_component_type_list_2_spec_for_TypeDescription_structure,
        undefined,
    );
    return new TypeDescription_structure(
        packed,
        components
    );
}; }
    return _cached_decoder_for_TypeDescription_structure(el);
}

let _cached_encoder_for_TypeDescription_structure: $.ASN1Encoder<TypeDescription_structure> | null = null;

/**
 * @summary Encodes a(n) TypeDescription_structure into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TypeDescription_structure, encoded as an ASN.1 Element.
 */
export
function _encode_TypeDescription_structure (value: TypeDescription_structure, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TypeDescription_structure) { _cached_encoder_for_TypeDescription_structure = function (value: TypeDescription_structure, elGetter: $.ASN1Encoder<TypeDescription_structure>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_DEFAULT */ (value.packed === undefined || $.deepEq(value.packed, TypeDescription_structure._default_value_for_packed) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeBoolean, $.BER)(value.packed, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<TypeDescription_structure_components_Item>(() => _encode_TypeDescription_structure_components_Item, $.BER), $.BER)(value.components, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TypeDescription_structure(value, elGetter);
}


/* eslint-enable */
