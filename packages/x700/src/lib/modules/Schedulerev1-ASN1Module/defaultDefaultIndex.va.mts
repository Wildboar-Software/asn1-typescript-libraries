/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import {
    DefaultIndex,
    _decode_DefaultIndex,
    _encode_DefaultIndex,
} from '../Schedulerev1-ASN1Module/DefaultIndex.ta.mjs';
/**
 * @summary defaultDefaultIndex
 * @description
 *
 * Default of `defaultIndex`: 0. Used when no
 * `schedulingData` interval is valid. ITU-T Rec. X.746 (02/00)
 * [A.1.11](https://www.itu.int/rec/T-REC-X.746-200002-I),
 * 8.3.13, A.6.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * defaultDefaultIndex DefaultIndex ::= 0
 * ```
 *
 * @constant
 */
export const defaultDefaultIndex: DefaultIndex = 0;

/* eslint-enable */
