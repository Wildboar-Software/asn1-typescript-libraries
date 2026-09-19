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
import { SUPI, _decode_SUPI, _encode_SUPI } from "../TS33128Payloads/SUPI.ta.mjs";
// export { SUPI, _decode_SUPI, _encode_SUPI } from "../TS33128Payloads/SUPI.ta.mjs";
import { PEI, _decode_PEI, _encode_PEI } from "../TS33128Payloads/PEI.ta.mjs";
// export { PEI, _decode_PEI, _encode_PEI } from "../TS33128Payloads/PEI.ta.mjs";
import { GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128Payloads/GPSI.ta.mjs";
// export { GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128Payloads/GPSI.ta.mjs";
import { GUAMI, _decode_GUAMI, _encode_GUAMI } from "../TS33128Payloads/GUAMI.ta.mjs";
// export { GUAMI, _decode_GUAMI, _encode_GUAMI } from "../TS33128Payloads/GUAMI.ta.mjs";
import { PLMNID, _decode_PLMNID, _encode_PLMNID } from "../TS33128Payloads/PLMNID.ta.mjs";
// export { PLMNID, _decode_PLMNID, _encode_PLMNID } from "../TS33128Payloads/PLMNID.ta.mjs";
import { UDMCancelLocationMethod, _enum_for_UDMCancelLocationMethod, UDMCancelLocationMethod_aMF3GPPAccessDeregistration /* IMPORTED_LONG_ENUMERATION_ITEM */, aMF3GPPAccessDeregistration /* IMPORTED_SHORT_ENUMERATION_ITEM */, UDMCancelLocationMethod_aMFNon3GPPAccessDeregistration /* IMPORTED_LONG_ENUMERATION_ITEM */, aMFNon3GPPAccessDeregistration /* IMPORTED_SHORT_ENUMERATION_ITEM */, UDMCancelLocationMethod_uDMDeregistration /* IMPORTED_LONG_ENUMERATION_ITEM */, uDMDeregistration /* IMPORTED_SHORT_ENUMERATION_ITEM */, UDMCancelLocationMethod_unknown /* IMPORTED_LONG_ENUMERATION_ITEM */, unknown /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_UDMCancelLocationMethod, _encode_UDMCancelLocationMethod } from "../TS33128Payloads/UDMCancelLocationMethod.ta.mjs";
// export { UDMCancelLocationMethod, _enum_for_UDMCancelLocationMethod, UDMCancelLocationMethod_aMF3GPPAccessDeregistration /* IMPORTED_LONG_ENUMERATION_ITEM */, aMF3GPPAccessDeregistration /* IMPORTED_SHORT_ENUMERATION_ITEM */, UDMCancelLocationMethod_aMFNon3GPPAccessDeregistration /* IMPORTED_LONG_ENUMERATION_ITEM */, aMFNon3GPPAccessDeregistration /* IMPORTED_SHORT_ENUMERATION_ITEM */, UDMCancelLocationMethod_uDMDeregistration /* IMPORTED_LONG_ENUMERATION_ITEM */, uDMDeregistration /* IMPORTED_SHORT_ENUMERATION_ITEM */, UDMCancelLocationMethod_unknown /* IMPORTED_LONG_ENUMERATION_ITEM */, unknown /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_UDMCancelLocationMethod, _encode_UDMCancelLocationMethod } from "../TS33128Payloads/UDMCancelLocationMethod.ta.mjs";
import { UDMAMFDeregistrationInfo, _decode_UDMAMFDeregistrationInfo, _encode_UDMAMFDeregistrationInfo } from "../TS33128Payloads/UDMAMFDeregistrationInfo.ta.mjs";
// export { UDMAMFDeregistrationInfo, _decode_UDMAMFDeregistrationInfo, _encode_UDMAMFDeregistrationInfo } from "../TS33128Payloads/UDMAMFDeregistrationInfo.ta.mjs";
import { UDMDeregistrationData, _decode_UDMDeregistrationData, _encode_UDMDeregistrationData } from "../TS33128Payloads/UDMDeregistrationData.ta.mjs";
// export { UDMDeregistrationData, _decode_UDMDeregistrationData, _encode_UDMDeregistrationData } from "../TS33128Payloads/UDMDeregistrationData.ta.mjs";


/**
 * @summary UDMCancelLocationMessage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UDMCancelLocationMessage ::= SEQUENCE
 * {
 *     sUPI                        [1] SUPI,
 *     pEI                         [2] PEI OPTIONAL,
 *     gPSI                        [3] GPSI OPTIONAL,
 *     gUAMI                       [4] GUAMI OPTIONAL,
 *     pLMNID                      [5] PLMNID OPTIONAL,
 *     cancelLocationMethod        [6] UDMCancelLocationMethod,
 *     aMFDeregistrationInfo       [7] UDMAMFDeregistrationInfo OPTIONAL,
 *     deregistrationData          [8] UDMDeregistrationData OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class UDMCancelLocationMessage {
    constructor (
        /**
         * @summary `sUPI`.
         * @public
         * @readonly
         */
        readonly sUPI: SUPI,
        /**
         * @summary `pEI`.
         * @public
         * @readonly
         */
        readonly pEI: OPTIONAL<PEI>,
        /**
         * @summary `gPSI`.
         * @public
         * @readonly
         */
        readonly gPSI: OPTIONAL<GPSI>,
        /**
         * @summary `gUAMI`.
         * @public
         * @readonly
         */
        readonly gUAMI: OPTIONAL<GUAMI>,
        /**
         * @summary `pLMNID`.
         * @public
         * @readonly
         */
        readonly pLMNID: OPTIONAL<PLMNID>,
        /**
         * @summary `cancelLocationMethod`.
         * @public
         * @readonly
         */
        readonly cancelLocationMethod: UDMCancelLocationMethod,
        /**
         * @summary `aMFDeregistrationInfo`.
         * @public
         * @readonly
         */
        readonly aMFDeregistrationInfo: OPTIONAL<UDMAMFDeregistrationInfo>,
        /**
         * @summary `deregistrationData`.
         * @public
         * @readonly
         */
        readonly deregistrationData: OPTIONAL<UDMDeregistrationData>
    ) {}

    /**
     * @summary Restructures an object into a UDMCancelLocationMessage
     * @description
     * 
     * This takes an `object` and converts it to a `UDMCancelLocationMessage`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UDMCancelLocationMessage`.
     * @returns {UDMCancelLocationMessage}
     */
    public static _from_object (_o: { [_K in keyof (UDMCancelLocationMessage)]: (UDMCancelLocationMessage)[_K] }): UDMCancelLocationMessage {
        return new UDMCancelLocationMessage(_o.sUPI, _o.pEI, _o.gPSI, _o.gUAMI, _o.pLMNID, _o.cancelLocationMethod, _o.aMFDeregistrationInfo, _o.deregistrationData);
    }

        /**
         * @summary The enum used as the type of the component `cancelLocationMethod`
         * @public
         * @static
         */

    public static _enum_for_cancelLocationMethod = _enum_for_UDMCancelLocationMethod;
}

/**
 * @summary The Leading Root Component Types of UDMCancelLocationMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_UDMCancelLocationMessage: $.ComponentSpec[] = [
    new $.ComponentSpec("sUPI", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("pEI", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("gPSI", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("gUAMI", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("pLMNID", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("cancelLocationMethod", false, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("aMFDeregistrationInfo", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("deregistrationData", true, $.hasTag(_TagClass.context, 8))
];

/**
 * @summary The Trailing Root Component Types of UDMCancelLocationMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_UDMCancelLocationMessage: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of UDMCancelLocationMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_UDMCancelLocationMessage: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_UDMCancelLocationMessage: $.ASN1Decoder<UDMCancelLocationMessage> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UDMCancelLocationMessage
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UDMCancelLocationMessage (el: _Element): UDMCancelLocationMessage {
    if (!_cached_decoder_for_UDMCancelLocationMessage) { _cached_decoder_for_UDMCancelLocationMessage = function (el: _Element): UDMCancelLocationMessage {
    let sUPI!: SUPI;
    let pEI: OPTIONAL<PEI>;
    let gPSI: OPTIONAL<GPSI>;
    let gUAMI: OPTIONAL<GUAMI>;
    let pLMNID: OPTIONAL<PLMNID>;
    let cancelLocationMethod!: UDMCancelLocationMethod;
    let aMFDeregistrationInfo: OPTIONAL<UDMAMFDeregistrationInfo>;
    let deregistrationData: OPTIONAL<UDMDeregistrationData>;
    const callbacks: $.DecodingMap = {
        "sUPI": (_el: _Element): void => { sUPI = $._decode_explicit<SUPI>(() => _decode_SUPI)(_el); },
        "pEI": (_el: _Element): void => { pEI = $._decode_explicit<PEI>(() => _decode_PEI)(_el); },
        "gPSI": (_el: _Element): void => { gPSI = $._decode_explicit<GPSI>(() => _decode_GPSI)(_el); },
        "gUAMI": (_el: _Element): void => { gUAMI = $._decode_implicit<GUAMI>(() => _decode_GUAMI)(_el); },
        "pLMNID": (_el: _Element): void => { pLMNID = $._decode_implicit<PLMNID>(() => _decode_PLMNID)(_el); },
        "cancelLocationMethod": (_el: _Element): void => { cancelLocationMethod = $._decode_implicit<UDMCancelLocationMethod>(() => _decode_UDMCancelLocationMethod)(_el); },
        "aMFDeregistrationInfo": (_el: _Element): void => { aMFDeregistrationInfo = $._decode_implicit<UDMAMFDeregistrationInfo>(() => _decode_UDMAMFDeregistrationInfo)(_el); },
        "deregistrationData": (_el: _Element): void => { deregistrationData = $._decode_implicit<UDMDeregistrationData>(() => _decode_UDMDeregistrationData)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_UDMCancelLocationMessage,
        _extension_additions_list_spec_for_UDMCancelLocationMessage,
        _root_component_type_list_2_spec_for_UDMCancelLocationMessage,
        undefined,
    );
    return new UDMCancelLocationMessage(
        sUPI,
        pEI,
        gPSI,
        gUAMI,
        pLMNID,
        cancelLocationMethod,
        aMFDeregistrationInfo,
        deregistrationData
    );
}; }
    return _cached_decoder_for_UDMCancelLocationMessage(el);
}

let _cached_encoder_for_UDMCancelLocationMessage: $.ASN1Encoder<UDMCancelLocationMessage> | null = null;

/**
 * @summary Encodes a(n) UDMCancelLocationMessage into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UDMCancelLocationMessage, encoded as an ASN.1 Element.
 */
export
function _encode_UDMCancelLocationMessage (value: UDMCancelLocationMessage, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UDMCancelLocationMessage) { _cached_encoder_for_UDMCancelLocationMessage = function (value: UDMCancelLocationMessage, elGetter: $.ASN1Encoder<UDMCancelLocationMessage>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_SUPI, $.BER)(value.sUPI, $.BER),
            /* IF_ABSENT  */ ((value.pEI === undefined) ? undefined : $._encode_explicit(_TagClass.context, 2, () => _encode_PEI, $.BER)(value.pEI, $.BER)),
            /* IF_ABSENT  */ ((value.gPSI === undefined) ? undefined : $._encode_explicit(_TagClass.context, 3, () => _encode_GPSI, $.BER)(value.gPSI, $.BER)),
            /* IF_ABSENT  */ ((value.gUAMI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_GUAMI, $.BER)(value.gUAMI, $.BER)),
            /* IF_ABSENT  */ ((value.pLMNID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_PLMNID, $.BER)(value.pLMNID, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => _encode_UDMCancelLocationMethod, $.BER)(value.cancelLocationMethod, $.BER),
            /* IF_ABSENT  */ ((value.aMFDeregistrationInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_UDMAMFDeregistrationInfo, $.BER)(value.aMFDeregistrationInfo, $.BER)),
            /* IF_ABSENT  */ ((value.deregistrationData === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_UDMDeregistrationData, $.BER)(value.deregistrationData, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_UDMCancelLocationMessage(value, elGetter);
}


/* eslint-enable */
