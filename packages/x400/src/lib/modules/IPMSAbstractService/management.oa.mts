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
import { change_auto_discard } from '../IPMSAbstractService/change-auto-discard.oa.mjs';
import { change_auto_acknowledgment } from '../IPMSAbstractService/change-auto-acknowledgment.oa.mjs';
import { change_auto_forwarding } from '../IPMSAbstractService/change-auto-forwarding.oa.mjs';
import { id_pt_management } from '../IPMSObjectIdentifiers/id-pt-management.va.mjs';
import { PORT } from '../MTSAbstractService/PORT.oca.mjs';
/**
 * @summary management
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * management PORT ::= {
 *   CONSUMER INVOKES
 *     {change-auto-discard | change-auto-acknowledgment | change-auto-forwarding}
 *   ID                id-pt-management
 * }
 * ```
 *
 * @constant
 * @type {PORT}
 * @implements {PORT}
 */
export const management: PORT = {
    class: 'OPERATION-PACKAGE',
    decoderFor: {},
    encoderFor: {},
    '&Supplier': [
        change_auto_discard,
        change_auto_acknowledgment,
        change_auto_forwarding,
    ] /* OBJECT_FIELD_SETTING */,
    '&id': id_pt_management /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
