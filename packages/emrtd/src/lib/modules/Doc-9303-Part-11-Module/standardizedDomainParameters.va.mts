/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { bsi_de } from "../Doc-9303-Part-11-Module/bsi-de.va.mjs";
// export { bsi_de } from "../Doc-9303-Part-11-Module/bsi-de.va.mjs";


/**
 * @summary standardizedDomainParameters
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * standardizedDomainParameters OBJECT IDENTIFIER ::= { bsi-de algorithms(1) 2 }
 * ```
 * 
 * @constant
 */
export
const standardizedDomainParameters: OBJECT_IDENTIFIER = _OID.fromParts([
    /* algorithms */ 1,
    2,
], bsi_de);

/* eslint-enable */
