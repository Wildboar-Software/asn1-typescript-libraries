/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_contract } from "../IN-object-identifiers/id-contract.va.mjs";
// export { id_contract } from "../IN-object-identifiers/id-contract.va.mjs";


/**
 * @summary id_inScfToSsfRouteMonitoring
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-inScfToSsfRouteMonitoring OBJECT IDENTIFIER ::= {id-contract inScfToSsfRouteMonitoring(26)}
 * ```
 * 
 * @constant
 */
export
const id_inScfToSsfRouteMonitoring: OBJECT_IDENTIFIER = _OID.fromParts([
    /* inScfToSsfRouteMonitoring */ 26,
], id_contract);

/* eslint-enable */
