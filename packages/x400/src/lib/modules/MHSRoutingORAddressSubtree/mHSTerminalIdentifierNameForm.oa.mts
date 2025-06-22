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
import { mHSTerminalIdentifier } from '../MHSRoutingORAddressSubtree/mHSTerminalIdentifier.oa.mjs';
import { mHSTerminalIdentifierAttribute } from '../MHSRoutingORAddressSubtree/mHSTerminalIdentifierAttribute.oa.mjs';
import { id_nf_mhs_terminal_identifier } from '../MHSRoutingObjectIdentifiers/id-nf-mhs-terminal-identifier.va.mjs';
import { NAME_FORM } from '@wildboar/x500/src/lib/modules/InformationFramework/NAME-FORM.oca.mjs';
/**
 * @summary mHSTerminalIdentifierNameForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mHSTerminalIdentifierNameForm NAME-FORM ::= {
 *   NAMES            mHSTerminalIdentifier
 *   WITH ATTRIBUTES  {mHSTerminalIdentifierAttribute}
 *   ID               id-nf-mhs-terminal-identifier
 * }
 * ```
 *
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export const mHSTerminalIdentifierNameForm: NAME_FORM = {
    class: 'NAME-FORM',
    decoderFor: {},
    encoderFor: {},
    '&namedObjectClass': mHSTerminalIdentifier /* OBJECT_FIELD_SETTING */,
    '&MandatoryAttributes': [
        mHSTerminalIdentifierAttribute,
    ] /* OBJECT_FIELD_SETTING */,
    '&id': id_nf_mhs_terminal_identifier /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
