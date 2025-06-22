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
} from 'asn1-ts';
import * as $ from '@wildboar/asn1/functional';


/**
 * @summary AlarmingResumed
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AlarmingResumed  ::=  BOOLEAN
 * ```
 */
export type AlarmingResumed = BOOLEAN; // BooleanType




export const _decode_AlarmingResumed = $._decodeBoolean;




export const _encode_AlarmingResumed = $._encodeBoolean;


/* eslint-enable */
