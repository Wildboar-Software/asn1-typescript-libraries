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
    ProofOfDeliveryRequest,
    _enum_for_ProofOfDeliveryRequest,
    _decode_ProofOfDeliveryRequest,
    _encode_ProofOfDeliveryRequest,
} from '../MTSAbstractService/ProofOfDeliveryRequest.ta.mjs';
import { integerMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/integerMatch.oa.mjs';
import { id_att_proof_of_delivery_request } from '../MSObjectIdentifiers/id-att-proof-of-delivery-request.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary mt_proof_of_delivery_request
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mt-proof-of-delivery-request X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX   ProofOfDeliveryRequest,
 *   EQUALITY MATCHING-RULE
 *     integerMatch, -- rule not defined in 1988 Application Contexts
 *
 *   NUMERATION              single-valued,
 *   ID                      id-att-proof-of-delivery-request
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<ProofOfDeliveryRequest>}
 * @implements {X413ATTRIBUTE<ProofOfDeliveryRequest>}
 */
export const mt_proof_of_delivery_request: X413ATTRIBUTE<ProofOfDeliveryRequest> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_ProofOfDeliveryRequest,
    },
    encoderFor: {
        '&Type': _encode_ProofOfDeliveryRequest,
    },
    '&equalityMatch': integerMatch /* OBJECT_FIELD_SETTING */,
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_att_proof_of_delivery_request /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
