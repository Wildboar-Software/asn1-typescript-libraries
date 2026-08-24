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
} from '@wildboar/asn1';
import { type EDIM_EXTENSION } from '../EDIMSInformationObjects/EDIM-EXTENSION.oca.mjs';
import { primary_body_part_compression_indication } from '../EDIMSInformationObjects/primary-body-part-compression-indication.oa.mjs';
/**
 * @summary HeadingExtensions
 * @description
 *
 * Information object set `HeadingExtensions`. A mechanism is provided which allows for
 * future extensions to this Recommendation | International Standard. ExtensionField ::=
 * SEQUENCE { type [0] EDIM-EXTENSION.&id, criticality [1] Criticality DEFAULT FALSE,
 * value [2] EDIM-EXTENSION.&Type DEFAULT NULL:NULL } Each Extension has the following
 * components: a) Type : Identifies the semantics and restricts the abstract syntax of
 * the Value component. See ITU-T X.435 (1999), §7.2.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * HeadingExtensions EDIM-EXTENSION ::= {primary-body-part-compression-indication, ...}
 * ```
 *
 * @constant
 * @type {EDIM_EXTENSION[]}
 *
 */
export const HeadingExtensions: EDIM_EXTENSION[] = [
    primary_body_part_compression_indication,
];

/* eslint-enable */
