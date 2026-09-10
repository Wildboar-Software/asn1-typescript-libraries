import {
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary LegType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LegType ::= OCTET STRING (SIZE(1))
 * leg1 LegType	::= '01'H
 * leg2 LegType	::= '02'H
 * ```
 *
 */
export type LegType = OCTET_STRING;
export const _decode_LegType = $._decodeOctetString;
export const _encode_LegType = $._encodeOctetString;
