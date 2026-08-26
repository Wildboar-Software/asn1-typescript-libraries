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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
  PKIHeader_pvno,
  _decode_PKIHeader_pvno,
  _encode_PKIHeader_pvno,
} from '../PKIXCMP-2009/PKIHeader-pvno.ta.mjs';
import {
  GeneralName,
  _decode_GeneralName,
  _encode_GeneralName,
} from '@wildboar/x500/CertificateExtensions';
import {
  AlgorithmIdentifier,
  _decode_AlgorithmIdentifier,
  _encode_AlgorithmIdentifier,
} from '@wildboar/x500/AuthenticationFramework';
import {
  KeyIdentifier,
  _decode_KeyIdentifier,
  _encode_KeyIdentifier,
} from '@wildboar/x500/CertificateExtensions';
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


/**
 * @summary PKIHeader
 * @description
 *
 * Header common to CMP messages for addressing and transaction
 * identification ([RFC 4210 §5.1.1](https://datatracker.ietf.org/doc/html/rfc4210#section-5.1.1)). Protected with the body when
 * `PKIProtection` is used (no assumption of secure transport).
 *
 * `pvno` is fixed at `cmp2000`(2) for this specification. Optional
 * `generalInfo` may carry machine-processable extensions such as
 * `implicitConfirm` (`{id-it 13}`) and `confirmWaitTime`
 * (`{id-it 14}`) ([RFC 4210 §5.1.1.1](https://datatracker.ietf.org/doc/html/rfc4210#section-5.1.1.1), [RFC 4210 §5.1.1.2](https://datatracker.ietf.org/doc/html/rfc4210#section-5.1.1.2)).
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
 */
export class PKIHeader {
  constructor(
    /**
     * @summary `pvno`.
     * @description
     *
     * Protocol version: `cmp1999`(1) or `cmp2000`(2). Fixed at 2 for
     * RFC 4210 ([RFC 4210 §5.1.1](https://datatracker.ietf.org/doc/html/rfc4210#section-5.1.1); version negotiation in §7).
     *
     * @public
     * @readonly
     */
    readonly pvno: PKIHeader_pvno,
    /**
     * @summary `sender`.
     * @description
     *
     * Name of the sender. With `senderKID` (if supplied), should identify
     * the key to verify protection. If the sender is unknown (e.g.,
     * initialization request), MUST be a NULL name (empty RDN SEQUENCE)
     * and `senderKID` MUST identify the shared secret
     * ([RFC 4210 §5.1.1](https://datatracker.ietf.org/doc/html/rfc4210#section-5.1.1)).
     *
     * @public
     * @readonly
     */
    readonly sender: GeneralName,
    /**
     * @summary `recipient`.
     * @description
     *
     * Name of the intended recipient. With `recipKID` (if supplied),
     * should be usable to verify protection ([RFC 4210 §5.1.1](https://datatracker.ietf.org/doc/html/rfc4210#section-5.1.1)).
     *
     * @public
     * @readonly
     */
    readonly recipient: GeneralName,
    /**
     * @summary `messageTime`.
     * @description
     *
     * Time the sender created the message; useful for EE clock
     * consistency checks ([RFC 4210 §5.1.1](https://datatracker.ietf.org/doc/html/rfc4210#section-5.1.1)).
     *
     * @public
     * @readonly
     */
    readonly messageTime?: OPTIONAL<GeneralizedTime>,
    /**
     * @summary `protectionAlg`.
     * @description
     *
     * Algorithm used to calculate `PKIProtection`. MUST be omitted if
     * protection bits are omitted; MUST be present if protection bits
     * are supplied ([RFC 4210 §5.1.1](https://datatracker.ietf.org/doc/html/rfc4210#section-5.1.1)).
     *
     * @public
     * @readonly
     */
    readonly protectionAlg?: OPTIONAL<AlgorithmIdentifier>,
    /**
     * @summary `senderKID`.
     * @description
     *
     * Identifies the sender key used for protection. MUST be used if
     * needed to uniquely identify a key; SHOULD be omitted otherwise.
     * REQUIRED with a NULL `sender` to reference shared-secret material
     * ([RFC 4210 §5.1.1](https://datatracker.ietf.org/doc/html/rfc4210#section-5.1.1)).
     *
     * @public
     * @readonly
     */
    readonly senderKID?: OPTIONAL<KeyIdentifier>,
    /**
     * @summary `recipKID`.
     * @description
     *
     * Identifies the recipient key used for protection (normally only
     * needed with Diffie-Hellman protection) ([RFC 4210 §5.1.1](https://datatracker.ietf.org/doc/html/rfc4210#section-5.1.1)).
     *
     * @public
     * @readonly
     */
    readonly recipKID?: OPTIONAL<KeyIdentifier>,
    /**
     * @summary `transactionID`.
     * @description
     *
     * Correlates messages in a transaction. For multi-message exchanges,
     * clients SHOULD generate one for the first request; servers MUST
     * echo it or assign one if missing. RECOMMENDED: 128 bits of
     * (pseudo-)random data. Duplicate in-use IDs yield
     * `transactionIdInUse` ([RFC 4210 §5.1.1](https://datatracker.ietf.org/doc/html/rfc4210#section-5.1.1)).
     *
     * @public
     * @readonly
     */
    readonly transactionID?: OPTIONAL<OCTET_STRING>,
    /**
     * @summary `senderNonce`.
     * @description
     *
     * Replay protection: typically 128 bits of (pseudo-)random data from
     * the creator of this message ([RFC 4210 §5.1.1](https://datatracker.ietf.org/doc/html/rfc4210#section-5.1.1)).
     *
     * @public
     * @readonly
     */
    readonly senderNonce?: OPTIONAL<OCTET_STRING>,
    /**
     * @summary `recipNonce`.
     * @description
     *
     * Replay protection: copied from the `senderNonce` of the previous
     * message in the transaction ([RFC 4210 §5.1.1](https://datatracker.ietf.org/doc/html/rfc4210#section-5.1.1)).
     *
     * @public
     * @readonly
     */
    readonly recipNonce?: OPTIONAL<OCTET_STRING>,
    /**
     * @summary `freeText`.
     * @description
     *
     * Human-readable text in any number of languages; the first language
     * indicates the desired language for replies ([RFC 4210 §5.1.1](https://datatracker.ietf.org/doc/html/rfc4210#section-5.1.1)).
     *
     * @public
     * @readonly
     */
    readonly freeText?: OPTIONAL<PKIFreeText>,
    /**
     * @summary `generalInfo`.
     * @description
     *
     * Machine-processable additional data (e.g., `implicitConfirm`,
     * `confirmWaitTime`, original `PKIMessages` as `{id-it 15}`)
     * ([RFC 4210 §5.1.1](https://datatracker.ietf.org/doc/html/rfc4210#section-5.1.1), [RFC 4210 §5.1.3.4](https://datatracker.ietf.org/doc/html/rfc4210#section-5.1.3.4)).
     *
     * @public
     * @readonly
     */
    readonly generalInfo?: OPTIONAL<InfoTypeAndValue[]>
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
    $.hasTag(_TagClass.universal, 2)
  ),
  new $.ComponentSpec('sender', false, $.hasAnyTag),
  new $.ComponentSpec('recipient', false, $.hasAnyTag),
  new $.ComponentSpec(
    'messageTime',
    true,
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'protectionAlg',
    true,
    $.hasTag(_TagClass.context, 1)
  ),
  new $.ComponentSpec(
    'senderKID',
    true,
    $.hasTag(_TagClass.context, 2)
  ),
  new $.ComponentSpec(
    'recipKID',
    true,
    $.hasTag(_TagClass.context, 3)
  ),
  new $.ComponentSpec(
    'transactionID',
    true,
    $.hasTag(_TagClass.context, 4)
  ),
  new $.ComponentSpec(
    'senderNonce',
    true,
    $.hasTag(_TagClass.context, 5)
  ),
  new $.ComponentSpec(
    'recipNonce',
    true,
    $.hasTag(_TagClass.context, 6)
  ),
  new $.ComponentSpec(
    'freeText',
    true,
    $.hasTag(_TagClass.context, 7)
  ),
  new $.ComponentSpec(
    'generalInfo',
    true,
    $.hasTag(_TagClass.context, 8)
  ),
];


/**
 * @summary The Trailing Root Component Types of PKIHeader
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PKIHeader: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of PKIHeader
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PKIHeader: $.ComponentSpec[] = [];


let _cached_decoder_for_PKIHeader: $.ASN1Decoder<PKIHeader> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) PKIHeader
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PKIHeader} The decoded data structure.
 */
export function _decode_PKIHeader(el: _Element): PKIHeader {
  if (!_cached_decoder_for_PKIHeader) {
    _cached_decoder_for_PKIHeader = function (el: _Element): PKIHeader {
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
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_PKIHeader,
        _extension_additions_list_spec_for_PKIHeader,
        _root_component_type_list_2_spec_for_PKIHeader,
        undefined
      );
      return new PKIHeader (
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


let _cached_encoder_for_PKIHeader: $.ASN1Encoder<PKIHeader> | null = null;


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
): _Element {
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


/* eslint-enable */
