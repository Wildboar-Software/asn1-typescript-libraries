/* eslint-disable */
import {
    BOOLEAN,
    OPTIONAL,
    UTF8String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { EASID, _decode_EASID, _encode_EASID } from "../TS33128Payloads/EASID.ta.mjs";
// export { EASID, _decode_EASID, _encode_EASID } from "../TS33128Payloads/EASID.ta.mjs";
import { ACREventIDs, _decode_ACREventIDs, _encode_ACREventIDs, _enum_for_ACREventIDs } from "../TS33128Payloads/ACREventIDs.ta.mjs";
// export { ACREventIDs, _enum_for_ACREventIDs, ACREventIDs_targetInformation /* IMPORTED_LONG_ENUMERATION_ITEM */, targetInformation /* IMPORTED_SHORT_ENUMERATION_ITEM */, ACREventIDs_aCRComplete /* IMPORTED_LONG_ENUMERATION_ITEM */, aCRComplete /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ACREventIDs, _encode_ACREventIDs } from "../TS33128Payloads/ACREventIDs.ta.mjs";
import { TargetInfo, _decode_TargetInfo, _encode_TargetInfo } from "../TS33128Payloads/TargetInfo.ta.mjs";
// export { TargetInfo, _decode_TargetInfo, _encode_TargetInfo } from "../TS33128Payloads/TargetInfo.ta.mjs";


/**
 * @summary EESACRNotification
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EESACRNotification ::= SEQUENCE
 * {
 *     subscriptionID    [1] UTF8String,
 *     eASID             [2] EASID,
 *     eventID           [3] ACREventIDs,
 *     targetInfo        [4] TargetInfo OPTIONAL,
 *     aCRRes            [5] BOOLEAN OPTIONAL,
 *     failReason        [6] UTF8String OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class EESACRNotification {
    constructor (
        /**
         * @summary `subscriptionID`.
         * @public
         * @readonly
         */
        readonly subscriptionID: UTF8String,
        /**
         * @summary `eASID`.
         * @public
         * @readonly
         */
        readonly eASID: EASID,
        /**
         * @summary `eventID`.
         * @public
         * @readonly
         */
        readonly eventID: ACREventIDs,
        /**
         * @summary `targetInfo`.
         * @public
         * @readonly
         */
        readonly targetInfo: OPTIONAL<TargetInfo>,
        /**
         * @summary `aCRRes`.
         * @public
         * @readonly
         */
        readonly aCRRes: OPTIONAL<BOOLEAN>,
        /**
         * @summary `failReason`.
         * @public
         * @readonly
         */
        readonly failReason: OPTIONAL<UTF8String>
    ) {}

    /**
     * @summary Restructures an object into a EESACRNotification
     * @description
     * 
     * This takes an `object` and converts it to a `EESACRNotification`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EESACRNotification`.
     * @returns {EESACRNotification}
     */
    public static _from_object (_o: { [_K in keyof (EESACRNotification)]: (EESACRNotification)[_K] }): EESACRNotification {
        return new EESACRNotification(_o.subscriptionID, _o.eASID, _o.eventID, _o.targetInfo, _o.aCRRes, _o.failReason);
    }

        /**
         * @summary The enum used as the type of the component `eventID`
         * @public
         * @static
         */

    public static _enum_for_eventID = _enum_for_ACREventIDs;
}

/**
 * @summary The Leading Root Component Types of EESACRNotification
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EESACRNotification: $.ComponentSpec[] = [
    new $.ComponentSpec("subscriptionID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("eASID", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("eventID", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("targetInfo", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("aCRRes", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("failReason", true, $.hasTag(_TagClass.context, 6))
];

/**
 * @summary The Trailing Root Component Types of EESACRNotification
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EESACRNotification: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EESACRNotification
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EESACRNotification: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EESACRNotification: $.ASN1Decoder<EESACRNotification> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EESACRNotification
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EESACRNotification (el: _Element): EESACRNotification {
    if (!_cached_decoder_for_EESACRNotification) { _cached_decoder_for_EESACRNotification = function (el: _Element): EESACRNotification {
    let subscriptionID!: UTF8String;
    let eASID!: EASID;
    let eventID!: ACREventIDs;
    let targetInfo: OPTIONAL<TargetInfo>;
    let aCRRes: OPTIONAL<BOOLEAN>;
    let failReason: OPTIONAL<UTF8String>;
    const callbacks: $.DecodingMap = {
        "subscriptionID": (_el: _Element): void => { subscriptionID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "eASID": (_el: _Element): void => { eASID = $._decode_implicit<EASID>(() => _decode_EASID)(_el); },
        "eventID": (_el: _Element): void => { eventID = $._decode_implicit<ACREventIDs>(() => _decode_ACREventIDs)(_el); },
        "targetInfo": (_el: _Element): void => { targetInfo = $._decode_implicit<TargetInfo>(() => _decode_TargetInfo)(_el); },
        "aCRRes": (_el: _Element): void => { aCRRes = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "failReason": (_el: _Element): void => { failReason = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EESACRNotification,
        _extension_additions_list_spec_for_EESACRNotification,
        _root_component_type_list_2_spec_for_EESACRNotification,
        undefined,
    );
    return new EESACRNotification(
        subscriptionID,
        eASID,
        eventID,
        targetInfo,
        aCRRes,
        failReason
    );
}; }
    return _cached_decoder_for_EESACRNotification(el);
}

let _cached_encoder_for_EESACRNotification: $.ASN1Encoder<EESACRNotification> | null = null;

/**
 * @summary Encodes a(n) EESACRNotification into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EESACRNotification, encoded as an ASN.1 Element.
 */
export
function _encode_EESACRNotification (value: EESACRNotification, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EESACRNotification) { _cached_encoder_for_EESACRNotification = function (value: EESACRNotification, elGetter: $.ASN1Encoder<EESACRNotification>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeUTF8String, $.BER)(value.subscriptionID, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_EASID, $.BER)(value.eASID, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_ACREventIDs, $.BER)(value.eventID, $.BER),
            /* IF_ABSENT  */ ((value.targetInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_TargetInfo, $.BER)(value.targetInfo, $.BER)),
            /* IF_ABSENT  */ ((value.aCRRes === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => $._encodeBoolean, $.BER)(value.aCRRes, $.BER)),
            /* IF_ABSENT  */ ((value.failReason === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => $._encodeUTF8String, $.BER)(value.failReason, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EESACRNotification(value, elGetter);
}


/* eslint-enable */
