/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_contract } from "../IN-object-identifiers/id-contract.va.mjs";
// export { id_contract } from "../IN-object-identifiers/id-contract.va.mjs";


/**
 * @summary id_inSsfToScfRouteMonitoring
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-inSsfToScfRouteMonitoring OBJECT IDENTIFIER ::= {id-contract inSsfToScfRouteMonitoring(27)}
 * ```
 * 
 * @constant
 */
export
const id_inSsfToScfRouteMonitoring: OBJECT_IDENTIFIER = _OID.fromParts([
    /* inSsfToScfRouteMonitoring */ 27,
], id_contract);

/* eslint-enable */
