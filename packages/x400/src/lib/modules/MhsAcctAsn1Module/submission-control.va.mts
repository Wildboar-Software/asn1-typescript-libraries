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
 * @summary submission_control
 * @description
 *
 * The Submission-control abstract-operation enables the MTS to temporarily limit the
 * submission-port abstract- operations that the MTS-user may invoke, and the messages that
 * the MTS-user may submit to the MTS via the Message-submission abstract-operation. The
 * MTS-user should hold until a later time, rather than abandon, abstract-operations and
 * messages presently forbidden. See ITU-T X.411 (1999), §8.2.1.4.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * submission-control EventTypeId ::= localForm:31
 * ```
 *
 * @constant
 */
export const submission_control: EventTypeId = { localForm: 31 };

/* eslint-enable */
