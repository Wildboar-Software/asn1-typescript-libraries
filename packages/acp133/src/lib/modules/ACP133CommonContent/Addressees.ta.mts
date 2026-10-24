/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    type PrintableString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Addressees
 * @description
 *
 * Plain-language addresses, each 1 to 55 characters.
 *
 * An address list is a shorthand for a predetermined
 * set of recipients (ACP 133, June 1998, paragraph
 * 105.a). This syntax is the membership of an
 * ACP 127 / JANAP 128 collective: action addressees,
 * who are expected to act on the message; information
 * addressees; second-party action PLAs; extra
 * addressees merged into those lists under circumstances
 * given in {@link Remarks}; PLAs allowed to originate
 * to the list; and, for some collectives, one combined
 * action and information list (`plaAddressees`).
 *
 * [draft-dally-acp133-and-ldap-01, section 3.10](https://datatracker.ietf.org/doc/html/draft-dally-acp133-and-ldap-01#section-3.10)
 * and
 * [section 6.5](https://datatracker.ietf.org/doc/html/draft-dally-acp133-and-ldap-01#section-6.5).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Addressees  ::=  SEQUENCE OF PrintableString (SIZE (1..55))
 * ```
 */
export
type Addressees = PrintableString[]; // SequenceOfType

let _cached_decoder_for_Addressees: $.ASN1Decoder<Addressees> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Addressees
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Addressees (el: _Element): Addressees {
    if (!_cached_decoder_for_Addressees) { _cached_decoder_for_Addressees = $._decodeSequenceOf<PrintableString>(() => $._decodePrintableString); }
    const value = _cached_decoder_for_Addressees(el);
    for (const item of value) {
        if (item.length < 1 || item.length > 55) {
            throw new ASN1SizeError("Addressees violates SIZE constraint");
        }
    }
    return value;
}

let _cached_encoder_for_Addressees: $.ASN1Encoder<Addressees> | null = null;

/**
 * @summary Encodes a(n) Addressees into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Addressees, encoded as an ASN.1 Element.
 */
export
function _encode_Addressees (value: Addressees, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Addressees) { _cached_encoder_for_Addressees = $._encodeSequenceOf<PrintableString>(() => $._encodePrintableString, $.BER); }
    return _cached_encoder_for_Addressees(value, elGetter);
}


/* eslint-enable */
