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
import { CommonObjectAttributes, _decode_CommonObjectAttributes, _encode_CommonObjectAttributes } from "../CryptographicInformationFramework/CommonObjectAttributes.ta.mjs";
// export { CommonObjectAttributes, _decode_CommonObjectAttributes, _encode_CommonObjectAttributes } from "../CryptographicInformationFramework/CommonObjectAttributes.ta.mjs";


/**
 * @summary CIO
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CIO {ClassAttributes, SubClassAttributes, TypeAttributes} ::= SEQUENCE {
 *     commonObjectAttributes  CommonObjectAttributes,
 *     classAttributes         ClassAttributes,
 *     subClassAttributes      [0] SubClassAttributes OPTIONAL,
 *     typeAttributes          [1] TypeAttributes
 * }
 * ```
 * 
 * @class
 */
export
class CIO<ClassAttributes, SubClassAttributes, TypeAttributes> {
    constructor (
        /**
         * @summary `commonObjectAttributes`.
         * @public
         * @readonly
         */
        readonly commonObjectAttributes: CommonObjectAttributes,
        /**
         * @summary `classAttributes`.
         * @public
         * @readonly
         */
        readonly classAttributes: ClassAttributes,
        /**
         * @summary `subClassAttributes`.
         * @public
         * @readonly
         */
        readonly subClassAttributes: OPTIONAL<SubClassAttributes>,
        /**
         * @summary `typeAttributes`.
         * @public
         * @readonly
         */
        readonly typeAttributes: TypeAttributes
    ) {}

    /**
     * @summary Restructures an object into a CIO
     * @description
     * 
     * This takes an `object` and converts it to a `CIO`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CIO`.
     * @returns {CIO}
     */
    public static _from_object (_o: { [_K in keyof (CIO<any, any, any>)]: (CIO<any, any, any>)[_K] }): CIO<any, any, any> {
        return new CIO(_o.commonObjectAttributes, _o.classAttributes, _o.subClassAttributes, _o.typeAttributes);
    }


}

/**
 * @summary The Leading Root Component Types of CIO
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CIO: $.ComponentSpec[] = [
    new $.ComponentSpec("commonObjectAttributes", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("classAttributes", false, $.hasAnyTag),
    /* FIXME: subClassAttributes COULD_NOT_RESOLVE_TYPE_DEF */,
    /* FIXME: typeAttributes COULD_NOT_RESOLVE_TYPE_DEF */
];

/**
 * @summary The Trailing Root Component Types of CIO
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CIO: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CIO
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CIO: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CIO: $.ASN1Decoder<CIO<ClassAttributes, SubClassAttributes, TypeAttributes>> | null = null;

/**
 * @summary Returns a function that will decode an ASN.1 element into a(n) CIO
 * @function
 * @returns A function that will decode an ASN.1 element.
 */
export
function _get_decoder_for_CIO<ClassAttributes, SubClassAttributes, TypeAttributes>(_decode_ClassAttributes: $.ASN1Decoder<ClassAttributes>, _decode_SubClassAttributes: $.ASN1Decoder<SubClassAttributes>, _decode_TypeAttributes: $.ASN1Decoder<TypeAttributes>): $.ASN1Decoder<CIO<ClassAttributes, SubClassAttributes, TypeAttributes>> {
    return function (el: _Element): CIO<ClassAttributes, SubClassAttributes, TypeAttributes> {
    let commonObjectAttributes!: CommonObjectAttributes;
    let classAttributes!: ClassAttributes;
    let subClassAttributes: OPTIONAL<SubClassAttributes>;
    let typeAttributes!: TypeAttributes;
    const callbacks: $.DecodingMap = {
        "commonObjectAttributes": (_el: _Element): void => { commonObjectAttributes = _decode_CommonObjectAttributes(_el); },
        "classAttributes": (_el: _Element): void => { classAttributes = _decode_ClassAttributes(_el); },
        "subClassAttributes": (_el: _Element): void => { subClassAttributes = $._decode_implicit<SubClassAttributes>(() => _decode_SubClassAttributes)(_el); },
        "typeAttributes": (_el: _Element): void => { typeAttributes = $._decode_implicit<TypeAttributes>(() => _decode_TypeAttributes)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CIO,
        _extension_additions_list_spec_for_CIO,
        _root_component_type_list_2_spec_for_CIO,
        undefined,
    );
    return new CIO(
        commonObjectAttributes,
        classAttributes,
        subClassAttributes,
        typeAttributes
    );
};
}

let _cached_encoder_for_CIO: $.ASN1Encoder<CIO<ClassAttributes, SubClassAttributes, TypeAttributes>> | null = null;

/**
 * @summary Returns a function that will encode a(n) CIO into an ASN.1 Element.
 * @function
 * @returns A function that will encode a(n) CIO as an ASN.1 element.
 */
export
function _get_encoder_for_CIO<ClassAttributes, SubClassAttributes, TypeAttributes>(_encode_ClassAttributes: $.ASN1Encoder<ClassAttributes>, _encode_SubClassAttributes: $.ASN1Encoder<SubClassAttributes>, _encode_TypeAttributes: $.ASN1Encoder<TypeAttributes>): $.ASN1Encoder<CIO<ClassAttributes, SubClassAttributes, TypeAttributes>> {
    return function (value: CIO<ClassAttributes, SubClassAttributes, TypeAttributes>, elGetter: $.ASN1Encoder<CIO<ClassAttributes, SubClassAttributes, TypeAttributes>>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_CommonObjectAttributes(value.commonObjectAttributes, $.BER),
            /* REQUIRED   */ _encode_ClassAttributes(value.classAttributes, $.BER),
            /* IF_ABSENT  */ ((value.subClassAttributes === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_SubClassAttributes, $.BER)(value.subClassAttributes, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_TypeAttributes, $.BER)(value.typeAttributes, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
};
}

/* eslint-enable */
