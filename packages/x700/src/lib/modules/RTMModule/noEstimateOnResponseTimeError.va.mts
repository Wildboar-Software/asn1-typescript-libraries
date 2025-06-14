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
    ResponseTime,
    _decode_ResponseTime,
    _encode_ResponseTime,
} from '../RTMModule/ResponseTime.ta.mjs';
/* START_OF_SYMBOL_DEFINITION noEstimateOnResponseTimeError */
/**
 * @summary noEstimateOnResponseTimeError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * noEstimateOnResponseTimeError ResponseTime ::= seconds:-1
 * ```
 *
 * @constant
 */
export const noEstimateOnResponseTimeError: ResponseTime = { seconds: -1 };
/* END_OF_SYMBOL_DEFINITION noEstimateOnResponseTimeError */

/* eslint-enable */
