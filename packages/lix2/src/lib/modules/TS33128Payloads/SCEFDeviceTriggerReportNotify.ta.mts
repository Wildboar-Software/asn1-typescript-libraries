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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IMSI, _decode_IMSI, _encode_IMSI } from "../TS33128Payloads/IMSI.ta.mjs";
// export { IMSI, _decode_IMSI, _encode_IMSI } from "../TS33128Payloads/IMSI.ta.mjs";
import { MSISDN, _decode_MSISDN, _encode_MSISDN } from "../TS33128Payloads/MSISDN.ta.mjs";
// export { MSISDN, _decode_MSISDN, _encode_MSISDN } from "../TS33128Payloads/MSISDN.ta.mjs";
import { NAI, _decode_NAI, _encode_NAI } from "../TS33128Payloads/NAI.ta.mjs";
// export { NAI, _decode_NAI, _encode_NAI } from "../TS33128Payloads/NAI.ta.mjs";
import { TriggerID, _decode_TriggerID, _encode_TriggerID } from "../TS33128Payloads/TriggerID.ta.mjs";
// export { TriggerID, _decode_TriggerID, _encode_TriggerID } from "../TS33128Payloads/TriggerID.ta.mjs";
import { DeviceTriggerDeliveryResult, _enum_for_DeviceTriggerDeliveryResult, DeviceTriggerDeliveryResult_success /* IMPORTED_LONG_ENUMERATION_ITEM */, success /* IMPORTED_SHORT_ENUMERATION_ITEM */, DeviceTriggerDeliveryResult_unknown /* IMPORTED_LONG_ENUMERATION_ITEM */, unknown /* IMPORTED_SHORT_ENUMERATION_ITEM */, DeviceTriggerDeliveryResult_failure /* IMPORTED_LONG_ENUMERATION_ITEM */, failure /* IMPORTED_SHORT_ENUMERATION_ITEM */, DeviceTriggerDeliveryResult_triggered /* IMPORTED_LONG_ENUMERATION_ITEM */, triggered /* IMPORTED_SHORT_ENUMERATION_ITEM */, DeviceTriggerDeliveryResult_expired /* IMPORTED_LONG_ENUMERATION_ITEM */, expired /* IMPORTED_SHORT_ENUMERATION_ITEM */, DeviceTriggerDeliveryResult_unconfirmed /* IMPORTED_LONG_ENUMERATION_ITEM */, unconfirmed /* IMPORTED_SHORT_ENUMERATION_ITEM */, DeviceTriggerDeliveryResult_replaced /* IMPORTED_LONG_ENUMERATION_ITEM */, replaced /* IMPORTED_SHORT_ENUMERATION_ITEM */, DeviceTriggerDeliveryResult_terminate /* IMPORTED_LONG_ENUMERATION_ITEM */, terminate /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_DeviceTriggerDeliveryResult, _encode_DeviceTriggerDeliveryResult } from "../TS33128Payloads/DeviceTriggerDeliveryResult.ta.mjs";
// export { DeviceTriggerDeliveryResult, _enum_for_DeviceTriggerDeliveryResult, DeviceTriggerDeliveryResult_success /* IMPORTED_LONG_ENUMERATION_ITEM */, success /* IMPORTED_SHORT_ENUMERATION_ITEM */, DeviceTriggerDeliveryResult_unknown /* IMPORTED_LONG_ENUMERATION_ITEM */, unknown /* IMPORTED_SHORT_ENUMERATION_ITEM */, DeviceTriggerDeliveryResult_failure /* IMPORTED_LONG_ENUMERATION_ITEM */, failure /* IMPORTED_SHORT_ENUMERATION_ITEM */, DeviceTriggerDeliveryResult_triggered /* IMPORTED_LONG_ENUMERATION_ITEM */, triggered /* IMPORTED_SHORT_ENUMERATION_ITEM */, DeviceTriggerDeliveryResult_expired /* IMPORTED_LONG_ENUMERATION_ITEM */, expired /* IMPORTED_SHORT_ENUMERATION_ITEM */, DeviceTriggerDeliveryResult_unconfirmed /* IMPORTED_LONG_ENUMERATION_ITEM */, unconfirmed /* IMPORTED_SHORT_ENUMERATION_ITEM */, DeviceTriggerDeliveryResult_replaced /* IMPORTED_LONG_ENUMERATION_ITEM */, replaced /* IMPORTED_SHORT_ENUMERATION_ITEM */, DeviceTriggerDeliveryResult_terminate /* IMPORTED_LONG_ENUMERATION_ITEM */, terminate /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_DeviceTriggerDeliveryResult, _encode_DeviceTriggerDeliveryResult } from "../TS33128Payloads/DeviceTriggerDeliveryResult.ta.mjs";


/**
 * @summary SCEFDeviceTriggerReportNotify
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SCEFDeviceTriggerReportNotify ::= SEQUENCE
 * {
 *     iMSI                             [1] IMSI OPTIONAL,
 *     mSISDN                           [2] MSISDN OPTIONAL,
 *     externalIdentifier               [3] NAI OPTIONAL,
 *     triggerId                        [4] TriggerID,
 *     deviceTriggerDeliveryResult      [5] DeviceTriggerDeliveryResult
 * }
 * ```
 * 
 * @class
 */
export
class SCEFDeviceTriggerReportNotify {
    constructor (
        /**
         * @summary `iMSI`.
         * @public
         * @readonly
         */
        readonly iMSI: OPTIONAL<IMSI>,
        /**
         * @summary `mSISDN`.
         * @public
         * @readonly
         */
        readonly mSISDN: OPTIONAL<MSISDN>,
        /**
         * @summary `externalIdentifier`.
         * @public
         * @readonly
         */
        readonly externalIdentifier: OPTIONAL<NAI>,
        /**
         * @summary `triggerId`.
         * @public
         * @readonly
         */
        readonly triggerId: TriggerID,
        /**
         * @summary `deviceTriggerDeliveryResult`.
         * @public
         * @readonly
         */
        readonly deviceTriggerDeliveryResult: DeviceTriggerDeliveryResult
    ) {}

    /**
     * @summary Restructures an object into a SCEFDeviceTriggerReportNotify
     * @description
     * 
     * This takes an `object` and converts it to a `SCEFDeviceTriggerReportNotify`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SCEFDeviceTriggerReportNotify`.
     * @returns {SCEFDeviceTriggerReportNotify}
     */
    public static _from_object (_o: { [_K in keyof (SCEFDeviceTriggerReportNotify)]: (SCEFDeviceTriggerReportNotify)[_K] }): SCEFDeviceTriggerReportNotify {
        return new SCEFDeviceTriggerReportNotify(_o.iMSI, _o.mSISDN, _o.externalIdentifier, _o.triggerId, _o.deviceTriggerDeliveryResult);
    }

        /**
         * @summary The enum used as the type of the component `deviceTriggerDeliveryResult`
         * @public
         * @static
         */

    public static _enum_for_deviceTriggerDeliveryResult = _enum_for_DeviceTriggerDeliveryResult;
}

/**
 * @summary The Leading Root Component Types of SCEFDeviceTriggerReportNotify
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SCEFDeviceTriggerReportNotify: $.ComponentSpec[] = [
    new $.ComponentSpec("iMSI", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("mSISDN", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("externalIdentifier", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("triggerId", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("deviceTriggerDeliveryResult", false, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of SCEFDeviceTriggerReportNotify
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SCEFDeviceTriggerReportNotify: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SCEFDeviceTriggerReportNotify
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SCEFDeviceTriggerReportNotify: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SCEFDeviceTriggerReportNotify: $.ASN1Decoder<SCEFDeviceTriggerReportNotify> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SCEFDeviceTriggerReportNotify
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SCEFDeviceTriggerReportNotify (el: _Element): SCEFDeviceTriggerReportNotify {
    if (!_cached_decoder_for_SCEFDeviceTriggerReportNotify) { _cached_decoder_for_SCEFDeviceTriggerReportNotify = function (el: _Element): SCEFDeviceTriggerReportNotify {
    let iMSI: OPTIONAL<IMSI>;
    let mSISDN: OPTIONAL<MSISDN>;
    let externalIdentifier: OPTIONAL<NAI>;
    let triggerId!: TriggerID;
    let deviceTriggerDeliveryResult!: DeviceTriggerDeliveryResult;
    const callbacks: $.DecodingMap = {
        "iMSI": (_el: _Element): void => { iMSI = $._decode_implicit<IMSI>(() => _decode_IMSI)(_el); },
        "mSISDN": (_el: _Element): void => { mSISDN = $._decode_implicit<MSISDN>(() => _decode_MSISDN)(_el); },
        "externalIdentifier": (_el: _Element): void => { externalIdentifier = $._decode_implicit<NAI>(() => _decode_NAI)(_el); },
        "triggerId": (_el: _Element): void => { triggerId = $._decode_implicit<TriggerID>(() => _decode_TriggerID)(_el); },
        "deviceTriggerDeliveryResult": (_el: _Element): void => { deviceTriggerDeliveryResult = $._decode_implicit<DeviceTriggerDeliveryResult>(() => _decode_DeviceTriggerDeliveryResult)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SCEFDeviceTriggerReportNotify,
        _extension_additions_list_spec_for_SCEFDeviceTriggerReportNotify,
        _root_component_type_list_2_spec_for_SCEFDeviceTriggerReportNotify,
        undefined,
    );
    return new SCEFDeviceTriggerReportNotify(
        iMSI,
        mSISDN,
        externalIdentifier,
        triggerId,
        deviceTriggerDeliveryResult
    );
}; }
    return _cached_decoder_for_SCEFDeviceTriggerReportNotify(el);
}

let _cached_encoder_for_SCEFDeviceTriggerReportNotify: $.ASN1Encoder<SCEFDeviceTriggerReportNotify> | null = null;

/**
 * @summary Encodes a(n) SCEFDeviceTriggerReportNotify into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SCEFDeviceTriggerReportNotify, encoded as an ASN.1 Element.
 */
export
function _encode_SCEFDeviceTriggerReportNotify (value: SCEFDeviceTriggerReportNotify, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SCEFDeviceTriggerReportNotify) { _cached_encoder_for_SCEFDeviceTriggerReportNotify = function (value: SCEFDeviceTriggerReportNotify, elGetter: $.ASN1Encoder<SCEFDeviceTriggerReportNotify>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.iMSI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_IMSI, $.BER)(value.iMSI, $.BER)),
            /* IF_ABSENT  */ ((value.mSISDN === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_MSISDN, $.BER)(value.mSISDN, $.BER)),
            /* IF_ABSENT  */ ((value.externalIdentifier === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_NAI, $.BER)(value.externalIdentifier, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_TriggerID, $.BER)(value.triggerId, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => _encode_DeviceTriggerDeliveryResult, $.BER)(value.deviceTriggerDeliveryResult, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SCEFDeviceTriggerReportNotify(value, elGetter);
}


/* eslint-enable */
