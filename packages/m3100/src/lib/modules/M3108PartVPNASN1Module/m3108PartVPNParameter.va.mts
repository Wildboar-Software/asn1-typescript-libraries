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
import { m3108PartVPNInformationModel } from '../M3108PartVPNASN1Module/m3108PartVPNInformationModel.va.mjs';

/**
 * @summary m3108PartVPNParameter
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * m3108PartVPNParameter OBJECT IDENTIFIER ::= {m3108PartVPNInformationModel parameter(6)}
 * ```
 *
 * @constant
 */
export const m3108PartVPNParameter: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* parameter */ 6],
    m3108PartVPNInformationModel
);

/* eslint-enable */
