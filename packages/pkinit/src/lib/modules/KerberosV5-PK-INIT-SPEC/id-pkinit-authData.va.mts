/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_pkinit } from "../KerberosV5-PK-INIT-SPEC/id-pkinit.va.mjs";
// export { id_pkinit } from "../KerberosV5-PK-INIT-SPEC/id-pkinit.va.mjs";


/**
 * @summary id_pkinit_authData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-pkinit-authData      OBJECT IDENTIFIER ::= { id-pkinit 1 }
 * ```
 * 
 * @constant
 */
export
const id_pkinit_authData: OBJECT_IDENTIFIER = _OID.fromParts([
    1,
], id_pkinit);

/* eslint-enable */
