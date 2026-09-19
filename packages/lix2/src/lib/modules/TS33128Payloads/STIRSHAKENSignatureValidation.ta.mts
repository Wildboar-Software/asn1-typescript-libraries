/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PASSporT, _decode_PASSporT, _encode_PASSporT } from "../TS33128Payloads/PASSporT.ta.mjs";
// export { PASSporT, _decode_PASSporT, _encode_PASSporT } from "../TS33128Payloads/PASSporT.ta.mjs";
import { RCDDisplayInfo, _decode_RCDDisplayInfo, _encode_RCDDisplayInfo } from "../TS33128Payloads/RCDDisplayInfo.ta.mjs";
// export { RCDDisplayInfo, _decode_RCDDisplayInfo, _encode_RCDDisplayInfo } from "../TS33128Payloads/RCDDisplayInfo.ta.mjs";
import { ECNAMDisplayInfo, _decode_ECNAMDisplayInfo, _encode_ECNAMDisplayInfo } from "../TS33128Payloads/ECNAMDisplayInfo.ta.mjs";
// export { ECNAMDisplayInfo, _decode_ECNAMDisplayInfo, _encode_ECNAMDisplayInfo } from "../TS33128Payloads/ECNAMDisplayInfo.ta.mjs";
import { SHAKENValidationResult, _enum_for_SHAKENValidationResult, SHAKENValidationResult_tNValidationPassed /* IMPORTED_LONG_ENUMERATION_ITEM */, tNValidationPassed /* IMPORTED_SHORT_ENUMERATION_ITEM */, SHAKENValidationResult_tNValidationFailed /* IMPORTED_LONG_ENUMERATION_ITEM */, tNValidationFailed /* IMPORTED_SHORT_ENUMERATION_ITEM */, SHAKENValidationResult_noTNValidation /* IMPORTED_LONG_ENUMERATION_ITEM */, noTNValidation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_SHAKENValidationResult, _encode_SHAKENValidationResult } from "../TS33128Payloads/SHAKENValidationResult.ta.mjs";
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
    constructor (
        /**
         * @summary `pASSporTs`.
         * @public
         * @readonly
         */
        readonly pASSporTs: OPTIONAL<PASSporT[]>,
        /**
         * @summary `rCDTerminalDisplayInfo`.
         * @public
         * @readonly
         */
        readonly rCDTerminalDisplayInfo: OPTIONAL<RCDDisplayInfo>,
        /**
         * @summary `eCNAMTerminalDisplayInfo`.
         * @public
         * @readonly
         */
        readonly eCNAMTerminalDisplayInfo: OPTIONAL<ECNAMDisplayInfo>,
        /**
         * @summary `sHAKENValidationResult`.
         * @public
         * @readonly
         */
        readonly sHAKENValidationResult: SHAKENValidationResult,
        /**
         * @summary `sHAKENFailureStatusCode`.
         * @public
         * @readonly
         */
        readonly sHAKENFailureStatusCode: OPTIONAL<SHAKENFailureStatusCode>,
        /**
         * @summary `encapsulatedSIPMessage`.
         * @public
         * @readonly
         */
        readonly encapsulatedSIPMessage: OPTIONAL<SIPMessage>
    ) {}

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
        return new STIRSHAKENSignatureValidation(_o.pASSporTs, _o.rCDTerminalDisplayInfo, _o.eCNAMTerminalDisplayInfo, _o.sHAKENValidationResult, _o.sHAKENFailureStatusCode, _o.encapsulatedSIPMessage);
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
        undefined,
    );
    return new STIRSHAKENSignatureValidation(
        pASSporTs,
        rCDTerminalDisplayInfo,
        eCNAMTerminalDisplayInfo,
        sHAKENValidationResult,
        sHAKENFailureStatusCode,
        encapsulatedSIPMessage
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
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.pASSporTs === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<PASSporT>(() => _encode_PASSporT, $.BER), $.BER)(value.pASSporTs, $.BER)),
            /* IF_ABSENT  */ ((value.rCDTerminalDisplayInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_RCDDisplayInfo, $.BER)(value.rCDTerminalDisplayInfo, $.BER)),
            /* IF_ABSENT  */ ((value.eCNAMTerminalDisplayInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_ECNAMDisplayInfo, $.BER)(value.eCNAMTerminalDisplayInfo, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_SHAKENValidationResult, $.BER)(value.sHAKENValidationResult, $.BER),
            /* IF_ABSENT  */ ((value.sHAKENFailureStatusCode === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_SHAKENFailureStatusCode, $.BER)(value.sHAKENFailureStatusCode, $.BER)),
            /* IF_ABSENT  */ ((value.encapsulatedSIPMessage === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_SIPMessage, $.BER)(value.encapsulatedSIPMessage, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_STIRSHAKENSignatureValidation(value, elGetter);
}


/* eslint-enable */
