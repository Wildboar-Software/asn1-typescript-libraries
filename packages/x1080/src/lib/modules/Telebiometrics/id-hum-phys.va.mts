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
 * @summary id_hum_phys
 * @description
 *
 * Human-physiology arc `{id-telebio human-phy(2)}` for X.1082
 * quantities. Amd.1 assigns `{2 42 2}` the OID-IRI
 * `"/Telebiometrics/Human_Physiology"` (and under that, Symbols at
 * `{2 42 2 1}` — not this module's TMM `id-symbols`). X.1080.1
 * §7.1, Annex A; X.1082 Amd.1 §12.2.
 * https://www.itu.int/rec/T-REC-X.1080.1-201805-I
 * https://www.itu.int/rec/T-REC-X.1082-200711-I!Amd1
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-hum-phys               OBJECT IDENTIFIER ::= { id-telebio human-phy(2) }
 * ```
 *
 * @constant
 */
export const id_hum_phys: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* human-phy */ 2],
    id_telebio
);

/* eslint-enable */
