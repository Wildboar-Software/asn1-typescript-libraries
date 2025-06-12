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


/* START_OF_SYMBOL_DEFINITION NotifyThreshold */
/**
 * @summary NotifyThreshold
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NotifyThreshold ::= SEQUENCE {threshold    ObservedValue,
 *                               notifyOnOff  BOOLEAN
 * }
 * ```
 * 
 * @class
 */
export
class NotifyThreshold {
    constructor (
        /**
         * @summary `threshold`.
         * @public
         * @readonly
         */
        readonly threshold: ObservedValue,
        /**
         * @summary `notifyOnOff`.
         * @public
         * @readonly
         */
        readonly notifyOnOff: BOOLEAN
    ) {}

    /**
     * @summary Restructures an object into a NotifyThreshold
     * @description
     * 
     * This takes an `object` and converts it to a `NotifyThreshold`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NotifyThreshold`.
     * @returns {NotifyThreshold}
     */
    public static _from_object (_o: { [_K in keyof (NotifyThreshold)]: (NotifyThreshold)[_K] }): NotifyThreshold {
        return new NotifyThreshold(_o.threshold, _o.notifyOnOff);
    }


}
/* END_OF_SYMBOL_DEFINITION NotifyThreshold */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_NotifyThreshold */
/**
 * @summary The Leading Root Component Types of NotifyThreshold
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_NotifyThreshold: $.ComponentSpec[] = [
    new $.ComponentSpec("threshold", false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec("notifyOnOff", false, $.hasTag(_TagClass.universal, 1), undefined, undefined)
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_NotifyThreshold */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_NotifyThreshold */
/**
 * @summary The Trailing Root Component Types of NotifyThreshold
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_NotifyThreshold: $.ComponentSpec[] = [
    
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_NotifyThreshold */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_NotifyThreshold */
/**
 * @summary The Extension Addition Component Types of NotifyThreshold
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_NotifyThreshold: $.ComponentSpec[] = [
    
];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_NotifyThreshold */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_NotifyThreshold */
let _cached_decoder_for_NotifyThreshold: $.ASN1Decoder<NotifyThreshold> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_NotifyThreshold */

/* START_OF_SYMBOL_DEFINITION _decode_NotifyThreshold */
/**
 * @summary Decodes an ASN.1 element into a(n) NotifyThreshold
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NotifyThreshold} The decoded data structure.
 */
export
function _decode_NotifyThreshold (el: _Element) {
    if (!_cached_decoder_for_NotifyThreshold) { _cached_decoder_for_NotifyThreshold = function (el: _Element): NotifyThreshold {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("NotifyThreshold contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "threshold";
    sequence[1].name = "notifyOnOff";
    let threshold!: ObservedValue;
    let notifyOnOff!: BOOLEAN;
    threshold = _decode_ObservedValue(sequence[0]);
    notifyOnOff = $._decodeBoolean(sequence[1]);
    return new NotifyThreshold(
        threshold,
        notifyOnOff,

    );
}; }
    return _cached_decoder_for_NotifyThreshold(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_NotifyThreshold */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_NotifyThreshold */
let _cached_encoder_for_NotifyThreshold: $.ASN1Encoder<NotifyThreshold> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_NotifyThreshold */

/* START_OF_SYMBOL_DEFINITION _encode_NotifyThreshold */
/**
 * @summary Encodes a(n) NotifyThreshold into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NotifyThreshold, encoded as an ASN.1 Element.
 */
export
function _encode_NotifyThreshold (value: NotifyThreshold, elGetter: $.ASN1Encoder<NotifyThreshold>) {
    if (!_cached_encoder_for_NotifyThreshold) { _cached_encoder_for_NotifyThreshold = function (value: NotifyThreshold, elGetter: $.ASN1Encoder<NotifyThreshold>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ObservedValue(value.threshold, $.BER),
            /* REQUIRED   */ $._encodeBoolean(value.notifyOnOff, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_NotifyThreshold(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_NotifyThreshold */

/* eslint-enable */
