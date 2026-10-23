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
    PDUHeader,
    _decode_PDUHeader,
    _encode_PDUHeader,
} from '../NLM/PDUHeader.ta.mjs';

/**
 * @summary PDUFormatErrorSyntax
 * @description
 *
 * Alias of `PDUHeader`. Defined in §6.2; X.283 GDMO does not bind it to a
 * published template.
 * ITU-T Rec. X.283 (12/97)
 * [§6.2](https://www.itu.int/rec/T-REC-X.283-199712-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PDUFormatErrorSyntax  ::=  PDUHeader
 * ```
 */
export type PDUFormatErrorSyntax = PDUHeader; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) PDUFormatErrorSyntax
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PDUFormatErrorSyntax} The decoded data structure.
 */
export const _decode_PDUFormatErrorSyntax: $.ASN1Decoder<PDUFormatErrorSyntax> = _decode_PDUHeader;

/**
 * @summary Encodes a(n) PDUFormatErrorSyntax into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PDUFormatErrorSyntax, encoded as an ASN.1 Element.
 */
export const _encode_PDUFormatErrorSyntax: $.ASN1Encoder<PDUFormatErrorSyntax> = _encode_PDUHeader;


/* eslint-enable */
