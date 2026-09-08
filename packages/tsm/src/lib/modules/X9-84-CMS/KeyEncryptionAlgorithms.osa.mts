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

import { KeyEncryptionAlgorithms_Union0_Intersection0_Element } from "../X9-84-CMS/KeyEncryptionAlgorithms-Union0-Intersection0-Element.oa.mjs";



/**
 * @summary KeyEncryptionAlgorithms
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * KeyEncryptionAlgorithms ALGORITHM ::= {
 *    { OID rsaEncryption PARMS NoIV },
 * 
 *    ...  -- expect other key encryption algorithms --
 * }
 * ```
 * 
 * @constant
 * @type {ALGORITHM[]}
 * 
 */
export
const KeyEncryptionAlgorithms: (ALGORITHM)[] = [ KeyEncryptionAlgorithms_Union0_Intersection0_Element, ];

/* eslint-enable */
