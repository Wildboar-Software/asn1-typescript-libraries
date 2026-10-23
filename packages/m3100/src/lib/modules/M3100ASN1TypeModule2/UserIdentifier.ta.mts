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
    NameType,
    _decode_NameType,
    _encode_NameType,
} from '../ASN1DefinedTypesModule/NameType.ta.mjs';


/**
 * @summary UserIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UserIdentifier  ::=  NameType
 * ```
 */
export type UserIdentifier = NameType; // DefinedType


let _cached_decoder_for_UserIdentifier: $.ASN1Decoder<UserIdentifier> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) UserIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UserIdentifier} The decoded data structure.
 */
export function _decode_UserIdentifier(el: _Element): UserIdentifier {
    if (!_cached_decoder_for_UserIdentifier) {
        _cached_decoder_for_UserIdentifier = _decode_NameType;
    }
    return _cached_decoder_for_UserIdentifier(el);
}


let _cached_encoder_for_UserIdentifier: $.ASN1Encoder<UserIdentifier> | null = null;


/**
 * @summary Encodes a(n) UserIdentifier into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UserIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_UserIdentifier(
    value: UserIdentifier,
    elGetter: $.ASN1Encoder<UserIdentifier>
): _Element {
    if (!_cached_encoder_for_UserIdentifier) {
        _cached_encoder_for_UserIdentifier = _encode_NameType;
    }
    return _cached_encoder_for_UserIdentifier(value, elGetter);
}


/* eslint-enable */
