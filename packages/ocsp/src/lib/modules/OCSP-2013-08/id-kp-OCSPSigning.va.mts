/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_kp } from "@wildboar/x500/src/lib/modules/UsefulDefinitions/id-kp.va.mjs";


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
export const id_kp_OCSPSigning: OBJECT_IDENTIFIER = new _OID([9], id_kp);

/* eslint-enable */
