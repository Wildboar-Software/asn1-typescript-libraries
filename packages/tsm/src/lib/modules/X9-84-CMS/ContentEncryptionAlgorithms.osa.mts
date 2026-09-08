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

import { ContentEncryptionAlgorithms_Union0_Intersection0_Element } from "../X9-84-CMS/ContentEncryptionAlgorithms-Union0-Intersection0-Element.oa.mjs";



/**
 * @summary ContentEncryptionAlgorithms
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ContentEncryptionAlgorithms ALGORITHM ::= {
 *    { OID des-ede3-cbc PARMS IV },
 * 
 *    ...  -- Expect other content encryption algorithms --
 * }
 * ```
 * 
 * @constant
 * @type {ALGORITHM[]}
 * 
 */
export
const ContentEncryptionAlgorithms: (ALGORITHM)[] = [ ContentEncryptionAlgorithms_Union0_Intersection0_Element, ];

/* eslint-enable */
