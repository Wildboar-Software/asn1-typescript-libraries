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
    ACBioContentInformation,
    _decode_ACBioContentInformation,
    _encode_ACBioContentInformation,
} from '../AuthenticationContextForBiometrics/ACBioContentInformation.ta.mjs';
import { id_acbioContentInformation } from '../AuthenticationContextForBiometrics/id-acbioContentInformation.va.mjs';
import type {
    CONTENT_TYPE,
} from "@wildboar/cms/src/lib/modules/CryptographicMessageSyntax-2010/CONTENT-TYPE.oca.mjs";


/**
 * @summary acbioContentInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * acbioContentInformation CONTENT-TYPE ::= {
 *     TYPE ACBioContentInformation
 *     IDENTIFIED BY id-acbioContentInformation }
 * ```
 *
 * @constant
 * @type {CONTENT_TYPE<ACBioContentInformation>}
 * @implements {CONTENT_TYPE<ACBioContentInformation>}
 */
export const acbioContentInformation: CONTENT_TYPE<ACBioContentInformation> = {
    class: 'CONTENT-TYPE',
    decoderFor: {
        '&Type': _decode_ACBioContentInformation,
    },
    encoderFor: {
        '&Type': _encode_ACBioContentInformation,
    },
    '&id': id_acbioContentInformation /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
