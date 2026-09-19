/* eslint-disable */
import {
    OPTIONAL,
    UTF8String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SUPI, _decode_SUPI, _encode_SUPI } from "../TS33128Payloads/SUPI.ta.mjs";
// export { SUPI, _decode_SUPI, _encode_SUPI } from "../TS33128Payloads/SUPI.ta.mjs";
import { NWDAFConsumerNFType, _decode_NWDAFConsumerNFType, _encode_NWDAFConsumerNFType, _enum_for_NWDAFConsumerNFType } from "../TS33128Payloads/NWDAFConsumerNFType.ta.mjs";
// export { NWDAFConsumerNFType, _enum_for_NWDAFConsumerNFType, NWDAFConsumerNFType_pCF /* IMPORTED_LONG_ENUMERATION_ITEM */, pCF /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFConsumerNFType_nSSF /* IMPORTED_LONG_ENUMERATION_ITEM */, nSSF /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFConsumerNFType_aMF /* IMPORTED_LONG_ENUMERATION_ITEM */, aMF /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFConsumerNFType_sMF /* IMPORTED_LONG_ENUMERATION_ITEM */, sMF /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFConsumerNFType_nEF /* IMPORTED_LONG_ENUMERATION_ITEM */, nEF /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFConsumerNFType_aF /* IMPORTED_LONG_ENUMERATION_ITEM */, aF /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFConsumerNFType_lMF /* IMPORTED_LONG_ENUMERATION_ITEM */, lMF /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFConsumerNFType_oAM /* IMPORTED_LONG_ENUMERATION_ITEM */, oAM /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFConsumerNFType_nWDAF /* IMPORTED_LONG_ENUMERATION_ITEM */, nWDAF /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFConsumerNFType_dCCF /* IMPORTED_LONG_ENUMERATION_ITEM */, dCCF /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFConsumerNFType_cEF /* IMPORTED_LONG_ENUMERATION_ITEM */, cEF /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_NWDAFConsumerNFType, _encode_NWDAFConsumerNFType } from "../TS33128Payloads/NWDAFConsumerNFType.ta.mjs";
import { NWDAFEventsSubscriptionOpType, _decode_NWDAFEventsSubscriptionOpType, _encode_NWDAFEventsSubscriptionOpType, _enum_for_NWDAFEventsSubscriptionOpType } from "../TS33128Payloads/NWDAFEventsSubscriptionOpType.ta.mjs";
// export { NWDAFEventsSubscriptionOpType, _enum_for_NWDAFEventsSubscriptionOpType, NWDAFEventsSubscriptionOpType_pOST /* IMPORTED_LONG_ENUMERATION_ITEM */, pOST /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEventsSubscriptionOpType_pUT /* IMPORTED_LONG_ENUMERATION_ITEM */, pUT /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEventsSubscriptionOpType_dELETE /* IMPORTED_LONG_ENUMERATION_ITEM */, dELETE /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_NWDAFEventsSubscriptionOpType, _encode_NWDAFEventsSubscriptionOpType } from "../TS33128Payloads/NWDAFEventsSubscriptionOpType.ta.mjs";
import { NWDAFEvent, _decode_NWDAFEvent, _encode_NWDAFEvent } from "../TS33128Payloads/NWDAFEvent.ta.mjs";
// export { NWDAFEvent, _enum_for_NWDAFEvent, NWDAFEvent_serviceExperience /* IMPORTED_LONG_ENUMERATION_ITEM */, serviceExperience /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEvent_uEMobility /* IMPORTED_LONG_ENUMERATION_ITEM */, uEMobility /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEvent_uEComm /* IMPORTED_LONG_ENUMERATION_ITEM */, uEComm /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEvent_abnormalBehaviour /* IMPORTED_LONG_ENUMERATION_ITEM */, abnormalBehaviour /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEvent_dispersion /* IMPORTED_LONG_ENUMERATION_ITEM */, dispersion /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEvent_relativeProximity /* IMPORTED_LONG_ENUMERATION_ITEM */, relativeProximity /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEvent_pDUSessionTraffic /* IMPORTED_LONG_ENUMERATION_ITEM */, pDUSessionTraffic /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_NWDAFEvent, _encode_NWDAFEvent } from "../TS33128Payloads/NWDAFEvent.ta.mjs";
import { SBIType, _decode_SBIType, _encode_SBIType } from "../TS33128Payloads/SBIType.ta.mjs";
// export { SBIType, _decode_SBIType, _encode_SBIType } from "../TS33128Payloads/SBIType.ta.mjs";
import { NWDAFEventsSubscriptionResponseCode, _decode_NWDAFEventsSubscriptionResponseCode, _encode_NWDAFEventsSubscriptionResponseCode, _enum_for_NWDAFEventsSubscriptionResponseCode } from "../TS33128Payloads/NWDAFEventsSubscriptionResponseCode.ta.mjs";
// export { NWDAFEventsSubscriptionResponseCode, _enum_for_NWDAFEventsSubscriptionResponseCode, NWDAFEventsSubscriptionResponseCode_oK200 /* IMPORTED_LONG_ENUMERATION_ITEM */, oK200 /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEventsSubscriptionResponseCode_created201 /* IMPORTED_LONG_ENUMERATION_ITEM */, created201 /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEventsSubscriptionResponseCode_noContent204 /* IMPORTED_LONG_ENUMERATION_ITEM */, noContent204 /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEventsSubscriptionResponseCode_temporaryRedirect307 /* IMPORTED_LONG_ENUMERATION_ITEM */, temporaryRedirect307 /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEventsSubscriptionResponseCode_permanentRedirect308 /* IMPORTED_LONG_ENUMERATION_ITEM */, permanentRedirect308 /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEventsSubscriptionResponseCode_badRequest400 /* IMPORTED_LONG_ENUMERATION_ITEM */, badRequest400 /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEventsSubscriptionResponseCode_unauthorized401 /* IMPORTED_LONG_ENUMERATION_ITEM */, unauthorized401 /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEventsSubscriptionResponseCode_forbidden403 /* IMPORTED_LONG_ENUMERATION_ITEM */, forbidden403 /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEventsSubscriptionResponseCode_notFound404 /* IMPORTED_LONG_ENUMERATION_ITEM */, notFound404 /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEventsSubscriptionResponseCode_notAcceptable406 /* IMPORTED_LONG_ENUMERATION_ITEM */, notAcceptable406 /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEventsSubscriptionResponseCode_lengthRequired411 /* IMPORTED_LONG_ENUMERATION_ITEM */, lengthRequired411 /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEventsSubscriptionResponseCode_payloadTooLarge413 /* IMPORTED_LONG_ENUMERATION_ITEM */, payloadTooLarge413 /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEventsSubscriptionResponseCode_unsupportedMediaType415 /* IMPORTED_LONG_ENUMERATION_ITEM */, unsupportedMediaType415 /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEventsSubscriptionResponseCode_tooManyRequests429 /* IMPORTED_LONG_ENUMERATION_ITEM */, tooManyRequests429 /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEventsSubscriptionResponseCode_internalServerError500 /* IMPORTED_LONG_ENUMERATION_ITEM */, internalServerError500 /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEventsSubscriptionResponseCode_notImplemented501 /* IMPORTED_LONG_ENUMERATION_ITEM */, notImplemented501 /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEventsSubscriptionResponseCode_badGateway502 /* IMPORTED_LONG_ENUMERATION_ITEM */, badGateway502 /* IMPORTED_SHORT_ENUMERATION_ITEM */, NWDAFEventsSubscriptionResponseCode_serviceUnavailable503 /* IMPORTED_LONG_ENUMERATION_ITEM */, serviceUnavailable503 /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_NWDAFEventsSubscriptionResponseCode, _encode_NWDAFEventsSubscriptionResponseCode } from "../TS33128Payloads/NWDAFEventsSubscriptionResponseCode.ta.mjs";


/**
 * @summary NWDAFEventsSubscription
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NWDAFEventsSubscription ::= SEQUENCE
 * {
 *     sUPI                                [1] SUPI,
 *     nWDAFConsumerNFType                 [2] NWDAFConsumerNFType,
 *     nWDAFEventsSubscriptionOpType       [3] NWDAFEventsSubscriptionOpType,
 *     nWDAFSubscribedEventList            [4] SEQUENCE SIZE(1..MAX) OF NWDAFEvent,
 *     nWDAFEventsSubscription             [5] SBIType,
 *     nWDAFEventsSubscriptionID           [6] UTF8String OPTIONAL,
 *     nWDAFEventsSubscriptionResponseCode [7] NWDAFEventsSubscriptionResponseCode
 * }
 * ```
 * 
 * @class
 */
export
class NWDAFEventsSubscription {
    constructor (
        /**
         * @summary `sUPI`.
         * @public
         * @readonly
         */
        readonly sUPI: SUPI,
        /**
         * @summary `nWDAFConsumerNFType`.
         * @public
         * @readonly
         */
        readonly nWDAFConsumerNFType: NWDAFConsumerNFType,
        /**
         * @summary `nWDAFEventsSubscriptionOpType`.
         * @public
         * @readonly
         */
        readonly nWDAFEventsSubscriptionOpType: NWDAFEventsSubscriptionOpType,
        /**
         * @summary `nWDAFSubscribedEventList`.
         * @public
         * @readonly
         */
        readonly nWDAFSubscribedEventList: NWDAFEvent[],
        /**
         * @summary `nWDAFEventsSubscription`.
         * @public
         * @readonly
         */
        readonly nWDAFEventsSubscription: SBIType,
        /**
         * @summary `nWDAFEventsSubscriptionID`.
         * @public
         * @readonly
         */
        readonly nWDAFEventsSubscriptionID: OPTIONAL<UTF8String>,
        /**
         * @summary `nWDAFEventsSubscriptionResponseCode`.
         * @public
         * @readonly
         */
        readonly nWDAFEventsSubscriptionResponseCode: NWDAFEventsSubscriptionResponseCode
    ) {}

    /**
     * @summary Restructures an object into a NWDAFEventsSubscription
     * @description
     * 
     * This takes an `object` and converts it to a `NWDAFEventsSubscription`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NWDAFEventsSubscription`.
     * @returns {NWDAFEventsSubscription}
     */
    public static _from_object (_o: { [_K in keyof (NWDAFEventsSubscription)]: (NWDAFEventsSubscription)[_K] }): NWDAFEventsSubscription {
        return new NWDAFEventsSubscription(_o.sUPI, _o.nWDAFConsumerNFType, _o.nWDAFEventsSubscriptionOpType, _o.nWDAFSubscribedEventList, _o.nWDAFEventsSubscription, _o.nWDAFEventsSubscriptionID, _o.nWDAFEventsSubscriptionResponseCode);
    }

        /**
         * @summary The enum used as the type of the component `nWDAFConsumerNFType`
         * @public
         * @static
         */

    public static _enum_for_nWDAFConsumerNFType = _enum_for_NWDAFConsumerNFType;        /**
         * @summary The enum used as the type of the component `nWDAFEventsSubscriptionOpType`
         * @public
         * @static
         */

    public static _enum_for_nWDAFEventsSubscriptionOpType = _enum_for_NWDAFEventsSubscriptionOpType;        /**
         * @summary The enum used as the type of the component `nWDAFEventsSubscriptionResponseCode`
         * @public
         * @static
         */

    public static _enum_for_nWDAFEventsSubscriptionResponseCode = _enum_for_NWDAFEventsSubscriptionResponseCode;
}

/**
 * @summary The Leading Root Component Types of NWDAFEventsSubscription
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_NWDAFEventsSubscription: $.ComponentSpec[] = [
    new $.ComponentSpec("sUPI", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("nWDAFConsumerNFType", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("nWDAFEventsSubscriptionOpType", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("nWDAFSubscribedEventList", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("nWDAFEventsSubscription", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("nWDAFEventsSubscriptionID", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("nWDAFEventsSubscriptionResponseCode", false, $.hasTag(_TagClass.context, 7))
];

/**
 * @summary The Trailing Root Component Types of NWDAFEventsSubscription
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_NWDAFEventsSubscription: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of NWDAFEventsSubscription
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_NWDAFEventsSubscription: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_NWDAFEventsSubscription: $.ASN1Decoder<NWDAFEventsSubscription> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NWDAFEventsSubscription
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NWDAFEventsSubscription (el: _Element): NWDAFEventsSubscription {
    if (!_cached_decoder_for_NWDAFEventsSubscription) { _cached_decoder_for_NWDAFEventsSubscription = function (el: _Element): NWDAFEventsSubscription {
    let sUPI!: SUPI;
    let nWDAFConsumerNFType!: NWDAFConsumerNFType;
    let nWDAFEventsSubscriptionOpType!: NWDAFEventsSubscriptionOpType;
    let nWDAFSubscribedEventList!: NWDAFEvent[];
    let nWDAFEventsSubscription!: SBIType;
    let nWDAFEventsSubscriptionID: OPTIONAL<UTF8String>;
    let nWDAFEventsSubscriptionResponseCode!: NWDAFEventsSubscriptionResponseCode;
    const callbacks: $.DecodingMap = {
        "sUPI": (_el: _Element): void => { sUPI = $._decode_explicit<SUPI>(() => _decode_SUPI)(_el); },
        "nWDAFConsumerNFType": (_el: _Element): void => { nWDAFConsumerNFType = $._decode_implicit<NWDAFConsumerNFType>(() => _decode_NWDAFConsumerNFType)(_el); },
        "nWDAFEventsSubscriptionOpType": (_el: _Element): void => { nWDAFEventsSubscriptionOpType = $._decode_implicit<NWDAFEventsSubscriptionOpType>(() => _decode_NWDAFEventsSubscriptionOpType)(_el); },
        "nWDAFSubscribedEventList": (_el: _Element): void => { nWDAFSubscribedEventList = $._decode_implicit<NWDAFEvent[]>(() => $._decodeSequenceOf<NWDAFEvent>(() => _decode_NWDAFEvent))(_el); },
        "nWDAFEventsSubscription": (_el: _Element): void => { nWDAFEventsSubscription = $._decode_implicit<SBIType>(() => _decode_SBIType)(_el); },
        "nWDAFEventsSubscriptionID": (_el: _Element): void => { nWDAFEventsSubscriptionID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "nWDAFEventsSubscriptionResponseCode": (_el: _Element): void => { nWDAFEventsSubscriptionResponseCode = $._decode_implicit<NWDAFEventsSubscriptionResponseCode>(() => _decode_NWDAFEventsSubscriptionResponseCode)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_NWDAFEventsSubscription,
        _extension_additions_list_spec_for_NWDAFEventsSubscription,
        _root_component_type_list_2_spec_for_NWDAFEventsSubscription,
        undefined,
    );
    return new NWDAFEventsSubscription(
        sUPI,
        nWDAFConsumerNFType,
        nWDAFEventsSubscriptionOpType,
        nWDAFSubscribedEventList,
        nWDAFEventsSubscription,
        nWDAFEventsSubscriptionID,
        nWDAFEventsSubscriptionResponseCode
    );
}; }
    return _cached_decoder_for_NWDAFEventsSubscription(el);
}

let _cached_encoder_for_NWDAFEventsSubscription: $.ASN1Encoder<NWDAFEventsSubscription> | null = null;

/**
 * @summary Encodes a(n) NWDAFEventsSubscription into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NWDAFEventsSubscription, encoded as an ASN.1 Element.
 */
export
function _encode_NWDAFEventsSubscription (value: NWDAFEventsSubscription, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NWDAFEventsSubscription) { _cached_encoder_for_NWDAFEventsSubscription = function (value: NWDAFEventsSubscription, elGetter: $.ASN1Encoder<NWDAFEventsSubscription>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_SUPI, $.BER)(value.sUPI, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_NWDAFConsumerNFType, $.BER)(value.nWDAFConsumerNFType, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_NWDAFEventsSubscriptionOpType, $.BER)(value.nWDAFEventsSubscriptionOpType, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => $._encodeSequenceOf<NWDAFEvent>(() => _encode_NWDAFEvent, $.BER), $.BER)(value.nWDAFSubscribedEventList, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => _encode_SBIType, $.BER)(value.nWDAFEventsSubscription, $.BER),
            /* IF_ABSENT  */ ((value.nWDAFEventsSubscriptionID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => $._encodeUTF8String, $.BER)(value.nWDAFEventsSubscriptionID, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 7, () => _encode_NWDAFEventsSubscriptionResponseCode, $.BER)(value.nWDAFEventsSubscriptionResponseCode, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_NWDAFEventsSubscription(value, elGetter);
}


/* eslint-enable */
