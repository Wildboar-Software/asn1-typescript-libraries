/* eslint-disable */
import {
    BOOLEAN,
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
 * @summary Boolean
 * @description
 *
 * Supporting BOOLEAN used by `futureAutoRestoreAllowed`: `TRUE`
 * allows automatic restore; `FALSE` forbids it. Trigger criteria
 * are system-specific. ITU-T Rec. X.744 (10/96)
 * [§8.2.12](https://www.itu.int/rec/T-REC-X.744-199610-I),
 * A.3.12.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Boolean  ::=  BOOLEAN
 * ```
 */
export type Boolean = BOOLEAN; // BooleanType


export const _decode_Boolean = $._decodeBoolean;


export const _encode_Boolean = $._encodeBoolean;


/* eslint-enable */
