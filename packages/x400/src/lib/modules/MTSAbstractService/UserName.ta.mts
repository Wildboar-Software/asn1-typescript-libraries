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
    ORAddressAndOptionalDirectoryName,
    _decode_ORAddressAndOptionalDirectoryName,
    _encode_ORAddressAndOptionalDirectoryName,
} from '../MTSAbstractService/ORAddressAndOptionalDirectoryName.ta.mjs';
/**
 * @summary UserName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UserName  ::=  ORAddressAndOptionalDirectoryName
 * ```
 */
export type UserName = ORAddressAndOptionalDirectoryName; // DefinedType

let _cached_decoder_for_UserName: $.ASN1Decoder<UserName> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UserName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UserName} The decoded data structure.
 */
export function _decode_UserName(el: _Element): UserName {
    if (!_cached_decoder_for_UserName) {
        _cached_decoder_for_UserName = _decode_ORAddressAndOptionalDirectoryName;
    }
    return _cached_decoder_for_UserName(el);
}

let _cached_encoder_for_UserName: $.ASN1Encoder<UserName> | null = null;

/**
 * @summary Encodes a(n) UserName into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UserName, encoded as an ASN.1 Element.
 */
export function _encode_UserName(
    value: UserName,
    elGetter: $.ASN1Encoder<UserName>
): _Element {
    if (!_cached_encoder_for_UserName) {
        _cached_encoder_for_UserName = _encode_ORAddressAndOptionalDirectoryName;
    }
    return _cached_encoder_for_UserName(value, elGetter);
}


/* eslint-enable */
