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
import {
    ID,
    _decode_ID,
    _encode_ID,
} from '../MHSRoutingObjectIdentifiers/ID.ta.mjs';
import { id_at } from '../MHSRoutingObjectIdentifiers/id-at.va.mjs';
/**
 * @summary id_at_mhs_next_level_complete
 * @description
 *
 * OBJECT IDENTIFIER `id_at_mhs_next_level_complete`. The Next Level Complete attribute
 * type, which is single-valued, indicates by its presence or absence whether the set of
 * immediate subordinate entries of the present entry is complete, i.e. whether a
 * subordinate entry is actually present for every OR-address-element allocated at this
 * point in the OR-address name-space. See ITU-T X.412 (1999), §8.2.3.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-mhs-next-level-complete ID ::= {id-at  19}
 * ```
 *
 * @constant
 */
export const id_at_mhs_next_level_complete: ID = _OID.fromParts([19], id_at);

/* eslint-enable */
