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
import { CounterThreshold_Item, _decode_CounterThreshold_Item, _encode_CounterThreshold_Item } from "../Attribute-ASN1Module/CounterThreshold-Item.ta.mjs";
export { CounterThreshold_Item, _decode_CounterThreshold_Item, _encode_CounterThreshold_Item } from "../Attribute-ASN1Module/CounterThreshold-Item.ta.mjs";


/* START_OF_SYMBOL_DEFINITION CounterThreshold */
/**
 * @summary CounterThreshold
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CounterThreshold  ::= 
 *   SET OF
 *     SEQUENCE {comparisonLevel    INTEGER,
 *               offsetValue        INTEGER,
 *               notificationOnOff  BOOLEAN}
 * ```
 */
export
type CounterThreshold = CounterThreshold_Item[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION CounterThreshold */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CounterThreshold */
let _cached_decoder_for_CounterThreshold: $.ASN1Decoder<CounterThreshold> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CounterThreshold */

/* START_OF_SYMBOL_DEFINITION _decode_CounterThreshold */
/**
 * @summary Decodes an ASN.1 element into a(n) CounterThreshold
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CounterThreshold} The decoded data structure.
 */
export
function _decode_CounterThreshold (el: _Element) {
    if (!_cached_decoder_for_CounterThreshold) { _cached_decoder_for_CounterThreshold = $._decodeSetOf<CounterThreshold_Item>(() => _decode_CounterThreshold_Item); }
    return _cached_decoder_for_CounterThreshold(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CounterThreshold */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CounterThreshold */
let _cached_encoder_for_CounterThreshold: $.ASN1Encoder<CounterThreshold> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CounterThreshold */

/* START_OF_SYMBOL_DEFINITION _encode_CounterThreshold */
/**
 * @summary Encodes a(n) CounterThreshold into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CounterThreshold, encoded as an ASN.1 Element.
 */
export
function _encode_CounterThreshold (value: CounterThreshold, elGetter: $.ASN1Encoder<CounterThreshold>) {
    if (!_cached_encoder_for_CounterThreshold) { _cached_encoder_for_CounterThreshold = $._encodeSetOf<CounterThreshold_Item>(() => _encode_CounterThreshold_Item, $.BER); }
    return _cached_encoder_for_CounterThreshold(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CounterThreshold */

/* eslint-enable */
