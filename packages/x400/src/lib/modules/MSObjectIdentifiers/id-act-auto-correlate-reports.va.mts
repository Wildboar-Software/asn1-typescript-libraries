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
import { id_act } from '../MSObjectIdentifiers/id-act.va.mjs';
/**
 * @summary id_act_auto_correlate_reports
 * @description
 *
 * OBJECT IDENTIFIER `id_act_auto_correlate_reports`. The Auto-correlate-reports
 * auto-action enables the MS-user to instruct the MS to correlate, automatically,
 * delivered- report entries of the Delivery entry-class with the submitted messages and
 * probes to which they are related. The auto- action also records each successful
 * invocation of the MS-cancel-deferred-delivery abstract-operation. See ITU-T X.413
 * (1999), §13.3.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-act-auto-correlate-reports ID ::= {id-act  2}
 * ```
 *
 * @constant
 */
export const id_act_auto_correlate_reports: ID = _OID.fromParts([2], id_act);

/* eslint-enable */
