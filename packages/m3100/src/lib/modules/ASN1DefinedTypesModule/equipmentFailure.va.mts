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
 * @summary equipmentFailure
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * equipmentFailure GeneralErrorCause ::= localValue:6
 * ```
 *
 * @constant
 */
export const equipmentFailure: GeneralErrorCause = { localValue: 6 };

/* eslint-enable */
