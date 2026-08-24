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
 * @summary id_att_ac_report_summary
 * @description
 *
 * OBJECT IDENTIFIER `id_att_ac_report_summary`. This general-attribute, which is
 * multi-valued, contains a summary of the reports requested and reports received from
 * each originally specified recipient of a submitted message or probe. The attribute
 * contains one value for each value of the recipient-name argument of the
 * Message-submission or Probe-submission abstract-operation. See ITU-T X.413 (1999),
 * §11.2.3.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-att-ac-report-summary ID ::= {id-att  43}
 * ```
 *
 * @constant
 */
export const id_att_ac_report_summary: ID = _OID.fromParts([43], id_att);

/* eslint-enable */
