/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_ac } from "../UsefulDefinitions/id-ac.va.mjs";
// export { id_ac } from "../UsefulDefinitions/id-ac.va.mjs";


/**
 * @summary id_ac_directorySystemWith2or3seAC
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-ac-directorySystemWith2or3seAC OBJECT IDENTIFIER ::= {id-ac 11}
 * ```
 * 
 * @constant
 */
export
const id_ac_directorySystemWith2or3seAC: OBJECT_IDENTIFIER = _OID.fromParts([
    11,
], id_ac);

/* eslint-enable */
