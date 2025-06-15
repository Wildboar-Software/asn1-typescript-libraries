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
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    SecurityLabel,
    _decode_SecurityLabel,
    _encode_SecurityLabel,
} from '../MTSAbstractService/SecurityLabel.ta.mjs';
/**
 * @summary UserSecurityLabel
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UserSecurityLabel  ::=  SecurityLabel
 * ```
 */
export type UserSecurityLabel = SecurityLabel; // DefinedType

let _cached_decoder_for_UserSecurityLabel: $.ASN1Decoder<UserSecurityLabel> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UserSecurityLabel
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UserSecurityLabel} The decoded data structure.
 */
export function _decode_UserSecurityLabel(el: _Element) {
    if (!_cached_decoder_for_UserSecurityLabel) {
        _cached_decoder_for_UserSecurityLabel = _decode_SecurityLabel;
    }
    return _cached_decoder_for_UserSecurityLabel(el);
}

let _cached_encoder_for_UserSecurityLabel: $.ASN1Encoder<UserSecurityLabel> | null = null;

/**
 * @summary Encodes a(n) UserSecurityLabel into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UserSecurityLabel, encoded as an ASN.1 Element.
 */
export function _encode_UserSecurityLabel(
    value: UserSecurityLabel,
    elGetter: $.ASN1Encoder<UserSecurityLabel>
) {
    if (!_cached_encoder_for_UserSecurityLabel) {
        _cached_encoder_for_UserSecurityLabel = _encode_SecurityLabel;
    }
    return _cached_encoder_for_UserSecurityLabel(value, elGetter);
}


/* eslint-enable */
