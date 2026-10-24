/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary BqsigInformationElement
 * @description
 *
 * Embedded B-QSIG information elements (ECMA-254 2nd edition, December 1999,
 * §9.2.2.4, annex B.2, annex C.2). When a specification encapsulates existing
 * ECMA-266 information elements, it groups them, in their ISO/IEC 13247 coding,
 * as the contents of this `[APPLICATION 0]` element. The element may stand
 * alone or be a member of a sequence or set. Which elements are embedded is
 * stated by a comment at each use. A Facility information element shall not be
 * encapsulated inside a Facility information element.
 *
 * Annex B.2 (X.208, arc `bqsig-generic-parameters(2)`) and annex C.2 (X.680,
 * arc `bqsig-generic-parameters(12)`) publish the same module name and the same
 * type. This module matches that type. ECMA-254 defines no further octet
 * layout.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-254/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BqsigInformationElement  ::=  [APPLICATION 0] IMPLICIT OCTET STRING
 * ```
 */
export
type BqsigInformationElement = OCTET_STRING; // OctetStringType

let _cached_decoder_for_BqsigInformationElement: $.ASN1Decoder<BqsigInformationElement> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BqsigInformationElement
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BqsigInformationElement (el: _Element): BqsigInformationElement {
    if (!_cached_decoder_for_BqsigInformationElement) { _cached_decoder_for_BqsigInformationElement = $._decode_implicit<BqsigInformationElement>(() => $._decodeOctetString); }
    return _cached_decoder_for_BqsigInformationElement(el);
}

let _cached_encoder_for_BqsigInformationElement: $.ASN1Encoder<BqsigInformationElement> | null = null;

/**
 * @summary Encodes a(n) BqsigInformationElement into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BqsigInformationElement, encoded as an ASN.1 Element.
 */
export
function _encode_BqsigInformationElement (value: BqsigInformationElement, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BqsigInformationElement) { _cached_encoder_for_BqsigInformationElement = $._encode_implicit(_TagClass.application, 0, () => $._encodeOctetString, $.BER); }
    return _cached_encoder_for_BqsigInformationElement(value, elGetter);
}

/* eslint-enable */
