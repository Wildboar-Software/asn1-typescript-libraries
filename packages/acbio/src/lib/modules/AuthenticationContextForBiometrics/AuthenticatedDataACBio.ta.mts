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
    AUTHENTICATEDDATA,
    _get_decoder_for_AUTHENTICATEDDATA,
    _get_encoder_for_AUTHENTICATEDDATA,
} from '../AuthenticationContextForBiometrics/AUTHENTICATEDDATA.ta.mjs';
import {
    EncapsulatedContentInfoACBio,
    _decode_EncapsulatedContentInfoACBio,
    _encode_EncapsulatedContentInfoACBio,
} from '../AuthenticationContextForBiometrics/EncapsulatedContentInfoACBio.ta.mjs';

/**
 * @summary AuthenticatedDataACBio
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AuthenticatedDataACBio  ::=  AUTHENTICATEDDATA { EncapsulatedContentInfoACBio }
 * ```
 */
export type AuthenticatedDataACBio = AUTHENTICATEDDATA<EncapsulatedContentInfoACBio>; // DefinedType


let _cached_decoder_for_AuthenticatedDataACBio: $.ASN1Decoder<AuthenticatedDataACBio> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) AuthenticatedDataACBio
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AuthenticatedDataACBio} The decoded data structure.
 */
export function _decode_AuthenticatedDataACBio(el: _Element) {
    if (!_cached_decoder_for_AuthenticatedDataACBio) {
        _cached_decoder_for_AuthenticatedDataACBio = _get_decoder_for_AUTHENTICATEDDATA<EncapsulatedContentInfoACBio>(
            _decode_EncapsulatedContentInfoACBio
        );
    }
    return _cached_decoder_for_AuthenticatedDataACBio(el);
}


let _cached_encoder_for_AuthenticatedDataACBio: $.ASN1Encoder<AuthenticatedDataACBio> | null = null;


/**
 * @summary Encodes a(n) AuthenticatedDataACBio into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuthenticatedDataACBio, encoded as an ASN.1 Element.
 */
export function _encode_AuthenticatedDataACBio(
    value: AuthenticatedDataACBio,
    elGetter: $.ASN1Encoder<AuthenticatedDataACBio>
) {
    if (!_cached_encoder_for_AuthenticatedDataACBio) {
        _cached_encoder_for_AuthenticatedDataACBio = _get_encoder_for_AUTHENTICATEDDATA<EncapsulatedContentInfoACBio>(
            _encode_EncapsulatedContentInfoACBio
        );
    }
    return _cached_encoder_for_AuthenticatedDataACBio(value, elGetter);
}


/* eslint-enable */
