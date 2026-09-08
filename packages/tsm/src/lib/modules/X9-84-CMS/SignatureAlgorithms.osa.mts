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
import { ALGORITHM } from "../X9-84-CMS/ALGORITHM.oca.mjs";

import { SignatureAlgorithms_Union0_Intersection0_Element } from "../X9-84-CMS/SignatureAlgorithms-Union0-Intersection0-Element.oa.mjs";

import { SignatureAlgorithms_Union1_Intersection0_Element } from "../X9-84-CMS/SignatureAlgorithms-Union1-Intersection0-Element.oa.mjs";

import { SignatureAlgorithms_Union2_Intersection0_Element } from "../X9-84-CMS/SignatureAlgorithms-Union2-Intersection0-Element.oa.mjs";



/**
 * @summary SignatureAlgorithms
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SignatureAlgorithms ALGORITHM ::= {
 *    { OID dsa-with-sha1         PARMS NoIV } |
 *    { OID ecdsa-with-SHA1       PARMS NoIV } |
 *    { OID sha1WithRSAEncryption PARMS NoIV },
 * 
 *    ...  -- Expect other signature algorithms --
 * }
 * ```
 * 
 * @constant
 * @type {ALGORITHM[]}
 * 
 */
export
const SignatureAlgorithms: (ALGORITHM)[] = [ SignatureAlgorithms_Union0_Intersection0_Element, SignatureAlgorithms_Union1_Intersection0_Element, SignatureAlgorithms_Union2_Intersection0_Element, ];

/* eslint-enable */
