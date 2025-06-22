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
    ORDescriptor,
    _decode_ORDescriptor,
    _encode_ORDescriptor,
} from '../IPMSInformationObjects/ORDescriptor.ta.mjs';
/**
 * @summary AuthorizingUsersSubfield
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AuthorizingUsersSubfield  ::=  ORDescriptor
 * ```
 */
export type AuthorizingUsersSubfield = ORDescriptor; // DefinedType

let _cached_decoder_for_AuthorizingUsersSubfield: $.ASN1Decoder<AuthorizingUsersSubfield> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AuthorizingUsersSubfield
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AuthorizingUsersSubfield} The decoded data structure.
 */
export function _decode_AuthorizingUsersSubfield(el: _Element) {
    if (!_cached_decoder_for_AuthorizingUsersSubfield) {
        _cached_decoder_for_AuthorizingUsersSubfield = _decode_ORDescriptor;
    }
    return _cached_decoder_for_AuthorizingUsersSubfield(el);
}

let _cached_encoder_for_AuthorizingUsersSubfield: $.ASN1Encoder<AuthorizingUsersSubfield> | null = null;

/**
 * @summary Encodes a(n) AuthorizingUsersSubfield into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuthorizingUsersSubfield, encoded as an ASN.1 Element.
 */
export function _encode_AuthorizingUsersSubfield(
    value: AuthorizingUsersSubfield,
    elGetter: $.ASN1Encoder<AuthorizingUsersSubfield>
) {
    if (!_cached_encoder_for_AuthorizingUsersSubfield) {
        _cached_encoder_for_AuthorizingUsersSubfield = _encode_ORDescriptor;
    }
    return _cached_encoder_for_AuthorizingUsersSubfield(value, elGetter);
}


/* eslint-enable */
