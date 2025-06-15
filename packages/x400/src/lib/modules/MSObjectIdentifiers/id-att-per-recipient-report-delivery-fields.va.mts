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
import { ID, _decode_ID, _encode_ID } from '../MHSObjectIdentifiers/ID.ta.mjs';
import { id_att } from '../MSObjectIdentifiers/id-att.va.mjs';
/**
 * @summary id_att_per_recipient_report_delivery_fields
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-att-per-recipient-report-delivery-fields ID ::= {id-att  30}
 * ```
 *
 * @constant
 */
export const id_att_per_recipient_report_delivery_fields: ID = new _OID(
    [30],
    id_att
);

/* eslint-enable */
