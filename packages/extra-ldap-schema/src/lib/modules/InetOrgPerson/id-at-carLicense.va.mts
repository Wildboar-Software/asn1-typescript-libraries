/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_netscapeAttrTypes } from "../InetOrgPerson/id-netscapeAttrTypes.va.mjs";
// export { id_netscapeAttrTypes } from "../InetOrgPerson/id-netscapeAttrTypes.va.mjs";


/**
 * @summary id_at_carLicense
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-at-carLicense                OBJECT IDENTIFIER ::= { id-netscapeAttrTypes 1 }
 * ```
 * 
 * @constant
 */
export
const id_at_carLicense: OBJECT_IDENTIFIER = _OID.fromParts([
    1,
], id_netscapeAttrTypes);

/* eslint-enable */
