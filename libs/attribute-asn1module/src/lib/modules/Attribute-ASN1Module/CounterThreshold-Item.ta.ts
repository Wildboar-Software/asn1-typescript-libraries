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
import * as $ from "asn1-ts/dist/node/functional";



/* START_OF_SYMBOL_DEFINITION CounterThreshold_Item */
/**
 * @summary CounterThreshold_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CounterThreshold-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class CounterThreshold_Item {
    constructor (
        /**
         * @summary `comparisonLevel`.
         * @public
         * @readonly
         */
        readonly comparisonLevel: INTEGER,
        /**
         * @summary `offsetValue`.
         * @public
         * @readonly
         */
        readonly offsetValue: INTEGER,
        /**
         * @summary `notificationOnOff`.
         * @public
         * @readonly
         */
        readonly notificationOnOff: BOOLEAN
    ) {}

    /**
     * @summary Restructures an object into a CounterThreshold_Item
     * @description
     * 
     * This takes an `object` and converts it to a `CounterThreshold_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CounterThreshold_Item`.
     * @returns {CounterThreshold_Item}
     */
    public static _from_object (_o: { [_K in keyof (CounterThreshold_Item)]: (CounterThreshold_Item)[_K] }): CounterThreshold_Item {
        return new CounterThreshold_Item(_o.comparisonLevel, _o.offsetValue, _o.notificationOnOff);
    }


}
/* END_OF_SYMBOL_DEFINITION CounterThreshold_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CounterThreshold_Item */
/**
 * @summary The Leading Root Component Types of CounterThreshold_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CounterThreshold_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("comparisonLevel", false, $.hasTag(_TagClass.universal, 2), undefined, undefined),
    new $.ComponentSpec("offsetValue", false, $.hasTag(_TagClass.universal, 2), undefined, undefined),
    new $.ComponentSpec("notificationOnOff", false, $.hasTag(_TagClass.universal, 1), undefined, undefined)
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CounterThreshold_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CounterThreshold_Item */
/**
 * @summary The Trailing Root Component Types of CounterThreshold_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CounterThreshold_Item: $.ComponentSpec[] = [
    
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CounterThreshold_Item */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CounterThreshold_Item */
/**
 * @summary The Extension Addition Component Types of CounterThreshold_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CounterThreshold_Item: $.ComponentSpec[] = [
    
];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CounterThreshold_Item */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CounterThreshold_Item */
let _cached_decoder_for_CounterThreshold_Item: $.ASN1Decoder<CounterThreshold_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CounterThreshold_Item */

/* START_OF_SYMBOL_DEFINITION _decode_CounterThreshold_Item */
/**
 * @summary Decodes an ASN.1 element into a(n) CounterThreshold_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CounterThreshold_Item} The decoded data structure.
 */
export
function _decode_CounterThreshold_Item (el: _Element) {
    if (!_cached_decoder_for_CounterThreshold_Item) { _cached_decoder_for_CounterThreshold_Item = function (el: _Element): CounterThreshold_Item {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("CounterThreshold-Item contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "comparisonLevel";
    sequence[1].name = "offsetValue";
    sequence[2].name = "notificationOnOff";
    let comparisonLevel!: INTEGER;
    let offsetValue!: INTEGER;
    let notificationOnOff!: BOOLEAN;
    comparisonLevel = $._decodeInteger(sequence[0]);
    offsetValue = $._decodeInteger(sequence[1]);
    notificationOnOff = $._decodeBoolean(sequence[2]);
    return new CounterThreshold_Item(
        comparisonLevel,
        offsetValue,
        notificationOnOff,

    );
}; }
    return _cached_decoder_for_CounterThreshold_Item(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CounterThreshold_Item */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CounterThreshold_Item */
let _cached_encoder_for_CounterThreshold_Item: $.ASN1Encoder<CounterThreshold_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CounterThreshold_Item */

/* START_OF_SYMBOL_DEFINITION _encode_CounterThreshold_Item */
/**
 * @summary Encodes a(n) CounterThreshold_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CounterThreshold_Item, encoded as an ASN.1 Element.
 */
export
function _encode_CounterThreshold_Item (value: CounterThreshold_Item, elGetter: $.ASN1Encoder<CounterThreshold_Item>) {
    if (!_cached_encoder_for_CounterThreshold_Item) { _cached_encoder_for_CounterThreshold_Item = function (value: CounterThreshold_Item, elGetter: $.ASN1Encoder<CounterThreshold_Item>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeInteger(value.comparisonLevel, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.offsetValue, $.BER),
            /* REQUIRED   */ $._encodeBoolean(value.notificationOnOff, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CounterThreshold_Item(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CounterThreshold_Item */

/* eslint-enable */
