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
} from 'asn1-ts';
import {
    ResynchronizeMode,
    _decode_ResynchronizeMode,
    _encode_ResynchronizeMode,
} from '../Schedulerev1-ASN1Module/ResynchronizeMode.ta.mjs';

/**
 * @summary defaultResynchronizeMode
 * @description
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
