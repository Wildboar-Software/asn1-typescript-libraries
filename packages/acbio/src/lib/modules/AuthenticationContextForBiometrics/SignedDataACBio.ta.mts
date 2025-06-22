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
import * as $ from '@wildboar/asn1/functional';
import {
    SIGNEDDATA,
    _get_decoder_for_SIGNEDDATA,
    _get_encoder_for_SIGNEDDATA,
} from '../AuthenticationContextForBiometrics/SIGNEDDATA.ta.mjs';
import {
    EncapsulatedContentInfoACBio,
    _decode_EncapsulatedContentInfoACBio,
    _encode_EncapsulatedContentInfoACBio,
} from '../AuthenticationContextForBiometrics/EncapsulatedContentInfoACBio.ta.mjs';

/**
 * @summary SignedDataACBio
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SignedDataACBio  ::=  SIGNEDDATA { EncapsulatedContentInfoACBio }
 * ```
 */
export type SignedDataACBio = SIGNEDDATA<EncapsulatedContentInfoACBio>; // DefinedType


let _cached_decoder_for_SignedDataACBio: $.ASN1Decoder<SignedDataACBio> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) SignedDataACBio
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SignedDataACBio} The decoded data structure.
 */
export function _decode_SignedDataACBio(el: _Element) {
    if (!_cached_decoder_for_SignedDataACBio) {
        _cached_decoder_for_SignedDataACBio = _get_decoder_for_SIGNEDDATA<EncapsulatedContentInfoACBio>(
            _decode_EncapsulatedContentInfoACBio
        );
    }
    return _cached_decoder_for_SignedDataACBio(el);
}


let _cached_encoder_for_SignedDataACBio: $.ASN1Encoder<SignedDataACBio> | null = null;


/**
 * @summary Encodes a(n) SignedDataACBio into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SignedDataACBio, encoded as an ASN.1 Element.
 */
export function _encode_SignedDataACBio(
    value: SignedDataACBio,
    elGetter: $.ASN1Encoder<SignedDataACBio>
) {
    if (!_cached_encoder_for_SignedDataACBio) {
        _cached_encoder_for_SignedDataACBio = _get_encoder_for_SIGNEDDATA<EncapsulatedContentInfoACBio>(
            _encode_EncapsulatedContentInfoACBio
        );
    }
    return _cached_encoder_for_SignedDataACBio(value, elGetter);
}


/* eslint-enable */
