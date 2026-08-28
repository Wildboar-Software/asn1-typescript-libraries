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
 * @summary Value
 * @description
 *
 * SOAP 1.2 fault-code local name (X.892 Table 2). Maps to
 * `prefix:LocalName` under the SOAP envelope namespace.
 * ITU-T Rec. X.892 (05/2005)
 * [§7.4.3](https://www.itu.int/rec/T-REC-X.892-200505-I), Table 2.
 * W3C SOAP 1.2 Part 1
 * [§5.4.6](https://www.w3.org/TR/2003/REC-soap12-part1-20030624/#faultcodes).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Value  ::=  ENUMERATED {
 *   versionMismatch, mustUnderstand, dataEncodingUnknown, sender, receiver
 * }
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_Value {
  versionMismatch = 0,
  mustUnderstand = 1,
  dataEncodingUnknown = 2,
  sender = 3,
  receiver = 4,
}


/**
 * @summary Value
 * @description
 *
 * SOAP 1.2 fault-code local name (X.892 Table 2). See
 * {@link _enum_for_Value}.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Value  ::=  ENUMERATED {
 *   versionMismatch, mustUnderstand, dataEncodingUnknown, sender, receiver
 * }
 * ```
 *
 * @enum {number}
 */
export type Value = _enum_for_Value;


/**
 * @summary Value
 * @description
 *
 * SOAP 1.2 fault-code local name (X.892 Table 2). See
 * {@link _enum_for_Value}.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Value  ::=  ENUMERATED {
 *   versionMismatch, mustUnderstand, dataEncodingUnknown, sender, receiver
 * }
 * ```
 *
 * @enum {number}
 */
export const Value = _enum_for_Value;


/**
 * @summary Value_versionMismatch
 * @description SOAP `VersionMismatch`: the node found an unexpected
 * element instead of a SOAP Envelope (wrong namespace/version).
 * ITU-T Rec. X.892 (05/2005) Table 2. W3C SOAP 1.2 Part 1 §5.4.6.
 * @constant
 * @type {number}
 */
export const Value_versionMismatch: Value =
  Value.versionMismatch; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary versionMismatch
 * @description SOAP `VersionMismatch`. See
 * {@link Value_versionMismatch}.
 * @constant
 * @type {number}
 */
export const versionMismatch: Value =
  Value.versionMismatch; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Value_mustUnderstand
 * @description SOAP `MustUnderstand`: a mandatory header block
 * targeted at this node was not understood.
 * ITU-T Rec. X.892 (05/2005) Table 2. W3C SOAP 1.2 Part 1 §5.4.6,
 * §5.4.8.
 * @constant
 * @type {number}
 */
export const Value_mustUnderstand: Value =
  Value.mustUnderstand; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary mustUnderstand
 * @description SOAP `MustUnderstand`. See
 * {@link Value_mustUnderstand}.
 * @constant
 * @type {number}
 */
export const mustUnderstand: Value =
  Value.mustUnderstand; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Value_dataEncodingUnknown
 * @description SOAP `DataEncodingUnknown`: a header or body child
 * used an `encodingStyle` this node does not support.
 * ITU-T Rec. X.892 (05/2005) Table 2. W3C SOAP 1.2 Part 1 §5.4.6.
 * @constant
 * @type {number}
 */
export const Value_dataEncodingUnknown: Value =
  Value.dataEncodingUnknown; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary dataEncodingUnknown
 * @description SOAP `DataEncodingUnknown`. See
 * {@link Value_dataEncodingUnknown}.
 * @constant
 * @type {number}
 */
export const dataEncodingUnknown: Value =
  Value.dataEncodingUnknown; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Value_sender
 * @description SOAP `Sender`: the message was malformed or lacked
 * information needed to succeed (analogous to HTTP 4xx). Also used
 * with Subcode `NotIdentified` when an embedded ASN.1 type cannot
 * be identified (X.892 §9.5).
 * ITU-T Rec. X.892 (05/2005) Table 2, §9.5. W3C SOAP 1.2 Part 1
 * §5.4.6.
 * @constant
 * @type {number}
 */
export const Value_sender: Value =
  Value.sender; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary sender
 * @description SOAP `Sender`. See {@link Value_sender}.
 * @constant
 * @type {number}
 */
export const sender: Value = Value.sender; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Value_receiver
 * @description SOAP `Receiver`: the message could not be processed
 * for reasons not attributable to its contents (analogous to HTTP
 * 5xx). ITU-T Rec. X.892 (05/2005) Table 2. W3C SOAP 1.2 Part 1
 * §5.4.6.
 * @constant
 * @type {number}
 */
export const Value_receiver: Value =
  Value.receiver; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary receiver
 * @description SOAP `Receiver`. See {@link Value_receiver}.
 * @constant
 * @type {number}
 */
export const receiver: Value =
  Value.receiver; /* SHORT_NAMED_ENUMERATED_VALUE */



export const _decode_Value = $._decodeEnumerated;




export const _encode_Value = $._encodeEnumerated;


/* eslint-enable */
