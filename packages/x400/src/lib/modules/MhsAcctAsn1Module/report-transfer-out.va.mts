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
    EventTypeId,
    _decode_EventTypeId,
    _encode_EventTypeId,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/EventTypeId.ta.mjs';
/**
 * @summary report_transfer_out
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * report-transfer-out EventTypeId ::= localForm:30
 * ```
 *
 * @constant
 */
export const report_transfer_out: EventTypeId = { localForm: 30 };

/* eslint-enable */
