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
import { ID, _decode_ID, _encode_ID } from '../EDIMSObjectIdentifiers/ID.ta.mjs';
import { id_sat } from '../EDIMSObjectIdentifiers/id-sat.va.mjs';
/**
 * @summary id_sat_edims_entry_type
 * @description
 *
 * OBJECT IDENTIFIER `id_sat_edims_entry_type`. The EDIMS Entry Type attribute identifies
 * an information object’s type. edims-entry-type ATTRIBUTE ::= { WITH ATTRIBUTE-SYNTAX
 * EDIMSEntryType, EQUALITY MATCHING-RULE integerMatch, NUMERATION single-valued, ID
 * id-sat-edims-entry-type } EDIMSEntryType ::= ENUMERATED { edim (0), pn (1), nn (2), fn
 * (3) } Attribute Single/ multi valued Support level by EDI-MS Presence in delivered
 * EDIM Presence in submitted EDIM… See ITU-T X.435 (1999), §18.8.1.1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-sat-edims-entry-type ID ::= {id-sat  0}
 * ```
 *
 * @constant
 */
export const id_sat_edims_entry_type: ID = _OID.fromParts([0], id_sat);

/* eslint-enable */
