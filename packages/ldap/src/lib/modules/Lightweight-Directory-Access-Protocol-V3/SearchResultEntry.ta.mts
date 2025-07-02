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
  ASN1TagClass,
  ASN1UniversalType,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
  LDAPDN,
  _decode_LDAPDN,
  _encode_LDAPDN,
} from '../Lightweight-Directory-Access-Protocol-V3/LDAPDN.ta.mjs';
import {
  PartialAttributeList,
  _decode_PartialAttributeList,
  _encode_PartialAttributeList,
} from '../Lightweight-Directory-Access-Protocol-V3/PartialAttributeList.ta.mjs';

/**
 * @summary SearchResultEntry
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SearchResultEntry ::= [APPLICATION 4]  SEQUENCE {
 *   objectName  LDAPDN,
 *   attributes  PartialAttributeList
 * }
 * ```
 *
 */
export class SearchResultEntry {
  constructor(
    /**
     * @summary `objectName`.
     * @public
     * @readonly
     */
    readonly objectName: LDAPDN,
    /**
     * @summary `attributes`.
     * @public
     * @readonly
     */
    readonly attributes: PartialAttributeList,
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[] = []
  ) {}

  /**
   * @summary Restructures an object into a SearchResultEntry
   * @description
   *
   * This takes an `object` and converts it to a `SearchResultEntry`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `SearchResultEntry`.
   * @returns {SearchResultEntry}
   */
  public static _from_object(
    _o: { [_K in keyof SearchResultEntry]: SearchResultEntry[_K] }
  ): SearchResultEntry {
    return new SearchResultEntry(
      _o.objectName,
      _o.attributes,
      _o._unrecognizedExtensionsList
    );
  }
}


/**
 * @summary The Leading Root Component Types of SearchResultEntry
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SearchResultEntry: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'objectName',
    false,
    $.hasTag(_TagClass.universal, 4)
  ),
  new $.ComponentSpec(
    'attributes',
    false,
    $.hasTag(_TagClass.universal, 16)
  ),
];


/**
 * @summary The Trailing Root Component Types of SearchResultEntry
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SearchResultEntry: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of SearchResultEntry
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SearchResultEntry: $.ComponentSpec[] = [];


/**
 * @summary Decodes an ASN.1 element into a(n) SearchResultEntry
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SearchResultEntry} The decoded data structure.
 */
export function _decode_SearchResultEntry(el: _Element): SearchResultEntry {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError(
            'SearchResultEntry contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
    }
    sequence[0].name = 'objectName';
    sequence[1].name = 'attributes';
    let objectName!: LDAPDN;
    let attributes!: PartialAttributeList;
    objectName = _decode_LDAPDN(sequence[0]);
    attributes = _decode_PartialAttributeList(sequence[1]);
    return new SearchResultEntry(
        objectName,
        attributes,
        sequence.slice(2)
    );
}


/**
 * @summary Encodes a(n) SearchResultEntry into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SearchResultEntry, encoded as an ASN.1 Element.
 */
export function _encode_SearchResultEntry(
  value: SearchResultEntry
): _Element {
    const attrsEl = _encode_PartialAttributeList(value.attributes, $.BER);
    attrsEl.tagClass = ASN1TagClass.universal;
    attrsEl.tagNumber = ASN1UniversalType.sequence;
    const components: _Element[] = [
        _encode_LDAPDN(value.objectName, $.BER),
        _encode_PartialAttributeList(value.attributes, $.BER),
        ...value._unrecognizedExtensionsList ?? [],
    ];
    const el = $._encodeSequence(components, $.BER);
    el.tagClass = _TagClass.application;
    el.tagNumber = 4;
    return el;
}


/* eslint-enable */
