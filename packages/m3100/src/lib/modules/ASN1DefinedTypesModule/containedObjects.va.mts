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
    GeneralErrorCause,
    _decode_GeneralErrorCause,
    _encode_GeneralErrorCause,
} from '../ASN1DefinedTypesModule/GeneralErrorCause.ta.mjs';

/**
 * @summary containedObjects
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * containedObjects GeneralErrorCause ::= localValue:8
 * ```
 *
 * @constant
 */
export const containedObjects: GeneralErrorCause = { localValue: 8 };

/* eslint-enable */
