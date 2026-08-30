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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { SS_Code, _decode_SS_Code, _encode_SS_Code } from "../MAP-SS-Code/SS-Code.ta.mjs";
// export { SS_Code, _decode_SS_Code, _encode_SS_Code } from "../MAP-SS-Code/SS-Code.ta.mjs";
import { BasicServiceCode, _decode_BasicServiceCode, _encode_BasicServiceCode } from "../MAP-CommonDataTypes/BasicServiceCode.ta.mjs";
// export { BasicServiceCode, _decode_BasicServiceCode, _encode_BasicServiceCode } from "../MAP-CommonDataTypes/BasicServiceCode.ta.mjs";
import { AddressString, _decode_AddressString, _encode_AddressString } from "../MAP-CommonDataTypes/AddressString.ta.mjs";
// export { AddressString, _decode_AddressString, _encode_AddressString } from "../MAP-CommonDataTypes/AddressString.ta.mjs";
import { ISDN_SubaddressString, _decode_ISDN_SubaddressString, _encode_ISDN_SubaddressString } from "../MAP-CommonDataTypes/ISDN-SubaddressString.ta.mjs";
// export { ISDN_SubaddressString, _decode_ISDN_SubaddressString, _encode_ISDN_SubaddressString } from "../MAP-CommonDataTypes/ISDN-SubaddressString.ta.mjs";
import { NoReplyConditionTime, _decode_NoReplyConditionTime, _encode_NoReplyConditionTime } from "../MAP-SS-DataTypes/NoReplyConditionTime.ta.mjs";
// export { NoReplyConditionTime, _decode_NoReplyConditionTime, _encode_NoReplyConditionTime } from "../MAP-SS-DataTypes/NoReplyConditionTime.ta.mjs";
import { EMLPP_Priority, _decode_EMLPP_Priority, _encode_EMLPP_Priority } from "../MAP-CommonDataTypes/EMLPP-Priority.ta.mjs";
// export { EMLPP_Priority, _decode_EMLPP_Priority, _encode_EMLPP_Priority } from "../MAP-CommonDataTypes/EMLPP-Priority.ta.mjs";
import { MC_Bearers, _decode_MC_Bearers, _encode_MC_Bearers } from "../MAP-CommonDataTypes/MC-Bearers.ta.mjs";
// export { MC_Bearers, _decode_MC_Bearers, _encode_MC_Bearers } from "../MAP-CommonDataTypes/MC-Bearers.ta.mjs";


/**
 * @summary RegisterSS_Arg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RegisterSS-Arg ::= SEQUENCE {
 *     ss-Code    SS-Code,
 *     basicService    BasicServiceCode    OPTIONAL,
 *     forwardedToNumber    [4] AddressString    OPTIONAL,
 *     forwardedToSubaddress    [6] ISDN-SubaddressString    OPTIONAL,
 *     noReplyConditionTime    [5] NoReplyConditionTime    OPTIONAL,
 *     ...,
 *     defaultPriority    [7] EMLPP-Priority    OPTIONAL,
 *     nbrUser    [8] MC-Bearers    OPTIONAL,
 *     longFTN-Supported    [9]    NULL    OPTIONAL }
 * ```
 * 
 * @class
 */
export
class RegisterSS_Arg {
    constructor (
        /**
         * @summary `ss_Code`.
         * @public
         * @readonly
         */
        readonly ss_Code: SS_Code,
        /**
         * @summary `basicService`.
         * @public
         * @readonly
         */
        readonly basicService: OPTIONAL<BasicServiceCode>,
        /**
         * @summary `forwardedToNumber`.
         * @public
         * @readonly
         */
        readonly forwardedToNumber: OPTIONAL<AddressString>,
        /**
         * @summary `forwardedToSubaddress`.
         * @public
         * @readonly
         */
        readonly forwardedToSubaddress: OPTIONAL<ISDN_SubaddressString>,
        /**
         * @summary `noReplyConditionTime`.
         * @public
         * @readonly
         */
        readonly noReplyConditionTime: OPTIONAL<NoReplyConditionTime>,
        /**
         * @summary `defaultPriority`.
         * @public
         * @readonly
         */
        readonly defaultPriority: OPTIONAL<EMLPP_Priority>,
        /**
         * @summary `nbrUser`.
         * @public
         * @readonly
         */
        readonly nbrUser: OPTIONAL<MC_Bearers>,
        /**
         * @summary `longFTN_Supported`.
         * @public
         * @readonly
         */
        readonly longFTN_Supported: OPTIONAL<NULL>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a RegisterSS_Arg
     * @description
     * 
     * This takes an `object` and converts it to a `RegisterSS_Arg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RegisterSS_Arg`.
     * @returns {RegisterSS_Arg}
     */
    public static _from_object (_o: { [_K in keyof (RegisterSS_Arg)]: (RegisterSS_Arg)[_K] }): RegisterSS_Arg {
        return new RegisterSS_Arg(_o.ss_Code, _o.basicService, _o.forwardedToNumber, _o.forwardedToSubaddress, _o.noReplyConditionTime, _o.defaultPriority, _o.nbrUser, _o.longFTN_Supported, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of RegisterSS_Arg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RegisterSS_Arg: $.ComponentSpec[] = [
    new $.ComponentSpec("ss-Code", false, $.hasTag(_TagClass.universal, 4), undefined, undefined),
    new $.ComponentSpec("basicService", true, $.or($.hasTag(_TagClass.context, 2), $.hasTag(_TagClass.context, 3)), undefined, undefined),
    new $.ComponentSpec("forwardedToNumber", true, $.hasTag(_TagClass.context, 4), undefined, undefined),
    new $.ComponentSpec("forwardedToSubaddress", true, $.hasTag(_TagClass.context, 6), undefined, undefined),
    new $.ComponentSpec("noReplyConditionTime", true, $.hasTag(_TagClass.context, 5), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of RegisterSS_Arg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RegisterSS_Arg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RegisterSS_Arg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RegisterSS_Arg: $.ComponentSpec[] = [
    new $.ComponentSpec("defaultPriority", true, $.hasTag(_TagClass.context, 7), undefined, undefined),
    new $.ComponentSpec("nbrUser", true, $.hasTag(_TagClass.context, 8), undefined, undefined),
    new $.ComponentSpec("longFTN-Supported", true, $.hasTag(_TagClass.context, 9), undefined, undefined)
];

let _cached_decoder_for_RegisterSS_Arg: $.ASN1Decoder<RegisterSS_Arg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RegisterSS_Arg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RegisterSS_Arg (el: _Element): RegisterSS_Arg {
    if (!_cached_decoder_for_RegisterSS_Arg) { _cached_decoder_for_RegisterSS_Arg = function (el: _Element): RegisterSS_Arg {
    let ss_Code!: SS_Code;
    let basicService: OPTIONAL<BasicServiceCode>;
    let forwardedToNumber: OPTIONAL<AddressString>;
    let forwardedToSubaddress: OPTIONAL<ISDN_SubaddressString>;
    let noReplyConditionTime: OPTIONAL<NoReplyConditionTime>;
    let defaultPriority: OPTIONAL<EMLPP_Priority>;
    let nbrUser: OPTIONAL<MC_Bearers>;
    let longFTN_Supported: OPTIONAL<NULL>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "ss-Code": (_el: _Element): void => { ss_Code = _decode_SS_Code(_el); },
        "basicService": (_el: _Element): void => { basicService = _decode_BasicServiceCode(_el); },
        "forwardedToNumber": (_el: _Element): void => { forwardedToNumber = $._decode_implicit<AddressString>(() => _decode_AddressString)(_el); },
        "forwardedToSubaddress": (_el: _Element): void => { forwardedToSubaddress = $._decode_implicit<ISDN_SubaddressString>(() => _decode_ISDN_SubaddressString)(_el); },
        "noReplyConditionTime": (_el: _Element): void => { noReplyConditionTime = $._decode_implicit<NoReplyConditionTime>(() => _decode_NoReplyConditionTime)(_el); },
        "defaultPriority": (_el: _Element): void => { defaultPriority = $._decode_implicit<EMLPP_Priority>(() => _decode_EMLPP_Priority)(_el); },
        "nbrUser": (_el: _Element): void => { nbrUser = $._decode_implicit<MC_Bearers>(() => _decode_MC_Bearers)(_el); },
        "longFTN-Supported": (_el: _Element): void => { longFTN_Supported = $._decode_implicit<NULL>(() => $._decodeNull)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RegisterSS_Arg,
        _extension_additions_list_spec_for_RegisterSS_Arg,
        _root_component_type_list_2_spec_for_RegisterSS_Arg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new RegisterSS_Arg(
        ss_Code,
        basicService,
        forwardedToNumber,
        forwardedToSubaddress,
        noReplyConditionTime,
        defaultPriority,
        nbrUser,
        longFTN_Supported,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_RegisterSS_Arg(el);
}

let _cached_encoder_for_RegisterSS_Arg: $.ASN1Encoder<RegisterSS_Arg> | null = null;

/**
 * @summary Encodes a(n) RegisterSS_Arg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RegisterSS_Arg, encoded as an ASN.1 Element.
 */
export
function _encode_RegisterSS_Arg (value: RegisterSS_Arg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RegisterSS_Arg) { _cached_encoder_for_RegisterSS_Arg = function (value: RegisterSS_Arg, elGetter: $.ASN1Encoder<RegisterSS_Arg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_SS_Code(value.ss_Code, $.BER),
            /* IF_ABSENT  */ ((value.basicService === undefined) ? undefined : _encode_BasicServiceCode(value.basicService, $.BER)),
            /* IF_ABSENT  */ ((value.forwardedToNumber === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_AddressString, $.BER)(value.forwardedToNumber, $.BER)),
            /* IF_ABSENT  */ ((value.forwardedToSubaddress === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_ISDN_SubaddressString, $.BER)(value.forwardedToSubaddress, $.BER)),
            /* IF_ABSENT  */ ((value.noReplyConditionTime === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_NoReplyConditionTime, $.BER)(value.noReplyConditionTime, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.defaultPriority === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_EMLPP_Priority, $.BER)(value.defaultPriority, $.BER)),
            /* IF_ABSENT  */ ((value.nbrUser === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_MC_Bearers, $.BER)(value.nbrUser, $.BER)),
            /* IF_ABSENT  */ ((value.longFTN_Supported === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => $._encodeNull, $.BER)(value.longFTN_Supported, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_RegisterSS_Arg(value, elGetter);
}


/* eslint-enable */
