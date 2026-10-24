/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_CA } from "../Doc-9303-Part-11-Module/id-CA.va.mjs";
// export { id_CA } from "../Doc-9303-Part-11-Module/id-CA.va.mjs";


/**
 * @summary id_CA_DH
 * @description
 *
 * Diffie-Hellman Chip Authentication arc. A
 * `ChipAuthenticationInfo.protocol` value is one of the cipher-specific
 * children, not this arc.
 *
 * Doc 9303-11, section 9.2.7 and Table 5.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-CA-DH                    OBJECT IDENTIFIER ::= {id-CA 1}
 * ```
 * 
 * @constant
 */
export
const id_CA_DH: OBJECT_IDENTIFIER = _OID.fromParts([
    1,
], id_CA);

/* eslint-enable */
