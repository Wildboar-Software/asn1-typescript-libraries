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
 * @summary CategoryInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CategoryInfo ::= SEQUENCE {
 *          category            [1] IMPLICIT InternationalString,
 *          originalCategory    [2] IMPLICIT InternationalString OPTIONAL,
 *              description     [3] IMPLICIT HumanString OPTIONAL,
 *            asn1Module        [4] IMPLICIT InternationalString OPTIONAL}
 * ```
 * 
 * @class
 */
export
class CategoryInfo {
    constructor (
        /**
         * @summary `category`.
         * @public
         * @readonly
         */
        readonly category: InternationalString,
        /**
         * @summary `originalCategory`.
         * @public
         * @readonly
         */
        readonly originalCategory: OPTIONAL<InternationalString>,
        /**
         * @summary `description`.
         * @public
         * @readonly
         */
        readonly description: OPTIONAL<HumanString>,
        /**
         * @summary `asn1Module`.
         * @public
         * @readonly
         */
        readonly asn1Module: OPTIONAL<InternationalString>
    ) {}

    /**
     * @summary Restructures an object into a CategoryInfo
     * @description
     * 
     * This takes an `object` and converts it to a `CategoryInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CategoryInfo`.
     * @returns {CategoryInfo}
     */
    public static _from_object (_o: { [_K in keyof (CategoryInfo)]: (CategoryInfo)[_K] }): CategoryInfo {
        return new CategoryInfo(_o.category, _o.originalCategory, _o.description, _o.asn1Module);
    }


}

/**
 * @summary The Leading Root Component Types of CategoryInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CategoryInfo: $.ComponentSpec[] = [
    /* FIXME: category COULD_NOT_RESOLVE_TYPE_DEF */,
    /* FIXME: originalCategory COULD_NOT_RESOLVE_TYPE_DEF */,
    new $.ComponentSpec("description", true, $.hasTag(_TagClass.context, 3)),
    /* FIXME: asn1Module COULD_NOT_RESOLVE_TYPE_DEF */
];

/**
 * @summary The Trailing Root Component Types of CategoryInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CategoryInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CategoryInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CategoryInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CategoryInfo: $.ASN1Decoder<CategoryInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CategoryInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CategoryInfo (el: _Element): CategoryInfo {
    if (!_cached_decoder_for_CategoryInfo) { _cached_decoder_for_CategoryInfo = function (el: _Element): CategoryInfo {
    let category!: InternationalString;
    let originalCategory: OPTIONAL<InternationalString>;
    let description: OPTIONAL<HumanString>;
    let asn1Module: OPTIONAL<InternationalString>;
    const callbacks: $.DecodingMap = {
        "category": (_el: _Element): void => { category = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); },
        "originalCategory": (_el: _Element): void => { originalCategory = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); },
        "description": (_el: _Element): void => { description = $._decode_implicit<HumanString>(() => _decode_HumanString)(_el); },
        "asn1Module": (_el: _Element): void => { asn1Module = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CategoryInfo,
        _extension_additions_list_spec_for_CategoryInfo,
        _root_component_type_list_2_spec_for_CategoryInfo,
        undefined,
    );
    return new CategoryInfo(
        category,
        originalCategory,
        description,
        asn1Module
    );
}; }
    return _cached_decoder_for_CategoryInfo(el);
}

let _cached_encoder_for_CategoryInfo: $.ASN1Encoder<CategoryInfo> | null = null;

/**
 * @summary Encodes a(n) CategoryInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CategoryInfo, encoded as an ASN.1 Element.
 */
export
function _encode_CategoryInfo (value: CategoryInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CategoryInfo) { _cached_encoder_for_CategoryInfo = function (value: CategoryInfo, elGetter: $.ASN1Encoder<CategoryInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_InternationalString, $.BER)(value.category, $.BER),
            /* IF_ABSENT  */ ((value.originalCategory === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_InternationalString, $.BER)(value.originalCategory, $.BER)),
            /* IF_ABSENT  */ ((value.description === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_HumanString, $.BER)(value.description, $.BER)),
            /* IF_ABSENT  */ ((value.asn1Module === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_InternationalString, $.BER)(value.asn1Module, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CategoryInfo(value, elGetter);
}


/* eslint-enable */
