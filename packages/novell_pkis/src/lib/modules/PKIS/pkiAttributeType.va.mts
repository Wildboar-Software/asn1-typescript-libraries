/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { pki } from "../PKIS/pki.va.mjs";


/**
 * @summary pkiAttributeType
 * @description
 *
 * Arc for Novell PKI attribute-type OIDs, `{ pki 4 }`. This version
 * assigns `pa_sa` (1) and `pa_rl` (2) under it. Appendix F.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * pkiAttributeType OBJECT IDENTIFIER ::= {pki at(4) }
 * ```
 * 
 * @constant
 */
export
const pkiAttributeType: OBJECT_IDENTIFIER = _OID.fromParts([
    /* at */ 4,
], pki);

/* eslint-enable */
