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
 * @summary id_sat_edim_synopsis
 * @description
 *
 * OBJECT IDENTIFIER `id_sat_edim_synopsis`. The EDIM Synopsis attribute gives the
 * structure, characteristics, size, and processing status of an EDIM at the granularity
 * of individual body parts. This attribute is created when an EDIM is delivered to the
 * MS. See ITU-T X.435 (1999), §18.8.1.2.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-sat-edim-synopsis ID ::= {id-sat  1}
 * ```
 *
 * @constant
 */
export const id_sat_edim_synopsis: ID = _OID.fromParts([1], id_sat);

/* eslint-enable */
