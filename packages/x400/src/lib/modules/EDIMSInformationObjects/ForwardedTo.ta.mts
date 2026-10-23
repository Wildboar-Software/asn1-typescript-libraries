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
 * @summary ForwardedTo
 * @description
 *
 * The Forwarded To field indicates the new recipient of the (forwarded) subject EDIM. Its
 * value is an OR-name. See ITU-T X.435 (1999), §9.4.1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ForwardedTo  ::=  ORName
 * ```
 */
export type ForwardedTo = ORName; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) ForwardedTo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ForwardedTo} The decoded data structure.
 */
export const _decode_ForwardedTo: $.ASN1Decoder<ForwardedTo> = _decode_ORName;

/**
 * @summary Encodes a(n) ForwardedTo into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ForwardedTo, encoded as an ASN.1 Element.
 */
export const _encode_ForwardedTo: $.ASN1Encoder<ForwardedTo> = _encode_ORName;


/* eslint-enable */
