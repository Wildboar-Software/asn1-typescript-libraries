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
    OriginatorsReference,
    _decode_OriginatorsReference,
    _encode_OriginatorsReference,
} from '../IPMSHeadingExtensions/OriginatorsReference.ta.mjs';
import { id_hex_originators_reference } from '../IPMSObjectIdentifiers/id-hex-originators-reference.va.mjs';
import { type IPMS_EXTENSION } from '../IPMSInformationObjects/IPMS-EXTENSION.oca.mjs';
/**
 * @summary originators_reference
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * originators-reference IPMS-EXTENSION ::= {
 *   VALUE          OriginatorsReference,
 *   IDENTIFIED BY  id-hex-originators-reference
 * }
 * ```
 *
 * @constant
 * @type {IPMS_EXTENSION<OriginatorsReference>}
 * @implements {IPMS_EXTENSION<OriginatorsReference>}
 */
export const originators_reference: IPMS_EXTENSION<OriginatorsReference> = {
    class: 'IPMS-EXTENSION',
    decoderFor: {
        '&Type': _decode_OriginatorsReference,
    },
    encoderFor: {
        '&Type': _encode_OriginatorsReference,
    },
    '&id': id_hex_originators_reference /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
