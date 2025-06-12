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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import {
    GeneralName,
    _decode_GeneralName,
    _encode_GeneralName,
} from "../PKI-Stub/GeneralName.ta.js";

/* START_OF_SYMBOL_DEFINITION GeneralNames */
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
/* END_OF_SYMBOL_DEFINITION GeneralNames */

/* START_OF_SYMBOL_DEFINITION _decode_GeneralNames */
/**
 * @summary Decodes an ASN.1 element into a(n) GeneralNames
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {GeneralNames} The decoded data structure.
 */
export function _decode_GeneralNames(el: _Element) {
    return $._decodeSequenceOf<GeneralName>(
        () => _decode_GeneralName
    )(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_GeneralNames */

/* START_OF_SYMBOL_DEFINITION _encode_GeneralNames */
/**
 * @summary Encodes a(n) GeneralNames into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GeneralNames, encoded as an ASN.1 Element.
 */
export function _encode_GeneralNames(
    value: GeneralNames,
    elGetter: $.ASN1Encoder<GeneralNames>
) {
    return $._encodeSequenceOf<GeneralName>(
        () => _encode_GeneralName,
        $.BER
    )(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_GeneralNames */

/* eslint-enable */
