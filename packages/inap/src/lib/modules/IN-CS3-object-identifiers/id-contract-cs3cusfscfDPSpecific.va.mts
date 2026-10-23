/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_contract } from "../IN-CS3-object-identifiers/id-contract.va.mjs";
// export { id_contract } from "../IN-CS3-object-identifiers/id-contract.va.mjs";


/**
 * @summary id_contract_cs3cusfscfDPSpecific
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-contract-cs3cusfscfDPSpecific OBJECT IDENTIFIER ::= {id-contract cusf-scf-DPSpecific(21)}
 * ```
 * 
 * @constant
 */
export
const id_contract_cs3cusfscfDPSpecific: OBJECT_IDENTIFIER = _OID.fromParts([
    /* cusf-scf-DPSpecific */ 21,
], id_contract);

/* eslint-enable */
