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
import { id_nat } from '../IPMSObjectIdentifiers/id-nat.va.mjs';
/**
 * @summary id_nat_rn_extensions
 * @description
 *
 * OBJECT IDENTIFIER `id_nat_rn_extensions`. The Extensions heading field (D no
 * extensions (i.e., members)) conveys information accommodated by no other heading
 * field. It comprises a Set of zero or more IPMS extensions each conveying one such
 * information item. See ITU-T X.420 (1999), §7.2.17.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-nat-rn-extensions ID ::= {id-nat  13}
 * ```
 *
 * @constant
 */
export const id_nat_rn_extensions: ID = _OID.fromParts([13], id_nat);

/* eslint-enable */
