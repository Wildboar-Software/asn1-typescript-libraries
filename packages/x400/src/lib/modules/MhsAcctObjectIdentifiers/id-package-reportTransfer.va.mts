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
import { ID, _decode_ID, _encode_ID } from '../MhsAcctObjectIdentifiers/ID.ta.mjs';
import { id_package } from '../MhsAcctObjectIdentifiers/id-package.va.mjs';
/**
 * @summary id_package_reportTransfer
 * @description
 *
 * OBJECT IDENTIFIER `id_package_reportTransfer`. The Report-transfer abstract-operation
 * enables an MTA to transfer a report to another MTA. Table 31 – Probe-transfer
 * Arguments Argument Presence Clause Relaying Arguments Probe-identifier M 12.2.1.2.1.1
 * Per-domain-bilateral-information C 12.2.1.1.1.2 Trace-information M 12.2.1.1.1.3
 * Internal-trace-information C 12.2.1.1.1.4 Originator Argument Originator-name M
 * 8.2.1.1.1.1 Recipient Arguments Recipient-name M… See ITU-T X.411 (1999), §12.2.1.3.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-package-reportTransfer ID ::= {id-package  46}
 * ```
 *
 * @constant
 */
export const id_package_reportTransfer: ID = _OID.fromParts([46], id_package);

/* eslint-enable */
