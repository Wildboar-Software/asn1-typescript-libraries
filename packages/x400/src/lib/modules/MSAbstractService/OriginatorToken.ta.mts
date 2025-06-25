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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    MessageToken,
    _decode_MessageToken,
    _encode_MessageToken,
} from '../MTSAbstractService/MessageToken.ta.mjs';
/**
 * @summary OriginatorToken
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OriginatorToken  ::=
 *   MessageToken
 *     (CONSTRAINED BY {
 *
 *        -- Must contain an asymmetric-token with an encrypted-data component --})
 * ```
 */
export type OriginatorToken = MessageToken; // DefinedType

let _cached_decoder_for_OriginatorToken: $.ASN1Decoder<OriginatorToken> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OriginatorToken
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OriginatorToken} The decoded data structure.
 */
export function _decode_OriginatorToken(el: _Element): OriginatorToken {
    if (!_cached_decoder_for_OriginatorToken) {
        _cached_decoder_for_OriginatorToken = _decode_MessageToken;
    }
    return _cached_decoder_for_OriginatorToken(el);
}

let _cached_encoder_for_OriginatorToken: $.ASN1Encoder<OriginatorToken> | null = null;

/**
 * @summary Encodes a(n) OriginatorToken into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OriginatorToken, encoded as an ASN.1 Element.
 */
export function _encode_OriginatorToken(
    value: OriginatorToken,
    elGetter: $.ASN1Encoder<OriginatorToken>
): _Element {
    if (!_cached_encoder_for_OriginatorToken) {
        _cached_encoder_for_OriginatorToken = _encode_MessageToken;
    }
    return _cached_encoder_for_OriginatorToken(value, elGetter);
}


/* eslint-enable */
