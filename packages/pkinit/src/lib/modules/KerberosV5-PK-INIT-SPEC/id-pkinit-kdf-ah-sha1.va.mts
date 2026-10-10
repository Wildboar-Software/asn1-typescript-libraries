/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_pkinit_kdf } from "../KerberosV5-PK-INIT-SPEC/id-pkinit-kdf.va.mjs";


/**
 * @summary id_pkinit_kdf_ah_sha1
 * @description
 *
 * `1.3.6.1.5.2.3.6.1`. The module comment calls this the
 * SP 800-56A ASN.1 structured hash-based KDF using SHA-1.
 * RFC 4556 does not define it. SHA-512 is
 * `{ id-pkinit-kdf 3 }` and SHA-384 is `{ id-pkinit-kdf 4 }`,
 * so the final arc component is not ordered by hash size.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-pkinit-kdf-ah-sha1 OBJECT IDENTIFIER ::= { id-pkinit-kdf sha1(1) }
 * ```
 * 
 * @constant
 */
export
const id_pkinit_kdf_ah_sha1: OBJECT_IDENTIFIER = _OID.fromParts([
    /* sha1 */ 1,
], id_pkinit_kdf);

/* eslint-enable */
