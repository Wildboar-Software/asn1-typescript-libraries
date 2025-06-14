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
    ProbableCause,
    _decode_ProbableCause,
    _encode_ProbableCause,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/ProbableCause.ta.mjs';
/* START_OF_SYMBOL_DEFINITION connectionEstablishmentError */
/**
 * @summary connectionEstablishmentError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * connectionEstablishmentError ProbableCause ::= localValue:22
 * ```
 *
 * @constant
 */
export const connectionEstablishmentError: ProbableCause = { localValue: 22 };
/* END_OF_SYMBOL_DEFINITION connectionEstablishmentError */

/* eslint-enable */
