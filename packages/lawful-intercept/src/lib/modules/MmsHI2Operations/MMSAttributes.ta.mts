/* eslint-disable */
import {
    GeneralizedTime,
    type INTEGER,
    type OCTET_STRING,
    type UTF8String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Address, _decode_Address, _encode_Address } from "../MmsHI2Operations/Address.ta.mjs";
// export { Address, _decode_Address, _encode_Address } from "../MmsHI2Operations/Address.ta.mjs";
import { YesNo, _decode_YesNo, _encode_YesNo } from "../MmsHI2Operations/YesNo.ta.mjs";
// export { YesNo, _decode_YesNo, _encode_YesNo } from "../MmsHI2Operations/YesNo.ta.mjs";
import { From, _decode_From, _encode_From } from "../MmsHI2Operations/From.ta.mjs";
// export { From, _decode_From, _encode_From } from "../MmsHI2Operations/From.ta.mjs";
import { MessageClass, _decode_MessageClass, _encode_MessageClass } from "../MmsHI2Operations/MessageClass.ta.mjs";
// export { MessageClass, _decode_MessageClass, _encode_MessageClass } from "../MmsHI2Operations/MessageClass.ta.mjs";
import { Priority, _decode_Priority, _encode_Priority } from "../MmsHI2Operations/Priority.ta.mjs";
// export { Priority, _enum_for_Priority, Priority_low /* IMPORTED_LONG_ENUMERATION_ITEM */, low /* IMPORTED_SHORT_ENUMERATION_ITEM */, Priority_normal /* IMPORTED_LONG_ENUMERATION_ITEM */, normal /* IMPORTED_SHORT_ENUMERATION_ITEM */, Priority_high /* IMPORTED_LONG_ENUMERATION_ITEM */, high /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Priority, _encode_Priority } from "../MmsHI2Operations/Priority.ta.mjs";
import { PreviouslySentBy, _decode_PreviouslySentBy, _encode_PreviouslySentBy } from "../MmsHI2Operations/PreviouslySentBy.ta.mjs";
// export { PreviouslySentBy, _decode_PreviouslySentBy, _encode_PreviouslySentBy } from "../MmsHI2Operations/PreviouslySentBy.ta.mjs";
import { PreviouslySentByDateTime, _decode_PreviouslySentByDateTime, _encode_PreviouslySentByDateTime } from "../MmsHI2Operations/PreviouslySentByDateTime.ta.mjs";
// export { PreviouslySentByDateTime, _decode_PreviouslySentByDateTime, _encode_PreviouslySentByDateTime } from "../MmsHI2Operations/PreviouslySentByDateTime.ta.mjs";


/**
 * @summary MMSAttributes
 * @description
 * 
 * One information element that should appear in the MMBox view of each selected
 * message (table 15.3.6.1.2).
 * 
 * The alternatives are the application id, auxiliary application info, BCC, CC,
 * content, content type, date, delivery report, delivery time, expiry, From,
 * message class, message id, message size, priority, read report, To, reply
 * application id, previously sent by, previously sent by date and time, and
 * additional headers. Clause 15.3 does not further define
 * `attributeAdditionalHeaders` or `attributeContent`.
 * 
 * 3GPP TS 33.108, table 15.3.6.1.2 and annex B.15.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSAttributes  ::=  CHOICE
 * {
 *     attributeApplicID        [1] UTF8String,
 *     attributeAuxApplicInfo        [2] UTF8String,
 *     attributeBCC        [3] Address,
 *     attributeCC            [4] Address,
 *     attributeContent        [5] OCTET STRING,
 *     attributeContentType        [6] OCTET STRING,
 *     attributeDate        [7] GeneralizedTime,
 *     attributeDeliveryReport        [8] YesNo,
 *     attributeDeliveryTime        [9] GeneralizedTime,
 *     attributeExpiry        [10] GeneralizedTime,
 *     attributeFrom        [11] From,
 *     attributeMessageClass        [12] MessageClass,
 *     attributeMessageID        [13] UTF8String,
 *     attributeMessageSize        [14] INTEGER,
 *     attributePriority        [15] Priority,
 *     attributeReadReport        [16] YesNo,
 *     attributeTo            [17] Address,
 *     attributeReplyApplicID        [18] UTF8String,
 *     attributePreviouslySentBy    [19] PreviouslySentBy,
 *     attributePreviouslySentByDateTime    [20] PreviouslySentByDateTime,
 *     attributeAdditionalHeaders    [21] OCTET STRING,
 *     ...
 * }
 * ```
 */
export
type MMSAttributes =
    { attributeApplicID: UTF8String } /* CHOICE_ALT_ROOT */
    | { attributeAuxApplicInfo: UTF8String } /* CHOICE_ALT_ROOT */
    | { attributeBCC: Address } /* CHOICE_ALT_ROOT */
    | { attributeCC: Address } /* CHOICE_ALT_ROOT */
    | { attributeContent: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { attributeContentType: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { attributeDate: GeneralizedTime } /* CHOICE_ALT_ROOT */
    | { attributeDeliveryReport: YesNo } /* CHOICE_ALT_ROOT */
    | { attributeDeliveryTime: GeneralizedTime } /* CHOICE_ALT_ROOT */
    | { attributeExpiry: GeneralizedTime } /* CHOICE_ALT_ROOT */
    | { attributeFrom: From } /* CHOICE_ALT_ROOT */
    | { attributeMessageClass: MessageClass } /* CHOICE_ALT_ROOT */
    | { attributeMessageID: UTF8String } /* CHOICE_ALT_ROOT */
    | { attributeMessageSize: INTEGER } /* CHOICE_ALT_ROOT */
    | { attributePriority: Priority } /* CHOICE_ALT_ROOT */
    | { attributeReadReport: YesNo } /* CHOICE_ALT_ROOT */
    | { attributeTo: Address } /* CHOICE_ALT_ROOT */
    | { attributeReplyApplicID: UTF8String } /* CHOICE_ALT_ROOT */
    | { attributePreviouslySentBy: PreviouslySentBy } /* CHOICE_ALT_ROOT */
    | { attributePreviouslySentByDateTime: PreviouslySentByDateTime } /* CHOICE_ALT_ROOT */
    | { attributeAdditionalHeaders: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_MMSAttributes: $.ASN1Decoder<MMSAttributes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MMSAttributes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MMSAttributes (el: _Element): MMSAttributes {
    if (!_cached_decoder_for_MMSAttributes) { _cached_decoder_for_MMSAttributes = $._decode_extensible_choice<MMSAttributes>({
    "CONTEXT 1": [ "attributeApplicID", $._decode_implicit<UTF8String>(() => $._decodeUTF8String) ],
    "CONTEXT 2": [ "attributeAuxApplicInfo", $._decode_implicit<UTF8String>(() => $._decodeUTF8String) ],
    "CONTEXT 3": [ "attributeBCC", $._decode_explicit<Address>(() => _decode_Address) ],
    "CONTEXT 4": [ "attributeCC", $._decode_explicit<Address>(() => _decode_Address) ],
    "CONTEXT 5": [ "attributeContent", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 6": [ "attributeContentType", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 7": [ "attributeDate", $._decode_implicit<GeneralizedTime>(() => $._decodeGeneralizedTime) ],
    "CONTEXT 8": [ "attributeDeliveryReport", $._decode_implicit<YesNo>(() => _decode_YesNo) ],
    "CONTEXT 9": [ "attributeDeliveryTime", $._decode_implicit<GeneralizedTime>(() => $._decodeGeneralizedTime) ],
    "CONTEXT 10": [ "attributeExpiry", $._decode_implicit<GeneralizedTime>(() => $._decodeGeneralizedTime) ],
    "CONTEXT 11": [ "attributeFrom", $._decode_implicit<From>(() => _decode_From) ],
    "CONTEXT 12": [ "attributeMessageClass", $._decode_explicit<MessageClass>(() => _decode_MessageClass) ],
    "CONTEXT 13": [ "attributeMessageID", $._decode_implicit<UTF8String>(() => $._decodeUTF8String) ],
    "CONTEXT 14": [ "attributeMessageSize", $._decode_implicit<INTEGER>(() => $._decodeInteger) ],
    "CONTEXT 15": [ "attributePriority", $._decode_implicit<Priority>(() => _decode_Priority) ],
    "CONTEXT 16": [ "attributeReadReport", $._decode_implicit<YesNo>(() => _decode_YesNo) ],
    "CONTEXT 17": [ "attributeTo", $._decode_explicit<Address>(() => _decode_Address) ],
    "CONTEXT 18": [ "attributeReplyApplicID", $._decode_implicit<UTF8String>(() => $._decodeUTF8String) ],
    "CONTEXT 19": [ "attributePreviouslySentBy", $._decode_implicit<PreviouslySentBy>(() => _decode_PreviouslySentBy) ],
    "CONTEXT 20": [ "attributePreviouslySentByDateTime", $._decode_implicit<PreviouslySentByDateTime>(() => _decode_PreviouslySentByDateTime) ],
    "CONTEXT 21": [ "attributeAdditionalHeaders", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ]
}); }
    return _cached_decoder_for_MMSAttributes(el);
}

let _cached_encoder_for_MMSAttributes: $.ASN1Encoder<MMSAttributes> | null = null;

/**
 * @summary Encodes a(n) MMSAttributes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMSAttributes, encoded as an ASN.1 Element.
 */
export
function _encode_MMSAttributes (value: MMSAttributes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MMSAttributes) { _cached_encoder_for_MMSAttributes = $._encode_choice<MMSAttributes>({
    "attributeApplicID": $._encode_implicit(_TagClass.context, 1, () => $._encodeUTF8String, $.BER),
    "attributeAuxApplicInfo": $._encode_implicit(_TagClass.context, 2, () => $._encodeUTF8String, $.BER),
    "attributeBCC": $._encode_explicit(_TagClass.context, 3, () => _encode_Address, $.BER),
    "attributeCC": $._encode_explicit(_TagClass.context, 4, () => _encode_Address, $.BER),
    "attributeContent": $._encode_implicit(_TagClass.context, 5, () => $._encodeOctetString, $.BER),
    "attributeContentType": $._encode_implicit(_TagClass.context, 6, () => $._encodeOctetString, $.BER),
    "attributeDate": $._encode_implicit(_TagClass.context, 7, () => $._encodeGeneralizedTime, $.BER),
    "attributeDeliveryReport": $._encode_implicit(_TagClass.context, 8, () => _encode_YesNo, $.BER),
    "attributeDeliveryTime": $._encode_implicit(_TagClass.context, 9, () => $._encodeGeneralizedTime, $.BER),
    "attributeExpiry": $._encode_implicit(_TagClass.context, 10, () => $._encodeGeneralizedTime, $.BER),
    "attributeFrom": $._encode_implicit(_TagClass.context, 11, () => _encode_From, $.BER),
    "attributeMessageClass": $._encode_explicit(_TagClass.context, 12, () => _encode_MessageClass, $.BER),
    "attributeMessageID": $._encode_implicit(_TagClass.context, 13, () => $._encodeUTF8String, $.BER),
    "attributeMessageSize": $._encode_implicit(_TagClass.context, 14, () => $._encodeInteger, $.BER),
    "attributePriority": $._encode_implicit(_TagClass.context, 15, () => _encode_Priority, $.BER),
    "attributeReadReport": $._encode_implicit(_TagClass.context, 16, () => _encode_YesNo, $.BER),
    "attributeTo": $._encode_explicit(_TagClass.context, 17, () => _encode_Address, $.BER),
    "attributeReplyApplicID": $._encode_implicit(_TagClass.context, 18, () => $._encodeUTF8String, $.BER),
    "attributePreviouslySentBy": $._encode_implicit(_TagClass.context, 19, () => _encode_PreviouslySentBy, $.BER),
    "attributePreviouslySentByDateTime": $._encode_implicit(_TagClass.context, 20, () => _encode_PreviouslySentByDateTime, $.BER),
    "attributeAdditionalHeaders": $._encode_implicit(_TagClass.context, 21, () => $._encodeOctetString, $.BER),
}, $.BER); }
    return _cached_encoder_for_MMSAttributes(value, elGetter);
}


/* eslint-enable */
