/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { euro_oc } from "../ISSS-Schema/euro-oc.va.mjs";
// export { euro_oc } from "../ISSS-Schema/euro-oc.va.mjs";


/**
 * @summary id_euro_oc_orgUnit
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-euro-oc-orgUnit          OBJECT IDENTIFIER ::= { euro-oc 2 }
 * ```
 * 
 * @constant
 */
export
const id_euro_oc_orgUnit: OBJECT_IDENTIFIER = _OID.fromParts([
    2,
], euro_oc);

/* eslint-enable */
