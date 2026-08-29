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
 * @summary repairActionRequired
 * @description
 * 
 * `{arfProposedRepairAction 2}`. CCITT applications only; use subject to ITU-T
 * Rec. X.733 | ISO/IEC 10164-4 §8.1.2.12. ITU-T Rec. X.721 (02/92) §14.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * repairActionRequired OBJECT IDENTIFIER ::= {arfProposedRepairAction 2}
 * ```
 * 
 * @constant
 */
export
const repairActionRequired: OBJECT_IDENTIFIER = _OID.fromParts([
    2,
], arfProposedRepairAction);

/* eslint-enable */
