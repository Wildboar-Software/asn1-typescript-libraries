/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_TA } from "../Doc-9303-Part-11-Module/id-TA.va.mjs";
// export { id_TA } from "../Doc-9303-Part-11-Module/id-TA.va.mjs";


/**
 * @summary id_TA_ECDSA
 * @description
 *
 * ECDSA Terminal Authentication arc. Table 8 assigns the signature
 * algorithms to the hash-specific children, not to this arc.
 *
 * Doc 9303-11, sections 7.1.4.2 and 9.2.9.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-TA-ECDSA             OBJECT IDENTIFIER ::= {id-TA 2}
 * ```
 * 
 * @constant
 */
export
const id_TA_ECDSA: OBJECT_IDENTIFIER = _OID.fromParts([
    2,
], id_TA);

/* eslint-enable */
