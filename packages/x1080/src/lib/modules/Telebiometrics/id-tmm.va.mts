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
import { id_telebio } from '../Telebiometrics/id-telebio.va.mjs';

/**
 * @summary id_tmm
 * @description
 *
 * Telebiometric multimodal model (TMM) `{id-telebio tmm(1)}`. TMM
 * (X.1081/X.1082) classifies human–environment interactions as IN/OUT
 * modalities. Children: `metric(1)` measures, `scientific(2)` fields
 * of study, `sensory(3)` modalities. X.1080.1 §7.1, Annex A;
 * X.1082 §3.2.10.
 * https://www.itu.int/rec/T-REC-X.1080.1-201805-I
 * https://www.itu.int/rec/T-REC-X.1082-200711-I
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-tmm                    OBJECT IDENTIFIER ::= { id-telebio tmm(1) }
 * ```
 *
 * @constant
 */
export const id_tmm: OBJECT_IDENTIFIER = _OID.fromParts([/* tmm */ 1], id_telebio);

/* eslint-enable */
