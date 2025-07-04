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
    ProbableCause,
    _decode_ProbableCause,
    _encode_ProbableCause,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/ProbableCause.ta.mjs';

/**
 * @summary equipmentIdentifierDuplication
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * equipmentIdentifierDuplication ProbableCause ::= localValue:53
 * ```
 *
 * @constant
 */
export const equipmentIdentifierDuplication: ProbableCause = { localValue: 53 };

/* eslint-enable */
