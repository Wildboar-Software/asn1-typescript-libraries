/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";
import { RegistryID, _decode_RegistryID, _encode_RegistryID } from "../CBEFF-DATA-ELEMENTS/RegistryID.ta.mjs";

/**
 * @summary SBFormat
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SBFormat  ::=  RegistryID
 * ```
 */
export
type SBFormat = RegistryID; // DefinedType

export
const _decode_SBFormat: $.ASN1Decoder<SBFormat> = _decode_RegistryID;

export
const _encode_SBFormat: $.ASN1Encoder<SBFormat> = _encode_RegistryID;

/* eslint-enable */
