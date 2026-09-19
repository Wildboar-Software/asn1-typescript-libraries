/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_pkinit_kdf } from "../KerberosV5-PK-INIT-SPEC/id-pkinit-kdf.va.mjs";
// export { id_pkinit_kdf } from "../KerberosV5-PK-INIT-SPEC/id-pkinit-kdf.va.mjs";


/**
 * @summary id_pkinit_kdf_ah_sha512
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-pkinit-kdf-ah-sha512 OBJECT IDENTIFIER ::= { id-pkinit-kdf sha512(3) }
 * ```
 * 
 * @constant
 */
export
const id_pkinit_kdf_ah_sha512: OBJECT_IDENTIFIER = _OID.fromParts([
    /* sha512 */ 3,
], id_pkinit_kdf);

/* eslint-enable */
