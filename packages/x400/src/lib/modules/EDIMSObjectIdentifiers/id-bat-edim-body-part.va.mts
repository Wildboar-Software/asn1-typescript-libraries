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
 * @summary id_bat_edim_body_part
 * @description
 *
 * OBJECT IDENTIFIER `id_bat_edim_body_part`. An EDIM Body Part contains an EDIM, and
 * optionally, its delivery envelope. It is used for forwarding of EDIMs. See ITU-T X.435
 * (1999), §8.3.2.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-bat-edim-body-part ID ::= {id-bat  3}
 * ```
 *
 * @constant
 */
export const id_bat_edim_body_part: ID = _OID.fromParts([3], id_bat);

/* eslint-enable */
