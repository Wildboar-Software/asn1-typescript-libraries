/* eslint-disable */
import {
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PASSporT, _decode_PASSporT, _encode_PASSporT } from "../TS33128Payloads/PASSporT.ta.mjs";
// export { PASSporT, _decode_PASSporT, _encode_PASSporT } from "../TS33128Payloads/PASSporT.ta.mjs";
import { RCDDisplayInfo, _decode_RCDDisplayInfo, _encode_RCDDisplayInfo } from "../TS33128Payloads/RCDDisplayInfo.ta.mjs";
// export { RCDDisplayInfo, _decode_RCDDisplayInfo, _encode_RCDDisplayInfo } from "../TS33128Payloads/RCDDisplayInfo.ta.mjs";
import { ECNAMDisplayInfo, _decode_ECNAMDisplayInfo, _encode_ECNAMDisplayInfo } from "../TS33128Payloads/ECNAMDisplayInfo.ta.mjs";
// export { ECNAMDisplayInfo, _decode_ECNAMDisplayInfo, _encode_ECNAMDisplayInfo } from "../TS33128Payloads/ECNAMDisplayInfo.ta.mjs";
import { SHAKENValidationResult, _decode_SHAKENValidationResult, _encode_SHAKENValidationResult, _enum_for_SHAKENValidationResult } from "../TS33128Payloads/SHAKENValidationResult.ta.mjs";
// export { SHAKENValidationResult, _enum_for_SHAKENValidationResult, SHAKENValidationResult_tNValidationPassed /* IMPORTED_LONG_ENUMERATION_ITEM */, tNValidationPassed /* IMPORTED_SHORT_ENUMERATION_ITEM */, SHAKENValidationResult_tNValidationFailed /* IMPORTED_LONG_ENUMERATION_ITEM */, tNValidationFailed /* IMPORTED_SHORT_ENUMERATION_ITEM */, SHAKENValidationResult_noTNValidation /* IMPORTED_LONG_ENUMERATION_ITEM */, noTNValidation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_SHAKENValidationResult, _encode_SHAKENValidationResult } from "../TS33128Payloads/SHAKENValidationResult.ta.mjs";
import { type SHAKENFailureStatusCode, _decode_SHAKENFailureStatusCode, _encode_SHAKENFailureStatusCode } from "../TS33128Payloads/SHAKENFailureStatusCode.ta.mjs";
// export { SHAKENFailureStatusCode, _decode_SHAKENFailureStatusCode, _encode_SHAKENFailureStatusCode } from "../TS33128Payloads/SHAKENFailureStatusCode.ta.mjs";
import { SIPMessage, _decode_SIPMessage, _encode_SIPMessage } from "../TS33128Payloads/SIPMessage.ta.mjs";
// export { SIPMessage, _decode_SIPMessage, _encode_SIPMessage } from "../TS33128Payloads/SIPMessage.ta.mjs";


/**
 * @summary STIRSHAKENSignatureValidation
 * @description
 * 
 * The IRI-POI present in the Telephony AS or IBCF, shall generate an xIRI
 * containing a STIRSHAKENSignatureValidation record when the following
 * conditions are met:
 *
 * - Either IBCF or Telephony AS, is interacting with the VERIFICATION AS.
 *   Whether it is the Telephony AS or IBCF for sessions is based on network
 *   configuration and local policy of the CSP as described in clause 7.11.2.5.
 *
 * - With one or more of the following are true:
 *
 * - Request URI and To Headers of SIP INVITE request received from S-CSCF (in
 *   the case of Telephony AS) or from the previous IP network (in the case of
 *   IBCF) is a target identity.
 *
 * - One or more of P-Asserted Identity, From, Diversion, History-Info Headers
 *   of SIP INVITE request received from S-CSCF (in the case of Telephony AS) or
 *   from the previous IP network (in the case of IBCF) is a target non-local
 *   identity without any prior intra-network diversions.
 *
 * - If PASSporTs are received in the SIP INVITE request, they are submitted by
 *   the IBCF to the VERIFICATION AS for validation and the result is included
 *   in an outgoing SIP INVITE request together with possible RCD data or eCNAM
 *   data as Call-Info headers.
 *
 * - If PASSporTs are received in the SIP INVITE request, they are submitted by
 *   the Telephony AS to the VERIFICATION AS for validation and the validation
 *   result is received from the Verification AS and the outgoing SIP INVITE
 *   possibly includes RCD data or eCNAM data as Call-Info headers.
 *
 * - NOTE: The IRI-POI may use the Via headers, Record-route headers to
 *   determine any prior intra-network diversions.
 *
 * The IRI-POI present in the Telephony AS shall also generate an xIRI
 * containing a STIRSHAKENSignatureValidation record when it detects the
 * following conditions:
 *
 * - Session is redirected.
 *
 * - Request URI header of outgoing SIP INVITE is a target identity.
 *
 * - Validation result is included in the outgoing SIP INVITE with the possible
 *   the RCD data and the eCNAM data as Call-Info headers.
 *
 * The IRI-POI present in the LMISF-IRI or P-CSCF shall generate an xIRI
 * containing a STIRSHAKENSignatureValidation record when the following
 * conditions are met:
 *
 * - With one or more of the following are true:
 *
 * - Request URI or To header of SIP INVITE request sent to the inbound roaming
 *   UE is a target identity.
 *
 * - One or more of P-Asserted Identity, From, Diversion, History-Info Headers
 *   of SIP INVITE request sent to the UE is a target non-local identity.
 *
 * - SIP INVITE request sent to the UE includes SIP Call-Info headers containing
 *   possible RCD data or eCNAM data, and the result of the PASSporT
 *   verification.
 *
 * In the above paragraphs, a validation result (i.e. result of all PASSporT
 * verification) is included means a "verstat" parameter within the P-Asserted
 * Identity header is included in the outgoing SIP INVITE.
 *
 * The following table contains parameters, with IRITargetIdentifier, generated
 * by the IRI-POI.
 *
 * NOTE: The same SIP message may be encapsulated in the xIRI IMSMessage as
 * well.
 *
 * Table 7.11.3-1 gives the LI_HI2 IRI message type for this record as REPORT.
 *
 * 3GPP TS 33.128, clause 7.11.2.3.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * STIRSHAKENSignatureValidation ::= SEQUENCE
 * {
 *     pASSporTs                 [1] SEQUENCE OF PASSporT OPTIONAL,
 *     rCDTerminalDisplayInfo    [2] RCDDisplayInfo OPTIONAL,
 *     eCNAMTerminalDisplayInfo  [3] ECNAMDisplayInfo OPTIONAL,
 *     sHAKENValidationResult    [4] SHAKENValidationResult,
 *     sHAKENFailureStatusCode   [5] SHAKENFailureStatusCode OPTIONAL,
 *     encapsulatedSIPMessage    [6] SIPMessage OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class STIRSHAKENSignatureValidation {
    /**
     * @summary `pASSporTs`.
     * @description
     *
     * Identifies the content of the SIP Identity headers added by the
     * originating network and transit networks. See TS 24.229 [74] and RFC 8224
     * [70]. This is a set of PASSporT parameter. See table 7.11.2.2-2.
     *
     * 3GPP TS 33.128, clause 7.11.2.3.
     *
     * @public
     * @readonly
     */
    readonly pASSporTs: OPTIONAL<PASSporT[]>;
    /**
     * @summary `rCDTerminalDisplayInfo`.
     * @description
     *
     * RCD display information when applicable. See IETF RFC 9795 [73].
     *
     * 3GPP TS 33.128, clause 7.11.2.3.
     *
     * @public
     * @readonly
     */
    readonly rCDTerminalDisplayInfo: OPTIONAL<RCDDisplayInfo>;
    /**
     * @summary `eCNAMTerminalDisplayInfo`.
     * @description
     *
     * eCNAM display information when applicable. See TS 24.196 [72].
     *
     * 3GPP TS 33.128, clause 7.11.2.3.
     *
     * @public
     * @readonly
     */
    readonly eCNAMTerminalDisplayInfo: OPTIONAL<ECNAMDisplayInfo>;
    /**
     * @summary `sHAKENValidationResult`.
     * @description
     *
     * SHAKEN validation result: TN-Validation-Passed, TN-Validation-Failed,
     * No-TN-Validation. See TS 24.229 [74] and IETF RFC 8588 [71].
     *
     * 3GPP TS 33.128, clause 7.11.2.3.
     *
     * @public
     * @readonly
     */
    readonly sHAKENValidationResult: SHAKENValidationResult;
    /**
     * @summary `sHAKENFailureStatusCode`.
     * @description
     *
     * SHAKEN status code when validation fails in the terminating network. See
     * IETF RFC 8224 [70].
     *
     * 3GPP TS 33.128, clause 7.11.2.3.
     *
     * @public
     * @readonly
     */
    readonly sHAKENFailureStatusCode: OPTIONAL<SHAKENFailureStatusCode>;
    /**
     * @summary `encapsulatedSIPMessage`.
     * @description
     *
     * Encapsulated SIP INVITE request that carries P-Asserted Identifier or
     * From header that includes the SHAKEN validation result (Outgoing SIP
     * request) based on the structure defined in table 7.12.4.2-2. (see NOTE
     * below). NOTE: The same SIP message may be encapsulated in the xIRI
     * IMSMessage as well.
     *
     * 3GPP TS 33.128, clause 7.11.2.3.
     *
     * @public
     * @readonly
     */
    readonly encapsulatedSIPMessage: OPTIONAL<SIPMessage>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        pASSporTs: OPTIONAL<PASSporT[]>,
        rCDTerminalDisplayInfo: OPTIONAL<RCDDisplayInfo>,
        eCNAMTerminalDisplayInfo: OPTIONAL<ECNAMDisplayInfo>,
        sHAKENValidationResult: SHAKENValidationResult,
        sHAKENFailureStatusCode?: OPTIONAL<SHAKENFailureStatusCode>,
        encapsulatedSIPMessage?: OPTIONAL<SIPMessage>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.pASSporTs = pASSporTs;
        this.rCDTerminalDisplayInfo = rCDTerminalDisplayInfo;
        this.eCNAMTerminalDisplayInfo = eCNAMTerminalDisplayInfo;
        this.sHAKENValidationResult = sHAKENValidationResult;
        this.sHAKENFailureStatusCode = sHAKENFailureStatusCode;
        this.encapsulatedSIPMessage = encapsulatedSIPMessage;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a STIRSHAKENSignatureValidation
     * @description
     * 
     * This takes an `object` and converts it to a `STIRSHAKENSignatureValidation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `STIRSHAKENSignatureValidation`.
     * @returns {STIRSHAKENSignatureValidation}
     */
    public static _from_object (_o: { [_K in keyof (STIRSHAKENSignatureValidation)]: (STIRSHAKENSignatureValidation)[_K] }): STIRSHAKENSignatureValidation {
        return new STIRSHAKENSignatureValidation(_o.pASSporTs, _o.rCDTerminalDisplayInfo, _o.eCNAMTerminalDisplayInfo, _o.sHAKENValidationResult, _o.sHAKENFailureStatusCode, _o.encapsulatedSIPMessage, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `sHAKENValidationResult`
         * @public
         * @static
         */

    public static _enum_for_sHAKENValidationResult: typeof _enum_for_SHAKENValidationResult = _enum_for_SHAKENValidationResult;
}

/**
 * @summary The Leading Root Component Types of STIRSHAKENSignatureValidation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_STIRSHAKENSignatureValidation: $.ComponentSpec[] = [
    new $.ComponentSpec("pASSporTs", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("rCDTerminalDisplayInfo", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("eCNAMTerminalDisplayInfo", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("sHAKENValidationResult", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("sHAKENFailureStatusCode", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("encapsulatedSIPMessage", true, $.hasTag(_TagClass.context, 6))
];

/**
 * @summary The Trailing Root Component Types of STIRSHAKENSignatureValidation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_STIRSHAKENSignatureValidation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of STIRSHAKENSignatureValidation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_STIRSHAKENSignatureValidation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_STIRSHAKENSignatureValidation: $.ASN1Decoder<STIRSHAKENSignatureValidation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) STIRSHAKENSignatureValidation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_STIRSHAKENSignatureValidation (el: _Element): STIRSHAKENSignatureValidation {
    if (!_cached_decoder_for_STIRSHAKENSignatureValidation) { _cached_decoder_for_STIRSHAKENSignatureValidation = function (el: _Element): STIRSHAKENSignatureValidation {
    let pASSporTs: OPTIONAL<PASSporT[]>;
    let rCDTerminalDisplayInfo: OPTIONAL<RCDDisplayInfo>;
    let eCNAMTerminalDisplayInfo: OPTIONAL<ECNAMDisplayInfo>;
    let sHAKENValidationResult!: SHAKENValidationResult;
    let sHAKENFailureStatusCode: OPTIONAL<SHAKENFailureStatusCode>;
    let encapsulatedSIPMessage: OPTIONAL<SIPMessage>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "pASSporTs": (_el: _Element): void => { pASSporTs = $._decode_implicit<PASSporT[]>(() => $._decodeSequenceOf<PASSporT>(() => _decode_PASSporT))(_el); },
        "rCDTerminalDisplayInfo": (_el: _Element): void => { rCDTerminalDisplayInfo = $._decode_implicit<RCDDisplayInfo>(() => _decode_RCDDisplayInfo)(_el); },
        "eCNAMTerminalDisplayInfo": (_el: _Element): void => { eCNAMTerminalDisplayInfo = $._decode_implicit<ECNAMDisplayInfo>(() => _decode_ECNAMDisplayInfo)(_el); },
        "sHAKENValidationResult": (_el: _Element): void => { sHAKENValidationResult = $._decode_implicit<SHAKENValidationResult>(() => _decode_SHAKENValidationResult)(_el); },
        "sHAKENFailureStatusCode": (_el: _Element): void => { sHAKENFailureStatusCode = $._decode_implicit<SHAKENFailureStatusCode>(() => _decode_SHAKENFailureStatusCode)(_el); },
        "encapsulatedSIPMessage": (_el: _Element): void => { encapsulatedSIPMessage = $._decode_implicit<SIPMessage>(() => _decode_SIPMessage)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_STIRSHAKENSignatureValidation,
        _extension_additions_list_spec_for_STIRSHAKENSignatureValidation,
        _root_component_type_list_2_spec_for_STIRSHAKENSignatureValidation,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new STIRSHAKENSignatureValidation(
        pASSporTs,
        rCDTerminalDisplayInfo,
        eCNAMTerminalDisplayInfo,
        sHAKENValidationResult,
        sHAKENFailureStatusCode,
        encapsulatedSIPMessage,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_STIRSHAKENSignatureValidation(el);
}

let _cached_encoder_for_STIRSHAKENSignatureValidation: $.ASN1Encoder<STIRSHAKENSignatureValidation> | null = null;

/**
 * @summary Encodes a(n) STIRSHAKENSignatureValidation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The STIRSHAKENSignatureValidation, encoded as an ASN.1 Element.
 */
export
function _encode_STIRSHAKENSignatureValidation (value: STIRSHAKENSignatureValidation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_STIRSHAKENSignatureValidation) { _cached_encoder_for_STIRSHAKENSignatureValidation = function (value: STIRSHAKENSignatureValidation, elGetter: $.ASN1Encoder<STIRSHAKENSignatureValidation>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(6 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.pASSporTs !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<PASSporT>(() => _encode_PASSporT, $.BER), $.BER)(value.pASSporTs, $.BER);
    }
    if (value.rCDTerminalDisplayInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_RCDDisplayInfo, $.BER)(value.rCDTerminalDisplayInfo, $.BER);
    }
    if (value.eCNAMTerminalDisplayInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_ECNAMDisplayInfo, $.BER)(value.eCNAMTerminalDisplayInfo, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_SHAKENValidationResult, $.BER)(value.sHAKENValidationResult, $.BER);
    if (value.sHAKENFailureStatusCode !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_SHAKENFailureStatusCode, $.BER)(value.sHAKENFailureStatusCode, $.BER);
    }
    if (value.encapsulatedSIPMessage !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => _encode_SIPMessage, $.BER)(value.encapsulatedSIPMessage, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_STIRSHAKENSignatureValidation(value, elGetter);
}


/* eslint-enable */
