/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_contract } from "../IN-CS3-object-identifiers/id-contract.va.mjs";
// export { id_contract } from "../IN-CS3-object-identifiers/id-contract.va.mjs";


/**
 * @summary id_contract_cs3scfcusfDPSpecific
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-contract-cs3scfcusfDPSpecific OBJECT IDENTIFIER ::= {id-contract scf-cusf-DPSpecific(20)}
 * ```
 * 
 * @constant
 */
export
const id_contract_cs3scfcusfDPSpecific: OBJECT_IDENTIFIER = _OID.fromParts([
    /* scf-cusf-DPSpecific */ 20,
], id_contract);

/* eslint-enable */
