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
 * @summary id_package_messageSubmission
 * @description
 *
 * OBJECT IDENTIFIER `id_package_messageSubmission`. The Message-submission
 * abstract-operation enables an MTS-user to submit a message to the MTS for transfer and
 * delivery to one or more recipient MTS-users. The successful completion of the
 * abstract-operation signifies that the MTS has accepted responsibility for the message
 * (but not that it has yet delivered it to its intended recipients). See ITU-T X.411
 * (1999), §8.2.1.1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-package-messageSubmission ID ::= {id-package  28}
 * ```
 *
 * @constant
 */
export const id_package_messageSubmission: ID = _OID.fromParts([28], id_package);

/* eslint-enable */
