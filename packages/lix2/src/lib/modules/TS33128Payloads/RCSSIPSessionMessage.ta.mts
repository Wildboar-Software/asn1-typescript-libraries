/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RCSSessionLeg, _decode_RCSSessionLeg, _encode_RCSSessionLeg, _enum_for_RCSSessionLeg } from "../TS33128Payloads/RCSSessionLeg.ta.mjs";
// export { RCSSessionLeg, _enum_for_RCSSessionLeg, RCSSessionLeg_remoteLeg /* IMPORTED_LONG_ENUMERATION_ITEM */, remoteLeg /* IMPORTED_SHORT_ENUMERATION_ITEM */, RCSSessionLeg_localLeg /* IMPORTED_LONG_ENUMERATION_ITEM */, localLeg /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_RCSSessionLeg, _encode_RCSSessionLeg } from "../TS33128Payloads/RCSSessionLeg.ta.mjs";
import { IMSPayload, _decode_IMSPayload, _encode_IMSPayload } from "../TS33128Payloads/IMSPayload.ta.mjs";
// export { IMSPayload, _decode_IMSPayload, _encode_IMSPayload } from "../TS33128Payloads/IMSPayload.ta.mjs";
import { RCSSessionResult, _decode_RCSSessionResult, _encode_RCSSessionResult, _enum_for_RCSSessionResult } from "../TS33128Payloads/RCSSessionResult.ta.mjs";
// export { RCSSessionResult, _enum_for_RCSSessionResult, RCSSessionResult_newLegRequested /* IMPORTED_LONG_ENUMERATION_ITEM */, newLegRequested /* IMPORTED_SHORT_ENUMERATION_ITEM */, RCSSessionResult_newLegEstablished /* IMPORTED_LONG_ENUMERATION_ITEM */, newLegEstablished /* IMPORTED_SHORT_ENUMERATION_ITEM */, RCSSessionResult_legModificationRequested /* IMPORTED_LONG_ENUMERATION_ITEM */, legModificationRequested /* IMPORTED_SHORT_ENUMERATION_ITEM */, RCSSessionResult_legModificationComplete /* IMPORTED_LONG_ENUMERATION_ITEM */, legModificationComplete /* IMPORTED_SHORT_ENUMERATION_ITEM */, RCSSessionResult_legRemovalRequest /* IMPORTED_LONG_ENUMERATION_ITEM */, legRemovalRequest /* IMPORTED_SHORT_ENUMERATION_ITEM */, RCSSessionResult_legRemovalComplete /* IMPORTED_LONG_ENUMERATION_ITEM */, legRemovalComplete /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_RCSSessionResult, _encode_RCSSessionResult } from "../TS33128Payloads/RCSSessionResult.ta.mjs";
import { MSRPPath, _decode_MSRPPath, _encode_MSRPPath } from "../TS33128Payloads/MSRPPath.ta.mjs";
// export { MSRPPath, _decode_MSRPPath, _encode_MSRPPath } from "../TS33128Payloads/MSRPPath.ta.mjs";


/**
 * @summary RCSSIPSessionMessage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RCSSIPSessionMessage ::= SEQUENCE
 * {
 *     sessionLeg       [1] RCSSessionLeg,
 *     sIPMessage       [2] IMSPayload,
 *     rCSSessionResult [3] RCSSessionResult,
 *     mSRPPathInfo     [4] MSRPPath
 * }
 * ```
 * 
 * @class
 */
export
class RCSSIPSessionMessage {
    constructor (
        /**
         * @summary `sessionLeg`.
         * @public
         * @readonly
         */
        readonly sessionLeg: RCSSessionLeg,
        /**
         * @summary `sIPMessage`.
         * @public
         * @readonly
         */
        readonly sIPMessage: IMSPayload,
        /**
         * @summary `rCSSessionResult`.
         * @public
         * @readonly
         */
        readonly rCSSessionResult: RCSSessionResult,
        /**
         * @summary `mSRPPathInfo`.
         * @public
         * @readonly
         */
        readonly mSRPPathInfo: MSRPPath
    ) {}

    /**
     * @summary Restructures an object into a RCSSIPSessionMessage
     * @description
     * 
     * This takes an `object` and converts it to a `RCSSIPSessionMessage`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RCSSIPSessionMessage`.
     * @returns {RCSSIPSessionMessage}
     */
    public static _from_object (_o: { [_K in keyof (RCSSIPSessionMessage)]: (RCSSIPSessionMessage)[_K] }): RCSSIPSessionMessage {
        return new RCSSIPSessionMessage(_o.sessionLeg, _o.sIPMessage, _o.rCSSessionResult, _o.mSRPPathInfo);
    }

        /**
         * @summary The enum used as the type of the component `sessionLeg`
         * @public
         * @static
         */

    public static _enum_for_sessionLeg = _enum_for_RCSSessionLeg;        /**
         * @summary The enum used as the type of the component `rCSSessionResult`
         * @public
         * @static
         */

    public static _enum_for_rCSSessionResult = _enum_for_RCSSessionResult;
}

/**
 * @summary The Leading Root Component Types of RCSSIPSessionMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RCSSIPSessionMessage: $.ComponentSpec[] = [
    new $.ComponentSpec("sessionLeg", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("sIPMessage", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("rCSSessionResult", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("mSRPPathInfo", false, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of RCSSIPSessionMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RCSSIPSessionMessage: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RCSSIPSessionMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RCSSIPSessionMessage: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RCSSIPSessionMessage: $.ASN1Decoder<RCSSIPSessionMessage> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RCSSIPSessionMessage
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RCSSIPSessionMessage (el: _Element): RCSSIPSessionMessage {
    if (!_cached_decoder_for_RCSSIPSessionMessage) { _cached_decoder_for_RCSSIPSessionMessage = function (el: _Element): RCSSIPSessionMessage {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 4) {
        throw new _ConstructionError("RCSSIPSessionMessage contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "sessionLeg";
    sequence[1].name = "sIPMessage";
    sequence[2].name = "rCSSessionResult";
    sequence[3].name = "mSRPPathInfo";
    let sessionLeg!: RCSSessionLeg;
    let sIPMessage!: IMSPayload;
    let rCSSessionResult!: RCSSessionResult;
    let mSRPPathInfo!: MSRPPath;
    sessionLeg = $._decode_implicit<RCSSessionLeg>(() => _decode_RCSSessionLeg)(sequence[0]);
    sIPMessage = $._decode_explicit<IMSPayload>(() => _decode_IMSPayload)(sequence[1]);
    rCSSessionResult = $._decode_implicit<RCSSessionResult>(() => _decode_RCSSessionResult)(sequence[2]);
    mSRPPathInfo = $._decode_implicit<MSRPPath>(() => _decode_MSRPPath)(sequence[3]);
    return new RCSSIPSessionMessage(
        sessionLeg,
        sIPMessage,
        rCSSessionResult,
        mSRPPathInfo,

    );
}; }
    return _cached_decoder_for_RCSSIPSessionMessage(el);
}

let _cached_encoder_for_RCSSIPSessionMessage: $.ASN1Encoder<RCSSIPSessionMessage> | null = null;

/**
 * @summary Encodes a(n) RCSSIPSessionMessage into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RCSSIPSessionMessage, encoded as an ASN.1 Element.
 */
export
function _encode_RCSSIPSessionMessage (value: RCSSIPSessionMessage, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RCSSIPSessionMessage) { _cached_encoder_for_RCSSIPSessionMessage = function (value: RCSSIPSessionMessage, elGetter: $.ASN1Encoder<RCSSIPSessionMessage>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_RCSSessionLeg, $.BER)(value.sessionLeg, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_IMSPayload, $.BER)(value.sIPMessage, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_RCSSessionResult, $.BER)(value.rCSSessionResult, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_MSRPPath, $.BER)(value.mSRPPathInfo, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_RCSSIPSessionMessage(value, elGetter);
}


/* eslint-enable */
