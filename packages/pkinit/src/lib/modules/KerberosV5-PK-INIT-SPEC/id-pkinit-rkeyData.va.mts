/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_pkinit } from "../KerberosV5-PK-INIT-SPEC/id-pkinit.va.mjs";
// export { id_pkinit } from "../KerberosV5-PK-INIT-SPEC/id-pkinit.va.mjs";


/**
 * @summary id_pkinit_rkeyData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-pkinit-rkeyData      OBJECT IDENTIFIER ::= { id-pkinit 3 }
 * ```
 * 
 * @constant
 */
export
const id_pkinit_rkeyData: OBJECT_IDENTIFIER = _OID.fromParts([
    3,
], id_pkinit);

/* eslint-enable */
