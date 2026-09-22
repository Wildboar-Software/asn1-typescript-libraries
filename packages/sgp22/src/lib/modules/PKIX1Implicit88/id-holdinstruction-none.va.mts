/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { holdInstruction } from "../PKIX1Implicit88/holdInstruction.va.mjs";
// export { holdInstruction } from "../PKIX1Implicit88/holdInstruction.va.mjs";


/**
 * @summary id_holdinstruction_none
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-holdinstruction-none OBJECT IDENTIFIER ::= {holdInstruction 1}
 * ```
 * 
 * @constant
 */
export
const id_holdinstruction_none: OBJECT_IDENTIFIER = _OID.fromParts([
    1,
], holdInstruction);

/* eslint-enable */
