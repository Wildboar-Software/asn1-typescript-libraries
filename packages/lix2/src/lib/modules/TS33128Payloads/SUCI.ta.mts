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
import { MCC, _decode_MCC, _encode_MCC } from "../TS33128Payloads/MCC.ta.mjs";
// export { MCC, _decode_MCC, _encode_MCC } from "../TS33128Payloads/MCC.ta.mjs";
import { MNC, _decode_MNC, _encode_MNC } from "../TS33128Payloads/MNC.ta.mjs";
// export { MNC, _decode_MNC, _encode_MNC } from "../TS33128Payloads/MNC.ta.mjs";
import { RoutingIndicator, _decode_RoutingIndicator, _encode_RoutingIndicator } from "../TS33128Payloads/RoutingIndicator.ta.mjs";
// export { RoutingIndicator, _decode_RoutingIndicator, _encode_RoutingIndicator } from "../TS33128Payloads/RoutingIndicator.ta.mjs";
import { ProtectionSchemeID, _decode_ProtectionSchemeID, _encode_ProtectionSchemeID } from "../TS33128Payloads/ProtectionSchemeID.ta.mjs";
// export { ProtectionSchemeID, _decode_ProtectionSchemeID, _encode_ProtectionSchemeID } from "../TS33128Payloads/ProtectionSchemeID.ta.mjs";
import { HomeNetworkPublicKeyID, _decode_HomeNetworkPublicKeyID, _encode_HomeNetworkPublicKeyID } from "../TS33128Payloads/HomeNetworkPublicKeyID.ta.mjs";
// export { HomeNetworkPublicKeyID, _decode_HomeNetworkPublicKeyID, _encode_HomeNetworkPublicKeyID } from "../TS33128Payloads/HomeNetworkPublicKeyID.ta.mjs";
import { SchemeOutput, _decode_SchemeOutput, _encode_SchemeOutput } from "../TS33128Payloads/SchemeOutput.ta.mjs";
// export { SchemeOutput, _decode_SchemeOutput, _encode_SchemeOutput } from "../TS33128Payloads/SchemeOutput.ta.mjs";
import { SUPIType, _decode_SUPIType, _encode_SUPIType } from "../TS33128Payloads/SUPIType.ta.mjs";
// export { SUPIType, _decode_SUPIType, _encode_SUPIType } from "../TS33128Payloads/SUPIType.ta.mjs";
import { HomeNetworkIdentifier, _decode_HomeNetworkIdentifier, _encode_HomeNetworkIdentifier } from "../TS33128Payloads/HomeNetworkIdentifier.ta.mjs";
// export { HomeNetworkIdentifier, _decode_HomeNetworkIdentifier, _encode_HomeNetworkIdentifier } from "../TS33128Payloads/HomeNetworkIdentifier.ta.mjs";


/**
 * @summary SUCI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SUCI ::= SEQUENCE
 * {
 *     mCC                         [1] MCC,
 *     mNC                         [2] MNC,
 *     routingIndicator            [3] RoutingIndicator,
 *     protectionSchemeID          [4] ProtectionSchemeID,
 *     homeNetworkPublicKeyID      [5] HomeNetworkPublicKeyID,
 *     schemeOutput                [6] SchemeOutput,
 *     -- routingIndicatorLength shall be included if different from the number
 *     -- of meaningful digits given in routingIndicator.
 *     routingIndicatorLength      [7] INTEGER (1..4) OPTIONAL,
 *     sUPIType                    [8] SUPIType OPTIONAL,
 *     homeNetworkIdentifier       [9] HomeNetworkIdentifier OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class SUCI {
    constructor (
        /**
         * @summary `mCC`.
         * @public
         * @readonly
         */
        readonly mCC: MCC,
        /**
         * @summary `mNC`.
         * @public
         * @readonly
         */
        readonly mNC: MNC,
        /**
         * @summary `routingIndicator`.
         * @public
         * @readonly
         */
        readonly routingIndicator: RoutingIndicator,
        /**
         * @summary `protectionSchemeID`.
         * @public
         * @readonly
         */
        readonly protectionSchemeID: ProtectionSchemeID,
        /**
         * @summary `homeNetworkPublicKeyID`.
         * @public
         * @readonly
         */
        readonly homeNetworkPublicKeyID: HomeNetworkPublicKeyID,
        /**
         * @summary `schemeOutput`.
         * @public
         * @readonly
         */
        readonly schemeOutput: SchemeOutput,
        /**
         * @summary `routingIndicatorLength`.
         * @public
         * @readonly
         */
        readonly routingIndicatorLength: OPTIONAL<INTEGER>,
        /**
         * @summary `sUPIType`.
         * @public
         * @readonly
         */
        readonly sUPIType: OPTIONAL<SUPIType>,
        /**
         * @summary `homeNetworkIdentifier`.
         * @public
         * @readonly
         */
        readonly homeNetworkIdentifier: OPTIONAL<HomeNetworkIdentifier>
    ) {}

    /**
     * @summary Restructures an object into a SUCI
     * @description
     * 
     * This takes an `object` and converts it to a `SUCI`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SUCI`.
     * @returns {SUCI}
     */
    public static _from_object (_o: { [_K in keyof (SUCI)]: (SUCI)[_K] }): SUCI {
        return new SUCI(_o.mCC, _o.mNC, _o.routingIndicator, _o.protectionSchemeID, _o.homeNetworkPublicKeyID, _o.schemeOutput, _o.routingIndicatorLength, _o.sUPIType, _o.homeNetworkIdentifier);
    }


}

/**
 * @summary The Leading Root Component Types of SUCI
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SUCI: $.ComponentSpec[] = [
    new $.ComponentSpec("mCC", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("mNC", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("routingIndicator", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("protectionSchemeID", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("homeNetworkPublicKeyID", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("schemeOutput", false, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("routingIndicatorLength", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("sUPIType", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("homeNetworkIdentifier", true, $.hasTag(_TagClass.context, 9))
];

/**
 * @summary The Trailing Root Component Types of SUCI
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SUCI: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SUCI
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SUCI: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SUCI: $.ASN1Decoder<SUCI> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SUCI
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SUCI (el: _Element): SUCI {
    if (!_cached_decoder_for_SUCI) { _cached_decoder_for_SUCI = function (el: _Element): SUCI {
    let mCC!: MCC;
    let mNC!: MNC;
    let routingIndicator!: RoutingIndicator;
    let protectionSchemeID!: ProtectionSchemeID;
    let homeNetworkPublicKeyID!: HomeNetworkPublicKeyID;
    let schemeOutput!: SchemeOutput;
    let routingIndicatorLength: OPTIONAL<INTEGER>;
    let sUPIType: OPTIONAL<SUPIType>;
    let homeNetworkIdentifier: OPTIONAL<HomeNetworkIdentifier>;
    const callbacks: $.DecodingMap = {
        "mCC": (_el: _Element): void => { mCC = $._decode_implicit<MCC>(() => _decode_MCC)(_el); },
        "mNC": (_el: _Element): void => { mNC = $._decode_implicit<MNC>(() => _decode_MNC)(_el); },
        "routingIndicator": (_el: _Element): void => { routingIndicator = $._decode_implicit<RoutingIndicator>(() => _decode_RoutingIndicator)(_el); },
        "protectionSchemeID": (_el: _Element): void => { protectionSchemeID = $._decode_implicit<ProtectionSchemeID>(() => _decode_ProtectionSchemeID)(_el); },
        "homeNetworkPublicKeyID": (_el: _Element): void => { homeNetworkPublicKeyID = $._decode_implicit<HomeNetworkPublicKeyID>(() => _decode_HomeNetworkPublicKeyID)(_el); },
        "schemeOutput": (_el: _Element): void => { schemeOutput = $._decode_implicit<SchemeOutput>(() => _decode_SchemeOutput)(_el); },
        "routingIndicatorLength": (_el: _Element): void => { routingIndicatorLength = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "sUPIType": (_el: _Element): void => { sUPIType = $._decode_implicit<SUPIType>(() => _decode_SUPIType)(_el); },
        "homeNetworkIdentifier": (_el: _Element): void => { homeNetworkIdentifier = $._decode_implicit<HomeNetworkIdentifier>(() => _decode_HomeNetworkIdentifier)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SUCI,
        _extension_additions_list_spec_for_SUCI,
        _root_component_type_list_2_spec_for_SUCI,
        undefined,
    );
    return new SUCI(
        mCC,
        mNC,
        routingIndicator,
        protectionSchemeID,
        homeNetworkPublicKeyID,
        schemeOutput,
        routingIndicatorLength,
        sUPIType,
        homeNetworkIdentifier
    );
}; }
    return _cached_decoder_for_SUCI(el);
}

let _cached_encoder_for_SUCI: $.ASN1Encoder<SUCI> | null = null;

/**
 * @summary Encodes a(n) SUCI into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SUCI, encoded as an ASN.1 Element.
 */
export
function _encode_SUCI (value: SUCI, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SUCI) { _cached_encoder_for_SUCI = function (value: SUCI, elGetter: $.ASN1Encoder<SUCI>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_MCC, $.BER)(value.mCC, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_MNC, $.BER)(value.mNC, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_RoutingIndicator, $.BER)(value.routingIndicator, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_ProtectionSchemeID, $.BER)(value.protectionSchemeID, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => _encode_HomeNetworkPublicKeyID, $.BER)(value.homeNetworkPublicKeyID, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => _encode_SchemeOutput, $.BER)(value.schemeOutput, $.BER),
            /* IF_ABSENT  */ ((value.routingIndicatorLength === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => $._encodeInteger, $.BER)(value.routingIndicatorLength, $.BER)),
            /* IF_ABSENT  */ ((value.sUPIType === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_SUPIType, $.BER)(value.sUPIType, $.BER)),
            /* IF_ABSENT  */ ((value.homeNetworkIdentifier === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_HomeNetworkIdentifier, $.BER)(value.homeNetworkIdentifier, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SUCI(value, elGetter);
}


/* eslint-enable */
