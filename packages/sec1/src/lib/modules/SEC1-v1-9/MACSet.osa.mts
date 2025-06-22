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
import { ALGORITHM } from "../SEC1-v1-9/ALGORITHM.oca.mjs";
import { MACSet_Union0_Intersection0_Element } from "../SEC1-v1-9/MACSet-Union0-Intersection0-Element.oa.mjs";
import { MACSet_Union1_Intersection0_Element } from "../SEC1-v1-9/MACSet-Union1-Intersection0-Element.oa.mjs";
import { MACSet_Union2_Intersection0_Element } from "../SEC1-v1-9/MACSet-Union2-Intersection0-Element.oa.mjs";
import { MACSet_Union3_Intersection0_Element } from "../SEC1-v1-9/MACSet-Union3-Intersection0-Element.oa.mjs";
import { MACSet_Union4_Intersection0_Element } from "../SEC1-v1-9/MACSet-Union4-Intersection0-Element.oa.mjs";
/**
 * @summary MACSet
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MACSet ALGORITHM ::= {
 *     { OID hmac-full-ecies PARMS HashAlgorithm} |
 *     { OID hmac-half-ecies PARMS HashAlgorithm} |
 *     { OID cmac-aes128-ecies } |
 *     { OID cmac-aes192-ecies } |
 *     { OID cmac-aes256-ecies } ,
 *     ... -- Future combinations may be added
 * }
 * ```
 *
 * @constant
 * @type {ALGORITHM[]}
 *
 */
export
const MACSet: (ALGORITHM)[] = [ MACSet_Union0_Intersection0_Element, MACSet_Union1_Intersection0_Element, MACSet_Union2_Intersection0_Element, MACSet_Union3_Intersection0_Element, MACSet_Union4_Intersection0_Element, ];

/* eslint-enable */
