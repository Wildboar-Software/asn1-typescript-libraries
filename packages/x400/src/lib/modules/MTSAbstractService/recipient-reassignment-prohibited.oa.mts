/* eslint-disable */
import {
    TRUE_BIT,
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
    Criticality_for_delivery /* IMPORTED_LONG_NAMED_BIT */,
    _decode_Criticality,
    _encode_Criticality,
} from '../MTSAbstractService/Criticality.ta.mjs';
import {
    RecipientReassignmentProhibited,
    _enum_for_RecipientReassignmentProhibited,
    recipient_reassignment_allowed /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_RecipientReassignmentProhibited,
    _encode_RecipientReassignmentProhibited,
} from '../MTSAbstractService/RecipientReassignmentProhibited.ta.mjs';
import { EXTENSION } from '../MTSAbstractService/EXTENSION.oca.mjs';

/**
 * @summary recipient_reassignment_prohibited
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * recipient-reassignment-prohibited EXTENSION ::= {
 *   RecipientReassignmentProhibited
 *   IF ABSENT                recipient-reassignment-allowed,
 *   RECOMMENDED CRITICALITY  {for-delivery},
 *   IDENTIFIED BY            standard-extension:1
 * }
 * ```
 *
 * @constant
 * @type {EXTENSION<RecipientReassignmentProhibited>}
 * @implements {EXTENSION<RecipientReassignmentProhibited>}
 */
export const recipient_reassignment_prohibited: EXTENSION<RecipientReassignmentProhibited> = {
    class: 'EXTENSION',
    decoderFor: {
        '&Type': _decode_RecipientReassignmentProhibited,
    },
    encoderFor: {
        '&Type': _encode_RecipientReassignmentProhibited,
    },
    '&absent': recipient_reassignment_allowed /* OBJECT_FIELD_SETTING */,
    '&recommended': (() => {
        const _ret = new Uint8ClampedArray(3);
        _ret[Criticality_for_delivery] = TRUE_BIT;
        return _ret;
    })() /* OBJECT_FIELD_SETTING */,
    '&id': {
        standard_extension: 1,
    } /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
