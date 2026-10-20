/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_contract } from "../IN-object-identifiers/id-contract.va.mjs";
// export { id_contract } from "../IN-object-identifiers/id-contract.va.mjs";


/**
 * @summary id_contract_scfs_scfc
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-contract-scfs-scfc OBJECT IDENTIFIER ::= {id-contract scfs-scfc(25)}
 * ```
 * 
 * @constant
 */
export
const id_contract_scfs_scfc: OBJECT_IDENTIFIER = _OID.fromParts([
    /* scfs-scfc */ 25,
], id_contract);

/* eslint-enable */
