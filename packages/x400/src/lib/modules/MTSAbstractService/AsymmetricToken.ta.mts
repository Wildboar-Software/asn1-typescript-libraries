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
    SIGNED,
    _get_decoder_for_SIGNED,
    _get_encoder_for_SIGNED,
} from '@wildboar/x500/src/lib/modules/AuthenticationFramework/SIGNED.ta.mjs';
import {
    TBSAsymmetricToken,
    _decode_TBSAsymmetricToken,
    _encode_TBSAsymmetricToken,
} from '../MTSAbstractService/TBSAsymmetricToken.ta.mjs';

/* START_OF_SYMBOL_DEFINITION AsymmetricToken */
/**
 * @summary AsymmetricToken
 * @description
 *
 * This definition was manually modified.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AsymmetricToken  ::=  SIGNED{TBSAsymmetricToken}
 * ```
 */
export type AsymmetricToken = SIGNED<TBSAsymmetricToken>; // DefinedType
/* END_OF_SYMBOL_DEFINITION AsymmetricToken */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AsymmetricToken */
let _cached_decoder_for_AsymmetricToken: $.ASN1Decoder<AsymmetricToken> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AsymmetricToken */

/* START_OF_SYMBOL_DEFINITION _decode_AsymmetricToken */
/**
 * @summary Decodes an ASN.1 element into a(n) AsymmetricToken
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AsymmetricToken} The decoded data structure.
 */
export function _decode_AsymmetricToken(el: _Element) {
    if (!_cached_decoder_for_AsymmetricToken) {
        _cached_decoder_for_AsymmetricToken = _get_decoder_for_SIGNED<TBSAsymmetricToken>(
            _decode_TBSAsymmetricToken
        );
    }
    return _cached_decoder_for_AsymmetricToken(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AsymmetricToken */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AsymmetricToken */
let _cached_encoder_for_AsymmetricToken: $.ASN1Encoder<AsymmetricToken> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AsymmetricToken */

/* START_OF_SYMBOL_DEFINITION _encode_AsymmetricToken */
/**
 * @summary Encodes a(n) AsymmetricToken into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AsymmetricToken, encoded as an ASN.1 Element.
 */
export function _encode_AsymmetricToken(
    value: AsymmetricToken,
    elGetter: $.ASN1Encoder<AsymmetricToken>
) {
    if (!_cached_encoder_for_AsymmetricToken) {
        _cached_encoder_for_AsymmetricToken = _get_encoder_for_SIGNED<TBSAsymmetricToken>(
            _encode_TBSAsymmetricToken
        );
    }
    return _cached_encoder_for_AsymmetricToken(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AsymmetricToken */

/* eslint-enable */
