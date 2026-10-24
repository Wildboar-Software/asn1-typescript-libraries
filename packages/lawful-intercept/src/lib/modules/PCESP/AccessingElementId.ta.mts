/* eslint-disable */
import {
    type VisibleString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AccessingElementId
 * @description
 *
 * Statically configured element number, as the module comment states.
 * A `VisibleString` of size 1 to 15, extensible. This edition does not
 * say which network element the number identifies, or how it is
 * configured.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
 *
 * https://www.etsi.org/deliver/etsi_ts/101900_101999/1019092001/01.01.02_60/ts_1019092001v010102p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AccessingElementId  ::=  VisibleString (SIZE(1..15, ...))
 * ```
 */
export
type AccessingElementId = VisibleString; // VisibleString
export const _decode_AccessingElementId: $.ASN1Decoder<AccessingElementId> = $._decodeVisibleString;
export const _encode_AccessingElementId: $.ASN1Encoder<AccessingElementId> = $._encodeVisibleString;


/* eslint-enable */
