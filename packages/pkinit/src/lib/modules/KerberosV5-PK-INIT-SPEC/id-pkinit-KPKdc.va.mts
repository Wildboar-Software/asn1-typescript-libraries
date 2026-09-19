/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_pkinit } from "../KerberosV5-PK-INIT-SPEC/id-pkinit.va.mjs";
// export { id_pkinit } from "../KerberosV5-PK-INIT-SPEC/id-pkinit.va.mjs";


/**
 * @summary id_pkinit_KPKdc
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-pkinit-KPKdc         OBJECT IDENTIFIER ::= { id-pkinit 5 }
 * ```
 * 
 * @constant
 */
export
const id_pkinit_KPKdc: OBJECT_IDENTIFIER = _OID.fromParts([
    5,
], id_pkinit);

/* eslint-enable */
