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
    EndTime,
    _decode_EndTime,
    _encode_EndTime,
} from '../Test-ASN1Module/EndTime.ta.mjs';
import {
    _decode_Timespec,
    _encode_Timespec,
} from '../Test-ASN1Module/Timespec.ta.mjs';
/* START_OF_SYMBOL_DEFINITION defaultEndTime */
/**
 * @summary defaultEndTime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * defaultEndTime EndTime ::= continual:NULL
 * ```
 *
 * @constant
 */
export const defaultEndTime: EndTime = { continual: null };
/* END_OF_SYMBOL_DEFINITION defaultEndTime */

/* eslint-enable */
