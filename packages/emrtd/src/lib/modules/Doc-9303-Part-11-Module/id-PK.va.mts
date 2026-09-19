/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { bsi_de } from "../Doc-9303-Part-11-Module/bsi-de.va.mjs";
// export { bsi_de } from "../Doc-9303-Part-11-Module/bsi-de.va.mjs";


/**
 * @summary id_PK
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-PK                       OBJECT IDENTIFIER ::= { bsi-de protocols(2) smartcard(2) 1 }
 * ```
 * 
 * @constant
 */
export
const id_PK: OBJECT_IDENTIFIER = _OID.fromParts([
    /* protocols */ 2,
    /* smartcard */ 2,
    1,
], bsi_de);

/* eslint-enable */
