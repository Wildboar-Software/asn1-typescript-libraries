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
} from '@wildboar/asn1';
import { ID, _decode_ID, _encode_ID } from '../IPMSObjectIdentifiers/ID.ta.mjs';
import { id_cat } from '../IPMSObjectIdentifiers/id-cat.va.mjs';
/**
 * @summary id_cat_subject_ipm
 * @description
 *
 * The Subject IPM common field (M) contains the value of the This IPM field of the subject
 * IPM. It comprises an IPM identifier. See ITU-T X.420 (1999), §8.1.1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-cat-subject-ipm ID ::= {id-cat  17}
 * ```
 *
 * @constant
 */
export const id_cat_subject_ipm: ID = _OID.fromParts([17], id_cat);

/* eslint-enable */
