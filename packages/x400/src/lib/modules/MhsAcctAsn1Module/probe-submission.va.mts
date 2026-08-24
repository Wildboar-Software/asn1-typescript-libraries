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
import {
    EventTypeId,
    _decode_EventTypeId,
    _encode_EventTypeId,
} from '@wildboar/cmip';
/**
 * @summary probe_submission
 * @description
 *
 * `probe_submission`. The Probe-submission abstract-operation enables an MTS-user to
 * submit a probe in order to determine whether or not a message (the subject-message)
 * could be transferred and delivered to one or more recipient MTS-users if it were to be
 * submitted. Success of a probe does not guarantee that a subsequently submitted message
 * can actually be delivered, but rather that, currently, the recipient is valid and the
 * message… See ITU-T X.411 (1999), §8.2.1.2.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * probe-submission EventTypeId ::= localForm:23
 * ```
 *
 * @constant
 */
export const probe_submission: EventTypeId = { localForm: 23 };

/* eslint-enable */
