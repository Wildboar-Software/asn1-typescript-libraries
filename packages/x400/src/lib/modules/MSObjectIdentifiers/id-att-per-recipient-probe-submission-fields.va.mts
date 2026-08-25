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
} from '@wildboar/asn1';
import { ID, _decode_ID, _encode_ID } from '../MHSObjectIdentifiers/ID.ta.mjs';
import { id_att } from '../MSObjectIdentifiers/id-att.va.mjs';
/**
 * @summary id_att_per_recipient_probe_submission_fields
 * @description
 *
 * OBJECT IDENTIFIER `id_att_per_recipient_probe_submission_fields`. This
 * general-attribute, which is multi-valued, contains the per-recipient-fields component
 * of the Probe-submission- envelope.
 * See ITU-T X.413 (1999), §11.2.59.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-att-per-recipient-probe-submission-fields ID ::= {id-att  67}
 * ```
 *
 * @constant
 */
export const id_att_per_recipient_probe_submission_fields: ID = _OID.fromParts(
    [67],
    id_att
);

/* eslint-enable */
