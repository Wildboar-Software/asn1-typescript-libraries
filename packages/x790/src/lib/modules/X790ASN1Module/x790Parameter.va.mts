/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
    ObjectIdentifier as _OID,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary x790Parameter
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * x790Parameter OBJECT IDENTIFIER ::= {itu-t(0) recommendation(0) x(24) x790(790) informationModel(0) parameter(5)}
 * ```
 * 
 * @constant
 */
export
const x790Parameter: OBJECT_IDENTIFIER = _OID.fromParts([
    /* itu-t */ 0,
    /* recommendation */ 0,
    /* x */ 24,
    /* x790 */ 790,
    /* informationModel */ 0,
    /* parameter */ 5,
]);

/* eslint-enable */
