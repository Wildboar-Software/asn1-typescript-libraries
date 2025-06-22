/* eslint-disable */
import {
    TeletexString,
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

/**
 * @summary CommunicationsAgreementIdField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CommunicationsAgreementIdField  ::=
 *   TeletexString(SIZE (1..ub-communications-agreement-id))
 * ```
 */
export type CommunicationsAgreementIdField = TeletexString; // TeletexString

let _cached_decoder_for_CommunicationsAgreementIdField: $.ASN1Decoder<CommunicationsAgreementIdField> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CommunicationsAgreementIdField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CommunicationsAgreementIdField} The decoded data structure.
 */
export function _decode_CommunicationsAgreementIdField(el: _Element) {
    if (!_cached_decoder_for_CommunicationsAgreementIdField) {
        _cached_decoder_for_CommunicationsAgreementIdField =
            $._decodeTeletexString;
    }
    return _cached_decoder_for_CommunicationsAgreementIdField(el);
}

let _cached_encoder_for_CommunicationsAgreementIdField: $.ASN1Encoder<CommunicationsAgreementIdField> | null = null;

/**
 * @summary Encodes a(n) CommunicationsAgreementIdField into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CommunicationsAgreementIdField, encoded as an ASN.1 Element.
 */
export function _encode_CommunicationsAgreementIdField(
    value: CommunicationsAgreementIdField,
    elGetter: $.ASN1Encoder<CommunicationsAgreementIdField>
) {
    if (!_cached_encoder_for_CommunicationsAgreementIdField) {
        _cached_encoder_for_CommunicationsAgreementIdField =
            $._encodeTeletexString;
    }
    return _cached_encoder_for_CommunicationsAgreementIdField(value, elGetter);
}


/* eslint-enable */
