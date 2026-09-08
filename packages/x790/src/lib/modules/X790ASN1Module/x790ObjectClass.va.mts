/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
    ObjectIdentifier as _OID,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary x790ObjectClass
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * x790ObjectClass OBJECT IDENTIFIER ::= {itu-t(0) recommendation(0) x(24) x790(790) informationModel(0)
 *    managedObjectClass(3)}
 * ```
 * 
 * @constant
 */
export
const x790ObjectClass: OBJECT_IDENTIFIER = _OID.fromParts([
    /* itu-t */ 0,
    /* recommendation */ 0,
    /* x */ 24,
    /* x790 */ 790,
    /* informationModel */ 0,
    /* managedObjectClass */ 3,
]);

/* eslint-enable */
