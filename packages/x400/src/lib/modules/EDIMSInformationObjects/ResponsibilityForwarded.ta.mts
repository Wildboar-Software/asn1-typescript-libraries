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
 * @summary ResponsibilityForwarded
 * @description
 *
 * `ResponsibilityForwarded`. The Responsibility Forwarded field is used to indicate
 * whether Responsibility was forwarded. Absence of this field shall be interpreted as
 * the value FALSE. See ITU-T X.435 (1999), §8.2.5.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ResponsibilityForwarded  ::=  BOOLEAN
 * ```
 */
export type ResponsibilityForwarded = BOOLEAN; // BooleanType


export const _decode_ResponsibilityForwarded = $._decodeBoolean;


export const _encode_ResponsibilityForwarded = $._encodeBoolean;


/* eslint-enable */
