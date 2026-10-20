/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary HierarchyLevel
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * HierarchyLevel  ::=  INTEGER
 * ```
 */
export
type HierarchyLevel = INTEGER;

export
const _decode_HierarchyLevel: $.ASN1Decoder<HierarchyLevel> = $._decodeInteger;

export
const _encode_HierarchyLevel: $.ASN1Encoder<HierarchyLevel> = $._encodeInteger;

/* eslint-enable */
