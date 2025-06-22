/* eslint-disable */
import {
    INTEGER,
    TYPE_IDENTIFIER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from '@wildboar/asn1/functional';
import { id_wf_integer } from '../MHSRoutingObjectIdentifiers/id-wf-integer.va.mjs';
/**
 * @summary simpleWeight
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * simpleWeight TYPE-IDENTIFIER ::= {INTEGER
 *                                   IDENTIFIED BY  id-wf-integer
 * }
 * ```
 *
 * @constant
 * @type {TYPE_IDENTIFIER<INTEGER>}
 * @implements {TYPE_IDENTIFIER<INTEGER>}
 */
export const simpleWeight: TYPE_IDENTIFIER<INTEGER> = {
    class: 'TYPE-IDENTIFIER',
    decoderFor: {
        '&Type': $._decodeInteger,
    },
    encoderFor: {
        '&Type': $._encodeInteger,
    },
    '&id': id_wf_integer /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
