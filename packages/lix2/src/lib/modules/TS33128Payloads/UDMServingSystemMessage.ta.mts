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
import { GUMMEI, _decode_GUMMEI, _encode_GUMMEI } from "../TS33128Payloads/GUMMEI.ta.mjs";
// export { GUMMEI, _decode_GUMMEI, _encode_GUMMEI } from "../TS33128Payloads/GUMMEI.ta.mjs";
import { PLMNID, _decode_PLMNID, _encode_PLMNID } from "../TS33128Payloads/PLMNID.ta.mjs";
// export { PLMNID, _decode_PLMNID, _encode_PLMNID } from "../TS33128Payloads/PLMNID.ta.mjs";
import { UDMServingSystemMethod, _enum_for_UDMServingSystemMethod, UDMServingSystemMethod_amf3GPPAccessRegistration /* IMPORTED_LONG_ENUMERATION_ITEM */, amf3GPPAccessRegistration /* IMPORTED_SHORT_ENUMERATION_ITEM */, UDMServingSystemMethod_amfNon3GPPAccessRegistration /* IMPORTED_LONG_ENUMERATION_ITEM */, amfNon3GPPAccessRegistration /* IMPORTED_SHORT_ENUMERATION_ITEM */, UDMServingSystemMethod_unknown /* IMPORTED_LONG_ENUMERATION_ITEM */, unknown /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_UDMServingSystemMethod, _encode_UDMServingSystemMethod } from "../TS33128Payloads/UDMServingSystemMethod.ta.mjs";
// export { UDMServingSystemMethod, _enum_for_UDMServingSystemMethod, UDMServingSystemMethod_amf3GPPAccessRegistration /* IMPORTED_LONG_ENUMERATION_ITEM */, amf3GPPAccessRegistration /* IMPORTED_SHORT_ENUMERATION_ITEM */, UDMServingSystemMethod_amfNon3GPPAccessRegistration /* IMPORTED_LONG_ENUMERATION_ITEM */, amfNon3GPPAccessRegistration /* IMPORTED_SHORT_ENUMERATION_ITEM */, UDMServingSystemMethod_unknown /* IMPORTED_LONG_ENUMERATION_ITEM */, unknown /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_UDMServingSystemMethod, _encode_UDMServingSystemMethod } from "../TS33128Payloads/UDMServingSystemMethod.ta.mjs";
import { ServiceID, _decode_ServiceID, _encode_ServiceID } from "../TS33128Payloads/ServiceID.ta.mjs";
// export { ServiceID, _decode_ServiceID, _encode_ServiceID } from "../TS33128Payloads/ServiceID.ta.mjs";
import { RoamingIndicator, _decode_RoamingIndicator, _encode_RoamingIndicator } from "../TS33128Payloads/RoamingIndicator.ta.mjs";
// export { RoamingIndicator, _decode_RoamingIndicator, _encode_RoamingIndicator } from "../TS33128Payloads/RoamingIndicator.ta.mjs";


/**
 * @summary UDMServingSystemMessage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UDMServingSystemMessage ::= SEQUENCE
 * {
 *     sUPI                        [1] SUPI,
 *     pEI                         [2] PEI OPTIONAL,
 *     gPSI                        [3] GPSI OPTIONAL,
 *     gUAMI                       [4] GUAMI OPTIONAL,
 *     gUMMEI                      [5] GUMMEI OPTIONAL,
 *     pLMNID                      [6] PLMNID OPTIONAL,
 *     servingSystemMethod         [7] UDMServingSystemMethod,
 *     serviceID                   [8] ServiceID OPTIONAL,
 *     roamingIndicator            [9] RoamingIndicator OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class UDMServingSystemMessage {
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
         * @summary `gUMMEI`.
         * @public
         * @readonly
         */
        readonly gUMMEI: OPTIONAL<GUMMEI>,
        /**
         * @summary `pLMNID`.
         * @public
         * @readonly
         */
        readonly pLMNID: OPTIONAL<PLMNID>,
        /**
         * @summary `servingSystemMethod`.
         * @public
         * @readonly
         */
        readonly servingSystemMethod: UDMServingSystemMethod,
        /**
         * @summary `serviceID`.
         * @public
         * @readonly
         */
        readonly serviceID: OPTIONAL<ServiceID>,
        /**
         * @summary `roamingIndicator`.
         * @public
         * @readonly
         */
        readonly roamingIndicator: OPTIONAL<RoamingIndicator>
    ) {}

    /**
     * @summary Restructures an object into a UDMServingSystemMessage
     * @description
     * 
     * This takes an `object` and converts it to a `UDMServingSystemMessage`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UDMServingSystemMessage`.
     * @returns {UDMServingSystemMessage}
     */
    public static _from_object (_o: { [_K in keyof (UDMServingSystemMessage)]: (UDMServingSystemMessage)[_K] }): UDMServingSystemMessage {
        return new UDMServingSystemMessage(_o.sUPI, _o.pEI, _o.gPSI, _o.gUAMI, _o.gUMMEI, _o.pLMNID, _o.servingSystemMethod, _o.serviceID, _o.roamingIndicator);
    }

        /**
         * @summary The enum used as the type of the component `servingSystemMethod`
         * @public
         * @static
         */

    public static _enum_for_servingSystemMethod = _enum_for_UDMServingSystemMethod;
}

/**
 * @summary The Leading Root Component Types of UDMServingSystemMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_UDMServingSystemMessage: $.ComponentSpec[] = [
    new $.ComponentSpec("sUPI", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("pEI", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("gPSI", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("gUAMI", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("gUMMEI", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("pLMNID", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("servingSystemMethod", false, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("serviceID", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("roamingIndicator", true, $.hasTag(_TagClass.context, 9))
];

/**
 * @summary The Trailing Root Component Types of UDMServingSystemMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_UDMServingSystemMessage: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of UDMServingSystemMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_UDMServingSystemMessage: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_UDMServingSystemMessage: $.ASN1Decoder<UDMServingSystemMessage> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UDMServingSystemMessage
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UDMServingSystemMessage (el: _Element): UDMServingSystemMessage {
    if (!_cached_decoder_for_UDMServingSystemMessage) { _cached_decoder_for_UDMServingSystemMessage = function (el: _Element): UDMServingSystemMessage {
    let sUPI!: SUPI;
    let pEI: OPTIONAL<PEI>;
    let gPSI: OPTIONAL<GPSI>;
    let gUAMI: OPTIONAL<GUAMI>;
    let gUMMEI: OPTIONAL<GUMMEI>;
    let pLMNID: OPTIONAL<PLMNID>;
    let servingSystemMethod!: UDMServingSystemMethod;
    let serviceID: OPTIONAL<ServiceID>;
    let roamingIndicator: OPTIONAL<RoamingIndicator>;
    const callbacks: $.DecodingMap = {
        "sUPI": (_el: _Element): void => { sUPI = $._decode_explicit<SUPI>(() => _decode_SUPI)(_el); },
        "pEI": (_el: _Element): void => { pEI = $._decode_explicit<PEI>(() => _decode_PEI)(_el); },
        "gPSI": (_el: _Element): void => { gPSI = $._decode_explicit<GPSI>(() => _decode_GPSI)(_el); },
        "gUAMI": (_el: _Element): void => { gUAMI = $._decode_implicit<GUAMI>(() => _decode_GUAMI)(_el); },
        "gUMMEI": (_el: _Element): void => { gUMMEI = $._decode_implicit<GUMMEI>(() => _decode_GUMMEI)(_el); },
        "pLMNID": (_el: _Element): void => { pLMNID = $._decode_implicit<PLMNID>(() => _decode_PLMNID)(_el); },
        "servingSystemMethod": (_el: _Element): void => { servingSystemMethod = $._decode_implicit<UDMServingSystemMethod>(() => _decode_UDMServingSystemMethod)(_el); },
        "serviceID": (_el: _Element): void => { serviceID = $._decode_implicit<ServiceID>(() => _decode_ServiceID)(_el); },
        "roamingIndicator": (_el: _Element): void => { roamingIndicator = $._decode_implicit<RoamingIndicator>(() => _decode_RoamingIndicator)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_UDMServingSystemMessage,
        _extension_additions_list_spec_for_UDMServingSystemMessage,
        _root_component_type_list_2_spec_for_UDMServingSystemMessage,
        undefined,
    );
    return new UDMServingSystemMessage(
        sUPI,
        pEI,
        gPSI,
        gUAMI,
        gUMMEI,
        pLMNID,
        servingSystemMethod,
        serviceID,
        roamingIndicator
    );
}; }
    return _cached_decoder_for_UDMServingSystemMessage(el);
}

let _cached_encoder_for_UDMServingSystemMessage: $.ASN1Encoder<UDMServingSystemMessage> | null = null;

/**
 * @summary Encodes a(n) UDMServingSystemMessage into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UDMServingSystemMessage, encoded as an ASN.1 Element.
 */
export
function _encode_UDMServingSystemMessage (value: UDMServingSystemMessage, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UDMServingSystemMessage) { _cached_encoder_for_UDMServingSystemMessage = function (value: UDMServingSystemMessage, elGetter: $.ASN1Encoder<UDMServingSystemMessage>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_SUPI, $.BER)(value.sUPI, $.BER),
            /* IF_ABSENT  */ ((value.pEI === undefined) ? undefined : $._encode_explicit(_TagClass.context, 2, () => _encode_PEI, $.BER)(value.pEI, $.BER)),
            /* IF_ABSENT  */ ((value.gPSI === undefined) ? undefined : $._encode_explicit(_TagClass.context, 3, () => _encode_GPSI, $.BER)(value.gPSI, $.BER)),
            /* IF_ABSENT  */ ((value.gUAMI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_GUAMI, $.BER)(value.gUAMI, $.BER)),
            /* IF_ABSENT  */ ((value.gUMMEI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_GUMMEI, $.BER)(value.gUMMEI, $.BER)),
            /* IF_ABSENT  */ ((value.pLMNID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_PLMNID, $.BER)(value.pLMNID, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 7, () => _encode_UDMServingSystemMethod, $.BER)(value.servingSystemMethod, $.BER),
            /* IF_ABSENT  */ ((value.serviceID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_ServiceID, $.BER)(value.serviceID, $.BER)),
            /* IF_ABSENT  */ ((value.roamingIndicator === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_RoamingIndicator, $.BER)(value.roamingIndicator, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_UDMServingSystemMessage(value, elGetter);
}


/* eslint-enable */
