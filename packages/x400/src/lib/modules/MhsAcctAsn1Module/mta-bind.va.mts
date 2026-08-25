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
 * @summary mta_bind
 * @description
 *
 * The MTA-bind enables an MTA to establish an association with another MTA. The MTA-bind
 * establishes the credentials of MTAs to interact, and the application-context and
 * security-context of the association. See ITU-T X.411 (1999), §12.1.1.1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mta-bind EventTypeId ::= localForm:16
 * ```
 *
 * @constant
 */
export const mta_bind: EventTypeId = { localForm: 16 };

/* eslint-enable */
