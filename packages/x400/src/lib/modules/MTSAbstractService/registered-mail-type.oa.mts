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
    _decode_ExtensionType,
    _encode_ExtensionType,
} from '../MTSAbstractService/ExtensionType.ta.mjs';
import {
    Criticality_for_delivery /* IMPORTED_LONG_NAMED_BIT */,
    _decode_Criticality,
    _encode_Criticality,
} from '../MTSAbstractService/Criticality.ta.mjs';
import {
    RegisteredMailType,
    non_registered_mail /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_RegisteredMailType,
    _encode_RegisteredMailType,
} from '../MTSAbstractService/RegisteredMailType.ta.mjs';
import { EXTENSION } from '../MTSAbstractService/EXTENSION.oca.mjs';
/**
 * @summary registered_mail_type
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * registered-mail-type EXTENSION ::= {
 *   RegisteredMailType
 *   IF ABSENT                non-registered-mail,
 *   RECOMMENDED CRITICALITY  {for-delivery},
 *   IDENTIFIED BY            standard-extension:10
 * }
 * ```
 *
 * @constant
 * @type {EXTENSION<RegisteredMailType>}
 * @implements {EXTENSION<RegisteredMailType>}
 */
export const registered_mail_type: EXTENSION<RegisteredMailType> = {
    class: 'EXTENSION',
    decoderFor: {
        '&Type': _decode_RegisteredMailType,
    },
    encoderFor: {
        '&Type': _encode_RegisteredMailType,
    },
    '&absent': non_registered_mail /* OBJECT_FIELD_SETTING */,
    '&recommended': (() => {
        const _ret = new Uint8ClampedArray(3);
        _ret[Criticality_for_delivery] = TRUE_BIT;
        return _ret;
    })() /* OBJECT_FIELD_SETTING */,
    '&id': {
        standard_extension: 10,
    } /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
