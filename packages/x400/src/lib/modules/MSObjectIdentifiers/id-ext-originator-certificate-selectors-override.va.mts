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
} from 'asn1-ts';
import { ID, _decode_ID, _encode_ID } from '../MHSObjectIdentifiers/ID.ta.mjs';
import { id_ext } from '../MSObjectIdentifiers/id-ext.va.mjs';
/* START_OF_SYMBOL_DEFINITION id_ext_originator_certificate_selectors_override */
/**
 * @summary id_ext_originator_certificate_selectors_override
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ext-originator-certificate-selectors-override ID ::= {id-ext  2}
 * ```
 *
 * @constant
 */
export const id_ext_originator_certificate_selectors_override: ID = new _OID(
    [2],
    id_ext
);
/* END_OF_SYMBOL_DEFINITION id_ext_originator_certificate_selectors_override */

/* eslint-enable */
