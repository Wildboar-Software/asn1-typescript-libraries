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
    IssuerAndSerialNumber,
    _decode_IssuerAndSerialNumber,
    _encode_IssuerAndSerialNumber,
} from '../CmsTelebiometric/IssuerAndSerialNumber.ta.mjs';

/**
 * @summary SignerIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SignerIdentifier  ::=  CHOICE {
 *   issuerAndSerialNumber    IssuerAndSerialNumber,
 * --subjectKeyIdentifier [0] SubjectKeyIdentifier,
 *   ...}
 * ```
 */
export type SignerIdentifier =
    | { issuerAndSerialNumber: IssuerAndSerialNumber } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;


let _cached_decoder_for_SignerIdentifier: $.ASN1Decoder<SignerIdentifier> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) SignerIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SignerIdentifier} The decoded data structure.
 */
export function _decode_SignerIdentifier(el: _Element): SignerIdentifier {
    if (!_cached_decoder_for_SignerIdentifier) {
        _cached_decoder_for_SignerIdentifier = $._decode_extensible_choice<SignerIdentifier>(
            {
                'UNIVERSAL 16': [
                    'issuerAndSerialNumber',
                    _decode_IssuerAndSerialNumber,
                ],
            }
        );
    }
    return _cached_decoder_for_SignerIdentifier(el);
}


let _cached_encoder_for_SignerIdentifier: $.ASN1Encoder<SignerIdentifier> | null = null;


/**
 * @summary Encodes a(n) SignerIdentifier into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SignerIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_SignerIdentifier(
    value: SignerIdentifier,
    elGetter: $.ASN1Encoder<SignerIdentifier>
): _Element {
    if (!_cached_encoder_for_SignerIdentifier) {
        _cached_encoder_for_SignerIdentifier = $._encode_choice<SignerIdentifier>(
            {
                issuerAndSerialNumber: _encode_IssuerAndSerialNumber,
            },
            $.BER
        );
    }
    return _cached_encoder_for_SignerIdentifier(value, elGetter);
}


/* eslint-enable */
