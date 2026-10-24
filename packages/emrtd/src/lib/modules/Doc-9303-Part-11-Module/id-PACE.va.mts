/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { bsi_de } from "../Doc-9303-Part-11-Module/bsi-de.va.mjs";
// export { bsi_de } from "../Doc-9303-Part-11-Module/bsi-de.va.mjs";


/**
 * @summary id_PACE
 * @description
 *
 * Password Authenticated Connection Establishment. `{bsi-de protocols(2)
 * smartcard(2) 4}`.
 *
 * PACE is a password-authenticated Diffie-Hellman agreement. It gives strong
 * session keys from a short password (the MRZ-derived key is required; a key
 * derived from the Card Access Number is optional) and starts secure
 * messaging in the Master File. The chip rejects unauthenticated reads with
 * status `0x6982`.
 *
 * Doc 9303-11, sections 4.4 and 9.2.3.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-PACE OBJECT IDENTIFIER ::= { bsi-de protocols(2) smartcard(2) 4 }
 * ```
 * 
 * @constant
 */
export
const id_PACE: OBJECT_IDENTIFIER = _OID.fromParts([
    /* protocols */ 2,
    /* smartcard */ 2,
    4,
], bsi_de);

/* eslint-enable */
