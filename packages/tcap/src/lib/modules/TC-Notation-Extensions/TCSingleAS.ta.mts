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
    type TCMessage,
    _decode_TCMessage,
    _encode_TCMessage,
} from '../TCAPMessages/TCMessage.ta.mjs';
/**
 * @summary TCSingleAS
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TCSingleAS{OPERATION-PACKAGE:package}  ::=
 *   TCMessage{{AllOperations  {package}}, {AllOperations  {package}}}
 * ```
 */
export type TCSingleAS = TCMessage; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) TCSingleAS
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TCSingleAS} The decoded data structure.
 */
export const _decode_TCSingleAS: $.ASN1Decoder<TCSingleAS> = _decode_TCMessage;

/**
 * @summary Encodes a(n) TCSingleAS into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TCSingleAS, encoded as an ASN.1 Element.
 */
export const _encode_TCSingleAS: $.ASN1Encoder<TCSingleAS> = _encode_TCMessage;


/* eslint-enable */
