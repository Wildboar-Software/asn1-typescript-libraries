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
  type LDAPDN,
  _decode_LDAPDN,
  _encode_LDAPDN,
} from '../Lightweight-Directory-Access-Protocol-V3/LDAPDN.ta.mjs';
import {
  type PartialAttributeList,
  _decode_PartialAttributeList,
  _encode_PartialAttributeList,
} from '../Lightweight-Directory-Access-Protocol-V3/PartialAttributeList.ta.mjs';
import {
  formatLdifAttribute,
  octetsToJSON,
  type OctetsJSON,
} from '../../textual.mjs';
import type { PartialAttributeJSON } from '../Lightweight-Directory-Access-Protocol-V3/PartialAttribute.ta.mjs';

/**
 * JSON encoding of {@link SearchResultEntry}.
 */
export type SearchResultEntryJSON = {
  objectName: OctetsJSON;
  attributes: PartialAttributeJSON[];
};

/**
 * @summary SearchResultEntry
 * @description
 *
 * One matching entry. May interleave in any order with
 * SearchResultReference; SearchResultDone follows all of them.
 * `attributes` may be empty (nothing requested/returnable). Individual
 * `vals` SETs may be empty (`typesOnly` or access control). Some
 * attributes may be constructed and not modifiable. Attributes appear
 * at most once.
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
  /**
   * @summary `objectName`.
   * @description
   *
   * DN of the entry found (after any alias deref).
   *
   * @public
   * @readonly
   */
  public readonly objectName: LDAPDN;
  /**
   * @summary `attributes`.
   * @description
   *
   * May be empty. Order is not significant. Each description at most
   * once.
   *
   * @public
   * @readonly
   */
  public readonly attributes: PartialAttributeList;
  /**
   * @summary Extensions that are not recognized.
   * @public
   * @readonly
   */
  public readonly _unrecognizedExtensionsList: _Element[];

  constructor(
    objectName: LDAPDN,
    attributes: PartialAttributeList,
    _unrecognizedExtensionsList: _Element[] = []
  ) {
    this.objectName = objectName;
    this.attributes = attributes;
    this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
  }

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

  /**
   * @summary LDIF content record (IETF RFC 2849).
   * @description
   *
   * `dn` plus one line per attribute value. This is a search result, so
   * there is no `changetype`. Attributes with no values are omitted.
   * Unrecognized extensions are omitted.
   *
   * @returns The LDIF record
   * @public
   */
  public toString(): string {
    const lines: string[] = [
      formatLdifAttribute('dn', this.objectName),
    ];
    for (const attribute of this.attributes) {
      const text: string = attribute.toString();
      if (text.length > 0) {
        lines.push(text);
      }
    }
    return lines.join('\n');
  }

  /**
   * @summary JSON encoding of this search result entry.
   * @description
   *
   * Unrecognized extensions are not represented. Empty attribute value
   * sets are kept.
   *
   * @returns The JSON encoding
   * @public
   */
  public toJSON(): SearchResultEntryJSON {
    return {
      objectName: octetsToJSON(this.objectName),
      attributes: this.attributes.map((attribute) => attribute.toJSON()),
    };
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
