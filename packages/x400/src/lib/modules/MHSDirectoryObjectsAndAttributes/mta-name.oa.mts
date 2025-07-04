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
    mta_name_Type,
    _decode_mta_name_Type,
    _encode_mta_name_Type,
} from '../MHSDirectoryObjectsAndAttributes/mta-name-Type.ta.mjs';
import { id_san_mta_name } from '../MHSObjectIdentifiers/id-san-mta-name.va.mjs';
import { OTHER_NAME } from '@wildboar/x500/CertificateExtensions';
/**
 * @summary mta_name
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mta-name OTHER-NAME ::= {
 *   SEQUENCE {domain    GlobalDomainIdentifier,
 *             mta-name  MTAName}
 *   IDENTIFIED BY  id-san-mta-name
 * }
 * ```
 *
 * @constant
 * @type {OTHER_NAME<mta_name_Type>}
 * @implements {OTHER_NAME<mta_name_Type>}
 */
export const mta_name: OTHER_NAME<mta_name_Type> = {
    class: 'TYPE-IDENTIFIER',
    decoderFor: {
        '&Type': _decode_mta_name_Type,
    },
    encoderFor: {
        '&Type': _encode_mta_name_Type,
    },
    '&id': id_san_mta_name /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
