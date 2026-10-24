/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_contract } from "../IN-object-identifiers/id-contract.va.mjs";
// export { id_contract } from "../IN-object-identifiers/id-contract.va.mjs";


/**
 * @summary id_inSsfToScfServiceManagement
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-inSsfToScfServiceManagement OBJECT IDENTIFIER ::= {id-contract inSsfToScfServiceManagement(10)}
 * ```
 * 
 * @constant
 */
export
const id_inSsfToScfServiceManagement: OBJECT_IDENTIFIER = _OID.fromParts([
    /* inSsfToScfServiceManagement */ 10,
], id_contract);

/* eslint-enable */
