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
import { OBJECT_CLASS } from '@wildboar/x500/src/lib/modules/InformationFramework/OBJECT-CLASS.oca.mjs';
import {
    _enum_for_ObjectClassKind,
    structural /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_ObjectClassKind,
    _encode_ObjectClassKind,
} from '@wildboar/x500/src/lib/modules/InformationFramework/ObjectClassKind.ta.mjs';
import { oRAddressElement } from '../MHSRoutingORAddressSubtree/oRAddressElement.oa.mjs';
import { mHSTerminalTypeAttribute } from '../MHSRoutingORAddressSubtree/mHSTerminalTypeAttribute.oa.mjs';
import { id_oc_mhs_terminal_type } from '../MHSRoutingObjectIdentifiers/id-oc-mhs-terminal-type.va.mjs';
/* START_OF_SYMBOL_DEFINITION mHSTerminalType */
/**
 * @summary mHSTerminalType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mHSTerminalType OBJECT-CLASS ::= {
 *   SUBCLASS OF   {oRAddressElement}
 *   KIND          structural
 *   MUST CONTAIN  {mHSTerminalTypeAttribute}
 *   ID            id-oc-mhs-terminal-type
 * }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const mHSTerminalType: OBJECT_CLASS = {
    class: 'OBJECT-CLASS',
    decoderFor: {},
    encoderFor: {},
    '&Superclasses': [oRAddressElement] /* OBJECT_FIELD_SETTING */,
    '&kind': structural /* OBJECT_FIELD_SETTING */,
    '&MandatoryAttributes': [
        mHSTerminalTypeAttribute,
    ] /* OBJECT_FIELD_SETTING */,
    '&id': id_oc_mhs_terminal_type /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION mHSTerminalType */

/* eslint-enable */
