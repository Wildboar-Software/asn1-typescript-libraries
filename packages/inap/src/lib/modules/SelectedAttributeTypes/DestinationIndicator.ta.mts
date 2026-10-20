/* eslint-disable */
import {
    PrintableString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DestinationIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DestinationIndicator  ::=  PrintableString(SIZE (1..ub-destination-indicator))
 * ```
 */
export
type DestinationIndicator = PrintableString; // PrintableString

export
const _decode_DestinationIndicator: $.ASN1Decoder<DestinationIndicator> = $._decodePrintableString;

export
const _encode_DestinationIndicator: $.ASN1Encoder<DestinationIndicator> = $._encodePrintableString;

/* eslint-enable */
