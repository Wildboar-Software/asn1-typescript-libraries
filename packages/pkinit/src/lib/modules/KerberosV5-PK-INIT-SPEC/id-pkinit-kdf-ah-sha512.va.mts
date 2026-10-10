/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_pkinit_kdf } from "../KerberosV5-PK-INIT-SPEC/id-pkinit-kdf.va.mjs";


/**
 * @summary id_pkinit_kdf_ah_sha512
 * @description
 *
 * `1.3.6.1.5.2.3.6.3`. The module comment calls this the
 * SP 800-56A ASN.1 structured hash-based KDF using SHA-512.
 * The final component is 3; SHA-384 is
 * {@link id_pkinit_kdf_ah_sha384}. RFC 4556 does not define
 * this OID.
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
