/* eslint-disable */
import {
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AttributeSetId
 * @description
 * 
 * Object identifier of an attribute set (ANSI/NISO Z39.50-2003 §4.1). On an RPN
 * query it is the default for attributes that omit their own set id. On a Scan
 * request it may be omitted only when every attribute carries its own set id
 * (comment 2). On a Scan response it fills in set ids omitted from attribute
 * lists in that response (comment 3). This edition registers exp-1 and ext-1
 * (Appendix ATR). It does not register bib-1.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AttributeSetId   ::=  OBJECT IDENTIFIER
 * ```
 */
export
type AttributeSetId = OBJECT_IDENTIFIER; // ObjectIdentifierType
export const _decode_AttributeSetId = $._decodeObjectIdentifier;
export const _encode_AttributeSetId = $._encodeObjectIdentifier;


/* eslint-enable */
