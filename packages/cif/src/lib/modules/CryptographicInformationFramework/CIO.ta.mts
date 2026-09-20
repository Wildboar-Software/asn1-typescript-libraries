/* eslint-disable */
import {
    OPTIONAL,
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


/**
 * @summary CIO
 * @description
 * 
 * Template for every CIO: common attributes, class attributes, optional
 * subclass attributes, and mandatory type attributes (see Figure 2). ISO/IEC
 * 7816-15:2016 §8.2.19, §6.3.
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
         * @description
         * Attributes common to all CIOs. ISO/IEC 7816-15:2016 §8.2.8, §8.2.19.
         * @public
         * @readonly
         */
        readonly commonObjectAttributes: CommonObjectAttributes,
        /**
         * @summary `classAttributes`.
         * @description
         * Class-level attributes (key, certificate, data container, or
         * authentication). ISO/IEC 7816-15:2016 §8.2.19.
         * @public
         * @readonly
         */
        readonly classAttributes: ClassAttributes,
        /**
         * @summary `subClassAttributes`.
         * @description
         * Subclass attributes (e.g. private vs public key). ISO/IEC
         * 7816-15:2016 §8.2.19.
         * @public
         * @readonly
         */
        readonly subClassAttributes: OPTIONAL<SubClassAttributes>,
        /**
         * @summary `typeAttributes`.
         * @description
         * Algorithm- or format-specific attributes. ISO/IEC 7816-15:2016
         * §8.2.19.
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
 * This is an array of `ComponentSpec`s that define how to decode the leading
 * root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CIO: $.ComponentSpec[] = [
    new $.ComponentSpec("commonObjectAttributes", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("classAttributes", false, $.hasAnyTag),
    new $.ComponentSpec("subClassAttributes", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("typeAttributes", false, $.hasTag(_TagClass.context, 1)),
];

/**
 * @summary The Trailing Root Component Types of CIO
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing
 * root component type list of a SET or SEQUENCE.
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
 * This is an array of `ComponentSpec`s that define how to decode the extension
 * addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CIO: $.ComponentSpec[] = [
    
];


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


/**
 * @summary Returns a function that will encode a(n) CIO into an ASN.1 Element.
 * @function
 * @returns A function that will encode a(n) CIO as an ASN.1 element.
 */
export
function _get_encoder_for_CIO<ClassAttributes, SubClassAttributes, TypeAttributes>(_encode_ClassAttributes: $.ASN1Encoder<ClassAttributes>, _encode_SubClassAttributes: $.ASN1Encoder<SubClassAttributes>, _encode_TypeAttributes: $.ASN1Encoder<TypeAttributes>): $.ASN1Encoder<CIO<ClassAttributes, SubClassAttributes, TypeAttributes>> {
    return function (value: CIO<ClassAttributes, SubClassAttributes, TypeAttributes>): _Element {
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
