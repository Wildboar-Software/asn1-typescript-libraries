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
 * @summary Stratum
 * @description
 *
 * Stratum of a local clock in the synchronization subnet
 * (0..255). 0 = not specified; 1 = primary reference;
 * 2..255 = secondary references of increasing distance from
 * the root. Higher numbers mean more servers or a longer
 * path to a reference source. Syntax of `clockStratum` and
 * `maximumStratum`. ITU-T Rec. X.743 (06/98)
 * [§8.3.11](https://www.itu.int/rec/T-REC-X.743-199806-I),
 * A.5, A.2.11; Annex H.1.1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Stratum  ::=  INTEGER(0..255)
 * ```
 */
export type Stratum = INTEGER;


export const _decode_Stratum = $._decodeInteger;


export const _encode_Stratum = $._encodeInteger;


/* eslint-enable */
