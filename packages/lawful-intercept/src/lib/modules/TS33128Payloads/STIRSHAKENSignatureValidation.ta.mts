/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
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
import { SHAKENFailureStatusCode, _decode_SHAKENFailureStatusCode, _encode_SHAKENFailureStatusCode } from "../TS33128Payloads/SHAKENFailureStatusCode.ta.mjs";
// export { SHAKENFailureStatusCode, _decode_SHAKENFailureStatusCode, _encode_SHAKENFailureStatusCode } from "../TS33128Payloads/SHAKENFailureStatusCode.ta.mjs";
import { SIPMessage, _decode_SIPMessage, _encode_SIPMessage } from "../TS33128Payloads/SIPMessage.ta.mjs";
// export { SIPMessage, _decode_SIPMessage, _encode_SIPMessage } from "../TS33128Payloads/SIPMessage.ta.mjs";


/**
 * @summary STIRSHAKENSignatureValidation
 * @description
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
     * @public
     * @readonly
     */
    readonly pASSporTs: OPTIONAL<PASSporT[]>;
    /**
     * @summary `rCDTerminalDisplayInfo`.
     * @public
     * @readonly
     */
    readonly rCDTerminalDisplayInfo: OPTIONAL<RCDDisplayInfo>;
    /**
     * @summary `eCNAMTerminalDisplayInfo`.
     * @public
     * @readonly
     */
    readonly eCNAMTerminalDisplayInfo: OPTIONAL<ECNAMDisplayInfo>;
    /**
     * @summary `sHAKENValidationResult`.
     * @public
     * @readonly
     */
    readonly sHAKENValidationResult: SHAKENValidationResult;
    /**
     * @summary `sHAKENFailureStatusCode`.
     * @public
     * @readonly
     */
    readonly sHAKENFailureStatusCode: OPTIONAL<SHAKENFailureStatusCode>;
    /**
     * @summary `encapsulatedSIPMessage`.
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
        sHAKENFailureStatusCode: OPTIONAL<SHAKENFailureStatusCode>,
        encapsulatedSIPMessage: OPTIONAL<SIPMessage>,
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

    public static _enum_for_sHAKENValidationResult = _enum_for_SHAKENValidationResult;
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
    let _unrecognizedExtensionsList: _Element[] = [];
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
    if (!_cached_encoder_for_STIRSHAKENSignatureValidation) { _cached_encoder_for_STIRSHAKENSignatureValidation = function (value: STIRSHAKENSignatureValidation, _elGetter: $.ASN1Encoder<STIRSHAKENSignatureValidation>): _Element {
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
