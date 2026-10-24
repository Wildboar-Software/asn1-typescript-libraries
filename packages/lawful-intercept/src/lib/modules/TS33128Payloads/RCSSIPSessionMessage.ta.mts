/* eslint-disable */
import {
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RCSSessionLeg, _decode_RCSSessionLeg, _encode_RCSSessionLeg, _enum_for_RCSSessionLeg } from "../TS33128Payloads/RCSSessionLeg.ta.mjs";
// export { RCSSessionLeg, _enum_for_RCSSessionLeg, RCSSessionLeg_remoteLeg /* IMPORTED_LONG_ENUMERATION_ITEM */, remoteLeg /* IMPORTED_SHORT_ENUMERATION_ITEM */, RCSSessionLeg_localLeg /* IMPORTED_LONG_ENUMERATION_ITEM */, localLeg /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_RCSSessionLeg, _encode_RCSSessionLeg } from "../TS33128Payloads/RCSSessionLeg.ta.mjs";
import { type IMSPayload, _decode_IMSPayload, _encode_IMSPayload } from "../TS33128Payloads/IMSPayload.ta.mjs";
// export { IMSPayload, _decode_IMSPayload, _encode_IMSPayload } from "../TS33128Payloads/IMSPayload.ta.mjs";
import { RCSSessionResult, _decode_RCSSessionResult, _encode_RCSSessionResult, _enum_for_RCSSessionResult } from "../TS33128Payloads/RCSSessionResult.ta.mjs";
// export { RCSSessionResult, _enum_for_RCSSessionResult, RCSSessionResult_newLegRequested /* IMPORTED_LONG_ENUMERATION_ITEM */, newLegRequested /* IMPORTED_SHORT_ENUMERATION_ITEM */, RCSSessionResult_newLegEstablished /* IMPORTED_LONG_ENUMERATION_ITEM */, newLegEstablished /* IMPORTED_SHORT_ENUMERATION_ITEM */, RCSSessionResult_legModificationRequested /* IMPORTED_LONG_ENUMERATION_ITEM */, legModificationRequested /* IMPORTED_SHORT_ENUMERATION_ITEM */, RCSSessionResult_legModificationComplete /* IMPORTED_LONG_ENUMERATION_ITEM */, legModificationComplete /* IMPORTED_SHORT_ENUMERATION_ITEM */, RCSSessionResult_legRemovalRequest /* IMPORTED_LONG_ENUMERATION_ITEM */, legRemovalRequest /* IMPORTED_SHORT_ENUMERATION_ITEM */, RCSSessionResult_legRemovalComplete /* IMPORTED_LONG_ENUMERATION_ITEM */, legRemovalComplete /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_RCSSessionResult, _encode_RCSSessionResult } from "../TS33128Payloads/RCSSessionResult.ta.mjs";
import { MSRPPath, _decode_MSRPPath, _encode_MSRPPath } from "../TS33128Payloads/MSRPPath.ta.mjs";
// export { MSRPPath, _decode_MSRPPath, _encode_MSRPPath } from "../TS33128Payloads/MSRPPath.ta.mjs";


/**
 * @summary RCSSIPSessionMessage
 * @description
 * 
 * NOTE: The parameter mSRPPathInfo was incorrectly introduced in version 18.7.0
 * of the present document (ASN.1 OID r18(18) version7(7)) as a mandatory
 * parameter and was not corrected before the creation of version 19.0.0 of the
 * present document. It should have been OPTIONAL and was corrected in version
 * 19.8.0 of the present document (ASN.1 OID r19(19) version8(8)).
 *
 * 3GPP TS 33.128, clause 7.13.3.4.5.3.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RCSSIPSessionMessage ::= SEQUENCE
 * {
 *     sessionLeg       [1] RCSSessionLeg,
 *     sIPMessage       [2] IMSPayload,
 *     rCSSessionResult [3] RCSSessionResult,
 *     mSRPPathInfo     [4] MSRPPath OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class RCSSIPSessionMessage {
    /**
     * @summary `sessionLeg`.
     * @description
     *
     * Identifies the leg of the RCS session.
     *
     * 3GPP TS 33.128, clause 7.13.3.4.5.3.
     *
     * @public
     * @readonly
     */
    readonly sessionLeg: RCSSessionLeg;
    /**
     * @summary `sIPMessage`.
     * @description
     *
     * Contains the SIP Message.
     *
     * 3GPP TS 33.128, clause 7.13.3.4.5.3.
     *
     * @public
     * @readonly
     */
    readonly sIPMessage: IMSPayload;
    /**
     * @summary `rCSSessionResult`.
     * @description
     *
     * Contains an indication of the resulting state of the RCS Session Leg.
     *
     * 3GPP TS 33.128, clause 7.13.3.4.5.3.
     *
     * @public
     * @readonly
     */
    readonly rCSSessionResult: RCSSessionResult;
    /**
     * @summary `mSRPPathInfo`.
     * @description
     *
     * Shall be present if the SIP Message contains path information for an MSRP
     * Session. See NOTE. NOTE: The parameter mSRPPathInfo was incorrectly
     * introduced in version 18.7.0 of the present document (ASN.1 OID r18(18)
     * version7(7)) as a mandatory parameter and was not corrected before the
     * creation of version 19.0.0 of the present document. It should have been
     * OPTIONAL and was corrected in version 19.8.0 of the present document
     * (ASN.1 OID r19(19) version8(8)).
     *
     * 3GPP TS 33.128, clause 7.13.3.4.5.3.
     *
     * @public
     * @readonly
     */
    readonly mSRPPathInfo: OPTIONAL<MSRPPath>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        sessionLeg: RCSSessionLeg,
        sIPMessage: IMSPayload,
        rCSSessionResult: RCSSessionResult,
        mSRPPathInfo?: OPTIONAL<MSRPPath>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.sessionLeg = sessionLeg;
        this.sIPMessage = sIPMessage;
        this.rCSSessionResult = rCSSessionResult;
        this.mSRPPathInfo = mSRPPathInfo;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

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
        return new RCSSIPSessionMessage(_o.sessionLeg, _o.sIPMessage, _o.rCSSessionResult, _o.mSRPPathInfo, _o._unrecognizedExtensionsList);
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
    new $.ComponentSpec("mSRPPathInfo", true, $.hasTag(_TagClass.context, 4))
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
    let sessionLeg!: RCSSessionLeg;
    let sIPMessage!: IMSPayload;
    let rCSSessionResult!: RCSSessionResult;
    let mSRPPathInfo: OPTIONAL<MSRPPath>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "sessionLeg": (_el: _Element): void => { sessionLeg = $._decode_implicit<RCSSessionLeg>(() => _decode_RCSSessionLeg)(_el); },
        "sIPMessage": (_el: _Element): void => { sIPMessage = $._decode_explicit<IMSPayload>(() => _decode_IMSPayload)(_el); },
        "rCSSessionResult": (_el: _Element): void => { rCSSessionResult = $._decode_implicit<RCSSessionResult>(() => _decode_RCSSessionResult)(_el); },
        "mSRPPathInfo": (_el: _Element): void => { mSRPPathInfo = $._decode_implicit<MSRPPath>(() => _decode_MSRPPath)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RCSSIPSessionMessage,
        _extension_additions_list_spec_for_RCSSIPSessionMessage,
        _root_component_type_list_2_spec_for_RCSSIPSessionMessage,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new RCSSIPSessionMessage(
        sessionLeg,
        sIPMessage,
        rCSSessionResult,
        mSRPPathInfo,
        _unrecognizedExtensionsList
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
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(4 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_RCSSessionLeg, $.BER)(value.sessionLeg, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_IMSPayload, $.BER)(value.sIPMessage, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_RCSSessionResult, $.BER)(value.rCSSessionResult, $.BER);
    if (value.mSRPPathInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_MSRPPath, $.BER)(value.mSRPPathInfo, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_RCSSIPSessionMessage(value, elGetter);
}


/* eslint-enable */
