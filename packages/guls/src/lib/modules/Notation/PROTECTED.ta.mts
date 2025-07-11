/* eslint-disable */
import {
  BIT_STRING,
  EMBEDDED_PDV,
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
  PROTECTED_dirSign,
  _get_decoder_for_PROTECTED_dirSign,
  _get_encoder_for_PROTECTED_dirSign,
} from '../Notation/PROTECTED-dirSign.ta.mjs';
import {
  SyntaxStructure,
  _decode_SyntaxStructure,
  _encode_SyntaxStructure,
} from '../GenericProtectingTransferSyntax/SyntaxStructure.ta.mjs';

/**
 * @summary PROTECTED
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PROTECTED{BaseType, PROTECTION-MAPPING:protectionReqd}  ::=  CHOICE {
 *   dirEncrypt
 *     BIT STRING
 *       (CONSTRAINED BY {
 *          BaseType-- dirEncrypt is for use only with the
 *          -- dirEncryptedTransformation,
 *          -- and generates the same encoding as the
 *          -- X.509/9594-8 ENCRYPTED type-- }),
 *   dirSign
 *     SEQUENCE {baseType        BaseType OPTIONAL,
 *               -- must be present for dirSignedTransformation
 *               -- and must be omitted for
 *               -- dirSignatureTransformation
 *               algorithmId     AlgorithmIdentifier,
 *               encipheredHash
 *                 BIT STRING
 *                   (CONSTRAINED BY {
 *                      BaseType-- contains enciphered hash--
 *                      -- of a value of BaseType -- })}-- dirSign is for use only with the
 *   -- dirSignedTransformation or
 *   -- dirSignatureTransformation, and generates
 *   -- the same encoding as the corresponding
 *   -- X.509/9594-8 SIGNED or SIGNATURE type--,
 *   noTransform  [0]  BaseType,
 *   -- noTransform invokes no security transformation.
 *   -- Subject to security policy, noTransform may be used
 *   -- if adequate protection is provided by lower layers
 *   -- and any application relays through which the data
 *   -- may pass are trusted to maintain the required
 *   -- protection. This alternative may only be used
 *   -- if protectionReqd.&bypassPermitted is TRUE,
 *   direct
 *     [1]  SyntaxStructure{{protectionReqd.&SecurityTransformation}},
 *   -- direct generates a protecting transfer syntax
 *   -- value, which is encoded using the same encoding
 *   -- rules as the surrounding ASN.1  (The type
 *   -- SyntaxStructure is imported from Rec. X.833 |
 *   -- ISO/IEC 11586-3)
 *   embedded
 *     [2]  EMBEDDED PDV
 *            (WITH COMPONENTS {
 *               identification  (WITH COMPONENTS {
 *                                  presentation-context-id  ,
 *                                  context-negotiation      (WITH COMPONENTS {
 *                                                              transfer-syntax  (CONSTRAINED BY {
 *                                                                     OBJECT
 *                                                                     IDENTIFIER:
 *                                                                     protectionReqd.
 *                                                                     &protTransferSyntax})
 *                                                            }),
 *                                  transfer-syntax          (CONSTRAINED BY {
 *                                                              OBJECT IDENTIFIER:
 *                                                              protectionReqd.
 *                                                                &protTransferSyntax})
 *                                }),
 *               data-value      (CONTAINING BaseType)
 *
 *             -- The data value encoded is a value of type BaseType
 *             })
 * }
 * ```
 */
export type PROTECTED<BaseType> =
  | { dirEncrypt: BIT_STRING } /* CHOICE_ALT_ROOT */
  | { dirSign: PROTECTED_dirSign<BaseType> } /* CHOICE_ALT_ROOT */
  | { noTransform: BaseType } /* CHOICE_ALT_ROOT */
  | { direct: SyntaxStructure } /* CHOICE_ALT_ROOT */
  | { embedded: EMBEDDED_PDV } /* CHOICE_ALT_ROOT */;


/**
 * @summary Returns a function that will decode an ASN.1 element into a(n) PROTECTED
 * @function
 * @param {_Element} el The element being decoded.
 * @returns A function that will decode an ASN.1 element.
 */
export function _get_decoder_for_PROTECTED<BaseType>(
  _decode_BaseType: $.ASN1Decoder<BaseType>
): $.ASN1Decoder<PROTECTED<BaseType>> {
  return $._decode_inextensible_choice<PROTECTED<BaseType>>({
    'UNIVERSAL 3': ['dirEncrypt', $._decodeBitString],
    'UNIVERSAL 16': [
      'dirSign',
      _get_decoder_for_PROTECTED_dirSign<BaseType>(_decode_BaseType),
    ],
    'CONTEXT 0': [
      'noTransform',
      $._decode_implicit<BaseType>(() => _decode_BaseType),
    ],
    'CONTEXT 1': [
      'direct',
      $._decode_explicit<SyntaxStructure>(() => _decode_SyntaxStructure),
    ],
    'CONTEXT 2': [
      'embedded',
      $._decode_implicit<EMBEDDED_PDV>(() => $._decodeEmbeddedPDV),
    ],
  });
}


/**
 * @summary Returns a function that will encode a(n) PROTECTED into an ASN.1 Element.
 * @function
 * @returns A function that will encode a(n) PROTECTED as an ASN.1 element.
 */
export function _get_encoder_for_PROTECTED<BaseType>(
  _encode_BaseType: $.ASN1Encoder<BaseType>
): $.ASN1Encoder<PROTECTED<BaseType>> {
  return $._encode_choice<PROTECTED<BaseType>>(
    {
      dirEncrypt: $._encodeBitString,
      dirSign: _get_encoder_for_PROTECTED_dirSign<BaseType>(_encode_BaseType),
      noTransform: $._encode_implicit(
        _TagClass.context,
        0,
        () => _encode_BaseType,
        $.BER
      ),
      direct: $._encode_explicit(
        _TagClass.context,
        1,
        () => _encode_SyntaxStructure,
        $.BER
      ),
      embedded: $._encode_implicit(
        _TagClass.context,
        2,
        () => $._encodeEmbeddedPDV,
        $.BER
      ),
    },
    $.BER
  );
}

/* eslint-enable */
