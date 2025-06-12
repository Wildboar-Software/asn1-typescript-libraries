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
    ConvertPtoPToMulticastReply_Item,
    _decode_ConvertPtoPToMulticastReply_Item,
    _encode_ConvertPtoPToMulticastReply_Item,
} from '../M3100ASN1TypeModule6/ConvertPtoPToMulticastReply-Item.ta.js';
export {
    ConvertPtoPToMulticastReply_Item,
    _decode_ConvertPtoPToMulticastReply_Item,
    _encode_ConvertPtoPToMulticastReply_Item,
} from '../M3100ASN1TypeModule6/ConvertPtoPToMulticastReply-Item.ta.js';

/* START_OF_SYMBOL_DEFINITION ConvertPtoPToMulticastReply */
/**
 * @summary ConvertPtoPToMulticastReply
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ConvertPtoPToMulticastReply  ::=
 *   SEQUENCE OF
 *     CHOICE {failed   [0]  Failed,
 *             success  [1]  SEQUENCE {mpXC  ObjectInstance,
 *                                     xC    ObjectInstance}}
 * ```
 */
export type ConvertPtoPToMulticastReply = ConvertPtoPToMulticastReply_Item[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION ConvertPtoPToMulticastReply */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ConvertPtoPToMulticastReply */
let _cached_decoder_for_ConvertPtoPToMulticastReply: $.ASN1Decoder<ConvertPtoPToMulticastReply> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ConvertPtoPToMulticastReply */

/* START_OF_SYMBOL_DEFINITION _decode_ConvertPtoPToMulticastReply */
/**
 * @summary Decodes an ASN.1 element into a(n) ConvertPtoPToMulticastReply
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ConvertPtoPToMulticastReply} The decoded data structure.
 */
export function _decode_ConvertPtoPToMulticastReply(el: _Element) {
    if (!_cached_decoder_for_ConvertPtoPToMulticastReply) {
        _cached_decoder_for_ConvertPtoPToMulticastReply = $._decodeSequenceOf<ConvertPtoPToMulticastReply_Item>(
            () => _decode_ConvertPtoPToMulticastReply_Item
        );
    }
    return _cached_decoder_for_ConvertPtoPToMulticastReply(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ConvertPtoPToMulticastReply */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ConvertPtoPToMulticastReply */
let _cached_encoder_for_ConvertPtoPToMulticastReply: $.ASN1Encoder<ConvertPtoPToMulticastReply> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ConvertPtoPToMulticastReply */

/* START_OF_SYMBOL_DEFINITION _encode_ConvertPtoPToMulticastReply */
/**
 * @summary Encodes a(n) ConvertPtoPToMulticastReply into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConvertPtoPToMulticastReply, encoded as an ASN.1 Element.
 */
export function _encode_ConvertPtoPToMulticastReply(
    value: ConvertPtoPToMulticastReply,
    elGetter: $.ASN1Encoder<ConvertPtoPToMulticastReply>
) {
    if (!_cached_encoder_for_ConvertPtoPToMulticastReply) {
        _cached_encoder_for_ConvertPtoPToMulticastReply = $._encodeSequenceOf<ConvertPtoPToMulticastReply_Item>(
            () => _encode_ConvertPtoPToMulticastReply_Item,
            $.BER
        );
    }
    return _cached_encoder_for_ConvertPtoPToMulticastReply(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ConvertPtoPToMulticastReply */

/* eslint-enable */
