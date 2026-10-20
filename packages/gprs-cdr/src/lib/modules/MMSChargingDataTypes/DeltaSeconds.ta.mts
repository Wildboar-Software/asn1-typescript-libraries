/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DeltaSeconds
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DeltaSeconds  ::=  OCTET STRING ( SIZE( 8 ) )
 * ```
 */
export
type DeltaSeconds = OCTET_STRING; // OctetStringType

export
const _decode_DeltaSeconds: $.ASN1Decoder<DeltaSeconds> = $._decodeOctetString;

export
const _encode_DeltaSeconds: $.ASN1Encoder<DeltaSeconds> = $._encodeOctetString;

/* eslint-enable */
