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
 * @summary id_att_ac_correlated_report_list
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-att-ac-correlated-report-list ID ::= {id-att  42}
 * ```
 *
 * @constant
 */
export const id_att_ac_correlated_report_list: ID = _OID.fromParts([42], id_att);

/* eslint-enable */
