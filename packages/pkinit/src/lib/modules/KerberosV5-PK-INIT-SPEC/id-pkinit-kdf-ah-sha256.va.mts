/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_pkinit_kdf } from "../KerberosV5-PK-INIT-SPEC/id-pkinit-kdf.va.mjs";


/**
 * @summary id_pkinit_kdf_ah_sha256
 * @description
 *
 * `1.3.6.1.5.2.3.6.2`. The module comment calls this the
 * SP 800-56A ASN.1 structured hash-based KDF using SHA-256.
 * RFC 4556 does not define it or say when a peer must select
 * it. See {@link id_pkinit_kdf_ah_sha1} for the arc numbering.
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
