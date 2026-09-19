/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { pki } from "../PKIS/pki.va.mjs";
// export { pki } from "../PKIS/pki.va.mjs";


/**
 * @summary pkiAttributeSyntax
 * @description
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
