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
    MessageOriginAuthenticationCheck,
    _decode_MessageOriginAuthenticationCheck,
    _encode_MessageOriginAuthenticationCheck,
} from '../MTSAbstractService/MessageOriginAuthenticationCheck.ta.mjs';
import { EXTENSION } from '../MTSAbstractService/EXTENSION.oca.mjs';
/**
 * @summary message_origin_authentication_check
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * message-origin-authentication-check EXTENSION ::= {
 *   MessageOriginAuthenticationCheck,
 *   RECOMMENDED CRITICALITY  {for-delivery},
 *   IDENTIFIED BY            standard-extension:19
 * }
 * ```
 *
 * @constant
 * @type {EXTENSION<MessageOriginAuthenticationCheck>}
 * @implements {EXTENSION<MessageOriginAuthenticationCheck>}
 */
export const message_origin_authentication_check: EXTENSION<MessageOriginAuthenticationCheck> = {
    class: 'EXTENSION',
    decoderFor: {
        '&Type': _decode_MessageOriginAuthenticationCheck,
    },
    encoderFor: {
        '&Type': _encode_MessageOriginAuthenticationCheck,
    },
    '&recommended': (() => {
        const _ret = new Uint8ClampedArray(3);
        _ret[Criticality_for_delivery] = TRUE_BIT;
        return _ret;
    })() /* OBJECT_FIELD_SETTING */,
    '&id': {
        standard_extension: 19,
    } /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
