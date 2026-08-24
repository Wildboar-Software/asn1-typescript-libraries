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
 * @summary register
 * @description
 *
 * `register`. The Register abstract-operation enables an MTS-user to make long-term
 * changes to various parameters of the MTS-user held by the MTS concerned with delivery
 * of messages to the MTS-user, and to retrieve the current settings of these parameters.
 * Such changes remain in effect until overridden by re-invocation of the Register
 * abstract-operation. See ITU-T X.411 (1999), §8.4.1.1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * register EventTypeId ::= localForm:26
 * ```
 *
 * @constant
 */
export const register: EventTypeId = { localForm: 26 };

/* eslint-enable */
