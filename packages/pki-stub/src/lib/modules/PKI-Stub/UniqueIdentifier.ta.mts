/* eslint-disable */
import {
    BIT_STRING,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary UniqueIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UniqueIdentifier  ::=  BIT STRING
 * ```
 */
export type UniqueIdentifier = BIT_STRING;

/**
 * @summary Decodes an ASN.1 element into a(n) UniqueIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UniqueIdentifier} The decoded data structure.
 */
export const _decode_UniqueIdentifier: $.ASN1Decoder<UniqueIdentifier> = $._decodeBitString;

/**
 * @summary Encodes a(n) UniqueIdentifier into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UniqueIdentifier, encoded as an ASN.1 Element.
 */
export const _encode_UniqueIdentifier: $.ASN1Encoder<UniqueIdentifier> = $._encodeBitString;


/* eslint-enable */
