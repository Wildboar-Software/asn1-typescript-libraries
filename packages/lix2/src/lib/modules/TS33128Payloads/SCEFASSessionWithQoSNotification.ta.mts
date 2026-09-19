/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MSISDN, _decode_MSISDN, _encode_MSISDN } from "../TS33128Payloads/MSISDN.ta.mjs";
// export { MSISDN, _decode_MSISDN, _encode_MSISDN } from "../TS33128Payloads/MSISDN.ta.mjs";
import { NAI, _decode_NAI, _encode_NAI } from "../TS33128Payloads/NAI.ta.mjs";
// export { NAI, _decode_NAI, _encode_NAI } from "../TS33128Payloads/NAI.ta.mjs";
import { SCSASID, _decode_SCSASID, _encode_SCSASID } from "../TS33128Payloads/SCSASID.ta.mjs";
// export { SCSASID, _decode_SCSASID, _encode_SCSASID } from "../TS33128Payloads/SCSASID.ta.mjs";
import { SBIType, _decode_SBIType, _encode_SBIType } from "../TS33128Payloads/SBIType.ta.mjs";
// export { SBIType, _decode_SBIType, _encode_SBIType } from "../TS33128Payloads/SBIType.ta.mjs";
import { AForASSessionWithQoSResponseCode, _decode_AForASSessionWithQoSResponseCode, _encode_AForASSessionWithQoSResponseCode, _enum_for_AForASSessionWithQoSResponseCode } from "../TS33128Payloads/AForASSessionWithQoSResponseCode.ta.mjs";
// export { AForASSessionWithQoSResponseCode, _enum_for_AForASSessionWithQoSResponseCode, AForASSessionWithQoSResponseCode_oK200 /* IMPORTED_LONG_ENUMERATION_ITEM */, oK200 /* IMPORTED_SHORT_ENUMERATION_ITEM */, AForASSessionWithQoSResponseCode_created201 /* IMPORTED_LONG_ENUMERATION_ITEM */, created201 /* IMPORTED_SHORT_ENUMERATION_ITEM */, AForASSessionWithQoSResponseCode_noContent204 /* IMPORTED_LONG_ENUMERATION_ITEM */, noContent204 /* IMPORTED_SHORT_ENUMERATION_ITEM */, AForASSessionWithQoSResponseCode_temporaryRedirect307 /* IMPORTED_LONG_ENUMERATION_ITEM */, temporaryRedirect307 /* IMPORTED_SHORT_ENUMERATION_ITEM */, AForASSessionWithQoSResponseCode_permanentRedirect308 /* IMPORTED_LONG_ENUMERATION_ITEM */, permanentRedirect308 /* IMPORTED_SHORT_ENUMERATION_ITEM */, AForASSessionWithQoSResponseCode_badRequest400 /* IMPORTED_LONG_ENUMERATION_ITEM */, badRequest400 /* IMPORTED_SHORT_ENUMERATION_ITEM */, AForASSessionWithQoSResponseCode_unauthorized401 /* IMPORTED_LONG_ENUMERATION_ITEM */, unauthorized401 /* IMPORTED_SHORT_ENUMERATION_ITEM */, AForASSessionWithQoSResponseCode_forbidden403 /* IMPORTED_LONG_ENUMERATION_ITEM */, forbidden403 /* IMPORTED_SHORT_ENUMERATION_ITEM */, AForASSessionWithQoSResponseCode_notFound404 /* IMPORTED_LONG_ENUMERATION_ITEM */, notFound404 /* IMPORTED_SHORT_ENUMERATION_ITEM */, AForASSessionWithQoSResponseCode_notAcceptable406 /* IMPORTED_LONG_ENUMERATION_ITEM */, notAcceptable406 /* IMPORTED_SHORT_ENUMERATION_ITEM */, AForASSessionWithQoSResponseCode_lengthRequired411 /* IMPORTED_LONG_ENUMERATION_ITEM */, lengthRequired411 /* IMPORTED_SHORT_ENUMERATION_ITEM */, AForASSessionWithQoSResponseCode_unsupportedMediaType415 /* IMPORTED_LONG_ENUMERATION_ITEM */, unsupportedMediaType415 /* IMPORTED_SHORT_ENUMERATION_ITEM */, AForASSessionWithQoSResponseCode_tooManyRequests429 /* IMPORTED_LONG_ENUMERATION_ITEM */, tooManyRequests429 /* IMPORTED_SHORT_ENUMERATION_ITEM */, AForASSessionWithQoSResponseCode_internalServerError500 /* IMPORTED_LONG_ENUMERATION_ITEM */, internalServerError500 /* IMPORTED_SHORT_ENUMERATION_ITEM */, AForASSessionWithQoSResponseCode_serviceUnavailable503 /* IMPORTED_LONG_ENUMERATION_ITEM */, serviceUnavailable503 /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AForASSessionWithQoSResponseCode, _encode_AForASSessionWithQoSResponseCode } from "../TS33128Payloads/AForASSessionWithQoSResponseCode.ta.mjs";


/**
 * @summary SCEFASSessionWithQoSNotification
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SCEFASSessionWithQoSNotification ::= SEQUENCE
 * {
 *     mSISDN                               [1] MSISDN OPTIONAL,
 *     externalIdentifier                   [2] NAI OPTIONAL,
 *     sCSASID                              [3] SCSASID,
 *     userPlaneNotificationData            [4] SBIType,
 *     aSSessionWithQoSResponseCode         [5] AForASSessionWithQoSResponseCode
 * }
 * ```
 * 
 * @class
 */
export
class SCEFASSessionWithQoSNotification {
    constructor (
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
         * @summary `sCSASID`.
         * @public
         * @readonly
         */
        readonly sCSASID: SCSASID,
        /**
         * @summary `userPlaneNotificationData`.
         * @public
         * @readonly
         */
        readonly userPlaneNotificationData: SBIType,
        /**
         * @summary `aSSessionWithQoSResponseCode`.
         * @public
         * @readonly
         */
        readonly aSSessionWithQoSResponseCode: AForASSessionWithQoSResponseCode
    ) {}

    /**
     * @summary Restructures an object into a SCEFASSessionWithQoSNotification
     * @description
     * 
     * This takes an `object` and converts it to a `SCEFASSessionWithQoSNotification`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SCEFASSessionWithQoSNotification`.
     * @returns {SCEFASSessionWithQoSNotification}
     */
    public static _from_object (_o: { [_K in keyof (SCEFASSessionWithQoSNotification)]: (SCEFASSessionWithQoSNotification)[_K] }): SCEFASSessionWithQoSNotification {
        return new SCEFASSessionWithQoSNotification(_o.mSISDN, _o.externalIdentifier, _o.sCSASID, _o.userPlaneNotificationData, _o.aSSessionWithQoSResponseCode);
    }

        /**
         * @summary The enum used as the type of the component `aSSessionWithQoSResponseCode`
         * @public
         * @static
         */

    public static _enum_for_aSSessionWithQoSResponseCode = _enum_for_AForASSessionWithQoSResponseCode;
}

/**
 * @summary The Leading Root Component Types of SCEFASSessionWithQoSNotification
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SCEFASSessionWithQoSNotification: $.ComponentSpec[] = [
    new $.ComponentSpec("mSISDN", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("externalIdentifier", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("sCSASID", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("userPlaneNotificationData", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("aSSessionWithQoSResponseCode", false, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of SCEFASSessionWithQoSNotification
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SCEFASSessionWithQoSNotification: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SCEFASSessionWithQoSNotification
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SCEFASSessionWithQoSNotification: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SCEFASSessionWithQoSNotification: $.ASN1Decoder<SCEFASSessionWithQoSNotification> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SCEFASSessionWithQoSNotification
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SCEFASSessionWithQoSNotification (el: _Element): SCEFASSessionWithQoSNotification {
    if (!_cached_decoder_for_SCEFASSessionWithQoSNotification) { _cached_decoder_for_SCEFASSessionWithQoSNotification = function (el: _Element): SCEFASSessionWithQoSNotification {
    let mSISDN: OPTIONAL<MSISDN>;
    let externalIdentifier: OPTIONAL<NAI>;
    let sCSASID!: SCSASID;
    let userPlaneNotificationData!: SBIType;
    let aSSessionWithQoSResponseCode!: AForASSessionWithQoSResponseCode;
    const callbacks: $.DecodingMap = {
        "mSISDN": (_el: _Element): void => { mSISDN = $._decode_implicit<MSISDN>(() => _decode_MSISDN)(_el); },
        "externalIdentifier": (_el: _Element): void => { externalIdentifier = $._decode_implicit<NAI>(() => _decode_NAI)(_el); },
        "sCSASID": (_el: _Element): void => { sCSASID = $._decode_implicit<SCSASID>(() => _decode_SCSASID)(_el); },
        "userPlaneNotificationData": (_el: _Element): void => { userPlaneNotificationData = $._decode_implicit<SBIType>(() => _decode_SBIType)(_el); },
        "aSSessionWithQoSResponseCode": (_el: _Element): void => { aSSessionWithQoSResponseCode = $._decode_implicit<AForASSessionWithQoSResponseCode>(() => _decode_AForASSessionWithQoSResponseCode)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SCEFASSessionWithQoSNotification,
        _extension_additions_list_spec_for_SCEFASSessionWithQoSNotification,
        _root_component_type_list_2_spec_for_SCEFASSessionWithQoSNotification,
        undefined,
    );
    return new SCEFASSessionWithQoSNotification(
        mSISDN,
        externalIdentifier,
        sCSASID,
        userPlaneNotificationData,
        aSSessionWithQoSResponseCode
    );
}; }
    return _cached_decoder_for_SCEFASSessionWithQoSNotification(el);
}

let _cached_encoder_for_SCEFASSessionWithQoSNotification: $.ASN1Encoder<SCEFASSessionWithQoSNotification> | null = null;

/**
 * @summary Encodes a(n) SCEFASSessionWithQoSNotification into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SCEFASSessionWithQoSNotification, encoded as an ASN.1 Element.
 */
export
function _encode_SCEFASSessionWithQoSNotification (value: SCEFASSessionWithQoSNotification, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SCEFASSessionWithQoSNotification) { _cached_encoder_for_SCEFASSessionWithQoSNotification = function (value: SCEFASSessionWithQoSNotification, elGetter: $.ASN1Encoder<SCEFASSessionWithQoSNotification>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.mSISDN === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_MSISDN, $.BER)(value.mSISDN, $.BER)),
            /* IF_ABSENT  */ ((value.externalIdentifier === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_NAI, $.BER)(value.externalIdentifier, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_SCSASID, $.BER)(value.sCSASID, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_SBIType, $.BER)(value.userPlaneNotificationData, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => _encode_AForASSessionWithQoSResponseCode, $.BER)(value.aSSessionWithQoSResponseCode, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SCEFASSessionWithQoSNotification(value, elGetter);
}


/* eslint-enable */
