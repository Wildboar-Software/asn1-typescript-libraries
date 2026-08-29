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
 * Default value of `defaultAccess`: empty sequence, so every
 * operation type takes DEFAULT `deny`
 * (`denyWithResponse`). ITU-T Rec. X.741 (04/95)
 * [§A.5.8](https://www.itu.int/rec/T-REC-X.741-199504-I),
 * A.2.2.
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
