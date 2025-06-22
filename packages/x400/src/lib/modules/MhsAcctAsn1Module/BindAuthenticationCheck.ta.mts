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
    AuthenticationCheck,
    _decode_AuthenticationCheck,
    _encode_AuthenticationCheck,
} from '../MhsAcctAsn1Module/AuthenticationCheck.ta.mjs';
/**
 * @summary BindAuthenticationCheck
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BindAuthenticationCheck  ::=  AuthenticationCheck
 * ```
 */
export type BindAuthenticationCheck = AuthenticationCheck; // DefinedType

let _cached_decoder_for_BindAuthenticationCheck: $.ASN1Decoder<BindAuthenticationCheck> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BindAuthenticationCheck
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BindAuthenticationCheck} The decoded data structure.
 */
export function _decode_BindAuthenticationCheck(el: _Element) {
    if (!_cached_decoder_for_BindAuthenticationCheck) {
        _cached_decoder_for_BindAuthenticationCheck = _decode_AuthenticationCheck;
    }
    return _cached_decoder_for_BindAuthenticationCheck(el);
}

let _cached_encoder_for_BindAuthenticationCheck: $.ASN1Encoder<BindAuthenticationCheck> | null = null;

/**
 * @summary Encodes a(n) BindAuthenticationCheck into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BindAuthenticationCheck, encoded as an ASN.1 Element.
 */
export function _encode_BindAuthenticationCheck(
    value: BindAuthenticationCheck,
    elGetter: $.ASN1Encoder<BindAuthenticationCheck>
) {
    if (!_cached_encoder_for_BindAuthenticationCheck) {
        _cached_encoder_for_BindAuthenticationCheck = _encode_AuthenticationCheck;
    }
    return _cached_encoder_for_BindAuthenticationCheck(value, elGetter);
}


/* eslint-enable */
