/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { bsi_de } from "../Doc-9303-Part-11-Module/bsi-de.va.mjs";
// export { bsi_de } from "../Doc-9303-Part-11-Module/bsi-de.va.mjs";


/**
 * @summary id_TA
 * @description
 *
 * General Terminal Authentication protocol. `{bsi-de protocols(2)
 * smartcard(2) 2}`.
 *
 * `TerminalAuthenticationInfo.protocol` carries this object identifier, not
 * a signature-specific child, because the specific protocol may change. This
 * specification supports version 1. Version 2 from later BSI TR-03110
 * editions is out of scope.
 *
 * Terminal Authentication is required for LDS2 and may protect secondary
 * biometrics. The chip must already support Chip Authentication or PACE with
 * Chip Authentication Mapping, and it binds the terminal's access rights to
 * the secure messaging established by that authenticated ephemeral key. At
 * most one Terminal Authentication runs in a session.
 *
 * Doc 9303-11, sections 7.1, 9.2.8, and 9.2.9.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-TA                   OBJECT IDENTIFIER ::= { bsi-de protocols(2) smartcard(2) 2 }
 * ```
 * 
 * @constant
 */
export
const id_TA: OBJECT_IDENTIFIER = _OID.fromParts([
    /* protocols */ 2,
    /* smartcard */ 2,
    2,
], bsi_de);

/* eslint-enable */
