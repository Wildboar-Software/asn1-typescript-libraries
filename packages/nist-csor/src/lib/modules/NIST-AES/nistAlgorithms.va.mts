/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { csor } from "../NIST-AES/csor.va.mjs";
// export { csor } from "../NIST-AES/csor.va.mjs";


/**
 * @summary nistAlgorithms
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * nistAlgorithms OBJECT IDENTIFIER ::= { csor nistAlgorithm(4) }
 * ```
 * 
 * @constant
 */
export
const nistAlgorithms: OBJECT_IDENTIFIER = _OID.fromParts([
    /* nistAlgorithm */ 4,
], csor);

/* eslint-enable */
