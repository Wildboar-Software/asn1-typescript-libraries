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
    AutoSubmitted,
    _enum_for_AutoSubmitted,
    _decode_AutoSubmitted,
    _encode_AutoSubmitted,
} from '../IPMSHeadingExtensions/AutoSubmitted.ta.mjs';
import { id_hex_auto_submitted } from '../IPMSObjectIdentifiers/id-hex-auto-submitted.va.mjs';
import { IPMS_EXTENSION } from '../IPMSInformationObjects/IPMS-EXTENSION.oca.mjs';
/* START_OF_SYMBOL_DEFINITION auto_submitted */
/**
 * @summary auto_submitted
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * auto-submitted IPMS-EXTENSION ::= {
 *   VALUE          AutoSubmitted,
 *   IDENTIFIED BY  id-hex-auto-submitted
 * }
 * ```
 *
 * @constant
 * @type {IPMS_EXTENSION<AutoSubmitted>}
 * @implements {IPMS_EXTENSION<AutoSubmitted>}
 */
export const auto_submitted: IPMS_EXTENSION<AutoSubmitted> = {
    class: 'IPMS-EXTENSION',
    decoderFor: {
        '&Type': _decode_AutoSubmitted,
    },
    encoderFor: {
        '&Type': _encode_AutoSubmitted,
    },
    '&id': id_hex_auto_submitted /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION auto_submitted */

/* eslint-enable */
