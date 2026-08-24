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
import { security_error } from '../MTSAbstractService/security-error.oa.mjs';
import { id_act_auto_delete } from '../MSObjectIdentifiers/id-act-auto-delete.va.mjs';
import { type AUTO_ACTION } from '../MSAbstractService/AUTO-ACTION.oca.mjs';
/**
 * @summary auto_delete
 * @description
 *
 * Information object `auto_delete`. The Auto-delete auto-action enables the MS-user to
 * instruct the MS to delete an entry (and any child-entries associated with it)
 * automatically at a predetermined interval after its creation. The MS shall subject to
 * Auto-deletion every entry in the Stored-message entry-class which possesses a
 * storage-time general-attribute whose value is less than the current date and time. See
 * ITU-T X.413 (1999), §13.4.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * auto-delete AUTO-ACTION ::= {
 *   ERRORS         {security-error}
 *   IDENTIFIED BY  id-act-auto-delete
 * }
 * ```
 *
 * @constant
 * @type {AUTO_ACTION}
 * @implements {AUTO_ACTION}
 */
export const auto_delete: AUTO_ACTION = {
    class: 'AUTO-ACTION',
    decoderFor: {
        '&RegistrationParameter': undefined,
    },
    encoderFor: {
        '&RegistrationParameter': undefined,
    },
    '&Errors': [security_error] /* OBJECT_FIELD_SETTING */,
    '&id': id_act_auto_delete /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&RegistrationParameter': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
