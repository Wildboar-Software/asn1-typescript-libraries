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
    ChangeOfAddressAdvice,
    _decode_ChangeOfAddressAdvice,
    _encode_ChangeOfAddressAdvice,
} from '../IPMSInformationObjects/ChangeOfAddressAdvice.ta.mjs';
import { id_on_change_of_address_advice } from '../IPMSObjectIdentifiers/id-on-change-of-address-advice.va.mjs';
import { type IPMS_EXTENSION } from '../IPMSInformationObjects/IPMS-EXTENSION.oca.mjs';
/**
 * @summary change_of_address_advice
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * change-of-address-advice IPMS-EXTENSION ::= {
 *   VALUE          ChangeOfAddressAdvice,
 *   IDENTIFIED BY  id-on-change-of-address-advice
 * }
 * ```
 *
 * @constant
 * @type {IPMS_EXTENSION<ChangeOfAddressAdvice>}
 * @implements {IPMS_EXTENSION<ChangeOfAddressAdvice>}
 */
export const change_of_address_advice: IPMS_EXTENSION<ChangeOfAddressAdvice> = {
    class: 'IPMS-EXTENSION',
    decoderFor: {
        '&Type': _decode_ChangeOfAddressAdvice,
    },
    encoderFor: {
        '&Type': _encode_ChangeOfAddressAdvice,
    },
    '&id': id_on_change_of_address_advice /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
