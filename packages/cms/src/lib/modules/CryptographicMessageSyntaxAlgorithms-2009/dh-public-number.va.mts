/* eslint-disable */
import { OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { dhpublicnumber } from "../PKIXAlgs-2009/dhpublicnumber.va.mjs";

/**
 * @summary dh_public_number
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dh-public-number OBJECT IDENTIFIER ::= dhpublicnumber
 * ```
 *
 * @constant
 */
export const dh_public_number: OBJECT_IDENTIFIER = dhpublicnumber;

/* eslint-enable */
