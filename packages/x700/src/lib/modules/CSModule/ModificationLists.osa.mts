/* eslint-disable */
import {
    TYPE_IDENTIFIER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';

/**
 * @summary ModificationLists
 * @description
 *
 * Dynamically extensible TYPE-IDENTIFIER object set for
 * `ModificationList` `attributeId` / `attributeValue` pairs.
 * Empty here; implementations add members for the attributes a
 * CMIS SET script may modify. Rec A.8 uses `ANY DEFINED BY
 * attributeId` rather than naming this set. ITU-T Rec. X.753
 * (10/97)
 * [A.8](https://www.itu.int/rec/T-REC-X.753-199710-I), D.9.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ModificationLists TYPE-IDENTIFIER ::= {... -- dynamically extensible attributeValue object set --}
 * ```
 *
 * @constant
 * @type {TYPE_IDENTIFIER[]}
 *
 */
export const ModificationLists: TYPE_IDENTIFIER[] = [];

/* eslint-enable */
