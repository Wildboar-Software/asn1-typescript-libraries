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
 * BIT STRING { for-submission(0), for-transfer(1), for-delivery(2) } (ITU-T X.411 (1999),
 * Annex A). An extension marked critical for a step shall cause that step to fail if
 * unrecognized. Empty means not critical for any step.
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
