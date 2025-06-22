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
import { OBJECT_CLASS } from '@wildboar/x500/src/lib/modules/InformationFramework/OBJECT-CLASS.oca.mjs';
import {
    _enum_for_ObjectClassKind,
    structural /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_ObjectClassKind,
    _encode_ObjectClassKind,
} from '@wildboar/x500/src/lib/modules/InformationFramework/ObjectClassKind.ta.mjs';
import { top } from '@wildboar/x500/src/lib/modules/InformationFramework/top.oa.mjs';
import { commonName } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/commonName.oa.mjs';
import { enumeratedFlag } from '../MHSRoutingDirectoryObjects/enumeratedFlag.oa.mjs';
import { description } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/description.oa.mjs';
import { connectionType } from '../MHSRoutingDirectoryObjects/connectionType.oa.mjs';
import { groupMTAPassword } from '../MHSRoutingDirectoryObjects/groupMTAPassword.oa.mjs';
import { memberMTA } from '../MHSRoutingDirectoryObjects/memberMTA.oa.mjs';
import { securityContext } from '../MHSRoutingDirectoryObjects/securityContext.oa.mjs';
import { id_oc_connection_group } from '../MHSRoutingObjectIdentifiers/id-oc-connection-group.va.mjs';
/**
 * @summary connectionGroup
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * connectionGroup OBJECT-CLASS ::= {
 *   SUBCLASS OF   {top}
 *   MUST CONTAIN  {commonName | enumeratedFlag}
 *   MAY CONTAIN
 *     {description | connectionType | groupMTAPassword | memberMTA |
 *       securityContext}
 *   ID            id-oc-connection-group
 * }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const connectionGroup: OBJECT_CLASS = {
    class: 'OBJECT-CLASS',
    decoderFor: {},
    encoderFor: {},
    '&Superclasses': [top] /* OBJECT_FIELD_SETTING */,
    '&MandatoryAttributes': [
        commonName,
        enumeratedFlag,
    ] /* OBJECT_FIELD_SETTING */,
    '&OptionalAttributes': [
        description,
        connectionType,
        groupMTAPassword,
        memberMTA,
        securityContext,
    ] /* OBJECT_FIELD_SETTING */,
    '&id': id_oc_connection_group /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&kind': structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
