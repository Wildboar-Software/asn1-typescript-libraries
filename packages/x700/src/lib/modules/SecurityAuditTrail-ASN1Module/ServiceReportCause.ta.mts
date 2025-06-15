/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
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

/* START_OF_SYMBOL_DEFINITION ServiceReportCause */
/**
 * @summary ServiceReportCause
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ServiceReportCause  ::=  OBJECT IDENTIFIER
 * ```
 */
export type ServiceReportCause = OBJECT_IDENTIFIER; // ObjectIdentifierType
/* END_OF_SYMBOL_DEFINITION ServiceReportCause */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ServiceReportCause */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ServiceReportCause */

/* START_OF_SYMBOL_DEFINITION _decode_ServiceReportCause */
export const _decode_ServiceReportCause = $._decodeObjectIdentifier;
/* END_OF_SYMBOL_DEFINITION _decode_ServiceReportCause */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ServiceReportCause */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ServiceReportCause */

/* START_OF_SYMBOL_DEFINITION _encode_ServiceReportCause */
export const _encode_ServiceReportCause = $._encodeObjectIdentifier;

/* END_OF_SYMBOL_DEFINITION _encode_ServiceReportCause */

/* eslint-enable */
