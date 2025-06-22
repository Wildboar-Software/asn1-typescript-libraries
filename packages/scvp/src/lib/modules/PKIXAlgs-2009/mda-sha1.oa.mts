/* eslint-disable */
import {
  NULL,
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
import {
  _enum_for_ParamOptions,
  preferredAbsent /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_ParamOptions,
  _encode_ParamOptions,
} from '../AlgorithmInformation-2009/ParamOptions.ta.mjs';
import { id_sha1 } from '@wildboar/x500/src/lib/modules/AlgorithmObjectIdentifiers/id-sha1.va.mjs';
import { DIGEST_ALGORITHM } from '../AlgorithmInformation-2009/DIGEST-ALGORITHM.oca.mjs';

/**
 * @summary mda_sha1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mda-sha1 DIGEST-ALGORITHM ::= {
 * IDENTIFIER id-sha1
 * PARAMS TYPE NULL ARE preferredAbsent
 * }
 * ```
 *
 * @constant
 * @type {DIGEST_ALGORITHM<NULL>}
 * @implements {DIGEST_ALGORITHM<NULL>}
 */
export const mda_sha1: DIGEST_ALGORITHM<NULL> = {
  class: 'DIGEST-ALGORITHM',
  decoderFor: {
    '&Params': $._decodeNull,
  },
  encoderFor: {
    '&Params': $._encodeNull,
  },
  '&id': id_sha1 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
  '&paramPresence': preferredAbsent /* OBJECT_FIELD_SETTING */,
  '&Params': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
