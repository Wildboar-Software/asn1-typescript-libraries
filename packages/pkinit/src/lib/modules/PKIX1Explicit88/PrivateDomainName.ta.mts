/* eslint-disable */
import {
    ASN1SizeError,
    ASN1Element as _Element,
    NumericString,
    PrintableString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ub_domain_name_length } from "../PKIX1Explicit88/ub-domain-name-length.va.mjs";



/**
 * @summary PrivateDomainName
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PrivateDomainName  ::=  CHOICE {
 *    numeric   NumericString   (SIZE (1..ub-domain-name-length)),
 *    printable PrintableString (SIZE (1..ub-domain-name-length)) }
 * ```
 */
export
type PrivateDomainName =
    { numeric: NumericString } /* CHOICE_ALT_ROOT */
    | { printable: PrintableString } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_PrivateDomainName: $.ASN1Decoder<PrivateDomainName> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PrivateDomainName
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PrivateDomainName (el: _Element): PrivateDomainName {
    if (!_cached_decoder_for_PrivateDomainName) { _cached_decoder_for_PrivateDomainName = $._decode_inextensible_choice<PrivateDomainName>({
    "UNIVERSAL 18": [ "numeric", $._decodeNumericString ],
    "UNIVERSAL 19": [ "printable", $._decodePrintableString ]
}); }
    const value = _cached_decoder_for_PrivateDomainName(el);
    if (Object.values(value)[0].length < 1 || Object.values(value)[0].length > Number(ub_domain_name_length)) {
        throw new ASN1SizeError("PrivateDomainName violates SIZE constraint");
    }
    return value;
}

let _cached_encoder_for_PrivateDomainName: $.ASN1Encoder<PrivateDomainName> | null = null;

/**
 * @summary Encodes a(n) PrivateDomainName into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PrivateDomainName, encoded as an ASN.1 Element.
 */
export
function _encode_PrivateDomainName (value: PrivateDomainName, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PrivateDomainName) { _cached_encoder_for_PrivateDomainName = $._encode_choice<PrivateDomainName>({
    "numeric": $._encodeNumericString,
    "printable": $._encodePrintableString,
}, $.BER); }
    return _cached_encoder_for_PrivateDomainName(value, elGetter);
}


/* eslint-enable */
