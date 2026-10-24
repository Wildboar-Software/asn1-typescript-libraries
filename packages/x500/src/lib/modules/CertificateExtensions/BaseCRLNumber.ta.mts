/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    type CRLNumber,
    _decode_CRLNumber,
    _encode_CRLNumber,
} from "../CertificateExtensions/CRLNumber.ta.mjs";
/**
 * @summary BaseCRLNumber
 * @description
 *
 * CRLNumber of the complete-for-scope base CRL that a delta updates.
 * Monotonic, not necessarily +1. The combination of this base plus the delta
 * is equivalent to a full CRL for that scope at delta publication. Delta
 * indicator extension is always critical.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BaseCRLNumber  ::=  CRLNumber
 * ```
 */
export type BaseCRLNumber = CRLNumber; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) BaseCRLNumber
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BaseCRLNumber} The decoded data structure.
 */
export const _decode_BaseCRLNumber: $.ASN1Decoder<BaseCRLNumber> = _decode_CRLNumber;

/**
 * @summary Encodes a(n) BaseCRLNumber into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BaseCRLNumber, encoded as an ASN.1 Element.
 */
export const _encode_BaseCRLNumber: $.ASN1Encoder<BaseCRLNumber> = _encode_CRLNumber;


/* eslint-enable */
