/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { z39_50 } from "./z39-50.va.mjs";

/**
 * @summary Z39_50_userInfoFormat
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Z39-50-userInfoFormat OBJECT IDENTIFIER ::= {Z39-50 10}
 * ```
 *
 * @constant
 */
export
const Z39_50_userInfoFormat: OBJECT_IDENTIFIER = _OID.fromParts([10], z39_50);

/* eslint-enable */
