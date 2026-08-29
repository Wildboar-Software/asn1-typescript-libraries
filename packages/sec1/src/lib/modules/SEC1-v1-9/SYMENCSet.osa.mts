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
import { type ALGORITHM } from "../SEC1-v1-9/ALGORITHM.oca.mjs";
import { SYMENCSet_Union0_Intersection0_Element } from "../SEC1-v1-9/SYMENCSet-Union0-Intersection0-Element.oa.mjs";
import { SYMENCSet_Union1_Intersection0_Element } from "../SEC1-v1-9/SYMENCSet-Union1-Intersection0-Element.oa.mjs";
import { SYMENCSet_Union2_Intersection0_Element } from "../SEC1-v1-9/SYMENCSet-Union2-Intersection0-Element.oa.mjs";
import { SYMENCSet_Union3_Intersection0_Element } from "../SEC1-v1-9/SYMENCSet-Union3-Intersection0-Element.oa.mjs";
import { SYMENCSet_Union4_Intersection0_Element } from "../SEC1-v1-9/SYMENCSet-Union4-Intersection0-Element.oa.mjs";
import { SYMENCSet_Union5_Intersection0_Element } from "../SEC1-v1-9/SYMENCSet-Union5-Intersection0-Element.oa.mjs";
import { SYMENCSet_Union6_Intersection0_Element } from "../SEC1-v1-9/SYMENCSet-Union6-Intersection0-Element.oa.mjs";
import { SYMENCSet_Union7_Intersection0_Element } from "../SEC1-v1-9/SYMENCSet-Union7-Intersection0-Element.oa.mjs";
/**
 * @summary SYMENCSet
 * @description
 *
 * Symmetric ciphers for ECIES only: XOR, 3-key TDES-CBC (24-octet key, IV 0),
 * AES-128/192/256 in CBC or CTR (IV/ICB 0, not sent). [SEC 1 v2](https://www.secg.org/sec1-v2.pdf) §3.8, §C.5.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SYMENCSet ALGORITHM ::= {
 *     { OID xor-in-ecies } |
 *     { OID tdes-cbc-in-ecies } |
 *     { OID aes128-cbc-in-ecies } |
 *     { OID aes192-cbc-in-ecies } |
 *     { OID aes256-cbc-in-ecies } |
 *     { OID aes128-ctr-in-ecies } |
 *     { OID aes192-ctr-in-ecies } |
 *     { OID aes256-ctr-in-ecies } ,
 *     ... -- Future combinations may be added
 * }
 * ```
 *
 * @constant
 * @type {ALGORITHM[]}
 *
 */
export
const SYMENCSet: (ALGORITHM)[] = [ SYMENCSet_Union0_Intersection0_Element, SYMENCSet_Union1_Intersection0_Element, SYMENCSet_Union2_Intersection0_Element, SYMENCSet_Union3_Intersection0_Element, SYMENCSet_Union4_Intersection0_Element, SYMENCSet_Union5_Intersection0_Element, SYMENCSet_Union6_Intersection0_Element, SYMENCSet_Union7_Intersection0_Element, ];

/* eslint-enable */
