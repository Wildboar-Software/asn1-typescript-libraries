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
import { mHSTerminalType } from '../MHSRoutingORAddressSubtree/mHSTerminalType.oa.mjs';
import { mHSTerminalTypeAttribute } from '../MHSRoutingORAddressSubtree/mHSTerminalTypeAttribute.oa.mjs';
import { id_nf_mhs_terminal_type } from '../MHSRoutingObjectIdentifiers/id-nf-mhs-terminal-type.va.mjs';
import { NAME_FORM } from '@wildboar/x500/src/lib/modules/InformationFramework/NAME-FORM.oca.mjs';
/**
 * @summary mHSTerminalTypeNameForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mHSTerminalTypeNameForm NAME-FORM ::= {
 *   NAMES            mHSTerminalType
 *   WITH ATTRIBUTES  {mHSTerminalTypeAttribute}
 *   ID               id-nf-mhs-terminal-type
 * }
 * ```
 *
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export const mHSTerminalTypeNameForm: NAME_FORM = {
    class: 'NAME-FORM',
    decoderFor: {},
    encoderFor: {},
    '&namedObjectClass': mHSTerminalType /* OBJECT_FIELD_SETTING */,
    '&MandatoryAttributes': [
        mHSTerminalTypeAttribute,
    ] /* OBJECT_FIELD_SETTING */,
    '&id': id_nf_mhs_terminal_type /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
