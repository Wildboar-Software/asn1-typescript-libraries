/* eslint-disable */
import {
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
    JoinXCReply_Item,
    _decode_JoinXCReply_Item,
    _encode_JoinXCReply_Item,
} from '../M3100ASN1TypeModule6/JoinXCReply-Item.ta.mjs';
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
 * @param value The element being encoded.
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
