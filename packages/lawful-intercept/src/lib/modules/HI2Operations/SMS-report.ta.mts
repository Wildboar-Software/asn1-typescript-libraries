/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CommunicationIdentifier, _decode_CommunicationIdentifier, _encode_CommunicationIdentifier } from "../HI2Operations/CommunicationIdentifier.ta.mjs";
// export { CommunicationIdentifier, _decode_CommunicationIdentifier, _encode_CommunicationIdentifier } from "../HI2Operations/CommunicationIdentifier.ta.mjs";
import { TimeStamp, _decode_TimeStamp, _encode_TimeStamp } from "../HI2Operations/TimeStamp.ta.mjs";
// export { TimeStamp, _decode_TimeStamp, _encode_TimeStamp } from "../HI2Operations/TimeStamp.ta.mjs";
import { SMS_report_sMS_Contents, _decode_SMS_report_sMS_Contents, _encode_SMS_report_sMS_Contents } from "../HI2Operations/SMS-report-sMS-Contents.ta.mjs";
// export { SMS_report_sMS_Contents, _decode_SMS_report_sMS_Contents, _encode_SMS_report_sMS_Contents } from "../HI2Operations/SMS-report-sMS-Contents.ta.mjs";


/**
 * @summary SMS_report
 * @description
 *
 * SMS content and the information associated with it. Clause A.8.3:
 * exceptionally, SMS is delivered via HI2. Table A.8.1 maps the SMS event to
 * an IRI-REPORT. Table A.8.2: the SMS content with the header which is sent
 * with the SMS service.
 *
 * Clause A.8.4: IRI information such as the receiving MSISDN, included as
 * header information in the SMS message body sent to the SMS service centre,
 * is included in the IRI. Where an authorization covers IRI only, the message
 * body is outside what the LEA may receive; party information that the
 * intercepting element holds inside what it treats as contents is still
 * included in the IRI.
 *
 * `content` and `enhancedContent` are mutually exclusive. `content` is for
 * 3GPP and is encoded in the format defined for the SMS mobile. This document
 * does not define that PDU layout.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.8.3, clause A.8.4, table A.8.1,
 * table A.8.2, annex D, clause D.5.
 *
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMS-report ::= SEQUENCE
 * {
 *     communicationIdentifier        [1] CommunicationIdentifier,
 *         -- used to uniquely identify an intercepted call: the same used for the
 *         -- relevant IRI
 *         -- Called "callIdentifier" in V1.1.1 of ES 201 671 [i.5]
 *     timeStamp                    [2] TimeStamp,
 *         -- date and time of the report. The format is
 *         -- the one defined in case a) of the ASN.1 ITU-T Recommendation X.680 [33].
 *         -- (year month day hour minutes seconds)
 *     sMS-Contents                [3] SEQUENCE
 *     {
 *         initiator            [1] ENUMERATED
 *         {
 *             -- party which sent the SMS
 *             target(0),
 *             server(1),
 *             undefined-party(2),
 *             ...
 *         },
 *         transfer-status        [2] ENUMERATED
 *         {
 *             succeed-transfer(0),
 *                 --the transfer of the SMS message succeeds
 *             not-succeed-transfer(1),
 *             undefined(2),
 *             ...
 *         } OPTIONAL,
 *         other-message        [3] ENUMERATED
 *         {
 *             -- In case of terminating call, indicates if the server will send other SMS.
 *             yes(0),
 *             no(1),
 *             undefined(2),
 *             ...
 *         } OPTIONAL,
 *         content                [4] OCTET STRING (SIZE (1..270)) OPTIONAL,
 *             -- Encoded in the format defined for the SMS mobile.
 *             -- The content and enhancedContent fields are mutually exclusive.
 *             -- The content field is dedicated for 3GPP purposes.
 *         ...,
 *         enhancedContent        [5] SEQUENCE
 *         {
 *             content                [1] OCTET STRING,
 *                 -- The character encoding used in the content field is specified in the
 *                 -- character-encoding field.
 *             character-encoding    [2] ENUMERATED
 *             {
 *                 gsm-7-bit-ascii(0),
 *                 eight-bit-ascii(1),
 *                 eight-bit-binary(2),
 *                 ucs-2(3),
 *                 utf-8(4),
 *                 utf-16(5),
 *                 other(6),
 *                 ...
 *             }
 *         } OPTIONAL
 *     }
 * }
 * ```
 * 
 * @class
 */
export
class SMS_report {
    /**
     * @summary `communicationIdentifier`.
     * @description
     *
     * Identifies the intercepted SMS. The same value is used for the relevant
     * IRI. Called `callIdentifier` in V1.1.1 of ES 201 671. Table A.8.2 maps
     * the GSM communication identifier (interception node identity and
     * correlation number) to this parameter.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), table A.8.2, annex D, clause D.5.
     *
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly communicationIdentifier: CommunicationIdentifier;
    /**
     * @summary `timeStamp`.
     * @description
     *
     * Date and time of the report. The format is case a) of ITU-T
     * Recommendation X.680: year, month, day, hour, minutes, seconds. Table
     * A.8.2 maps the MSC/VLR or GMSC event date and time to the timestamp.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), table A.8.2, annex D, clause D.5.
     *
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly timeStamp: TimeStamp;
    /**
     * @summary `sMS_Contents`.
     * @description
     *
     * Party that sent the SMS, transfer result, whether the server will send a
     * further SMS on a terminating call, and either the 3GPP content or the
     * enhanced content. Those two content forms are mutually exclusive.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause A.8.4, annex D, clause D.5.
     *
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly sMS_Contents: SMS_report_sMS_Contents;

    constructor (
        communicationIdentifier: CommunicationIdentifier,
        timeStamp: TimeStamp,
        sMS_Contents: SMS_report_sMS_Contents
    ) {
        this.communicationIdentifier = communicationIdentifier;
        this.timeStamp = timeStamp;
        this.sMS_Contents = sMS_Contents;
    }

    /**
     * @summary Restructures an object into a SMS_report
     * @description
     * 
     * This takes an `object` and converts it to a `SMS_report`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SMS_report`.
     * @returns {SMS_report}
     */
    public static _from_object (_o: { [_K in keyof (SMS_report)]: (SMS_report)[_K] }): SMS_report {
        return new SMS_report(_o.communicationIdentifier, _o.timeStamp, _o.sMS_Contents);
    }


}

/**
 * @summary The Leading Root Component Types of SMS_report
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SMS_report: $.ComponentSpec[] = [
    new $.ComponentSpec("communicationIdentifier", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("timeStamp", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("sMS-Contents", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of SMS_report
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SMS_report: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SMS_report
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SMS_report: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SMS_report: $.ASN1Decoder<SMS_report> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SMS_report
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SMS_report (el: _Element): SMS_report {
    if (!_cached_decoder_for_SMS_report) { _cached_decoder_for_SMS_report = function (el: _Element): SMS_report {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("SMS-report contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "communicationIdentifier";
    sequence[1].name = "timeStamp";
    sequence[2].name = "sMS-Contents";
    let communicationIdentifier!: CommunicationIdentifier;
    let timeStamp!: TimeStamp;
    let sMS_Contents!: SMS_report_sMS_Contents;
    communicationIdentifier = $._decode_implicit<CommunicationIdentifier>(() => _decode_CommunicationIdentifier)(sequence[0]);
    timeStamp = $._decode_explicit<TimeStamp>(() => _decode_TimeStamp)(sequence[1]);
    sMS_Contents = $._decode_implicit<SMS_report_sMS_Contents>(() => _decode_SMS_report_sMS_Contents)(sequence[2]);
    return new SMS_report(
        communicationIdentifier,
        timeStamp,
        sMS_Contents,

    );
}; }
    return _cached_decoder_for_SMS_report(el);
}

let _cached_encoder_for_SMS_report: $.ASN1Encoder<SMS_report> | null = null;

/**
 * @summary Encodes a(n) SMS_report into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SMS_report, encoded as an ASN.1 Element.
 */
export
function _encode_SMS_report (value: SMS_report, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SMS_report) { _cached_encoder_for_SMS_report = function (value: SMS_report, elGetter: $.ASN1Encoder<SMS_report>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_CommunicationIdentifier, $.BER)(value.communicationIdentifier, $.BER),
        /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_TimeStamp, $.BER)(value.timeStamp, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_SMS_report_sMS_Contents, $.BER)(value.sMS_Contents, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_SMS_report(value, elGetter);
}


/* eslint-enable */
