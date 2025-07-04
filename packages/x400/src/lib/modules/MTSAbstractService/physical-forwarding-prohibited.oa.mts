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
    PhysicalForwardingProhibited,
    _enum_for_PhysicalForwardingProhibited,
    physical_forwarding_allowed /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_PhysicalForwardingProhibited,
    _encode_PhysicalForwardingProhibited,
} from '../MTSAbstractService/PhysicalForwardingProhibited.ta.mjs';
import { EXTENSION } from '../MTSAbstractService/EXTENSION.oca.mjs';
/**
 * @summary physical_forwarding_prohibited
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * physical-forwarding-prohibited EXTENSION ::= {
 *   PhysicalForwardingProhibited
 *   IF ABSENT                physical-forwarding-allowed,
 *   RECOMMENDED CRITICALITY  {for-delivery},
 *   IDENTIFIED BY            standard-extension:7
 * }
 * ```
 *
 * @constant
 * @type {EXTENSION<PhysicalForwardingProhibited>}
 * @implements {EXTENSION<PhysicalForwardingProhibited>}
 */
export const physical_forwarding_prohibited: EXTENSION<PhysicalForwardingProhibited> = {
    class: 'EXTENSION',
    decoderFor: {
        '&Type': _decode_PhysicalForwardingProhibited,
    },
    encoderFor: {
        '&Type': _encode_PhysicalForwardingProhibited,
    },
    '&absent': physical_forwarding_allowed /* OBJECT_FIELD_SETTING */,
    '&recommended': (() => {
        const _ret = new Uint8ClampedArray(3);
        _ret[Criticality_for_delivery] = TRUE_BIT;
        return _ret;
    })() /* OBJECT_FIELD_SETTING */,
    '&id': {
        standard_extension: 7,
    } /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
