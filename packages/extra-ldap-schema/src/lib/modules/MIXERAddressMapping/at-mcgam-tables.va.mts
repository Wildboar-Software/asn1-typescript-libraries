/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { at } from "../MIXERAddressMapping/at.va.mjs";

/**
 * @summary at_mcgam_tables
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * at-mcgam-tables OBJECT IDENTIFIER ::= {at 9}
 * ```
 * 
 * @constant
 */
export
const at_mcgam_tables: OBJECT_IDENTIFIER = _OID.fromParts([
    9,
], at);

/* eslint-enable */
