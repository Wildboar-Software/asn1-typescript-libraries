/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    FieldID,
    _decode_FieldID,
    _encode_FieldID,
} from "../ANSI-X9-42/FieldID.ta.mjs";

/**
 * @summary FiniteFields
 * @description
 *
 * `FieldID` constrained to `FieldTypes`. Currently only GF(p) via
 * `gfPrime` / `DomainParameters`; the set is extensible. ANS
 * X9.42-2003 §A.1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FiniteFields  ::=  FieldID {{ FieldTypes }}
 * ```
 */
export type FiniteFields = FieldID; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) FiniteFields
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {FiniteFields} The decoded data structure.
 */
export const _decode_FiniteFields: $.ASN1Decoder<FiniteFields> = _decode_FieldID;

/**
 * @summary Encodes a(n) FiniteFields into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FiniteFields, encoded as an ASN.1 Element.
 */
export const _encode_FiniteFields: $.ASN1Encoder<FiniteFields> = _encode_FieldID;


/* eslint-enable */
