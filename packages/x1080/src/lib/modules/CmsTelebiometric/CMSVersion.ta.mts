/* eslint-disable */
import {
    INTEGER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';


/**
 * @summary CMSVersion
 * @description
 *
 * Syntax version for a CMS data type. This profile uses `v3`
 * (`SignedData`, `KeyAgreeRecipientInfo`), `v1` (`SignerInfo`),
 * `v0` or `v2` (`EnvelopedData`), `v0` (`AuthEnvelopedData`),
 * and `v4` (`KEKRecipientInfo`). `v5` is defined by CMS but not
 * assigned by this profile.
 * ITU-T Rec. X.1080.0 (2017) Cor.1 Annex B.1–B.4.
 * https://www.itu.int/rec/T-REC-X.1080.0-201703-I!Cor1
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CMSVersion  ::=  INTEGER{ v0(0), v1(1), v2(2), v3(3), v4(4), v5(5) }
 * ```
 */
export type CMSVersion = INTEGER;


/**
 * @summary CMSVersion_v0
 * @description
 *
 * `EnvelopedData` when `unprotectedAttrs` is absent;
 * `AuthEnvelopedData`.
 * ITU-T Rec. X.1080.0 (2017) Cor.1 Annex B.3.1, B.4.1.
 *
 * @constant
 * @type {number}
 */
export const CMSVersion_v0: CMSVersion = 0; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary CMSVersion_v0
 * @description
 *
 * `EnvelopedData` when `unprotectedAttrs` is absent;
 * `AuthEnvelopedData`.
 * ITU-T Rec. X.1080.0 (2017) Cor.1 Annex B.3.1, B.4.1.
 *
 * @constant
 * @type {number}
 */
export const v0: CMSVersion = CMSVersion_v0; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary CMSVersion_v1
 * @description
 *
 * `SignerInfo` in this profile.
 * ITU-T Rec. X.1080.0 (2017) Cor.1 Annex B.2.
 *
 * @constant
 * @type {number}
 */
export const CMSVersion_v1: CMSVersion = 1; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary CMSVersion_v1
 * @description
 *
 * `SignerInfo` in this profile.
 * ITU-T Rec. X.1080.0 (2017) Cor.1 Annex B.2.
 *
 * @constant
 * @type {number}
 */
export const v1: CMSVersion = CMSVersion_v1; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary CMSVersion_v2
 * @description
 *
 * `EnvelopedData` when `unprotectedAttrs` is present.
 * ITU-T Rec. X.1080.0 (2017) Cor.1 Annex B.3.1.
 *
 * @constant
 * @type {number}
 */
export const CMSVersion_v2: CMSVersion = 2; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary CMSVersion_v2
 * @description
 *
 * `EnvelopedData` when `unprotectedAttrs` is present.
 * ITU-T Rec. X.1080.0 (2017) Cor.1 Annex B.3.1.
 *
 * @constant
 * @type {number}
 */
export const v2: CMSVersion = CMSVersion_v2; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary CMSVersion_v3
 * @description
 *
 * `SignedData` and `KeyAgreeRecipientInfo` in this profile.
 * ITU-T Rec. X.1080.0 (2017) Cor.1 Annex B.2, B.3.3.
 *
 * @constant
 * @type {number}
 */
export const CMSVersion_v3: CMSVersion = 3; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary CMSVersion_v3
 * @description
 *
 * `SignedData` and `KeyAgreeRecipientInfo` in this profile.
 * ITU-T Rec. X.1080.0 (2017) Cor.1 Annex B.2, B.3.3.
 *
 * @constant
 * @type {number}
 */
export const v3: CMSVersion = CMSVersion_v3; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary CMSVersion_v4
 * @description
 *
 * `KEKRecipientInfo` in this profile.
 * ITU-T Rec. X.1080.0 (2017) Cor.1 Annex B.4.2.
 *
 * @constant
 * @type {number}
 */
export const CMSVersion_v4: CMSVersion = 4; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary CMSVersion_v4
 * @description
 *
 * `KEKRecipientInfo` in this profile.
 * ITU-T Rec. X.1080.0 (2017) Cor.1 Annex B.4.2.
 *
 * @constant
 * @type {number}
 */
export const v4: CMSVersion = CMSVersion_v4; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary CMSVersion_v5
 * @description
 *
 * Defined by CMS; this profile does not assign it to a
 * telebiometrics type.
 * ITU-T Rec. X.1080.0 (2017) Cor.1 Annex B.1.
 *
 * @constant
 * @type {number}
 */
export const CMSVersion_v5: CMSVersion = 5; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary CMSVersion_v5
 * @description
 *
 * Defined by CMS; this profile does not assign it to a
 * telebiometrics type.
 * ITU-T Rec. X.1080.0 (2017) Cor.1 Annex B.1.
 *
 * @constant
 * @type {number}
 */
export const v5: CMSVersion = CMSVersion_v5; /* SHORT_NAMED_INTEGER_VALUE */




export const _decode_CMSVersion = $._decodeInteger;




export const _encode_CMSVersion = $._encodeInteger;


/* eslint-enable */
