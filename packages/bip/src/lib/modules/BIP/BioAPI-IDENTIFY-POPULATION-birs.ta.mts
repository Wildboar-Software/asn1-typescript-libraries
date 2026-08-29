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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
  BioAPI_DB_HANDLE,
  _decode_BioAPI_DB_HANDLE,
  _encode_BioAPI_DB_HANDLE,
} from '../BIP/BioAPI-DB-HANDLE.ta.mjs';
import {
  BioAPI_BIR_ARRAY_POPULATION,
  _decode_BioAPI_BIR_ARRAY_POPULATION,
  _encode_BioAPI_BIR_ARRAY_POPULATION,
} from '../BIP/BioAPI-BIR-ARRAY-POPULATION.ta.mjs';

/**
 * @summary BioAPI_IDENTIFY_POPULATION_birs
 * @description
 *
 * C `Type` 1 (`DB_TYPE`) → `birDataBase`; 2 (`ARRAY_TYPE`) →
 * `birArray`; 3 (`PRESET_ARRAY_TYPE`) → `birPresetArray` (NULL).
 * For preset, the C `BIRArray` pointer must be NULL; any other
 * value is unconvertible. OPTIONAL C pointers follow clause 19.
 *
 * ITU-T Rec. X.1083 (11/2007)
 * [§15.43](https://www.itu.int/rec/T-REC-X.1083-200711-I),
 * §15.44.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BioAPI-IDENTIFY-POPULATION-birs ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type BioAPI_IDENTIFY_POPULATION_birs =
  | { birDataBase: BioAPI_DB_HANDLE } /* CHOICE_ALT_ROOT */
  | { birArray: BioAPI_BIR_ARRAY_POPULATION } /* CHOICE_ALT_ROOT */
  | { birPresetArray: NULL } /* CHOICE_ALT_ROOT */;


let _cached_decoder_for_BioAPI_IDENTIFY_POPULATION_birs: $.ASN1Decoder<BioAPI_IDENTIFY_POPULATION_birs> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) BioAPI_IDENTIFY_POPULATION_birs
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BioAPI_IDENTIFY_POPULATION_birs} The decoded data structure.
 */
export function _decode_BioAPI_IDENTIFY_POPULATION_birs(el: _Element): BioAPI_IDENTIFY_POPULATION_birs {
  if (!_cached_decoder_for_BioAPI_IDENTIFY_POPULATION_birs) {
    _cached_decoder_for_BioAPI_IDENTIFY_POPULATION_birs = $._decode_inextensible_choice<BioAPI_IDENTIFY_POPULATION_birs>(
      {
        'CONTEXT 0': ['birDataBase', _decode_BioAPI_DB_HANDLE],
        'CONTEXT 1': ['birArray', _decode_BioAPI_BIR_ARRAY_POPULATION],
        'CONTEXT 2': ['birPresetArray', $._decodeNull],
      }
    );
  }
  return _cached_decoder_for_BioAPI_IDENTIFY_POPULATION_birs(el);
}


let _cached_encoder_for_BioAPI_IDENTIFY_POPULATION_birs: $.ASN1Encoder<BioAPI_IDENTIFY_POPULATION_birs> | null = null;


/**
 * @summary Encodes a(n) BioAPI_IDENTIFY_POPULATION_birs into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BioAPI_IDENTIFY_POPULATION_birs, encoded as an ASN.1 Element.
 */
export function _encode_BioAPI_IDENTIFY_POPULATION_birs(
  value: BioAPI_IDENTIFY_POPULATION_birs,
  elGetter: $.ASN1Encoder<BioAPI_IDENTIFY_POPULATION_birs>
): _Element {
  if (!_cached_encoder_for_BioAPI_IDENTIFY_POPULATION_birs) {
    _cached_encoder_for_BioAPI_IDENTIFY_POPULATION_birs = $._encode_choice<BioAPI_IDENTIFY_POPULATION_birs>(
      {
        birDataBase: _encode_BioAPI_DB_HANDLE,
        birArray: _encode_BioAPI_BIR_ARRAY_POPULATION,
        birPresetArray: $._encodeNull,
      },
      $.BER
    );
  }
  return _cached_encoder_for_BioAPI_IDENTIFY_POPULATION_birs(value, elGetter);
}


/* eslint-enable */
