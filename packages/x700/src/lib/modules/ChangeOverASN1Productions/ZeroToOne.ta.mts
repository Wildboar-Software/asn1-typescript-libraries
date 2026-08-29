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
 * @summary ZeroToOne
 * @description
 *
 * INTEGER range matching GDMO role-cardinality `(0..1)` on the
 * backed-up and back-up roles. Not named in Annex B. ITU-T Rec.
 * X.751 (11/95)
 * [§8.2.1.4](https://www.itu.int/rec/T-REC-X.751-199511-I),
 * §8.2.1.5, A.1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ZeroToOne  ::=  INTEGER(0..1)
 * ```
 */
export type ZeroToOne = INTEGER;


export const _decode_ZeroToOne = $._decodeInteger;


export const _encode_ZeroToOne = $._encodeInteger;


/* eslint-enable */
