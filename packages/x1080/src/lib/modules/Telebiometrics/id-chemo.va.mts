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
 * @summary id_chemo
 * @description
 *
 * CHEMO modality. Medieval Latin *chemia*. CHEMO-IN: taste/smell
 * (and lethality). CHEMO-OUT: chemical emissions (sniffer dogs,
 * chips, etc.). X.1080.1 Annex A; X.1082 intro, §3.5.7–§3.5.8.
 * https://www.itu.int/rec/T-REC-X.1082-200711-I
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-chemo                  OBJECT IDENTIFIER ::= {id-modalities chemo(4)}
 * ```
 *
 * @constant
 */
export const id_chemo: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* chemo */ 4],
    id_modalities
);

/* eslint-enable */
