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
 * @summary id_video
 * @description
 *
 * VIDEO modality. Latin *videō* “I see”. VIDEO-IN: stimuli that
 * affect the eye. VIDEO-OUT: visible output, behaviour, or signs.
 * X.1080.1 Annex A; X.1082 intro, §3.5.3–§3.5.4.
 * https://www.itu.int/rec/T-REC-X.1082-200711-I
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-video                  OBJECT IDENTIFIER ::= {id-modalities video(2)}
 * ```
 *
 * @constant
 */
export const id_video: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* video */ 2],
    id_modalities
);

/* eslint-enable */
