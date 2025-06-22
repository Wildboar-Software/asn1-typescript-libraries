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
import {
    E_setupError,
    _decode_E_setupError,
    _encode_E_setupError,
} from '../E-health-common/E-setupError.ta.mjs';
import { id_health_setup_err } from '../E-health-common/id-health-setup-err.va.mjs';
import { CONTENT_TYPE } from '../CmsTelebiometric/CONTENT-TYPE.oca.mjs';

/**
 * @summary health_setup_err
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * health-setup-err CONTENT-TYPE ::= {
 *                  E-setupError
 *   IDENTIFIED BY  id-health-setup-err }
 * ```
 *
 * @constant
 * @type {CONTENT_TYPE<E_setupError>}
 * @implements {CONTENT_TYPE<E_setupError>}
 */
export const health_setup_err: CONTENT_TYPE<E_setupError> = {
    class: 'CONTENT-TYPE',
    decoderFor: {
        '&Type': _decode_E_setupError,
    },
    encoderFor: {
        '&Type': _encode_E_setupError,
    },
    '&id': id_health_setup_err /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
