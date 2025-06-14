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
/* START_OF_SYMBOL_DEFINITION m3108PartVPNNameBinding */
/**
 * @summary m3108PartVPNNameBinding
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * m3108PartVPNNameBinding OBJECT IDENTIFIER ::= {m3108PartVPNInformationModel nameBinding(4)}
 * ```
 *
 * @constant
 */
export const m3108PartVPNNameBinding: OBJECT_IDENTIFIER = new _OID(
    [/* nameBinding */ 4],
    m3108PartVPNInformationModel
);
/* END_OF_SYMBOL_DEFINITION m3108PartVPNNameBinding */

/* eslint-enable */
