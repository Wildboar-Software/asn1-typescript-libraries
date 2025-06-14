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
    ORAddressAndOrDirectoryName,
    _decode_ORAddressAndOrDirectoryName,
    _encode_ORAddressAndOrDirectoryName,
} from '../MTSAbstractService/ORAddressAndOrDirectoryName.ta.mjs';
/* START_OF_SYMBOL_DEFINITION RecipientAssignedAlternateRecipient */
/**
 * @summary RecipientAssignedAlternateRecipient
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RecipientAssignedAlternateRecipient  ::=
 *   ORAddressAndOrDirectoryName
 * ```
 */
export type RecipientAssignedAlternateRecipient = ORAddressAndOrDirectoryName; // DefinedType
/* END_OF_SYMBOL_DEFINITION RecipientAssignedAlternateRecipient */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RecipientAssignedAlternateRecipient */
let _cached_decoder_for_RecipientAssignedAlternateRecipient: $.ASN1Decoder<RecipientAssignedAlternateRecipient> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RecipientAssignedAlternateRecipient */

/* START_OF_SYMBOL_DEFINITION _decode_RecipientAssignedAlternateRecipient */
/**
 * @summary Decodes an ASN.1 element into a(n) RecipientAssignedAlternateRecipient
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RecipientAssignedAlternateRecipient} The decoded data structure.
 */
export function _decode_RecipientAssignedAlternateRecipient(el: _Element) {
    if (!_cached_decoder_for_RecipientAssignedAlternateRecipient) {
        _cached_decoder_for_RecipientAssignedAlternateRecipient = _decode_ORAddressAndOrDirectoryName;
    }
    return _cached_decoder_for_RecipientAssignedAlternateRecipient(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RecipientAssignedAlternateRecipient */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RecipientAssignedAlternateRecipient */
let _cached_encoder_for_RecipientAssignedAlternateRecipient: $.ASN1Encoder<RecipientAssignedAlternateRecipient> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RecipientAssignedAlternateRecipient */

/* START_OF_SYMBOL_DEFINITION _encode_RecipientAssignedAlternateRecipient */
/**
 * @summary Encodes a(n) RecipientAssignedAlternateRecipient into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RecipientAssignedAlternateRecipient, encoded as an ASN.1 Element.
 */
export function _encode_RecipientAssignedAlternateRecipient(
    value: RecipientAssignedAlternateRecipient,
    elGetter: $.ASN1Encoder<RecipientAssignedAlternateRecipient>
) {
    if (!_cached_encoder_for_RecipientAssignedAlternateRecipient) {
        _cached_encoder_for_RecipientAssignedAlternateRecipient = _encode_ORAddressAndOrDirectoryName;
    }
    return _cached_encoder_for_RecipientAssignedAlternateRecipient(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_RecipientAssignedAlternateRecipient */

/* eslint-enable */
