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
import {
    CirculationList,
    _decode_CirculationList,
    _encode_CirculationList,
} from '../IPMSHeadingExtensions/CirculationList.ta.mjs';
import { id_hex_circulation_list_recipients } from '../IPMSObjectIdentifiers/id-hex-circulation-list-recipients.va.mjs';
import { IPMS_EXTENSION } from '../IPMSInformationObjects/IPMS-EXTENSION.oca.mjs';
/**
 * @summary circulation_list_recipients
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * circulation-list-recipients IPMS-EXTENSION ::= {
 *   VALUE          CirculationList,
 *   IDENTIFIED BY  id-hex-circulation-list-recipients
 * }
 * ```
 *
 * @constant
 * @type {IPMS_EXTENSION<CirculationList>}
 * @implements {IPMS_EXTENSION<CirculationList>}
 */
export const circulation_list_recipients: IPMS_EXTENSION<CirculationList> = {
    class: 'IPMS-EXTENSION',
    decoderFor: {
        '&Type': _decode_CirculationList,
    },
    encoderFor: {
        '&Type': _encode_CirculationList,
    },
    '&id': id_hex_circulation_list_recipients /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
