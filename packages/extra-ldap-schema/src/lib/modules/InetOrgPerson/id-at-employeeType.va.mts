/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_netscapeAttrTypes } from "../InetOrgPerson/id-netscapeAttrTypes.va.mjs";


/**
 * @summary id_at_employeeType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-at-employeeType              OBJECT IDENTIFIER ::= { id-netscapeAttrTypes 4 }
 * ```
 * 
 * @constant
 */
export
const id_at_employeeType: OBJECT_IDENTIFIER = _OID.fromParts([
    4,
], id_netscapeAttrTypes);

/* eslint-enable */

