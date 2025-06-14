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
/* START_OF_SYMBOL_DEFINITION DLExemptedRecipients */
/**
 * @summary DLExemptedRecipients
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DLExemptedRecipients  ::=  SET OF ORAddressAndOrDirectoryName
 * ```
 */
export type DLExemptedRecipients = ORAddressAndOrDirectoryName[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION DLExemptedRecipients */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DLExemptedRecipients */
let _cached_decoder_for_DLExemptedRecipients: $.ASN1Decoder<DLExemptedRecipients> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DLExemptedRecipients */

/* START_OF_SYMBOL_DEFINITION _decode_DLExemptedRecipients */
/**
 * @summary Decodes an ASN.1 element into a(n) DLExemptedRecipients
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DLExemptedRecipients} The decoded data structure.
 */
export function _decode_DLExemptedRecipients(el: _Element) {
    if (!_cached_decoder_for_DLExemptedRecipients) {
        _cached_decoder_for_DLExemptedRecipients = $._decodeSetOf<ORAddressAndOrDirectoryName>(
            () => _decode_ORAddressAndOrDirectoryName
        );
    }
    return _cached_decoder_for_DLExemptedRecipients(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DLExemptedRecipients */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DLExemptedRecipients */
let _cached_encoder_for_DLExemptedRecipients: $.ASN1Encoder<DLExemptedRecipients> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DLExemptedRecipients */

/* START_OF_SYMBOL_DEFINITION _encode_DLExemptedRecipients */
/**
 * @summary Encodes a(n) DLExemptedRecipients into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DLExemptedRecipients, encoded as an ASN.1 Element.
 */
export function _encode_DLExemptedRecipients(
    value: DLExemptedRecipients,
    elGetter: $.ASN1Encoder<DLExemptedRecipients>
) {
    if (!_cached_encoder_for_DLExemptedRecipients) {
        _cached_encoder_for_DLExemptedRecipients = $._encodeSetOf<ORAddressAndOrDirectoryName>(
            () => _encode_ORAddressAndOrDirectoryName,
            $.BER
        );
    }
    return _cached_encoder_for_DLExemptedRecipients(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DLExemptedRecipients */

/* eslint-enable */
