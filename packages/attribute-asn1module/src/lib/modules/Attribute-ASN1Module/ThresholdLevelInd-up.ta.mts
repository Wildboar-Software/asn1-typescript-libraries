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
import { ObservedValue, _decode_ObservedValue, _encode_ObservedValue } from "../Attribute-ASN1Module/ObservedValue.ta.mjs";
export { ObservedValue, _decode_ObservedValue, _encode_ObservedValue } from "../Attribute-ASN1Module/ObservedValue.ta.mjs";


/* START_OF_SYMBOL_DEFINITION ThresholdLevelInd_up */
/**
 * @summary ThresholdLevelInd_up
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ThresholdLevelInd-up ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class ThresholdLevelInd_up {
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
        readonly low: OPTIONAL<ObservedValue>
    ) {}

    /**
     * @summary Restructures an object into a ThresholdLevelInd_up
     * @description
     * 
     * This takes an `object` and converts it to a `ThresholdLevelInd_up`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ThresholdLevelInd_up`.
     * @returns {ThresholdLevelInd_up}
     */
    public static _from_object (_o: { [_K in keyof (ThresholdLevelInd_up)]: (ThresholdLevelInd_up)[_K] }): ThresholdLevelInd_up {
        return new ThresholdLevelInd_up(_o.high, _o.low);
    }


}
/* END_OF_SYMBOL_DEFINITION ThresholdLevelInd_up */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ThresholdLevelInd_up */
/**
 * @summary The Leading Root Component Types of ThresholdLevelInd_up
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ThresholdLevelInd_up: $.ComponentSpec[] = [
    new $.ComponentSpec("high", false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec("low", true, $.hasAnyTag, undefined, undefined)
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ThresholdLevelInd_up */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ThresholdLevelInd_up */
/**
 * @summary The Trailing Root Component Types of ThresholdLevelInd_up
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ThresholdLevelInd_up: $.ComponentSpec[] = [
    
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ThresholdLevelInd_up */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ThresholdLevelInd_up */
/**
 * @summary The Extension Addition Component Types of ThresholdLevelInd_up
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ThresholdLevelInd_up: $.ComponentSpec[] = [
    
];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ThresholdLevelInd_up */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ThresholdLevelInd_up */
let _cached_decoder_for_ThresholdLevelInd_up: $.ASN1Decoder<ThresholdLevelInd_up> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ThresholdLevelInd_up */

/* START_OF_SYMBOL_DEFINITION _decode_ThresholdLevelInd_up */
/**
 * @summary Decodes an ASN.1 element into a(n) ThresholdLevelInd_up
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ThresholdLevelInd_up} The decoded data structure.
 */
export
function _decode_ThresholdLevelInd_up (el: _Element) {
    if (!_cached_decoder_for_ThresholdLevelInd_up) { _cached_decoder_for_ThresholdLevelInd_up = function (el: _Element): ThresholdLevelInd_up {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let high!: ObservedValue;
    let low: OPTIONAL<ObservedValue>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "high": (_el: _Element): void => { high = _decode_ObservedValue(_el); },
        "low": (_el: _Element): void => { low = _decode_ObservedValue(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ThresholdLevelInd_up,
        _extension_additions_list_spec_for_ThresholdLevelInd_up,
        _root_component_type_list_2_spec_for_ThresholdLevelInd_up,
        undefined,
    );
    return new ThresholdLevelInd_up( /* SEQUENCE_CONSTRUCTOR_CALL */
        high,
        low
    );
}; }
    return _cached_decoder_for_ThresholdLevelInd_up(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ThresholdLevelInd_up */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ThresholdLevelInd_up */
let _cached_encoder_for_ThresholdLevelInd_up: $.ASN1Encoder<ThresholdLevelInd_up> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ThresholdLevelInd_up */

/* START_OF_SYMBOL_DEFINITION _encode_ThresholdLevelInd_up */
/**
 * @summary Encodes a(n) ThresholdLevelInd_up into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ThresholdLevelInd_up, encoded as an ASN.1 Element.
 */
export
function _encode_ThresholdLevelInd_up (value: ThresholdLevelInd_up, elGetter: $.ASN1Encoder<ThresholdLevelInd_up>) {
    if (!_cached_encoder_for_ThresholdLevelInd_up) { _cached_encoder_for_ThresholdLevelInd_up = function (value: ThresholdLevelInd_up, elGetter: $.ASN1Encoder<ThresholdLevelInd_up>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ObservedValue(value.high, $.BER),
            /* IF_ABSENT  */ ((value.low === undefined) ? undefined : _encode_ObservedValue(value.low, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ThresholdLevelInd_up(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ThresholdLevelInd_up */

/* eslint-enable */
