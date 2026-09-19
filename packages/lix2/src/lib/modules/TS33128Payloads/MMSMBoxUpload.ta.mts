/* eslint-disable */
import {
    OPTIONAL,
    UTF8String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MMSVersion, _decode_MMSVersion, _encode_MMSVersion } from "../TS33128Payloads/MMSVersion.ta.mjs";
// export { MMSVersion, _decode_MMSVersion, _encode_MMSVersion } from "../TS33128Payloads/MMSVersion.ta.mjs";
import { MMSDirection, _decode_MMSDirection, _encode_MMSDirection, _enum_for_MMSDirection } from "../TS33128Payloads/MMSDirection.ta.mjs";
// export { MMSDirection, _enum_for_MMSDirection, MMSDirection_fromTarget /* IMPORTED_LONG_ENUMERATION_ITEM */, fromTarget /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSDirection_toTarget /* IMPORTED_LONG_ENUMERATION_ITEM */, toTarget /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MMSDirection, _encode_MMSDirection } from "../TS33128Payloads/MMSDirection.ta.mjs";
import { MMState, _decode_MMState, _encode_MMState, _enum_for_MMState } from "../TS33128Payloads/MMState.ta.mjs";
// export { MMState, _enum_for_MMState, MMState_draft /* IMPORTED_LONG_ENUMERATION_ITEM */, draft /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMState_sent /* IMPORTED_LONG_ENUMERATION_ITEM */, sent /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMState_new /* IMPORTED_LONG_ENUMERATION_ITEM */, new_ /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMState_retrieved /* IMPORTED_LONG_ENUMERATION_ITEM */, retrieved /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMState_forwarded /* IMPORTED_LONG_ENUMERATION_ITEM */, forwarded /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MMState, _encode_MMState } from "../TS33128Payloads/MMState.ta.mjs";
import { MMFlags, _decode_MMFlags, _encode_MMFlags } from "../TS33128Payloads/MMFlags.ta.mjs";
// export { MMFlags, _decode_MMFlags, _encode_MMFlags } from "../TS33128Payloads/MMFlags.ta.mjs";
import { MMSStoreStatus, _decode_MMSStoreStatus, _encode_MMSStoreStatus, _enum_for_MMSStoreStatus } from "../TS33128Payloads/MMSStoreStatus.ta.mjs";
// export { MMSStoreStatus, _enum_for_MMSStoreStatus, MMSStoreStatus_success /* IMPORTED_LONG_ENUMERATION_ITEM */, success /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSStoreStatus_errorTransientFailure /* IMPORTED_LONG_ENUMERATION_ITEM */, errorTransientFailure /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSStoreStatus_errorTransientNetworkProblem /* IMPORTED_LONG_ENUMERATION_ITEM */, errorTransientNetworkProblem /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSStoreStatus_errorPermanentFailure /* IMPORTED_LONG_ENUMERATION_ITEM */, errorPermanentFailure /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSStoreStatus_errorPermanentServiceDenied /* IMPORTED_LONG_ENUMERATION_ITEM */, errorPermanentServiceDenied /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSStoreStatus_errorPermanentMessageFormatCorrupt /* IMPORTED_LONG_ENUMERATION_ITEM */, errorPermanentMessageFormatCorrupt /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSStoreStatus_errorPermanentMessageNotFound /* IMPORTED_LONG_ENUMERATION_ITEM */, errorPermanentMessageNotFound /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSStoreStatus_errorMMBoxFull /* IMPORTED_LONG_ENUMERATION_ITEM */, errorMMBoxFull /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MMSStoreStatus, _encode_MMSStoreStatus } from "../TS33128Payloads/MMSStoreStatus.ta.mjs";
import { MMBoxDescription, _decode_MMBoxDescription, _encode_MMBoxDescription } from "../TS33128Payloads/MMBoxDescription.ta.mjs";
// export { MMBoxDescription, _decode_MMBoxDescription, _encode_MMBoxDescription } from "../TS33128Payloads/MMBoxDescription.ta.mjs";


/**
 * @summary MMSMBoxUpload
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSMBoxUpload ::= SEQUENCE
 * {
 *     transactionID       [1]  UTF8String,
 *     version             [2]  MMSVersion,
 *     direction           [3]  MMSDirection,
 *     state               [4]  MMState OPTIONAL,
 *     flags               [5]  MMFlags OPTIONAL,
 *     contentType         [6]  UTF8String,
 *     contentLocation     [7]  UTF8String OPTIONAL,
 *     storeStatus         [8]  MMSStoreStatus,
 *     storeStatusText     [9]  UTF8String OPTIONAL,
 *     mMessages           [10] SEQUENCE OF MMBoxDescription
 * }
 * ```
 * 
 * @class
 */
export
class MMSMBoxUpload {
    constructor (
        /**
         * @summary `transactionID`.
         * @public
         * @readonly
         */
        readonly transactionID: UTF8String,
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: MMSVersion,
        /**
         * @summary `direction`.
         * @public
         * @readonly
         */
        readonly direction: MMSDirection,
        /**
         * @summary `state`.
         * @public
         * @readonly
         */
        readonly state: OPTIONAL<MMState>,
        /**
         * @summary `flags`.
         * @public
         * @readonly
         */
        readonly flags: OPTIONAL<MMFlags>,
        /**
         * @summary `contentType`.
         * @public
         * @readonly
         */
        readonly contentType: UTF8String,
        /**
         * @summary `contentLocation`.
         * @public
         * @readonly
         */
        readonly contentLocation: OPTIONAL<UTF8String>,
        /**
         * @summary `storeStatus`.
         * @public
         * @readonly
         */
        readonly storeStatus: MMSStoreStatus,
        /**
         * @summary `storeStatusText`.
         * @public
         * @readonly
         */
        readonly storeStatusText: OPTIONAL<UTF8String>,
        /**
         * @summary `mMessages`.
         * @public
         * @readonly
         */
        readonly mMessages: MMBoxDescription[]
    ) {}

    /**
     * @summary Restructures an object into a MMSMBoxUpload
     * @description
     * 
     * This takes an `object` and converts it to a `MMSMBoxUpload`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MMSMBoxUpload`.
     * @returns {MMSMBoxUpload}
     */
    public static _from_object (_o: { [_K in keyof (MMSMBoxUpload)]: (MMSMBoxUpload)[_K] }): MMSMBoxUpload {
        return new MMSMBoxUpload(_o.transactionID, _o.version, _o.direction, _o.state, _o.flags, _o.contentType, _o.contentLocation, _o.storeStatus, _o.storeStatusText, _o.mMessages);
    }

        /**
         * @summary The enum used as the type of the component `direction`
         * @public
         * @static
         */

    public static _enum_for_direction = _enum_for_MMSDirection;        /**
         * @summary The enum used as the type of the component `state`
         * @public
         * @static
         */

    public static _enum_for_state = _enum_for_MMState;        /**
         * @summary The enum used as the type of the component `storeStatus`
         * @public
         * @static
         */

    public static _enum_for_storeStatus = _enum_for_MMSStoreStatus;
}

/**
 * @summary The Leading Root Component Types of MMSMBoxUpload
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MMSMBoxUpload: $.ComponentSpec[] = [
    new $.ComponentSpec("transactionID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("version", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("direction", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("state", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("flags", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("contentType", false, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("contentLocation", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("storeStatus", false, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("storeStatusText", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("mMessages", false, $.hasTag(_TagClass.context, 10))
];

/**
 * @summary The Trailing Root Component Types of MMSMBoxUpload
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MMSMBoxUpload: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MMSMBoxUpload
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MMSMBoxUpload: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MMSMBoxUpload: $.ASN1Decoder<MMSMBoxUpload> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MMSMBoxUpload
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MMSMBoxUpload (el: _Element): MMSMBoxUpload {
    if (!_cached_decoder_for_MMSMBoxUpload) { _cached_decoder_for_MMSMBoxUpload = function (el: _Element): MMSMBoxUpload {
    let transactionID!: UTF8String;
    let version!: MMSVersion;
    let direction!: MMSDirection;
    let state: OPTIONAL<MMState>;
    let flags: OPTIONAL<MMFlags>;
    let contentType!: UTF8String;
    let contentLocation: OPTIONAL<UTF8String>;
    let storeStatus!: MMSStoreStatus;
    let storeStatusText: OPTIONAL<UTF8String>;
    let mMessages!: MMBoxDescription[];
    const callbacks: $.DecodingMap = {
        "transactionID": (_el: _Element): void => { transactionID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "version": (_el: _Element): void => { version = $._decode_implicit<MMSVersion>(() => _decode_MMSVersion)(_el); },
        "direction": (_el: _Element): void => { direction = $._decode_implicit<MMSDirection>(() => _decode_MMSDirection)(_el); },
        "state": (_el: _Element): void => { state = $._decode_implicit<MMState>(() => _decode_MMState)(_el); },
        "flags": (_el: _Element): void => { flags = $._decode_implicit<MMFlags>(() => _decode_MMFlags)(_el); },
        "contentType": (_el: _Element): void => { contentType = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "contentLocation": (_el: _Element): void => { contentLocation = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "storeStatus": (_el: _Element): void => { storeStatus = $._decode_implicit<MMSStoreStatus>(() => _decode_MMSStoreStatus)(_el); },
        "storeStatusText": (_el: _Element): void => { storeStatusText = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "mMessages": (_el: _Element): void => { mMessages = $._decode_implicit<MMBoxDescription[]>(() => $._decodeSequenceOf<MMBoxDescription>(() => _decode_MMBoxDescription))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MMSMBoxUpload,
        _extension_additions_list_spec_for_MMSMBoxUpload,
        _root_component_type_list_2_spec_for_MMSMBoxUpload,
        undefined,
    );
    return new MMSMBoxUpload(
        transactionID,
        version,
        direction,
        state,
        flags,
        contentType,
        contentLocation,
        storeStatus,
        storeStatusText,
        mMessages
    );
}; }
    return _cached_decoder_for_MMSMBoxUpload(el);
}

let _cached_encoder_for_MMSMBoxUpload: $.ASN1Encoder<MMSMBoxUpload> | null = null;

/**
 * @summary Encodes a(n) MMSMBoxUpload into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMSMBoxUpload, encoded as an ASN.1 Element.
 */
export
function _encode_MMSMBoxUpload (value: MMSMBoxUpload, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MMSMBoxUpload) { _cached_encoder_for_MMSMBoxUpload = function (value: MMSMBoxUpload, elGetter: $.ASN1Encoder<MMSMBoxUpload>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeUTF8String, $.BER)(value.transactionID, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_MMSVersion, $.BER)(value.version, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_MMSDirection, $.BER)(value.direction, $.BER),
            /* IF_ABSENT  */ ((value.state === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_MMState, $.BER)(value.state, $.BER)),
            /* IF_ABSENT  */ ((value.flags === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_MMFlags, $.BER)(value.flags, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => $._encodeUTF8String, $.BER)(value.contentType, $.BER),
            /* IF_ABSENT  */ ((value.contentLocation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => $._encodeUTF8String, $.BER)(value.contentLocation, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 8, () => _encode_MMSStoreStatus, $.BER)(value.storeStatus, $.BER),
            /* IF_ABSENT  */ ((value.storeStatusText === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => $._encodeUTF8String, $.BER)(value.storeStatusText, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 10, () => $._encodeSequenceOf<MMBoxDescription>(() => _encode_MMBoxDescription, $.BER), $.BER)(value.mMessages, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_MMSMBoxUpload(value, elGetter);
}


/* eslint-enable */
