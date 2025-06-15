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
    ORAddressAndOptionalDirectoryName,
    _decode_ORAddressAndOptionalDirectoryName,
    _encode_ORAddressAndOptionalDirectoryName,
} from '../MTSAbstractService/ORAddressAndOptionalDirectoryName.ta.mjs';
/**
 * @summary OriginatorRequestedAlternateRecipient
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OriginatorRequestedAlternateRecipient  ::=  ORAddressAndOptionalDirectoryName
 * ```
 */
export type OriginatorRequestedAlternateRecipient = ORAddressAndOptionalDirectoryName; // DefinedType

let _cached_decoder_for_OriginatorRequestedAlternateRecipient: $.ASN1Decoder<OriginatorRequestedAlternateRecipient> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OriginatorRequestedAlternateRecipient
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OriginatorRequestedAlternateRecipient} The decoded data structure.
 */
export function _decode_OriginatorRequestedAlternateRecipient(el: _Element) {
    if (!_cached_decoder_for_OriginatorRequestedAlternateRecipient) {
        _cached_decoder_for_OriginatorRequestedAlternateRecipient = _decode_ORAddressAndOptionalDirectoryName;
    }
    return _cached_decoder_for_OriginatorRequestedAlternateRecipient(el);
}

let _cached_encoder_for_OriginatorRequestedAlternateRecipient: $.ASN1Encoder<OriginatorRequestedAlternateRecipient> | null = null;

/**
 * @summary Encodes a(n) OriginatorRequestedAlternateRecipient into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OriginatorRequestedAlternateRecipient, encoded as an ASN.1 Element.
 */
export function _encode_OriginatorRequestedAlternateRecipient(
    value: OriginatorRequestedAlternateRecipient,
    elGetter: $.ASN1Encoder<OriginatorRequestedAlternateRecipient>
) {
    if (!_cached_encoder_for_OriginatorRequestedAlternateRecipient) {
        _cached_encoder_for_OriginatorRequestedAlternateRecipient = _encode_ORAddressAndOptionalDirectoryName;
    }
    return _cached_encoder_for_OriginatorRequestedAlternateRecipient(
        value,
        elGetter
    );
}


/* eslint-enable */
