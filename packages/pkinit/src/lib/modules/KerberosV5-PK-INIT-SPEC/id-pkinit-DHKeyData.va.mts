/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_pkinit } from "../KerberosV5-PK-INIT-SPEC/id-pkinit.va.mjs";
// export { id_pkinit } from "../KerberosV5-PK-INIT-SPEC/id-pkinit.va.mjs";


/**
 * @summary id_pkinit_DHKeyData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-pkinit-DHKeyData     OBJECT IDENTIFIER ::= { id-pkinit 2 }
 * ```
 * 
 * @constant
 */
export
const id_pkinit_DHKeyData: OBJECT_IDENTIFIER = _OID.fromParts([
    2,
], id_pkinit);

/* eslint-enable */
