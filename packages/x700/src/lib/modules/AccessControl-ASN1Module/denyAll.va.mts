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
} from 'asn1-ts';
import {
    DefaultAccess,
    _decode_DefaultAccess,
    _encode_DefaultAccess,
} from '../AccessControl-ASN1Module/DefaultAccess.ta.mjs';
import {
    _enum_for_EnforcementAction,
    _decode_EnforcementAction,
    _encode_EnforcementAction,
} from '../AccessControl-ASN1Module/EnforcementAction.ta.mjs';
/**
 * @summary denyAll
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * denyAll DefaultAccess ::= {}
 * ```
 *
 * @constant
 */
export const denyAll: DefaultAccess = DefaultAccess._from_object({
    action: undefined,
    create: undefined,
    delete_: undefined,
    get_: undefined,
    replace: undefined,
    addMember: undefined,
    removeMember: undefined,
    replaceWithDefault: undefined,
    multipleObjectSelection: undefined,
    filter: undefined,
});

/* eslint-enable */
