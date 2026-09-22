/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_ce } from "../PKIX1Implicit88/id-ce.va.mjs";
// export { id_ce } from "../PKIX1Implicit88/id-ce.va.mjs";


/**
 * @summary id_ce_cRLReasons
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-ce-cRLReasons OBJECT IDENTIFIER ::= { id-ce 21 }
 * ```
 * 
 * @constant
 */
export
const id_ce_cRLReasons: OBJECT_IDENTIFIER = _OID.fromParts([
    21,
], id_ce);

/* eslint-enable */
