/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_pilotObjectClass } from "../Cosine/id-pilotObjectClass.va.mjs";


/**
 * @summary id_oc_documentSeries
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-oc-documentSeries                OBJECT IDENTIFIER ::= { id-pilotObjectClass  9 }
 * ```
 * 
 * @constant
 */
export
const id_oc_documentSeries: OBJECT_IDENTIFIER = _OID.fromParts([
    9,
], id_pilotObjectClass);

/* eslint-enable */

