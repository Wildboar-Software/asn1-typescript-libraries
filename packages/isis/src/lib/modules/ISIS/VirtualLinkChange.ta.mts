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
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary VirtualLinkChange
 * @description
 *
 * `notificationVirtualLinkChange` payload: whether a Level 1 partition-repair
 * virtual link between two Level 2 ISs was created or deleted. Reported with
 * `notificationVirtualLinkAddress` (remote NET). Relative order per virtual
 * link must be preserved.
 *
 * (ISO/IEC 10589:2002 clauses 7.2.10, 11.2.2.3 and 11.3.1).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * VirtualLinkChange  ::=  ENUMERATED {deleted(0), created(1)}
 * ```
 *
 * @enum {number}
 */
export const _enum_for_VirtualLinkChange = {
  deleted: 0,
  created: 1,
} as const;

export type _enum_for_VirtualLinkChange = (typeof _enum_for_VirtualLinkChange)[keyof typeof _enum_for_VirtualLinkChange];

/**
 * @summary VirtualLinkChange
 * @description
 *
 * `notificationVirtualLinkChange` payload: whether a Level 1 partition-repair
 * virtual link between two Level 2 ISs was created or deleted. Reported with
 * `notificationVirtualLinkAddress` (remote NET). Relative order per virtual
 * link must be preserved.
 *
 * (ISO/IEC 10589:2002 clauses 7.2.10, 11.2.2.3 and 11.3.1).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * VirtualLinkChange  ::=  ENUMERATED {deleted(0), created(1)}
 * ```
 *
 * @enum {number}
 */
export type VirtualLinkChange = _enum_for_VirtualLinkChange;

/**
 * @summary VirtualLinkChange
 * @description
 *
 * `notificationVirtualLinkChange` payload: whether a Level 1 partition-repair
 * virtual link between two Level 2 ISs was created or deleted. Reported with
 * `notificationVirtualLinkAddress` (remote NET). Relative order per virtual
 * link must be preserved.
 *
 * (ISO/IEC 10589:2002 clauses 7.2.10, 11.2.2.3 and 11.3.1).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * VirtualLinkChange  ::=  ENUMERATED {deleted(0), created(1)}
 * ```
 *
 * @enum {number}
 */
export const VirtualLinkChange: typeof _enum_for_VirtualLinkChange = _enum_for_VirtualLinkChange;

/**
 * @summary VirtualLinkChange_deleted
 * @description
 *
 * Virtual link was deleted.
 *
 * (ISO/IEC 10589:2002 clause 11.2.2.3).
 *
 * @constant
 * @type {number}
 */
export const VirtualLinkChange_deleted: 0 =
  VirtualLinkChange.deleted; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary deleted
 * @constant
 * @type {number}
 */
export const deleted: 0 =
  VirtualLinkChange.deleted; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary VirtualLinkChange_created
 * @description
 *
 * Virtual link was created.
 *
 * (ISO/IEC 10589:2002 clause 11.2.2.3).
 *
 * @constant
 * @type {number}
 */
export const VirtualLinkChange_created: 1 =
  VirtualLinkChange.created; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary created
 * @constant
 * @type {number}
 */
export const created: 1 =
  VirtualLinkChange.created; /* SHORT_NAMED_ENUMERATED_VALUE */


export function _decode_VirtualLinkChange(el: _Element): VirtualLinkChange {
  const enumerated = $._decodeEnumerated(el);
  switch (enumerated) {
    case VirtualLinkChange.deleted: return VirtualLinkChange.deleted;
    case VirtualLinkChange.created: return VirtualLinkChange.created;
    default:
      throw new _ConstructionError(
        'Invalid ENUMERATED value ' + enumerated + ' for VirtualLinkChange.',
        el,
      );
  }
}


export const _encode_VirtualLinkChange: $.ASN1Encoder<VirtualLinkChange> = $._encodeEnumerated as $.ASN1Encoder<VirtualLinkChange>;


/* eslint-enable */
