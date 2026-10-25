/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_contract } from "../IN-object-identifiers/id-contract.va.mjs";
// export { id_contract } from "../IN-object-identifiers/id-contract.va.mjs";


/**
 * @summary id_contract_scfcusfDPSpecific
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-contract-scfcusfDPSpecific OBJECT IDENTIFIER ::= {id-contract scf-cusf-DPSpecific(20)}
 * ```
 * 
 * @constant
 */
export
const id_contract_scfcusfDPSpecific: OBJECT_IDENTIFIER = _OID.fromParts([
    /* scf-cusf-DPSpecific */ 20,
], id_contract);

/* eslint-enable */
