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
import { EXTENSION } from '../MTSAbstractService/EXTENSION.oca.mjs';
import { redirection_history } from '../MTSAbstractService/redirection-history.oa.mjs';
import { physical_forwarding_address } from '../MTSAbstractService/physical-forwarding-address.oa.mjs';
import { recipient_certificate } from '../MTSAbstractService/recipient-certificate.oa.mjs';
import { proof_of_delivery } from '../MTSAbstractService/proof-of-delivery.oa.mjs';
import { PrivateExtensions } from '../MTSAbstractService/PrivateExtensions.osa.mjs';
/**
 * @summary PerRecipientReportTransferExtensions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PerRecipientReportTransferExtensions EXTENSION ::= {-- May contain the following extensions, private extensions, and future standardised extensions,
 *    -- at most one instance of each extension type:
 *    redirection-history | physical-forwarding-address | recipient-certificate |
 *    proof-of-delivery | PrivateExtensions, ...}
 * ```
 *
 * @constant
 * @type {EXTENSION[]}
 *
 */
export const PerRecipientReportTransferExtensions: EXTENSION[] = [
    redirection_history,
    physical_forwarding_address,
    recipient_certificate,
    proof_of_delivery,
    ...PrivateExtensions,
];

/* eslint-enable */
