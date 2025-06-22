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
} from 'asn1-ts';
import { m3108PartVPNInformationModel } from '../M3108PartVPNASN1Module/m3108PartVPNInformationModel.va.mjs';

/**
 * @summary m3108PartVPNAttribute
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * m3108PartVPNAttribute OBJECT IDENTIFIER ::= {m3108PartVPNInformationModel attribute(3)}
 * ```
 *
 * @constant
 */
export const m3108PartVPNAttribute: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* attribute */ 3],
    m3108PartVPNInformationModel
);

/* eslint-enable */
