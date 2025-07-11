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
 * @summary m3108PartVPNNotification
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * m3108PartVPNNotification OBJECT IDENTIFIER ::= {m3108PartVPNInformationModel notification(5)}
 * ```
 *
 * @constant
 */
export const m3108PartVPNNotification: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* notification */ 5],
    m3108PartVPNInformationModel
);

/* eslint-enable */
