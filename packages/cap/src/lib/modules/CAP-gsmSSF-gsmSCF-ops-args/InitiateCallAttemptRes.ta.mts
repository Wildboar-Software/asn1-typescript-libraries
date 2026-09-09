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
import { type Extensions, _decode_Extensions, _encode_Extensions } from "../CAP-datatypes/Extensions.ta.mjs";
import { SupportedCamelPhases, SupportedCamelPhases_phase1 /* IMPORTED_LONG_NAMED_BIT */, phase1 /* IMPORTED_SHORT_NAMED_BIT */, SupportedCamelPhases_phase2 /* IMPORTED_LONG_NAMED_BIT */, phase2 /* IMPORTED_SHORT_NAMED_BIT */, SupportedCamelPhases_phase3 /* IMPORTED_LONG_NAMED_BIT */, phase3 /* IMPORTED_SHORT_NAMED_BIT */, SupportedCamelPhases_phase4 /* IMPORTED_LONG_NAMED_BIT */, phase4 /* IMPORTED_SHORT_NAMED_BIT */, _decode_SupportedCamelPhases, _encode_SupportedCamelPhases } from "../MAP-MS-DataTypes/SupportedCamelPhases.ta.mjs";
// export { SupportedCamelPhases, SupportedCamelPhases_phase1 /* IMPORTED_LONG_NAMED_BIT */, phase1 /* IMPORTED_SHORT_NAMED_BIT */, SupportedCamelPhases_phase2 /* IMPORTED_LONG_NAMED_BIT */, phase2 /* IMPORTED_SHORT_NAMED_BIT */, SupportedCamelPhases_phase3 /* IMPORTED_LONG_NAMED_BIT */, phase3 /* IMPORTED_SHORT_NAMED_BIT */, SupportedCamelPhases_phase4 /* IMPORTED_LONG_NAMED_BIT */, phase4 /* IMPORTED_SHORT_NAMED_BIT */, _decode_SupportedCamelPhases, _encode_SupportedCamelPhases } from "../MAP-MS-DataTypes/SupportedCamelPhases.ta.mjs";
import { OfferedCamel4Functionalities, OfferedCamel4Functionalities_initiateCallAttempt /* IMPORTED_LONG_NAMED_BIT */, initiateCallAttempt /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4Functionalities_splitLeg /* IMPORTED_LONG_NAMED_BIT */, splitLeg /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4Functionalities_moveLeg /* IMPORTED_LONG_NAMED_BIT */, moveLeg /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4Functionalities_disconnectLeg /* IMPORTED_LONG_NAMED_BIT */, disconnectLeg /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4Functionalities_entityReleased /* IMPORTED_LONG_NAMED_BIT */, entityReleased /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4Functionalities_dfc_WithArgument /* IMPORTED_LONG_NAMED_BIT */, dfc_WithArgument /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4Functionalities_playTone /* IMPORTED_LONG_NAMED_BIT */, playTone /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4Functionalities_dtmf_MidCall /* IMPORTED_LONG_NAMED_BIT */, dtmf_MidCall /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4Functionalities_chargingIndicator /* IMPORTED_LONG_NAMED_BIT */, chargingIndicator /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4Functionalities_alertingDP /* IMPORTED_LONG_NAMED_BIT */, alertingDP /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4Functionalities_locationAtAlerting /* IMPORTED_LONG_NAMED_BIT */, locationAtAlerting /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4Functionalities_changeOfPositionDP /* IMPORTED_LONG_NAMED_BIT */, changeOfPositionDP /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4Functionalities_or_Interactions /* IMPORTED_LONG_NAMED_BIT */, or_Interactions /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4Functionalities_warningToneEnhancements /* IMPORTED_LONG_NAMED_BIT */, warningToneEnhancements /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4Functionalities_cf_Enhancements /* IMPORTED_LONG_NAMED_BIT */, cf_Enhancements /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4Functionalities_subscribedEnhancedDialledServices /* IMPORTED_LONG_NAMED_BIT */, subscribedEnhancedDialledServices /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4Functionalities_servingNetworkEnhancedDialledServices /* IMPORTED_LONG_NAMED_BIT */, servingNetworkEnhancedDialledServices /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4Functionalities_criteriaForChangeOfPositionDP /* IMPORTED_LONG_NAMED_BIT */, criteriaForChangeOfPositionDP /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4Functionalities_serviceChangeDP /* IMPORTED_LONG_NAMED_BIT */, serviceChangeDP /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4Functionalities_collectInformation /* IMPORTED_LONG_NAMED_BIT */, collectInformation /* IMPORTED_SHORT_NAMED_BIT */, _decode_OfferedCamel4Functionalities, _encode_OfferedCamel4Functionalities } from "../MAP-MS-DataTypes/OfferedCamel4Functionalities.ta.mjs";
// export { OfferedCamel4Functionalities, OfferedCamel4Functionalities_initiateCallAttempt /* IMPORTED_LONG_NAMED_BIT */, initiateCallAttempt /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4Functionalities_splitLeg /* IMPORTED_LONG_NAMED_BIT */, splitLeg /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4Functionalities_moveLeg /* IMPORTED_LONG_NAMED_BIT */, moveLeg /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4Functionalities_disconnectLeg /* IMPORTED_LONG_NAMED_BIT */, disconnectLeg /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4Functionalities_entityReleased /* IMPORTED_LONG_NAMED_BIT */, entityReleased /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4Functionalities_dfc_WithArgument /* IMPORTED_LONG_NAMED_BIT */, dfc_WithArgument /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4Functionalities_playTone /* IMPORTED_LONG_NAMED_BIT */, playTone /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4Functionalities_dtmf_MidCall /* IMPORTED_LONG_NAMED_BIT */, dtmf_MidCall /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4Functionalities_chargingIndicator /* IMPORTED_LONG_NAMED_BIT */, chargingIndicator /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4Functionalities_alertingDP /* IMPORTED_LONG_NAMED_BIT */, alertingDP /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4Functionalities_locationAtAlerting /* IMPORTED_LONG_NAMED_BIT */, locationAtAlerting /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4Functionalities_changeOfPositionDP /* IMPORTED_LONG_NAMED_BIT */, changeOfPositionDP /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4Functionalities_or_Interactions /* IMPORTED_LONG_NAMED_BIT */, or_Interactions /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4Functionalities_warningToneEnhancements /* IMPORTED_LONG_NAMED_BIT */, warningToneEnhancements /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4Functionalities_cf_Enhancements /* IMPORTED_LONG_NAMED_BIT */, cf_Enhancements /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4Functionalities_subscribedEnhancedDialledServices /* IMPORTED_LONG_NAMED_BIT */, subscribedEnhancedDialledServices /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4Functionalities_servingNetworkEnhancedDialledServices /* IMPORTED_LONG_NAMED_BIT */, servingNetworkEnhancedDialledServices /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4Functionalities_criteriaForChangeOfPositionDP /* IMPORTED_LONG_NAMED_BIT */, criteriaForChangeOfPositionDP /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4Functionalities_serviceChangeDP /* IMPORTED_LONG_NAMED_BIT */, serviceChangeDP /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4Functionalities_collectInformation /* IMPORTED_LONG_NAMED_BIT */, collectInformation /* IMPORTED_SHORT_NAMED_BIT */, _decode_OfferedCamel4Functionalities, _encode_OfferedCamel4Functionalities } from "../MAP-MS-DataTypes/OfferedCamel4Functionalities.ta.mjs";


/**
 * @summary InitiateCallAttemptRes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InitiateCallAttemptRes {PARAMETERS-BOUND : bound} ::= SEQUENCE {
 *     supportedCamelPhases        [0] SupportedCamelPhases            OPTIONAL,
 *     offeredCamel4Functionalities    [1] OfferedCamel4Functionalities        OPTIONAL,
 *     extensions                [2]    Extensions {bound}            OPTIONAL,
 *     ...,
 *     releaseCallArgExtensionAllowed    [3]    NULL                    OPTIONAL
 *     }
 * ```
 * 
 * @class
 */
export
class InitiateCallAttemptRes {
    constructor (
        /**
         * @summary `supportedCamelPhases`.
         * @public
         * @readonly
         */
        readonly supportedCamelPhases: OPTIONAL<SupportedCamelPhases>,
        /**
         * @summary `offeredCamel4Functionalities`.
         * @public
         * @readonly
         */
        readonly offeredCamel4Functionalities: OPTIONAL<OfferedCamel4Functionalities>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<Extensions>,
        /**
         * @summary `releaseCallArgExtensionAllowed`.
         * @public
         * @readonly
         */
        readonly releaseCallArgExtensionAllowed: OPTIONAL<NULL>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a InitiateCallAttemptRes
     * @description
     * 
     * This takes an `object` and converts it to a `InitiateCallAttemptRes`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `InitiateCallAttemptRes`.
     * @returns {InitiateCallAttemptRes}
     */
    public static _from_object (_o: { [_K in keyof (InitiateCallAttemptRes)]: (InitiateCallAttemptRes)[_K] }): InitiateCallAttemptRes {
        return new InitiateCallAttemptRes(_o.supportedCamelPhases, _o.offeredCamel4Functionalities, _o.extensions, _o.releaseCallArgExtensionAllowed, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of InitiateCallAttemptRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_InitiateCallAttemptRes: $.ComponentSpec[] = [
    new $.ComponentSpec("supportedCamelPhases", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("offeredCamel4Functionalities", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 2), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of InitiateCallAttemptRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_InitiateCallAttemptRes: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of InitiateCallAttemptRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_InitiateCallAttemptRes: $.ComponentSpec[] = [
    new $.ComponentSpec("releaseCallArgExtensionAllowed", true, $.hasTag(_TagClass.context, 3), undefined, undefined)
];

let _cached_decoder_for_InitiateCallAttemptRes: $.ASN1Decoder<InitiateCallAttemptRes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) InitiateCallAttemptRes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_InitiateCallAttemptRes (el: _Element): InitiateCallAttemptRes {
    if (!_cached_decoder_for_InitiateCallAttemptRes) { _cached_decoder_for_InitiateCallAttemptRes = function (el: _Element): InitiateCallAttemptRes {
    let supportedCamelPhases: OPTIONAL<SupportedCamelPhases>;
    let offeredCamel4Functionalities: OPTIONAL<OfferedCamel4Functionalities>;
    let extensions: OPTIONAL<Extensions>;
    let releaseCallArgExtensionAllowed: OPTIONAL<NULL>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "supportedCamelPhases": (_el: _Element): void => { supportedCamelPhases = $._decode_implicit<SupportedCamelPhases>(() => _decode_SupportedCamelPhases)(_el); },
        "offeredCamel4Functionalities": (_el: _Element): void => { offeredCamel4Functionalities = $._decode_implicit<OfferedCamel4Functionalities>(() => _decode_OfferedCamel4Functionalities)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<Extensions>(() => _decode_Extensions)(_el); },
        "releaseCallArgExtensionAllowed": (_el: _Element): void => { releaseCallArgExtensionAllowed = $._decode_implicit<NULL>(() => $._decodeNull)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_InitiateCallAttemptRes,
        _extension_additions_list_spec_for_InitiateCallAttemptRes,
        _root_component_type_list_2_spec_for_InitiateCallAttemptRes,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new InitiateCallAttemptRes(
        supportedCamelPhases,
        offeredCamel4Functionalities,
        extensions,
        releaseCallArgExtensionAllowed,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_InitiateCallAttemptRes(el);
}

let _cached_encoder_for_InitiateCallAttemptRes: $.ASN1Encoder<InitiateCallAttemptRes> | null = null;

/**
 * @summary Encodes a(n) InitiateCallAttemptRes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InitiateCallAttemptRes, encoded as an ASN.1 Element.
 */
export
function _encode_InitiateCallAttemptRes (value: InitiateCallAttemptRes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_InitiateCallAttemptRes) { _cached_encoder_for_InitiateCallAttemptRes = function (value: InitiateCallAttemptRes, elGetter: $.ASN1Encoder<InitiateCallAttemptRes>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.supportedCamelPhases === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_SupportedCamelPhases, $.BER)(value.supportedCamelPhases, $.BER)),
            /* IF_ABSENT  */ ((value.offeredCamel4Functionalities === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_OfferedCamel4Functionalities, $.BER)(value.offeredCamel4Functionalities, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_Extensions, $.BER)(value.extensions, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.releaseCallArgExtensionAllowed === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeNull, $.BER)(value.releaseCallArgExtensionAllowed, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_InitiateCallAttemptRes(value, elGetter);
}


/* eslint-enable */
