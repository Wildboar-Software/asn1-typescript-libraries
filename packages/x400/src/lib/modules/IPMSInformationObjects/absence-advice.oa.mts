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
    AbsenceAdvice,
    _decode_AbsenceAdvice,
    _encode_AbsenceAdvice,
} from '../IPMSInformationObjects/AbsenceAdvice.ta.mjs';
import { id_on_absence_advice } from '../IPMSObjectIdentifiers/id-on-absence-advice.va.mjs';
import { type IPMS_EXTENSION } from '../IPMSInformationObjects/IPMS-EXTENSION.oca.mjs';
/**
 * @summary absence_advice
 * @description
 *
 * The Absence Advice advice notification field (O) indicates that the AN’s originator is
 * unable to receive the IPM at the present time. It contains information previously
 * supplied for the purpose by the AN’s originator, and comprises an IPM body part, and,
 * optionally, the time at which the user may next be available to take receipt of IPMs.
 * See ITU-T X.420 (1999), §8.4.1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * absence-advice IPMS-EXTENSION ::= {
 *   VALUE          AbsenceAdvice,
 *   IDENTIFIED BY  id-on-absence-advice
 * }
 * ```
 *
 * @constant
 * @type {IPMS_EXTENSION<AbsenceAdvice>}
 * @implements {IPMS_EXTENSION<AbsenceAdvice>}
 */
export const absence_advice: IPMS_EXTENSION<AbsenceAdvice> = {
    class: 'IPMS-EXTENSION',
    decoderFor: {
        '&Type': _decode_AbsenceAdvice,
    },
    encoderFor: {
        '&Type': _encode_AbsenceAdvice,
    },
    '&id': id_on_absence_advice /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
