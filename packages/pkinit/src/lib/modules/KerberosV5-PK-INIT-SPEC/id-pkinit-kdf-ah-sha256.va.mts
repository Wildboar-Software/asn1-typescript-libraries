/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_pkinit_kdf } from "../KerberosV5-PK-INIT-SPEC/id-pkinit-kdf.va.mjs";
// export { id_pkinit_kdf } from "../KerberosV5-PK-INIT-SPEC/id-pkinit-kdf.va.mjs";


/**
 * @summary id_pkinit_kdf_ah_sha256
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-pkinit-kdf-ah-sha256 OBJECT IDENTIFIER ::= { id-pkinit-kdf sha256(2) }
 * ```
 * 
 * @constant
 */
export
const id_pkinit_kdf_ah_sha256: OBJECT_IDENTIFIER = _OID.fromParts([
    /* sha256 */ 2,
], id_pkinit_kdf);

/* eslint-enable */
