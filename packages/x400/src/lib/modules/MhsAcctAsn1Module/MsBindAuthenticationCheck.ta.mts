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
    AuthenticationCheck,
    _decode_AuthenticationCheck,
    _encode_AuthenticationCheck,
} from '../MhsAcctAsn1Module/AuthenticationCheck.ta.mjs';
/**
 * @summary MsBindAuthenticationCheck
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MsBindAuthenticationCheck  ::=  AuthenticationCheck
 * ```
 */
export type MsBindAuthenticationCheck = AuthenticationCheck; // DefinedType

let _cached_decoder_for_MsBindAuthenticationCheck: $.ASN1Decoder<MsBindAuthenticationCheck> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MsBindAuthenticationCheck
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MsBindAuthenticationCheck} The decoded data structure.
 */
export function _decode_MsBindAuthenticationCheck(el: _Element) {
    if (!_cached_decoder_for_MsBindAuthenticationCheck) {
        _cached_decoder_for_MsBindAuthenticationCheck = _decode_AuthenticationCheck;
    }
    return _cached_decoder_for_MsBindAuthenticationCheck(el);
}

let _cached_encoder_for_MsBindAuthenticationCheck: $.ASN1Encoder<MsBindAuthenticationCheck> | null = null;

/**
 * @summary Encodes a(n) MsBindAuthenticationCheck into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MsBindAuthenticationCheck, encoded as an ASN.1 Element.
 */
export function _encode_MsBindAuthenticationCheck(
    value: MsBindAuthenticationCheck,
    elGetter: $.ASN1Encoder<MsBindAuthenticationCheck>
) {
    if (!_cached_encoder_for_MsBindAuthenticationCheck) {
        _cached_encoder_for_MsBindAuthenticationCheck = _encode_AuthenticationCheck;
    }
    return _cached_encoder_for_MsBindAuthenticationCheck(value, elGetter);
}


/* eslint-enable */
