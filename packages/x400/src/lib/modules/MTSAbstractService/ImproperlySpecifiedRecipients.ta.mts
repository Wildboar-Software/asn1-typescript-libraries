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
    RecipientName,
    _decode_RecipientName,
    _encode_RecipientName,
} from '../MTSAbstractService/RecipientName.ta.mjs';
/**
 * @summary ImproperlySpecifiedRecipients
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ImproperlySpecifiedRecipients  ::=
 *   SEQUENCE SIZE (1..ub-recipients) OF RecipientName
 * ```
 */
export type ImproperlySpecifiedRecipients = RecipientName[]; // SequenceOfType

let _cached_decoder_for_ImproperlySpecifiedRecipients: $.ASN1Decoder<ImproperlySpecifiedRecipients> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ImproperlySpecifiedRecipients
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ImproperlySpecifiedRecipients} The decoded data structure.
 */
export function _decode_ImproperlySpecifiedRecipients(el: _Element) {
    if (!_cached_decoder_for_ImproperlySpecifiedRecipients) {
        _cached_decoder_for_ImproperlySpecifiedRecipients = $._decodeSequenceOf<RecipientName>(
            () => _decode_RecipientName
        );
    }
    return _cached_decoder_for_ImproperlySpecifiedRecipients(el);
}

let _cached_encoder_for_ImproperlySpecifiedRecipients: $.ASN1Encoder<ImproperlySpecifiedRecipients> | null = null;

/**
 * @summary Encodes a(n) ImproperlySpecifiedRecipients into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ImproperlySpecifiedRecipients, encoded as an ASN.1 Element.
 */
export function _encode_ImproperlySpecifiedRecipients(
    value: ImproperlySpecifiedRecipients,
    elGetter: $.ASN1Encoder<ImproperlySpecifiedRecipients>
) {
    if (!_cached_encoder_for_ImproperlySpecifiedRecipients) {
        _cached_encoder_for_ImproperlySpecifiedRecipients = $._encodeSequenceOf<RecipientName>(
            () => _encode_RecipientName,
            $.BER
        );
    }
    return _cached_encoder_for_ImproperlySpecifiedRecipients(value, elGetter);
}


/* eslint-enable */
