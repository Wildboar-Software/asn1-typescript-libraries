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
    type ArcTime,
    _decode_ArcTime,
    _encode_ArcTime,
} from '../M3100ASN1TypeModule4/ArcTime.ta.mjs';

/**
 * @summary ArcDefaultNALMTIInterval
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ArcDefaultNALMTIInterval  ::=  ArcTime
 * ```
 */
export type ArcDefaultNALMTIInterval = ArcTime; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) ArcDefaultNALMTIInterval
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ArcDefaultNALMTIInterval} The decoded data structure.
 */
export const _decode_ArcDefaultNALMTIInterval: $.ASN1Decoder<ArcDefaultNALMTIInterval> = _decode_ArcTime;

/**
 * @summary Encodes a(n) ArcDefaultNALMTIInterval into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ArcDefaultNALMTIInterval, encoded as an ASN.1 Element.
 */
export const _encode_ArcDefaultNALMTIInterval: $.ASN1Encoder<ArcDefaultNALMTIInterval> = _encode_ArcTime;


/* eslint-enable */
