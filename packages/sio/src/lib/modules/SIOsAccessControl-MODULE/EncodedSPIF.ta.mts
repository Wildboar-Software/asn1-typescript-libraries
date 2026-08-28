/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary EncodedSPIF
 * @description
 *
 * Open type constrained to a value of `SPIF`. Encoded as an
 * opaque encoding of that SPIF, suitable for signature and
 * verification (`SIGNED{EncodedSPIF}`). ITU-T Rec. X.841
 * (10/2000)
 * [§6.2.2](https://www.itu.int/rec/T-REC-X.841-200010-I), Annex A.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EncodedSPIF  ::=  TYPE-IDENTIFIER.&Type(SPIF)
 * ```
 */
export type EncodedSPIF = _Element; // ObjectClassFieldType




export const _decode_EncodedSPIF = $._decodeAny;




export const _encode_EncodedSPIF = $._encodeAny;


/* eslint-enable */
