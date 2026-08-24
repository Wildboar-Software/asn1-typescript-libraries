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
 * @summary id_package_probeSubmission
 * @description
 *
 * OBJECT IDENTIFIER `id_package_probeSubmission`. The Probe-submission
 * abstract-operation enables an MTS-user to submit a probe in order to determine whether
 * or not a message (the subject-message) could be transferred and delivered to one or
 * more recipient MTS-users if it were to be submitted. Success of a probe does not
 * guarantee that a subsequently submitted message can actually be delivered, but rather
 * that, currently, the recipient is valid and the message… See ITU-T X.411 (1999),
 * §8.2.1.2.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-package-probeSubmission ID ::= {id-package  38}
 * ```
 *
 * @constant
 */
export const id_package_probeSubmission: ID = _OID.fromParts([38], id_package);

/* eslint-enable */
