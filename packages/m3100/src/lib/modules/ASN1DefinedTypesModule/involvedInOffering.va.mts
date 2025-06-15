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
} from 'asn1-ts';
import {
    GeneralErrorCause,
    _decode_GeneralErrorCause,
    _encode_GeneralErrorCause,
} from '../ASN1DefinedTypesModule/GeneralErrorCause.ta.mjs';

/**
 * @summary involvedInOffering
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * involvedInOffering GeneralErrorCause ::= localValue:3
 * ```
 *
 * @constant
 */
export const involvedInOffering: GeneralErrorCause = { localValue: 3 };

/* eslint-enable */
