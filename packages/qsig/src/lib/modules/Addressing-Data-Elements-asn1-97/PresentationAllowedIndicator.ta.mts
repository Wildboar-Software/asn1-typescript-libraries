/* eslint-disable */
import {
    BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PresentationAllowedIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PresentationAllowedIndicator  ::=  BOOLEAN
 * ```
 */
export
type PresentationAllowedIndicator = BOOLEAN; // BooleanType

export
const _decode_PresentationAllowedIndicator: $.ASN1Decoder<PresentationAllowedIndicator> = $._decodeBoolean;

export
const _encode_PresentationAllowedIndicator: $.ASN1Encoder<PresentationAllowedIndicator> = $._encodeBoolean;

/* eslint-enable */
