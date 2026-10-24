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
    Time,
    _decode_Time,
    _encode_Time,
} from '../MTSAbstractService/Time.ta.mjs';
/**
 * @summary OperationTime
 * @description
 *
 * A Time parameter is specified in terms of UTC (Coordinated Universal Time), and may
 * optionally also contain an offset to UTC to convey the local time. The precision of the
 * time of day is to either one second or one minute, determined by the generator of the
 * parameter. See ITU-T X.411 (1999), §8.5.4.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OperationTime  ::=  Time
 * ```
 */
export type OperationTime = Time; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) OperationTime
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OperationTime} The decoded data structure.
 */
export const _decode_OperationTime: $.ASN1Decoder<OperationTime> = _decode_Time;

/**
 * @summary Encodes a(n) OperationTime into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OperationTime, encoded as an ASN.1 Element.
 */
export const _encode_OperationTime: $.ASN1Encoder<OperationTime> = _encode_Time;


/* eslint-enable */
