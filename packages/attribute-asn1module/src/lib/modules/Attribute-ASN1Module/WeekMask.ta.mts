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
import { WeekMask_Item, _decode_WeekMask_Item, _encode_WeekMask_Item } from "../Attribute-ASN1Module/WeekMask-Item.ta.mjs";
export { WeekMask_Item, _decode_WeekMask_Item, _encode_WeekMask_Item } from "../Attribute-ASN1Module/WeekMask-Item.ta.mjs";


/* START_OF_SYMBOL_DEFINITION WeekMask */
/**
 * @summary WeekMask
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * WeekMask  ::= 
 *   SET OF
 *     SEQUENCE {daysOfWeek
 *                 BIT STRING {sunday(0), monday(1), tuesday(2), wednesday(3),
 *                             thursday(4), friday(5), saturday(6)}(SIZE (7)),
 *               intervalsOfDay  IntervalsOfDay}
 * ```
 */
export
type WeekMask = WeekMask_Item[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION WeekMask */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_WeekMask */
let _cached_decoder_for_WeekMask: $.ASN1Decoder<WeekMask> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_WeekMask */

/* START_OF_SYMBOL_DEFINITION _decode_WeekMask */
/**
 * @summary Decodes an ASN.1 element into a(n) WeekMask
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {WeekMask} The decoded data structure.
 */
export
function _decode_WeekMask (el: _Element) {
    if (!_cached_decoder_for_WeekMask) { _cached_decoder_for_WeekMask = $._decodeSetOf<WeekMask_Item>(() => _decode_WeekMask_Item); }
    return _cached_decoder_for_WeekMask(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_WeekMask */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_WeekMask */
let _cached_encoder_for_WeekMask: $.ASN1Encoder<WeekMask> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_WeekMask */

/* START_OF_SYMBOL_DEFINITION _encode_WeekMask */
/**
 * @summary Encodes a(n) WeekMask into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The WeekMask, encoded as an ASN.1 Element.
 */
export
function _encode_WeekMask (value: WeekMask, elGetter: $.ASN1Encoder<WeekMask>) {
    if (!_cached_encoder_for_WeekMask) { _cached_encoder_for_WeekMask = $._encodeSetOf<WeekMask_Item>(() => _encode_WeekMask_Item, $.BER); }
    return _cached_encoder_for_WeekMask(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_WeekMask */

/* eslint-enable */
