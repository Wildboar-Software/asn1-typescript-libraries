/* eslint-disable */
import {
  OPTIONAL,
  OCTET_STRING,
  GeneralizedTime,
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
  PKIHeader_pvno,
  _decode_PKIHeader_pvno,
  _encode_PKIHeader_pvno,
} from '../PKIXCMP-2009/PKIHeader-pvno.ta.mjs';
import {
  GeneralName,
  _decode_GeneralName,
  _encode_GeneralName,
} from '@wildboar/x500/src/lib/modules/CertificateExtensions/GeneralName.ta.mjs';
import {
  AlgorithmIdentifier,
  _decode_AlgorithmIdentifier,
  _encode_AlgorithmIdentifier,
} from '@wildboar/x500/src/lib/modules/AuthenticationFramework/AlgorithmIdentifier.ta.mjs';
import {
  KeyIdentifier,
  _decode_KeyIdentifier,
  _encode_KeyIdentifier,
} from '@wildboar/x500/src/lib/modules/CertificateExtensions/KeyIdentifier.ta.mjs';
import {
  PKIFreeText,
  _decode_PKIFreeText,
  _encode_PKIFreeText,
} from '../PKIXCMP-2009/PKIFreeText.ta.mjs';
import {
  InfoTypeAndValue,
  _decode_InfoTypeAndValue,
  _encode_InfoTypeAndValue,
} from '../PKIXCMP-2009/InfoTypeAndValue.ta.mjs';

/* START_OF_SYMBOL_DEFINITION PKIHeader */
/**
 * @summary PKIHeader
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PKIHeader ::= SEQUENCE {
 *     pvno                INTEGER     { cmp1999(1), cmp2000(2) },
 *     sender              GeneralName,
 *     -- identifies the sender
 *     recipient           GeneralName,
 *     -- identifies the intended recipient
 *     messageTime     [0] GeneralizedTime         OPTIONAL,
 *     -- time of production of this message (used when sender
 *     -- believes that the transport will be "suitable"; i.e.,
 *     -- that the time will still be meaningful upon receipt)
 *     protectionAlg   [1] AlgorithmIdentifier{ALGORITHM, {...}}
 *                             OPTIONAL,
 *     -- algorithm used for calculation of protection bits
 *     senderKID       [2] KeyIdentifier           OPTIONAL,
 *     recipKID        [3] KeyIdentifier           OPTIONAL,
 *     -- to identify specific keys used for protection
 *     transactionID   [4] OCTET STRING            OPTIONAL,
 *     -- identifies the transaction; i.e., this will be the same in
 *     -- corresponding request, response, certConf, and PKIConf
 *     -- messages
 *     senderNonce     [5] OCTET STRING            OPTIONAL,
 *     recipNonce      [6] OCTET STRING            OPTIONAL,
 *     -- nonces used to provide replay protection, senderNonce
 *     -- is inserted by the creator of this message; recipNonce
 *     -- is a nonce previously inserted in a related message by
 *     -- the intended recipient of this message
 *     freeText        [7] PKIFreeText             OPTIONAL,
 *     -- this may be used to indicate context-specific instructions
 *     -- (this field is intended for human consumption)
 *     generalInfo     [8] SEQUENCE SIZE (1..MAX) OF
 *                         InfoTypeAndValue     OPTIONAL
 *     -- this may be used to convey context-specific information
 *     -- (this field not primarily intended for human consumption)
 * }
 * ```
 *
 * @class
 */
export class PKIHeader {
  constructor(
    /**
     * @summary `pvno`.
     * @public
     * @readonly
     */
    readonly pvno: PKIHeader_pvno,
    /**
     * @summary `sender`.
     * @public
     * @readonly
     */
    readonly sender: GeneralName,
    /**
     * @summary `recipient`.
     * @public
     * @readonly
     */
    readonly recipient: GeneralName,
    /**
     * @summary `messageTime`.
     * @public
     * @readonly
     */
    readonly messageTime: OPTIONAL<GeneralizedTime>,
    /**
     * @summary `protectionAlg`.
     * @public
     * @readonly
     */
    readonly protectionAlg: OPTIONAL<AlgorithmIdentifier>,
    /**
     * @summary `senderKID`.
     * @public
     * @readonly
     */
    readonly senderKID: OPTIONAL<KeyIdentifier>,
    /**
     * @summary `recipKID`.
     * @public
     * @readonly
     */
    readonly recipKID: OPTIONAL<KeyIdentifier>,
    /**
     * @summary `transactionID`.
     * @public
     * @readonly
     */
    readonly transactionID: OPTIONAL<OCTET_STRING>,
    /**
     * @summary `senderNonce`.
     * @public
     * @readonly
     */
    readonly senderNonce: OPTIONAL<OCTET_STRING>,
    /**
     * @summary `recipNonce`.
     * @public
     * @readonly
     */
    readonly recipNonce: OPTIONAL<OCTET_STRING>,
    /**
     * @summary `freeText`.
     * @public
     * @readonly
     */
    readonly freeText: OPTIONAL<PKIFreeText>,
    /**
     * @summary `generalInfo`.
     * @public
     * @readonly
     */
    readonly generalInfo: OPTIONAL<InfoTypeAndValue[]>
  ) {}

  /**
   * @summary Restructures an object into a PKIHeader
   * @description
   *
   * This takes an `object` and converts it to a `PKIHeader`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `PKIHeader`.
   * @returns {PKIHeader}
   */
  public static _from_object(
    _o: { [_K in keyof PKIHeader]: PKIHeader[_K] }
  ): PKIHeader {
    return new PKIHeader(
      _o.pvno,
      _o.sender,
      _o.recipient,
      _o.messageTime,
      _o.protectionAlg,
      _o.senderKID,
      _o.recipKID,
      _o.transactionID,
      _o.senderNonce,
      _o.recipNonce,
      _o.freeText,
      _o.generalInfo
    );
  }
}
/* END_OF_SYMBOL_DEFINITION PKIHeader */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_PKIHeader */
/**
 * @summary The Leading Root Component Types of PKIHeader
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PKIHeader: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'pvno',
    false,
    $.hasTag(_TagClass.universal, 2),
    undefined,
    undefined
  ),
  new $.ComponentSpec('sender', false, $.hasAnyTag, undefined, undefined),
  new $.ComponentSpec('recipient', false, $.hasAnyTag, undefined, undefined),
  new $.ComponentSpec(
    'messageTime',
    true,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'protectionAlg',
    true,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'senderKID',
    true,
    $.hasTag(_TagClass.context, 2),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'recipKID',
    true,
    $.hasTag(_TagClass.context, 3),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'transactionID',
    true,
    $.hasTag(_TagClass.context, 4),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'senderNonce',
    true,
    $.hasTag(_TagClass.context, 5),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'recipNonce',
    true,
    $.hasTag(_TagClass.context, 6),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'freeText',
    true,
    $.hasTag(_TagClass.context, 7),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'generalInfo',
    true,
    $.hasTag(_TagClass.context, 8),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_PKIHeader */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_PKIHeader */
/**
 * @summary The Trailing Root Component Types of PKIHeader
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PKIHeader: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_PKIHeader */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_PKIHeader */
/**
 * @summary The Extension Addition Component Types of PKIHeader
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PKIHeader: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_PKIHeader */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PKIHeader */
let _cached_decoder_for_PKIHeader: $.ASN1Decoder<PKIHeader> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PKIHeader */

/* START_OF_SYMBOL_DEFINITION _decode_PKIHeader */
/**
 * @summary Decodes an ASN.1 element into a(n) PKIHeader
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PKIHeader} The decoded data structure.
 */
export function _decode_PKIHeader(el: _Element) {
  if (!_cached_decoder_for_PKIHeader) {
    _cached_decoder_for_PKIHeader = function (el: _Element): PKIHeader {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let pvno!: PKIHeader_pvno;
      let sender!: GeneralName;
      let recipient!: GeneralName;
      let messageTime: OPTIONAL<GeneralizedTime>;
      let protectionAlg: OPTIONAL<AlgorithmIdentifier>;
      let senderKID: OPTIONAL<KeyIdentifier>;
      let recipKID: OPTIONAL<KeyIdentifier>;
      let transactionID: OPTIONAL<OCTET_STRING>;
      let senderNonce: OPTIONAL<OCTET_STRING>;
      let recipNonce: OPTIONAL<OCTET_STRING>;
      let freeText: OPTIONAL<PKIFreeText>;
      let generalInfo: OPTIONAL<InfoTypeAndValue[]>;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        pvno: (_el: _Element): void => {
          pvno = _decode_PKIHeader_pvno(_el);
        },
        sender: (_el: _Element): void => {
          sender = _decode_GeneralName(_el);
        },
        recipient: (_el: _Element): void => {
          recipient = _decode_GeneralName(_el);
        },
        messageTime: (_el: _Element): void => {
          messageTime = $._decode_explicit<GeneralizedTime>(
            () => $._decodeGeneralizedTime
          )(_el);
        },
        protectionAlg: (_el: _Element): void => {
          protectionAlg = $._decode_explicit<AlgorithmIdentifier>(
            () => _decode_AlgorithmIdentifier
          )(_el);
        },
        senderKID: (_el: _Element): void => {
          senderKID = $._decode_explicit<KeyIdentifier>(
            () => _decode_KeyIdentifier
          )(_el);
        },
        recipKID: (_el: _Element): void => {
          recipKID = $._decode_explicit<KeyIdentifier>(
            () => _decode_KeyIdentifier
          )(_el);
        },
        transactionID: (_el: _Element): void => {
          transactionID = $._decode_explicit<OCTET_STRING>(
            () => $._decodeOctetString
          )(_el);
        },
        senderNonce: (_el: _Element): void => {
          senderNonce = $._decode_explicit<OCTET_STRING>(
            () => $._decodeOctetString
          )(_el);
        },
        recipNonce: (_el: _Element): void => {
          recipNonce = $._decode_explicit<OCTET_STRING>(
            () => $._decodeOctetString
          )(_el);
        },
        freeText: (_el: _Element): void => {
          freeText = $._decode_explicit<PKIFreeText>(() => _decode_PKIFreeText)(
            _el
          );
        },
        generalInfo: (_el: _Element): void => {
          generalInfo = $._decode_explicit<InfoTypeAndValue[]>(() =>
            $._decodeSequenceOf<InfoTypeAndValue>(
              () => _decode_InfoTypeAndValue
            )
          )(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_PKIHeader,
        _extension_additions_list_spec_for_PKIHeader,
        _root_component_type_list_2_spec_for_PKIHeader,
        undefined
      );
      return new PKIHeader /* SEQUENCE_CONSTRUCTOR_CALL */(
        pvno,
        sender,
        recipient,
        messageTime,
        protectionAlg,
        senderKID,
        recipKID,
        transactionID,
        senderNonce,
        recipNonce,
        freeText,
        generalInfo
      );
    };
  }
  return _cached_decoder_for_PKIHeader(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PKIHeader */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PKIHeader */
let _cached_encoder_for_PKIHeader: $.ASN1Encoder<PKIHeader> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PKIHeader */

/* START_OF_SYMBOL_DEFINITION _encode_PKIHeader */
/**
 * @summary Encodes a(n) PKIHeader into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PKIHeader, encoded as an ASN.1 Element.
 */
export function _encode_PKIHeader(
  value: PKIHeader,
  elGetter: $.ASN1Encoder<PKIHeader>
) {
  if (!_cached_encoder_for_PKIHeader) {
    _cached_encoder_for_PKIHeader = function (
      value: PKIHeader    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_PKIHeader_pvno(value.pvno, $.BER),
            /* REQUIRED   */ _encode_GeneralName(value.sender, $.BER),
            /* REQUIRED   */ _encode_GeneralName(value.recipient, $.BER),
            /* IF_ABSENT  */ value.messageTime === undefined
              ? undefined
              : $._encode_explicit(
                  _TagClass.context,
                  0,
                  () => $._encodeGeneralizedTime,
                  $.BER
                )(value.messageTime, $.BER),
            /* IF_ABSENT  */ value.protectionAlg === undefined
              ? undefined
              : $._encode_explicit(
                  _TagClass.context,
                  1,
                  () => _encode_AlgorithmIdentifier,
                  $.BER
                )(value.protectionAlg, $.BER),
            /* IF_ABSENT  */ value.senderKID === undefined
              ? undefined
              : $._encode_explicit(
                  _TagClass.context,
                  2,
                  () => _encode_KeyIdentifier,
                  $.BER
                )(value.senderKID, $.BER),
            /* IF_ABSENT  */ value.recipKID === undefined
              ? undefined
              : $._encode_explicit(
                  _TagClass.context,
                  3,
                  () => _encode_KeyIdentifier,
                  $.BER
                )(value.recipKID, $.BER),
            /* IF_ABSENT  */ value.transactionID === undefined
              ? undefined
              : $._encode_explicit(
                  _TagClass.context,
                  4,
                  () => $._encodeOctetString,
                  $.BER
                )(value.transactionID, $.BER),
            /* IF_ABSENT  */ value.senderNonce === undefined
              ? undefined
              : $._encode_explicit(
                  _TagClass.context,
                  5,
                  () => $._encodeOctetString,
                  $.BER
                )(value.senderNonce, $.BER),
            /* IF_ABSENT  */ value.recipNonce === undefined
              ? undefined
              : $._encode_explicit(
                  _TagClass.context,
                  6,
                  () => $._encodeOctetString,
                  $.BER
                )(value.recipNonce, $.BER),
            /* IF_ABSENT  */ value.freeText === undefined
              ? undefined
              : $._encode_explicit(
                  _TagClass.context,
                  7,
                  () => _encode_PKIFreeText,
                  $.BER
                )(value.freeText, $.BER),
            /* IF_ABSENT  */ value.generalInfo === undefined
              ? undefined
              : $._encode_explicit(
                  _TagClass.context,
                  8,
                  () =>
                    $._encodeSequenceOf<InfoTypeAndValue>(
                      () => _encode_InfoTypeAndValue,
                      $.BER
                    ),
                  $.BER
                )(value.generalInfo, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_PKIHeader(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PKIHeader */

/* eslint-enable */
