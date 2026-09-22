/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { holdInstruction } from "../PKIX1Implicit88/holdInstruction.va.mjs";
// export { holdInstruction } from "../PKIX1Implicit88/holdInstruction.va.mjs";


/**
 * @summary id_holdinstruction_reject
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-holdinstruction-reject OBJECT IDENTIFIER ::= {holdInstruction 3}
 * ```
 * 
 * @constant
 */
export
const id_holdinstruction_reject: OBJECT_IDENTIFIER = _OID.fromParts([
    3,
], holdInstruction);

/* eslint-enable */
