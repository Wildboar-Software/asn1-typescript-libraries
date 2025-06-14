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
    IPMSecurityLabel,
    _decode_IPMSecurityLabel,
    _encode_IPMSecurityLabel,
} from '../IPMSHeadingExtensions/IPMSecurityLabel.ta.mjs';
import { id_hex_ipm_security_label } from '../IPMSObjectIdentifiers/id-hex-ipm-security-label.va.mjs';
import { IPMS_EXTENSION } from '../IPMSInformationObjects/IPMS-EXTENSION.oca.mjs';
/* START_OF_SYMBOL_DEFINITION ipm_security_label */
/**
 * @summary ipm_security_label
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ipm-security-label IPMS-EXTENSION ::= {
 *   VALUE          IPMSecurityLabel,
 *   IDENTIFIED BY  id-hex-ipm-security-label
 * }
 * ```
 *
 * @constant
 * @type {IPMS_EXTENSION<IPMSecurityLabel>}
 * @implements {IPMS_EXTENSION<IPMSecurityLabel>}
 */
export const ipm_security_label: IPMS_EXTENSION<IPMSecurityLabel> = {
    class: 'IPMS-EXTENSION',
    decoderFor: {
        '&Type': _decode_IPMSecurityLabel,
    },
    encoderFor: {
        '&Type': _encode_IPMSecurityLabel,
    },
    '&id': id_hex_ipm_security_label /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION ipm_security_label */

/* eslint-enable */
