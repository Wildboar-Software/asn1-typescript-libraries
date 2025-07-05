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
    IncompleteCopy,
    _decode_IncompleteCopy,
    _encode_IncompleteCopy,
} from '../IPMSHeadingExtensions/IncompleteCopy.ta.mjs';
import { id_hex_incomplete_copy } from '../IPMSObjectIdentifiers/id-hex-incomplete-copy.va.mjs';
import { type IPMS_EXTENSION } from '../IPMSInformationObjects/IPMS-EXTENSION.oca.mjs';
/**
 * @summary incomplete_copy
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * incomplete-copy IPMS-EXTENSION ::= {
 *   VALUE          IncompleteCopy,
 *   IDENTIFIED BY  id-hex-incomplete-copy
 * }
 * ```
 *
 * @constant
 * @type {IPMS_EXTENSION<IncompleteCopy>}
 * @implements {IPMS_EXTENSION<IncompleteCopy>}
 */
export const incomplete_copy: IPMS_EXTENSION<IncompleteCopy> = {
    class: 'IPMS-EXTENSION',
    decoderFor: {
        '&Type': _decode_IncompleteCopy,
    },
    encoderFor: {
        '&Type': _encode_IncompleteCopy,
    },
    '&id': id_hex_incomplete_copy /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
