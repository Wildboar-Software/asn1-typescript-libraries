/* eslint-disable */
import {
    type BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PresentationAllowedIndicator
 * @description
 * 
 * Boolean exported with the addressing module for use by Q.95x supplementary
 * services. Q.932 defines no further meaning for the two boolean values.
 *
 * ITU-T Rec. Q.932 (05/1998) Annex C; ITU-T Rec. Q.932 (1998) Amd.1 (06/2000)
 * Table C-1 bis.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PresentationAllowedIndicator  ::=  BOOLEAN
 * ```
 */
export
type PresentationAllowedIndicator = BOOLEAN; // BooleanType
export const _decode_PresentationAllowedIndicator: $.ASN1Decoder<PresentationAllowedIndicator> = $._decodeBoolean;
export const _encode_PresentationAllowedIndicator: $.ASN1Encoder<PresentationAllowedIndicator> = $._encodeBoolean;


/* eslint-enable */
