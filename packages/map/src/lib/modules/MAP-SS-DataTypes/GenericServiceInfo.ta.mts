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
import { SS_Status, _decode_SS_Status, _encode_SS_Status } from "../MAP-SS-DataTypes/SS-Status.ta.mjs";
import { CliRestrictionOption, _enum_for_CliRestrictionOption, CliRestrictionOption_permanent /* IMPORTED_LONG_ENUMERATION_ITEM */, permanent /* IMPORTED_SHORT_ENUMERATION_ITEM */, CliRestrictionOption_temporaryDefaultRestricted /* IMPORTED_LONG_ENUMERATION_ITEM */, temporaryDefaultRestricted /* IMPORTED_SHORT_ENUMERATION_ITEM */, CliRestrictionOption_temporaryDefaultAllowed /* IMPORTED_LONG_ENUMERATION_ITEM */, temporaryDefaultAllowed /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_CliRestrictionOption, _encode_CliRestrictionOption } from "../MAP-SS-DataTypes/CliRestrictionOption.ta.mjs";
import { EMLPP_Priority, _decode_EMLPP_Priority, _encode_EMLPP_Priority } from "../MAP-CommonDataTypes/EMLPP-Priority.ta.mjs";
import { CCBS_FeatureList, _decode_CCBS_FeatureList, _encode_CCBS_FeatureList } from "../MAP-SS-DataTypes/CCBS-FeatureList.ta.mjs";
import { MaxMC_Bearers, _decode_MaxMC_Bearers, _encode_MaxMC_Bearers } from "../MAP-CommonDataTypes/MaxMC-Bearers.ta.mjs";
import { MC_Bearers, _decode_MC_Bearers, _encode_MC_Bearers } from "../MAP-CommonDataTypes/MC-Bearers.ta.mjs";


/**
 * @summary GenericServiceInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GenericServiceInfo ::= SEQUENCE {
 *     ss-Status    SS-Status,
 *     cliRestrictionOption    CliRestrictionOption    OPTIONAL,
 *     ...,
 *     maximumEntitledPriority    [0] EMLPP-Priority    OPTIONAL,
 *     defaultPriority    [1] EMLPP-Priority    OPTIONAL,
 *     ccbs-FeatureList    [2] CCBS-FeatureList    OPTIONAL,
 *     nbrSB    [3] MaxMC-Bearers    OPTIONAL,
 *     nbrUser    [4] MC-Bearers    OPTIONAL,
 *     nbrSN    [5] MC-Bearers    OPTIONAL }
 * ```
 * 
 * @class
 */
export
class GenericServiceInfo {
    constructor (
        /**
         * @summary `ss_Status`.
         * @public
         * @readonly
         */
        readonly ss_Status: SS_Status,
        /**
         * @summary `cliRestrictionOption`.
         * @public
         * @readonly
         */
        readonly cliRestrictionOption: OPTIONAL<CliRestrictionOption>,
        /**
         * @summary `maximumEntitledPriority`.
         * @public
         * @readonly
         */
        readonly maximumEntitledPriority: OPTIONAL<EMLPP_Priority>,
        /**
         * @summary `defaultPriority`.
         * @public
         * @readonly
         */
        readonly defaultPriority: OPTIONAL<EMLPP_Priority>,
        /**
         * @summary `ccbs_FeatureList`.
         * @public
         * @readonly
         */
        readonly ccbs_FeatureList: OPTIONAL<CCBS_FeatureList>,
        /**
         * @summary `nbrSB`.
         * @public
         * @readonly
         */
        readonly nbrSB: OPTIONAL<MaxMC_Bearers>,
        /**
         * @summary `nbrUser`.
         * @public
         * @readonly
         */
        readonly nbrUser: OPTIONAL<MC_Bearers>,
        /**
         * @summary `nbrSN`.
         * @public
         * @readonly
         */
        readonly nbrSN: OPTIONAL<MC_Bearers>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a GenericServiceInfo
     * @description
     * 
     * This takes an `object` and converts it to a `GenericServiceInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GenericServiceInfo`.
     * @returns {GenericServiceInfo}
     */
    public static _from_object (_o: { [_K in keyof (GenericServiceInfo)]: (GenericServiceInfo)[_K] }): GenericServiceInfo {
        return new GenericServiceInfo(_o.ss_Status, _o.cliRestrictionOption, _o.maximumEntitledPriority, _o.defaultPriority, _o.ccbs_FeatureList, _o.nbrSB, _o.nbrUser, _o.nbrSN, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `cliRestrictionOption`
         * @public
         * @static
         */

    public static _enum_for_cliRestrictionOption = _enum_for_CliRestrictionOption;
}

/**
 * @summary The Leading Root Component Types of GenericServiceInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GenericServiceInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("ss-Status", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("cliRestrictionOption", true, $.hasTag(_TagClass.universal, 10))
];

/**
 * @summary The Trailing Root Component Types of GenericServiceInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GenericServiceInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GenericServiceInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GenericServiceInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("maximumEntitledPriority", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("defaultPriority", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("ccbs-FeatureList", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("nbrSB", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("nbrUser", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("nbrSN", true, $.hasTag(_TagClass.context, 5))
];

let _cached_decoder_for_GenericServiceInfo: $.ASN1Decoder<GenericServiceInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GenericServiceInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GenericServiceInfo (el: _Element): GenericServiceInfo {
    if (!_cached_decoder_for_GenericServiceInfo) { _cached_decoder_for_GenericServiceInfo = function (el: _Element): GenericServiceInfo {
    let ss_Status!: SS_Status;
    let cliRestrictionOption: OPTIONAL<CliRestrictionOption> = undefined;
    let maximumEntitledPriority: OPTIONAL<EMLPP_Priority> = undefined;
    let defaultPriority: OPTIONAL<EMLPP_Priority> = undefined;
    let ccbs_FeatureList: OPTIONAL<CCBS_FeatureList> = undefined;
    let nbrSB: OPTIONAL<MaxMC_Bearers> = undefined;
    let nbrUser: OPTIONAL<MC_Bearers> = undefined;
    let nbrSN: OPTIONAL<MC_Bearers> = undefined;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "ss-Status": (_el: _Element): void => { ss_Status = _decode_SS_Status(_el); },
        "cliRestrictionOption": (_el: _Element): void => { cliRestrictionOption = _decode_CliRestrictionOption(_el); },
        "maximumEntitledPriority": (_el: _Element): void => { maximumEntitledPriority = $._decode_implicit<EMLPP_Priority>(() => _decode_EMLPP_Priority)(_el); },
        "defaultPriority": (_el: _Element): void => { defaultPriority = $._decode_implicit<EMLPP_Priority>(() => _decode_EMLPP_Priority)(_el); },
        "ccbs-FeatureList": (_el: _Element): void => { ccbs_FeatureList = $._decode_implicit<CCBS_FeatureList>(() => _decode_CCBS_FeatureList)(_el); },
        "nbrSB": (_el: _Element): void => { nbrSB = $._decode_implicit<MaxMC_Bearers>(() => _decode_MaxMC_Bearers)(_el); },
        "nbrUser": (_el: _Element): void => { nbrUser = $._decode_implicit<MC_Bearers>(() => _decode_MC_Bearers)(_el); },
        "nbrSN": (_el: _Element): void => { nbrSN = $._decode_implicit<MC_Bearers>(() => _decode_MC_Bearers)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GenericServiceInfo,
        _extension_additions_list_spec_for_GenericServiceInfo,
        _root_component_type_list_2_spec_for_GenericServiceInfo,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new GenericServiceInfo(
        ss_Status,
        cliRestrictionOption,
        maximumEntitledPriority,
        defaultPriority,
        ccbs_FeatureList,
        nbrSB,
        nbrUser,
        nbrSN,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_GenericServiceInfo(el);
}

let _cached_encoder_for_GenericServiceInfo: $.ASN1Encoder<GenericServiceInfo> | null = null;

/**
 * @summary Encodes a(n) GenericServiceInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GenericServiceInfo, encoded as an ASN.1 Element.
 */
export
function _encode_GenericServiceInfo (value: GenericServiceInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GenericServiceInfo) { _cached_encoder_for_GenericServiceInfo = function (value: GenericServiceInfo, elGetter: $.ASN1Encoder<GenericServiceInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_SS_Status(value.ss_Status, $.BER),
            /* IF_ABSENT  */ ((value.cliRestrictionOption === undefined) ? undefined : _encode_CliRestrictionOption(value.cliRestrictionOption, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.maximumEntitledPriority === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_EMLPP_Priority, $.BER)(value.maximumEntitledPriority, $.BER)),
            /* IF_ABSENT  */ ((value.defaultPriority === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_EMLPP_Priority, $.BER)(value.defaultPriority, $.BER)),
            /* IF_ABSENT  */ ((value.ccbs_FeatureList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_CCBS_FeatureList, $.BER)(value.ccbs_FeatureList, $.BER)),
            /* IF_ABSENT  */ ((value.nbrSB === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_MaxMC_Bearers, $.BER)(value.nbrSB, $.BER)),
            /* IF_ABSENT  */ ((value.nbrUser === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_MC_Bearers, $.BER)(value.nbrUser, $.BER)),
            /* IF_ABSENT  */ ((value.nbrSN === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_MC_Bearers, $.BER)(value.nbrSN, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GenericServiceInfo(value, elGetter);
}


/* eslint-enable */
