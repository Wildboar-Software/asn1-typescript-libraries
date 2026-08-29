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
 * @summary id_audio
 * @description
 *
 * AUDIO modality. Latin *audiō* “I hear”. AUDIO-IN: sound affecting
 * the ear. AUDIO-OUT: vocal or assisted sound. X.1080.1 Annex A;
 * X.1082 intro, §3.5.5–§3.5.6.
 * https://www.itu.int/rec/T-REC-X.1082-200711-I
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-audio                  OBJECT IDENTIFIER ::= {id-modalities audio(3)}
 * ```
 *
 * @constant
 */
export const id_audio: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* audio */ 3],
    id_modalities
);

/* eslint-enable */
