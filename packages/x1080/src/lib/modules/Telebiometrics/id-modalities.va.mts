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
 * @summary id_modalities
 * @description
 *
 * TMM sensory layer `{id-tmm sensory(3)}`. Children: tango(1),
 * video(2), audio(3), chemo(4), radio(5), calor(6), electro(7).
 * X.1080.1 Annex A; X.1082 intro, §3.5. Amd.2 adds CALOR as the
 * sixth (derived) modality.
 * https://www.itu.int/rec/T-REC-X.1080.1-201805-I
 * https://www.itu.int/rec/T-REC-X.1082-200711-I
 * https://www.itu.int/rec/T-REC-X.1082-200711-I!Amd2
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-modalities             OBJECT IDENTIFIER ::= {id-tmm sensory(3)}
 * ```
 *
 * @constant
 */
export const id_modalities: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* sensory */ 3],
    id_tmm
);

/* eslint-enable */
