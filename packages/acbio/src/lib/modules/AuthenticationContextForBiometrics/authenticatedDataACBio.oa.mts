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
    AuthenticatedDataACBio,
    _decode_AuthenticatedDataACBio,
    _encode_AuthenticatedDataACBio,
} from '../AuthenticationContextForBiometrics/AuthenticatedDataACBio.ta.mjs';
import { id_authenticatedDataACBio } from '../AuthenticationContextForBiometrics/id-authenticatedDataACBio.va.mjs';
import type {
    CONTENT_TYPE,
} from "@wildboar/cms/src/lib/modules/CryptographicMessageSyntax-2010/CONTENT-TYPE.oca.mjs";


/**
 * @summary authenticatedDataACBio
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * authenticatedDataACBio CONTENT-TYPE ::= {
 *     TYPE AuthenticatedDataACBio
 *     IDENTIFIED BY id-authenticatedDataACBio }
 * ```
 *
 * @constant
 * @type {CONTENT_TYPE<AuthenticatedDataACBio>}
 * @implements {CONTENT_TYPE<AuthenticatedDataACBio>}
 */
export const authenticatedDataACBio: CONTENT_TYPE<AuthenticatedDataACBio> = {
    class: 'CONTENT-TYPE',
    decoderFor: {
        '&Type': _decode_AuthenticatedDataACBio,
    },
    encoderFor: {
        '&Type': _encode_AuthenticatedDataACBio,
    },
    '&id': id_authenticatedDataACBio /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
