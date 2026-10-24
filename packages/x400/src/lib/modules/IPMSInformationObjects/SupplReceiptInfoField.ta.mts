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
    SupplementaryInformation,
    _decode_SupplementaryInformation,
    _encode_SupplementaryInformation,
} from '../MTSAbstractService/SupplementaryInformation.ta.mjs';
/**
 * @summary SupplReceiptInfoField
 * @description
 *
 * Defined in ITU-T X.420 (1999) (§7).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SupplReceiptInfoField  ::=  SupplementaryInformation
 * ```
 */
export type SupplReceiptInfoField = SupplementaryInformation; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) SupplReceiptInfoField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SupplReceiptInfoField} The decoded data structure.
 */
export const _decode_SupplReceiptInfoField: $.ASN1Decoder<SupplReceiptInfoField> = _decode_SupplementaryInformation;

/**
 * @summary Encodes a(n) SupplReceiptInfoField into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SupplReceiptInfoField, encoded as an ASN.1 Element.
 */
export const _encode_SupplReceiptInfoField: $.ASN1Encoder<SupplReceiptInfoField> = _encode_SupplementaryInformation;


/* eslint-enable */
