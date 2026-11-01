/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_pilotObjectClass } from "../Cosine/id-pilotObjectClass.va.mjs";
// export { id_pilotObjectClass } from "../Cosine/id-pilotObjectClass.va.mjs";


/**
 * @summary id_oc_documentSeriesOLD
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-oc-documentSeriesOLD             OBJECT IDENTIFIER ::= { id-pilotObjectClass  8 }
 * ```
 * 
 * @constant
 */
export
const id_oc_documentSeriesOLD: OBJECT_IDENTIFIER = _OID.fromParts([
    8,
], id_pilotObjectClass);

/* eslint-enable */
