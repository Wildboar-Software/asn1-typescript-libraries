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
 * @summary Criticality
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Criticality  ::=  BOOLEAN
 * ```
 */
export type Criticality = BOOLEAN; // BooleanType


export const _decode_Criticality = $._decodeBoolean;


export const _encode_Criticality = $._encodeBoolean;


/* eslint-enable */
