/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_TA_RSA } from "../Doc-9303-Part-11-Module/id-TA-RSA.va.mjs";
// export { id_TA_RSA } from "../Doc-9303-Part-11-Module/id-TA-RSA.va.mjs";


/**
 * @summary id_TA_RSA_PSS_SHA_256
 * @description
 *
 * Terminal Authentication signature: RSASSA-PSS with SHA-256 and the default
 * parameters. MGF1 uses SHA-256, the salt length is the octet length of that
 * hash, and the trailer field is `0xBC`. The modulus is 2048 or 3072 bits
 * and the public exponent is at most 32 bits. The public key is the TLV
 * format specified in Doc 9303-12. The compressed ephemeral public key is
 * the SHA-1 hash of the Diffie-Hellman public value, 20 octets.
 *
 * Doc 9303-11, section 7.1.4.1 and Table 7.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-TA-RSA-PSS-SHA-256   OBJECT IDENTIFIER ::= {id-TA-RSA 4}
 * ```
 * 
 * @constant
 */
export
const id_TA_RSA_PSS_SHA_256: OBJECT_IDENTIFIER = _OID.fromParts([
    4,
], id_TA_RSA);

/* eslint-enable */
