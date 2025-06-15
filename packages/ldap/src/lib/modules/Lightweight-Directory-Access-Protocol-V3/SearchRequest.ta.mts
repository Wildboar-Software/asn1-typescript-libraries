/* eslint-disable */
import {
  BOOLEAN,
  INTEGER,
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
  LDAPDN,
  _decode_LDAPDN,
  _encode_LDAPDN,
} from '../Lightweight-Directory-Access-Protocol-V3/LDAPDN.ta.mjs';
import {
  SearchRequest_scope,
  _enum_for_SearchRequest_scope,
  _decode_SearchRequest_scope,
  _encode_SearchRequest_scope,
} from '../Lightweight-Directory-Access-Protocol-V3/SearchRequest-scope.ta.mjs';
import {
  SearchRequest_derefAliases,
  _enum_for_SearchRequest_derefAliases,
  _decode_SearchRequest_derefAliases,
  _encode_SearchRequest_derefAliases,
} from '../Lightweight-Directory-Access-Protocol-V3/SearchRequest-derefAliases.ta.mjs';
import {
  Filter,
  _decode_Filter,
  _encode_Filter,
} from '../Lightweight-Directory-Access-Protocol-V3/Filter.ta.mjs';
import {
  AttributeSelection,
  _decode_AttributeSelection,
  _encode_AttributeSelection,
} from '../Lightweight-Directory-Access-Protocol-V3/AttributeSelection.ta.mjs';

/**
 * @summary SearchRequest
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SearchRequest ::= [APPLICATION 3]  SEQUENCE {
 *   baseObject    LDAPDN,
 *   scope
 *     ENUMERATED {baseObject(0), singleLevel(1), wholeSubtree(2), ...
 *                 },
 *   derefAliases
 *     ENUMERATED {neverDerefAliases(0), derefInSearching(1),
 *                 derefFindingBaseObj(2), derefAlways(3)},
 *   sizeLimit     INTEGER(0..maxInt),
 *   timeLimit     INTEGER(0..maxInt),
 *   typesOnly     BOOLEAN,
 *   filter        Filter,
 *   attributes    AttributeSelection
 * }
 * ```
 *
 * @class
 */
export class SearchRequest {
  constructor(
    /**
     * @summary `baseObject`.
     * @public
     * @readonly
     */
    readonly baseObject: LDAPDN,
    /**
     * @summary `scope`.
     * @public
     * @readonly
     */
    readonly scope: SearchRequest_scope,
    /**
     * @summary `derefAliases`.
     * @public
     * @readonly
     */
    readonly derefAliases: SearchRequest_derefAliases,
    /**
     * @summary `sizeLimit`.
     * @public
     * @readonly
     */
    readonly sizeLimit: INTEGER,
    /**
     * @summary `timeLimit`.
     * @public
     * @readonly
     */
    readonly timeLimit: INTEGER,
    /**
     * @summary `typesOnly`.
     * @public
     * @readonly
     */
    readonly typesOnly: BOOLEAN,
    /**
     * @summary `filter`.
     * @public
     * @readonly
     */
    readonly filter: Filter,
    /**
     * @summary `attributes`.
     * @public
     * @readonly
     */
    readonly attributes: AttributeSelection,
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[] = []
  ) {}

  /**
   * @summary Restructures an object into a SearchRequest
   * @description
   *
   * This takes an `object` and converts it to a `SearchRequest`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `SearchRequest`.
   * @returns {SearchRequest}
   */
  public static _from_object(
    _o: { [_K in keyof SearchRequest]: SearchRequest[_K] }
  ): SearchRequest {
    return new SearchRequest(
      _o.baseObject,
      _o.scope,
      _o.derefAliases,
      _o.sizeLimit,
      _o.timeLimit,
      _o.typesOnly,
      _o.filter,
      _o.attributes,
      _o._unrecognizedExtensionsList
    );
  }

  /**
   * @summary The enum used as the type of the component `scope`
   * @public
   * @static
   */

  public static _enum_for_scope = _enum_for_SearchRequest_scope;
  /**
   * @summary The enum used as the type of the component `derefAliases`
   * @public
   * @static
   */

  public static _enum_for_derefAliases = _enum_for_SearchRequest_derefAliases;
}


/**
 * @summary The Leading Root Component Types of SearchRequest
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SearchRequest: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'baseObject',
    false,
    $.hasTag(_TagClass.universal, 4),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'scope',
    false,
    $.hasTag(_TagClass.universal, 10),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'derefAliases',
    false,
    $.hasTag(_TagClass.universal, 10),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'sizeLimit',
    false,
    $.hasTag(_TagClass.universal, 2),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'timeLimit',
    false,
    $.hasTag(_TagClass.universal, 2),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'typesOnly',
    false,
    $.hasTag(_TagClass.universal, 1),
    undefined,
    undefined
  ),
  new $.ComponentSpec('filter', false, $.hasAnyTag, undefined, undefined),
  new $.ComponentSpec(
    'attributes',
    false,
    $.hasTag(_TagClass.universal, 16),
    undefined,
    undefined
  ),
];


/**
 * @summary The Trailing Root Component Types of SearchRequest
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SearchRequest: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of SearchRequest
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SearchRequest: $.ComponentSpec[] = [];


let _cached_decoder_for_SearchRequest: $.ASN1Decoder<SearchRequest> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) SearchRequest
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SearchRequest} The decoded data structure.
 */
export function _decode_SearchRequest(el: _Element) {
  if (!_cached_decoder_for_SearchRequest) {
    _cached_decoder_for_SearchRequest = $._decode_implicit<SearchRequest>(
      () =>
        function (el: _Element): SearchRequest {
          const sequence: _Element[] = el.sequence;
          if (sequence.length < 8) {
            throw new _ConstructionError(
              'SearchRequest contained only ' +
                sequence.length.toString() +
                ' elements.'
            );
          }
          sequence[0].name = 'baseObject';
          sequence[1].name = 'scope';
          sequence[2].name = 'derefAliases';
          sequence[3].name = 'sizeLimit';
          sequence[4].name = 'timeLimit';
          sequence[5].name = 'typesOnly';
          sequence[6].name = 'filter';
          sequence[7].name = 'attributes';
          let baseObject!: LDAPDN;
          let scope!: SearchRequest_scope;
          let derefAliases!: SearchRequest_derefAliases;
          let sizeLimit!: INTEGER;
          let timeLimit!: INTEGER;
          let typesOnly!: BOOLEAN;
          let filter!: Filter;
          let attributes!: AttributeSelection;
          baseObject = _decode_LDAPDN(sequence[0]);
          scope = _decode_SearchRequest_scope(sequence[1]);
          derefAliases = _decode_SearchRequest_derefAliases(sequence[2]);
          sizeLimit = $._decodeInteger(sequence[3]);
          timeLimit = $._decodeInteger(sequence[4]);
          typesOnly = $._decodeBoolean(sequence[5]);
          filter = _decode_Filter(sequence[6]);
          attributes = _decode_AttributeSelection(sequence[7]);
          return new SearchRequest(
            baseObject,
            scope,
            derefAliases,
            sizeLimit,
            timeLimit,
            typesOnly,
            filter,
            attributes,
            sequence.slice(8)
          );
        }
    );
  }
  return _cached_decoder_for_SearchRequest(el);
}


let _cached_encoder_for_SearchRequest: $.ASN1Encoder<SearchRequest> | null = null;


/**
 * @summary Encodes a(n) SearchRequest into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SearchRequest, encoded as an ASN.1 Element.
 */
export function _encode_SearchRequest(
  value: SearchRequest,
  elGetter: $.ASN1Encoder<SearchRequest>
) {
  if (!_cached_encoder_for_SearchRequest) {
    _cached_encoder_for_SearchRequest = $._encode_implicit(
      _TagClass.application,
      3,
      () =>
        function (
          value: SearchRequest        ): _Element {
          return $._encodeSequence(
            ([] as (_Element | undefined)[])
              .concat(
                [
                  /* REQUIRED   */ _encode_LDAPDN(value.baseObject, $.BER),
                  /* REQUIRED   */ _encode_SearchRequest_scope(
                    value.scope,
                    $.BER
                  ),
                  /* REQUIRED   */ _encode_SearchRequest_derefAliases(
                    value.derefAliases,
                    $.BER
                  ),
                  /* REQUIRED   */ $._encodeInteger(value.sizeLimit, $.BER),
                  /* REQUIRED   */ $._encodeInteger(value.timeLimit, $.BER),
                  /* REQUIRED   */ $._encodeBoolean(value.typesOnly, $.BER),
                  /* REQUIRED   */ _encode_Filter(value.filter, $.BER),
                  /* REQUIRED   */ _encode_AttributeSelection(
                    value.attributes,
                    $.BER
                  ),
                ],
                value._unrecognizedExtensionsList
                  ? value._unrecognizedExtensionsList
                  : []
              )
              .filter((c: _Element | undefined): c is _Element => !!c),
            $.BER
          );
        },
      $.BER
    );
  }
  return _cached_encoder_for_SearchRequest(value, elGetter);
}


/* eslint-enable */
