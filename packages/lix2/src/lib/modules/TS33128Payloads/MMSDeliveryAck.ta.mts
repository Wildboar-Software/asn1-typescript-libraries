/* eslint-disable */
import {
    BOOLEAN,
    OPTIONAL,
    UTF8String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MMSVersion, _decode_MMSVersion, _encode_MMSVersion } from "../TS33128Payloads/MMSVersion.ta.mjs";
// export { MMSVersion, _decode_MMSVersion, _encode_MMSVersion } from "../TS33128Payloads/MMSVersion.ta.mjs";
import { MMStatus, _decode_MMStatus, _encode_MMStatus, _enum_for_MMStatus } from "../TS33128Payloads/MMStatus.ta.mjs";
// export { MMStatus, _enum_for_MMStatus, MMStatus_expired /* IMPORTED_LONG_ENUMERATION_ITEM */, expired /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMStatus_retrieved /* IMPORTED_LONG_ENUMERATION_ITEM */, retrieved /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMStatus_rejected /* IMPORTED_LONG_ENUMERATION_ITEM */, rejected /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMStatus_deferred /* IMPORTED_LONG_ENUMERATION_ITEM */, deferred /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMStatus_unrecognized /* IMPORTED_LONG_ENUMERATION_ITEM */, unrecognized /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMStatus_indeterminate /* IMPORTED_LONG_ENUMERATION_ITEM */, indeterminate /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMStatus_forwarded /* IMPORTED_LONG_ENUMERATION_ITEM */, forwarded /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMStatus_unreachable /* IMPORTED_LONG_ENUMERATION_ITEM */, unreachable /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MMStatus, _encode_MMStatus } from "../TS33128Payloads/MMStatus.ta.mjs";
import { MMSDirection, _decode_MMSDirection, _encode_MMSDirection, _enum_for_MMSDirection } from "../TS33128Payloads/MMSDirection.ta.mjs";
// export { MMSDirection, _enum_for_MMSDirection, MMSDirection_fromTarget /* IMPORTED_LONG_ENUMERATION_ITEM */, fromTarget /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSDirection_toTarget /* IMPORTED_LONG_ENUMERATION_ITEM */, toTarget /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MMSDirection, _encode_MMSDirection } from "../TS33128Payloads/MMSDirection.ta.mjs";


/**
 * @summary MMSDeliveryAck
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSDeliveryAck ::= SEQUENCE
 * {
 *     transactionID [1] UTF8String,
 *     version       [2] MMSVersion,
 *     reportAllowed [3] BOOLEAN OPTIONAL,
 *     status        [4] MMStatus,
 *     direction     [5] MMSDirection
 * }
 * ```
 * 
 * @class
 */
export
class MMSDeliveryAck {
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
         * @summary `reportAllowed`.
         * @public
         * @readonly
         */
        readonly reportAllowed: OPTIONAL<BOOLEAN>,
        /**
         * @summary `status`.
         * @public
         * @readonly
         */
        readonly status: MMStatus,
        /**
         * @summary `direction`.
         * @public
         * @readonly
         */
        readonly direction: MMSDirection
    ) {}

    /**
     * @summary Restructures an object into a MMSDeliveryAck
     * @description
     * 
     * This takes an `object` and converts it to a `MMSDeliveryAck`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MMSDeliveryAck`.
     * @returns {MMSDeliveryAck}
     */
    public static _from_object (_o: { [_K in keyof (MMSDeliveryAck)]: (MMSDeliveryAck)[_K] }): MMSDeliveryAck {
        return new MMSDeliveryAck(_o.transactionID, _o.version, _o.reportAllowed, _o.status, _o.direction);
    }

        /**
         * @summary The enum used as the type of the component `status`
         * @public
         * @static
         */

    public static _enum_for_status = _enum_for_MMStatus;        /**
         * @summary The enum used as the type of the component `direction`
         * @public
         * @static
         */

    public static _enum_for_direction = _enum_for_MMSDirection;
}

/**
 * @summary The Leading Root Component Types of MMSDeliveryAck
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MMSDeliveryAck: $.ComponentSpec[] = [
    new $.ComponentSpec("transactionID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("version", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("reportAllowed", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("status", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("direction", false, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of MMSDeliveryAck
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MMSDeliveryAck: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MMSDeliveryAck
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MMSDeliveryAck: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MMSDeliveryAck: $.ASN1Decoder<MMSDeliveryAck> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MMSDeliveryAck
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MMSDeliveryAck (el: _Element): MMSDeliveryAck {
    if (!_cached_decoder_for_MMSDeliveryAck) { _cached_decoder_for_MMSDeliveryAck = function (el: _Element): MMSDeliveryAck {
    let transactionID!: UTF8String;
    let version!: MMSVersion;
    let reportAllowed: OPTIONAL<BOOLEAN>;
    let status!: MMStatus;
    let direction!: MMSDirection;
    const callbacks: $.DecodingMap = {
        "transactionID": (_el: _Element): void => { transactionID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "version": (_el: _Element): void => { version = $._decode_implicit<MMSVersion>(() => _decode_MMSVersion)(_el); },
        "reportAllowed": (_el: _Element): void => { reportAllowed = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "status": (_el: _Element): void => { status = $._decode_implicit<MMStatus>(() => _decode_MMStatus)(_el); },
        "direction": (_el: _Element): void => { direction = $._decode_implicit<MMSDirection>(() => _decode_MMSDirection)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MMSDeliveryAck,
        _extension_additions_list_spec_for_MMSDeliveryAck,
        _root_component_type_list_2_spec_for_MMSDeliveryAck,
        undefined,
    );
    return new MMSDeliveryAck(
        transactionID,
        version,
        reportAllowed,
        status,
        direction
    );
}; }
    return _cached_decoder_for_MMSDeliveryAck(el);
}

let _cached_encoder_for_MMSDeliveryAck: $.ASN1Encoder<MMSDeliveryAck> | null = null;

/**
 * @summary Encodes a(n) MMSDeliveryAck into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMSDeliveryAck, encoded as an ASN.1 Element.
 */
export
function _encode_MMSDeliveryAck (value: MMSDeliveryAck, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MMSDeliveryAck) { _cached_encoder_for_MMSDeliveryAck = function (value: MMSDeliveryAck, elGetter: $.ASN1Encoder<MMSDeliveryAck>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeUTF8String, $.BER)(value.transactionID, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_MMSVersion, $.BER)(value.version, $.BER),
            /* IF_ABSENT  */ ((value.reportAllowed === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeBoolean, $.BER)(value.reportAllowed, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_MMStatus, $.BER)(value.status, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => _encode_MMSDirection, $.BER)(value.direction, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_MMSDeliveryAck(value, elGetter);
}


/* eslint-enable */
