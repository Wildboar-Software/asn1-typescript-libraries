/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import { id_tmm } from '../Telebiometrics/id-tmm.va.mjs';

/**
 * @summary id_measures
 * @description
 *
 * TMM metric layer `{id-tmm metric(1)}`. Children: quantities(1),
 * units(2), symbols(3), conditions(4), methods(5). Matches X.1082
 * §3.2.11 (SI units for an IN or OUT interaction). X.1080.1 Annex A.
 * https://www.itu.int/rec/T-REC-X.1080.1-201805-I
 * https://www.itu.int/rec/T-REC-X.1082-200711-I
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-measures               OBJECT IDENTIFIER ::= {id-tmm metric(1)}
 * ```
 *
 * @constant
 */
export const id_measures: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* metric */ 1],
    id_tmm
);

/* eslint-enable */
