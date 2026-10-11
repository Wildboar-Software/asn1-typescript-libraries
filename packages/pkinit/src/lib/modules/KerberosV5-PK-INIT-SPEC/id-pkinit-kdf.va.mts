/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_pkinit } from "../KerberosV5-PK-INIT-SPEC/id-pkinit.va.mjs";


/**
 * @summary id_pkinit_kdf
 * @description
 *
 * `1.3.6.1.5.2.3.6`. Arc for PKINIT key-derivation functions.
 * RFC 4556 does not define it. The module attributes the arc
 * to RFC 8636 and does not include that specification's
 * definition of the KDF inputs.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-pkinit-kdf  OBJECT IDENTIFIER ::= { id-pkinit 6 }
 * ```
 * 
 * @constant
 */
export
const id_pkinit_kdf: OBJECT_IDENTIFIER = _OID.fromParts([
    6,
], id_pkinit);

/* eslint-enable */
