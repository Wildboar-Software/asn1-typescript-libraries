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
import { ObservedValue, _decode_ObservedValue, _encode_ObservedValue } from "../Attribute-ASN1Module/ObservedValue.ta";
export { ObservedValue, _decode_ObservedValue, _encode_ObservedValue } from "../Attribute-ASN1Module/ObservedValue.ta";


/* START_OF_SYMBOL_DEFINITION ThresholdLevelInd_down */
/**
 * @summary ThresholdLevelInd_down
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ThresholdLevelInd-down ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class ThresholdLevelInd_down {
    constructor (
        /**
         * @summary `high`.
         * @public
         * @readonly
         */
        readonly high: ObservedValue,
        /**
         * @summary `low`.
         * @public
         * @readonly
         */
        readonly low: ObservedValue
    ) {}

    /**
     * @summary Restructures an object into a ThresholdLevelInd_down
     * @description
     * 
     * This takes an `object` and converts it to a `ThresholdLevelInd_down`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ThresholdLevelInd_down`.
     * @returns {ThresholdLevelInd_down}
     */
    public static _from_object (_o: { [_K in keyof (ThresholdLevelInd_down)]: (ThresholdLevelInd_down)[_K] }): ThresholdLevelInd_down {
        return new ThresholdLevelInd_down(_o.high, _o.low);
    }


}
/* END_OF_SYMBOL_DEFINITION ThresholdLevelInd_down */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ThresholdLevelInd_down */
/**
 * @summary The Leading Root Component Types of ThresholdLevelInd_down
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ThresholdLevelInd_down: $.ComponentSpec[] = [
    new $.ComponentSpec("high", false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec("low", false, $.hasAnyTag, undefined, undefined)
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ThresholdLevelInd_down */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ThresholdLevelInd_down */
/**
 * @summary The Trailing Root Component Types of ThresholdLevelInd_down
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ThresholdLevelInd_down: $.ComponentSpec[] = [
    
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ThresholdLevelInd_down */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ThresholdLevelInd_down */
/**
 * @summary The Extension Addition Component Types of ThresholdLevelInd_down
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ThresholdLevelInd_down: $.ComponentSpec[] = [
    
];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ThresholdLevelInd_down */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ThresholdLevelInd_down */
let _cached_decoder_for_ThresholdLevelInd_down: $.ASN1Decoder<ThresholdLevelInd_down> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ThresholdLevelInd_down */

/* START_OF_SYMBOL_DEFINITION _decode_ThresholdLevelInd_down */
/**
 * @summary Decodes an ASN.1 element into a(n) ThresholdLevelInd_down
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ThresholdLevelInd_down} The decoded data structure.
 */
export
function _decode_ThresholdLevelInd_down (el: _Element) {
    if (!_cached_decoder_for_ThresholdLevelInd_down) { _cached_decoder_for_ThresholdLevelInd_down = function (el: _Element): ThresholdLevelInd_down {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("ThresholdLevelInd-down contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "high";
    sequence[1].name = "low";
    let high!: ObservedValue;
    let low!: ObservedValue;
    high = _decode_ObservedValue(sequence[0]);
    low = _decode_ObservedValue(sequence[1]);
    return new ThresholdLevelInd_down(
        high,
        low,

    );
}; }
    return _cached_decoder_for_ThresholdLevelInd_down(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ThresholdLevelInd_down */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ThresholdLevelInd_down */
let _cached_encoder_for_ThresholdLevelInd_down: $.ASN1Encoder<ThresholdLevelInd_down> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ThresholdLevelInd_down */

/* START_OF_SYMBOL_DEFINITION _encode_ThresholdLevelInd_down */
/**
 * @summary Encodes a(n) ThresholdLevelInd_down into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ThresholdLevelInd_down, encoded as an ASN.1 Element.
 */
export
function _encode_ThresholdLevelInd_down (value: ThresholdLevelInd_down, elGetter: $.ASN1Encoder<ThresholdLevelInd_down>) {
    if (!_cached_encoder_for_ThresholdLevelInd_down) { _cached_encoder_for_ThresholdLevelInd_down = function (value: ThresholdLevelInd_down, elGetter: $.ASN1Encoder<ThresholdLevelInd_down>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ObservedValue(value.high, $.BER),
            /* REQUIRED   */ _encode_ObservedValue(value.low, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ThresholdLevelInd_down(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ThresholdLevelInd_down */

/* eslint-enable */
