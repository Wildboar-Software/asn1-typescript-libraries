/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_ce } from "../PKIX1Implicit88/id-ce.va.mjs";
// export { id_ce } from "../PKIX1Implicit88/id-ce.va.mjs";


/**
 * @summary id_ce_authorityKeyIdentifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-ce-authorityKeyIdentifier OBJECT IDENTIFIER ::= { id-ce 35 }
 * ```
 * 
 * @constant
 */
export
const id_ce_authorityKeyIdentifier: OBJECT_IDENTIFIER = _OID.fromParts([
    35,
], id_ce);

/* eslint-enable */
