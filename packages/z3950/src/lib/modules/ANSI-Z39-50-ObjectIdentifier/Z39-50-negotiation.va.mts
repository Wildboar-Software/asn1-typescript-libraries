/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { z39_50 } from "./z39-50.va.mjs";

/**
 * @summary Z39_50_negotiation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Z39-50-negotiation OBJECT IDENTIFIER ::= {Z39-50 15}
 * ```
 *
 * @constant
 */
export
const Z39_50_negotiation: OBJECT_IDENTIFIER = _OID.fromParts([15], z39_50);

/* eslint-enable */
