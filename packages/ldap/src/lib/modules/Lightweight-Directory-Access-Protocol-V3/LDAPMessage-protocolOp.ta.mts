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
import {
  BindRequest,
  _decode_BindRequest,
  _encode_BindRequest,
} from '../Lightweight-Directory-Access-Protocol-V3/BindRequest.ta.mjs';
import {
  BindResponse,
  _decode_BindResponse,
  _encode_BindResponse,
} from '../Lightweight-Directory-Access-Protocol-V3/BindResponse.ta.mjs';
import {
  UnbindRequest,
  _decode_UnbindRequest,
  _encode_UnbindRequest,
} from '../Lightweight-Directory-Access-Protocol-V3/UnbindRequest.ta.mjs';
import {
  SearchRequest,
  _decode_SearchRequest,
  _encode_SearchRequest,
} from '../Lightweight-Directory-Access-Protocol-V3/SearchRequest.ta.mjs';
import {
  SearchResultEntry,
  _decode_SearchResultEntry,
  _encode_SearchResultEntry,
} from '../Lightweight-Directory-Access-Protocol-V3/SearchResultEntry.ta.mjs';
import {
  SearchResultDone,
  _decode_SearchResultDone,
  _encode_SearchResultDone,
} from '../Lightweight-Directory-Access-Protocol-V3/SearchResultDone.ta.mjs';
import {
  SearchResultReference,
  _decode_SearchResultReference,
  _encode_SearchResultReference,
} from '../Lightweight-Directory-Access-Protocol-V3/SearchResultReference.ta.mjs';
import {
  ModifyRequest,
  _decode_ModifyRequest,
  _encode_ModifyRequest,
} from '../Lightweight-Directory-Access-Protocol-V3/ModifyRequest.ta.mjs';
import {
  ModifyResponse,
  _decode_ModifyResponse,
  _encode_ModifyResponse,
} from '../Lightweight-Directory-Access-Protocol-V3/ModifyResponse.ta.mjs';
import {
  AddRequest,
  _decode_AddRequest,
  _encode_AddRequest,
} from '../Lightweight-Directory-Access-Protocol-V3/AddRequest.ta.mjs';
import {
  AddResponse,
  _decode_AddResponse,
  _encode_AddResponse,
} from '../Lightweight-Directory-Access-Protocol-V3/AddResponse.ta.mjs';
import {
  DelRequest,
  _decode_DelRequest,
  _encode_DelRequest,
} from '../Lightweight-Directory-Access-Protocol-V3/DelRequest.ta.mjs';
import {
  DelResponse,
  _decode_DelResponse,
  _encode_DelResponse,
} from '../Lightweight-Directory-Access-Protocol-V3/DelResponse.ta.mjs';
import {
  ModifyDNRequest,
  _decode_ModifyDNRequest,
  _encode_ModifyDNRequest,
} from '../Lightweight-Directory-Access-Protocol-V3/ModifyDNRequest.ta.mjs';
import {
  ModifyDNResponse,
  _decode_ModifyDNResponse,
  _encode_ModifyDNResponse,
} from '../Lightweight-Directory-Access-Protocol-V3/ModifyDNResponse.ta.mjs';
import {
  CompareRequest,
  _decode_CompareRequest,
  _encode_CompareRequest,
} from '../Lightweight-Directory-Access-Protocol-V3/CompareRequest.ta.mjs';
import {
  CompareResponse,
  _decode_CompareResponse,
  _encode_CompareResponse,
} from '../Lightweight-Directory-Access-Protocol-V3/CompareResponse.ta.mjs';
import {
  AbandonRequest,
  _decode_AbandonRequest,
  _encode_AbandonRequest,
} from '../Lightweight-Directory-Access-Protocol-V3/AbandonRequest.ta.mjs';
import {
  ExtendedRequest,
  _decode_ExtendedRequest,
  _encode_ExtendedRequest,
} from '../Lightweight-Directory-Access-Protocol-V3/ExtendedRequest.ta.mjs';
import {
  ExtendedResponse,
  _decode_ExtendedResponse,
  _encode_ExtendedResponse,
} from '../Lightweight-Directory-Access-Protocol-V3/ExtendedResponse.ta.mjs';
import {
  IntermediateResponse,
  _decode_IntermediateResponse,
  _encode_IntermediateResponse,
} from '../Lightweight-Directory-Access-Protocol-V3/IntermediateResponse.ta.mjs';

/**
 * @summary LDAPMessage_protocolOp
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LDAPMessage-protocolOp ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type LDAPMessage_protocolOp =
  | { bindRequest: BindRequest } /* CHOICE_ALT_ROOT */
  | { bindResponse: BindResponse } /* CHOICE_ALT_ROOT */
  | { unbindRequest: UnbindRequest } /* CHOICE_ALT_ROOT */
  | { searchRequest: SearchRequest } /* CHOICE_ALT_ROOT */
  | { searchResEntry: SearchResultEntry } /* CHOICE_ALT_ROOT */
  | { searchResDone: SearchResultDone } /* CHOICE_ALT_ROOT */
  | { searchResRef: SearchResultReference } /* CHOICE_ALT_ROOT */
  | { modifyRequest: ModifyRequest } /* CHOICE_ALT_ROOT */
  | { modifyResponse: ModifyResponse } /* CHOICE_ALT_ROOT */
  | { addRequest: AddRequest } /* CHOICE_ALT_ROOT */
  | { addResponse: AddResponse } /* CHOICE_ALT_ROOT */
  | { delRequest: DelRequest } /* CHOICE_ALT_ROOT */
  | { delResponse: DelResponse } /* CHOICE_ALT_ROOT */
  | { modDNRequest: ModifyDNRequest } /* CHOICE_ALT_ROOT */
  | { modDNResponse: ModifyDNResponse } /* CHOICE_ALT_ROOT */
  | { compareRequest: CompareRequest } /* CHOICE_ALT_ROOT */
  | { compareResponse: CompareResponse } /* CHOICE_ALT_ROOT */
  | { abandonRequest: AbandonRequest } /* CHOICE_ALT_ROOT */
  | { extendedReq: ExtendedRequest } /* CHOICE_ALT_ROOT */
  | { extendedResp: ExtendedResponse } /* CHOICE_ALT_ROOT */
  | { intermediateResponse: IntermediateResponse } /* CHOICE_ALT_EXT */
  | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;


let _cached_decoder_for_LDAPMessage_protocolOp: $.ASN1Decoder<LDAPMessage_protocolOp> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) LDAPMessage_protocolOp
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {LDAPMessage_protocolOp} The decoded data structure.
 */
export function _decode_LDAPMessage_protocolOp(el: _Element): LDAPMessage_protocolOp {
  if (!_cached_decoder_for_LDAPMessage_protocolOp) {
    _cached_decoder_for_LDAPMessage_protocolOp = $._decode_extensible_choice<LDAPMessage_protocolOp>(
      {
        'APPLICATION 0': ['bindRequest', _decode_BindRequest],
        'APPLICATION 1': ['bindResponse', _decode_BindResponse],
        'APPLICATION 2': ['unbindRequest', _decode_UnbindRequest],
        'APPLICATION 3': ['searchRequest', _decode_SearchRequest],
        'APPLICATION 4': ['searchResEntry', _decode_SearchResultEntry],
        'APPLICATION 5': ['searchResDone', _decode_SearchResultDone],
        'APPLICATION 19': ['searchResRef', _decode_SearchResultReference],
        'APPLICATION 6': ['modifyRequest', _decode_ModifyRequest],
        'APPLICATION 7': ['modifyResponse', _decode_ModifyResponse],
        'APPLICATION 8': ['addRequest', _decode_AddRequest],
        'APPLICATION 9': ['addResponse', _decode_AddResponse],
        'APPLICATION 10': ['delRequest', _decode_DelRequest],
        'APPLICATION 11': ['delResponse', _decode_DelResponse],
        'APPLICATION 12': ['modDNRequest', _decode_ModifyDNRequest],
        'APPLICATION 13': ['modDNResponse', _decode_ModifyDNResponse],
        'APPLICATION 14': ['compareRequest', _decode_CompareRequest],
        'APPLICATION 15': ['compareResponse', _decode_CompareResponse],
        'APPLICATION 16': ['abandonRequest', _decode_AbandonRequest],
        'APPLICATION 23': ['extendedReq', _decode_ExtendedRequest],
        'APPLICATION 24': ['extendedResp', _decode_ExtendedResponse],
        'APPLICATION 25': [
          'intermediateResponse',
          _decode_IntermediateResponse,
        ],
      }
    );
  }
  return _cached_decoder_for_LDAPMessage_protocolOp(el);
}


let _cached_encoder_for_LDAPMessage_protocolOp: $.ASN1Encoder<LDAPMessage_protocolOp> | null = null;


/**
 * @summary Encodes a(n) LDAPMessage_protocolOp into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LDAPMessage_protocolOp, encoded as an ASN.1 Element.
 */
export function _encode_LDAPMessage_protocolOp(
  value: LDAPMessage_protocolOp,
  elGetter: $.ASN1Encoder<LDAPMessage_protocolOp>
): _Element {
  if (!_cached_encoder_for_LDAPMessage_protocolOp) {
    _cached_encoder_for_LDAPMessage_protocolOp = $._encode_choice<LDAPMessage_protocolOp>(
      {
        bindRequest: _encode_BindRequest,
        bindResponse: _encode_BindResponse,
        unbindRequest: _encode_UnbindRequest,
        searchRequest: _encode_SearchRequest,
        searchResEntry: _encode_SearchResultEntry,
        searchResDone: _encode_SearchResultDone,
        searchResRef: _encode_SearchResultReference,
        modifyRequest: _encode_ModifyRequest,
        modifyResponse: _encode_ModifyResponse,
        addRequest: _encode_AddRequest,
        addResponse: _encode_AddResponse,
        delRequest: _encode_DelRequest,
        delResponse: _encode_DelResponse,
        modDNRequest: _encode_ModifyDNRequest,
        modDNResponse: _encode_ModifyDNResponse,
        compareRequest: _encode_CompareRequest,
        compareResponse: _encode_CompareResponse,
        abandonRequest: _encode_AbandonRequest,
        extendedReq: _encode_ExtendedRequest,
        extendedResp: _encode_ExtendedResponse,
        intermediateResponse: _encode_IntermediateResponse,
      },
      $.BER
    );
  }
  return _cached_encoder_for_LDAPMessage_protocolOp(value, elGetter);
}


/* eslint-enable */
