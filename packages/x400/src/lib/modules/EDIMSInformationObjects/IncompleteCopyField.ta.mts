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
 * @summary IncompleteCopyField
 * @description
 *
 * Defined in ITU-T X.435 (1999) (§8).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IncompleteCopyField  ::=  BOOLEAN
 * ```
 */
export type IncompleteCopyField = BOOLEAN; // BooleanType


export const _decode_IncompleteCopyField = $._decodeBoolean;


export const _encode_IncompleteCopyField = $._encodeBoolean;


/* eslint-enable */
