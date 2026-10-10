/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { pki } from "../PKIS/pki.va.mjs";


/**
 * @summary pkiObjectClass
 * @description
 *
 * Arc for Novell PKI object classes, `{ pki 6 }`. This version of the
 * specification does not assign any object class under it. Appendix F.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * pkiObjectClass OBJECT IDENTIFIER ::= {pki at(6) }
 * ```
 * 
 * @constant
 */
export
const pkiObjectClass: OBJECT_IDENTIFIER = _OID.fromParts([
    /* at */ 6,
], pki);

/* eslint-enable */
