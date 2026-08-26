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
} from "@wildboar/asn1";
import { type KEY_WRAP } from "../AlgorithmInformation-2009/KEY-WRAP.oca.mjs";
import { kwa_aes128_wrap } from "../CMSAesRsaesOaep-2009/kwa-aes128-wrap.oa.mjs";
import { kwa_aes256_wrap } from "../CMSAesRsaesOaep-2009/kwa-aes256-wrap.oa.mjs";

/**
 * @summary KeyWrapAlgorithms
 * @description
 *
 * `KEY-WRAP` object set used in X25519/X448 S/MIME capabilities
 * ([RFC 8410 §9](https://datatracker.ietf.org/doc/html/rfc8410#section-9)).
 * Contains `kwa-aes128-wrap` and `kwa-aes256-wrap` (from
 * `CMSAesRsaesOaep-2009`), and is extensible (`...`).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * KeyWrapAlgorithms KEY-WRAP ::= {
 *     kwa-aes128-wrap | kwa-aes256-wrap,
 *     ...
 * }
 * ```
 * 
 * @constant
 * @type {KEY_WRAP[]}
 * 
 */
export
const KeyWrapAlgorithms: (KEY_WRAP)[] = [ kwa_aes128_wrap, kwa_aes256_wrap, ];

/* eslint-enable */
