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
 * @summary register_ms
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * register-ms EventTypeId ::= localForm:27
 * ```
 *
 * @constant
 */
export const register_ms: EventTypeId = { localForm: 27 };

/* eslint-enable */
