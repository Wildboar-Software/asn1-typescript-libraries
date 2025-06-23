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
    GeneralName,
    _decode_GeneralName,
    _encode_GeneralName,
} from "../PKI-Stub/GeneralName.ta.mjs";

/**
 * @summary GeneralNames
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GeneralNames  ::=  SEQUENCE SIZE (1..MAX) OF GeneralName
 * ```
 */
export type GeneralNames = GeneralName[]; // SequenceOfType

/**
 * @summary Decodes an ASN.1 element into a(n) GeneralNames
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {GeneralNames} The decoded data structure.
 */
export function _decode_GeneralNames(el: _Element): GeneralNames {
    return el.sequenceOf.map((x) => _decode_GeneralName(x));
}

/**
 * @summary Encodes a(n) GeneralNames into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GeneralNames, encoded as an ASN.1 Element.
 */
export function _encode_GeneralNames(value: GeneralNames, _elGetter: $.ASN1Encoder<GeneralNames>): _Element {
    return DERElement.fromSequence(value.map((x) => _encode_GeneralName(x, $.DER)));
}


/* eslint-enable */
