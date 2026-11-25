/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";
import { ValidityPeriod, _decode_ValidityPeriod, _encode_ValidityPeriod } from "../CBEFF-DATA-ELEMENTS/ValidityPeriod.ta.mjs";

/**
 * @summary BIRValidityPeriod
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BIRValidityPeriod  ::=  ValidityPeriod
 * ```
 */
export
type BIRValidityPeriod = ValidityPeriod; // DefinedType

export
const _decode_BIRValidityPeriod: $.ASN1Decoder<BIRValidityPeriod> = _decode_ValidityPeriod;

export
const _encode_BIRValidityPeriod: $.ASN1Encoder<BIRValidityPeriod> = _encode_ValidityPeriod;

/* eslint-enable */
