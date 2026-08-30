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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { ResponseTimeCategory, _enum_for_ResponseTimeCategory, ResponseTimeCategory_lowdelay /* IMPORTED_LONG_ENUMERATION_ITEM */, lowdelay /* IMPORTED_SHORT_ENUMERATION_ITEM */, ResponseTimeCategory_delaytolerant /* IMPORTED_LONG_ENUMERATION_ITEM */, delaytolerant /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ResponseTimeCategory, _encode_ResponseTimeCategory } from "../MAP-LCS-DataTypes/ResponseTimeCategory.ta.mjs";
// export { ResponseTimeCategory, _enum_for_ResponseTimeCategory, ResponseTimeCategory_lowdelay /* IMPORTED_LONG_ENUMERATION_ITEM */, lowdelay /* IMPORTED_SHORT_ENUMERATION_ITEM */, ResponseTimeCategory_delaytolerant /* IMPORTED_LONG_ENUMERATION_ITEM */, delaytolerant /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ResponseTimeCategory, _encode_ResponseTimeCategory } from "../MAP-LCS-DataTypes/ResponseTimeCategory.ta.mjs";


/**
 * @summary ResponseTime
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ResponseTime ::= SEQUENCE {
 *     responseTimeCategory    ResponseTimeCategory,
 *     ...}
 * ```
 * 
 * @class
 */
export
class ResponseTime {
    constructor (
        /**
         * @summary `responseTimeCategory`.
         * @public
         * @readonly
         */
        readonly responseTimeCategory: ResponseTimeCategory,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ResponseTime
     * @description
     * 
     * This takes an `object` and converts it to a `ResponseTime`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ResponseTime`.
     * @returns {ResponseTime}
     */
    public static _from_object (_o: { [_K in keyof (ResponseTime)]: (ResponseTime)[_K] }): ResponseTime {
        return new ResponseTime(_o.responseTimeCategory, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `responseTimeCategory`
         * @public
         * @static
         */

    public static _enum_for_responseTimeCategory = _enum_for_ResponseTimeCategory;
}

/**
 * @summary The Leading Root Component Types of ResponseTime
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ResponseTime: $.ComponentSpec[] = [
    new $.ComponentSpec("responseTimeCategory", false, $.hasTag(_TagClass.universal, 10), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of ResponseTime
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ResponseTime: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ResponseTime
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ResponseTime: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ResponseTime: $.ASN1Decoder<ResponseTime> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ResponseTime
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ResponseTime (el: _Element): ResponseTime {
    if (!_cached_decoder_for_ResponseTime) { _cached_decoder_for_ResponseTime = function (el: _Element): ResponseTime {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("ResponseTime contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "responseTimeCategory";
    let responseTimeCategory!: ResponseTimeCategory;
    responseTimeCategory = _decode_ResponseTimeCategory(sequence[0]);
    return new ResponseTime(
        responseTimeCategory,
        sequence.slice(1),
    );
}; }
    return _cached_decoder_for_ResponseTime(el);
}

let _cached_encoder_for_ResponseTime: $.ASN1Encoder<ResponseTime> | null = null;

/**
 * @summary Encodes a(n) ResponseTime into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ResponseTime, encoded as an ASN.1 Element.
 */
export
function _encode_ResponseTime (value: ResponseTime, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ResponseTime) { _cached_encoder_for_ResponseTime = function (value: ResponseTime, elGetter: $.ASN1Encoder<ResponseTime>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ResponseTimeCategory(value.responseTimeCategory, $.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ResponseTime(value, elGetter);
}


/* eslint-enable */
