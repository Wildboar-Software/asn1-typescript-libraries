/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_ce } from "../PKIX1Implicit88/id-ce.va.mjs";
// export { id_ce } from "../PKIX1Implicit88/id-ce.va.mjs";


/**
 * @summary id_ce_deltaCRLIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-ce-deltaCRLIndicator OBJECT IDENTIFIER ::= { id-ce 27 }
 * ```
 * 
 * @constant
 */
export
const id_ce_deltaCRLIndicator: OBJECT_IDENTIFIER = _OID.fromParts([
    27,
], id_ce);

/* eslint-enable */
