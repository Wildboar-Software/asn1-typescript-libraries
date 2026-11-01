/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";
import { type Time, _decode_Time, _encode_Time } from "../AuthenticationFramework/Time.ta.mjs";

/**
 * @summary SigningTime
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SigningTime  ::=  Time
 * ```
 */
export
type SigningTime = Time; // DefinedType

export
const _decode_SigningTime: $.ASN1Decoder<SigningTime> = _decode_Time;

export
const _encode_SigningTime: $.ASN1Encoder<SigningTime> = _encode_Time;

/* eslint-enable */
