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
    OriginatorReturnAddress,
    _decode_OriginatorReturnAddress,
    _encode_OriginatorReturnAddress,
} from '../MTSAbstractService/OriginatorReturnAddress.ta.mjs';
import { id_att_originator_return_address } from '../MSObjectIdentifiers/id-att-originator-return-address.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary mt_originator_return_address
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mt-originator-return-address X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX  OriginatorReturnAddress,
 *   NUMERATION             single-valued,
 *   ID                     id-att-originator-return-address
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<OriginatorReturnAddress>}
 * @implements {X413ATTRIBUTE<OriginatorReturnAddress>}
 */
export const mt_originator_return_address: X413ATTRIBUTE<OriginatorReturnAddress> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_OriginatorReturnAddress,
    },
    encoderFor: {
        '&Type': _encode_OriginatorReturnAddress,
    },
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_att_originator_return_address /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
