/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_pilotAttributeType } from "../Cosine/id-pilotAttributeType.va.mjs";
// export { id_pilotAttributeType } from "../Cosine/id-pilotAttributeType.va.mjs";


/**
 * @summary id_at_mXRecord
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-at-mXRecord                      OBJECT IDENTIFIER ::= { id-pilotAttributeType 28 }
 * ```
 * 
 * @constant
 */
export
const id_at_mXRecord: OBJECT_IDENTIFIER = _OID.fromParts([
    28,
], id_pilotAttributeType);

/**
 * @summary id_at_mxRecord
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-mxRecord                      OBJECT IDENTIFIER ::= id-at-mXRecord
 * ```
 *
 * @constant
 */
export
const id_at_mxRecord: OBJECT_IDENTIFIER = id_at_mXRecord;

/* eslint-enable */
