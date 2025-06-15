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
    SignedDataACBio,
    _decode_SignedDataACBio,
    _encode_SignedDataACBio,
} from '../AuthenticationContextForBiometrics/SignedDataACBio.ta.mjs';
import { id_signedDataACBio } from '../AuthenticationContextForBiometrics/id-signedDataACBio.va.mjs';
import type {
    CONTENT_TYPE,
} from "@wildboar/cms/src/lib/modules/CryptographicMessageSyntax-2010/CONTENT-TYPE.oca.mjs";



/**
 * @summary signedDataACBio
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * signedDataACBio CONTENT-TYPE ::= {
 *     TYPE SignedDataACBio
 *     IDENTIFIED BY id-signedDataACBio }
 * ```
 *
 * @constant
 * @type {CONTENT_TYPE<SignedDataACBio>}
 * @implements {CONTENT_TYPE<SignedDataACBio>}
 */
export const signedDataACBio: CONTENT_TYPE<SignedDataACBio> = {
    class: 'CONTENT-TYPE',
    decoderFor: {
        '&Type': _decode_SignedDataACBio,
    },
    encoderFor: {
        '&Type': _encode_SignedDataACBio,
    },
    '&id': id_signedDataACBio /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
