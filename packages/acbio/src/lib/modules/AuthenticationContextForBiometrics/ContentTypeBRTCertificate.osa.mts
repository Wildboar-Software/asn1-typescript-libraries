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
import { brtCertificate } from '../AuthenticationContextForBiometrics/brtCertificate.oa.mjs';
import type {
    CONTENT_TYPE,
} from "@wildboar/cms";


/**
 * @summary ContentTypeBRTCertificate
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ContentTypeBRTCertificate CONTENT-TYPE ::= { brtCertificate }
 * ```
 *
 * @constant
 * @type {CONTENT_TYPE[]}
 *
 */
export const ContentTypeBRTCertificate: CONTENT_TYPE[] = [brtCertificate];

/* eslint-enable */
