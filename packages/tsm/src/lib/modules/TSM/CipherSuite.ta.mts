/* eslint-disable */
import {
    ENUMERATED,
    ASN1Element as _Element,
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
enum _enum_for_CipherSuite {
    tls_null_with_null_null = 0,
    tls_rsa_with_null_md5 = 1,
    tls_rsa_with_null_sha = 2,
    tls_rsa_export_with_rc4_40_md5 = 3,
    tls_rsa_with_rc4_128_md5 = 4,
    tls_rsa_with_rc4_128_sha = 5,
    tls_rsa_export_with_rc2_cbc_40_md5 = 6,
    tls_rsa_with_idea_cbc_sha = 7,
    tls_rsa_export_with_des40_cbc_sha = 8,
    tls_rsa_with_des_cbc_sha = 9,
    tls_rsa_with_3des_ede_cbc_sha = 10,
    tls_dh_dss_export_with_des40_cbc_sha = 11,
    tls_dh_dss_with_des_cbc_sha = 12,
    tls_dh_dss_with_3des_ede_cbc_sha = 13,
    tls_dh_rsa_export_with_des40_cbc_sha = 14,
    tls_dh_rsa_with_des_cbc_sha = 15,
    tls_dh_rsa_with_3des_ede_cbc_sha = 16,
    tls_dhe_dss_export_with_des40_cbc_sha = 17,
    tls_dhe_dss_with_des_cbc_sha = 18,
    tls_dhe_dss_with_3des_ede_cbc_sha = 19,
    tls_dhe_rsa_export_with_des40_cbc_sha = 20,
    tls_dhe_rsa_with_des_cbc_sha = 21,
    tls_dhe_rsa_with_3des_ede_cbc_sha = 22,
    tls_dh_anon_export_rc4_40_md5 = 23,
    tls_dh_anon_with_rc4_128_md5 = 24,
    tls_dh_anon_export_with_des40_cbc_sha = 25,
    tls_dh_anon_with_des_cbc_sha = 26,
    tls_dh_anon_with_3des_ede_cbc_sha = 27,
    tls_krb5_with_des_cbc_sha = 30,
    tls_krb5_with_3des_ede_cbc_sha = 31,
    tls_krb5_with_rc4_128_sha = 32,
    tls_krb5_with_idea_cbc_sha = 33,
    tls_krb5_with_des_cbc_md5 = 34,
    tls_krb5_with_3des_ede_cbc_md5 = 35,
    tls_krb5_with_rc4_128_md5 = 36,
    tls_krb5_with_idea_cbc_md5 = 37,
    tls_krb5_export_with_des_cbc_40_sha = 38,
    tls_krb5_export_with_rc2_cbc_40_sha = 39,
    tls_krb5_export_with_rc4_40_sha = 40,
    tls_krb5_export_with_des_cbc_40_md5 = 41,
    tls_krb5_export_with_rc2_cbc_40_md5 = 42,
    tls_krb5_export_with_rc4_40_md5 = 43,
    tls_psk_with_null_sha = 44,
    tls_dhe_psk_with_null_sha = 45,
    tls_rsa_psk_with_null_sha = 46,
    tls_rsa_with_aes_128_cbc_sha = 47,
    tls_dh_dss_with_aes_128_cbc_sha = 48,
    tls_dh_rsa_with_aes_128_cbc_sha = 49,
    tls_dhe_dss_with_aes_128_cbc_sha = 50,
    tls_dhe_rsa_with_aes_128_cbc_sha = 51,
    tls_dh_anon_with_aes_128_cnc_sha = 52,
    tls_rsa_with_aes_256_cbc_sha = 53,
    tls_dh_dss_with_aes_256_cbc_sha = 54,
    tls_dh_rsa_with_aes_256_cbc_sha = 55,
    tls_dhe_dss_with_aes_256_cbc_sha = 56,
    tls_dhe_rsa_with_aes_256_cbc_sha = 57,
    tls_dh_anon_with_aes_256_cbc_sha = 58,
    tls_rsa_with_camellia_128_cbc_sha = 65,
    tls_dh_dss_with_camellia_128_cbc_sha = 66,
    tls_dh_rsa_with_camellia_128_cbc_sha = 67,
    tls_dhe_dss_with_camellia_128_cbc_sha = 68,
    tls_dhe_rsa_with_camellia_128_cbc_sha = 69,
    tls_dh_anon_with_camellia_128_cbc_sha = 70,
    tls_rsa_with_camellia_256_cbc_sha = 132,
    tls_dh_dss_with_camellia_256_cbc_sha = 133,
    tls_dh_rsa_with_camellia_256_cbc_sha = 134,
    tls_dhe_dss_with_camellia_256_cbc_sha = 135,
    tls_dhe_rsa_with_camellia_256_cbc_sha = 136,
    tls_dh_anon_with_camellia_256_cbc_sha = 137,
    tls_psk_with_rc4_128_sha = 138,
    tls_psk_with_3des_ede_cbc_sha = 139,
    tls_psk_with_aes_128_cbc_sha = 140,
    tls_psk_with_aes_256_cbc_sha = 141,
    tls_dhe_psk_with_rc4_128_sha = 142,
    tls_dhe_psk_with_3des_ede_cbc_sha = 143,
    tls_dhe_psk_with_aes_128_cbc_sha = 144,
    tls_dhe_psk_with_aes_256_cbc_sha = 145,
    tls_rsa_psk_with_rc4_128_sha = 146,
    tls_rsa_psk_with_3des_ede_cbc_sha = 147,
    tls_rsa_psk_with_aes_128_cbc_sha = 148,
    tls_rsa_psk_with_aes_256_cbc_sha = 149,
    tls_rsa_with_seed_cbc_sha = 150,
    tls_dh_dss_with_seed_cbc_sha = 151,
    tls_dh_rsa_with_seed_cbc_sha = 152,
    tls_dhe_dss_with_seed_cbc_sha = 153,
    tls_dhe_rsa_with_seed_cbc_sha = 154,
    tls_dh_anon_with_seed_cbc_sha = 155,
    tls_ecdh_ecdsa_with_null_sha = 49153,
    tls_ecdh_ecdsa_with_rc4_128_sha = 49154,
    tls_ecdh_ecdsa_with_3des_ede_cbc_sha = 49155,
    tls_ecdh_ecdsa_with_aes_128_cbc_sha = 49156,
    tls_ecdh_ecdsa_with_aes_256_cbc_sha = 49157,
    tls_ecdhe_ecdsa_with_null_sha = 49158,
    tls_ecdhe_ecdsa_with_rc4_128_sha = 49159,
    tls_ecdhe_ecdsa_with_3des_ede_cbc_sha = 49160,
    tls_ecdhe_ecdsa_with_aes_128_cbc_sha = 49161,
    tls_ecdhe_ecdsa_with_aes_256_cbc_sha = 49162,
    tls_ecdh_rsa_with_null_sha = 49163,
    tls_ecdh_rsa_with_rc4_128_sha = 49164,
    tls_ecdh_rsa_with_3des_ede_cbc_sha = 49165,
    tls_ecdh_rsa_with_aes_128_cbc_sha = 49166,
    tls_ecdh_rsa_with_aes_256_cbc_sha = 49167,
    tls_ecdhe_rsa_with_null_sha = 49168,
    tls_ecdhe_rsa_with_rc4_128_sha = 49169,
    tls_ecdhe_rsa_with_3des_ede_cbc_sha = 49170,
    tls_ecdhe_rsa_with_aes_128_cbc_sha = 49171,
    tls_ecdhe_rsa_with_aes_256_cbc_sha = 49172,
    tls_ecdh_anon_with_null_sha = 49173,
    tls_ecdh_anon_with_rc4_128_sha = 49174,
    tls_ecdh_anon_with_3des_ede_cbc_sha = 49175,
    tls_ecdh_anon_with_aes_128_cbc_sha = 49176,
    tls_ecdh_anon_with_aes_256_cbc_sha = 49177,
}

/**
 * @summary CipherSuite
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CipherSuite     ::=     ENUMERATED {
 * tls-null-with-null-null             (0),
 * tls-rsa-with-null-md5                 (1),
 * tls-rsa-with-null-sha                 (2),
 * tls-rsa-export-with-rc4-40-md5         (3),
 * tls-rsa-with-rc4-128-md5             (4),
 * tls-rsa-with-rc4-128-sha             (5),
 * tls-rsa-export-with-rc2-cbc-40-md5        (6),
 * tls-rsa-with-idea-cbc-sha             (7),
 * tls-rsa-export-with-des40-cbc-sha         (8),
 * tls-rsa-with-des-cbc-sha             (9),
 * tls-rsa-with-3des-ede-cbc-sha         (10),
 * tls-dh-dss-export-with-des40-cbc-sha     (11),
 * tls-dh-dss-with-des-cbc-sha             (12),
 * tls-dh-dss-with-3des-ede-cbc-sha         (13),
 * tls-dh-rsa-export-with-des40-cbc-sha     (14),
 * tls-dh-rsa-with-des-cbc-sha             (15),
 * tls-dh-rsa-with-3des-ede-cbc-sha         (16),
 * tls-dhe-dss-export-with-des40-cbc-sha     (17),
 * tls-dhe-dss-with-des-cbc-sha         (18),
 * tls-dhe-dss-with-3des-ede-cbc-sha         (19),
 * tls-dhe-rsa-export-with-des40-cbc-sha     (20),
 * tls-dhe-rsa-with-des-cbc-sha         (21),
 * tls-dhe-rsa-with-3des-ede-cbc-sha         (22),
 * tls-dh-anon-export-rc4-40-md5         (23),
 * tls-dh-anon-with-rc4-128-md5            (24),
 * tls-dh-anon-export-with-des40-cbc-sha     (25),
 * tls-dh-anon-with-des-cbc-sha         (26),
 * tls-dh-anon-with-3des-ede-cbc-sha         (27),
 * -- numbers 28 and 29 are reserved to prevent confusion with SSLv3
 * tls-krb5-with-des-cbc-sha             (30),
 * tls-krb5-with-3des-ede-cbc-sha         (31),
 * tls-krb5-with-rc4-128-sha             (32),
 * tls-krb5-with-idea-cbc-sha             (33),
 * tls-krb5-with-des-cbc-md5             (34),
 * tls-krb5-with-3des-ede-cbc-md5         (35),
 * tls-krb5-with-rc4-128-md5             (36),
 * tls-krb5-with-idea-cbc-md5             (37),
 * tls-krb5-export-with-des-cbc-40-sha     (38),
 * tls-krb5-export-with-rc2-cbc-40-sha     (39),
 * tls-krb5-export-with-rc4-40-sha         (40),
 * tls-krb5-export-with-des-cbc-40-md5     (41),
 * tls-krb5-export-with-rc2-cbc-40-md5     (42),
 * tls-krb5-export-with-rc4-40-md5         (43),
 * tls-psk-with-null-sha                 (44),
 * tls-dhe-psk-with-null-sha             (45),
 * tls-rsa-psk-with-null-sha             (46),
 * tls-rsa-with-aes-128-cbc-sha         (47),
 * tls-dh-dss-with-aes-128-cbc-sha         (48),
 * tls-dh-rsa-with-aes-128-cbc-sha         (49),
 * tls-dhe-dss-with-aes-128-cbc-sha         (50),
 * tls-dhe-rsa-with-aes-128-cbc-sha         (51),
 * tls-dh-anon-with-aes-128-cnc-sha         (52),
 * tls-rsa-with-aes-256-cbc-sha         (53),
 * tls-dh-dss-with-aes-256-cbc-sha         (54),
 * tls-dh-rsa-with-aes-256-cbc-sha         (55),
 * tls-dhe-dss-with-aes-256-cbc-sha         (56),
 * tls-dhe-rsa-with-aes-256-cbc-sha         (57),
 * tls-dh-anon-with-aes-256-cbc-sha         (58),
 * -- numbers 59 to 64 are not allocated --
 * tls-rsa-with-camellia-128-cbc-sha         (65),
 * tls-dh-dss-with-camellia-128-cbc-sha     (66),
 * tls-dh-rsa-with-camellia-128-cbc-sha     (67),
 * tls-dhe-dss-with-camellia-128-cbc-sha     (68),
 * tls-dhe-rsa-with-camellia-128-cbc-sha     (69),
 * tls-dh-anon-with-camellia-128-cbc-sha     (70),
 * -- numbers 71 to 131 are reserved or used by some implementations --
 * tls-rsa-with-camellia-256-cbc-sha         (132),
 * tls-dh-dss-with-camellia-256-cbc-sha     (133),
 * tls-dh-rsa-with-camellia-256-cbc-sha     (134),
 * tls-dhe-dss-with-camellia-256-cbc-sha     (135),
 * tls-dhe-rsa-with-camellia-256-cbc-sha     (136),
 * tls-dh-anon-with-camellia-256-cbc-sha     (137),
 * tls-psk-with-rc4-128-sha             (138),
 * tls-psk-with-3des-ede-cbc-sha         (139),
 * tls-psk-with-aes-128-cbc-sha         (140),
 * tls-psk-with-aes-256-cbc-sha         (141),
 * tls-dhe-psk-with-rc4-128-sha         (142),
 * tls-dhe-psk-with-3des-ede-cbc-sha         (143),
 * tls-dhe-psk-with-aes-128-cbc-sha         (144),
 * tls-dhe-psk-with-aes-256-cbc-sha         (145),
 * tls-rsa-psk-with-rc4-128-sha         (146),
 * tls-rsa-psk-with-3des-ede-cbc-sha         (147),
 * tls-rsa-psk-with-aes-128-cbc-sha         (148),
 * tls-rsa-psk-with-aes-256-cbc-sha         (149),
 * tls-rsa-with-seed-cbc-sha             (150),
 * tls-dh-dss-with-seed-cbc-sha         (151),
 * tls-dh-rsa-with-seed-cbc-sha         (152),
 * tls-dhe-dss-with-seed-cbc-sha         (153),
 * tls-dhe-rsa-with-seed-cbc-sha         (154),
 * tls-dh-anon-with-seed-cbc-sha         (155),
 * -- unallocated numbers --
 * tls-ecdh-ecdsa-with-null-sha         (49153),
 * tls-ecdh-ecdsa-with-rc4-128-sha         (49154),
 * tls-ecdh-ecdsa-with-3des-ede-cbc-sha     (49155),
 * tls-ecdh-ecdsa-with-aes-128-cbc-sha     (49156),
 * tls-ecdh-ecdsa-with-aes-256-cbc-sha     (49157),
 * tls-ecdhe-ecdsa-with-null-sha         (49158),
 * tls-ecdhe-ecdsa-with-rc4-128-sha         (49159),
 * tls-ecdhe-ecdsa-with-3des-ede-cbc-sha     (49160),
 * tls-ecdhe-ecdsa-with-aes-128-cbc-sha     (49161),
 * tls-ecdhe-ecdsa-with-aes-256-cbc-sha     (49162),
 * tls-ecdh-rsa-with-null-sha             (49163),
 * tls-ecdh-rsa-with-rc4-128-sha         (49164),
 * tls-ecdh-rsa-with-3des-ede-cbc-sha     (49165),
 * tls-ecdh-rsa-with-aes-128-cbc-sha         (49166),
 * tls-ecdh-rsa-with-aes-256-cbc-sha         (49167),
 * tls-ecdhe-rsa-with-null-sha             (49168),
 * tls-ecdhe-rsa-with-rc4-128-sha         (49169),
 * tls-ecdhe-rsa-with-3des-ede-cbc-sha     (49170),
 * tls-ecdhe-rsa-with-aes-128-cbc-sha     (49171),
 * tls-ecdhe-rsa-with-aes-256-cbc-sha     (49172),
 * tls-ecdh-anon-with-null-sha             (49173),
 * tls-ecdh-anon-with-rc4-128-sha         (49174),
 * tls-ecdh-anon-with-3des-ede-cbc-sha     (49175),
 * tls-ecdh-anon-with-aes-128-cbc-sha     (49176),
 * tls-ecdh-anon-with-aes-256-cbc-sha     (49177),
 * ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type CipherSuite = _enum_for_CipherSuite | ENUMERATED;

/**
 * @summary CipherSuite_tls_null_with_null_null
 * @constant
 * @type {number}
 */
export
const CipherSuite_tls_null_with_null_null: CipherSuite = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tls_null_with_null_null
 * @constant
 * @type {number}
 */
export
const tls_null_with_null_null: CipherSuite = CipherSuite_tls_null_with_null_null; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CipherSuite_tls_rsa_with_null_md5
 * @constant
 * @type {number}
 */
export
const CipherSuite_tls_rsa_with_null_md5: CipherSuite = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tls_rsa_with_null_md5
 * @constant
 * @type {number}
 */
export
const tls_rsa_with_null_md5: CipherSuite = CipherSuite_tls_rsa_with_null_md5; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CipherSuite_tls_rsa_with_null_sha
 * @constant
 * @type {number}
 */
export
const CipherSuite_tls_rsa_with_null_sha: CipherSuite = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tls_rsa_with_null_sha
 * @constant
 * @type {number}
 */
export
const tls_rsa_with_null_sha: CipherSuite = CipherSuite_tls_rsa_with_null_sha; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CipherSuite_tls_rsa_export_with_rc4_40_md5
 * @constant
 * @type {number}
 */
export
const CipherSuite_tls_rsa_export_with_rc4_40_md5: CipherSuite = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tls_rsa_export_with_rc4_40_md5
 * @constant
 * @type {number}
 */
export
const tls_rsa_export_with_rc4_40_md5: CipherSuite = CipherSuite_tls_rsa_export_with_rc4_40_md5; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CipherSuite_tls_rsa_with_rc4_128_md5
 * @constant
 * @type {number}
 */
export
const CipherSuite_tls_rsa_with_rc4_128_md5: CipherSuite = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tls_rsa_with_rc4_128_md5
 * @constant
 * @type {number}
 */
export
const tls_rsa_with_rc4_128_md5: CipherSuite = CipherSuite_tls_rsa_with_rc4_128_md5; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CipherSuite_tls_rsa_with_rc4_128_sha
 * @constant
 * @type {number}
 */
export
const CipherSuite_tls_rsa_with_rc4_128_sha: CipherSuite = 5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tls_rsa_with_rc4_128_sha
 * @constant
 * @type {number}
 */
export
const tls_rsa_with_rc4_128_sha: CipherSuite = CipherSuite_tls_rsa_with_rc4_128_sha; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CipherSuite_tls_rsa_export_with_rc2_cbc_40_md5
 * @constant
 * @type {number}
 */
export
const CipherSuite_tls_rsa_export_with_rc2_cbc_40_md5: CipherSuite = 6; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tls_rsa_export_with_rc2_cbc_40_md5
 * @constant
 * @type {number}
 */
export
const tls_rsa_export_with_rc2_cbc_40_md5: CipherSuite = CipherSuite_tls_rsa_export_with_rc2_cbc_40_md5; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CipherSuite_tls_rsa_with_idea_cbc_sha
 * @constant
 * @type {number}
 */
export
const CipherSuite_tls_rsa_with_idea_cbc_sha: CipherSuite = 7; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tls_rsa_with_idea_cbc_sha
 * @constant
 * @type {number}
 */
export
const tls_rsa_with_idea_cbc_sha: CipherSuite = CipherSuite_tls_rsa_with_idea_cbc_sha; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CipherSuite_tls_rsa_export_with_des40_cbc_sha
 * @constant
 * @type {number}
 */
export
const CipherSuite_tls_rsa_export_with_des40_cbc_sha: CipherSuite = 8; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tls_rsa_export_with_des40_cbc_sha
 * @constant
 * @type {number}
 */
export
const tls_rsa_export_with_des40_cbc_sha: CipherSuite = CipherSuite_tls_rsa_export_with_des40_cbc_sha; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CipherSuite_tls_rsa_with_des_cbc_sha
 * @constant
 * @type {number}
 */
export
const CipherSuite_tls_rsa_with_des_cbc_sha: CipherSuite = 9; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tls_rsa_with_des_cbc_sha
 * @constant
 * @type {number}
 */
export
const tls_rsa_with_des_cbc_sha: CipherSuite = CipherSuite_tls_rsa_with_des_cbc_sha; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CipherSuite_tls_rsa_with_3des_ede_cbc_sha
 * @constant
 * @type {number}
 */
export
const CipherSuite_tls_rsa_with_3des_ede_cbc_sha: CipherSuite = 10; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tls_rsa_with_3des_ede_cbc_sha
 * @constant
 * @type {number}
 */
export
const tls_rsa_with_3des_ede_cbc_sha: CipherSuite = CipherSuite_tls_rsa_with_3des_ede_cbc_sha; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CipherSuite_tls_dh_dss_export_with_des40_cbc_sha
 * @constant
 * @type {number}
 */
export
const CipherSuite_tls_dh_dss_export_with_des40_cbc_sha: CipherSuite = 11; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tls_dh_dss_export_with_des40_cbc_sha
 * @constant
 * @type {number}
 */
export
const tls_dh_dss_export_with_des40_cbc_sha: CipherSuite = CipherSuite_tls_dh_dss_export_with_des40_cbc_sha; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CipherSuite_tls_dh_dss_with_des_cbc_sha
 * @constant
 * @type {number}
 */
export
const CipherSuite_tls_dh_dss_with_des_cbc_sha: CipherSuite = 12; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tls_dh_dss_with_des_cbc_sha
 * @constant
 * @type {number}
 */
export
const tls_dh_dss_with_des_cbc_sha: CipherSuite = CipherSuite_tls_dh_dss_with_des_cbc_sha; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CipherSuite_tls_dh_dss_with_3des_ede_cbc_sha
 * @constant
 * @type {number}
 */
export
const CipherSuite_tls_dh_dss_with_3des_ede_cbc_sha: CipherSuite = 13; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tls_dh_dss_with_3des_ede_cbc_sha
 * @constant
 * @type {number}
 */
export
const tls_dh_dss_with_3des_ede_cbc_sha: CipherSuite = CipherSuite_tls_dh_dss_with_3des_ede_cbc_sha; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CipherSuite_tls_dh_rsa_export_with_des40_cbc_sha
 * @constant
 * @type {number}
 */
export
const CipherSuite_tls_dh_rsa_export_with_des40_cbc_sha: CipherSuite = 14; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tls_dh_rsa_export_with_des40_cbc_sha
 * @constant
 * @type {number}
 */
export
const tls_dh_rsa_export_with_des40_cbc_sha: CipherSuite = CipherSuite_tls_dh_rsa_export_with_des40_cbc_sha; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CipherSuite_tls_dh_rsa_with_des_cbc_sha
 * @constant
 * @type {number}
 */
export
const CipherSuite_tls_dh_rsa_with_des_cbc_sha: CipherSuite = 15; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tls_dh_rsa_with_des_cbc_sha
 * @constant
 * @type {number}
 */
export
const tls_dh_rsa_with_des_cbc_sha: CipherSuite = CipherSuite_tls_dh_rsa_with_des_cbc_sha; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CipherSuite_tls_dh_rsa_with_3des_ede_cbc_sha
 * @constant
 * @type {number}
 */
export
const CipherSuite_tls_dh_rsa_with_3des_ede_cbc_sha: CipherSuite = 16; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tls_dh_rsa_with_3des_ede_cbc_sha
 * @constant
 * @type {number}
 */
export
const tls_dh_rsa_with_3des_ede_cbc_sha: CipherSuite = CipherSuite_tls_dh_rsa_with_3des_ede_cbc_sha; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CipherSuite_tls_dhe_dss_export_with_des40_cbc_sha
 * @constant
 * @type {number}
 */
export
const CipherSuite_tls_dhe_dss_export_with_des40_cbc_sha: CipherSuite = 17; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tls_dhe_dss_export_with_des40_cbc_sha
 * @constant
 * @type {number}
 */
export
const tls_dhe_dss_export_with_des40_cbc_sha: CipherSuite = CipherSuite_tls_dhe_dss_export_with_des40_cbc_sha; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CipherSuite_tls_dhe_dss_with_des_cbc_sha
 * @constant
 * @type {number}
 */
export
const CipherSuite_tls_dhe_dss_with_des_cbc_sha: CipherSuite = 18; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tls_dhe_dss_with_des_cbc_sha
 * @constant
 * @type {number}
 */
export
const tls_dhe_dss_with_des_cbc_sha: CipherSuite = CipherSuite_tls_dhe_dss_with_des_cbc_sha; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CipherSuite_tls_dhe_dss_with_3des_ede_cbc_sha
 * @constant
 * @type {number}
 */
export
const CipherSuite_tls_dhe_dss_with_3des_ede_cbc_sha: CipherSuite = 19; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tls_dhe_dss_with_3des_ede_cbc_sha
 * @constant
 * @type {number}
 */
export
const tls_dhe_dss_with_3des_ede_cbc_sha: CipherSuite = CipherSuite_tls_dhe_dss_with_3des_ede_cbc_sha; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CipherSuite_tls_dhe_rsa_export_with_des40_cbc_sha
 * @constant
 * @type {number}
 */
export
const CipherSuite_tls_dhe_rsa_export_with_des40_cbc_sha: CipherSuite = 20; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tls_dhe_rsa_export_with_des40_cbc_sha
 * @constant
 * @type {number}
 */
export
const tls_dhe_rsa_export_with_des40_cbc_sha: CipherSuite = CipherSuite_tls_dhe_rsa_export_with_des40_cbc_sha; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CipherSuite_tls_dhe_rsa_with_des_cbc_sha
 * @constant
 * @type {number}
 */
export
const CipherSuite_tls_dhe_rsa_with_des_cbc_sha: CipherSuite = 21; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tls_dhe_rsa_with_des_cbc_sha
 * @constant
 * @type {number}
 */
export
const tls_dhe_rsa_with_des_cbc_sha: CipherSuite = CipherSuite_tls_dhe_rsa_with_des_cbc_sha; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CipherSuite_tls_dhe_rsa_with_3des_ede_cbc_sha
 * @constant
 * @type {number}
 */
export
const CipherSuite_tls_dhe_rsa_with_3des_ede_cbc_sha: CipherSuite = 22; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tls_dhe_rsa_with_3des_ede_cbc_sha
 * @constant
 * @type {number}
 */
export
const tls_dhe_rsa_with_3des_ede_cbc_sha: CipherSuite = CipherSuite_tls_dhe_rsa_with_3des_ede_cbc_sha; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CipherSuite_tls_dh_anon_export_rc4_40_md5
 * @constant
 * @type {number}
 */
export
const CipherSuite_tls_dh_anon_export_rc4_40_md5: CipherSuite = 23; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tls_dh_anon_export_rc4_40_md5
 * @constant
 * @type {number}
 */
export
const tls_dh_anon_export_rc4_40_md5: CipherSuite = CipherSuite_tls_dh_anon_export_rc4_40_md5; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CipherSuite_tls_dh_anon_with_rc4_128_md5
 * @constant
 * @type {number}
 */
export
const CipherSuite_tls_dh_anon_with_rc4_128_md5: CipherSuite = 24; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tls_dh_anon_with_rc4_128_md5
 * @constant
 * @type {number}
 */
export
const tls_dh_anon_with_rc4_128_md5: CipherSuite = CipherSuite_tls_dh_anon_with_rc4_128_md5; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CipherSuite_tls_dh_anon_export_with_des40_cbc_sha
 * @constant
 * @type {number}
 */
export
const CipherSuite_tls_dh_anon_export_with_des40_cbc_sha: CipherSuite = 25; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tls_dh_anon_export_with_des40_cbc_sha
 * @constant
 * @type {number}
 */
export
const tls_dh_anon_export_with_des40_cbc_sha: CipherSuite = CipherSuite_tls_dh_anon_export_with_des40_cbc_sha; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CipherSuite_tls_dh_anon_with_des_cbc_sha
 * @constant
 * @type {number}
 */
export
const CipherSuite_tls_dh_anon_with_des_cbc_sha: CipherSuite = 26; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tls_dh_anon_with_des_cbc_sha
 * @constant
 * @type {number}
 */
export
const tls_dh_anon_with_des_cbc_sha: CipherSuite = CipherSuite_tls_dh_anon_with_des_cbc_sha; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CipherSuite_tls_dh_anon_with_3des_ede_cbc_sha
 * @constant
 * @type {number}
 */
export
const CipherSuite_tls_dh_anon_with_3des_ede_cbc_sha: CipherSuite = 27; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tls_dh_anon_with_3des_ede_cbc_sha
 * @constant
 * @type {number}
 */
export
const tls_dh_anon_with_3des_ede_cbc_sha: CipherSuite = CipherSuite_tls_dh_anon_with_3des_ede_cbc_sha; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CipherSuite_tls_krb5_with_des_cbc_sha
 * @constant
 * @type {number}
 */
export
const CipherSuite_tls_krb5_with_des_cbc_sha: CipherSuite = 30; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tls_krb5_with_des_cbc_sha
 * @constant
 * @type {number}
 */
export
const tls_krb5_with_des_cbc_sha: CipherSuite = CipherSuite_tls_krb5_with_des_cbc_sha; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CipherSuite_tls_krb5_with_3des_ede_cbc_sha
 * @constant
 * @type {number}
 */
export
const CipherSuite_tls_krb5_with_3des_ede_cbc_sha: CipherSuite = 31; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tls_krb5_with_3des_ede_cbc_sha
 * @constant
 * @type {number}
 */
export
const tls_krb5_with_3des_ede_cbc_sha: CipherSuite = CipherSuite_tls_krb5_with_3des_ede_cbc_sha; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CipherSuite_tls_krb5_with_rc4_128_sha
 * @constant
 * @type {number}
 */
export
const CipherSuite_tls_krb5_with_rc4_128_sha: CipherSuite = 32; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tls_krb5_with_rc4_128_sha
 * @constant
 * @type {number}
 */
export
const tls_krb5_with_rc4_128_sha: CipherSuite = CipherSuite_tls_krb5_with_rc4_128_sha; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CipherSuite_tls_krb5_with_idea_cbc_sha
 * @constant
 * @type {number}
 */
export
const CipherSuite_tls_krb5_with_idea_cbc_sha: CipherSuite = 33; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tls_krb5_with_idea_cbc_sha
 * @constant
 * @type {number}
 */
export
const tls_krb5_with_idea_cbc_sha: CipherSuite = CipherSuite_tls_krb5_with_idea_cbc_sha; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CipherSuite_tls_krb5_with_des_cbc_md5
 * @constant
 * @type {number}
 */
export
const CipherSuite_tls_krb5_with_des_cbc_md5: CipherSuite = 34; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tls_krb5_with_des_cbc_md5
 * @constant
 * @type {number}
 */
export
const tls_krb5_with_des_cbc_md5: CipherSuite = CipherSuite_tls_krb5_with_des_cbc_md5; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CipherSuite_tls_krb5_with_3des_ede_cbc_md5
 * @constant
 * @type {number}
 */
export
const CipherSuite_tls_krb5_with_3des_ede_cbc_md5: CipherSuite = 35; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tls_krb5_with_3des_ede_cbc_md5
 * @constant
 * @type {number}
 */
export
const tls_krb5_with_3des_ede_cbc_md5: CipherSuite = CipherSuite_tls_krb5_with_3des_ede_cbc_md5; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CipherSuite_tls_krb5_with_rc4_128_md5
 * @constant
 * @type {number}
 */
export
const CipherSuite_tls_krb5_with_rc4_128_md5: CipherSuite = 36; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tls_krb5_with_rc4_128_md5
 * @constant
 * @type {number}
 */
export
const tls_krb5_with_rc4_128_md5: CipherSuite = CipherSuite_tls_krb5_with_rc4_128_md5; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CipherSuite_tls_krb5_with_idea_cbc_md5
 * @constant
 * @type {number}
 */
export
const CipherSuite_tls_krb5_with_idea_cbc_md5: CipherSuite = 37; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tls_krb5_with_idea_cbc_md5
 * @constant
 * @type {number}
 */
export
const tls_krb5_with_idea_cbc_md5: CipherSuite = CipherSuite_tls_krb5_with_idea_cbc_md5; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CipherSuite_tls_krb5_export_with_des_cbc_40_sha
 * @constant
 * @type {number}
 */
export
const CipherSuite_tls_krb5_export_with_des_cbc_40_sha: CipherSuite = 38; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tls_krb5_export_with_des_cbc_40_sha
 * @constant
 * @type {number}
 */
export
const tls_krb5_export_with_des_cbc_40_sha: CipherSuite = CipherSuite_tls_krb5_export_with_des_cbc_40_sha; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CipherSuite_tls_krb5_export_with_rc2_cbc_40_sha
 * @constant
 * @type {number}
 */
export
const CipherSuite_tls_krb5_export_with_rc2_cbc_40_sha: CipherSuite = 39; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tls_krb5_export_with_rc2_cbc_40_sha
 * @constant
 * @type {number}
 */
export
const tls_krb5_export_with_rc2_cbc_40_sha: CipherSuite = CipherSuite_tls_krb5_export_with_rc2_cbc_40_sha; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CipherSuite_tls_krb5_export_with_rc4_40_sha
 * @constant
 * @type {number}
 */
export
const CipherSuite_tls_krb5_export_with_rc4_40_sha: CipherSuite = 40; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tls_krb5_export_with_rc4_40_sha
 * @constant
 * @type {number}
 */
export
const tls_krb5_export_with_rc4_40_sha: CipherSuite = CipherSuite_tls_krb5_export_with_rc4_40_sha; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CipherSuite_tls_krb5_export_with_des_cbc_40_md5
 * @constant
 * @type {number}
 */
export
const CipherSuite_tls_krb5_export_with_des_cbc_40_md5: CipherSuite = 41; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tls_krb5_export_with_des_cbc_40_md5
 * @constant
 * @type {number}
 */
export
const tls_krb5_export_with_des_cbc_40_md5: CipherSuite = CipherSuite_tls_krb5_export_with_des_cbc_40_md5; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CipherSuite_tls_krb5_export_with_rc2_cbc_40_md5
 * @constant
 * @type {number}
 */
export
const CipherSuite_tls_krb5_export_with_rc2_cbc_40_md5: CipherSuite = 42; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tls_krb5_export_with_rc2_cbc_40_md5
 * @constant
 * @type {number}
 */
export
const tls_krb5_export_with_rc2_cbc_40_md5: CipherSuite = CipherSuite_tls_krb5_export_with_rc2_cbc_40_md5; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CipherSuite_tls_krb5_export_with_rc4_40_md5
 * @constant
 * @type {number}
 */
export
const CipherSuite_tls_krb5_export_with_rc4_40_md5: CipherSuite = 43; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tls_krb5_export_with_rc4_40_md5
 * @constant
 * @type {number}
 */
export
const tls_krb5_export_with_rc4_40_md5: CipherSuite = CipherSuite_tls_krb5_export_with_rc4_40_md5; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CipherSuite_tls_psk_with_null_sha
 * @constant
 * @type {number}
 */
export
const CipherSuite_tls_psk_with_null_sha: CipherSuite = 44; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tls_psk_with_null_sha
 * @constant
 * @type {number}
 */
export
const tls_psk_with_null_sha: CipherSuite = CipherSuite_tls_psk_with_null_sha; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CipherSuite_tls_dhe_psk_with_null_sha
 * @constant
 * @type {number}
 */
export
const CipherSuite_tls_dhe_psk_with_null_sha: CipherSuite = 45; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tls_dhe_psk_with_null_sha
 * @constant
 * @type {number}
 */
export
const tls_dhe_psk_with_null_sha: CipherSuite = CipherSuite_tls_dhe_psk_with_null_sha; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CipherSuite_tls_rsa_psk_with_null_sha
 * @constant
 * @type {number}
 */
export
const CipherSuite_tls_rsa_psk_with_null_sha: CipherSuite = 46; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tls_rsa_psk_with_null_sha
 * @constant
 * @type {number}
 */
export
const tls_rsa_psk_with_null_sha: CipherSuite = CipherSuite_tls_rsa_psk_with_null_sha; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CipherSuite_tls_rsa_with_aes_128_cbc_sha
 * @constant
 * @type {number}
 */
export
const CipherSuite_tls_rsa_with_aes_128_cbc_sha: CipherSuite = 47; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tls_rsa_with_aes_128_cbc_sha
 * @constant
 * @type {number}
 */
export
const tls_rsa_with_aes_128_cbc_sha: CipherSuite = CipherSuite_tls_rsa_with_aes_128_cbc_sha; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CipherSuite_tls_dh_dss_with_aes_128_cbc_sha
 * @constant
 * @type {number}
 */
export
const CipherSuite_tls_dh_dss_with_aes_128_cbc_sha: CipherSuite = 48; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tls_dh_dss_with_aes_128_cbc_sha
 * @constant
 * @type {number}
 */
export
const tls_dh_dss_with_aes_128_cbc_sha: CipherSuite = CipherSuite_tls_dh_dss_with_aes_128_cbc_sha; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CipherSuite_tls_dh_rsa_with_aes_128_cbc_sha
 * @constant
 * @type {number}
 */
export
const CipherSuite_tls_dh_rsa_with_aes_128_cbc_sha: CipherSuite = 49; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tls_dh_rsa_with_aes_128_cbc_sha
 * @constant
 * @type {number}
 */
export
const tls_dh_rsa_with_aes_128_cbc_sha: CipherSuite = CipherSuite_tls_dh_rsa_with_aes_128_cbc_sha; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CipherSuite_tls_dhe_dss_with_aes_128_cbc_sha
 * @constant
 * @type {number}
 */
export
const CipherSuite_tls_dhe_dss_with_aes_128_cbc_sha: CipherSuite = 50; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tls_dhe_dss_with_aes_128_cbc_sha
 * @constant
 * @type {number}
 */
export
const tls_dhe_dss_with_aes_128_cbc_sha: CipherSuite = CipherSuite_tls_dhe_dss_with_aes_128_cbc_sha; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CipherSuite_tls_dhe_rsa_with_aes_128_cbc_sha
 * @constant
 * @type {number}
 */
export
const CipherSuite_tls_dhe_rsa_with_aes_128_cbc_sha: CipherSuite = 51; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tls_dhe_rsa_with_aes_128_cbc_sha
 * @constant
 * @type {number}
 */
export
const tls_dhe_rsa_with_aes_128_cbc_sha: CipherSuite = CipherSuite_tls_dhe_rsa_with_aes_128_cbc_sha; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CipherSuite_tls_dh_anon_with_aes_128_cnc_sha
 * @constant
 * @type {number}
 */
export
const CipherSuite_tls_dh_anon_with_aes_128_cnc_sha: CipherSuite = 52; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tls_dh_anon_with_aes_128_cnc_sha
 * @constant
 * @type {number}
 */
export
const tls_dh_anon_with_aes_128_cnc_sha: CipherSuite = CipherSuite_tls_dh_anon_with_aes_128_cnc_sha; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CipherSuite_tls_rsa_with_aes_256_cbc_sha
 * @constant
 * @type {number}
 */
export
const CipherSuite_tls_rsa_with_aes_256_cbc_sha: CipherSuite = 53; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tls_rsa_with_aes_256_cbc_sha
 * @constant
 * @type {number}
 */
export
const tls_rsa_with_aes_256_cbc_sha: CipherSuite = CipherSuite_tls_rsa_with_aes_256_cbc_sha; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CipherSuite_tls_dh_dss_with_aes_256_cbc_sha
 * @constant
 * @type {number}
 */
export
const CipherSuite_tls_dh_dss_with_aes_256_cbc_sha: CipherSuite = 54; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tls_dh_dss_with_aes_256_cbc_sha
 * @constant
 * @type {number}
 */
export
const tls_dh_dss_with_aes_256_cbc_sha: CipherSuite = CipherSuite_tls_dh_dss_with_aes_256_cbc_sha; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CipherSuite_tls_dh_rsa_with_aes_256_cbc_sha
 * @constant
 * @type {number}
 */
export
const CipherSuite_tls_dh_rsa_with_aes_256_cbc_sha: CipherSuite = 55; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tls_dh_rsa_with_aes_256_cbc_sha
 * @constant
 * @type {number}
 */
export
const tls_dh_rsa_with_aes_256_cbc_sha: CipherSuite = CipherSuite_tls_dh_rsa_with_aes_256_cbc_sha; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CipherSuite_tls_dhe_dss_with_aes_256_cbc_sha
 * @constant
 * @type {number}
 */
export
const CipherSuite_tls_dhe_dss_with_aes_256_cbc_sha: CipherSuite = 56; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tls_dhe_dss_with_aes_256_cbc_sha
 * @constant
 * @type {number}
 */
export
const tls_dhe_dss_with_aes_256_cbc_sha: CipherSuite = CipherSuite_tls_dhe_dss_with_aes_256_cbc_sha; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CipherSuite_tls_dhe_rsa_with_aes_256_cbc_sha
 * @constant
 * @type {number}
 */
export
const CipherSuite_tls_dhe_rsa_with_aes_256_cbc_sha: CipherSuite = 57; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tls_dhe_rsa_with_aes_256_cbc_sha
 * @constant
 * @type {number}
 */
export
const tls_dhe_rsa_with_aes_256_cbc_sha: CipherSuite = CipherSuite_tls_dhe_rsa_with_aes_256_cbc_sha; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CipherSuite_tls_dh_anon_with_aes_256_cbc_sha
 * @constant
 * @type {number}
 */
export
const CipherSuite_tls_dh_anon_with_aes_256_cbc_sha: CipherSuite = 58; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tls_dh_anon_with_aes_256_cbc_sha
 * @constant
 * @type {number}
 */
export
const tls_dh_anon_with_aes_256_cbc_sha: CipherSuite = CipherSuite_tls_dh_anon_with_aes_256_cbc_sha; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CipherSuite_tls_rsa_with_camellia_128_cbc_sha
 * @constant
 * @type {number}
 */
export
const CipherSuite_tls_rsa_with_camellia_128_cbc_sha: CipherSuite = 65; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tls_rsa_with_camellia_128_cbc_sha
 * @constant
 * @type {number}
 */
export
const tls_rsa_with_camellia_128_cbc_sha: CipherSuite = CipherSuite_tls_rsa_with_camellia_128_cbc_sha; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CipherSuite_tls_dh_dss_with_camellia_128_cbc_sha
 * @constant
 * @type {number}
 */
export
const CipherSuite_tls_dh_dss_with_camellia_128_cbc_sha: CipherSuite = 66; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tls_dh_dss_with_camellia_128_cbc_sha
 * @constant
 * @type {number}
 */
export
const tls_dh_dss_with_camellia_128_cbc_sha: CipherSuite = CipherSuite_tls_dh_dss_with_camellia_128_cbc_sha; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CipherSuite_tls_dh_rsa_with_camellia_128_cbc_sha
 * @constant
 * @type {number}
 */
export
const CipherSuite_tls_dh_rsa_with_camellia_128_cbc_sha: CipherSuite = 67; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tls_dh_rsa_with_camellia_128_cbc_sha
 * @constant
 * @type {number}
 */
export
const tls_dh_rsa_with_camellia_128_cbc_sha: CipherSuite = CipherSuite_tls_dh_rsa_with_camellia_128_cbc_sha; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CipherSuite_tls_dhe_dss_with_camellia_128_cbc_sha
 * @constant
 * @type {number}
 */
export
const CipherSuite_tls_dhe_dss_with_camellia_128_cbc_sha: CipherSuite = 68; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tls_dhe_dss_with_camellia_128_cbc_sha
 * @constant
 * @type {number}
 */
export
const tls_dhe_dss_with_camellia_128_cbc_sha: CipherSuite = CipherSuite_tls_dhe_dss_with_camellia_128_cbc_sha; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CipherSuite_tls_dhe_rsa_with_camellia_128_cbc_sha
 * @constant
 * @type {number}
 */
export
const CipherSuite_tls_dhe_rsa_with_camellia_128_cbc_sha: CipherSuite = 69; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tls_dhe_rsa_with_camellia_128_cbc_sha
 * @constant
 * @type {number}
 */
export
const tls_dhe_rsa_with_camellia_128_cbc_sha: CipherSuite = CipherSuite_tls_dhe_rsa_with_camellia_128_cbc_sha; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CipherSuite_tls_dh_anon_with_camellia_128_cbc_sha
 * @constant
 * @type {number}
 */
export
const CipherSuite_tls_dh_anon_with_camellia_128_cbc_sha: CipherSuite = 70; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tls_dh_anon_with_camellia_128_cbc_sha
 * @constant
 * @type {number}
 */
export
const tls_dh_anon_with_camellia_128_cbc_sha: CipherSuite = CipherSuite_tls_dh_anon_with_camellia_128_cbc_sha; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CipherSuite_tls_rsa_with_camellia_256_cbc_sha
 * @constant
 * @type {number}
 */
export
const CipherSuite_tls_rsa_with_camellia_256_cbc_sha: CipherSuite = 132; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tls_rsa_with_camellia_256_cbc_sha
 * @constant
 * @type {number}
 */
export
const tls_rsa_with_camellia_256_cbc_sha: CipherSuite = CipherSuite_tls_rsa_with_camellia_256_cbc_sha; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CipherSuite_tls_dh_dss_with_camellia_256_cbc_sha
 * @constant
 * @type {number}
 */
export
const CipherSuite_tls_dh_dss_with_camellia_256_cbc_sha: CipherSuite = 133; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tls_dh_dss_with_camellia_256_cbc_sha
 * @constant
 * @type {number}
 */
export
const tls_dh_dss_with_camellia_256_cbc_sha: CipherSuite = CipherSuite_tls_dh_dss_with_camellia_256_cbc_sha; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CipherSuite_tls_dh_rsa_with_camellia_256_cbc_sha
 * @constant
 * @type {number}
 */
export
const CipherSuite_tls_dh_rsa_with_camellia_256_cbc_sha: CipherSuite = 134; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tls_dh_rsa_with_camellia_256_cbc_sha
 * @constant
 * @type {number}
 */
export
const tls_dh_rsa_with_camellia_256_cbc_sha: CipherSuite = CipherSuite_tls_dh_rsa_with_camellia_256_cbc_sha; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CipherSuite_tls_dhe_dss_with_camellia_256_cbc_sha
 * @constant
 * @type {number}
 */
export
const CipherSuite_tls_dhe_dss_with_camellia_256_cbc_sha: CipherSuite = 135; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tls_dhe_dss_with_camellia_256_cbc_sha
 * @constant
 * @type {number}
 */
export
const tls_dhe_dss_with_camellia_256_cbc_sha: CipherSuite = CipherSuite_tls_dhe_dss_with_camellia_256_cbc_sha; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CipherSuite_tls_dhe_rsa_with_camellia_256_cbc_sha
 * @constant
 * @type {number}
 */
export
const CipherSuite_tls_dhe_rsa_with_camellia_256_cbc_sha: CipherSuite = 136; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tls_dhe_rsa_with_camellia_256_cbc_sha
 * @constant
 * @type {number}
 */
export
const tls_dhe_rsa_with_camellia_256_cbc_sha: CipherSuite = CipherSuite_tls_dhe_rsa_with_camellia_256_cbc_sha; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CipherSuite_tls_dh_anon_with_camellia_256_cbc_sha
 * @constant
 * @type {number}
 */
export
const CipherSuite_tls_dh_anon_with_camellia_256_cbc_sha: CipherSuite = 137; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tls_dh_anon_with_camellia_256_cbc_sha
 * @constant
 * @type {number}
 */
export
const tls_dh_anon_with_camellia_256_cbc_sha: CipherSuite = CipherSuite_tls_dh_anon_with_camellia_256_cbc_sha; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CipherSuite_tls_psk_with_rc4_128_sha
 * @constant
 * @type {number}
 */
export
const CipherSuite_tls_psk_with_rc4_128_sha: CipherSuite = 138; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tls_psk_with_rc4_128_sha
 * @constant
 * @type {number}
 */
export
const tls_psk_with_rc4_128_sha: CipherSuite = CipherSuite_tls_psk_with_rc4_128_sha; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CipherSuite_tls_psk_with_3des_ede_cbc_sha
 * @constant
 * @type {number}
 */
export
const CipherSuite_tls_psk_with_3des_ede_cbc_sha: CipherSuite = 139; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tls_psk_with_3des_ede_cbc_sha
 * @constant
 * @type {number}
 */
export
const tls_psk_with_3des_ede_cbc_sha: CipherSuite = CipherSuite_tls_psk_with_3des_ede_cbc_sha; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CipherSuite_tls_psk_with_aes_128_cbc_sha
 * @constant
 * @type {number}
 */
export
const CipherSuite_tls_psk_with_aes_128_cbc_sha: CipherSuite = 140; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tls_psk_with_aes_128_cbc_sha
 * @constant
 * @type {number}
 */
export
const tls_psk_with_aes_128_cbc_sha: CipherSuite = CipherSuite_tls_psk_with_aes_128_cbc_sha; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CipherSuite_tls_psk_with_aes_256_cbc_sha
 * @constant
 * @type {number}
 */
export
const CipherSuite_tls_psk_with_aes_256_cbc_sha: CipherSuite = 141; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tls_psk_with_aes_256_cbc_sha
 * @constant
 * @type {number}
 */
export
const tls_psk_with_aes_256_cbc_sha: CipherSuite = CipherSuite_tls_psk_with_aes_256_cbc_sha; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CipherSuite_tls_dhe_psk_with_rc4_128_sha
 * @constant
 * @type {number}
 */
export
const CipherSuite_tls_dhe_psk_with_rc4_128_sha: CipherSuite = 142; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tls_dhe_psk_with_rc4_128_sha
 * @constant
 * @type {number}
 */
export
const tls_dhe_psk_with_rc4_128_sha: CipherSuite = CipherSuite_tls_dhe_psk_with_rc4_128_sha; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CipherSuite_tls_dhe_psk_with_3des_ede_cbc_sha
 * @constant
 * @type {number}
 */
export
const CipherSuite_tls_dhe_psk_with_3des_ede_cbc_sha: CipherSuite = 143; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tls_dhe_psk_with_3des_ede_cbc_sha
 * @constant
 * @type {number}
 */
export
const tls_dhe_psk_with_3des_ede_cbc_sha: CipherSuite = CipherSuite_tls_dhe_psk_with_3des_ede_cbc_sha; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CipherSuite_tls_dhe_psk_with_aes_128_cbc_sha
 * @constant
 * @type {number}
 */
export
const CipherSuite_tls_dhe_psk_with_aes_128_cbc_sha: CipherSuite = 144; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tls_dhe_psk_with_aes_128_cbc_sha
 * @constant
 * @type {number}
 */
export
const tls_dhe_psk_with_aes_128_cbc_sha: CipherSuite = CipherSuite_tls_dhe_psk_with_aes_128_cbc_sha; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CipherSuite_tls_dhe_psk_with_aes_256_cbc_sha
 * @constant
 * @type {number}
 */
export
const CipherSuite_tls_dhe_psk_with_aes_256_cbc_sha: CipherSuite = 145; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tls_dhe_psk_with_aes_256_cbc_sha
 * @constant
 * @type {number}
 */
export
const tls_dhe_psk_with_aes_256_cbc_sha: CipherSuite = CipherSuite_tls_dhe_psk_with_aes_256_cbc_sha; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CipherSuite_tls_rsa_psk_with_rc4_128_sha
 * @constant
 * @type {number}
 */
export
const CipherSuite_tls_rsa_psk_with_rc4_128_sha: CipherSuite = 146; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tls_rsa_psk_with_rc4_128_sha
 * @constant
 * @type {number}
 */
export
const tls_rsa_psk_with_rc4_128_sha: CipherSuite = CipherSuite_tls_rsa_psk_with_rc4_128_sha; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CipherSuite_tls_rsa_psk_with_3des_ede_cbc_sha
 * @constant
 * @type {number}
 */
export
const CipherSuite_tls_rsa_psk_with_3des_ede_cbc_sha: CipherSuite = 147; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tls_rsa_psk_with_3des_ede_cbc_sha
 * @constant
 * @type {number}
 */
export
const tls_rsa_psk_with_3des_ede_cbc_sha: CipherSuite = CipherSuite_tls_rsa_psk_with_3des_ede_cbc_sha; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CipherSuite_tls_rsa_psk_with_aes_128_cbc_sha
 * @constant
 * @type {number}
 */
export
const CipherSuite_tls_rsa_psk_with_aes_128_cbc_sha: CipherSuite = 148; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tls_rsa_psk_with_aes_128_cbc_sha
 * @constant
 * @type {number}
 */
export
const tls_rsa_psk_with_aes_128_cbc_sha: CipherSuite = CipherSuite_tls_rsa_psk_with_aes_128_cbc_sha; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CipherSuite_tls_rsa_psk_with_aes_256_cbc_sha
 * @constant
 * @type {number}
 */
export
const CipherSuite_tls_rsa_psk_with_aes_256_cbc_sha: CipherSuite = 149; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tls_rsa_psk_with_aes_256_cbc_sha
 * @constant
 * @type {number}
 */
export
const tls_rsa_psk_with_aes_256_cbc_sha: CipherSuite = CipherSuite_tls_rsa_psk_with_aes_256_cbc_sha; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CipherSuite_tls_rsa_with_seed_cbc_sha
 * @constant
 * @type {number}
 */
export
const CipherSuite_tls_rsa_with_seed_cbc_sha: CipherSuite = 150; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tls_rsa_with_seed_cbc_sha
 * @constant
 * @type {number}
 */
export
const tls_rsa_with_seed_cbc_sha: CipherSuite = CipherSuite_tls_rsa_with_seed_cbc_sha; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CipherSuite_tls_dh_dss_with_seed_cbc_sha
 * @constant
 * @type {number}
 */
export
const CipherSuite_tls_dh_dss_with_seed_cbc_sha: CipherSuite = 151; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tls_dh_dss_with_seed_cbc_sha
 * @constant
 * @type {number}
 */
export
const tls_dh_dss_with_seed_cbc_sha: CipherSuite = CipherSuite_tls_dh_dss_with_seed_cbc_sha; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CipherSuite_tls_dh_rsa_with_seed_cbc_sha
 * @constant
 * @type {number}
 */
export
const CipherSuite_tls_dh_rsa_with_seed_cbc_sha: CipherSuite = 152; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tls_dh_rsa_with_seed_cbc_sha
 * @constant
 * @type {number}
 */
export
const tls_dh_rsa_with_seed_cbc_sha: CipherSuite = CipherSuite_tls_dh_rsa_with_seed_cbc_sha; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CipherSuite_tls_dhe_dss_with_seed_cbc_sha
 * @constant
 * @type {number}
 */
export
const CipherSuite_tls_dhe_dss_with_seed_cbc_sha: CipherSuite = 153; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tls_dhe_dss_with_seed_cbc_sha
 * @constant
 * @type {number}
 */
export
const tls_dhe_dss_with_seed_cbc_sha: CipherSuite = CipherSuite_tls_dhe_dss_with_seed_cbc_sha; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CipherSuite_tls_dhe_rsa_with_seed_cbc_sha
 * @constant
 * @type {number}
 */
export
const CipherSuite_tls_dhe_rsa_with_seed_cbc_sha: CipherSuite = 154; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tls_dhe_rsa_with_seed_cbc_sha
 * @constant
 * @type {number}
 */
export
const tls_dhe_rsa_with_seed_cbc_sha: CipherSuite = CipherSuite_tls_dhe_rsa_with_seed_cbc_sha; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CipherSuite_tls_dh_anon_with_seed_cbc_sha
 * @constant
 * @type {number}
 */
export
const CipherSuite_tls_dh_anon_with_seed_cbc_sha: CipherSuite = 155; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tls_dh_anon_with_seed_cbc_sha
 * @constant
 * @type {number}
 */
export
const tls_dh_anon_with_seed_cbc_sha: CipherSuite = CipherSuite_tls_dh_anon_with_seed_cbc_sha; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CipherSuite_tls_ecdh_ecdsa_with_null_sha
 * @constant
 * @type {number}
 */
export
const CipherSuite_tls_ecdh_ecdsa_with_null_sha: CipherSuite = 49153; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tls_ecdh_ecdsa_with_null_sha
 * @constant
 * @type {number}
 */
export
const tls_ecdh_ecdsa_with_null_sha: CipherSuite = CipherSuite_tls_ecdh_ecdsa_with_null_sha; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CipherSuite_tls_ecdh_ecdsa_with_rc4_128_sha
 * @constant
 * @type {number}
 */
export
const CipherSuite_tls_ecdh_ecdsa_with_rc4_128_sha: CipherSuite = 49154; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tls_ecdh_ecdsa_with_rc4_128_sha
 * @constant
 * @type {number}
 */
export
const tls_ecdh_ecdsa_with_rc4_128_sha: CipherSuite = CipherSuite_tls_ecdh_ecdsa_with_rc4_128_sha; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CipherSuite_tls_ecdh_ecdsa_with_3des_ede_cbc_sha
 * @constant
 * @type {number}
 */
export
const CipherSuite_tls_ecdh_ecdsa_with_3des_ede_cbc_sha: CipherSuite = 49155; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tls_ecdh_ecdsa_with_3des_ede_cbc_sha
 * @constant
 * @type {number}
 */
export
const tls_ecdh_ecdsa_with_3des_ede_cbc_sha: CipherSuite = CipherSuite_tls_ecdh_ecdsa_with_3des_ede_cbc_sha; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CipherSuite_tls_ecdh_ecdsa_with_aes_128_cbc_sha
 * @constant
 * @type {number}
 */
export
const CipherSuite_tls_ecdh_ecdsa_with_aes_128_cbc_sha: CipherSuite = 49156; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tls_ecdh_ecdsa_with_aes_128_cbc_sha
 * @constant
 * @type {number}
 */
export
const tls_ecdh_ecdsa_with_aes_128_cbc_sha: CipherSuite = CipherSuite_tls_ecdh_ecdsa_with_aes_128_cbc_sha; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CipherSuite_tls_ecdh_ecdsa_with_aes_256_cbc_sha
 * @constant
 * @type {number}
 */
export
const CipherSuite_tls_ecdh_ecdsa_with_aes_256_cbc_sha: CipherSuite = 49157; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tls_ecdh_ecdsa_with_aes_256_cbc_sha
 * @constant
 * @type {number}
 */
export
const tls_ecdh_ecdsa_with_aes_256_cbc_sha: CipherSuite = CipherSuite_tls_ecdh_ecdsa_with_aes_256_cbc_sha; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CipherSuite_tls_ecdhe_ecdsa_with_null_sha
 * @constant
 * @type {number}
 */
export
const CipherSuite_tls_ecdhe_ecdsa_with_null_sha: CipherSuite = 49158; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tls_ecdhe_ecdsa_with_null_sha
 * @constant
 * @type {number}
 */
export
const tls_ecdhe_ecdsa_with_null_sha: CipherSuite = CipherSuite_tls_ecdhe_ecdsa_with_null_sha; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CipherSuite_tls_ecdhe_ecdsa_with_rc4_128_sha
 * @constant
 * @type {number}
 */
export
const CipherSuite_tls_ecdhe_ecdsa_with_rc4_128_sha: CipherSuite = 49159; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tls_ecdhe_ecdsa_with_rc4_128_sha
 * @constant
 * @type {number}
 */
export
const tls_ecdhe_ecdsa_with_rc4_128_sha: CipherSuite = CipherSuite_tls_ecdhe_ecdsa_with_rc4_128_sha; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CipherSuite_tls_ecdhe_ecdsa_with_3des_ede_cbc_sha
 * @constant
 * @type {number}
 */
export
const CipherSuite_tls_ecdhe_ecdsa_with_3des_ede_cbc_sha: CipherSuite = 49160; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tls_ecdhe_ecdsa_with_3des_ede_cbc_sha
 * @constant
 * @type {number}
 */
export
const tls_ecdhe_ecdsa_with_3des_ede_cbc_sha: CipherSuite = CipherSuite_tls_ecdhe_ecdsa_with_3des_ede_cbc_sha; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CipherSuite_tls_ecdhe_ecdsa_with_aes_128_cbc_sha
 * @constant
 * @type {number}
 */
export
const CipherSuite_tls_ecdhe_ecdsa_with_aes_128_cbc_sha: CipherSuite = 49161; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tls_ecdhe_ecdsa_with_aes_128_cbc_sha
 * @constant
 * @type {number}
 */
export
const tls_ecdhe_ecdsa_with_aes_128_cbc_sha: CipherSuite = CipherSuite_tls_ecdhe_ecdsa_with_aes_128_cbc_sha; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CipherSuite_tls_ecdhe_ecdsa_with_aes_256_cbc_sha
 * @constant
 * @type {number}
 */
export
const CipherSuite_tls_ecdhe_ecdsa_with_aes_256_cbc_sha: CipherSuite = 49162; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tls_ecdhe_ecdsa_with_aes_256_cbc_sha
 * @constant
 * @type {number}
 */
export
const tls_ecdhe_ecdsa_with_aes_256_cbc_sha: CipherSuite = CipherSuite_tls_ecdhe_ecdsa_with_aes_256_cbc_sha; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CipherSuite_tls_ecdh_rsa_with_null_sha
 * @constant
 * @type {number}
 */
export
const CipherSuite_tls_ecdh_rsa_with_null_sha: CipherSuite = 49163; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tls_ecdh_rsa_with_null_sha
 * @constant
 * @type {number}
 */
export
const tls_ecdh_rsa_with_null_sha: CipherSuite = CipherSuite_tls_ecdh_rsa_with_null_sha; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CipherSuite_tls_ecdh_rsa_with_rc4_128_sha
 * @constant
 * @type {number}
 */
export
const CipherSuite_tls_ecdh_rsa_with_rc4_128_sha: CipherSuite = 49164; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tls_ecdh_rsa_with_rc4_128_sha
 * @constant
 * @type {number}
 */
export
const tls_ecdh_rsa_with_rc4_128_sha: CipherSuite = CipherSuite_tls_ecdh_rsa_with_rc4_128_sha; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CipherSuite_tls_ecdh_rsa_with_3des_ede_cbc_sha
 * @constant
 * @type {number}
 */
export
const CipherSuite_tls_ecdh_rsa_with_3des_ede_cbc_sha: CipherSuite = 49165; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tls_ecdh_rsa_with_3des_ede_cbc_sha
 * @constant
 * @type {number}
 */
export
const tls_ecdh_rsa_with_3des_ede_cbc_sha: CipherSuite = CipherSuite_tls_ecdh_rsa_with_3des_ede_cbc_sha; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CipherSuite_tls_ecdh_rsa_with_aes_128_cbc_sha
 * @constant
 * @type {number}
 */
export
const CipherSuite_tls_ecdh_rsa_with_aes_128_cbc_sha: CipherSuite = 49166; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tls_ecdh_rsa_with_aes_128_cbc_sha
 * @constant
 * @type {number}
 */
export
const tls_ecdh_rsa_with_aes_128_cbc_sha: CipherSuite = CipherSuite_tls_ecdh_rsa_with_aes_128_cbc_sha; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CipherSuite_tls_ecdh_rsa_with_aes_256_cbc_sha
 * @constant
 * @type {number}
 */
export
const CipherSuite_tls_ecdh_rsa_with_aes_256_cbc_sha: CipherSuite = 49167; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tls_ecdh_rsa_with_aes_256_cbc_sha
 * @constant
 * @type {number}
 */
export
const tls_ecdh_rsa_with_aes_256_cbc_sha: CipherSuite = CipherSuite_tls_ecdh_rsa_with_aes_256_cbc_sha; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CipherSuite_tls_ecdhe_rsa_with_null_sha
 * @constant
 * @type {number}
 */
export
const CipherSuite_tls_ecdhe_rsa_with_null_sha: CipherSuite = 49168; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tls_ecdhe_rsa_with_null_sha
 * @constant
 * @type {number}
 */
export
const tls_ecdhe_rsa_with_null_sha: CipherSuite = CipherSuite_tls_ecdhe_rsa_with_null_sha; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CipherSuite_tls_ecdhe_rsa_with_rc4_128_sha
 * @constant
 * @type {number}
 */
export
const CipherSuite_tls_ecdhe_rsa_with_rc4_128_sha: CipherSuite = 49169; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tls_ecdhe_rsa_with_rc4_128_sha
 * @constant
 * @type {number}
 */
export
const tls_ecdhe_rsa_with_rc4_128_sha: CipherSuite = CipherSuite_tls_ecdhe_rsa_with_rc4_128_sha; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CipherSuite_tls_ecdhe_rsa_with_3des_ede_cbc_sha
 * @constant
 * @type {number}
 */
export
const CipherSuite_tls_ecdhe_rsa_with_3des_ede_cbc_sha: CipherSuite = 49170; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tls_ecdhe_rsa_with_3des_ede_cbc_sha
 * @constant
 * @type {number}
 */
export
const tls_ecdhe_rsa_with_3des_ede_cbc_sha: CipherSuite = CipherSuite_tls_ecdhe_rsa_with_3des_ede_cbc_sha; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CipherSuite_tls_ecdhe_rsa_with_aes_128_cbc_sha
 * @constant
 * @type {number}
 */
export
const CipherSuite_tls_ecdhe_rsa_with_aes_128_cbc_sha: CipherSuite = 49171; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tls_ecdhe_rsa_with_aes_128_cbc_sha
 * @constant
 * @type {number}
 */
export
const tls_ecdhe_rsa_with_aes_128_cbc_sha: CipherSuite = CipherSuite_tls_ecdhe_rsa_with_aes_128_cbc_sha; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CipherSuite_tls_ecdhe_rsa_with_aes_256_cbc_sha
 * @constant
 * @type {number}
 */
export
const CipherSuite_tls_ecdhe_rsa_with_aes_256_cbc_sha: CipherSuite = 49172; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tls_ecdhe_rsa_with_aes_256_cbc_sha
 * @constant
 * @type {number}
 */
export
const tls_ecdhe_rsa_with_aes_256_cbc_sha: CipherSuite = CipherSuite_tls_ecdhe_rsa_with_aes_256_cbc_sha; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CipherSuite_tls_ecdh_anon_with_null_sha
 * @constant
 * @type {number}
 */
export
const CipherSuite_tls_ecdh_anon_with_null_sha: CipherSuite = 49173; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tls_ecdh_anon_with_null_sha
 * @constant
 * @type {number}
 */
export
const tls_ecdh_anon_with_null_sha: CipherSuite = CipherSuite_tls_ecdh_anon_with_null_sha; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CipherSuite_tls_ecdh_anon_with_rc4_128_sha
 * @constant
 * @type {number}
 */
export
const CipherSuite_tls_ecdh_anon_with_rc4_128_sha: CipherSuite = 49174; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tls_ecdh_anon_with_rc4_128_sha
 * @constant
 * @type {number}
 */
export
const tls_ecdh_anon_with_rc4_128_sha: CipherSuite = CipherSuite_tls_ecdh_anon_with_rc4_128_sha; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CipherSuite_tls_ecdh_anon_with_3des_ede_cbc_sha
 * @constant
 * @type {number}
 */
export
const CipherSuite_tls_ecdh_anon_with_3des_ede_cbc_sha: CipherSuite = 49175; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tls_ecdh_anon_with_3des_ede_cbc_sha
 * @constant
 * @type {number}
 */
export
const tls_ecdh_anon_with_3des_ede_cbc_sha: CipherSuite = CipherSuite_tls_ecdh_anon_with_3des_ede_cbc_sha; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CipherSuite_tls_ecdh_anon_with_aes_128_cbc_sha
 * @constant
 * @type {number}
 */
export
const CipherSuite_tls_ecdh_anon_with_aes_128_cbc_sha: CipherSuite = 49176; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tls_ecdh_anon_with_aes_128_cbc_sha
 * @constant
 * @type {number}
 */
export
const tls_ecdh_anon_with_aes_128_cbc_sha: CipherSuite = CipherSuite_tls_ecdh_anon_with_aes_128_cbc_sha; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CipherSuite_tls_ecdh_anon_with_aes_256_cbc_sha
 * @constant
 * @type {number}
 */
export
const CipherSuite_tls_ecdh_anon_with_aes_256_cbc_sha: CipherSuite = 49177; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tls_ecdh_anon_with_aes_256_cbc_sha
 * @constant
 * @type {number}
 */
export
const tls_ecdh_anon_with_aes_256_cbc_sha: CipherSuite = CipherSuite_tls_ecdh_anon_with_aes_256_cbc_sha; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_CipherSuite = $._decodeEnumerated;
export const _encode_CipherSuite = $._encodeEnumerated;


/* eslint-enable */
