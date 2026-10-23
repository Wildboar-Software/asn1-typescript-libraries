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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    ChoiceInteger,
    _decode_ChoiceInteger,
    _encode_ChoiceInteger,
} from '../NLM/ChoiceInteger.ta.mjs';

/**
 * @summary MaxActiveCircuits
 * @description
 *
 * Maximum active circuits on a PLE. `dontCare` means limited only by resources.
 * Default `nullChoiceInteger`.
 * ITU-T Rec. X.283 (12/97)
 * [§5.10](https://www.itu.int/rec/T-REC-X.283-199712-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MaxActiveCircuits  ::=  ChoiceInteger
 * ```
 */
export type MaxActiveCircuits = ChoiceInteger; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) MaxActiveCircuits
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MaxActiveCircuits} The decoded data structure.
 */
export const _decode_MaxActiveCircuits: $.ASN1Decoder<MaxActiveCircuits> = _decode_ChoiceInteger;

/**
 * @summary Encodes a(n) MaxActiveCircuits into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MaxActiveCircuits, encoded as an ASN.1 Element.
 */
export const _encode_MaxActiveCircuits: $.ASN1Encoder<MaxActiveCircuits> = _encode_ChoiceInteger;


/* eslint-enable */
