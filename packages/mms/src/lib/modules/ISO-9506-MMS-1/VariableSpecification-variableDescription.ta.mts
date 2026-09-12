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
import { Address, _decode_Address, _encode_Address } from "../MMS-Object-Module-1/Address.ta.mjs";
// export { Address, _decode_Address, _encode_Address } from "../MMS-Object-Module-1/Address.ta.mjs";
import { TypeSpecification, _decode_TypeSpecification, _encode_TypeSpecification } from "../ISO-9506-MMS-1/TypeSpecification.ta.mjs";
// export { TypeSpecification, _decode_TypeSpecification, _encode_TypeSpecification } from "../ISO-9506-MMS-1/TypeSpecification.ta.mjs";


/**
 * @summary VariableSpecification_variableDescription
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VariableSpecification-variableDescription ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class VariableSpecification_variableDescription {
    constructor (
        /**
         * @summary `address`.
         * @public
         * @readonly
         */
        readonly address: Address,
        /**
         * @summary `typeSpecification`.
         * @public
         * @readonly
         */
        readonly typeSpecification: TypeSpecification
    ) {}

    /**
     * @summary Restructures an object into a VariableSpecification_variableDescription
     * @description
     * 
     * This takes an `object` and converts it to a `VariableSpecification_variableDescription`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `VariableSpecification_variableDescription`.
     * @returns {VariableSpecification_variableDescription}
     */
    public static _from_object (_o: { [_K in keyof (VariableSpecification_variableDescription)]: (VariableSpecification_variableDescription)[_K] }): VariableSpecification_variableDescription {
        return new VariableSpecification_variableDescription(_o.address, _o.typeSpecification);
    }


}

/**
 * @summary The Leading Root Component Types of VariableSpecification_variableDescription
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_VariableSpecification_variableDescription: $.ComponentSpec[] = [
    new $.ComponentSpec("address", false, $.hasAnyTag),
    new $.ComponentSpec("typeSpecification", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of VariableSpecification_variableDescription
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_VariableSpecification_variableDescription: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of VariableSpecification_variableDescription
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_VariableSpecification_variableDescription: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_VariableSpecification_variableDescription: $.ASN1Decoder<VariableSpecification_variableDescription> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) VariableSpecification_variableDescription
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_VariableSpecification_variableDescription (el: _Element): VariableSpecification_variableDescription {
    if (!_cached_decoder_for_VariableSpecification_variableDescription) { _cached_decoder_for_VariableSpecification_variableDescription = function (el: _Element): VariableSpecification_variableDescription {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("VariableSpecification-variableDescription contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "address";
    sequence[1].name = "typeSpecification";
    let address!: Address;
    let typeSpecification!: TypeSpecification;
    address = _decode_Address(sequence[0]);
    typeSpecification = _decode_TypeSpecification(sequence[1]);
    return new VariableSpecification_variableDescription(
        address,
        typeSpecification,

    );
}; }
    return _cached_decoder_for_VariableSpecification_variableDescription(el);
}

let _cached_encoder_for_VariableSpecification_variableDescription: $.ASN1Encoder<VariableSpecification_variableDescription> | null = null;

/**
 * @summary Encodes a(n) VariableSpecification_variableDescription into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The VariableSpecification_variableDescription, encoded as an ASN.1 Element.
 */
export
function _encode_VariableSpecification_variableDescription (value: VariableSpecification_variableDescription, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_VariableSpecification_variableDescription) { _cached_encoder_for_VariableSpecification_variableDescription = function (value: VariableSpecification_variableDescription, elGetter: $.ASN1Encoder<VariableSpecification_variableDescription>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_Address(value.address, $.BER),
            /* REQUIRED   */ _encode_TypeSpecification(value.typeSpecification, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_VariableSpecification_variableDescription(value, elGetter);
}


/* eslint-enable */
