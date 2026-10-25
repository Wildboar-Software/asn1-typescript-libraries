/* eslint-disable */
import {
    type ENUMERATED,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_ClientCertificateType {
    rsa_sign = 1,
    dss_sign = 2,
    rsa_fixed_dh = 3,
    dss_fixed_dn = 4,
}

/**
 * @summary ClientCertificateType
 * @description
 *
 * TLS client-certificate type: rsa-sign (1), dss-sign (2),
 * rsa-fixed-dh (3), dss-fixed-dn (4; TLS spelling is dss_fixed_dh).
 * Extensible. ITU-T Rec. X.1084 (05/2008) Annex A.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ClientCertificateType     ::=     ENUMERATED {
 * rsa-sign         (1),
 * dss-sign         (2),
 * rsa-fixed-dh     (3),
 * dss-fixed-dn     (4),
 * ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type ClientCertificateType = _enum_for_ClientCertificateType | ENUMERATED;

/**
 * @summary ClientCertificateType_rsa_sign
 * @constant
 * @type {number}
 */
export
const ClientCertificateType_rsa_sign: _enum_for_ClientCertificateType.rsa_sign = _enum_for_ClientCertificateType.rsa_sign; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rsa_sign
 * @constant
 * @type {number}
 */
export
const rsa_sign: _enum_for_ClientCertificateType.rsa_sign = ClientCertificateType_rsa_sign; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ClientCertificateType_dss_sign
 * @constant
 * @type {number}
 */
export
const ClientCertificateType_dss_sign: _enum_for_ClientCertificateType.dss_sign = _enum_for_ClientCertificateType.dss_sign; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dss_sign
 * @constant
 * @type {number}
 */
export
const dss_sign: _enum_for_ClientCertificateType.dss_sign = ClientCertificateType_dss_sign; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ClientCertificateType_rsa_fixed_dh
 * @constant
 * @type {number}
 */
export
const ClientCertificateType_rsa_fixed_dh: _enum_for_ClientCertificateType.rsa_fixed_dh = _enum_for_ClientCertificateType.rsa_fixed_dh; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rsa_fixed_dh
 * @constant
 * @type {number}
 */
export
const rsa_fixed_dh: _enum_for_ClientCertificateType.rsa_fixed_dh = ClientCertificateType_rsa_fixed_dh; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ClientCertificateType_dss_fixed_dn
 * @description
 *
 * Annex A spelling `dss-fixed-dn` (4). TLS 1.1 uses `dss_fixed_dh` for
 * this value. X.1084 Annex A.
 * @constant
 * @type {number}
 */
export
const ClientCertificateType_dss_fixed_dn: _enum_for_ClientCertificateType.dss_fixed_dn = _enum_for_ClientCertificateType.dss_fixed_dn; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dss_fixed_dn
 * @description
 *
 * Annex A spelling `dss-fixed-dn` (4). TLS 1.1 uses `dss_fixed_dh` for
 * this value. X.1084 Annex A.
 * @constant
 * @type {number}
 */
export
const dss_fixed_dn: _enum_for_ClientCertificateType.dss_fixed_dn = ClientCertificateType_dss_fixed_dn; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_ClientCertificateType: $.ASN1Decoder<number> = $._decodeEnumerated;
export const _encode_ClientCertificateType: $.ASN1Encoder<number> = $._encodeEnumerated;


/* eslint-enable */
