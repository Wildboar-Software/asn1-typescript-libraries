/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_contract } from "../IN-object-identifiers/id-contract.va.mjs";
// export { id_contract } from "../IN-object-identifiers/id-contract.va.mjs";


/**
 * @summary id_inScfToSsfDpSpecific
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-inScfToSsfDpSpecific OBJECT IDENTIFIER ::= {id-contract inScfToSsfDpSpecific(7)}
 * ```
 * 
 * @constant
 */
export
const id_inScfToSsfDpSpecific: OBJECT_IDENTIFIER = _OID.fromParts([
    /* inScfToSsfDpSpecific */ 7,
], id_contract);

/* eslint-enable */
