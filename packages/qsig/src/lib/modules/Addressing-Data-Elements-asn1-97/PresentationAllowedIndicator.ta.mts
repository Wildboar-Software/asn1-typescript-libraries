/* eslint-disable */
import {
    type BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary PresentationAllowedIndicator
 * @description
 *
 * Exported by Addressing-Data-Elements (ECMA-165 Annex I) and defined in Table
 * B.1 only as a boolean. Clauses 6, 7, 8, and 11 and Annex B do not say what
 * true or false means, or when a service includes this value. The service that
 * uses it defines that.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
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
