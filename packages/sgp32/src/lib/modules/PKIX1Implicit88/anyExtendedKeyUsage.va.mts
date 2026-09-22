/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_ce_extKeyUsage } from "../PKIX1Implicit88/id-ce-extKeyUsage.va.mjs";
// export { id_ce_extKeyUsage } from "../PKIX1Implicit88/id-ce-extKeyUsage.va.mjs";


/**
 * @summary anyExtendedKeyUsage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * anyExtendedKeyUsage OBJECT IDENTIFIER ::= { id-ce-extKeyUsage 0 }
 * ```
 * 
 * @constant
 */
export
const anyExtendedKeyUsage: OBJECT_IDENTIFIER = _OID.fromParts([
    0,
], id_ce_extKeyUsage);

/* eslint-enable */
