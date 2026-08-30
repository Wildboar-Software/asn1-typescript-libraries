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
import { SS_Code, _decode_SS_Code, _encode_SS_Code } from "../MAP-SS-Code/SS-Code.ta.mjs";
// export { SS_Code, _decode_SS_Code, _encode_SS_Code } from "../MAP-SS-Code/SS-Code.ta.mjs";
import { SS_Status, _decode_SS_Status, _encode_SS_Status } from "../MAP-SS-DataTypes/SS-Status.ta.mjs";
// export { SS_Status, _decode_SS_Status, _encode_SS_Status } from "../MAP-SS-DataTypes/SS-Status.ta.mjs";
import { SS_SubscriptionOption, _decode_SS_SubscriptionOption, _encode_SS_SubscriptionOption } from "../MAP-SS-DataTypes/SS-SubscriptionOption.ta.mjs";
// export { SS_SubscriptionOption, _decode_SS_SubscriptionOption, _encode_SS_SubscriptionOption } from "../MAP-SS-DataTypes/SS-SubscriptionOption.ta.mjs";
import { BasicServiceGroupList, _decode_BasicServiceGroupList, _encode_BasicServiceGroupList } from "../MAP-SS-DataTypes/BasicServiceGroupList.ta.mjs";
// export { BasicServiceGroupList, _decode_BasicServiceGroupList, _encode_BasicServiceGroupList } from "../MAP-SS-DataTypes/BasicServiceGroupList.ta.mjs";
import { EMLPP_Priority, _decode_EMLPP_Priority, _encode_EMLPP_Priority } from "../MAP-CommonDataTypes/EMLPP-Priority.ta.mjs";
// export { EMLPP_Priority, _decode_EMLPP_Priority, _encode_EMLPP_Priority } from "../MAP-CommonDataTypes/EMLPP-Priority.ta.mjs";
import { MC_Bearers, _decode_MC_Bearers, _encode_MC_Bearers } from "../MAP-CommonDataTypes/MC-Bearers.ta.mjs";
// export { MC_Bearers, _decode_MC_Bearers, _encode_MC_Bearers } from "../MAP-CommonDataTypes/MC-Bearers.ta.mjs";


/**
 * @summary SS_Data
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SS-Data ::= SEQUENCE {
 *     ss-Code    SS-Code    OPTIONAL,
 *     ss-Status    [4] SS-Status    OPTIONAL,
 *     ss-SubscriptionOption    SS-SubscriptionOption    OPTIONAL,
 *     basicServiceGroupList    BasicServiceGroupList    OPTIONAL,
 *     ...,
 *     defaultPriority    EMLPP-Priority    OPTIONAL,
 *     nbrUser    [5] MC-Bearers    OPTIONAL
 *     }
 * ```
 * 
 * @class
 */
export
class SS_Data {
    constructor (
        /**
         * @summary `ss_Code`.
         * @public
         * @readonly
         */
        readonly ss_Code: OPTIONAL<SS_Code>,
        /**
         * @summary `ss_Status`.
         * @public
         * @readonly
         */
        readonly ss_Status: OPTIONAL<SS_Status>,
        /**
         * @summary `ss_SubscriptionOption`.
         * @public
         * @readonly
         */
        readonly ss_SubscriptionOption: OPTIONAL<SS_SubscriptionOption>,
        /**
         * @summary `basicServiceGroupList`.
         * @public
         * @readonly
         */
        readonly basicServiceGroupList: OPTIONAL<BasicServiceGroupList>,
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
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a SS_Data
     * @description
     * 
     * This takes an `object` and converts it to a `SS_Data`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SS_Data`.
     * @returns {SS_Data}
     */
    public static _from_object (_o: { [_K in keyof (SS_Data)]: (SS_Data)[_K] }): SS_Data {
        return new SS_Data(_o.ss_Code, _o.ss_Status, _o.ss_SubscriptionOption, _o.basicServiceGroupList, _o.defaultPriority, _o.nbrUser, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of SS_Data
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SS_Data: $.ComponentSpec[] = [
    new $.ComponentSpec("ss-Code", true, $.hasTag(_TagClass.universal, 4), undefined, undefined),
    new $.ComponentSpec("ss-Status", true, $.hasTag(_TagClass.context, 4), undefined, undefined),
    new $.ComponentSpec("ss-SubscriptionOption", true, $.or($.hasTag(_TagClass.context, 2), $.hasTag(_TagClass.context, 1)), undefined, undefined),
    new $.ComponentSpec("basicServiceGroupList", true, $.hasTag(_TagClass.universal, 16), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of SS_Data
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SS_Data: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SS_Data
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SS_Data: $.ComponentSpec[] = [
    new $.ComponentSpec("defaultPriority", true, $.hasTag(_TagClass.universal, 2), undefined, undefined),
    new $.ComponentSpec("nbrUser", true, $.hasTag(_TagClass.context, 5), undefined, undefined)
];

let _cached_decoder_for_SS_Data: $.ASN1Decoder<SS_Data> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SS_Data
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SS_Data (el: _Element): SS_Data {
    if (!_cached_decoder_for_SS_Data) { _cached_decoder_for_SS_Data = function (el: _Element): SS_Data {
    let ss_Code: OPTIONAL<SS_Code>;
    let ss_Status: OPTIONAL<SS_Status>;
    let ss_SubscriptionOption: OPTIONAL<SS_SubscriptionOption>;
    let basicServiceGroupList: OPTIONAL<BasicServiceGroupList>;
    let defaultPriority: OPTIONAL<EMLPP_Priority>;
    let nbrUser: OPTIONAL<MC_Bearers>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "ss-Code": (_el: _Element): void => { ss_Code = _decode_SS_Code(_el); },
        "ss-Status": (_el: _Element): void => { ss_Status = $._decode_implicit<SS_Status>(() => _decode_SS_Status)(_el); },
        "ss-SubscriptionOption": (_el: _Element): void => { ss_SubscriptionOption = _decode_SS_SubscriptionOption(_el); },
        "basicServiceGroupList": (_el: _Element): void => { basicServiceGroupList = _decode_BasicServiceGroupList(_el); },
        "defaultPriority": (_el: _Element): void => { defaultPriority = _decode_EMLPP_Priority(_el); },
        "nbrUser": (_el: _Element): void => { nbrUser = $._decode_implicit<MC_Bearers>(() => _decode_MC_Bearers)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SS_Data,
        _extension_additions_list_spec_for_SS_Data,
        _root_component_type_list_2_spec_for_SS_Data,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new SS_Data(
        ss_Code,
        ss_Status,
        ss_SubscriptionOption,
        basicServiceGroupList,
        defaultPriority,
        nbrUser,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_SS_Data(el);
}

let _cached_encoder_for_SS_Data: $.ASN1Encoder<SS_Data> | null = null;

/**
 * @summary Encodes a(n) SS_Data into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SS_Data, encoded as an ASN.1 Element.
 */
export
function _encode_SS_Data (value: SS_Data, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SS_Data) { _cached_encoder_for_SS_Data = function (value: SS_Data, elGetter: $.ASN1Encoder<SS_Data>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.ss_Code === undefined) ? undefined : _encode_SS_Code(value.ss_Code, $.BER)),
            /* IF_ABSENT  */ ((value.ss_Status === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_SS_Status, $.BER)(value.ss_Status, $.BER)),
            /* IF_ABSENT  */ ((value.ss_SubscriptionOption === undefined) ? undefined : _encode_SS_SubscriptionOption(value.ss_SubscriptionOption, $.BER)),
            /* IF_ABSENT  */ ((value.basicServiceGroupList === undefined) ? undefined : _encode_BasicServiceGroupList(value.basicServiceGroupList, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.defaultPriority === undefined) ? undefined : _encode_EMLPP_Priority(value.defaultPriority, $.BER)),
            /* IF_ABSENT  */ ((value.nbrUser === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_MC_Bearers, $.BER)(value.nbrUser, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SS_Data(value, elGetter);
}


/* eslint-enable */
