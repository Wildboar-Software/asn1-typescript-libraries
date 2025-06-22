/* eslint-disable */
import {
    TeletexString,
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

/**
 * @summary AuthorizationInformationQualifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AuthorizationInformationQualifier  ::=
 *   TeletexString(SIZE (1..ub-authorization-information-qualifier))
 * ```
 */
export type AuthorizationInformationQualifier = TeletexString; // TeletexString

let _cached_decoder_for_AuthorizationInformationQualifier: $.ASN1Decoder<AuthorizationInformationQualifier> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AuthorizationInformationQualifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AuthorizationInformationQualifier} The decoded data structure.
 */
export function _decode_AuthorizationInformationQualifier(el: _Element) {
    if (!_cached_decoder_for_AuthorizationInformationQualifier) {
        _cached_decoder_for_AuthorizationInformationQualifier =
            $._decodeTeletexString;
    }
    return _cached_decoder_for_AuthorizationInformationQualifier(el);
}

let _cached_encoder_for_AuthorizationInformationQualifier: $.ASN1Encoder<AuthorizationInformationQualifier> | null = null;

/**
 * @summary Encodes a(n) AuthorizationInformationQualifier into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuthorizationInformationQualifier, encoded as an ASN.1 Element.
 */
export function _encode_AuthorizationInformationQualifier(
    value: AuthorizationInformationQualifier,
    elGetter: $.ASN1Encoder<AuthorizationInformationQualifier>
) {
    if (!_cached_encoder_for_AuthorizationInformationQualifier) {
        _cached_encoder_for_AuthorizationInformationQualifier =
            $._encodeTeletexString;
    }
    return _cached_encoder_for_AuthorizationInformationQualifier(
        value,
        elGetter
    );
}


/* eslint-enable */
