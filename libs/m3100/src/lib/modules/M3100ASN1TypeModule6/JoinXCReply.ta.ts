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
import * as $ from 'asn1-ts/dist/node/functional';
import {
    JoinXCReply_Item,
    _decode_JoinXCReply_Item,
    _encode_JoinXCReply_Item,
} from '../M3100ASN1TypeModule6/JoinXCReply-Item.ta';
export {
    JoinXCReply_Item,
    _decode_JoinXCReply_Item,
    _encode_JoinXCReply_Item,
} from '../M3100ASN1TypeModule6/JoinXCReply-Item.ta';

/* START_OF_SYMBOL_DEFINITION JoinXCReply */
/**
 * @summary JoinXCReply
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * JoinXCReply  ::=
 *   SEQUENCE OF
 *     CHOICE {failed   [0]  Failed,
 *             success
 *               [1]  CHOICE {unprotected  ObjectInstance,
 *                            protected    ProtectedXC}}
 * ```
 */
export type JoinXCReply = JoinXCReply_Item[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION JoinXCReply */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_JoinXCReply */
let _cached_decoder_for_JoinXCReply: $.ASN1Decoder<JoinXCReply> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_JoinXCReply */

/* START_OF_SYMBOL_DEFINITION _decode_JoinXCReply */
/**
 * @summary Decodes an ASN.1 element into a(n) JoinXCReply
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {JoinXCReply} The decoded data structure.
 */
export function _decode_JoinXCReply(el: _Element) {
    if (!_cached_decoder_for_JoinXCReply) {
        _cached_decoder_for_JoinXCReply = $._decodeSequenceOf<JoinXCReply_Item>(
            () => _decode_JoinXCReply_Item
        );
    }
    return _cached_decoder_for_JoinXCReply(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_JoinXCReply */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_JoinXCReply */
let _cached_encoder_for_JoinXCReply: $.ASN1Encoder<JoinXCReply> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_JoinXCReply */

/* START_OF_SYMBOL_DEFINITION _encode_JoinXCReply */
/**
 * @summary Encodes a(n) JoinXCReply into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The JoinXCReply, encoded as an ASN.1 Element.
 */
export function _encode_JoinXCReply(
    value: JoinXCReply,
    elGetter: $.ASN1Encoder<JoinXCReply>
) {
    if (!_cached_encoder_for_JoinXCReply) {
        _cached_encoder_for_JoinXCReply = $._encodeSequenceOf<JoinXCReply_Item>(
            () => _encode_JoinXCReply_Item,
            $.BER
        );
    }
    return _cached_encoder_for_JoinXCReply(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_JoinXCReply */

/* eslint-enable */
