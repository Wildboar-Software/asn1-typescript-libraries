/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    NumericString,
    PrintableString,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary AdministrationDomainName
 * @description
 *
 * ADMD name relative to `country-name`, tagged `[APPLICATION 2]` (ITU-T X.402 (1999),
 * §18.3.1). Numeric and Printable encodings of the same digits are equivalent (X.402
 * §18.4 b). A single space (`" "`) means **any ADMD** in that country, if the country
 * permits it: addresses must still be unambiguous without the real ADMD, and ADMDs in
 * the country must interconnect. A single zero (`"0"`) is reserved for PRMDs that are
 * not connected to (and not reachable from) any ADMD; it must not be used by a PRMD that
 * is directly or indirectly connected to an ADMD. Presence of ADMD `0` on a recipient
 * with `responsibility` = not-responsible, or on a DL-expanded/redirected originator, is
 * legitimate and must not cause non-delivery. Empty strings are permitted by the SIZE
 * (0..16) constraint.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AdministrationDomainName  ::=  [APPLICATION 2]  CHOICE {
 *   numeric    NumericString(SIZE (0..ub-domain-name-length)),
 *   printable  PrintableString(SIZE (0..ub-domain-name-length)) }
 * ```
 */
export type AdministrationDomainName =
    | { numeric: NumericString } /* CHOICE_ALT_ROOT */
    | { printable: PrintableString } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_AdministrationDomainName: $.ASN1Decoder<AdministrationDomainName> | null =
    null;

/**
 * @summary Decodes an ASN.1 element into a(n) AdministrationDomainName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AdministrationDomainName} The decoded data structure.
 */
export function _decode_AdministrationDomainName(el: _Element): AdministrationDomainName {
    if (!_cached_decoder_for_AdministrationDomainName) {
        _cached_decoder_for_AdministrationDomainName =
            $._decode_explicit<AdministrationDomainName>(() =>
                $._decode_inextensible_choice<AdministrationDomainName>({
                    "UNIVERSAL 18": ["numeric", $._decodeNumericString],
                    "UNIVERSAL 19": ["printable", $._decodePrintableString],
                })
            );
    }
    return _cached_decoder_for_AdministrationDomainName(el);
}

let _cached_encoder_for_AdministrationDomainName: $.ASN1Encoder<AdministrationDomainName> | null =
    null;

/**
 * @summary Encodes a(n) AdministrationDomainName into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AdministrationDomainName, encoded as an ASN.1 Element.
 */
export function _encode_AdministrationDomainName(value: AdministrationDomainName, elGetter: $.ASN1Encoder<AdministrationDomainName>): _Element {
    if (!_cached_encoder_for_AdministrationDomainName) {
        _cached_encoder_for_AdministrationDomainName = $._encode_explicit(
            _TagClass.application,
            2,
            () =>
                $._encode_choice<AdministrationDomainName>(
                    {
                        numeric: $._encodeNumericString,
                        printable: $._encodePrintableString,
                    },
                    $.BER
                ),
            $.BER
        );
    }
    return _cached_encoder_for_AdministrationDomainName(value, elGetter);
}


/* eslint-enable */
