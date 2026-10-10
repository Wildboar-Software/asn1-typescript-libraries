/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { pki } from "../PKIS/pki.va.mjs";


/**
 * @summary pkiAttributeSyntax
 * @description
 *
 * Arc for Novell PKI attribute syntaxes, `{ pki 5 }`. This version of
 * the specification does not assign any syntax under it. The status
 * notes record that equality matching rules for the Novell Security
 * Attributes were considered and that no requirement was identified.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * pkiAttributeSyntax OBJECT IDENTIFIER ::= {pki at(5) }
 * ```
 * 
 * @constant
 */
export
const pkiAttributeSyntax: OBJECT_IDENTIFIER = _OID.fromParts([
    /* at */ 5,
], pki);

/* eslint-enable */
