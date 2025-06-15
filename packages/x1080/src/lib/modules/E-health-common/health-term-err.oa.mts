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
    E_terminateError,
    _decode_E_terminateError,
    _encode_E_terminateError,
} from '../E-health-common/E-terminateError.ta.mjs';
import { id_health_term_err } from '../E-health-common/id-health-term-err.va.mjs';
import { CONTENT_TYPE } from '../CmsTelebiometric/CONTENT-TYPE.oca.mjs';

/**
 * @summary health_term_err
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * health-term-err CONTENT-TYPE ::= {
 *                 E-terminateError
 *   IDENTIFIED BY id-health-term-err }
 * ```
 *
 * @constant
 * @type {CONTENT_TYPE<E_terminateError>}
 * @implements {CONTENT_TYPE<E_terminateError>}
 */
export const health_term_err: CONTENT_TYPE<E_terminateError> = {
    class: 'CONTENT-TYPE',
    decoderFor: {
        '&Type': _decode_E_terminateError,
    },
    encoderFor: {
        '&Type': _encode_E_terminateError,
    },
    '&id': id_health_term_err /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
