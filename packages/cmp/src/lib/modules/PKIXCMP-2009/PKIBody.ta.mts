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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
  CertReqMessages,
  _decode_CertReqMessages,
  _encode_CertReqMessages,
} from '@wildboar/crmf/src/lib/modules/PKIXCRMF-2009/CertReqMessages.ta.mjs';
import {
  CertRepMessage,
  _decode_CertRepMessage,
  _encode_CertRepMessage,
} from '../PKIXCMP-2009/CertRepMessage.ta.mjs';
import {
  CertificationRequest,
  _decode_CertificationRequest,
  _encode_CertificationRequest,
} from '@wildboar/pkcs/src/lib/modules/PKCS-10/CertificationRequest.ta.mjs';
import {
  POPODecKeyChallContent,
  _decode_POPODecKeyChallContent,
  _encode_POPODecKeyChallContent,
} from '../PKIXCMP-2009/POPODecKeyChallContent.ta.mjs';
import {
  POPODecKeyRespContent,
  _decode_POPODecKeyRespContent,
  _encode_POPODecKeyRespContent,
} from '../PKIXCMP-2009/POPODecKeyRespContent.ta.mjs';
import {
  KeyRecRepContent,
  _decode_KeyRecRepContent,
  _encode_KeyRecRepContent,
} from '../PKIXCMP-2009/KeyRecRepContent.ta.mjs';
import {
  RevReqContent,
  _decode_RevReqContent,
  _encode_RevReqContent,
} from '../PKIXCMP-2009/RevReqContent.ta.mjs';
import {
  RevRepContent,
  _decode_RevRepContent,
  _encode_RevRepContent,
} from '../PKIXCMP-2009/RevRepContent.ta.mjs';
import {
  CAKeyUpdAnnContent,
  _decode_CAKeyUpdAnnContent,
  _encode_CAKeyUpdAnnContent,
} from '../PKIXCMP-2009/CAKeyUpdAnnContent.ta.mjs';
import {
  CertAnnContent,
  _decode_CertAnnContent,
  _encode_CertAnnContent,
} from '../PKIXCMP-2009/CertAnnContent.ta.mjs';
import {
  RevAnnContent,
  _decode_RevAnnContent,
  _encode_RevAnnContent,
} from '../PKIXCMP-2009/RevAnnContent.ta.mjs';
import {
  CRLAnnContent,
  _decode_CRLAnnContent,
  _encode_CRLAnnContent,
} from '../PKIXCMP-2009/CRLAnnContent.ta.mjs';
import {
  PKIConfirmContent,
  _decode_PKIConfirmContent,
  _encode_PKIConfirmContent,
} from '../PKIXCMP-2009/PKIConfirmContent.ta.mjs';
import {
  NestedMessageContent,
  _decode_NestedMessageContent,
  _encode_NestedMessageContent,
} from '../PKIXCMP-2009/NestedMessageContent.ta.mjs';
import {
  GenMsgContent,
  _decode_GenMsgContent,
  _encode_GenMsgContent,
} from '../PKIXCMP-2009/GenMsgContent.ta.mjs';
import {
  GenRepContent,
  _decode_GenRepContent,
  _encode_GenRepContent,
} from '../PKIXCMP-2009/GenRepContent.ta.mjs';
import {
  ErrorMsgContent,
  _decode_ErrorMsgContent,
  _encode_ErrorMsgContent,
} from '../PKIXCMP-2009/ErrorMsgContent.ta.mjs';
import {
  CertConfirmContent,
  _decode_CertConfirmContent,
  _encode_CertConfirmContent,
} from '../PKIXCMP-2009/CertConfirmContent.ta.mjs';
import {
  PollReqContent,
  _decode_PollReqContent,
  _encode_PollReqContent,
} from '../PKIXCMP-2009/PollReqContent.ta.mjs';
import {
  PollRepContent,
  _decode_PollRepContent,
  _encode_PollRepContent,
} from '../PKIXCMP-2009/PollRepContent.ta.mjs';
/* START_OF_SYMBOL_DEFINITION PKIBody */
/**
 * @summary PKIBody
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PKIBody  ::=  CHOICE {       -- message-specific body elements
 *     ir       [0]  CertReqMessages,        --Initialization Request
 *     ip       [1]  CertRepMessage,         --Initialization Response
 *     cr       [2]  CertReqMessages,        --Certification Request
 *     cp       [3]  CertRepMessage,         --Certification Response
 *
 *     p10cr    [4]  CertificationRequest,   --imported from [PKCS10]
 *     popdecc  [5]  POPODecKeyChallContent, --pop Challenge
 *     popdecr  [6]  POPODecKeyRespContent,  --pop Response
 *     kur      [7]  CertReqMessages,        --Key Update Request
 *     kup      [8]  CertRepMessage,         --Key Update Response
 *     krr      [9]  CertReqMessages,        --Key Recovery Request
 *     krp      [10] KeyRecRepContent,       --Key Recovery Response
 *     rr       [11] RevReqContent,          --Revocation Request
 *     rp       [12] RevRepContent,          --Revocation Response
 *     ccr      [13] CertReqMessages,        --Cross-Cert. Request
 *     ccp      [14] CertRepMessage,         --Cross-Cert. Response
 *     ckuann   [15] CAKeyUpdAnnContent,     --CA Key Update Ann.
 *     cann     [16] CertAnnContent,         --Certificate Ann.
 *     rann     [17] RevAnnContent,          --Revocation Ann.
 *     crlann   [18] CRLAnnContent,          --CRL Announcement
 *     pkiconf  [19] PKIConfirmContent,      --Confirmation
 *     nested   [20] NestedMessageContent,   --Nested Message
 *     genm     [21] GenMsgContent,          --General Message
 *     genp     [22] GenRepContent,          --General Response
 *     error    [23] ErrorMsgContent,        --Error Message
 *     certConf [24] CertConfirmContent,     --Certificate confirm
 *     pollReq  [25] PollReqContent,         --Polling request
 *     pollRep  [26] PollRepContent          --Polling response
 * }
 * ```
 */
export type PKIBody =
  | { ir: CertReqMessages } /* CHOICE_ALT_ROOT */
  | { ip: CertRepMessage } /* CHOICE_ALT_ROOT */
  | { cr: CertReqMessages } /* CHOICE_ALT_ROOT */
  | { cp: CertRepMessage } /* CHOICE_ALT_ROOT */
  | { p10cr: CertificationRequest } /* CHOICE_ALT_ROOT */
  | { popdecc: POPODecKeyChallContent } /* CHOICE_ALT_ROOT */
  | { popdecr: POPODecKeyRespContent } /* CHOICE_ALT_ROOT */
  | { kur: CertReqMessages } /* CHOICE_ALT_ROOT */
  | { kup: CertRepMessage } /* CHOICE_ALT_ROOT */
  | { krr: CertReqMessages } /* CHOICE_ALT_ROOT */
  | { krp: KeyRecRepContent } /* CHOICE_ALT_ROOT */
  | { rr: RevReqContent } /* CHOICE_ALT_ROOT */
  | { rp: RevRepContent } /* CHOICE_ALT_ROOT */
  | { ccr: CertReqMessages } /* CHOICE_ALT_ROOT */
  | { ccp: CertRepMessage } /* CHOICE_ALT_ROOT */
  | { ckuann: CAKeyUpdAnnContent } /* CHOICE_ALT_ROOT */
  | { cann: CertAnnContent } /* CHOICE_ALT_ROOT */
  | { rann: RevAnnContent } /* CHOICE_ALT_ROOT */
  | { crlann: CRLAnnContent } /* CHOICE_ALT_ROOT */
  | { pkiconf: PKIConfirmContent } /* CHOICE_ALT_ROOT */
  | { nested: NestedMessageContent } /* CHOICE_ALT_ROOT */
  | { genm: GenMsgContent } /* CHOICE_ALT_ROOT */
  | { genp: GenRepContent } /* CHOICE_ALT_ROOT */
  | { error: ErrorMsgContent } /* CHOICE_ALT_ROOT */
  | { certConf: CertConfirmContent } /* CHOICE_ALT_ROOT */
  | { pollReq: PollReqContent } /* CHOICE_ALT_ROOT */
  | { pollRep: PollRepContent } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION PKIBody */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PKIBody */
let _cached_decoder_for_PKIBody: $.ASN1Decoder<PKIBody> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PKIBody */

/* START_OF_SYMBOL_DEFINITION _decode_PKIBody */
/**
 * @summary Decodes an ASN.1 element into a(n) PKIBody
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PKIBody} The decoded data structure.
 */
export function _decode_PKIBody(el: _Element) {
  if (!_cached_decoder_for_PKIBody) {
    _cached_decoder_for_PKIBody = $._decode_inextensible_choice<PKIBody>({
      'CONTEXT 0': [
        'ir',
        $._decode_implicit<CertReqMessages>(() => _decode_CertReqMessages),
      ],
      'CONTEXT 1': [
        'ip',
        $._decode_implicit<CertRepMessage>(() => _decode_CertRepMessage),
      ],
      'CONTEXT 2': [
        'cr',
        $._decode_implicit<CertReqMessages>(() => _decode_CertReqMessages),
      ],
      'CONTEXT 3': [
        'cp',
        $._decode_implicit<CertRepMessage>(() => _decode_CertRepMessage),
      ],
      'CONTEXT 4': [
        'p10cr',
        $._decode_implicit<CertificationRequest>(
          () => _decode_CertificationRequest
        ),
      ],
      'CONTEXT 5': [
        'popdecc',
        $._decode_implicit<POPODecKeyChallContent>(
          () => _decode_POPODecKeyChallContent
        ),
      ],
      'CONTEXT 6': [
        'popdecr',
        $._decode_implicit<POPODecKeyRespContent>(
          () => _decode_POPODecKeyRespContent
        ),
      ],
      'CONTEXT 7': [
        'kur',
        $._decode_implicit<CertReqMessages>(() => _decode_CertReqMessages),
      ],
      'CONTEXT 8': [
        'kup',
        $._decode_implicit<CertRepMessage>(() => _decode_CertRepMessage),
      ],
      'CONTEXT 9': [
        'krr',
        $._decode_implicit<CertReqMessages>(() => _decode_CertReqMessages),
      ],
      'CONTEXT 10': [
        'krp',
        $._decode_implicit<KeyRecRepContent>(() => _decode_KeyRecRepContent),
      ],
      'CONTEXT 11': [
        'rr',
        $._decode_implicit<RevReqContent>(() => _decode_RevReqContent),
      ],
      'CONTEXT 12': [
        'rp',
        $._decode_implicit<RevRepContent>(() => _decode_RevRepContent),
      ],
      'CONTEXT 13': [
        'ccr',
        $._decode_implicit<CertReqMessages>(() => _decode_CertReqMessages),
      ],
      'CONTEXT 14': [
        'ccp',
        $._decode_implicit<CertRepMessage>(() => _decode_CertRepMessage),
      ],
      'CONTEXT 15': [
        'ckuann',
        $._decode_implicit<CAKeyUpdAnnContent>(
          () => _decode_CAKeyUpdAnnContent
        ),
      ],
      'CONTEXT 16': [
        'cann',
        $._decode_explicit<CertAnnContent>(() => _decode_CertAnnContent),
      ],
      'CONTEXT 17': [
        'rann',
        $._decode_implicit<RevAnnContent>(() => _decode_RevAnnContent),
      ],
      'CONTEXT 18': [
        'crlann',
        $._decode_implicit<CRLAnnContent>(() => _decode_CRLAnnContent),
      ],
      'CONTEXT 19': [
        'pkiconf',
        $._decode_implicit<PKIConfirmContent>(() => _decode_PKIConfirmContent),
      ],
      'CONTEXT 20': [
        'nested',
        $._decode_implicit<NestedMessageContent>(
          () => _decode_NestedMessageContent
        ),
      ],
      'CONTEXT 21': [
        'genm',
        $._decode_implicit<GenMsgContent>(() => _decode_GenMsgContent),
      ],
      'CONTEXT 22': [
        'genp',
        $._decode_implicit<GenRepContent>(() => _decode_GenRepContent),
      ],
      'CONTEXT 23': [
        'error',
        $._decode_implicit<ErrorMsgContent>(() => _decode_ErrorMsgContent),
      ],
      'CONTEXT 24': [
        'certConf',
        $._decode_implicit<CertConfirmContent>(
          () => _decode_CertConfirmContent
        ),
      ],
      'CONTEXT 25': [
        'pollReq',
        $._decode_implicit<PollReqContent>(() => _decode_PollReqContent),
      ],
      'CONTEXT 26': [
        'pollRep',
        $._decode_implicit<PollRepContent>(() => _decode_PollRepContent),
      ],
    });
  }
  return _cached_decoder_for_PKIBody(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PKIBody */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PKIBody */
let _cached_encoder_for_PKIBody: $.ASN1Encoder<PKIBody> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PKIBody */

/* START_OF_SYMBOL_DEFINITION _encode_PKIBody */
/**
 * @summary Encodes a(n) PKIBody into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PKIBody, encoded as an ASN.1 Element.
 */
export function _encode_PKIBody(
  value: PKIBody,
  elGetter: $.ASN1Encoder<PKIBody>
) {
  if (!_cached_encoder_for_PKIBody) {
    _cached_encoder_for_PKIBody = $._encode_choice<PKIBody>(
      {
        ir: $._encode_implicit(
          _TagClass.context,
          0,
          () => _encode_CertReqMessages,
          $.BER
        ),
        ip: $._encode_implicit(
          _TagClass.context,
          1,
          () => _encode_CertRepMessage,
          $.BER
        ),
        cr: $._encode_implicit(
          _TagClass.context,
          2,
          () => _encode_CertReqMessages,
          $.BER
        ),
        cp: $._encode_implicit(
          _TagClass.context,
          3,
          () => _encode_CertRepMessage,
          $.BER
        ),
        p10cr: $._encode_implicit(
          _TagClass.context,
          4,
          () => _encode_CertificationRequest,
          $.BER
        ),
        popdecc: $._encode_implicit(
          _TagClass.context,
          5,
          () => _encode_POPODecKeyChallContent,
          $.BER
        ),
        popdecr: $._encode_implicit(
          _TagClass.context,
          6,
          () => _encode_POPODecKeyRespContent,
          $.BER
        ),
        kur: $._encode_implicit(
          _TagClass.context,
          7,
          () => _encode_CertReqMessages,
          $.BER
        ),
        kup: $._encode_implicit(
          _TagClass.context,
          8,
          () => _encode_CertRepMessage,
          $.BER
        ),
        krr: $._encode_implicit(
          _TagClass.context,
          9,
          () => _encode_CertReqMessages,
          $.BER
        ),
        krp: $._encode_implicit(
          _TagClass.context,
          10,
          () => _encode_KeyRecRepContent,
          $.BER
        ),
        rr: $._encode_implicit(
          _TagClass.context,
          11,
          () => _encode_RevReqContent,
          $.BER
        ),
        rp: $._encode_implicit(
          _TagClass.context,
          12,
          () => _encode_RevRepContent,
          $.BER
        ),
        ccr: $._encode_implicit(
          _TagClass.context,
          13,
          () => _encode_CertReqMessages,
          $.BER
        ),
        ccp: $._encode_implicit(
          _TagClass.context,
          14,
          () => _encode_CertRepMessage,
          $.BER
        ),
        ckuann: $._encode_implicit(
          _TagClass.context,
          15,
          () => _encode_CAKeyUpdAnnContent,
          $.BER
        ),
        cann: $._encode_explicit(
          _TagClass.context,
          16,
          () => _encode_CertAnnContent,
          $.BER
        ),
        rann: $._encode_implicit(
          _TagClass.context,
          17,
          () => _encode_RevAnnContent,
          $.BER
        ),
        crlann: $._encode_implicit(
          _TagClass.context,
          18,
          () => _encode_CRLAnnContent,
          $.BER
        ),
        pkiconf: $._encode_implicit(
          _TagClass.context,
          19,
          () => _encode_PKIConfirmContent,
          $.BER
        ),
        nested: $._encode_implicit(
          _TagClass.context,
          20,
          () => _encode_NestedMessageContent,
          $.BER
        ),
        genm: $._encode_implicit(
          _TagClass.context,
          21,
          () => _encode_GenMsgContent,
          $.BER
        ),
        genp: $._encode_implicit(
          _TagClass.context,
          22,
          () => _encode_GenRepContent,
          $.BER
        ),
        error: $._encode_implicit(
          _TagClass.context,
          23,
          () => _encode_ErrorMsgContent,
          $.BER
        ),
        certConf: $._encode_implicit(
          _TagClass.context,
          24,
          () => _encode_CertConfirmContent,
          $.BER
        ),
        pollReq: $._encode_implicit(
          _TagClass.context,
          25,
          () => _encode_PollReqContent,
          $.BER
        ),
        pollRep: $._encode_implicit(
          _TagClass.context,
          26,
          () => _encode_PollRepContent,
          $.BER
        ),
      },
      $.BER
    );
  }
  return _cached_encoder_for_PKIBody(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PKIBody */

/* eslint-enable */
