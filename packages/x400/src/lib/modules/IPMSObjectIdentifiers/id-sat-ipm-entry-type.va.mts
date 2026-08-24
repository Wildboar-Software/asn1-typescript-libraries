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
import { id_sat } from '../IPMSObjectIdentifiers/id-sat.va.mjs';
/**
 * @summary id_sat_ipm_entry_type
 * @description
 *
 * OBJECT IDENTIFIER `id_sat_ipm_entry_type`. The IPM Entry Type attribute identifies an
 * information object's type. ipm-entry-type ATTRIBUTE ::= { WITH ATTRIBUTE-SYNTAX
 * IPMEntryType, EQUALITY MATCHING-RULE integerMatch, NUMERATION single-valued, ID
 * id-sat-ipm-entry-type } IPMEntryType ::= ENUMERATED { ipm (0), rn (1), nrn (2), on
 * (3)} This attribute may assume any one of the following values: a) ipm: The
 * information object is an IPM. See ITU-T X.420 (1999), §19.6.1.1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-sat-ipm-entry-type ID ::= {id-sat  0}
 * ```
 *
 * @constant
 */
export const id_sat_ipm_entry_type: ID = _OID.fromParts([0], id_sat);

/* eslint-enable */
