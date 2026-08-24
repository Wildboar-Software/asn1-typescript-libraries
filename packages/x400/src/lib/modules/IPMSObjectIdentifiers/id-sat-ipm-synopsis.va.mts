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
 * @summary id_sat_ipm_synopsis
 * @description
 *
 * OBJECT IDENTIFIER `id_sat_ipm_synopsis`. The IPM Synopsis attribute gives the
 * structure, characteristics, size, and processing status of an IPM at the granularity
 * of individual body parts. ipm-synopsis ATTRIBUTE ::= { WITH ATTRIBUTE-SYNTAX
 * IPMSynopsis, NUMERATION single-valued, ID id-sat-ipm-synopsis } The synopsis of an IPM
 * comprises a synopsis of each of its body parts. See ITU-T X.420 (1999), §19.6.1.2.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-sat-ipm-synopsis ID ::= {id-sat  1}
 * ```
 *
 * @constant
 */
export const id_sat_ipm_synopsis: ID = _OID.fromParts([1], id_sat);

/* eslint-enable */
