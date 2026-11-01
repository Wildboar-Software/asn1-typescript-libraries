/* eslint-disable */
import {
    type BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary HierarchyBelow
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * HierarchyBelow  ::=  BOOLEAN
 * ```
 */
export
type HierarchyBelow = BOOLEAN; // BooleanType

export
const _decode_HierarchyBelow: $.ASN1Decoder<HierarchyBelow> = $._decodeBoolean;

export
const _encode_HierarchyBelow: $.ASN1Encoder<HierarchyBelow> = $._encodeBoolean;

/* eslint-enable */
