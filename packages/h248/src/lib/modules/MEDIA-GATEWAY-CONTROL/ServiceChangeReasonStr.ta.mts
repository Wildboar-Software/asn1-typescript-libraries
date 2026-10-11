/* eslint-disable */
import {
    IA5String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ServiceChangeReasonStr
 * @description
 * 
 * The IA5String form of a ServiceChange reason, before the double wrapping that
 * Annex A requires on the wire.
 *
 * The string is a decimal reason code, optionally a single space and a textual
 * description. `SCreasonValue` carries that string after it has been
 * BER-encoded and wrapped in an octet string. This type is the Wireshark helper
 * in `doc/h248v3.asn1`; the Recommendation's ASN.1 names only the wrapped
 * `Value`.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceChangeReasonStr  ::=  IA5String
 * ```
 */
export
type ServiceChangeReasonStr = IA5String; // IA5String
export const _decode_ServiceChangeReasonStr = $._decodeIA5String;
export const _encode_ServiceChangeReasonStr = $._encodeIA5String;


/* eslint-enable */
