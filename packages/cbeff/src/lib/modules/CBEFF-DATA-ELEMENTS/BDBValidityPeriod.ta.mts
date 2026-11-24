/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";
import { ValidityPeriod, _decode_ValidityPeriod, _encode_ValidityPeriod } from "../CBEFF-DATA-ELEMENTS/ValidityPeriod.ta.mjs";


/**
 * @summary BDBValidityPeriod
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BDBValidityPeriod  ::=  ValidityPeriod
 * ```
 */
export
type BDBValidityPeriod = ValidityPeriod; // DefinedType

export
const _decode_BDBValidityPeriod: $.ASN1Decoder<BDBValidityPeriod> = _decode_ValidityPeriod;

export
const _encode_BDBValidityPeriod: $.ASN1Encoder<BDBValidityPeriod> = _encode_ValidityPeriod;

/* eslint-enable */
