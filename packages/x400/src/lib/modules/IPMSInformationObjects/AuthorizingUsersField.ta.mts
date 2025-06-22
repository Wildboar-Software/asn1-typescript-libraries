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
    AuthorizingUsersSubfield,
    _decode_AuthorizingUsersSubfield,
    _encode_AuthorizingUsersSubfield,
} from '../IPMSInformationObjects/AuthorizingUsersSubfield.ta.mjs';
/**
 * @summary AuthorizingUsersField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AuthorizingUsersField  ::=  SEQUENCE OF AuthorizingUsersSubfield
 * ```
 */
export type AuthorizingUsersField = AuthorizingUsersSubfield[]; // SequenceOfType

let _cached_decoder_for_AuthorizingUsersField: $.ASN1Decoder<AuthorizingUsersField> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AuthorizingUsersField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AuthorizingUsersField} The decoded data structure.
 */
export function _decode_AuthorizingUsersField(el: _Element) {
    if (!_cached_decoder_for_AuthorizingUsersField) {
        _cached_decoder_for_AuthorizingUsersField = $._decodeSequenceOf<AuthorizingUsersSubfield>(
            () => _decode_AuthorizingUsersSubfield
        );
    }
    return _cached_decoder_for_AuthorizingUsersField(el);
}

let _cached_encoder_for_AuthorizingUsersField: $.ASN1Encoder<AuthorizingUsersField> | null = null;

/**
 * @summary Encodes a(n) AuthorizingUsersField into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuthorizingUsersField, encoded as an ASN.1 Element.
 */
export function _encode_AuthorizingUsersField(
    value: AuthorizingUsersField,
    elGetter: $.ASN1Encoder<AuthorizingUsersField>
) {
    if (!_cached_encoder_for_AuthorizingUsersField) {
        _cached_encoder_for_AuthorizingUsersField = $._encodeSequenceOf<AuthorizingUsersSubfield>(
            () => _encode_AuthorizingUsersSubfield,
            $.BER
        );
    }
    return _cached_encoder_for_AuthorizingUsersField(value, elGetter);
}


/* eslint-enable */
