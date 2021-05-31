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


/* START_OF_SYMBOL_DEFINITION GaugeThresholdValue */
/**
 * @summary GaugeThresholdValue
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GaugeThresholdValue  ::=  ObservedValue
 * ```
 */
export
type GaugeThresholdValue = ObservedValue; // DefinedType
/* END_OF_SYMBOL_DEFINITION GaugeThresholdValue */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_GaugeThresholdValue */
let _cached_decoder_for_GaugeThresholdValue: $.ASN1Decoder<GaugeThresholdValue> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_GaugeThresholdValue */

/* START_OF_SYMBOL_DEFINITION _decode_GaugeThresholdValue */
/**
 * @summary Decodes an ASN.1 element into a(n) GaugeThresholdValue
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {GaugeThresholdValue} The decoded data structure.
 */
export
function _decode_GaugeThresholdValue (el: _Element) {
    if (!_cached_decoder_for_GaugeThresholdValue) { _cached_decoder_for_GaugeThresholdValue = _decode_ObservedValue; }
    return _cached_decoder_for_GaugeThresholdValue(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_GaugeThresholdValue */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_GaugeThresholdValue */
let _cached_encoder_for_GaugeThresholdValue: $.ASN1Encoder<GaugeThresholdValue> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_GaugeThresholdValue */

/* START_OF_SYMBOL_DEFINITION _encode_GaugeThresholdValue */
/**
 * @summary Encodes a(n) GaugeThresholdValue into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GaugeThresholdValue, encoded as an ASN.1 Element.
 */
export
function _encode_GaugeThresholdValue (value: GaugeThresholdValue, elGetter: $.ASN1Encoder<GaugeThresholdValue>) {
    if (!_cached_encoder_for_GaugeThresholdValue) { _cached_encoder_for_GaugeThresholdValue = _encode_ObservedValue; }
    return _cached_encoder_for_GaugeThresholdValue(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_GaugeThresholdValue */

/* eslint-enable */
