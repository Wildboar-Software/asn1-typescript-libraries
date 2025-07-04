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
    TraceInformation,
    _decode_TraceInformation,
    _encode_TraceInformation,
} from '../MTAAbstractService/TraceInformation.ta.mjs';
import { type EXTENSION } from '../MTSAbstractService/EXTENSION.oca.mjs';
/**
 * @summary trace_information
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * trace-information EXTENSION ::= {
 *   TraceInformation,
 *   IDENTIFIED BY  standard-extension:37
 * }
 * ```
 *
 * @constant
 * @type {EXTENSION<TraceInformation>}
 * @implements {EXTENSION<TraceInformation>}
 */
export const trace_information: EXTENSION<TraceInformation> = {
    class: 'EXTENSION',
    decoderFor: {
        '&Type': _decode_TraceInformation,
    },
    encoderFor: {
        '&Type': _encode_TraceInformation,
    },
    '&id': {
        standard_extension: 37,
    } /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&recommended': new Uint8ClampedArray(
        []
    ) /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
