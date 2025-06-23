/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
    DERElement,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    Extension,
    _decode_Extension,
    _encode_Extension,
} from "../PKI-Stub/Extension.ta.mjs";

/**
 * @summary Extensions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Extensions  ::=  SEQUENCE SIZE (1..MAX) OF Extension
 * ```
 */
export type Extensions = Extension[]; // SequenceOfType

let _cached_decoder_for_Extensions: $.ASN1Decoder<Extensions> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Extensions
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Extensions} The decoded data structure.
 */
export function _decode_Extensions(el: _Element): Extensions {
    return el.sequenceOf.map((ext) => _decode_Extension(ext));
}

/**
 * @summary Encodes a(n) Extensions into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Extensions, encoded as an ASN.1 Element.
 */
export function _encode_Extensions(value: Extensions, elGetter: $.ASN1Encoder<Extensions>): _Element {
    return DERElement.fromSequence(value.map(_encode_Extension));
}


/* eslint-enable */
