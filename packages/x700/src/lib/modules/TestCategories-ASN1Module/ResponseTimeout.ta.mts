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
    type TimeoutPeriod,
    _decode_TimeoutPeriod,
    _encode_TimeoutPeriod,
} from '../Test-ASN1Module/TimeoutPeriod.ta.mjs';
/**
 * @summary ResponseTimeout
 * @description
 *
 * Alias of X.745 `TimeoutPeriod`. How long to wait for an
 * expected PDU in `PDUReception`. Named type added by Cor.1.
 * ITU-T Rec. X.737 (11/95)
 * [§7.5.6](https://www.itu.int/rec/T-REC-X.737-199511-I); Cor.1 (06/98)
 * [https://www.itu.int/rec/T-REC-X.737-199806-I].
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ResponseTimeout  ::=  TimeoutPeriod
 * ```
 */
export type ResponseTimeout = TimeoutPeriod; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) ResponseTimeout
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ResponseTimeout} The decoded data structure.
 */
export const _decode_ResponseTimeout: $.ASN1Decoder<ResponseTimeout> = _decode_TimeoutPeriod;

/**
 * @summary Encodes a(n) ResponseTimeout into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ResponseTimeout, encoded as an ASN.1 Element.
 */
export const _encode_ResponseTimeout: $.ASN1Encoder<ResponseTimeout> = _encode_TimeoutPeriod;


/* eslint-enable */
