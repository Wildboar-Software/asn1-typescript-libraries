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
import { id_aa_ipm_auto_correlate } from '../IPMSObjectIdentifiers/id-aa-ipm-auto-correlate.va.mjs';
import { type AUTO_ACTION } from '../MSAbstractService/AUTO-ACTION.oca.mjs';
/**
 * @summary ipm_auto_correlate
 * @description
 *
 * The IPM auto-correlate auto-action correlates IPMs and IPNs related in the following
 * ways: a) an IPM and the IPMs generated in reply; b) an IPM and the IPNs notifying
 * receipt or non-receipt; c) an IPM and the IPMs which subsequently forward it, or
 * obsolete it, or are related to it. See ITU-T X.420 (1999), §19.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ipm-auto-correlate AUTO-ACTION ::= {IDENTIFIED BY  id-aa-ipm-auto-correlate
 * }
 * ```
 *
 * @constant
 * @type {AUTO_ACTION}
 * @implements {AUTO_ACTION}
 */
export const ipm_auto_correlate: AUTO_ACTION = {
    class: 'AUTO-ACTION',
    decoderFor: {
        '&RegistrationParameter': undefined,
    },
    encoderFor: {
        '&RegistrationParameter': undefined,
    },
    '&id': id_aa_ipm_auto_correlate /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&RegistrationParameter': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
