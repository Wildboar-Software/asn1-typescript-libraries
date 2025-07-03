/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { id_kp } from "@wildboar/x500/UsefulDefinitions";

/**
 * @summary id_kp_OCSPSigning
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-kp-OCSPSigning            OBJECT IDENTIFIER ::= { id-kp 9 }
 * ```
 *
 * @constant
 */
export const id_kp_OCSPSigning: OBJECT_IDENTIFIER = _OID.fromParts([9], id_kp);

/* eslint-enable */
