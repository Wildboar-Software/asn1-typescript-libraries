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
import { id_observer } from '../E-health-identification/id-observer.va.mjs';
import {
    ObserverIdentification,
    _decode_ObserverIdentification,
    _encode_ObserverIdentification,
} from '../E-health-identification/ObserverIdentification.ta.mjs';
import { type IDENTIFICATION } from '../E-health-identification/IDENTIFICATION.oca.mjs';

/**
 * @summary observerIdentification
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * observerIdentification    IDENTIFICATION ::= {
 *   CATEGORY        id-observer
 *   IDENTIFIED WITH ObserverIdentification }
 * ```
 *
 * @constant
 * @type {IDENTIFICATION<ObserverIdentification>}
 * @implements {IDENTIFICATION<ObserverIdentification>}
 */
export const observerIdentification: IDENTIFICATION<ObserverIdentification> = {
    class: 'IDENTIFICATION',
    decoderFor: {
        '&Identification': _decode_ObserverIdentification,
    },
    encoderFor: {
        '&Identification': _encode_ObserverIdentification,
    },
    '&category': id_observer /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Identification': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
