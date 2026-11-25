/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";
import { RegistryID, _decode_RegistryID, _encode_RegistryID } from "../CBEFF-DATA-ELEMENTS/RegistryID.ta.mjs";

/**
 * @summary PatronFormat
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PatronFormat  ::=  RegistryID
 * ```
 */
export
type PatronFormat = RegistryID; // DefinedType

export
const _decode_PatronFormat: $.ASN1Decoder<PatronFormat> = _decode_RegistryID;

export
const _encode_PatronFormat: $.ASN1Encoder<PatronFormat> = _encode_RegistryID;

/* eslint-enable */
