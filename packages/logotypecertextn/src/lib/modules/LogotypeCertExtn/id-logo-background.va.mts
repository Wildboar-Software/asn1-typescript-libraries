/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_logo } from "../LogotypeCertExtn/id-logo.va.mjs";
// export { id_logo } from "../LogotypeCertExtn/id-logo.va.mjs";


/**
 * @summary id_logo_background
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-logo-background OBJECT IDENTIFIER ::= { id-logo 2 }
 * ```
 * 
 * @constant
 */
export
const id_logo_background: OBJECT_IDENTIFIER = _OID.fromParts([
    2,
], id_logo);

/* eslint-enable */
