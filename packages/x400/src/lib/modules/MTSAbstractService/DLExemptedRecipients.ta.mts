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
    ORAddressAndOrDirectoryName,
    _decode_ORAddressAndOrDirectoryName,
    _encode_ORAddressAndOrDirectoryName,
} from '../MTSAbstractService/ORAddressAndOrDirectoryName.ta.mjs';
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

let _cached_decoder_for_DLExemptedRecipients: $.ASN1Decoder<DLExemptedRecipients> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DLExemptedRecipients
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DLExemptedRecipients} The decoded data structure.
 */
export function _decode_DLExemptedRecipients(el: _Element): DLExemptedRecipients {
    if (!_cached_decoder_for_DLExemptedRecipients) {
        _cached_decoder_for_DLExemptedRecipients = $._decodeSetOf<ORAddressAndOrDirectoryName>(
            () => _decode_ORAddressAndOrDirectoryName
        );
    }
    return _cached_decoder_for_DLExemptedRecipients(el);
}

let _cached_encoder_for_DLExemptedRecipients: $.ASN1Encoder<DLExemptedRecipients> | null = null;

/**
 * @summary Encodes a(n) DLExemptedRecipients into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DLExemptedRecipients, encoded as an ASN.1 Element.
 */
export function _encode_DLExemptedRecipients(
    value: DLExemptedRecipients,
    elGetter: $.ASN1Encoder<DLExemptedRecipients>
): _Element {
    if (!_cached_encoder_for_DLExemptedRecipients) {
        _cached_encoder_for_DLExemptedRecipients = $._encodeSetOf<ORAddressAndOrDirectoryName>(
            () => _encode_ORAddressAndOrDirectoryName,
            $.BER
        );
    }
    return _cached_encoder_for_DLExemptedRecipients(value, elGetter);
}


/* eslint-enable */
