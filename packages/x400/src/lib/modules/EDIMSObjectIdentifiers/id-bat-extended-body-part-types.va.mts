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
import { id_bat } from '../EDIMSObjectIdentifiers/id-bat.va.mjs';
/**
 * @summary id_bat_extended_body_part_types
 * @description
 *
 * The types of body parts that may appear in the Body of an EDIM are defined and described
 * below. 8.3.1 EDI Body Part An EDI Body Part carries a single EDI Interchange. See ITU-T
 * X.435 (1999), §8.3.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-bat-extended-body-part-types ID ::= {id-bat  6}
 * ```
 *
 * @constant
 */
export const id_bat_extended_body_part_types: ID = _OID.fromParts([6], id_bat);

/* eslint-enable */
