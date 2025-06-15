/* eslint-disable */
import {
    BIT_STRING,
    NULL,
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

let _cached_decoder_for_BackupReply_reply: $.ASN1Decoder<BackupReply_reply> | null = null;

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

let _cached_encoder_for_BackupReply_reply: $.ASN1Encoder<BackupReply_reply> | null = null;

/**
 * @summary Encodes a(n) BackupReply_reply into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
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


/* eslint-enable */
