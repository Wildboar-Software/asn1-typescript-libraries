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
} from '@wildboar/asn1';
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
    ProbeOriginAuthenticationCheck,
    _decode_ProbeOriginAuthenticationCheck,
    _encode_ProbeOriginAuthenticationCheck,
} from '../MTSAbstractService/ProbeOriginAuthenticationCheck.ta.mjs';
import { type EXTENSION } from '../MTSAbstractService/EXTENSION.oca.mjs';
/**
 * @summary probe_origin_authentication_check
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * probe-origin-authentication-check EXTENSION ::= {
 *   ProbeOriginAuthenticationCheck,
 *   RECOMMENDED CRITICALITY  {for-delivery},
 *   IDENTIFIED BY            standard-extension:24
 * }
 * ```
 *
 * @constant
 * @type {EXTENSION<ProbeOriginAuthenticationCheck>}
 * @implements {EXTENSION<ProbeOriginAuthenticationCheck>}
 */
export const probe_origin_authentication_check: EXTENSION<ProbeOriginAuthenticationCheck> = {
    class: 'EXTENSION',
    decoderFor: {
        '&Type': _decode_ProbeOriginAuthenticationCheck,
    },
    encoderFor: {
        '&Type': _encode_ProbeOriginAuthenticationCheck,
    },
    '&recommended': (() => {
        const _ret = new Uint8ClampedArray(3);
        _ret[Criticality_for_delivery] = TRUE_BIT;
        return _ret;
    })() /* OBJECT_FIELD_SETTING */,
    '&id': {
        standard_extension: 24,
    } /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
