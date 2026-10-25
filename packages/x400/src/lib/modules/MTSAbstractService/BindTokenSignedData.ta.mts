/* eslint-disable */
import {
    type ASN1Element as _Element,
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
    type RandomNumber,
    _decode_RandomNumber,
    _encode_RandomNumber,
} from '../MTSAbstractService/RandomNumber.ta.mjs';
/**
 * @summary BindTokenSignedData
 * @description
 *
 * Defined in ITU-T X.411 (1999) (§8).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BindTokenSignedData  ::=  RandomNumber
 * ```
 */
export type BindTokenSignedData = RandomNumber; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) BindTokenSignedData
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BindTokenSignedData} The decoded data structure.
 */
export const _decode_BindTokenSignedData: $.ASN1Decoder<BindTokenSignedData> = _decode_RandomNumber;

/**
 * @summary Encodes a(n) BindTokenSignedData into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BindTokenSignedData, encoded as an ASN.1 Element.
 */
export const _encode_BindTokenSignedData: $.ASN1Encoder<BindTokenSignedData> = _encode_RandomNumber;


/* eslint-enable */
