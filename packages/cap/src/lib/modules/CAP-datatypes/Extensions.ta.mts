import {
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "./ExtensionField.ta.mjs";

/**
 * @summary Extensions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Extensions {PARAMETERS-BOUND : bound} ::= SEQUENCE SIZE (1..bound.&numOfExtensions) OF ExtensionField
 * ```
 *
 */
export type Extensions = ExtensionField[];
export const _decode_Extensions = $._decodeSequenceOf<ExtensionField>(() => _decode_ExtensionField);
export const _encode_Extensions = $._encodeSequenceOf<ExtensionField>(() => _encode_ExtensionField, $.BER);
