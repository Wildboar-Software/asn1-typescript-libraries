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
import { ecPublicKeyType } from "../SEC1-v1-9/ecPublicKeyType.oa.mjs";
import { ecPublicKeyTypeRestricted } from "../SEC1-v1-9/ecPublicKeyTypeRestricted.oa.mjs";
import { ecPublicKeyTypeSupplemented } from "../SEC1-v1-9/ecPublicKeyTypeSupplemented.oa.mjs";
import { ECPKAlgorithms_Union3_Intersection0_Element } from "../SEC1-v1-9/ECPKAlgorithms-Union3-Intersection0-Element.oa.mjs";
import { ECPKAlgorithms_Union4_Intersection0_Element } from "../SEC1-v1-9/ECPKAlgorithms-Union4-Intersection0-Element.oa.mjs";
/**
 * @summary ECPKAlgorithms
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ECPKAlgorithms ALGORITHM ::= {
 *     ecPublicKeyType |
 *     ecPublicKeyTypeRestricted |
 *     ecPublicKeyTypeSupplemented |
 *     {OID ecdh PARMS ECDomainParameters {{SECGCurveNames}}} |
 *     {OID ecmqv PARMS ECDomainParameters {{SECGCurveNames}}},
 *     ...
 * }
 * ```
 *
 * @constant
 * @type {ALGORITHM[]}
 *
 */
export
const ECPKAlgorithms: (ALGORITHM)[] = [ ecPublicKeyType, ecPublicKeyTypeRestricted, ecPublicKeyTypeSupplemented, ECPKAlgorithms_Union3_Intersection0_Element, ECPKAlgorithms_Union4_Intersection0_Element, ];

/* eslint-enable */
