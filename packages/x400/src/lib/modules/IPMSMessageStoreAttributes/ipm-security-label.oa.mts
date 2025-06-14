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
    _decode_AttributeType,
    _encode_AttributeType,
} from '../MSAbstractService/AttributeType.ta.mjs';
import {
    IPMSecurityLabel,
    _decode_IPMSecurityLabel,
    _encode_IPMSecurityLabel,
} from '../IPMSHeadingExtensions/IPMSecurityLabel.ta.mjs';
import { id_hat_ipm_security_label } from '../IPMSObjectIdentifiers/id-hat-ipm-security-label.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/* START_OF_SYMBOL_DEFINITION ipm_security_label */
/**
 * @summary ipm_security_label
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ipm-security-label X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX  IPMSecurityLabel,
 *   NUMERATION             single-valued,
 *   ID                     id-hat-ipm-security-label
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<IPMSecurityLabel>}
 * @implements {X413ATTRIBUTE<IPMSecurityLabel>}
 */
export const ipm_security_label: X413ATTRIBUTE<IPMSecurityLabel> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_IPMSecurityLabel,
    },
    encoderFor: {
        '&Type': _encode_IPMSecurityLabel,
    },
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_hat_ipm_security_label /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION ipm_security_label */

/* eslint-enable */
