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
    ExtendedSubject,
    _decode_ExtendedSubject,
    _encode_ExtendedSubject,
} from '../IPMSHeadingExtensions/ExtendedSubject.ta.mjs';
import { id_hex_extended_subject } from '../IPMSObjectIdentifiers/id-hex-extended-subject.va.mjs';
import { type IPMS_EXTENSION } from '../IPMSInformationObjects/IPMS-EXTENSION.oca.mjs';
/**
 * @summary extended_subject
 * @description
 *
 * Information object `extended_subject`. The Subject heading field (O) identifies the
 * subject of the IPM. It comprises a Teletex String[ of from zero to a prescribed number
 * of characters (see annex L)|], chosen from the graphic subset of the Teletex String
 * character set. See ITU-T X.420 (1999), §7.2.10.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * extended-subject IPMS-EXTENSION ::= {
 *   VALUE          ExtendedSubject,
 *   IDENTIFIED BY  id-hex-extended-subject
 * }
 * ```
 *
 * @constant
 * @type {IPMS_EXTENSION<ExtendedSubject>}
 * @implements {IPMS_EXTENSION<ExtendedSubject>}
 */
export const extended_subject: IPMS_EXTENSION<ExtendedSubject> = {
    class: 'IPMS-EXTENSION',
    decoderFor: {
        '&Type': _decode_ExtendedSubject,
    },
    encoderFor: {
        '&Type': _encode_ExtendedSubject,
    },
    '&id': id_hex_extended_subject /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
