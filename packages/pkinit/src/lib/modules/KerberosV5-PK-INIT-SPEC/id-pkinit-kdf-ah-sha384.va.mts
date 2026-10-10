/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_pkinit_kdf } from "../KerberosV5-PK-INIT-SPEC/id-pkinit-kdf.va.mjs";


/**
 * @summary id_pkinit_kdf_ah_sha384
 * @description
 *
 * `1.3.6.1.5.2.3.6.4`. The module comment calls this the
 * SP 800-56A ASN.1 structured hash-based KDF using SHA-384.
 * The final component is 4, not 3; SHA-512 is
 * {@link id_pkinit_kdf_ah_sha512}. RFC 4556 does not define
 * this OID.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-pkinit-kdf-ah-sha384 OBJECT IDENTIFIER ::= { id-pkinit-kdf sha384(4) }
 * ```
 * 
 * @constant
 */
export
const id_pkinit_kdf_ah_sha384: OBJECT_IDENTIFIER = _OID.fromParts([
    /* sha384 */ 4,
], id_pkinit_kdf);

/* eslint-enable */
