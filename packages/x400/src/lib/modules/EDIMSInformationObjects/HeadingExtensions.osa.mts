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
