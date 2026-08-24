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
 * @summary change_credentials
 * @description
 *
 * `change_credentials`. The Change-credentials abstract-operation enables the MTS-user
 * to change the MTS-user’s simple-authentication credentials held by the MTS, or enables
 * the MTS to change the MTS’s simple-authentication credentials held by the MTS-user.
 * The credentials are exchanged during the establishment of an association for the
 * mutual authentication of identity of the MTS-user and the MTS. See ITU-T X.411 (1999),
 * §8.4.1.2.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * change-credentials EventTypeId ::= localForm:4
 * ```
 *
 * @constant
 */
export const change_credentials: EventTypeId = { localForm: 4 };

/* eslint-enable */
