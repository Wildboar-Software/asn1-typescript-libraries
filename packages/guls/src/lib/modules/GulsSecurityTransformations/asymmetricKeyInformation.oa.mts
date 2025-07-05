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
  asymmetricKeyInformation_KiType,
  _decode_asymmetricKeyInformation_KiType,
  _encode_asymmetricKeyInformation_KiType,
} from '../GulsSecurityTransformations/asymmetricKeyInformation-KiType.ta.mjs';
import { type KEY_INFORMATION } from '../GulsSecurityTransformations/KEY-INFORMATION.oca.mjs';

/**
 * @summary asymmetricKeyInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * asymmetricKeyInformation KEY-INFORMATION ::= {
 *   KEY-INFO-CLASS  local:1
 *   KEY-INFO-TYPE
 *     SEQUENCE {issuerCAName      SecurityIdentity OPTIONAL,
 *               certSerialNumber  INTEGER OPTIONAL,
 *               signerName        SecurityIdentity OPTIONAL,
 *               keyIdentifier     BIT STRING OPTIONAL}
 * }
 * ```
 *
 * @constant
 * @type {KEY_INFORMATION<asymmetricKeyInformation_KiType>}
 * @implements {KEY_INFORMATION<asymmetricKeyInformation_KiType>}
 */
export const asymmetricKeyInformation: KEY_INFORMATION<asymmetricKeyInformation_KiType> = {
  class: 'KEY-INFORMATION',
  decoderFor: {
    '&KiType': _decode_asymmetricKeyInformation_KiType,
  },
  encoderFor: {
    '&KiType': _encode_asymmetricKeyInformation_KiType,
  },
  '&kiClass': {
    local: 1,
  } /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
  '&KiType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
