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
