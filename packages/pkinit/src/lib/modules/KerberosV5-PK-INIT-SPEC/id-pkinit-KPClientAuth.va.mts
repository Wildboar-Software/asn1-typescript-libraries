/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_pkinit } from "../KerberosV5-PK-INIT-SPEC/id-pkinit.va.mjs";
// export { id_pkinit } from "../KerberosV5-PK-INIT-SPEC/id-pkinit.va.mjs";


/**
 * @summary id_pkinit_KPClientAuth
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-pkinit-KPClientAuth  OBJECT IDENTIFIER ::= { id-pkinit 4 }
 * ```
 * 
 * @constant
 */
export
const id_pkinit_KPClientAuth: OBJECT_IDENTIFIER = _OID.fromParts([
    4,
], id_pkinit);

/* eslint-enable */
