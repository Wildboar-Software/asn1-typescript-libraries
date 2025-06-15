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
import { ID, _decode_ID, _encode_ID } from '../EDIMSObjectIdentifiers/ID.ta.mjs';
import { id_hat } from '../EDIMSObjectIdentifiers/id-hat.va.mjs';
/**
 * @summary id_hat_edi_application_security_element
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-hat-edi-application-security-element ID ::= {id-hat  11}
 * ```
 *
 * @constant
 */
export const id_hat_edi_application_security_element: ID = new _OID(
    [11],
    id_hat
);

/* eslint-enable */
