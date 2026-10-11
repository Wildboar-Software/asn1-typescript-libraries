/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_TA_ECDSA } from "../Doc-9303-Part-11-Module/id-TA-ECDSA.va.mjs";
// export { id_TA_ECDSA } from "../Doc-9303-Part-11-Module/id-TA-ECDSA.va.mjs";


/**
 * @summary id_TA_ECDSA_SHA_256
 * @description
 *
 * Terminal Authentication signature: ECDSA with SHA-256 in the plain format
 * of BSI TR-03111. The curve is 224, 256, 320, 384, or 512 bits, with domain
 * parameters compliant with TR-03111. The public key is the TLV format
 * specified in Doc 9303-12. The compressed ephemeral public key is the
 * x-coordinate of the ECDH public point.
 *
 * Doc 9303-11, section 7.1.4.2 and Table 8.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-TA-ECDSA-SHA-256     OBJECT IDENTIFIER ::= {id-TA-ECDSA 3}
 * ```
 * 
 * @constant
 */
export
const id_TA_ECDSA_SHA_256: OBJECT_IDENTIFIER = _OID.fromParts([
    3,
], id_TA_ECDSA);

/* eslint-enable */
