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
    EDIReceptionSecurity,
    _decode_EDIReceptionSecurity,
    _encode_EDIReceptionSecurity,
} from '../EDIMSInformationObjects/EDIReceptionSecurity.ta.mjs';
import { bitStringMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/bitStringMatch.oa.mjs';
import { id_rat_edi_reception_security_for_this_recipient } from '../EDIMSObjectIdentifiers/id-rat-edi-reception-security-for-this-recipient.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary edi_reception_security_for_this_recipient
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * edi-reception-security-for-this-recipient X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX   EDIReceptionSecurity,
 *   EQUALITY MATCHING-RULE  bitStringMatch,
 *   NUMERATION              single-valued,
 *   ID                      id-rat-edi-reception-security-for-this-recipient
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<EDIReceptionSecurity>}
 * @implements {X413ATTRIBUTE<EDIReceptionSecurity>}
 */
export const edi_reception_security_for_this_recipient: X413ATTRIBUTE<EDIReceptionSecurity> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_EDIReceptionSecurity,
    },
    encoderFor: {
        '&Type': _encode_EDIReceptionSecurity,
    },
    '&equalityMatch': bitStringMatch /* OBJECT_FIELD_SETTING */,
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_rat_edi_reception_security_for_this_recipient /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
