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
} from "@wildboar/asn1";
import { arfProposedRepairAction } from "../Attribute-ASN1Module/arfProposedRepairAction.va.mjs";
/**
 * @summary noActionRequired
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * noActionRequired OBJECT IDENTIFIER ::= {arfProposedRepairAction 1}
 * ```
 * 
 * @constant
 */
export
const noActionRequired: OBJECT_IDENTIFIER = _OID.fromParts([
    1,
], arfProposedRepairAction);

/* eslint-enable */
