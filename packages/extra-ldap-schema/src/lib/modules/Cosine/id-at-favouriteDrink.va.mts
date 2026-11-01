/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_pilotAttributeType } from "../Cosine/id-pilotAttributeType.va.mjs";


/**
 * @summary id_at_favouriteDrink
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-at-favouriteDrink                OBJECT IDENTIFIER ::= { id-pilotAttributeType 5  }
 * ```
 * 
 * @constant
 */
export
const id_at_favouriteDrink: OBJECT_IDENTIFIER = _OID.fromParts([
    5,
], id_pilotAttributeType);

/* eslint-enable */

