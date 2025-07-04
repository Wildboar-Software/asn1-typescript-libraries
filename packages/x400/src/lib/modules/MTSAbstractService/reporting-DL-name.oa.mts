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
    _decode_ExtensionType,
    _encode_ExtensionType,
} from '../MTSAbstractService/ExtensionType.ta.mjs';
import {
    _decode_Criticality,
    _encode_Criticality,
} from '../MTSAbstractService/Criticality.ta.mjs';
import {
    ReportingDLName,
    _decode_ReportingDLName,
    _encode_ReportingDLName,
} from '../MTSAbstractService/ReportingDLName.ta.mjs';
import { EXTENSION } from '../MTSAbstractService/EXTENSION.oca.mjs';
/**
 * @summary reporting_DL_name
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * reporting-DL-name EXTENSION ::= {
 *   ReportingDLName,
 *   IDENTIFIED BY  standard-extension:31
 * }
 * ```
 *
 * @constant
 * @type {EXTENSION<ReportingDLName>}
 * @implements {EXTENSION<ReportingDLName>}
 */
export const reporting_DL_name: EXTENSION<ReportingDLName> = {
    class: 'EXTENSION',
    decoderFor: {
        '&Type': _decode_ReportingDLName,
    },
    encoderFor: {
        '&Type': _encode_ReportingDLName,
    },
    '&id': {
        standard_extension: 31,
    } /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&recommended': new Uint8ClampedArray(
        []
    ) /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
