/* eslint-disable */
import { INTEGER } from "@wildboar/asn1";
import { pkcs15_ub_identifier } from "../PKCS-15/pkcs15-ub-identifier.va.mjs";

/**
 * @summary pkcs15_ub_label
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pkcs15-ub-label INTEGER ::= pkcs15-ub-identifier
 * ```
 *
 * @constant
 */
export const pkcs15_ub_label: INTEGER = pkcs15_ub_identifier;

/* eslint-enable */
