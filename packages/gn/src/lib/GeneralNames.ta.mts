/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    type GeneralName,
    _decode_GeneralName,
    _encode_GeneralName,
} from "./GeneralName.ta.mjs";

/**
 * @summary GeneralNames
 * @description
 *
 * A `SEQUENCE SIZE (1..MAX)` of {@link GeneralName}. Empty is not allowed.
 * Sequence order is the encoded order. This package does not add comparison,
 * string, or JSON functions for the sequence: it is an array, so those are
 * ordinary array operations over the `GeneralName` functions.
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
export const _decode_GeneralNames: $.ASN1Decoder<GeneralNames> = $._decodeSequenceOf<GeneralName>(
    () => _decode_GeneralName,
);

/**
 * @summary Encodes a(n) GeneralNames into an ASN.1 Element.
 * @description
 *
 * The `elGetter` argument chooses the codec (BER, CER, or DER) for the
 * sequence and for every name inside it.
 *
 * @function
 * @param value The names being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GeneralNames, encoded as an ASN.1 Element.
 */
export function _encode_GeneralNames(
    value: GeneralNames,
    elGetter: $.ASN1Encoder<GeneralNames>,
): _Element {
    const el: _Element = elGetter(value, elGetter);
    const children: _Element[] = new Array(value.length);
    for (let i: number = 0; i < value.length; i++) {
        const name: GeneralName | undefined = value[i];
        if (name === undefined) {
            throw new TypeError("GeneralNames cannot contain an empty slot");
        }
        const childGetter: $.ASN1Encoder<GeneralName> = () => elGetter(value, elGetter);
        children[i] = _encode_GeneralName(name, childGetter);
    }
    el.sequence = children;
    el.tagClass = _TagClass.universal;
    el.construction = _Construction.constructed;
    el.tagNumber = _UniversalType.sequence;
    return el;
}

/* eslint-enable */
