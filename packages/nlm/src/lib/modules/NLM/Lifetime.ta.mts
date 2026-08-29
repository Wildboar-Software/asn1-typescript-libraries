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
 * @summary Lifetime
 * @description
 *
 * Maximum PDU lifetime in half-seconds (1..255) placed in the lifetime field of
 * locally generated X.233 | ISO/IEC 8473-1 data or error-report PDUs. Does not
 * constrain relayed PDUs. A PDU may use a smaller value, never a larger one.
 * Syntax of `maximumLifetime`.
 * ITU-T Rec. X.283 (12/97)
 * [§5.6](https://www.itu.int/rec/T-REC-X.283-199712-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Lifetime  ::=  INTEGER(1..255)
 * ```
 */
export type Lifetime = INTEGER;




export const _decode_Lifetime = $._decodeInteger;




export const _encode_Lifetime = $._encodeInteger;


/* eslint-enable */
