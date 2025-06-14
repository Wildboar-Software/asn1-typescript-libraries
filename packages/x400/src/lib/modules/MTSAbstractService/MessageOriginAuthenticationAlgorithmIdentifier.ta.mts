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
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from '@wildboar/x500/src/lib/modules/AuthenticationFramework/AlgorithmIdentifier.ta.mjs';
/* START_OF_SYMBOL_DEFINITION MessageOriginAuthenticationAlgorithmIdentifier */
/**
 * @summary MessageOriginAuthenticationAlgorithmIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MessageOriginAuthenticationAlgorithmIdentifier  ::=  AlgorithmIdentifier
 * ```
 */
export type MessageOriginAuthenticationAlgorithmIdentifier = AlgorithmIdentifier; // DefinedType
/* END_OF_SYMBOL_DEFINITION MessageOriginAuthenticationAlgorithmIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MessageOriginAuthenticationAlgorithmIdentifier */
let _cached_decoder_for_MessageOriginAuthenticationAlgorithmIdentifier: $.ASN1Decoder<MessageOriginAuthenticationAlgorithmIdentifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MessageOriginAuthenticationAlgorithmIdentifier */

/* START_OF_SYMBOL_DEFINITION _decode_MessageOriginAuthenticationAlgorithmIdentifier */
/**
 * @summary Decodes an ASN.1 element into a(n) MessageOriginAuthenticationAlgorithmIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MessageOriginAuthenticationAlgorithmIdentifier} The decoded data structure.
 */
export function _decode_MessageOriginAuthenticationAlgorithmIdentifier(
    el: _Element
) {
    if (!_cached_decoder_for_MessageOriginAuthenticationAlgorithmIdentifier) {
        _cached_decoder_for_MessageOriginAuthenticationAlgorithmIdentifier = _decode_AlgorithmIdentifier;
    }
    return _cached_decoder_for_MessageOriginAuthenticationAlgorithmIdentifier(
        el
    );
}
/* END_OF_SYMBOL_DEFINITION _decode_MessageOriginAuthenticationAlgorithmIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MessageOriginAuthenticationAlgorithmIdentifier */
let _cached_encoder_for_MessageOriginAuthenticationAlgorithmIdentifier: $.ASN1Encoder<MessageOriginAuthenticationAlgorithmIdentifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MessageOriginAuthenticationAlgorithmIdentifier */

/* START_OF_SYMBOL_DEFINITION _encode_MessageOriginAuthenticationAlgorithmIdentifier */
/**
 * @summary Encodes a(n) MessageOriginAuthenticationAlgorithmIdentifier into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MessageOriginAuthenticationAlgorithmIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_MessageOriginAuthenticationAlgorithmIdentifier(
    value: MessageOriginAuthenticationAlgorithmIdentifier,
    elGetter: $.ASN1Encoder<MessageOriginAuthenticationAlgorithmIdentifier>
) {
    if (!_cached_encoder_for_MessageOriginAuthenticationAlgorithmIdentifier) {
        _cached_encoder_for_MessageOriginAuthenticationAlgorithmIdentifier = _encode_AlgorithmIdentifier;
    }
    return _cached_encoder_for_MessageOriginAuthenticationAlgorithmIdentifier(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_MessageOriginAuthenticationAlgorithmIdentifier */

/* eslint-enable */
