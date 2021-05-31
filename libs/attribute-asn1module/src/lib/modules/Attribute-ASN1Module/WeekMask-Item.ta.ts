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
import { WeekMask_Item_daysOfWeek, WeekMask_Item_daysOfWeek_sunday /* IMPORTED_LONG_NAMED_BIT */, sunday /* IMPORTED_SHORT_NAMED_BIT */, WeekMask_Item_daysOfWeek_monday /* IMPORTED_LONG_NAMED_BIT */, monday /* IMPORTED_SHORT_NAMED_BIT */, WeekMask_Item_daysOfWeek_tuesday /* IMPORTED_LONG_NAMED_BIT */, tuesday /* IMPORTED_SHORT_NAMED_BIT */, WeekMask_Item_daysOfWeek_wednesday /* IMPORTED_LONG_NAMED_BIT */, wednesday /* IMPORTED_SHORT_NAMED_BIT */, WeekMask_Item_daysOfWeek_thursday /* IMPORTED_LONG_NAMED_BIT */, thursday /* IMPORTED_SHORT_NAMED_BIT */, WeekMask_Item_daysOfWeek_friday /* IMPORTED_LONG_NAMED_BIT */, friday /* IMPORTED_SHORT_NAMED_BIT */, WeekMask_Item_daysOfWeek_saturday /* IMPORTED_LONG_NAMED_BIT */, saturday /* IMPORTED_SHORT_NAMED_BIT */, _decode_WeekMask_Item_daysOfWeek, _encode_WeekMask_Item_daysOfWeek } from "../Attribute-ASN1Module/WeekMask-Item-daysOfWeek.ta";
export { WeekMask_Item_daysOfWeek, WeekMask_Item_daysOfWeek_sunday /* IMPORTED_LONG_NAMED_BIT */, sunday /* IMPORTED_SHORT_NAMED_BIT */, WeekMask_Item_daysOfWeek_monday /* IMPORTED_LONG_NAMED_BIT */, monday /* IMPORTED_SHORT_NAMED_BIT */, WeekMask_Item_daysOfWeek_tuesday /* IMPORTED_LONG_NAMED_BIT */, tuesday /* IMPORTED_SHORT_NAMED_BIT */, WeekMask_Item_daysOfWeek_wednesday /* IMPORTED_LONG_NAMED_BIT */, wednesday /* IMPORTED_SHORT_NAMED_BIT */, WeekMask_Item_daysOfWeek_thursday /* IMPORTED_LONG_NAMED_BIT */, thursday /* IMPORTED_SHORT_NAMED_BIT */, WeekMask_Item_daysOfWeek_friday /* IMPORTED_LONG_NAMED_BIT */, friday /* IMPORTED_SHORT_NAMED_BIT */, WeekMask_Item_daysOfWeek_saturday /* IMPORTED_LONG_NAMED_BIT */, saturday /* IMPORTED_SHORT_NAMED_BIT */, _decode_WeekMask_Item_daysOfWeek, _encode_WeekMask_Item_daysOfWeek } from "../Attribute-ASN1Module/WeekMask-Item-daysOfWeek.ta";
import { IntervalsOfDay, _decode_IntervalsOfDay, _encode_IntervalsOfDay } from "../Attribute-ASN1Module/IntervalsOfDay.ta";
export { IntervalsOfDay, _decode_IntervalsOfDay, _encode_IntervalsOfDay } from "../Attribute-ASN1Module/IntervalsOfDay.ta";


/* START_OF_SYMBOL_DEFINITION WeekMask_Item */
/**
 * @summary WeekMask_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * WeekMask-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class WeekMask_Item {
    constructor (
        /**
         * @summary `daysOfWeek`.
         * @public
         * @readonly
         */
        readonly daysOfWeek: WeekMask_Item_daysOfWeek,
        /**
         * @summary `intervalsOfDay`.
         * @public
         * @readonly
         */
        readonly intervalsOfDay: IntervalsOfDay
    ) {}

    /**
     * @summary Restructures an object into a WeekMask_Item
     * @description
     * 
     * This takes an `object` and converts it to a `WeekMask_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `WeekMask_Item`.
     * @returns {WeekMask_Item}
     */
    public static _from_object (_o: { [_K in keyof (WeekMask_Item)]: (WeekMask_Item)[_K] }): WeekMask_Item {
        return new WeekMask_Item(_o.daysOfWeek, _o.intervalsOfDay);
    }


}
/* END_OF_SYMBOL_DEFINITION WeekMask_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_WeekMask_Item */
/**
 * @summary The Leading Root Component Types of WeekMask_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_WeekMask_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("daysOfWeek", false, $.hasTag(_TagClass.universal, 3), undefined, undefined),
    new $.ComponentSpec("intervalsOfDay", false, $.hasTag(_TagClass.universal, 17), undefined, undefined)
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_WeekMask_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_WeekMask_Item */
/**
 * @summary The Trailing Root Component Types of WeekMask_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_WeekMask_Item: $.ComponentSpec[] = [
    
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_WeekMask_Item */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_WeekMask_Item */
/**
 * @summary The Extension Addition Component Types of WeekMask_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_WeekMask_Item: $.ComponentSpec[] = [
    
];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_WeekMask_Item */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_WeekMask_Item */
let _cached_decoder_for_WeekMask_Item: $.ASN1Decoder<WeekMask_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_WeekMask_Item */

/* START_OF_SYMBOL_DEFINITION _decode_WeekMask_Item */
/**
 * @summary Decodes an ASN.1 element into a(n) WeekMask_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {WeekMask_Item} The decoded data structure.
 */
export
function _decode_WeekMask_Item (el: _Element) {
    if (!_cached_decoder_for_WeekMask_Item) { _cached_decoder_for_WeekMask_Item = function (el: _Element): WeekMask_Item {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("WeekMask-Item contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "daysOfWeek";
    sequence[1].name = "intervalsOfDay";
    let daysOfWeek!: WeekMask_Item_daysOfWeek;
    let intervalsOfDay!: IntervalsOfDay;
    daysOfWeek = _decode_WeekMask_Item_daysOfWeek(sequence[0]);
    intervalsOfDay = _decode_IntervalsOfDay(sequence[1]);
    return new WeekMask_Item(
        daysOfWeek,
        intervalsOfDay,

    );
}; }
    return _cached_decoder_for_WeekMask_Item(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_WeekMask_Item */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_WeekMask_Item */
let _cached_encoder_for_WeekMask_Item: $.ASN1Encoder<WeekMask_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_WeekMask_Item */

/* START_OF_SYMBOL_DEFINITION _encode_WeekMask_Item */
/**
 * @summary Encodes a(n) WeekMask_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The WeekMask_Item, encoded as an ASN.1 Element.
 */
export
function _encode_WeekMask_Item (value: WeekMask_Item, elGetter: $.ASN1Encoder<WeekMask_Item>) {
    if (!_cached_encoder_for_WeekMask_Item) { _cached_encoder_for_WeekMask_Item = function (value: WeekMask_Item, elGetter: $.ASN1Encoder<WeekMask_Item>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_WeekMask_Item_daysOfWeek(value.daysOfWeek, $.BER),
            /* REQUIRED   */ _encode_IntervalsOfDay(value.intervalsOfDay, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_WeekMask_Item(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_WeekMask_Item */

/* eslint-enable */
