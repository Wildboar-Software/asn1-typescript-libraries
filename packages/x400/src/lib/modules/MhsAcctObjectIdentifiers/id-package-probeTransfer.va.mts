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
 * @summary id_package_probeTransfer
 * @description
 *
 * OBJECT IDENTIFIER `id_package_probeTransfer`. The Probe-transfer abstract-operation
 * enables an MTA to transfer a probe to another MTA. 12.2.1.2.1 Arguments Table 31 lists
 * the arguments of the Probe-transfer abstract-operation, and for each argument
 * qualifies its presence and identifies the clause in which the argument is defined. See
 * ITU-T X.411 (1999), §12.2.1.2.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-package-probeTransfer ID ::= {id-package  40}
 * ```
 *
 * @constant
 */
export const id_package_probeTransfer: ID = _OID.fromParts([40], id_package);

/* eslint-enable */
