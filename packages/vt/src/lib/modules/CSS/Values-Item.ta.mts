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
import { ParameterValues, _decode_ParameterValues, _encode_ParameterValues } from "../CSS/ParameterValues.ta.mjs";
// export { ParameterValues, _decode_ParameterValues, _encode_ParameterValues } from "../CSS/ParameterValues.ta.mjs";


/**
 * @summary Values_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Values-Item ::= SEQUENCE {
 *     name    PrintableString,
 *     values  ParameterValues
 * }
 * ```
 * 
 * @class
 */
export
class Values_Item {
    constructor (
        /**
         * @summary `name`.
         * @public
         * @readonly
         */
        readonly name: PrintableString,
        /**
         * @summary `values`.
         * @public
         * @readonly
         */
        readonly values: ParameterValues
    ) {}

    /**
     * @summary Restructures an object into a Values_Item
     * @description
     * 
     * This takes an `object` and converts it to a `Values_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Values_Item`.
     * @returns {Values_Item}
     */
    public static _from_object (_o: { [_K in keyof (Values_Item)]: (Values_Item)[_K] }): Values_Item {
        return new Values_Item(_o.name, _o.values);
    }


}

/**
 * @summary The Leading Root Component Types of Values_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Values_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("name", false, $.hasTag(_TagClass.universal, 19)),
    new $.ComponentSpec("values", false, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of Values_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Values_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Values_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Values_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Values_Item: $.ASN1Decoder<Values_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Values_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Values_Item (el: _Element): Values_Item {
    if (!_cached_decoder_for_Values_Item) { _cached_decoder_for_Values_Item = function (el: _Element): Values_Item {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("Values-Item contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "name";
    sequence[1].name = "values";
    let name!: PrintableString;
    let values!: ParameterValues;
    name = $._decodePrintableString(sequence[0]);
    values = _decode_ParameterValues(sequence[1]);
    return new Values_Item(
        name,
        values,

    );
}; }
    return _cached_decoder_for_Values_Item(el);
}

let _cached_encoder_for_Values_Item: $.ASN1Encoder<Values_Item> | null = null;

/**
 * @summary Encodes a(n) Values_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Values_Item, encoded as an ASN.1 Element.
 */
export
function _encode_Values_Item (value: Values_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Values_Item) { _cached_encoder_for_Values_Item = function (value: Values_Item, elGetter: $.ASN1Encoder<Values_Item>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodePrintableString(value.name, $.BER),
            /* REQUIRED   */ _encode_ParameterValues(value.values, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Values_Item(value, elGetter);
}


/* eslint-enable */
