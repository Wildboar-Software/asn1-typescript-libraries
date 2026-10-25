/* eslint-disable */
import {
    type INTEGER,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';


/**
 * @summary DiscardReason
 * @description
 *
 * Integer 0..255. Defined in §6.2; cLNS discard reasons are reported as
 * `pDUDiscard*` OIDs in `specificProblems`, not as this integer.
 * ITU-T Rec. X.283 (12/97)
 * [§6.2](https://www.itu.int/rec/T-REC-X.283-199712-I), §5.6.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DiscardReason  ::=  INTEGER(0..255)
 * ```
 */
export type DiscardReason = INTEGER;




export const _decode_DiscardReason: $.ASN1Decoder<INTEGER> = $._decodeInteger;




export const _encode_DiscardReason: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
