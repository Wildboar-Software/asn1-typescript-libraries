/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
    ObjectIdentifier as _OID,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary x790NameBinding
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * x790NameBinding OBJECT IDENTIFIER ::= {itu-t(0) recommendation(0) x(24) x790(790) informationModel(0)
 *    nameBinding(6)}
 * ```
 * 
 * @constant
 */
export
const x790NameBinding: OBJECT_IDENTIFIER = _OID.fromParts([
    /* itu-t */ 0,
    /* recommendation */ 0,
    /* x */ 24,
    /* x790 */ 790,
    /* informationModel */ 0,
    /* nameBinding */ 6,
]);

/* eslint-enable */
