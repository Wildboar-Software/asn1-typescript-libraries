/* eslint-disable */
import {
  OPTIONAL,
  OCTET_STRING,
  ASN1Element as _Element,
  ASN1TagClass as _TagClass,
  ASN1Construction as _Construction,
  ASN1UniversalType as _UniversalType,
  ObjectIdentifier as _OID,
  External as _External,
  EmbeddedPDV as _PDV,
  ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
  SCVPIssuerSerial,
  _decode_SCVPIssuerSerial,
  _encode_SCVPIssuerSerial,
} from '../SCVP-2009/SCVPIssuerSerial.ta.mjs';
import {
  HashAlgorithm,
  _decode_HashAlgorithm,
  _encode_HashAlgorithm,
} from '../SCVP-2009/HashAlgorithm.ta.mjs';
import {
    AlgorithmIdentifier,
} from '@wildboar/x500/src/lib/modules/AuthenticationFramework/AlgorithmIdentifier.ta.mjs';
import { mda_sha1 } from '../PKIXAlgs-2009/mda-sha1.oa.mjs';

/**
 * @summary SCVPCertID
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SCVPCertID ::= SEQUENCE {
 *     certHash        OCTET STRING,
 *     issuerSerial    SCVPIssuerSerial,
 *     hashAlgorithm   HashAlgorithm
 *                         DEFAULT { algorithm mda-sha1.&id }
 * }
 * ```
 *
 * @class
 */
export class SCVPCertID {
  constructor(
    /**
     * @summary `certHash`.
     * @public
     * @readonly
     */
    readonly certHash: OCTET_STRING,
    /**
     * @summary `issuerSerial`.
     * @public
     * @readonly
     */
    readonly issuerSerial: SCVPIssuerSerial,
    /**
     * @summary `hashAlgorithm`.
     * @public
     * @readonly
     */
    readonly hashAlgorithm: OPTIONAL<HashAlgorithm>
  ) {}

  /**
   * @summary Restructures an object into a SCVPCertID
   * @description
   *
   * This takes an `object` and converts it to a `SCVPCertID`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `SCVPCertID`.
   * @returns {SCVPCertID}
   */
  public static _from_object(
    _o: { [_K in keyof SCVPCertID]: SCVPCertID[_K] }
  ): SCVPCertID {
    return new SCVPCertID(_o.certHash, _o.issuerSerial, _o.hashAlgorithm);
  }

  /**
   * @summary Getter that returns the default value for `hashAlgorithm`.
   * @public
   * @static
   * @method
   */
  public static get _default_value_for_hashAlgorithm() {
    return AlgorithmIdentifier._from_object({
        algorithm: mda_sha1['&id'],
        parameters: undefined,
        _unrecognizedExtensionsList: [],
    });
  }
}

/**
 * @summary The Leading Root Component Types of SCVPCertID
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SCVPCertID: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'certHash',
    false,
    $.hasTag(_TagClass.universal, 4),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'issuerSerial',
    false,
    $.hasTag(_TagClass.universal, 16),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'hashAlgorithm',
    true,
    $.hasTag(_TagClass.universal, 16),
    undefined,
    undefined
  ),
];

/**
 * @summary The Trailing Root Component Types of SCVPCertID
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SCVPCertID: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of SCVPCertID
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SCVPCertID: $.ComponentSpec[] = [];

let _cached_decoder_for_SCVPCertID: $.ASN1Decoder<SCVPCertID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SCVPCertID
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SCVPCertID} The decoded data structure.
 */
export function _decode_SCVPCertID(el: _Element) {
  if (!_cached_decoder_for_SCVPCertID) {
    _cached_decoder_for_SCVPCertID = function (el: _Element): SCVPCertID {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let certHash!: OCTET_STRING;
      let issuerSerial!: SCVPIssuerSerial;
      let hashAlgorithm: OPTIONAL<HashAlgorithm> =
        SCVPCertID._default_value_for_hashAlgorithm;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        certHash: (_el: _Element): void => {
          certHash = $._decodeOctetString(_el);
        },
        issuerSerial: (_el: _Element): void => {
          issuerSerial = _decode_SCVPIssuerSerial(_el);
        },
        hashAlgorithm: (_el: _Element): void => {
          hashAlgorithm = _decode_HashAlgorithm(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_SCVPCertID,
        _extension_additions_list_spec_for_SCVPCertID,
        _root_component_type_list_2_spec_for_SCVPCertID,
        undefined
      );
      return new SCVPCertID /* SEQUENCE_CONSTRUCTOR_CALL */(
        certHash,
        issuerSerial,
        hashAlgorithm
      );
    };
  }
  return _cached_decoder_for_SCVPCertID(el);
}

let _cached_encoder_for_SCVPCertID: $.ASN1Encoder<SCVPCertID> | null = null;

/**
 * @summary Encodes a(n) SCVPCertID into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SCVPCertID, encoded as an ASN.1 Element.
 */
export function _encode_SCVPCertID(
  value: SCVPCertID,
  elGetter: $.ASN1Encoder<SCVPCertID>
) {
  if (!_cached_encoder_for_SCVPCertID) {
    _cached_encoder_for_SCVPCertID = function (
      value: SCVPCertID    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ $._encodeOctetString(value.certHash, $.BER),
            /* REQUIRED   */ _encode_SCVPIssuerSerial(
              value.issuerSerial,
              $.BER
            ),
            /* IF_DEFAULT */ value.hashAlgorithm === undefined ||
            $.deepEq(
              value.hashAlgorithm,
              SCVPCertID._default_value_for_hashAlgorithm
            )
              ? undefined
              : _encode_HashAlgorithm(value.hashAlgorithm, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_SCVPCertID(value, elGetter);
}


/* eslint-enable */
