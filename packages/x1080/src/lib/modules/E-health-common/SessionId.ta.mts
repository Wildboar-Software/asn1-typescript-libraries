/* eslint-disable */
import {
    INTEGER,
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

/* START_OF_SYMBOL_DEFINITION SessionId */
/**
 * @summary SessionId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SessionId  ::=  INTEGER (1..32767)
 * ```
 */
export type SessionId = INTEGER;
/* END_OF_SYMBOL_DEFINITION SessionId */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SessionId */
let _cached_decoder_for_SessionId: $.ASN1Decoder<SessionId> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SessionId */

/* START_OF_SYMBOL_DEFINITION _decode_SessionId */
/**
 * @summary Decodes an ASN.1 element into a(n) SessionId
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SessionId} The decoded data structure.
 */
export function _decode_SessionId(el: _Element) {
    if (!_cached_decoder_for_SessionId) {
        _cached_decoder_for_SessionId = $._decodeInteger;
    }
    return _cached_decoder_for_SessionId(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SessionId */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SessionId */
let _cached_encoder_for_SessionId: $.ASN1Encoder<SessionId> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SessionId */

/* START_OF_SYMBOL_DEFINITION _encode_SessionId */
/**
 * @summary Encodes a(n) SessionId into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SessionId, encoded as an ASN.1 Element.
 */
export function _encode_SessionId(
    value: SessionId,
    elGetter: $.ASN1Encoder<SessionId>
) {
    if (!_cached_encoder_for_SessionId) {
        _cached_encoder_for_SessionId = $._encodeInteger;
    }
    return _cached_encoder_for_SessionId(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SessionId */

/* eslint-enable */
