/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    UniqueID,
    _decode_UniqueID,
    _encode_UniqueID,
} from "../CMSDBKeyManagement/UniqueID.ta.mjs";

/**
 * @summary UniqueIdentifier
 * @description
 *
 * Unique database identifier used to derive DBEKM seeds
 * (ITU-T X.894 | ISO/IEC 24824-4 clause 9.2).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UniqueIdentifier  ::=  UniqueID{{SchemaIdentifier}}
 * ```
 */
export type UniqueIdentifier = UniqueID; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) UniqueIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UniqueIdentifier} The decoded data structure.
 */
export const _decode_UniqueIdentifier: $.ASN1Decoder<UniqueIdentifier> = _decode_UniqueID;

/**
 * @summary Encodes a(n) UniqueIdentifier into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UniqueIdentifier, encoded as an ASN.1 Element.
 */
export const _encode_UniqueIdentifier: $.ASN1Encoder<UniqueIdentifier> = _encode_UniqueID;


/* eslint-enable */
