/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_contract } from "../IN-object-identifiers/id-contract.va.mjs";
// export { id_contract } from "../IN-object-identifiers/id-contract.va.mjs";


/**
 * @summary id_contract_scfc_scfs
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-contract-scfc-scfs OBJECT IDENTIFIER ::= {id-contract scfc-scfs(18)}
 * ```
 * 
 * @constant
 */
export
const id_contract_scfc_scfs: OBJECT_IDENTIFIER = _OID.fromParts([
    /* scfc-scfs */ 18,
], id_contract);

/* eslint-enable */
