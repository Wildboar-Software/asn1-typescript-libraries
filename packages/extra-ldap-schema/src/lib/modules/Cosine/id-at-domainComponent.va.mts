/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_pilotAttributeType } from "../Cosine/id-pilotAttributeType.va.mjs";


/**
 * @summary id_at_domainComponent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-at-domainComponent               OBJECT IDENTIFIER ::= { id-pilotAttributeType 25 }
 * ```
 * 
 * @constant
 */
export
const id_at_domainComponent: OBJECT_IDENTIFIER = _OID.fromParts([
    25,
], id_pilotAttributeType);

/* eslint-enable */

