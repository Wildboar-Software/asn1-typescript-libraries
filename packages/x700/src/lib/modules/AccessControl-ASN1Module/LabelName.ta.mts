/* eslint-disable */
import {
    INTEGER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary LabelName
 * @description
 *
 * Integer name of a security-label managed object
 * (`assignedLabels`, `attributeLabel`, `instanceLabel`,
 * `classLabel`). Used for naming and for ORDERING among
 * labels of the same class (lexicographic precedence when
 * assigning a unique label to a target). ITU-T Rec. X.741
 * (04/95)
 * [§A.5.17](https://www.itu.int/rec/T-REC-X.741-199504-I),
 * §8.1.11.1.1, A.2.11.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LabelName  ::=  INTEGER
 * ```
 */
export type LabelName = INTEGER;


export const _decode_LabelName = $._decodeInteger;


export const _encode_LabelName = $._encodeInteger;


/* eslint-enable */
