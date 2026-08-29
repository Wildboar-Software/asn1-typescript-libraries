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
import {
    EnforcementAction,
    _enum_for_EnforcementAction,
    EnforcementAction_denyWithResponse /* IMPORTED_LONG_ENUMERATION_ITEM */,
    _decode_EnforcementAction,
    _encode_EnforcementAction,
} from '../AccessControl-ASN1Module/EnforcementAction.ta.mjs';
/**
 * @summary deny
 * @description
 *
 * Named value `deny` of `EnforcementAction`:
 * `denyWithResponse`. Default for each `DefaultAccess`
 * component and (after Cor.2) for `enforcementAction` on
 * `rule`. ITU-T Rec. X.741 (04/95)
 * [§A.6](https://www.itu.int/rec/T-REC-X.741-199504-I);
 * Cor.2 (06/98) A.2.3 (`deny`, not `denyAccess`).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * deny EnforcementAction ::= denyWithResponse
 * ```
 *
 * @constant
 */
export const deny: EnforcementAction = EnforcementAction_denyWithResponse;

/* eslint-enable */
