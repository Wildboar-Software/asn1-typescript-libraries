/* eslint-disable */
import {
    TYPE_IDENTIFIER,
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
    ContentInfo,
    _decode_ContentInfo,
    _encode_ContentInfo,
} from "@wildboar/cms/src/lib/modules/CryptographicMessageSyntax-2010/ContentInfo.ta.mjs";
import { id_et_pkcs7 } from '../IPMSObjectIdentifiers/id-et-pkcs7.va.mjs';
/**
 * @summary pkcs7_body_part_data
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pkcs7-body-part-data ::= {} -- REMOVED_FROM_UNNESTING --
 * ```
 *
 * @constant
 * @type {TYPE_IDENTIFIER<ContentInfo>}
 * @implements {TYPE_IDENTIFIER<ContentInfo>}
 */
export const pkcs7_body_part_data: TYPE_IDENTIFIER<ContentInfo> = {
    class: 'TYPE-IDENTIFIER',
    decoderFor: {
        '&Type': _decode_ContentInfo,
    },
    encoderFor: {
        '&Type': _encode_ContentInfo,
    },
    '&id': id_et_pkcs7 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
