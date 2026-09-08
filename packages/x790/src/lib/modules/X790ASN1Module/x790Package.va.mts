/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
    ObjectIdentifier as _OID,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary x790Package
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * x790Package OBJECT IDENTIFIER ::= {itu-t(0) recommendation(0) x(24) x790(790) informationModel(0) package(4)}
 * ```
 * 
 * @constant
 */
export
const x790Package: OBJECT_IDENTIFIER = _OID.fromParts([
    /* itu-t */ 0,
    /* recommendation */ 0,
    /* x */ 24,
    /* x790 */ 790,
    /* informationModel */ 0,
    /* package */ 4,
]);

/* eslint-enable */
