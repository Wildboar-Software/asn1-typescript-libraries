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
    ResynchronizeMode,
    _decode_ResynchronizeMode,
    _encode_ResynchronizeMode,
} from '../Schedulerev1-ASN1Module/ResynchronizeMode.ta.mjs';

/**
 * @summary defaultResynchronizeMode
 * @description
 *
 * Default of `resynchronizeMode`: `FALSE` — synchronize
 * triggering to the initial (or pre-suspension) points, not
 * to resumption time. ITU-T Rec. X.746 (02/00)
 * [§8.3.8.3](https://www.itu.int/rec/T-REC-X.746-200002-I),
 * A.6.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * defaultResynchronizeMode ResynchronizeMode ::= FALSE
 * ```
 *
 * @constant
 */
export const defaultResynchronizeMode: ResynchronizeMode = false;

/* eslint-enable */
