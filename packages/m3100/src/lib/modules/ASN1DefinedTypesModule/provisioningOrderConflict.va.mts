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
 * @summary provisioningOrderConflict
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * provisioningOrderConflict GeneralErrorCause ::= localValue:5
 * ```
 *
 * @constant
 */
export const provisioningOrderConflict: GeneralErrorCause = { localValue: 5 };

/* eslint-enable */
