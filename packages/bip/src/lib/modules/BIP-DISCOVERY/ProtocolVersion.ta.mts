/* eslint-disable */
import {
  INTEGER,
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


/**
 * @summary ProtocolVersion
 * @description
 *
 * Version of the BIP discovery/announcement protocol. This annex
 * specifies major 1 and minor 0 (protocol 1.0). ITU-T Rec.
 * X.1083 (11/2007)
 * [Annex B.12](https://www.itu.int/rec/T-REC-X.1083-200711-I),
 * B.8.1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProtocolVersion ::= SEQUENCE {major  INTEGER(0..255),
 *                               minor  INTEGER(0..255)
 * }
 * ```
 *
 */
export class ProtocolVersion {
  constructor(
    /**
     * @summary `major`.
     * @description
     *
     * Major version; this protocol uses 1. X.1083 Annex B.12.
     *
     * @public
     * @readonly
     */
    readonly major: INTEGER,
    /**
     * @summary `minor`.
     * @description
     *
     * Minor version; this protocol uses 0. X.1083 Annex B.12.
     *
     * @public
     * @readonly
     */
    readonly minor: INTEGER
  ) {}

  /**
   * @summary Restructures an object into a ProtocolVersion
   * @description
   *
   * This takes an `object` and converts it to a `ProtocolVersion`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `ProtocolVersion`.
   * @returns {ProtocolVersion}
   */
  public static _from_object(
    _o: { [_K in keyof ProtocolVersion]: ProtocolVersion[_K] }
  ): ProtocolVersion {
    return new ProtocolVersion(_o.major, _o.minor);
  }
}


/**
 * @summary The Leading Root Component Types of ProtocolVersion
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ProtocolVersion: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'major',
    false,
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'minor',
    false,
    $.hasTag(_TagClass.context, 1)
  ),
];


/**
 * @summary The Trailing Root Component Types of ProtocolVersion
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ProtocolVersion: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of ProtocolVersion
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ProtocolVersion: $.ComponentSpec[] = [];


let _cached_decoder_for_ProtocolVersion: $.ASN1Decoder<ProtocolVersion> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ProtocolVersion
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ProtocolVersion} The decoded data structure.
 */
export function _decode_ProtocolVersion(el: _Element): ProtocolVersion {
  if (!_cached_decoder_for_ProtocolVersion) {
    _cached_decoder_for_ProtocolVersion = function (
      el: _Element
    ): ProtocolVersion {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 2) {
        throw new _ConstructionError(
          'ProtocolVersion contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'major';
      sequence[1].name = 'minor';
      let major!: INTEGER;
      let minor!: INTEGER;
      major = $._decodeInteger(sequence[0]);
      minor = $._decodeInteger(sequence[1]);
      return new ProtocolVersion(major, minor);
    };
  }
  return _cached_decoder_for_ProtocolVersion(el);
}


let _cached_encoder_for_ProtocolVersion: $.ASN1Encoder<ProtocolVersion> | null = null;


/**
 * @summary Encodes a(n) ProtocolVersion into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProtocolVersion, encoded as an ASN.1 Element.
 */
export function _encode_ProtocolVersion(
  value: ProtocolVersion,
  elGetter: $.ASN1Encoder<ProtocolVersion>
): _Element {
  if (!_cached_encoder_for_ProtocolVersion) {
    _cached_encoder_for_ProtocolVersion = function (
      value: ProtocolVersion    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ $._encodeInteger(value.major, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.minor, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_ProtocolVersion(value, elGetter);
}


/* eslint-enable */
