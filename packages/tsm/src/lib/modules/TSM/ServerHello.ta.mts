/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { ProtocolVersion, _decode_ProtocolVersion, _encode_ProtocolVersion } from "../TSM/ProtocolVersion.ta.mjs";
// export { ProtocolVersion, _decode_ProtocolVersion, _encode_ProtocolVersion } from "../TSM/ProtocolVersion.ta.mjs";
import { ServerRandom, _decode_ServerRandom, _encode_ServerRandom } from "../TSM/ServerRandom.ta.mjs";
// export { ServerRandom, _decode_ServerRandom, _encode_ServerRandom } from "../TSM/ServerRandom.ta.mjs";
import { SessionID, _decode_SessionID, _encode_SessionID } from "../TSM/SessionID.ta.mjs";
// export { SessionID, _decode_SessionID, _encode_SessionID } from "../TSM/SessionID.ta.mjs";
import { CipherSuite, _enum_for_CipherSuite, CipherSuite_tls_null_with_null_null /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_null_with_null_null /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_rsa_with_null_md5 /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_rsa_with_null_md5 /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_rsa_with_null_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_rsa_with_null_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_rsa_export_with_rc4_40_md5 /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_rsa_export_with_rc4_40_md5 /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_rsa_with_rc4_128_md5 /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_rsa_with_rc4_128_md5 /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_rsa_with_rc4_128_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_rsa_with_rc4_128_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_rsa_export_with_rc2_cbc_40_md5 /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_rsa_export_with_rc2_cbc_40_md5 /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_rsa_with_idea_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_rsa_with_idea_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_rsa_export_with_des40_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_rsa_export_with_des40_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_rsa_with_des_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_rsa_with_des_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_rsa_with_3des_ede_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_rsa_with_3des_ede_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_dh_dss_export_with_des40_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_dh_dss_export_with_des40_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_dh_dss_with_des_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_dh_dss_with_des_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_dh_dss_with_3des_ede_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_dh_dss_with_3des_ede_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_dh_rsa_export_with_des40_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_dh_rsa_export_with_des40_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_dh_rsa_with_des_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_dh_rsa_with_des_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_dh_rsa_with_3des_ede_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_dh_rsa_with_3des_ede_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_dhe_dss_export_with_des40_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_dhe_dss_export_with_des40_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_dhe_dss_with_des_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_dhe_dss_with_des_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_dhe_dss_with_3des_ede_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_dhe_dss_with_3des_ede_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_dhe_rsa_export_with_des40_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_dhe_rsa_export_with_des40_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_dhe_rsa_with_des_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_dhe_rsa_with_des_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_dhe_rsa_with_3des_ede_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_dhe_rsa_with_3des_ede_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_dh_anon_export_rc4_40_md5 /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_dh_anon_export_rc4_40_md5 /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_dh_anon_with_rc4_128_md5 /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_dh_anon_with_rc4_128_md5 /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_dh_anon_export_with_des40_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_dh_anon_export_with_des40_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_dh_anon_with_des_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_dh_anon_with_des_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_dh_anon_with_3des_ede_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_dh_anon_with_3des_ede_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_krb5_with_des_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_krb5_with_des_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_krb5_with_3des_ede_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_krb5_with_3des_ede_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_krb5_with_rc4_128_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_krb5_with_rc4_128_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_krb5_with_idea_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_krb5_with_idea_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_krb5_with_des_cbc_md5 /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_krb5_with_des_cbc_md5 /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_krb5_with_3des_ede_cbc_md5 /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_krb5_with_3des_ede_cbc_md5 /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_krb5_with_rc4_128_md5 /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_krb5_with_rc4_128_md5 /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_krb5_with_idea_cbc_md5 /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_krb5_with_idea_cbc_md5 /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_krb5_export_with_des_cbc_40_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_krb5_export_with_des_cbc_40_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_krb5_export_with_rc2_cbc_40_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_krb5_export_with_rc2_cbc_40_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_krb5_export_with_rc4_40_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_krb5_export_with_rc4_40_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_krb5_export_with_des_cbc_40_md5 /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_krb5_export_with_des_cbc_40_md5 /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_krb5_export_with_rc2_cbc_40_md5 /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_krb5_export_with_rc2_cbc_40_md5 /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_krb5_export_with_rc4_40_md5 /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_krb5_export_with_rc4_40_md5 /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_psk_with_null_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_psk_with_null_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_dhe_psk_with_null_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_dhe_psk_with_null_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_rsa_psk_with_null_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_rsa_psk_with_null_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_rsa_with_aes_128_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_rsa_with_aes_128_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_dh_dss_with_aes_128_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_dh_dss_with_aes_128_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_dh_rsa_with_aes_128_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_dh_rsa_with_aes_128_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_dhe_dss_with_aes_128_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_dhe_dss_with_aes_128_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_dhe_rsa_with_aes_128_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_dhe_rsa_with_aes_128_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_dh_anon_with_aes_128_cnc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_dh_anon_with_aes_128_cnc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_rsa_with_aes_256_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_rsa_with_aes_256_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_dh_dss_with_aes_256_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_dh_dss_with_aes_256_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_dh_rsa_with_aes_256_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_dh_rsa_with_aes_256_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_dhe_dss_with_aes_256_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_dhe_dss_with_aes_256_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_dhe_rsa_with_aes_256_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_dhe_rsa_with_aes_256_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_dh_anon_with_aes_256_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_dh_anon_with_aes_256_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_rsa_with_camellia_128_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_rsa_with_camellia_128_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_dh_dss_with_camellia_128_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_dh_dss_with_camellia_128_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_dh_rsa_with_camellia_128_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_dh_rsa_with_camellia_128_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_dhe_dss_with_camellia_128_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_dhe_dss_with_camellia_128_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_dhe_rsa_with_camellia_128_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_dhe_rsa_with_camellia_128_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_dh_anon_with_camellia_128_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_dh_anon_with_camellia_128_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_rsa_with_camellia_256_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_rsa_with_camellia_256_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_dh_dss_with_camellia_256_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_dh_dss_with_camellia_256_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_dh_rsa_with_camellia_256_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_dh_rsa_with_camellia_256_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_dhe_dss_with_camellia_256_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_dhe_dss_with_camellia_256_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_dhe_rsa_with_camellia_256_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_dhe_rsa_with_camellia_256_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_dh_anon_with_camellia_256_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_dh_anon_with_camellia_256_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_psk_with_rc4_128_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_psk_with_rc4_128_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_psk_with_3des_ede_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_psk_with_3des_ede_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_psk_with_aes_128_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_psk_with_aes_128_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_psk_with_aes_256_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_psk_with_aes_256_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_dhe_psk_with_rc4_128_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_dhe_psk_with_rc4_128_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_dhe_psk_with_3des_ede_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_dhe_psk_with_3des_ede_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_dhe_psk_with_aes_128_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_dhe_psk_with_aes_128_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_dhe_psk_with_aes_256_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_dhe_psk_with_aes_256_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_rsa_psk_with_rc4_128_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_rsa_psk_with_rc4_128_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_rsa_psk_with_3des_ede_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_rsa_psk_with_3des_ede_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_rsa_psk_with_aes_128_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_rsa_psk_with_aes_128_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_rsa_psk_with_aes_256_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_rsa_psk_with_aes_256_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_rsa_with_seed_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_rsa_with_seed_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_dh_dss_with_seed_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_dh_dss_with_seed_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_dh_rsa_with_seed_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_dh_rsa_with_seed_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_dhe_dss_with_seed_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_dhe_dss_with_seed_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_dhe_rsa_with_seed_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_dhe_rsa_with_seed_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_dh_anon_with_seed_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_dh_anon_with_seed_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_ecdh_ecdsa_with_null_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_ecdh_ecdsa_with_null_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_ecdh_ecdsa_with_rc4_128_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_ecdh_ecdsa_with_rc4_128_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_ecdh_ecdsa_with_3des_ede_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_ecdh_ecdsa_with_3des_ede_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_ecdh_ecdsa_with_aes_128_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_ecdh_ecdsa_with_aes_128_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_ecdh_ecdsa_with_aes_256_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_ecdh_ecdsa_with_aes_256_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_ecdhe_ecdsa_with_null_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_ecdhe_ecdsa_with_null_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_ecdhe_ecdsa_with_rc4_128_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_ecdhe_ecdsa_with_rc4_128_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_ecdhe_ecdsa_with_3des_ede_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_ecdhe_ecdsa_with_3des_ede_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_ecdhe_ecdsa_with_aes_128_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_ecdhe_ecdsa_with_aes_128_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_ecdhe_ecdsa_with_aes_256_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_ecdhe_ecdsa_with_aes_256_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_ecdh_rsa_with_null_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_ecdh_rsa_with_null_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_ecdh_rsa_with_rc4_128_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_ecdh_rsa_with_rc4_128_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_ecdh_rsa_with_3des_ede_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_ecdh_rsa_with_3des_ede_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_ecdh_rsa_with_aes_128_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_ecdh_rsa_with_aes_128_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_ecdh_rsa_with_aes_256_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_ecdh_rsa_with_aes_256_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_ecdhe_rsa_with_null_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_ecdhe_rsa_with_null_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_ecdhe_rsa_with_rc4_128_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_ecdhe_rsa_with_rc4_128_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_ecdhe_rsa_with_3des_ede_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_ecdhe_rsa_with_3des_ede_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_ecdhe_rsa_with_aes_128_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_ecdhe_rsa_with_aes_128_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_ecdhe_rsa_with_aes_256_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_ecdhe_rsa_with_aes_256_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_ecdh_anon_with_null_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_ecdh_anon_with_null_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_ecdh_anon_with_rc4_128_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_ecdh_anon_with_rc4_128_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_ecdh_anon_with_3des_ede_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_ecdh_anon_with_3des_ede_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_ecdh_anon_with_aes_128_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_ecdh_anon_with_aes_128_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_ecdh_anon_with_aes_256_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_ecdh_anon_with_aes_256_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_CipherSuite, _encode_CipherSuite } from "../TSM/CipherSuite.ta.mjs";
// export { CipherSuite, _enum_for_CipherSuite, CipherSuite_tls_null_with_null_null /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_null_with_null_null /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_rsa_with_null_md5 /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_rsa_with_null_md5 /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_rsa_with_null_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_rsa_with_null_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_rsa_export_with_rc4_40_md5 /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_rsa_export_with_rc4_40_md5 /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_rsa_with_rc4_128_md5 /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_rsa_with_rc4_128_md5 /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_rsa_with_rc4_128_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_rsa_with_rc4_128_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_rsa_export_with_rc2_cbc_40_md5 /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_rsa_export_with_rc2_cbc_40_md5 /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_rsa_with_idea_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_rsa_with_idea_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_rsa_export_with_des40_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_rsa_export_with_des40_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_rsa_with_des_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_rsa_with_des_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_rsa_with_3des_ede_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_rsa_with_3des_ede_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_dh_dss_export_with_des40_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_dh_dss_export_with_des40_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_dh_dss_with_des_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_dh_dss_with_des_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_dh_dss_with_3des_ede_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_dh_dss_with_3des_ede_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_dh_rsa_export_with_des40_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_dh_rsa_export_with_des40_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_dh_rsa_with_des_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_dh_rsa_with_des_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_dh_rsa_with_3des_ede_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_dh_rsa_with_3des_ede_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_dhe_dss_export_with_des40_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_dhe_dss_export_with_des40_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_dhe_dss_with_des_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_dhe_dss_with_des_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_dhe_dss_with_3des_ede_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_dhe_dss_with_3des_ede_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_dhe_rsa_export_with_des40_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_dhe_rsa_export_with_des40_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_dhe_rsa_with_des_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_dhe_rsa_with_des_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_dhe_rsa_with_3des_ede_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_dhe_rsa_with_3des_ede_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_dh_anon_export_rc4_40_md5 /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_dh_anon_export_rc4_40_md5 /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_dh_anon_with_rc4_128_md5 /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_dh_anon_with_rc4_128_md5 /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_dh_anon_export_with_des40_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_dh_anon_export_with_des40_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_dh_anon_with_des_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_dh_anon_with_des_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_dh_anon_with_3des_ede_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_dh_anon_with_3des_ede_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_krb5_with_des_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_krb5_with_des_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_krb5_with_3des_ede_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_krb5_with_3des_ede_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_krb5_with_rc4_128_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_krb5_with_rc4_128_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_krb5_with_idea_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_krb5_with_idea_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_krb5_with_des_cbc_md5 /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_krb5_with_des_cbc_md5 /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_krb5_with_3des_ede_cbc_md5 /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_krb5_with_3des_ede_cbc_md5 /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_krb5_with_rc4_128_md5 /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_krb5_with_rc4_128_md5 /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_krb5_with_idea_cbc_md5 /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_krb5_with_idea_cbc_md5 /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_krb5_export_with_des_cbc_40_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_krb5_export_with_des_cbc_40_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_krb5_export_with_rc2_cbc_40_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_krb5_export_with_rc2_cbc_40_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_krb5_export_with_rc4_40_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_krb5_export_with_rc4_40_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_krb5_export_with_des_cbc_40_md5 /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_krb5_export_with_des_cbc_40_md5 /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_krb5_export_with_rc2_cbc_40_md5 /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_krb5_export_with_rc2_cbc_40_md5 /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_krb5_export_with_rc4_40_md5 /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_krb5_export_with_rc4_40_md5 /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_psk_with_null_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_psk_with_null_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_dhe_psk_with_null_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_dhe_psk_with_null_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_rsa_psk_with_null_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_rsa_psk_with_null_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_rsa_with_aes_128_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_rsa_with_aes_128_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_dh_dss_with_aes_128_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_dh_dss_with_aes_128_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_dh_rsa_with_aes_128_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_dh_rsa_with_aes_128_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_dhe_dss_with_aes_128_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_dhe_dss_with_aes_128_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_dhe_rsa_with_aes_128_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_dhe_rsa_with_aes_128_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_dh_anon_with_aes_128_cnc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_dh_anon_with_aes_128_cnc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_rsa_with_aes_256_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_rsa_with_aes_256_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_dh_dss_with_aes_256_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_dh_dss_with_aes_256_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_dh_rsa_with_aes_256_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_dh_rsa_with_aes_256_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_dhe_dss_with_aes_256_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_dhe_dss_with_aes_256_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_dhe_rsa_with_aes_256_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_dhe_rsa_with_aes_256_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_dh_anon_with_aes_256_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_dh_anon_with_aes_256_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_rsa_with_camellia_128_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_rsa_with_camellia_128_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_dh_dss_with_camellia_128_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_dh_dss_with_camellia_128_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_dh_rsa_with_camellia_128_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_dh_rsa_with_camellia_128_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_dhe_dss_with_camellia_128_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_dhe_dss_with_camellia_128_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_dhe_rsa_with_camellia_128_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_dhe_rsa_with_camellia_128_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_dh_anon_with_camellia_128_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_dh_anon_with_camellia_128_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_rsa_with_camellia_256_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_rsa_with_camellia_256_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_dh_dss_with_camellia_256_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_dh_dss_with_camellia_256_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_dh_rsa_with_camellia_256_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_dh_rsa_with_camellia_256_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_dhe_dss_with_camellia_256_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_dhe_dss_with_camellia_256_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_dhe_rsa_with_camellia_256_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_dhe_rsa_with_camellia_256_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_dh_anon_with_camellia_256_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_dh_anon_with_camellia_256_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_psk_with_rc4_128_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_psk_with_rc4_128_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_psk_with_3des_ede_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_psk_with_3des_ede_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_psk_with_aes_128_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_psk_with_aes_128_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_psk_with_aes_256_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_psk_with_aes_256_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_dhe_psk_with_rc4_128_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_dhe_psk_with_rc4_128_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_dhe_psk_with_3des_ede_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_dhe_psk_with_3des_ede_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_dhe_psk_with_aes_128_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_dhe_psk_with_aes_128_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_dhe_psk_with_aes_256_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_dhe_psk_with_aes_256_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_rsa_psk_with_rc4_128_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_rsa_psk_with_rc4_128_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_rsa_psk_with_3des_ede_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_rsa_psk_with_3des_ede_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_rsa_psk_with_aes_128_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_rsa_psk_with_aes_128_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_rsa_psk_with_aes_256_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_rsa_psk_with_aes_256_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_rsa_with_seed_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_rsa_with_seed_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_dh_dss_with_seed_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_dh_dss_with_seed_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_dh_rsa_with_seed_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_dh_rsa_with_seed_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_dhe_dss_with_seed_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_dhe_dss_with_seed_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_dhe_rsa_with_seed_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_dhe_rsa_with_seed_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_dh_anon_with_seed_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_dh_anon_with_seed_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_ecdh_ecdsa_with_null_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_ecdh_ecdsa_with_null_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_ecdh_ecdsa_with_rc4_128_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_ecdh_ecdsa_with_rc4_128_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_ecdh_ecdsa_with_3des_ede_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_ecdh_ecdsa_with_3des_ede_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_ecdh_ecdsa_with_aes_128_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_ecdh_ecdsa_with_aes_128_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_ecdh_ecdsa_with_aes_256_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_ecdh_ecdsa_with_aes_256_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_ecdhe_ecdsa_with_null_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_ecdhe_ecdsa_with_null_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_ecdhe_ecdsa_with_rc4_128_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_ecdhe_ecdsa_with_rc4_128_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_ecdhe_ecdsa_with_3des_ede_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_ecdhe_ecdsa_with_3des_ede_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_ecdhe_ecdsa_with_aes_128_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_ecdhe_ecdsa_with_aes_128_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_ecdhe_ecdsa_with_aes_256_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_ecdhe_ecdsa_with_aes_256_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_ecdh_rsa_with_null_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_ecdh_rsa_with_null_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_ecdh_rsa_with_rc4_128_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_ecdh_rsa_with_rc4_128_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_ecdh_rsa_with_3des_ede_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_ecdh_rsa_with_3des_ede_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_ecdh_rsa_with_aes_128_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_ecdh_rsa_with_aes_128_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_ecdh_rsa_with_aes_256_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_ecdh_rsa_with_aes_256_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_ecdhe_rsa_with_null_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_ecdhe_rsa_with_null_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_ecdhe_rsa_with_rc4_128_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_ecdhe_rsa_with_rc4_128_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_ecdhe_rsa_with_3des_ede_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_ecdhe_rsa_with_3des_ede_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_ecdhe_rsa_with_aes_128_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_ecdhe_rsa_with_aes_128_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_ecdhe_rsa_with_aes_256_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_ecdhe_rsa_with_aes_256_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_ecdh_anon_with_null_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_ecdh_anon_with_null_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_ecdh_anon_with_rc4_128_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_ecdh_anon_with_rc4_128_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_ecdh_anon_with_3des_ede_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_ecdh_anon_with_3des_ede_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_ecdh_anon_with_aes_128_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_ecdh_anon_with_aes_128_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, CipherSuite_tls_ecdh_anon_with_aes_256_cbc_sha /* IMPORTED_LONG_ENUMERATION_ITEM */, tls_ecdh_anon_with_aes_256_cbc_sha /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_CipherSuite, _encode_CipherSuite } from "../TSM/CipherSuite.ta.mjs";
import { CompressionMethod, _enum_for_CompressionMethod, CompressionMethod_null /* IMPORTED_LONG_ENUMERATION_ITEM */, null_ /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_CompressionMethod, _encode_CompressionMethod } from "../TSM/CompressionMethod.ta.mjs";
// export { CompressionMethod, _enum_for_CompressionMethod, CompressionMethod_null /* IMPORTED_LONG_ENUMERATION_ITEM */, null_ /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_CompressionMethod, _encode_CompressionMethod } from "../TSM/CompressionMethod.ta.mjs";
import { ExtensionValues, _decode_ExtensionValues, _encode_ExtensionValues } from "../TSM/ExtensionValues.ta.mjs";
// export { ExtensionValues, _decode_ExtensionValues, _encode_ExtensionValues } from "../TSM/ExtensionValues.ta.mjs";


/**
 * @summary ServerHello
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServerHello ::= SEQUENCE {
 * server-version        ProtocolVersion,
 * random            ServerRandom,
 * session-id            SessionID,
 * cipher-suite        CipherSuite,
 * compression-method    CompressionMethod,
 * ...,
 * ...,
 * server-hello-extension-list    ExtensionValues
 * }
 * ```
 * 
 * @class
 */
export
class ServerHello {
    constructor (
        /**
         * @summary `server_version`.
         * @public
         * @readonly
         */
        readonly server_version: ProtocolVersion,
        /**
         * @summary `random`.
         * @public
         * @readonly
         */
        readonly random: ServerRandom,
        /**
         * @summary `session_id`.
         * @public
         * @readonly
         */
        readonly session_id: SessionID,
        /**
         * @summary `cipher_suite`.
         * @public
         * @readonly
         */
        readonly cipher_suite: CipherSuite,
        /**
         * @summary `compression_method`.
         * @public
         * @readonly
         */
        readonly compression_method: CompressionMethod,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = [],
        /**
         * @summary `server_hello_extension_list`.
         * @public
         * @readonly
         */
        readonly server_hello_extension_list: ExtensionValues
    ) {}

    /**
     * @summary Restructures an object into a ServerHello
     * @description
     * 
     * This takes an `object` and converts it to a `ServerHello`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ServerHello`.
     * @returns {ServerHello}
     */
    public static _from_object (_o: { [_K in keyof (ServerHello)]: (ServerHello)[_K] }): ServerHello {
        return new ServerHello(_o.server_version, _o.random, _o.session_id, _o.cipher_suite, _o.compression_method, _o._unrecognizedExtensionsList, _o.server_hello_extension_list);
    }

        /**
         * @summary The enum used as the type of the component `cipher_suite`
         * @public
         * @static
         */

    public static _enum_for_cipher_suite = _enum_for_CipherSuite;        /**
         * @summary The enum used as the type of the component `compression_method`
         * @public
         * @static
         */

    public static _enum_for_compression_method = _enum_for_CompressionMethod;
}

/**
 * @summary The Leading Root Component Types of ServerHello
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ServerHello: $.ComponentSpec[] = [
    new $.ComponentSpec("server-version", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("random", false, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("session-id", false, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("cipher-suite", false, $.hasTag(_TagClass.context, 3), undefined, undefined),
    new $.ComponentSpec("compression-method", false, $.hasTag(_TagClass.context, 4), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of ServerHello
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ServerHello: $.ComponentSpec[] = [
    new $.ComponentSpec("server-hello-extension-list", false, $.hasTag(_TagClass.context, 5), undefined, undefined)
];

/**
 * @summary The Extension Addition Component Types of ServerHello
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ServerHello: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ServerHello: $.ASN1Decoder<ServerHello> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ServerHello
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ServerHello (el: _Element): ServerHello {
    if (!_cached_decoder_for_ServerHello) { _cached_decoder_for_ServerHello = function (el: _Element): ServerHello {
    let server_version!: ProtocolVersion;
    let random!: ServerRandom;
    let session_id!: SessionID;
    let cipher_suite!: CipherSuite;
    let compression_method!: CompressionMethod;
    let _unrecognizedExtensionsList: _Element[] = [];
    let server_hello_extension_list!: ExtensionValues;
    const callbacks: $.DecodingMap = {
        "server-version": (_el: _Element): void => { server_version = _decode_ProtocolVersion(_el); },
        "random": (_el: _Element): void => { random = _decode_ServerRandom(_el); },
        "session-id": (_el: _Element): void => { session_id = _decode_SessionID(_el); },
        "cipher-suite": (_el: _Element): void => { cipher_suite = _decode_CipherSuite(_el); },
        "compression-method": (_el: _Element): void => { compression_method = _decode_CompressionMethod(_el); },
        "server-hello-extension-list": (_el: _Element): void => { server_hello_extension_list = _decode_ExtensionValues(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ServerHello,
        _extension_additions_list_spec_for_ServerHello,
        _root_component_type_list_2_spec_for_ServerHello,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ServerHello(
        server_version,
        random,
        session_id,
        cipher_suite,
        compression_method,
        _unrecognizedExtensionsList,
        server_hello_extension_list
    );
}; }
    return _cached_decoder_for_ServerHello(el);
}

let _cached_encoder_for_ServerHello: $.ASN1Encoder<ServerHello> | null = null;

/**
 * @summary Encodes a(n) ServerHello into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServerHello, encoded as an ASN.1 Element.
 */
export
function _encode_ServerHello (value: ServerHello, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ServerHello) { _cached_encoder_for_ServerHello = function (value: ServerHello, elGetter: $.ASN1Encoder<ServerHello>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ProtocolVersion(value.server_version, $.BER),
            /* REQUIRED   */ _encode_ServerRandom(value.random, $.BER),
            /* REQUIRED   */ _encode_SessionID(value.session_id, $.BER),
            /* REQUIRED   */ _encode_CipherSuite(value.cipher_suite, $.BER),
            /* REQUIRED   */ _encode_CompressionMethod(value.compression_method, $.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
        [
            /* REQUIRED   */ _encode_ExtensionValues(value.server_hello_extension_list, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ServerHello(value, elGetter);
}


/* eslint-enable */
