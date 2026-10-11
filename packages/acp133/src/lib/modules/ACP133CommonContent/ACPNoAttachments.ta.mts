/* eslint-disable */
import {
    BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ACPNoAttachments
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ACPNoAttachments  ::=  BOOLEAN
 * ```
 */
export
type ACPNoAttachments = BOOLEAN; // BooleanType
export const _decode_ACPNoAttachments = $._decodeBoolean;
export const _encode_ACPNoAttachments = $._encodeBoolean;


/* eslint-enable */
