/* eslint-disable */
import {
    TRUE_BIT,
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
    Criticality_for_delivery /* IMPORTED_LONG_NAMED_BIT */,
    _decode_Criticality,
    _encode_Criticality,
} from '../MTSAbstractService/Criticality.ta.mjs';
import {
    ProofOfDeliveryRequest,
    _enum_for_ProofOfDeliveryRequest,
    proof_of_delivery_not_requested /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_ProofOfDeliveryRequest,
    _encode_ProofOfDeliveryRequest,
} from '../MTSAbstractService/ProofOfDeliveryRequest.ta.mjs';
import { type EXTENSION } from '../MTSAbstractService/EXTENSION.oca.mjs';
/**
 * @summary proof_of_delivery_request
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * proof-of-delivery-request EXTENSION ::= {
 *   ProofOfDeliveryRequest
 *   IF ABSENT                proof-of-delivery-not-requested,
 *   RECOMMENDED CRITICALITY  {for-delivery},
 *   IDENTIFIED BY            standard-extension:22
 * }
 * ```
 *
 * @constant
 * @type {EXTENSION<ProofOfDeliveryRequest>}
 * @implements {EXTENSION<ProofOfDeliveryRequest>}
 */
export const proof_of_delivery_request: EXTENSION<ProofOfDeliveryRequest> = {
    class: 'EXTENSION',
    decoderFor: {
        '&Type': _decode_ProofOfDeliveryRequest,
    },
    encoderFor: {
        '&Type': _encode_ProofOfDeliveryRequest,
    },
    '&absent': proof_of_delivery_not_requested /* OBJECT_FIELD_SETTING */,
    '&recommended': (() => {
        const _ret = new Uint8ClampedArray(3);
        _ret[Criticality_for_delivery] = TRUE_BIT;
        return _ret;
    })() /* OBJECT_FIELD_SETTING */,
    '&id': {
        standard_extension: 22,
    } /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
