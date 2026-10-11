/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { novell } from "../PKIS/novell.va.mjs";


/**
 * @summary applications
 * @description
 *
 * Novell applications arc, `{ novell 1 }`. The PKI attribute identifiers
 * in this module hang under `pki`, which is `{ applications 9 }`.
 * Appendix F does not assign any other application under this arc.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * applications OBJECT IDENTIFIER ::= {novell applications(1) }
 * ```
 * 
 * @constant
 */
export
const applications: OBJECT_IDENTIFIER = _OID.fromParts([
    /* applications */ 1,
], novell);

/* eslint-enable */
