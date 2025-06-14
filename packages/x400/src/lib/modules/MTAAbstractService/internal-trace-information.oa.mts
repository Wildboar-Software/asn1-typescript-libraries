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
    _decode_ExtensionType,
    _encode_ExtensionType,
} from '../MTSAbstractService/ExtensionType.ta.mjs';
import {
    _decode_Criticality,
    _encode_Criticality,
} from '../MTSAbstractService/Criticality.ta.mjs';
import {
    InternalTraceInformation,
    _decode_InternalTraceInformation,
    _encode_InternalTraceInformation,
} from '../MTAAbstractService/InternalTraceInformation.ta.mjs';
import { EXTENSION } from '../MTSAbstractService/EXTENSION.oca.mjs';
/* START_OF_SYMBOL_DEFINITION internal_trace_information */
/**
 * @summary internal_trace_information
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * internal-trace-information EXTENSION ::= {
 *   InternalTraceInformation,
 *   IDENTIFIED BY  standard-extension:38
 * }
 * ```
 *
 * @constant
 * @type {EXTENSION<InternalTraceInformation>}
 * @implements {EXTENSION<InternalTraceInformation>}
 */
export const internal_trace_information: EXTENSION<InternalTraceInformation> = {
    class: 'EXTENSION',
    decoderFor: {
        '&Type': _decode_InternalTraceInformation,
    },
    encoderFor: {
        '&Type': _encode_InternalTraceInformation,
    },
    '&id': {
        standard_extension: 38,
    } /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&recommended': new Uint8ClampedArray(
        []
    ) /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION internal_trace_information */

/* eslint-enable */
