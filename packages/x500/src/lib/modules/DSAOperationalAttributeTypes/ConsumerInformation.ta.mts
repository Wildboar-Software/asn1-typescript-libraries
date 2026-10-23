/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    SupplierOrConsumer,
    _decode_SupplierOrConsumer,
    _encode_SupplierOrConsumer,
} from "../DSAOperationalAttributeTypes/SupplierOrConsumer.ta.mjs";
/**
 * @summary ConsumerInformation
 * @description
 *
 * Alias of `SupplierOrConsumer` for a shadow consumer access point plus
 * agreement id (SET). Held on a `cp` DSE of the supplier; multi-valued DSA-
 * specific. Same matching as supplier information (ae-title + agreement
 * identifier).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ConsumerInformation  ::=  SupplierOrConsumer
 * ```
 */
export type ConsumerInformation = SupplierOrConsumer; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) ConsumerInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ConsumerInformation} The decoded data structure.
 */
export const _decode_ConsumerInformation: $.ASN1Decoder<ConsumerInformation> = _decode_SupplierOrConsumer;

/**
 * @summary Encodes a(n) ConsumerInformation into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConsumerInformation, encoded as an ASN.1 Element.
 */
export const _encode_ConsumerInformation: $.ASN1Encoder<ConsumerInformation> = _encode_SupplierOrConsumer;


/* eslint-enable */
