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
} from '../IPMSInformationObjects/Time.ta.mjs';
/**
 * @summary ReplyTimeField
 * @description
 *
 * Defined in ITU-T X.420 (1999) (§7).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReplyTimeField  ::=  Time
 * ```
 */
export type ReplyTimeField = Time; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) ReplyTimeField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ReplyTimeField} The decoded data structure.
 */
export const _decode_ReplyTimeField: $.ASN1Decoder<ReplyTimeField> = _decode_Time;

/**
 * @summary Encodes a(n) ReplyTimeField into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReplyTimeField, encoded as an ASN.1 Element.
 */
export const _encode_ReplyTimeField: $.ASN1Encoder<ReplyTimeField> = _encode_Time;


/* eslint-enable */
