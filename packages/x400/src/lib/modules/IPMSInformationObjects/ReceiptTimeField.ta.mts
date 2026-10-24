/* eslint-disable */
import {
    type ASN1Element as _Element,
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
    Time,
    _decode_Time,
    _encode_Time,
} from '../IPMSInformationObjects/Time.ta.mjs';
/**
 * @summary ReceiptTimeField
 * @description
 *
 * Defined in ITU-T X.420 (1999) (§7).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReceiptTimeField  ::=  Time
 * ```
 */
export type ReceiptTimeField = Time; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) ReceiptTimeField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ReceiptTimeField} The decoded data structure.
 */
export const _decode_ReceiptTimeField: $.ASN1Decoder<ReceiptTimeField> = _decode_Time;

/**
 * @summary Encodes a(n) ReceiptTimeField into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReceiptTimeField, encoded as an ASN.1 Element.
 */
export const _encode_ReceiptTimeField: $.ASN1Encoder<ReceiptTimeField> = _encode_Time;


/* eslint-enable */
