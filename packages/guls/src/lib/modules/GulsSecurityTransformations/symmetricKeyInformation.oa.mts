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
  symmetricKeyInformation_KiType,
  _decode_symmetricKeyInformation_KiType,
  _encode_symmetricKeyInformation_KiType,
} from '../GulsSecurityTransformations/symmetricKeyInformation-KiType.ta.mjs';
import { type KEY_INFORMATION } from '../GulsSecurityTransformations/KEY-INFORMATION.oca.mjs';

/**
 * @summary symmetricKeyInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * symmetricKeyInformation KEY-INFORMATION ::= {
 *   KEY-INFO-CLASS  local:0
 *   KEY-INFO-TYPE
 *     SEQUENCE {entityId       SecurityIdentity,
 *               keyIdentifier  INTEGER}
 * }
 * ```
 *
 * @constant
 * @type {KEY_INFORMATION<symmetricKeyInformation_KiType>}
 * @implements {KEY_INFORMATION<symmetricKeyInformation_KiType>}
 */
export const symmetricKeyInformation: KEY_INFORMATION<symmetricKeyInformation_KiType> = {
  class: 'KEY-INFORMATION',
  decoderFor: {
    '&KiType': _decode_symmetricKeyInformation_KiType,
  },
  encoderFor: {
    '&KiType': _encode_symmetricKeyInformation_KiType,
  },
  '&kiClass': {
    local: 0,
  } /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
  '&KiType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
