/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { holdInstruction } from "../PKIX1Implicit88/holdInstruction.va.mjs";
// export { holdInstruction } from "../PKIX1Implicit88/holdInstruction.va.mjs";


/**
 * @summary id_holdinstruction_callissuer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-holdinstruction-callissuer OBJECT IDENTIFIER ::= {holdInstruction 2}
 * ```
 * 
 * @constant
 */
export
const id_holdinstruction_callissuer: OBJECT_IDENTIFIER = _OID.fromParts([
    2,
], holdInstruction);

/* eslint-enable */
