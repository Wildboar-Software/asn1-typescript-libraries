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
    IssuerAndSerialNumber,
    _decode_IssuerAndSerialNumber,
    _encode_IssuerAndSerialNumber,
} from '../CmsTelebiometric/IssuerAndSerialNumber.ta.mjs';
/* START_OF_SYMBOL_DEFINITION KeyAgreeRecipientIdentifier */
/**
 * @summary KeyAgreeRecipientIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KeyAgreeRecipientIdentifier  ::=  CHOICE {
 *   issuerAndSerialNumber IssuerAndSerialNumber,
 * --rKeyId            [0] IMPLICIT RecipientKeyIdentifier,
 *   ... }
 * ```
 */
export type KeyAgreeRecipientIdentifier =
    | { issuerAndSerialNumber: IssuerAndSerialNumber } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION KeyAgreeRecipientIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_KeyAgreeRecipientIdentifier */
let _cached_decoder_for_KeyAgreeRecipientIdentifier: $.ASN1Decoder<KeyAgreeRecipientIdentifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_KeyAgreeRecipientIdentifier */

/* START_OF_SYMBOL_DEFINITION _decode_KeyAgreeRecipientIdentifier */
/**
 * @summary Decodes an ASN.1 element into a(n) KeyAgreeRecipientIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {KeyAgreeRecipientIdentifier} The decoded data structure.
 */
export function _decode_KeyAgreeRecipientIdentifier(el: _Element) {
    if (!_cached_decoder_for_KeyAgreeRecipientIdentifier) {
        _cached_decoder_for_KeyAgreeRecipientIdentifier = $._decode_extensible_choice<KeyAgreeRecipientIdentifier>(
            {
                'UNIVERSAL 16': [
                    'issuerAndSerialNumber',
                    _decode_IssuerAndSerialNumber,
                ],
            }
        );
    }
    return _cached_decoder_for_KeyAgreeRecipientIdentifier(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_KeyAgreeRecipientIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_KeyAgreeRecipientIdentifier */
let _cached_encoder_for_KeyAgreeRecipientIdentifier: $.ASN1Encoder<KeyAgreeRecipientIdentifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_KeyAgreeRecipientIdentifier */

/* START_OF_SYMBOL_DEFINITION _encode_KeyAgreeRecipientIdentifier */
/**
 * @summary Encodes a(n) KeyAgreeRecipientIdentifier into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KeyAgreeRecipientIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_KeyAgreeRecipientIdentifier(
    value: KeyAgreeRecipientIdentifier,
    elGetter: $.ASN1Encoder<KeyAgreeRecipientIdentifier>
) {
    if (!_cached_encoder_for_KeyAgreeRecipientIdentifier) {
        _cached_encoder_for_KeyAgreeRecipientIdentifier = $._encode_choice<KeyAgreeRecipientIdentifier>(
            {
                issuerAndSerialNumber: _encode_IssuerAndSerialNumber,
            },
            $.BER
        );
    }
    return _cached_encoder_for_KeyAgreeRecipientIdentifier(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_KeyAgreeRecipientIdentifier */

/* eslint-enable */
