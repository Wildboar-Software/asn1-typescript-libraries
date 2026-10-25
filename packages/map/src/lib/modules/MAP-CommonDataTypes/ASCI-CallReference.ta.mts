/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_TBCD_STRING, _encode_TBCD_STRING, type TBCD_STRING } from "../MAP-CommonDataTypes/TBCD-STRING.ta.mjs";


/**
 * @summary ASCI_CallReference
 * @description
 *
 * ASCI (VGCS/VBS) call reference. `TBCD-STRING` of 1..8 octets. Digits of
 * VGCS/VBS-area and Group-ID are concatenated in that order if there is a
 * VGCS/VBS-area.
 *
 * (3GPP TS 29.002 V19.1.0 clauses 17.7.8 and 7.6.2.33).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ASCI-CallReference  ::=  TBCD-STRING (SIZE (1..8))
 * ```
 */
export
type ASCI_CallReference = TBCD_STRING; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) ASCI_CallReference
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_ASCI_CallReference: $.ASN1Decoder<ASCI_CallReference> = _decode_TBCD_STRING;

/**
 * @summary Encodes a(n) ASCI_CallReference into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ASCI_CallReference, encoded as an ASN.1 Element.
 */
export const _encode_ASCI_CallReference: $.ASN1Encoder<ASCI_CallReference> = _encode_TBCD_STRING;


/* eslint-enable */
