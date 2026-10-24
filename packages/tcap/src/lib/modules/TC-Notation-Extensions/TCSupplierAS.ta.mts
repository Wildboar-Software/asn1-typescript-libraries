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
    TCMessage,
    _decode_TCMessage,
    _encode_TCMessage,
} from '../TCAPMessages/TCMessage.ta.mjs';
/**
 * @summary TCSupplierAS
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TCSupplierAS{OPERATION-PACKAGE:package}  ::=
 *   TCMessage{{SupplierPerforms  {package}}, {SupplierPerforms  {package}}}
 * ```
 */
export type TCSupplierAS = TCMessage; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) TCSupplierAS
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TCSupplierAS} The decoded data structure.
 */
export const _decode_TCSupplierAS: $.ASN1Decoder<TCSupplierAS> = _decode_TCMessage;

/**
 * @summary Encodes a(n) TCSupplierAS into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TCSupplierAS, encoded as an ASN.1 Element.
 */
export const _encode_TCSupplierAS: $.ASN1Encoder<TCSupplierAS> = _encode_TCMessage;


/* eslint-enable */
