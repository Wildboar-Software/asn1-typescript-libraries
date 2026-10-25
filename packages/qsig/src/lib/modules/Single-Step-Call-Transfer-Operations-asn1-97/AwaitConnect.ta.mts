/* eslint-disable */
import {
    type BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary AwaitConnect
 * @description
 *
 * When the Rerouting PINX releases the original call. `FALSE` releases
 * it on ALERTING from the Transferred-To PINX and enters
 * SSCT-Await-Setup-Response-Alert. `TRUE` releases it on CONNECT and
 * enters SSCT-Await-Setup-Response-Connect. ECMA-300 §6.3.1, §6.5.1.1,
 * §6.5.2.1. The state definitions in §6.4.2.2 and §6.4.2.3 call this
 * element `waitConnect`.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-300/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AwaitConnect  ::=  BOOLEAN
 * ```
 */
export
type AwaitConnect = BOOLEAN; // BooleanType

export
const _decode_AwaitConnect: $.ASN1Decoder<AwaitConnect> = $._decodeBoolean;

export
const _encode_AwaitConnect: $.ASN1Encoder<AwaitConnect> = $._encodeBoolean;

/* eslint-enable */
