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
    SpecificIdentifier,
    _decode_SpecificIdentifier,
    _encode_SpecificIdentifier,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/SpecificIdentifier.ta.mjs';
import { moaSpecificProblems } from '../MetricModule/moaSpecificProblems.va.mjs';
/* START_OF_SYMBOL_DEFINITION rejectionRate */
/**
 * @summary rejectionRate
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * rejectionRate SpecificIdentifier ::= oi:{moaSpecificProblems 3}
 * ```
 *
 * @constant
 */
export const rejectionRate: SpecificIdentifier = {
    oi: new _OID([3], moaSpecificProblems),
};
/* END_OF_SYMBOL_DEFINITION rejectionRate */

/* eslint-enable */
