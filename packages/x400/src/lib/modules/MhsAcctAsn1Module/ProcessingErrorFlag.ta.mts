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
import * as $ from 'asn1-ts/dist/functional.mjs';

/**
 * @summary ProcessingErrorFlag
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProcessingErrorFlag  ::=  BOOLEAN
 * ```
 */
export type ProcessingErrorFlag = BOOLEAN; // BooleanType


export const _decode_ProcessingErrorFlag = $._decodeBoolean;


export const _encode_ProcessingErrorFlag = $._encodeBoolean;


/* eslint-enable */
