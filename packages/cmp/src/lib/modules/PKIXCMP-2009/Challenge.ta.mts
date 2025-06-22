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
import * as $ from '@wildboar/asn1/functional';
import {
  AlgorithmIdentifier,
  _decode_AlgorithmIdentifier,
  _encode_AlgorithmIdentifier,
} from '@wildboar/x500/src/lib/modules/AuthenticationFramework/AlgorithmIdentifier.ta.mjs';

/**
 * @summary Challenge
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Challenge ::= SEQUENCE {
 *     owf                 AlgorithmIdentifier{DIGEST-ALGORITHM, {...}}
 *                             OPTIONAL,
 *     -- MUST be present in the first Challenge; MAY be omitted in
 *     -- any subsequent Challenge in POPODecKeyChallContent (if
 *     -- omitted, then the owf used in the immediately preceding
 *     -- Challenge is to be used).
 *     witness             OCTET STRING,
 *     -- the result of applying the one-way function (owf) to a
 *     -- randomly-generated INTEGER, A.  [Note that a different
 *     -- INTEGER MUST be used for each Challenge.]
 *     challenge           OCTET STRING
 *     -- the encryption (under the public key for which the cert.
 *     -- request is being made) of Rand, where Rand is specified as
 *     --   Rand ::= SEQUENCE {
 *     --      int      INTEGER,
 *     --       - the randomly-generated INTEGER A (above)
 *     --      sender   GeneralName
 *     --       - the sender's name (as included in PKIHeader)
 *     --   }
 * }
 * ```
 *
 * @class
 */
export class Challenge {
  constructor(
    /**
     * @summary `owf`.
     * @public
     * @readonly
     */
    readonly owf: OPTIONAL<AlgorithmIdentifier>,
    /**
     * @summary `witness`.
     * @public
     * @readonly
     */
    readonly witness: OCTET_STRING,
    /**
     * @summary `challenge`.
     * @public
     * @readonly
     */
    readonly challenge: OCTET_STRING
  ) {}

  /**
   * @summary Restructures an object into a Challenge
   * @description
   *
   * This takes an `object` and converts it to a `Challenge`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `Challenge`.
   * @returns {Challenge}
   */
  public static _from_object(
    _o: { [_K in keyof Challenge]: Challenge[_K] }
  ): Challenge {
    return new Challenge(_o.owf, _o.witness, _o.challenge);
  }
}


/**
 * @summary The Leading Root Component Types of Challenge
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Challenge: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'owf',
    true,
    $.hasTag(_TagClass.universal, 16)
  ),
  new $.ComponentSpec(
    'witness',
    false,
    $.hasTag(_TagClass.universal, 4)
  ),
  new $.ComponentSpec(
    'challenge',
    false,
    $.hasTag(_TagClass.universal, 4)
  ),
];


/**
 * @summary The Trailing Root Component Types of Challenge
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Challenge: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of Challenge
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Challenge: $.ComponentSpec[] = [];


let _cached_decoder_for_Challenge: $.ASN1Decoder<Challenge> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Challenge
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Challenge} The decoded data structure.
 */
export function _decode_Challenge(el: _Element) {
  if (!_cached_decoder_for_Challenge) {
    _cached_decoder_for_Challenge = function (el: _Element): Challenge {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let owf: OPTIONAL<AlgorithmIdentifier>;
      let witness!: OCTET_STRING;
      let challenge!: OCTET_STRING;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        owf: (_el: _Element): void => {
          owf = _decode_AlgorithmIdentifier(_el);
        },
        witness: (_el: _Element): void => {
          witness = $._decodeOctetString(_el);
        },
        challenge: (_el: _Element): void => {
          challenge = $._decodeOctetString(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_Challenge,
        _extension_additions_list_spec_for_Challenge,
        _root_component_type_list_2_spec_for_Challenge,
        undefined
      );
      return new Challenge /* SEQUENCE_CONSTRUCTOR_CALL */(
        owf,
        witness,
        challenge
      );
    };
  }
  return _cached_decoder_for_Challenge(el);
}


let _cached_encoder_for_Challenge: $.ASN1Encoder<Challenge> | null = null;


/**
 * @summary Encodes a(n) Challenge into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Challenge, encoded as an ASN.1 Element.
 */
export function _encode_Challenge(
  value: Challenge,
  elGetter: $.ASN1Encoder<Challenge>
) {
  if (!_cached_encoder_for_Challenge) {
    _cached_encoder_for_Challenge = function (
      value: Challenge    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* IF_ABSENT  */ value.owf === undefined
              ? undefined
              : _encode_AlgorithmIdentifier(value.owf, $.BER),
            /* REQUIRED   */ $._encodeOctetString(value.witness, $.BER),
            /* REQUIRED   */ $._encodeOctetString(value.challenge, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_Challenge(value, elGetter);
}


/* eslint-enable */
