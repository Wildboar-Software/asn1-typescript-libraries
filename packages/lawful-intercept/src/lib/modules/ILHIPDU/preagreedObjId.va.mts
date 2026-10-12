/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { iLHIDomainId } from "../ILHIPDU/iLHIDomainId.va.mjs";
// export { iLHIDomainId } from "../ILHIPDU/iLHIDomainId.va.mjs";


/**
 * @summary preagreedObjId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * preagreedObjId     OBJECT IDENTIFIER ::= {iLHIDomainId identifiers(1) preagreed(0)}
 * ```
 * 
 * @constant
 */
export
const preagreedObjId: OBJECT_IDENTIFIER = _OID.fromParts([
    /* identifiers */ 1,
    /* preagreed */ 0,
], iLHIDomainId);

/* eslint-enable */
