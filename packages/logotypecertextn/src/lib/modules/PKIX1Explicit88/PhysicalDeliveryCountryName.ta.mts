/* eslint-disable */
import {
    ASN1Element as _Element,
    NumericString,
    PrintableString,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ub_country_name_alpha_length } from "../PKIX1Explicit88/ub-country-name-alpha-length.va.mjs";
import { ub_country_name_numeric_length } from "../PKIX1Explicit88/ub-country-name-numeric-length.va.mjs";



/**
 * @summary PhysicalDeliveryCountryName
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PhysicalDeliveryCountryName  ::=  CHOICE {
 *    x121-dcc-code NumericString (SIZE
 * (ub-country-name-numeric-length)),
 *    iso-3166-alpha2-code PrintableString
 *                   (SIZE (ub-country-name-alpha-length)) }
 * ```
 */
export
type PhysicalDeliveryCountryName =
    { x121_dcc_code: NumericString } /* CHOICE_ALT_ROOT */
    | { iso_3166_alpha2_code: PrintableString } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_PhysicalDeliveryCountryName: $.ASN1Decoder<PhysicalDeliveryCountryName> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PhysicalDeliveryCountryName
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PhysicalDeliveryCountryName (el: _Element): PhysicalDeliveryCountryName {
    if (!_cached_decoder_for_PhysicalDeliveryCountryName) { _cached_decoder_for_PhysicalDeliveryCountryName = $._decode_inextensible_choice<PhysicalDeliveryCountryName>({
    "UNIVERSAL 18": [ "x121_dcc_code", $._decodeNumericString ],
    "UNIVERSAL 19": [ "iso_3166_alpha2_code", $._decodePrintableString ]
}); }
    const decoded = _cached_decoder_for_PhysicalDeliveryCountryName(el);
    if ("x121_dcc_code" in decoded) {
        if (decoded.x121_dcc_code.length !== Number(ub_country_name_numeric_length)) {
            throw new ASN1SizeError("PhysicalDeliveryCountryName.x121-dcc-code violates SIZE constraint");
        }
    } else if (decoded.iso_3166_alpha2_code.length !== Number(ub_country_name_alpha_length)) {
        throw new ASN1SizeError("PhysicalDeliveryCountryName.iso-3166-alpha2-code violates SIZE constraint");
    }
    return decoded;
}

let _cached_encoder_for_PhysicalDeliveryCountryName: $.ASN1Encoder<PhysicalDeliveryCountryName> | null = null;

/**
 * @summary Encodes a(n) PhysicalDeliveryCountryName into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PhysicalDeliveryCountryName, encoded as an ASN.1 Element.
 */
export
function _encode_PhysicalDeliveryCountryName (value: PhysicalDeliveryCountryName, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PhysicalDeliveryCountryName) { _cached_encoder_for_PhysicalDeliveryCountryName = $._encode_choice<PhysicalDeliveryCountryName>({
    "x121_dcc_code": $._encodeNumericString,
    "iso_3166_alpha2_code": $._encodePrintableString,
}, $.BER); }
    return _cached_encoder_for_PhysicalDeliveryCountryName(value, elGetter);
}


/* eslint-enable */
