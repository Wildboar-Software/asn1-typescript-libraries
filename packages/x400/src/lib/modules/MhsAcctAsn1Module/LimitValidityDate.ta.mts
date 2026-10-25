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
    type Time,
    _decode_Time,
    _encode_Time,
} from '../MTSAbstractService/Time.ta.mjs';
/**
 * @summary LimitValidityDate
 * @description
 *
 * Defined in ITU-T X.411 (1999) (accounting objects).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LimitValidityDate  ::=  Time
 * ```
 */
export type LimitValidityDate = Time; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) LimitValidityDate
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {LimitValidityDate} The decoded data structure.
 */
export const _decode_LimitValidityDate: $.ASN1Decoder<LimitValidityDate> = _decode_Time;

/**
 * @summary Encodes a(n) LimitValidityDate into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LimitValidityDate, encoded as an ASN.1 Element.
 */
export const _encode_LimitValidityDate: $.ASN1Encoder<LimitValidityDate> = _encode_Time;


/* eslint-enable */
