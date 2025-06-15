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
    BRTCertificate,
    _decode_BRTCertificate,
    _encode_BRTCertificate,
} from '../AuthenticationContextForBiometrics/BRTCertificate.ta.mjs';
import { id_brtCertificate } from '../AuthenticationContextForBiometrics/id-brtCertificate.va.mjs';
import type {
    CONTENT_TYPE,
} from "@wildboar/cms/src/lib/modules/CryptographicMessageSyntax-2010/CONTENT-TYPE.oca.mjs";


/**
 * @summary brtCertificate
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * brtCertificate CONTENT-TYPE ::= {
 *     TYPE BRTCertificate
 *     IDENTIFIED BY id-brtCertificate }
 * ```
 *
 * @constant
 * @type {CONTENT_TYPE<BRTCertificate>}
 * @implements {CONTENT_TYPE<BRTCertificate>}
 */
export const brtCertificate: CONTENT_TYPE<BRTCertificate> = {
    class: 'CONTENT-TYPE',
    decoderFor: {
        '&Type': _decode_BRTCertificate,
    },
    encoderFor: {
        '&Type': _encode_BRTCertificate,
    },
    '&id': id_brtCertificate /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
