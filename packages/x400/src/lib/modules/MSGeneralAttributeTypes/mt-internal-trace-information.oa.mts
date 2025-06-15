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
    _decode_AttributeType,
    _encode_AttributeType,
} from '../MSAbstractService/AttributeType.ta.mjs';
import {
    InternalTraceInformationElement,
    _decode_InternalTraceInformationElement,
    _encode_InternalTraceInformationElement,
} from '../MTAAbstractService/InternalTraceInformationElement.ta.mjs';
import { id_att_internal_trace_information } from '../MSObjectIdentifiers/id-att-internal-trace-information.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { multi_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary mt_internal_trace_information
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mt-internal-trace-information X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX  InternalTraceInformationElement,
 *   NUMERATION             multi-valued,
 *   ID                     id-att-internal-trace-information
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<InternalTraceInformationElement>}
 * @implements {X413ATTRIBUTE<InternalTraceInformationElement>}
 */
export const mt_internal_trace_information: X413ATTRIBUTE<InternalTraceInformationElement> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_InternalTraceInformationElement,
    },
    encoderFor: {
        '&Type': _encode_InternalTraceInformationElement,
    },
    '&numeration': multi_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_att_internal_trace_information /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
