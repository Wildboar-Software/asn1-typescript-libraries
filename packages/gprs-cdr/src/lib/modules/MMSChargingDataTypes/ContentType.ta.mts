/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ContentType
 * @description
 *
 * The Content Type of the MM as defined in TS 23.140 [206].
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.7.
 *
 * Content type of the MM content. On the CDR tables this is copied from
 * the corresponding MM1, MM4, or MM7 message.
 *
 * 3GPP TS 32.270 V19.0.0 clause 6.1.1.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ContentType  ::=  OCTET STRING
 * ```
 */
export
type ContentType = OCTET_STRING; // OctetStringType

export
const _decode_ContentType: $.ASN1Decoder<ContentType> = $._decodeOctetString;

export
const _encode_ContentType: $.ASN1Encoder<ContentType> = $._encodeOctetString;

/* eslint-enable */
