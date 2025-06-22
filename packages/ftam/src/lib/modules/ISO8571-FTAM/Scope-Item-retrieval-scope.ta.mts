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
 * @summary Scope_Item_retrieval_scope
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Scope-Item-retrieval-scope ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type Scope_Item_retrieval_scope = INTEGER;


/**
 * @summary Scope_Item_retrieval_scope_child
 * @constant
 * @type {number}
 */
export const Scope_Item_retrieval_scope_child: Scope_Item_retrieval_scope = 0; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Scope_Item_retrieval_scope_child
 * @constant
 * @type {number}
 */
export const child: Scope_Item_retrieval_scope = Scope_Item_retrieval_scope_child; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Scope_Item_retrieval_scope_all
 * @constant
 * @type {number}
 */
export const Scope_Item_retrieval_scope_all: Scope_Item_retrieval_scope = 1; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Scope_Item_retrieval_scope_all
 * @constant
 * @type {number}
 */
export const all: Scope_Item_retrieval_scope = Scope_Item_retrieval_scope_all; /* SHORT_NAMED_INTEGER_VALUE */




export const _decode_Scope_Item_retrieval_scope = $._decodeInteger;




export const _encode_Scope_Item_retrieval_scope = $._encodeInteger;


/* eslint-enable */
