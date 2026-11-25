/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";
import { RegistryID, _decode_RegistryID, _encode_RegistryID } from "../CBEFF-DATA-ELEMENTS/RegistryID.ta.mjs";

/**
 * @summary Product
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Product  ::=  RegistryID
 * ```
 */
export
type Product = RegistryID; // DefinedType

export
const _decode_Product: $.ASN1Decoder<Product> = _decode_RegistryID;

export
const _encode_Product: $.ASN1Encoder<Product> = _encode_RegistryID;

/* eslint-enable */
