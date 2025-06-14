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
    MessageToken,
    _decode_MessageToken,
    _encode_MessageToken,
} from '../MTSAbstractService/MessageToken.ta.mjs';
/* START_OF_SYMBOL_DEFINITION OriginalMessageToken */
/**
 * @summary OriginalMessageToken
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OriginalMessageToken  ::=  MessageToken
 * ```
 */
export type OriginalMessageToken = MessageToken; // DefinedType
/* END_OF_SYMBOL_DEFINITION OriginalMessageToken */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_OriginalMessageToken */
let _cached_decoder_for_OriginalMessageToken: $.ASN1Decoder<OriginalMessageToken> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_OriginalMessageToken */

/* START_OF_SYMBOL_DEFINITION _decode_OriginalMessageToken */
/**
 * @summary Decodes an ASN.1 element into a(n) OriginalMessageToken
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OriginalMessageToken} The decoded data structure.
 */
export function _decode_OriginalMessageToken(el: _Element) {
    if (!_cached_decoder_for_OriginalMessageToken) {
        _cached_decoder_for_OriginalMessageToken = _decode_MessageToken;
    }
    return _cached_decoder_for_OriginalMessageToken(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_OriginalMessageToken */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_OriginalMessageToken */
let _cached_encoder_for_OriginalMessageToken: $.ASN1Encoder<OriginalMessageToken> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_OriginalMessageToken */

/* START_OF_SYMBOL_DEFINITION _encode_OriginalMessageToken */
/**
 * @summary Encodes a(n) OriginalMessageToken into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OriginalMessageToken, encoded as an ASN.1 Element.
 */
export function _encode_OriginalMessageToken(
    value: OriginalMessageToken,
    elGetter: $.ASN1Encoder<OriginalMessageToken>
) {
    if (!_cached_encoder_for_OriginalMessageToken) {
        _cached_encoder_for_OriginalMessageToken = _encode_MessageToken;
    }
    return _cached_encoder_for_OriginalMessageToken(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_OriginalMessageToken */

/* eslint-enable */
