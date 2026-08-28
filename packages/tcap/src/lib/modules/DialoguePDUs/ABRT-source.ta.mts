/* eslint-disable */
import {
    INTEGER,
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
 * @summary ABRT_source
 * @description
 *
 * Source of a Dialogue Abort: `dialogue-service-user` (0) or
 * `dialogue-service-provider` (1) (Table 60). ITU-T Rec.
 * Q.773 (06/97)
 * [§3.2.1](https://www.itu.int/rec/T-REC-Q.773-199706-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ABRT-source  ::=  INTEGER {dialogue-service-user(0), dialogue-service-provider(1)
 * }
 * ```
 */
export type ABRT_source = INTEGER;

/**
 * @summary ABRT_source_dialogue_service_user
 * @description
 *
 * Abort originated by the dialogue-service user (Table 60).
 *
 * @constant
 * @type {number}
 */
export const ABRT_source_dialogue_service_user: ABRT_source = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ABRT_source_dialogue_service_user
 * @constant
 * @type {number}
 */
export const dialogue_service_user: ABRT_source = ABRT_source_dialogue_service_user; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ABRT_source_dialogue_service_provider
 * @description
 *
 * Abort originated by the dialogue-service provider
 * (Table 60).
 *
 * @constant
 * @type {number}
 */
export const ABRT_source_dialogue_service_provider: ABRT_source = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ABRT_source_dialogue_service_provider
 * @constant
 * @type {number}
 */
export const dialogue_service_provider: ABRT_source = ABRT_source_dialogue_service_provider; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_ABRT_source = $._decodeInteger;


export const _encode_ABRT_source = $._encodeInteger;


/* eslint-enable */
