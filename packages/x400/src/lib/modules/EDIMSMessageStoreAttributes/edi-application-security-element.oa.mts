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
    EDIApplicationSecurityElement,
    _decode_EDIApplicationSecurityElement,
    _encode_EDIApplicationSecurityElement,
} from '../EDIMSInformationObjects/EDIApplicationSecurityElement.ta.mjs';
import { bitStringMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/bitStringMatch.oa.mjs';
import { id_hat_edi_application_security_element } from '../EDIMSObjectIdentifiers/id-hat-edi-application-security-element.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/* START_OF_SYMBOL_DEFINITION edi_application_security_element */
/**
 * @summary edi_application_security_element
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * edi-application-security-element X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX   EDIApplicationSecurityElement,
 *   EQUALITY MATCHING-RULE  bitStringMatch,
 *   NUMERATION              single-valued,
 *   ID                      id-hat-edi-application-security-element
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<EDIApplicationSecurityElement>}
 * @implements {X413ATTRIBUTE<EDIApplicationSecurityElement>}
 */
export const edi_application_security_element: X413ATTRIBUTE<EDIApplicationSecurityElement> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_EDIApplicationSecurityElement,
    },
    encoderFor: {
        '&Type': _encode_EDIApplicationSecurityElement,
    },
    '&equalityMatch': bitStringMatch /* OBJECT_FIELD_SETTING */,
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_hat_edi_application_security_element /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION edi_application_security_element */

/* eslint-enable */
