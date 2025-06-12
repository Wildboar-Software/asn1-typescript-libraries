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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    ConvertMulticastToPtoPReply_Item,
    _decode_ConvertMulticastToPtoPReply_Item,
    _encode_ConvertMulticastToPtoPReply_Item,
} from '../M3100ASN1TypeModule6/ConvertMulticastToPtoPReply-Item.ta.mjs';
export {
    ConvertMulticastToPtoPReply_Item,
    _decode_ConvertMulticastToPtoPReply_Item,
    _encode_ConvertMulticastToPtoPReply_Item,
} from '../M3100ASN1TypeModule6/ConvertMulticastToPtoPReply-Item.ta.mjs';

/* START_OF_SYMBOL_DEFINITION ConvertMulticastToPtoPReply */
/**
 * @summary ConvertMulticastToPtoPReply
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ConvertMulticastToPtoPReply  ::=
 *   SEQUENCE OF CHOICE {failed   Failed,
 *                       success  ObjectInstance}
 * ```
 */
export type ConvertMulticastToPtoPReply = ConvertMulticastToPtoPReply_Item[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION ConvertMulticastToPtoPReply */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ConvertMulticastToPtoPReply */
let _cached_decoder_for_ConvertMulticastToPtoPReply: $.ASN1Decoder<ConvertMulticastToPtoPReply> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ConvertMulticastToPtoPReply */

/* START_OF_SYMBOL_DEFINITION _decode_ConvertMulticastToPtoPReply */
/**
 * @summary Decodes an ASN.1 element into a(n) ConvertMulticastToPtoPReply
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ConvertMulticastToPtoPReply} The decoded data structure.
 */
export function _decode_ConvertMulticastToPtoPReply(el: _Element) {
    if (!_cached_decoder_for_ConvertMulticastToPtoPReply) {
        _cached_decoder_for_ConvertMulticastToPtoPReply = $._decodeSequenceOf<ConvertMulticastToPtoPReply_Item>(
            () => _decode_ConvertMulticastToPtoPReply_Item
        );
    }
    return _cached_decoder_for_ConvertMulticastToPtoPReply(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ConvertMulticastToPtoPReply */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ConvertMulticastToPtoPReply */
let _cached_encoder_for_ConvertMulticastToPtoPReply: $.ASN1Encoder<ConvertMulticastToPtoPReply> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ConvertMulticastToPtoPReply */

/* START_OF_SYMBOL_DEFINITION _encode_ConvertMulticastToPtoPReply */
/**
 * @summary Encodes a(n) ConvertMulticastToPtoPReply into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConvertMulticastToPtoPReply, encoded as an ASN.1 Element.
 */
export function _encode_ConvertMulticastToPtoPReply(
    value: ConvertMulticastToPtoPReply,
    elGetter: $.ASN1Encoder<ConvertMulticastToPtoPReply>
) {
    if (!_cached_encoder_for_ConvertMulticastToPtoPReply) {
        _cached_encoder_for_ConvertMulticastToPtoPReply = $._encodeSequenceOf<ConvertMulticastToPtoPReply_Item>(
            () => _encode_ConvertMulticastToPtoPReply_Item,
            $.BER
        );
    }
    return _cached_encoder_for_ConvertMulticastToPtoPReply(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ConvertMulticastToPtoPReply */

/* eslint-enable */
