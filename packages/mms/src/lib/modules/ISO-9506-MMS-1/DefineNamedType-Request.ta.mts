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
import { ObjectName, _decode_ObjectName, _encode_ObjectName } from "../ISO-9506-MMS-1/ObjectName.ta.mjs";
// export { ObjectName, _decode_ObjectName, _encode_ObjectName } from "../ISO-9506-MMS-1/ObjectName.ta.mjs";
import { TypeSpecification, _decode_TypeSpecification, _encode_TypeSpecification } from "../ISO-9506-MMS-1/TypeSpecification.ta.mjs";
// export { TypeSpecification, _decode_TypeSpecification, _encode_TypeSpecification } from "../ISO-9506-MMS-1/TypeSpecification.ta.mjs";


/**
 * @summary DefineNamedType_Request
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DefineNamedType-Request ::= SEQUENCE {
 *    typeName                   ObjectName,
 *    typeSpecification          TypeSpecification }
 * ```
 * 
 * @class
 */
export
class DefineNamedType_Request {
    constructor (
        /**
         * @summary `typeName`.
         * @public
         * @readonly
         */
        readonly typeName: ObjectName,
        /**
         * @summary `typeSpecification`.
         * @public
         * @readonly
         */
        readonly typeSpecification: TypeSpecification
    ) {}

    /**
     * @summary Restructures an object into a DefineNamedType_Request
     * @description
     * 
     * This takes an `object` and converts it to a `DefineNamedType_Request`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DefineNamedType_Request`.
     * @returns {DefineNamedType_Request}
     */
    public static _from_object (_o: { [_K in keyof (DefineNamedType_Request)]: (DefineNamedType_Request)[_K] }): DefineNamedType_Request {
        return new DefineNamedType_Request(_o.typeName, _o.typeSpecification);
    }


}

/**
 * @summary The Leading Root Component Types of DefineNamedType_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DefineNamedType_Request: $.ComponentSpec[] = [
    new $.ComponentSpec("typeName", false, $.hasAnyTag),
    new $.ComponentSpec("typeSpecification", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of DefineNamedType_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DefineNamedType_Request: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DefineNamedType_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DefineNamedType_Request: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DefineNamedType_Request: $.ASN1Decoder<DefineNamedType_Request> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DefineNamedType_Request
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DefineNamedType_Request (el: _Element): DefineNamedType_Request {
    if (!_cached_decoder_for_DefineNamedType_Request) { _cached_decoder_for_DefineNamedType_Request = function (el: _Element): DefineNamedType_Request {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("DefineNamedType-Request contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "typeName";
    sequence[1].name = "typeSpecification";
    let typeName!: ObjectName;
    let typeSpecification!: TypeSpecification;
    typeName = _decode_ObjectName(sequence[0]);
    typeSpecification = _decode_TypeSpecification(sequence[1]);
    return new DefineNamedType_Request(
        typeName,
        typeSpecification,

    );
}; }
    return _cached_decoder_for_DefineNamedType_Request(el);
}

let _cached_encoder_for_DefineNamedType_Request: $.ASN1Encoder<DefineNamedType_Request> | null = null;

/**
 * @summary Encodes a(n) DefineNamedType_Request into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DefineNamedType_Request, encoded as an ASN.1 Element.
 */
export
function _encode_DefineNamedType_Request (value: DefineNamedType_Request, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DefineNamedType_Request) { _cached_encoder_for_DefineNamedType_Request = function (value: DefineNamedType_Request, elGetter: $.ASN1Encoder<DefineNamedType_Request>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ObjectName(value.typeName, $.BER),
            /* REQUIRED   */ _encode_TypeSpecification(value.typeSpecification, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DefineNamedType_Request(value, elGetter);
}


/* eslint-enable */
