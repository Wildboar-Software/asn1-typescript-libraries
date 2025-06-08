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
import { IntervalsOfDay_Item, _decode_IntervalsOfDay_Item, _encode_IntervalsOfDay_Item } from "../Attribute-ASN1Module/IntervalsOfDay-Item.ta";
export { IntervalsOfDay_Item, _decode_IntervalsOfDay_Item, _encode_IntervalsOfDay_Item } from "../Attribute-ASN1Module/IntervalsOfDay-Item.ta";


/* START_OF_SYMBOL_DEFINITION IntervalsOfDay */
/**
 * @summary IntervalsOfDay
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IntervalsOfDay  ::= 
 *   SET OF
 *     SEQUENCE {intervalStart  Time24, -- start at the beginning of this minute
 *               intervalEnd    Time24}
 * ```
 */
export
type IntervalsOfDay = IntervalsOfDay_Item[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION IntervalsOfDay */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_IntervalsOfDay */
let _cached_decoder_for_IntervalsOfDay: $.ASN1Decoder<IntervalsOfDay> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_IntervalsOfDay */

/* START_OF_SYMBOL_DEFINITION _decode_IntervalsOfDay */
/**
 * @summary Decodes an ASN.1 element into a(n) IntervalsOfDay
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {IntervalsOfDay} The decoded data structure.
 */
export
function _decode_IntervalsOfDay (el: _Element) {
    if (!_cached_decoder_for_IntervalsOfDay) { _cached_decoder_for_IntervalsOfDay = $._decodeSetOf<IntervalsOfDay_Item>(() => _decode_IntervalsOfDay_Item); }
    return _cached_decoder_for_IntervalsOfDay(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_IntervalsOfDay */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_IntervalsOfDay */
let _cached_encoder_for_IntervalsOfDay: $.ASN1Encoder<IntervalsOfDay> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_IntervalsOfDay */

/* START_OF_SYMBOL_DEFINITION _encode_IntervalsOfDay */
/**
 * @summary Encodes a(n) IntervalsOfDay into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IntervalsOfDay, encoded as an ASN.1 Element.
 */
export
function _encode_IntervalsOfDay (value: IntervalsOfDay, elGetter: $.ASN1Encoder<IntervalsOfDay>) {
    if (!_cached_encoder_for_IntervalsOfDay) { _cached_encoder_for_IntervalsOfDay = $._encodeSetOf<IntervalsOfDay_Item>(() => _encode_IntervalsOfDay_Item, $.BER); }
    return _cached_encoder_for_IntervalsOfDay(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_IntervalsOfDay */

/* eslint-enable */
