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
import { type OPERATION_PACKAGE } from '@wildboar/rose';
/**
 * @summary PORT
 * @description
 *
 * Information object class `PORT`. The Message-submission abstract-operation enables an
 * MTS-user to submit a message to the MTS for transfer and delivery to one or more
 * recipient MTS-users. The Probe-submission abstract-operation enables an MTS-user to
 * submit a probe in order to determine whether or not a message could be transferred and
 * delivered to one or more recipient MTS-users if it were to be submitted. See ITU-T
 * X.411 (1999), §7.2.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PORT ::= OPERATION-PACKAGE
 * ```
 *
 * @interface
 */
export type PORT = OPERATION_PACKAGE;

/* eslint-enable */
