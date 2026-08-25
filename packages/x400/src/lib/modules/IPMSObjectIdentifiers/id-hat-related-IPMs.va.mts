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
import { id_hat } from '../IPMSObjectIdentifiers/id-hat.va.mjs';
/**
 * @summary id_hat_related_IPMs
 * @description
 *
 * The Related IPMs heading field (D no subfields (i.e., elements)) identifies zero or more
 * IPMs that the authorizing users of the present IPM consider related to it. It comprises
 * a Sequence of sub-fields, each an IPM identifier, one for each IPM. See ITU-T X.420
 * (1999), §7.2.9.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-hat-related-IPMs ID ::= {id-hat  15}
 * ```
 *
 * @constant
 */
export const id_hat_related_IPMs: ID = _OID.fromParts([15], id_hat);

/* eslint-enable */
