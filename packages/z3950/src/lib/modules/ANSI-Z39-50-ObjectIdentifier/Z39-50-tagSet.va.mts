/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { z39_50 } from "./z39-50.va.mjs";

/**
 * @summary Z39_50_tagSet
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Z39-50-tagSet OBJECT IDENTIFIER ::= {Z39-50 14}
 * ```
 *
 * @constant
 */
export
const Z39_50_tagSet: OBJECT_IDENTIFIER = _OID.fromParts([14], z39_50);

/* eslint-enable */
