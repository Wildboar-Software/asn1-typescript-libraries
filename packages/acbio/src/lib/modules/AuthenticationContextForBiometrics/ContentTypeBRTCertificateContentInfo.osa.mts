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
import { brtcContentInformation } from '../AuthenticationContextForBiometrics/brtcContentInformation.oa.mjs';
import type {
    CONTENT_TYPE,
} from "@wildboar/cms";


/**
 * @summary ContentTypeBRTCertificateContentInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ContentTypeBRTCertificateContentInfo CONTENT-TYPE ::= { brtcContentInformation }
 * ```
 *
 * @constant
 * @type {CONTENT_TYPE[]}
 *
 */
export const ContentTypeBRTCertificateContentInfo: CONTENT_TYPE[] = [
    brtcContentInformation,
];

/* eslint-enable */
