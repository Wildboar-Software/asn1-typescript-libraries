/* eslint-disable */
import {
    ABSTRACT_SYNTAX,
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
    DialoguePDU,
    _decode_DialoguePDU,
    _encode_DialoguePDU,
} from '../DialoguePDUs/DialoguePDU.ta.mjs';
import { dialogue_as_id } from '../DialoguePDUs/dialogue-as-id.va.mjs';
/**
 * @summary dialogue_abstract_syntax
 * @description
 *
 * X.208 `ABSTRACT-SYNTAX` for structured-dialogue APDUs
 * (`DialoguePDU`), identified by `dialogue-as-id`. Put that
 * OID in the Dialogue Portion EXTERNAL `direct-reference`.
 * ITU-T Rec. Q.773 (06/97)
 * [§3.2.1](https://www.itu.int/rec/T-REC-Q.773-199706-I),
 * §4.2.3.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dialogue-abstract-syntax ABSTRACT-SYNTAX ::= {
 *   DialoguePDU
 *   IDENTIFIED BY  dialogue-as-id
 * }
 * ```
 *
 * @constant
 * @type {ABSTRACT_SYNTAX<DialoguePDU>}
 * @implements {ABSTRACT_SYNTAX<DialoguePDU>}
 */
export const dialogue_abstract_syntax: ABSTRACT_SYNTAX<DialoguePDU> = {
    class: 'ABSTRACT-SYNTAX',
    decoderFor: {
        '&Type': _decode_DialoguePDU,
    },
    encoderFor: {
        '&Type': _encode_DialoguePDU,
    },
    '&id': dialogue_as_id /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&property': undefined,
};

/* eslint-enable */
