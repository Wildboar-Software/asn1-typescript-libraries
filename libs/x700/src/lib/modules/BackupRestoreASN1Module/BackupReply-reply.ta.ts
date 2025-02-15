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

/* START_OF_SYMBOL_DEFINITION BackupReply_reply */
/**
 * @summary BackupReply_reply
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BackupReply-reply ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type BackupReply_reply =
    | { success: NULL } /* CHOICE_ALT_ROOT */
    | { inLine: BIT_STRING } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION BackupReply_reply */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BackupReply_reply */
let _cached_decoder_for_BackupReply_reply: $.ASN1Decoder<BackupReply_reply> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BackupReply_reply */

/* START_OF_SYMBOL_DEFINITION _decode_BackupReply_reply */
/**
 * @summary Decodes an ASN.1 element into a(n) BackupReply_reply
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BackupReply_reply} The decoded data structure.
 */
export function _decode_BackupReply_reply(el: _Element) {
    if (!_cached_decoder_for_BackupReply_reply) {
        _cached_decoder_for_BackupReply_reply = $._decode_inextensible_choice<BackupReply_reply>(
            {
                'UNIVERSAL 5': ['success', $._decodeNull],
                'UNIVERSAL 3': ['inLine', $._decodeBitString],
            }
        );
    }
    return _cached_decoder_for_BackupReply_reply(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_BackupReply_reply */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BackupReply_reply */
let _cached_encoder_for_BackupReply_reply: $.ASN1Encoder<BackupReply_reply> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BackupReply_reply */

/* START_OF_SYMBOL_DEFINITION _encode_BackupReply_reply */
/**
 * @summary Encodes a(n) BackupReply_reply into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BackupReply_reply, encoded as an ASN.1 Element.
 */
export function _encode_BackupReply_reply(
    value: BackupReply_reply,
    elGetter: $.ASN1Encoder<BackupReply_reply>
) {
    if (!_cached_encoder_for_BackupReply_reply) {
        _cached_encoder_for_BackupReply_reply = $._encode_choice<BackupReply_reply>(
            {
                success: $._encodeNull,
                inLine: $._encodeBitString,
            },
            $.BER
        );
    }
    return _cached_encoder_for_BackupReply_reply(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_BackupReply_reply */

/* eslint-enable */
