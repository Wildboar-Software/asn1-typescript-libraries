import {
    ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "./ExtensionField.ta.mjs";

/**
 * @summary Extensions
 * @description
 *
 * SEQUENCE OF `ExtensionField` (argument-datatype extensions; content is
 * network operator specific). (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Extensions {PARAMETERS-BOUND : bound} ::= SEQUENCE SIZE (1..bound.&numOfExtensions) OF ExtensionField
 * ```
 *
 */
export type Extensions = ExtensionField[];
export const _decode_Extensions = (el: _Element): Extensions => {
    const value = $._decodeSequenceOf<ExtensionField>(() => _decode_ExtensionField)(el);
    if (value.length < 1) {
        throw new ASN1SizeError("Extensions violates SIZE constraint");
    }
    return value;
};
export const _encode_Extensions = $._encodeSequenceOf<ExtensionField>(() => _encode_ExtensionField, $.BER);
