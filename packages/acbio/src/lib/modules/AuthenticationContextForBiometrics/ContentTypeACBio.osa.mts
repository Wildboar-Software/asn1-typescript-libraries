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
import { signedDataACBio } from '../AuthenticationContextForBiometrics/signedDataACBio.oa.mjs';
import { authenticatedDataACBio } from '../AuthenticationContextForBiometrics/authenticatedDataACBio.oa.mjs';
import type {
    CONTENT_TYPE,
} from "@wildboar/cms";


/**
 * @summary ContentTypeACBio
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ContentTypeACBio CONTENT-TYPE ::= {signedDataACBio | authenticatedDataACBio}
 * ```
 *
 * @constant
 * @type {CONTENT_TYPE[]}
 *
 */
export const ContentTypeACBio: CONTENT_TYPE[] = [
    signedDataACBio,
    authenticatedDataACBio,
];

/* eslint-enable */
