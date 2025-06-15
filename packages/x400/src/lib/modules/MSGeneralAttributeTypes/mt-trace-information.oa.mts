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
    TraceInformationElement,
    _decode_TraceInformationElement,
    _encode_TraceInformationElement,
} from '../MTAAbstractService/TraceInformationElement.ta.mjs';
import { id_att_trace_information } from '../MSObjectIdentifiers/id-att-trace-information.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { multi_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary mt_trace_information
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mt-trace-information X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX  TraceInformationElement,
 *   NUMERATION             multi-valued,
 *   ID                     id-att-trace-information
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<TraceInformationElement>}
 * @implements {X413ATTRIBUTE<TraceInformationElement>}
 */
export const mt_trace_information: X413ATTRIBUTE<TraceInformationElement> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_TraceInformationElement,
    },
    encoderFor: {
        '&Type': _encode_TraceInformationElement,
    },
    '&numeration': multi_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_att_trace_information /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
