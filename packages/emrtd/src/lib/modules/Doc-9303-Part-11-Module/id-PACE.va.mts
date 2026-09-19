/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { bsi_de } from "../Doc-9303-Part-11-Module/bsi-de.va.mjs";
// export { bsi_de } from "../Doc-9303-Part-11-Module/bsi-de.va.mjs";


/**
 * @summary id_PACE
 * @description
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
