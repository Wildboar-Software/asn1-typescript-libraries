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
import { id_modalities } from '../Telebiometrics/id-modalities.va.mjs';

/**
 * @summary id_calor
 * @description
 *
 * CALOR derived modality. Latin *calor* “warmth”. CALOR-IN: heat
 * into the body (radiation, conduction, convection). CALOR-OUT:
 * heat from the body (incl. evaporation). X.1082 Amd.2 adds CALOR
 * as the “sixth modality”. X.1080.1 Annex A; X.1082 intro,
 * §3.5.11–§3.5.12.
 * https://www.itu.int/rec/T-REC-X.1082-200711-I
 * https://www.itu.int/rec/T-REC-X.1082-200711-I!Amd2
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-calor                  OBJECT IDENTIFIER ::= {id-modalities calor(6)}
 * ```
 *
 * @constant
 */
export const id_calor: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* calor */ 6],
    id_modalities
);

/* eslint-enable */
