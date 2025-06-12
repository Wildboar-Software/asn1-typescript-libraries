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
import { NotifyThreshold, _decode_NotifyThreshold, _encode_NotifyThreshold } from "../Attribute-ASN1Module/NotifyThreshold.ta.mjs";
export { NotifyThreshold, _decode_NotifyThreshold, _encode_NotifyThreshold } from "../Attribute-ASN1Module/NotifyThreshold.ta.mjs";


/* START_OF_SYMBOL_DEFINITION GaugeThreshold_Item */
/**
 * @summary GaugeThreshold_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GaugeThreshold-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class GaugeThreshold_Item {
    constructor (
        /**
         * @summary `notifyLow`.
         * @public
         * @readonly
         */
        readonly notifyLow: NotifyThreshold,
        /**
         * @summary `notifyHigh`.
         * @public
         * @readonly
         */
        readonly notifyHigh: NotifyThreshold
    ) {}

    /**
     * @summary Restructures an object into a GaugeThreshold_Item
     * @description
     * 
     * This takes an `object` and converts it to a `GaugeThreshold_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GaugeThreshold_Item`.
     * @returns {GaugeThreshold_Item}
     */
    public static _from_object (_o: { [_K in keyof (GaugeThreshold_Item)]: (GaugeThreshold_Item)[_K] }): GaugeThreshold_Item {
        return new GaugeThreshold_Item(_o.notifyLow, _o.notifyHigh);
    }


}
/* END_OF_SYMBOL_DEFINITION GaugeThreshold_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_GaugeThreshold_Item */
/**
 * @summary The Leading Root Component Types of GaugeThreshold_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GaugeThreshold_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("notifyLow", false, $.hasTag(_TagClass.universal, 16), undefined, undefined),
    new $.ComponentSpec("notifyHigh", false, $.hasTag(_TagClass.universal, 16), undefined, undefined)
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_GaugeThreshold_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_GaugeThreshold_Item */
/**
 * @summary The Trailing Root Component Types of GaugeThreshold_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GaugeThreshold_Item: $.ComponentSpec[] = [
    
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_GaugeThreshold_Item */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_GaugeThreshold_Item */
/**
 * @summary The Extension Addition Component Types of GaugeThreshold_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GaugeThreshold_Item: $.ComponentSpec[] = [
    
];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_GaugeThreshold_Item */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_GaugeThreshold_Item */
let _cached_decoder_for_GaugeThreshold_Item: $.ASN1Decoder<GaugeThreshold_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_GaugeThreshold_Item */

/* START_OF_SYMBOL_DEFINITION _decode_GaugeThreshold_Item */
/**
 * @summary Decodes an ASN.1 element into a(n) GaugeThreshold_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {GaugeThreshold_Item} The decoded data structure.
 */
export
function _decode_GaugeThreshold_Item (el: _Element) {
    if (!_cached_decoder_for_GaugeThreshold_Item) { _cached_decoder_for_GaugeThreshold_Item = function (el: _Element): GaugeThreshold_Item {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("GaugeThreshold-Item contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "notifyLow";
    sequence[1].name = "notifyHigh";
    let notifyLow!: NotifyThreshold;
    let notifyHigh!: NotifyThreshold;
    notifyLow = _decode_NotifyThreshold(sequence[0]);
    notifyHigh = _decode_NotifyThreshold(sequence[1]);
    return new GaugeThreshold_Item(
        notifyLow,
        notifyHigh,

    );
}; }
    return _cached_decoder_for_GaugeThreshold_Item(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_GaugeThreshold_Item */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_GaugeThreshold_Item */
let _cached_encoder_for_GaugeThreshold_Item: $.ASN1Encoder<GaugeThreshold_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_GaugeThreshold_Item */

/* START_OF_SYMBOL_DEFINITION _encode_GaugeThreshold_Item */
/**
 * @summary Encodes a(n) GaugeThreshold_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GaugeThreshold_Item, encoded as an ASN.1 Element.
 */
export
function _encode_GaugeThreshold_Item (value: GaugeThreshold_Item, elGetter: $.ASN1Encoder<GaugeThreshold_Item>) {
    if (!_cached_encoder_for_GaugeThreshold_Item) { _cached_encoder_for_GaugeThreshold_Item = function (value: GaugeThreshold_Item, elGetter: $.ASN1Encoder<GaugeThreshold_Item>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_NotifyThreshold(value.notifyLow, $.BER),
            /* REQUIRED   */ _encode_NotifyThreshold(value.notifyHigh, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GaugeThreshold_Item(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_GaugeThreshold_Item */

/* eslint-enable */
