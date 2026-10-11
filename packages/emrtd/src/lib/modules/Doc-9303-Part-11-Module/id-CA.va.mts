/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { bsi_de } from "../Doc-9303-Part-11-Module/bsi-de.va.mjs";
// export { bsi_de } from "../Doc-9303-Part-11-Module/bsi-de.va.mjs";


/**
 * @summary id_CA
 * @description
 *
 * Chip Authentication arc. `{bsi-de protocols(2) smartcard(2) 3}`.
 *
 * Chip Authentication is an ephemeral-static Diffie-Hellman agreement. It
 * authenticates the chip and replaces the session keys. Unlike Active
 * Authentication, the transcript is not transferable. The static public key
 * is checked by Passive Authentication.
 *
 * Doc 9303-11, sections 6.2 and 9.2.7.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-CA                       OBJECT IDENTIFIER ::= { bsi-de protocols(2) smartcard(2) 3 }
 * ```
 * 
 * @constant
 */
export
const id_CA: OBJECT_IDENTIFIER = _OID.fromParts([
    /* protocols */ 2,
    /* smartcard */ 2,
    3,
], bsi_de);

/* eslint-enable */
