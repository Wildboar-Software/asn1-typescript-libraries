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
import { ProfileArgumValueList_specialProfileArgums_Item_value, _decode_ProfileArgumValueList_specialProfileArgums_Item_value, _encode_ProfileArgumValueList_specialProfileArgums_Item_value } from "../G/ProfileArgumValueList-specialProfileArgums-Item-value.ta.mjs";
// export { ProfileArgumValueList_specialProfileArgums_Item_value, _decode_ProfileArgumValueList_specialProfileArgums_Item_value, _encode_ProfileArgumValueList_specialProfileArgums_Item_value } from "../G/ProfileArgumValueList-specialProfileArgums-Item-value.ta.mjs";


/**
 * @summary ProfileArgumValueList_specialProfileArgums_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProfileArgumValueList-specialProfileArgums-Item ::= SEQUENCE {
 *     identifier INTEGER,
 *     value CHOICE {
 *         boolean BOOLEAN,
 *         integer INTEGER,
 *         string  PrintableString,
 *         oid     OBJECT IDENTIFIER
 *     }
 * }
 * ```
 * 
 * @class
 */
export
class ProfileArgumValueList_specialProfileArgums_Item {
    constructor (
        /**
         * @summary `identifier`.
         * @public
         * @readonly
         */
        readonly identifier: INTEGER,
        /**
         * @summary `value`.
         * @public
         * @readonly
         */
        readonly value: ProfileArgumValueList_specialProfileArgums_Item_value
    ) {}

    /**
     * @summary Restructures an object into a ProfileArgumValueList_specialProfileArgums_Item
     * @description
     * 
     * This takes an `object` and converts it to a `ProfileArgumValueList_specialProfileArgums_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ProfileArgumValueList_specialProfileArgums_Item`.
     * @returns {ProfileArgumValueList_specialProfileArgums_Item}
     */
    public static _from_object (_o: { [_K in keyof (ProfileArgumValueList_specialProfileArgums_Item)]: (ProfileArgumValueList_specialProfileArgums_Item)[_K] }): ProfileArgumValueList_specialProfileArgums_Item {
        return new ProfileArgumValueList_specialProfileArgums_Item(_o.identifier, _o.value);
    }


}

/**
 * @summary The Leading Root Component Types of ProfileArgumValueList_specialProfileArgums_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ProfileArgumValueList_specialProfileArgums_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("identifier", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("value", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of ProfileArgumValueList_specialProfileArgums_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ProfileArgumValueList_specialProfileArgums_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ProfileArgumValueList_specialProfileArgums_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ProfileArgumValueList_specialProfileArgums_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ProfileArgumValueList_specialProfileArgums_Item: $.ASN1Decoder<ProfileArgumValueList_specialProfileArgums_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ProfileArgumValueList_specialProfileArgums_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ProfileArgumValueList_specialProfileArgums_Item (el: _Element): ProfileArgumValueList_specialProfileArgums_Item {
    if (!_cached_decoder_for_ProfileArgumValueList_specialProfileArgums_Item) { _cached_decoder_for_ProfileArgumValueList_specialProfileArgums_Item = function (el: _Element): ProfileArgumValueList_specialProfileArgums_Item {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("ProfileArgumValueList-specialProfileArgums-Item contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "identifier";
    sequence[1].name = "value";
    let identifier!: INTEGER;
    let value!: ProfileArgumValueList_specialProfileArgums_Item_value;
    identifier = $._decodeInteger(sequence[0]);
    value = _decode_ProfileArgumValueList_specialProfileArgums_Item_value(sequence[1]);
    return new ProfileArgumValueList_specialProfileArgums_Item(
        identifier,
        value,

    );
}; }
    return _cached_decoder_for_ProfileArgumValueList_specialProfileArgums_Item(el);
}

let _cached_encoder_for_ProfileArgumValueList_specialProfileArgums_Item: $.ASN1Encoder<ProfileArgumValueList_specialProfileArgums_Item> | null = null;

/**
 * @summary Encodes a(n) ProfileArgumValueList_specialProfileArgums_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProfileArgumValueList_specialProfileArgums_Item, encoded as an ASN.1 Element.
 */
export
function _encode_ProfileArgumValueList_specialProfileArgums_Item (value: ProfileArgumValueList_specialProfileArgums_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ProfileArgumValueList_specialProfileArgums_Item) { _cached_encoder_for_ProfileArgumValueList_specialProfileArgums_Item = function (value: ProfileArgumValueList_specialProfileArgums_Item, elGetter: $.ASN1Encoder<ProfileArgumValueList_specialProfileArgums_Item>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeInteger(value.identifier, $.BER),
            /* REQUIRED   */ _encode_ProfileArgumValueList_specialProfileArgums_Item_value(value.value, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ProfileArgumValueList_specialProfileArgums_Item(value, elGetter);
}


/* eslint-enable */
