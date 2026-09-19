/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128Payloads/GPSI.ta.mjs";
// export { GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128Payloads/GPSI.ta.mjs";
import { AFID, _decode_AFID, _encode_AFID } from "../TS33128Payloads/AFID.ta.mjs";
// export { AFID, _decode_AFID, _encode_AFID } from "../TS33128Payloads/AFID.ta.mjs";
import { AForASSessionWithQoSOpType, _decode_AForASSessionWithQoSOpType, _encode_AForASSessionWithQoSOpType, _enum_for_AForASSessionWithQoSOpType } from "../TS33128Payloads/AForASSessionWithQoSOpType.ta.mjs";
// export { AForASSessionWithQoSOpType, _enum_for_AForASSessionWithQoSOpType, AForASSessionWithQoSOpType_pOST /* IMPORTED_LONG_ENUMERATION_ITEM */, pOST /* IMPORTED_SHORT_ENUMERATION_ITEM */, AForASSessionWithQoSOpType_pUT /* IMPORTED_LONG_ENUMERATION_ITEM */, pUT /* IMPORTED_SHORT_ENUMERATION_ITEM */, AForASSessionWithQoSOpType_pATCH /* IMPORTED_LONG_ENUMERATION_ITEM */, pATCH /* IMPORTED_SHORT_ENUMERATION_ITEM */, AForASSessionWithQoSOpType_dELETE /* IMPORTED_LONG_ENUMERATION_ITEM */, dELETE /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AForASSessionWithQoSOpType, _encode_AForASSessionWithQoSOpType } from "../TS33128Payloads/AForASSessionWithQoSOpType.ta.mjs";
import { SBIType, _decode_SBIType, _encode_SBIType } from "../TS33128Payloads/SBIType.ta.mjs";
// export { SBIType, _decode_SBIType, _encode_SBIType } from "../TS33128Payloads/SBIType.ta.mjs";
import { AForASSessionWithQoSResponseCode, _decode_AForASSessionWithQoSResponseCode, _encode_AForASSessionWithQoSResponseCode, _enum_for_AForASSessionWithQoSResponseCode } from "../TS33128Payloads/AForASSessionWithQoSResponseCode.ta.mjs";
// export { AForASSessionWithQoSResponseCode, _enum_for_AForASSessionWithQoSResponseCode, AForASSessionWithQoSResponseCode_oK200 /* IMPORTED_LONG_ENUMERATION_ITEM */, oK200 /* IMPORTED_SHORT_ENUMERATION_ITEM */, AForASSessionWithQoSResponseCode_created201 /* IMPORTED_LONG_ENUMERATION_ITEM */, created201 /* IMPORTED_SHORT_ENUMERATION_ITEM */, AForASSessionWithQoSResponseCode_noContent204 /* IMPORTED_LONG_ENUMERATION_ITEM */, noContent204 /* IMPORTED_SHORT_ENUMERATION_ITEM */, AForASSessionWithQoSResponseCode_temporaryRedirect307 /* IMPORTED_LONG_ENUMERATION_ITEM */, temporaryRedirect307 /* IMPORTED_SHORT_ENUMERATION_ITEM */, AForASSessionWithQoSResponseCode_permanentRedirect308 /* IMPORTED_LONG_ENUMERATION_ITEM */, permanentRedirect308 /* IMPORTED_SHORT_ENUMERATION_ITEM */, AForASSessionWithQoSResponseCode_badRequest400 /* IMPORTED_LONG_ENUMERATION_ITEM */, badRequest400 /* IMPORTED_SHORT_ENUMERATION_ITEM */, AForASSessionWithQoSResponseCode_unauthorized401 /* IMPORTED_LONG_ENUMERATION_ITEM */, unauthorized401 /* IMPORTED_SHORT_ENUMERATION_ITEM */, AForASSessionWithQoSResponseCode_forbidden403 /* IMPORTED_LONG_ENUMERATION_ITEM */, forbidden403 /* IMPORTED_SHORT_ENUMERATION_ITEM */, AForASSessionWithQoSResponseCode_notFound404 /* IMPORTED_LONG_ENUMERATION_ITEM */, notFound404 /* IMPORTED_SHORT_ENUMERATION_ITEM */, AForASSessionWithQoSResponseCode_notAcceptable406 /* IMPORTED_LONG_ENUMERATION_ITEM */, notAcceptable406 /* IMPORTED_SHORT_ENUMERATION_ITEM */, AForASSessionWithQoSResponseCode_lengthRequired411 /* IMPORTED_LONG_ENUMERATION_ITEM */, lengthRequired411 /* IMPORTED_SHORT_ENUMERATION_ITEM */, AForASSessionWithQoSResponseCode_unsupportedMediaType415 /* IMPORTED_LONG_ENUMERATION_ITEM */, unsupportedMediaType415 /* IMPORTED_SHORT_ENUMERATION_ITEM */, AForASSessionWithQoSResponseCode_tooManyRequests429 /* IMPORTED_LONG_ENUMERATION_ITEM */, tooManyRequests429 /* IMPORTED_SHORT_ENUMERATION_ITEM */, AForASSessionWithQoSResponseCode_internalServerError500 /* IMPORTED_LONG_ENUMERATION_ITEM */, internalServerError500 /* IMPORTED_SHORT_ENUMERATION_ITEM */, AForASSessionWithQoSResponseCode_serviceUnavailable503 /* IMPORTED_LONG_ENUMERATION_ITEM */, serviceUnavailable503 /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AForASSessionWithQoSResponseCode, _encode_AForASSessionWithQoSResponseCode } from "../TS33128Payloads/AForASSessionWithQoSResponseCode.ta.mjs";


/**
 * @summary NEFAFSessionWithQoSProvision
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NEFAFSessionWithQoSProvision ::= SEQUENCE
 * {
 *     gPSI                                 [1] GPSI,
 *     aFID                                 [2] AFID,
 *     aFSessionWithQoSOpType               [3] AForASSessionWithQoSOpType,
 *     aFSessionWithQoSSubscription         [4] SBIType OPTIONAL,
 *     aFSessionWithQoSSubscriptionPatch    [5] SBIType OPTIONAL,
 *     aFSessionWithQoSResponseCode         [6] AForASSessionWithQoSResponseCode
 * }
 * ```
 * 
 * @class
 */
export
class NEFAFSessionWithQoSProvision {
    constructor (
        /**
         * @summary `gPSI`.
         * @public
         * @readonly
         */
        readonly gPSI: GPSI,
        /**
         * @summary `aFID`.
         * @public
         * @readonly
         */
        readonly aFID: AFID,
        /**
         * @summary `aFSessionWithQoSOpType`.
         * @public
         * @readonly
         */
        readonly aFSessionWithQoSOpType: AForASSessionWithQoSOpType,
        /**
         * @summary `aFSessionWithQoSSubscription`.
         * @public
         * @readonly
         */
        readonly aFSessionWithQoSSubscription: OPTIONAL<SBIType>,
        /**
         * @summary `aFSessionWithQoSSubscriptionPatch`.
         * @public
         * @readonly
         */
        readonly aFSessionWithQoSSubscriptionPatch: OPTIONAL<SBIType>,
        /**
         * @summary `aFSessionWithQoSResponseCode`.
         * @public
         * @readonly
         */
        readonly aFSessionWithQoSResponseCode: AForASSessionWithQoSResponseCode
    ) {}

    /**
     * @summary Restructures an object into a NEFAFSessionWithQoSProvision
     * @description
     * 
     * This takes an `object` and converts it to a `NEFAFSessionWithQoSProvision`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NEFAFSessionWithQoSProvision`.
     * @returns {NEFAFSessionWithQoSProvision}
     */
    public static _from_object (_o: { [_K in keyof (NEFAFSessionWithQoSProvision)]: (NEFAFSessionWithQoSProvision)[_K] }): NEFAFSessionWithQoSProvision {
        return new NEFAFSessionWithQoSProvision(_o.gPSI, _o.aFID, _o.aFSessionWithQoSOpType, _o.aFSessionWithQoSSubscription, _o.aFSessionWithQoSSubscriptionPatch, _o.aFSessionWithQoSResponseCode);
    }

        /**
         * @summary The enum used as the type of the component `aFSessionWithQoSOpType`
         * @public
         * @static
         */

    public static _enum_for_aFSessionWithQoSOpType = _enum_for_AForASSessionWithQoSOpType;        /**
         * @summary The enum used as the type of the component `aFSessionWithQoSResponseCode`
         * @public
         * @static
         */

    public static _enum_for_aFSessionWithQoSResponseCode = _enum_for_AForASSessionWithQoSResponseCode;
}

/**
 * @summary The Leading Root Component Types of NEFAFSessionWithQoSProvision
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_NEFAFSessionWithQoSProvision: $.ComponentSpec[] = [
    new $.ComponentSpec("gPSI", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("aFID", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("aFSessionWithQoSOpType", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("aFSessionWithQoSSubscription", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("aFSessionWithQoSSubscriptionPatch", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("aFSessionWithQoSResponseCode", false, $.hasTag(_TagClass.context, 6))
];

/**
 * @summary The Trailing Root Component Types of NEFAFSessionWithQoSProvision
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_NEFAFSessionWithQoSProvision: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of NEFAFSessionWithQoSProvision
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_NEFAFSessionWithQoSProvision: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_NEFAFSessionWithQoSProvision: $.ASN1Decoder<NEFAFSessionWithQoSProvision> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NEFAFSessionWithQoSProvision
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NEFAFSessionWithQoSProvision (el: _Element): NEFAFSessionWithQoSProvision {
    if (!_cached_decoder_for_NEFAFSessionWithQoSProvision) { _cached_decoder_for_NEFAFSessionWithQoSProvision = function (el: _Element): NEFAFSessionWithQoSProvision {
    let gPSI!: GPSI;
    let aFID!: AFID;
    let aFSessionWithQoSOpType!: AForASSessionWithQoSOpType;
    let aFSessionWithQoSSubscription: OPTIONAL<SBIType>;
    let aFSessionWithQoSSubscriptionPatch: OPTIONAL<SBIType>;
    let aFSessionWithQoSResponseCode!: AForASSessionWithQoSResponseCode;
    const callbacks: $.DecodingMap = {
        "gPSI": (_el: _Element): void => { gPSI = $._decode_explicit<GPSI>(() => _decode_GPSI)(_el); },
        "aFID": (_el: _Element): void => { aFID = $._decode_implicit<AFID>(() => _decode_AFID)(_el); },
        "aFSessionWithQoSOpType": (_el: _Element): void => { aFSessionWithQoSOpType = $._decode_implicit<AForASSessionWithQoSOpType>(() => _decode_AForASSessionWithQoSOpType)(_el); },
        "aFSessionWithQoSSubscription": (_el: _Element): void => { aFSessionWithQoSSubscription = $._decode_implicit<SBIType>(() => _decode_SBIType)(_el); },
        "aFSessionWithQoSSubscriptionPatch": (_el: _Element): void => { aFSessionWithQoSSubscriptionPatch = $._decode_implicit<SBIType>(() => _decode_SBIType)(_el); },
        "aFSessionWithQoSResponseCode": (_el: _Element): void => { aFSessionWithQoSResponseCode = $._decode_implicit<AForASSessionWithQoSResponseCode>(() => _decode_AForASSessionWithQoSResponseCode)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_NEFAFSessionWithQoSProvision,
        _extension_additions_list_spec_for_NEFAFSessionWithQoSProvision,
        _root_component_type_list_2_spec_for_NEFAFSessionWithQoSProvision,
        undefined,
    );
    return new NEFAFSessionWithQoSProvision(
        gPSI,
        aFID,
        aFSessionWithQoSOpType,
        aFSessionWithQoSSubscription,
        aFSessionWithQoSSubscriptionPatch,
        aFSessionWithQoSResponseCode
    );
}; }
    return _cached_decoder_for_NEFAFSessionWithQoSProvision(el);
}

let _cached_encoder_for_NEFAFSessionWithQoSProvision: $.ASN1Encoder<NEFAFSessionWithQoSProvision> | null = null;

/**
 * @summary Encodes a(n) NEFAFSessionWithQoSProvision into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NEFAFSessionWithQoSProvision, encoded as an ASN.1 Element.
 */
export
function _encode_NEFAFSessionWithQoSProvision (value: NEFAFSessionWithQoSProvision, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NEFAFSessionWithQoSProvision) { _cached_encoder_for_NEFAFSessionWithQoSProvision = function (value: NEFAFSessionWithQoSProvision, elGetter: $.ASN1Encoder<NEFAFSessionWithQoSProvision>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_GPSI, $.BER)(value.gPSI, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_AFID, $.BER)(value.aFID, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_AForASSessionWithQoSOpType, $.BER)(value.aFSessionWithQoSOpType, $.BER),
            /* IF_ABSENT  */ ((value.aFSessionWithQoSSubscription === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_SBIType, $.BER)(value.aFSessionWithQoSSubscription, $.BER)),
            /* IF_ABSENT  */ ((value.aFSessionWithQoSSubscriptionPatch === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_SBIType, $.BER)(value.aFSessionWithQoSSubscriptionPatch, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => _encode_AForASSessionWithQoSResponseCode, $.BER)(value.aFSessionWithQoSResponseCode, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_NEFAFSessionWithQoSProvision(value, elGetter);
}


/* eslint-enable */
