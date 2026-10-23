/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    PDSParameter,
    _decode_PDSParameter,
    _encode_PDSParameter,
} from "../PkiPmiExternalDataTypes/PDSParameter.ta.mjs";
/**
 * @summary UniquePostalName
 * @description
 *
 * Point of delivery other than street / PO box / poste restante, e.g. a building or hamlet
 * (ITU-T X.402 (1999), §18.3.26).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UniquePostalName  ::=  PDSParameter
 * ```
 */
export type UniquePostalName = PDSParameter; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) UniquePostalName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UniquePostalName} The decoded data structure.
 */
export const _decode_UniquePostalName: $.ASN1Decoder<UniquePostalName> = _decode_PDSParameter;

/**
 * @summary Encodes a(n) UniquePostalName into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UniquePostalName, encoded as an ASN.1 Element.
 */
export const _encode_UniquePostalName: $.ASN1Encoder<UniquePostalName> = _encode_PDSParameter;


/* eslint-enable */
