/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_pilotAttributeType } from "../Cosine/id-pilotAttributeType.va.mjs";


/**
 * @summary id_at_mail
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-at-mail                          OBJECT IDENTIFIER ::= { id-pilotAttributeType 3  }
 * ```
 * 
 * @constant
 */
export
const id_at_mail: OBJECT_IDENTIFIER = _OID.fromParts([
    3,
], id_pilotAttributeType);

/* eslint-enable */

