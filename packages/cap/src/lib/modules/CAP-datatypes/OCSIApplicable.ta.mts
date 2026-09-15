import {
    NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary OCSIApplicable
 * @description
 *
 * NULL: Originating CAMEL Subscription Information, if present, shall be
 * applied on the outgoing call leg created with Connect. See 3GPP TS 23.078.
 * (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OCSIApplicable ::= NULL
 * ```
 *
 */
export type OCSIApplicable = NULL;
export const _decode_OCSIApplicable = $._decodeNull;
export const _encode_OCSIApplicable = $._encodeNull;
