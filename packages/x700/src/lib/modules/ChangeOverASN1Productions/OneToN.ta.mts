/* eslint-disable */
import {
    INTEGER,
    ASN1Element as _Element,
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
 * @summary OneToN
 * @description
 *
 * INTEGER range matching GDMO role-cardinality `(1..n)` on the
 * secondary role. Not named in Annex B. ITU-T Rec. X.751 (11/95)
 * [§8.2.1.3](https://www.itu.int/rec/T-REC-X.751-199511-I), A.1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OneToN  ::=  INTEGER(1..MAX)
 * ```
 */
export type OneToN = INTEGER;


export const _decode_OneToN = $._decodeInteger;


export const _encode_OneToN = $._encodeInteger;


/* eslint-enable */
