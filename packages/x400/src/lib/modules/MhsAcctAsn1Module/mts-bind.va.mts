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
 * @summary mts_bind
 * @description
 *
 * The MTS-bind enables an MTS-user to establish an association with the MTS, or the MTS to
 * establish an association with an MTS-user. The MTS-bind establishes the credentials of
 * an MTS-user and the MTS to interact, and the application-context and security-context of
 * the association. See ITU-T X.411 (1999), §8.1.1.1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mts-bind EventTypeId ::= localForm:18
 * ```
 *
 * @constant
 */
export const mts_bind: EventTypeId = { localForm: 18 };

/* eslint-enable */
