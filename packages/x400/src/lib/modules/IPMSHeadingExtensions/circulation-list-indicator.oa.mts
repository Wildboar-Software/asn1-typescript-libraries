/* eslint-disable */
import {
    NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import { id_rex_circulation_list_indicator } from '../IPMSObjectIdentifiers/id-rex-circulation-list-indicator.va.mjs';
import { IPMS_EXTENSION } from '../IPMSInformationObjects/IPMS-EXTENSION.oca.mjs';
/**
 * @summary circulation_list_indicator
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * circulation-list-indicator IPMS-EXTENSION ::= {
 *   VALUE          NULL,
 *   IDENTIFIED BY  id-rex-circulation-list-indicator
 * }
 * ```
 *
 * @constant
 * @type {IPMS_EXTENSION<NULL>}
 * @implements {IPMS_EXTENSION<NULL>}
 */
export const circulation_list_indicator: IPMS_EXTENSION<NULL> = {
    class: 'IPMS-EXTENSION',
    decoderFor: {
        '&Type': $._decodeNull,
    },
    encoderFor: {
        '&Type': $._encodeNull,
    },
    '&id': id_rex_circulation_list_indicator /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
