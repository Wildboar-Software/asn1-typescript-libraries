/* eslint-disable */
import {
  itu_t,
  itu_r,
  ccitt,
  iso,
  joint_iso_itu_t,
  joint_iso_ccitt,
  OPTIONAL,
  BOOLEAN,
  INTEGER,
  BIT_STRING,
  OCTET_STRING,
  NULL,
  OBJECT_IDENTIFIER,
  ObjectDescriptor,
  EXTERNAL,
  REAL,
  INSTANCE_OF,
  ENUMERATED,
  EMBEDDED_PDV,
  UTF8String,
  RELATIVE_OID,
  SEQUENCE,
  SEQUENCE_OF,
  SET,
  SET_OF,
  GraphicString,
  NumericString,
  VisibleString,
  PrintableString,
  ISO646String,
  TeletexString,
  GeneralString,
  T61String,
  UniversalString,
  VideotexString,
  BMPString,
  IA5String,
  CharacterString,
  UTCTime,
  GeneralizedTime,
  TIME,
  DATE,
  TIME_OF_DAY,
  DATE_TIME,
  DURATION,
  OID_IRI,
  RELATIVE_OID_IRI,
  TRUE,
  FALSE,
  TRUE_BIT,
  FALSE_BIT,
  PLUS_INFINITY,
  MINUS_INFINITY,
  NOT_A_NUMBER,
  TYPE_IDENTIFIER,
  ABSTRACT_SYNTAX,
  ASN1Element as _Element,
  ASN1TagClass as _TagClass,
  ASN1Construction as _Construction,
  ASN1UniversalType as _UniversalType,
  ObjectIdentifier as _OID,
  External as _External,
  EmbeddedPDV as _PDV,
  ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/node/functional';

/* START_OF_SYMBOL_DEFINITION InvokeProblem */
/**
 * @summary InvokeProblem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InvokeProblem  ::=  INTEGER {
 *   duplicateInvocation(0), unrecognizedOperation(1), mistypedArgument(2),
 *   resourceLimitation(3), releaseInProgress(4), unrecognizedLinkedId(5),
 *   linkedResponseUnexpected(6), unexpectedLinkedOperation(7)}
 * ```
 */
export type InvokeProblem = INTEGER;
/* END_OF_SYMBOL_DEFINITION InvokeProblem */

/* START_OF_SYMBOL_DEFINITION InvokeProblem_duplicateInvocation */
/**
 * @summary InvokeProblem_duplicateInvocation
 * @constant
 * @type {number}
 */
export const InvokeProblem_duplicateInvocation: InvokeProblem = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION InvokeProblem_duplicateInvocation */

/* START_OF_SYMBOL_DEFINITION duplicateInvocation */
/**
 * @summary InvokeProblem_duplicateInvocation
 * @constant
 * @type {number}
 */
export const duplicateInvocation: InvokeProblem = InvokeProblem_duplicateInvocation; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION duplicateInvocation */

/* START_OF_SYMBOL_DEFINITION InvokeProblem_unrecognizedOperation */
/**
 * @summary InvokeProblem_unrecognizedOperation
 * @constant
 * @type {number}
 */
export const InvokeProblem_unrecognizedOperation: InvokeProblem = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION InvokeProblem_unrecognizedOperation */

/* START_OF_SYMBOL_DEFINITION unrecognizedOperation */
/**
 * @summary InvokeProblem_unrecognizedOperation
 * @constant
 * @type {number}
 */
export const unrecognizedOperation: InvokeProblem = InvokeProblem_unrecognizedOperation; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION unrecognizedOperation */

/* START_OF_SYMBOL_DEFINITION InvokeProblem_mistypedArgument */
/**
 * @summary InvokeProblem_mistypedArgument
 * @constant
 * @type {number}
 */
export const InvokeProblem_mistypedArgument: InvokeProblem = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION InvokeProblem_mistypedArgument */

/* START_OF_SYMBOL_DEFINITION mistypedArgument */
/**
 * @summary InvokeProblem_mistypedArgument
 * @constant
 * @type {number}
 */
export const mistypedArgument: InvokeProblem = InvokeProblem_mistypedArgument; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION mistypedArgument */

/* START_OF_SYMBOL_DEFINITION InvokeProblem_resourceLimitation */
/**
 * @summary InvokeProblem_resourceLimitation
 * @constant
 * @type {number}
 */
export const InvokeProblem_resourceLimitation: InvokeProblem = 3; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION InvokeProblem_resourceLimitation */

/* START_OF_SYMBOL_DEFINITION resourceLimitation */
/**
 * @summary InvokeProblem_resourceLimitation
 * @constant
 * @type {number}
 */
export const resourceLimitation: InvokeProblem = InvokeProblem_resourceLimitation; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION resourceLimitation */

/* START_OF_SYMBOL_DEFINITION InvokeProblem_releaseInProgress */
/**
 * @summary InvokeProblem_releaseInProgress
 * @constant
 * @type {number}
 */
export const InvokeProblem_releaseInProgress: InvokeProblem = 4; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION InvokeProblem_releaseInProgress */

/* START_OF_SYMBOL_DEFINITION releaseInProgress */
/**
 * @summary InvokeProblem_releaseInProgress
 * @constant
 * @type {number}
 */
export const releaseInProgress: InvokeProblem = InvokeProblem_releaseInProgress; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION releaseInProgress */

/* START_OF_SYMBOL_DEFINITION InvokeProblem_unrecognizedLinkedId */
/**
 * @summary InvokeProblem_unrecognizedLinkedId
 * @constant
 * @type {number}
 */
export const InvokeProblem_unrecognizedLinkedId: InvokeProblem = 5; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION InvokeProblem_unrecognizedLinkedId */

/* START_OF_SYMBOL_DEFINITION unrecognizedLinkedId */
/**
 * @summary InvokeProblem_unrecognizedLinkedId
 * @constant
 * @type {number}
 */
export const unrecognizedLinkedId: InvokeProblem = InvokeProblem_unrecognizedLinkedId; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION unrecognizedLinkedId */

/* START_OF_SYMBOL_DEFINITION InvokeProblem_linkedResponseUnexpected */
/**
 * @summary InvokeProblem_linkedResponseUnexpected
 * @constant
 * @type {number}
 */
export const InvokeProblem_linkedResponseUnexpected: InvokeProblem = 6; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION InvokeProblem_linkedResponseUnexpected */

/* START_OF_SYMBOL_DEFINITION linkedResponseUnexpected */
/**
 * @summary InvokeProblem_linkedResponseUnexpected
 * @constant
 * @type {number}
 */
export const linkedResponseUnexpected: InvokeProblem = InvokeProblem_linkedResponseUnexpected; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION linkedResponseUnexpected */

/* START_OF_SYMBOL_DEFINITION InvokeProblem_unexpectedLinkedOperation */
/**
 * @summary InvokeProblem_unexpectedLinkedOperation
 * @constant
 * @type {number}
 */
export const InvokeProblem_unexpectedLinkedOperation: InvokeProblem = 7; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION InvokeProblem_unexpectedLinkedOperation */

/* START_OF_SYMBOL_DEFINITION unexpectedLinkedOperation */
/**
 * @summary InvokeProblem_unexpectedLinkedOperation
 * @constant
 * @type {number}
 */
export const unexpectedLinkedOperation: InvokeProblem = InvokeProblem_unexpectedLinkedOperation; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION unexpectedLinkedOperation */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_InvokeProblem */
let _cached_decoder_for_InvokeProblem: $.ASN1Decoder<InvokeProblem> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_InvokeProblem */

/* START_OF_SYMBOL_DEFINITION _decode_InvokeProblem */
/**
 * @summary Decodes an ASN.1 element into a(n) InvokeProblem
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {InvokeProblem} The decoded data structure.
 */
export function _decode_InvokeProblem(el: _Element) {
  if (!_cached_decoder_for_InvokeProblem) {
    _cached_decoder_for_InvokeProblem = $._decodeInteger;
  }
  return _cached_decoder_for_InvokeProblem(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_InvokeProblem */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_InvokeProblem */
let _cached_encoder_for_InvokeProblem: $.ASN1Encoder<InvokeProblem> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_InvokeProblem */

/* START_OF_SYMBOL_DEFINITION _encode_InvokeProblem */
/**
 * @summary Encodes a(n) InvokeProblem into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InvokeProblem, encoded as an ASN.1 Element.
 */
export function _encode_InvokeProblem(
  value: InvokeProblem,
  elGetter: $.ASN1Encoder<InvokeProblem>
) {
  if (!_cached_encoder_for_InvokeProblem) {
    _cached_encoder_for_InvokeProblem = $._encodeInteger;
  }
  return _cached_encoder_for_InvokeProblem(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_InvokeProblem */

/* eslint-enable */
