/* eslint-disable */
import {
    type BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ACPNoAttachments
 * @description
 *
 * Whether attachments are allowed to this PLAD or SMA.
 * ACP 133 SUPP-1(A) does not say which boolean value
 * forbids attachments. The attribute name is
 * `aCPNoAttachments`.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ACPNoAttachments  ::=  BOOLEAN
 * ```
 */
export
type ACPNoAttachments = BOOLEAN; // BooleanType
export const _decode_ACPNoAttachments: $.ASN1Decoder<boolean> = $._decodeBoolean;
export const _encode_ACPNoAttachments: $.ASN1Encoder<boolean> = $._encodeBoolean;


/* eslint-enable */
