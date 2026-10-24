/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_contract } from "../IN-object-identifiers/id-contract.va.mjs";
// export { id_contract } from "../IN-object-identifiers/id-contract.va.mjs";


/**
 * @summary id_contract_shadowConsumer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-contract-shadowConsumer OBJECT IDENTIFIER ::= {id-contract shadowConsumer(15)}
 * ```
 * 
 * @constant
 */
export
const id_contract_shadowConsumer: OBJECT_IDENTIFIER = _OID.fromParts([
    /* shadowConsumer */ 15,
], id_contract);

/* eslint-enable */
