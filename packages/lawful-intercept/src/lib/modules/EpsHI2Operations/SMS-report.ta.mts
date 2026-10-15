/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SMS_report_sMS_Contents, _decode_SMS_report_sMS_Contents, _encode_SMS_report_sMS_Contents } from "../EpsHI2Operations/SMS-report-sMS-Contents.ta.mjs";
// export { SMS_report_sMS_Contents, _decode_SMS_report_sMS_Contents, _encode_SMS_report_sMS_Contents } from "../EpsHI2Operations/SMS-report-sMS-Contents.ta.mjs";


/**
 * @summary SMS_report
 * @description
 * 
 * SMS content and the information that accompanies it. IRI parameter sMS
 * (module comment). Clause 6 table 6.2 and the SMS REPORT record: deliver the
 * SMS TPDU (3GPP TS 23.040 clause 9.2). For IRI-only interception, apply annex
 * P. The other party's identity is inside the TPDU. The parameter is
 * conditional for backward compatibility. If the content is absent, provide the
 * service-centre address; if the content is present, that address is optional.
 * Annex B.9 may carry this packet-domain IRI (clause 6.5.1.0). Clause 10 does
 * not define an SMS record.
 * 
 * 3GPP TS 33.108 (https://www.3gpp.org/DynaReport/33108.htm).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMS-report ::= SEQUENCE
 * {
 *     sMS-Contents    [3] SEQUENCE
 *     {
 *         sms-initiator        [1] ENUMERATED     -- party which sent the  SMS
 *         {
 *             target            (0),
 *             server            (1),
 *             undefined-party    (2),
 *             ...
 *         },
 *         transfer-status        [2] ENUMERATED
 *         {
 *             succeed-transfer    (0),         -- the transfer of the SMS message succeeds
 *             not-succeed-transfer(1),
 *             undefined            (2),
 *             ...
 *         } OPTIONAL,
 *         other-message        [3] ENUMERATED     -- in case of terminating call, indicates if
 *                                             -- the server will send other SMS
 *         {
 *             yes            (0),
 *             no            (1),
 *             undefined    (2),
 *             ...
 *         } OPTIONAL,
 *         content                [4] OCTET STRING (SIZE (1 .. 270)) OPTIONAL,
 *                                     -- Encoded in the format defined for the SMS mobile
 *         ...,
 *                 sMSContentRemovedIndicator [5] BOOLEAN OPTIONAL
 *     }
 * }
 * ```
 * 
 * @class
 */
export
class SMS_report {
    /**
     * @summary `sMS_Contents`.
     * @description
     * 
     * Initiator, transfer result, indication of further SMS, the TPDU, and
     * whether annex P removed the content. Clause 6 SMS REPORT. The initiator
     * is mandatory. The TPDU is conditional.
     * @public
     * @readonly
     */
    readonly sMS_Contents: SMS_report_sMS_Contents;

    constructor (
        sMS_Contents: SMS_report_sMS_Contents
    ) {
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
        return new SMS_report(_o.sMS_Contents);
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
    if (sequence.length < 1) {
        throw new _ConstructionError("SMS-report contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "sMS-Contents";
    let sMS_Contents!: SMS_report_sMS_Contents;
    sMS_Contents = $._decode_implicit<SMS_report_sMS_Contents>(() => _decode_SMS_report_sMS_Contents)(sequence[0]);
    return new SMS_report(
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
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_SMS_report_sMS_Contents, $.BER)(value.sMS_Contents, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_SMS_report(value, elGetter);
}


/* eslint-enable */
