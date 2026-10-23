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
    Time,
    _decode_Time,
    _encode_Time,
} from '../MTSAbstractService/Time.ta.mjs';
/**
 * @summary StartUpDate
 * @description
 *
 * Defined in ITU-T X.411 (1999) (accounting objects).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * StartUpDate  ::=  Time
 * ```
 */
export type StartUpDate = Time; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) StartUpDate
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {StartUpDate} The decoded data structure.
 */
export const _decode_StartUpDate: $.ASN1Decoder<StartUpDate> = _decode_Time;

/**
 * @summary Encodes a(n) StartUpDate into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The StartUpDate, encoded as an ASN.1 Element.
 */
export const _encode_StartUpDate: $.ASN1Encoder<StartUpDate> = _encode_Time;


/* eslint-enable */
