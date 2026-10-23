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
    ORName,
    _decode_ORName,
    _encode_ORName,
} from '../MTSAbstractService/ORName.ta.mjs';
/**
 * @summary ORNamePattern
 * @description
 *
 * Defined in ITU-T X.402 (1999) (§17 / Annex A).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ORNamePattern  ::=  ORName
 * ```
 */
export type ORNamePattern = ORName; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) ORNamePattern
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ORNamePattern} The decoded data structure.
 */
export const _decode_ORNamePattern: $.ASN1Decoder<ORNamePattern> = _decode_ORName;

/**
 * @summary Encodes a(n) ORNamePattern into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ORNamePattern, encoded as an ASN.1 Element.
 */
export const _encode_ORNamePattern: $.ASN1Encoder<ORNamePattern> = _encode_ORName;


/* eslint-enable */
