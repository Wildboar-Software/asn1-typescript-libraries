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
import {
    _decode_AutoActionType,
    _encode_AutoActionType,
} from '../MSAbstractService/AutoActionType.ta.mjs';
import { id_act_edi_auto_correlate } from '../EDIMSObjectIdentifiers/id-act-edi-auto-correlate.va.mjs';
import { type AUTO_ACTION } from '../MSAbstractService/AUTO-ACTION.oca.mjs';
/**
 * @summary edi_auto_correlate
 * @description
 *
 * Information object `edi_auto_correlate`. If the EDI auto-correlate auto-action is
 * subscribed to, the EDI-MS performs the following actions: a) If the delivered message
 * contains an EDIM, then each Recipient subfield in the Recipients field is examined. If
 * any Recipient subfield identifies the present EDI-MS-user, and the EDI Notification
 * Requests component indicates that an EDIN is requested, then the EDI-MS shall create
 * an AC Submitted EDIN Status… See ITU-T X.435 (1999), §18.9.1.1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * edi-auto-correlate AUTO-ACTION ::= {IDENTIFIED BY  id-act-edi-auto-correlate
 * }
 * ```
 *
 * @constant
 * @type {AUTO_ACTION}
 * @implements {AUTO_ACTION}
 */
export const edi_auto_correlate: AUTO_ACTION = {
    class: 'AUTO-ACTION',
    decoderFor: {
        '&RegistrationParameter': undefined,
    },
    encoderFor: {
        '&RegistrationParameter': undefined,
    },
    '&id': id_act_edi_auto_correlate /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&RegistrationParameter': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
