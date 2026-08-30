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
import { BasicServiceCode, _decode_BasicServiceCode, _encode_BasicServiceCode } from "../MAP-CommonDataTypes/BasicServiceCode.ta.mjs";
// export { BasicServiceCode, _decode_BasicServiceCode, _encode_BasicServiceCode } from "../MAP-CommonDataTypes/BasicServiceCode.ta.mjs";
import { SS_Status, _decode_SS_Status, _encode_SS_Status } from "../MAP-SS-DataTypes/SS-Status.ta.mjs";
// export { SS_Status, _decode_SS_Status, _encode_SS_Status } from "../MAP-SS-DataTypes/SS-Status.ta.mjs";
import { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";
// export { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";
import { ISDN_SubaddressString, _decode_ISDN_SubaddressString, _encode_ISDN_SubaddressString } from "../MAP-CommonDataTypes/ISDN-SubaddressString.ta.mjs";
// export { ISDN_SubaddressString, _decode_ISDN_SubaddressString, _encode_ISDN_SubaddressString } from "../MAP-CommonDataTypes/ISDN-SubaddressString.ta.mjs";
import { ForwardingOptions, _decode_ForwardingOptions, _encode_ForwardingOptions } from "../MAP-SS-DataTypes/ForwardingOptions.ta.mjs";
// export { ForwardingOptions, _decode_ForwardingOptions, _encode_ForwardingOptions } from "../MAP-SS-DataTypes/ForwardingOptions.ta.mjs";
import { NoReplyConditionTime, _decode_NoReplyConditionTime, _encode_NoReplyConditionTime } from "../MAP-SS-DataTypes/NoReplyConditionTime.ta.mjs";
// export { NoReplyConditionTime, _decode_NoReplyConditionTime, _encode_NoReplyConditionTime } from "../MAP-SS-DataTypes/NoReplyConditionTime.ta.mjs";
import { FTN_AddressString, _decode_FTN_AddressString, _encode_FTN_AddressString } from "../MAP-CommonDataTypes/FTN-AddressString.ta.mjs";
// export { FTN_AddressString, _decode_FTN_AddressString, _encode_FTN_AddressString } from "../MAP-CommonDataTypes/FTN-AddressString.ta.mjs";


/**
 * @summary ForwardingFeature
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ForwardingFeature ::= SEQUENCE {
 *     basicService    BasicServiceCode    OPTIONAL,
 *     ss-Status    [4] SS-Status    OPTIONAL,
 *     forwardedToNumber    [5] ISDN-AddressString    OPTIONAL,
 *     forwardedToSubaddress    [8] ISDN-SubaddressString    OPTIONAL,
 *     forwardingOptions    [6] ForwardingOptions    OPTIONAL,
 *     noReplyConditionTime    [7] NoReplyConditionTime    OPTIONAL,
 *     ...,
 *     longForwardedToNumber    [9] FTN-AddressString    OPTIONAL }
 * ```
 * 
 * @class
 */
export
class ForwardingFeature {
    constructor (
        /**
         * @summary `basicService`.
         * @public
         * @readonly
         */
        readonly basicService: OPTIONAL<BasicServiceCode>,
        /**
         * @summary `ss_Status`.
         * @public
         * @readonly
         */
        readonly ss_Status: OPTIONAL<SS_Status>,
        /**
         * @summary `forwardedToNumber`.
         * @public
         * @readonly
         */
        readonly forwardedToNumber: OPTIONAL<ISDN_AddressString>,
        /**
         * @summary `forwardedToSubaddress`.
         * @public
         * @readonly
         */
        readonly forwardedToSubaddress: OPTIONAL<ISDN_SubaddressString>,
        /**
         * @summary `forwardingOptions`.
         * @public
         * @readonly
         */
        readonly forwardingOptions: OPTIONAL<ForwardingOptions>,
        /**
         * @summary `noReplyConditionTime`.
         * @public
         * @readonly
         */
        readonly noReplyConditionTime: OPTIONAL<NoReplyConditionTime>,
        /**
         * @summary `longForwardedToNumber`.
         * @public
         * @readonly
         */
        readonly longForwardedToNumber: OPTIONAL<FTN_AddressString>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ForwardingFeature
     * @description
     * 
     * This takes an `object` and converts it to a `ForwardingFeature`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ForwardingFeature`.
     * @returns {ForwardingFeature}
     */
    public static _from_object (_o: { [_K in keyof (ForwardingFeature)]: (ForwardingFeature)[_K] }): ForwardingFeature {
        return new ForwardingFeature(_o.basicService, _o.ss_Status, _o.forwardedToNumber, _o.forwardedToSubaddress, _o.forwardingOptions, _o.noReplyConditionTime, _o.longForwardedToNumber, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of ForwardingFeature
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ForwardingFeature: $.ComponentSpec[] = [
    new $.ComponentSpec("basicService", true, $.or($.hasTag(_TagClass.context, 2), $.hasTag(_TagClass.context, 3)), undefined, undefined),
    new $.ComponentSpec("ss-Status", true, $.hasTag(_TagClass.context, 4), undefined, undefined),
    new $.ComponentSpec("forwardedToNumber", true, $.hasTag(_TagClass.context, 5), undefined, undefined),
    new $.ComponentSpec("forwardedToSubaddress", true, $.hasTag(_TagClass.context, 8), undefined, undefined),
    new $.ComponentSpec("forwardingOptions", true, $.hasTag(_TagClass.context, 6), undefined, undefined),
    new $.ComponentSpec("noReplyConditionTime", true, $.hasTag(_TagClass.context, 7), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of ForwardingFeature
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ForwardingFeature: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ForwardingFeature
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ForwardingFeature: $.ComponentSpec[] = [
    new $.ComponentSpec("longForwardedToNumber", true, $.hasTag(_TagClass.context, 9), undefined, undefined)
];

let _cached_decoder_for_ForwardingFeature: $.ASN1Decoder<ForwardingFeature> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ForwardingFeature
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ForwardingFeature (el: _Element): ForwardingFeature {
    if (!_cached_decoder_for_ForwardingFeature) { _cached_decoder_for_ForwardingFeature = function (el: _Element): ForwardingFeature {
    let basicService: OPTIONAL<BasicServiceCode>;
    let ss_Status: OPTIONAL<SS_Status>;
    let forwardedToNumber: OPTIONAL<ISDN_AddressString>;
    let forwardedToSubaddress: OPTIONAL<ISDN_SubaddressString>;
    let forwardingOptions: OPTIONAL<ForwardingOptions>;
    let noReplyConditionTime: OPTIONAL<NoReplyConditionTime>;
    let longForwardedToNumber: OPTIONAL<FTN_AddressString>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "basicService": (_el: _Element): void => { basicService = _decode_BasicServiceCode(_el); },
        "ss-Status": (_el: _Element): void => { ss_Status = $._decode_implicit<SS_Status>(() => _decode_SS_Status)(_el); },
        "forwardedToNumber": (_el: _Element): void => { forwardedToNumber = $._decode_implicit<ISDN_AddressString>(() => _decode_ISDN_AddressString)(_el); },
        "forwardedToSubaddress": (_el: _Element): void => { forwardedToSubaddress = $._decode_implicit<ISDN_SubaddressString>(() => _decode_ISDN_SubaddressString)(_el); },
        "forwardingOptions": (_el: _Element): void => { forwardingOptions = $._decode_implicit<ForwardingOptions>(() => _decode_ForwardingOptions)(_el); },
        "noReplyConditionTime": (_el: _Element): void => { noReplyConditionTime = $._decode_implicit<NoReplyConditionTime>(() => _decode_NoReplyConditionTime)(_el); },
        "longForwardedToNumber": (_el: _Element): void => { longForwardedToNumber = $._decode_implicit<FTN_AddressString>(() => _decode_FTN_AddressString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ForwardingFeature,
        _extension_additions_list_spec_for_ForwardingFeature,
        _root_component_type_list_2_spec_for_ForwardingFeature,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ForwardingFeature(
        basicService,
        ss_Status,
        forwardedToNumber,
        forwardedToSubaddress,
        forwardingOptions,
        noReplyConditionTime,
        longForwardedToNumber,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ForwardingFeature(el);
}

let _cached_encoder_for_ForwardingFeature: $.ASN1Encoder<ForwardingFeature> | null = null;

/**
 * @summary Encodes a(n) ForwardingFeature into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ForwardingFeature, encoded as an ASN.1 Element.
 */
export
function _encode_ForwardingFeature (value: ForwardingFeature, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ForwardingFeature) { _cached_encoder_for_ForwardingFeature = function (value: ForwardingFeature, elGetter: $.ASN1Encoder<ForwardingFeature>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.basicService === undefined) ? undefined : _encode_BasicServiceCode(value.basicService, $.BER)),
            /* IF_ABSENT  */ ((value.ss_Status === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_SS_Status, $.BER)(value.ss_Status, $.BER)),
            /* IF_ABSENT  */ ((value.forwardedToNumber === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_ISDN_AddressString, $.BER)(value.forwardedToNumber, $.BER)),
            /* IF_ABSENT  */ ((value.forwardedToSubaddress === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_ISDN_SubaddressString, $.BER)(value.forwardedToSubaddress, $.BER)),
            /* IF_ABSENT  */ ((value.forwardingOptions === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_ForwardingOptions, $.BER)(value.forwardingOptions, $.BER)),
            /* IF_ABSENT  */ ((value.noReplyConditionTime === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_NoReplyConditionTime, $.BER)(value.noReplyConditionTime, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.longForwardedToNumber === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_FTN_AddressString, $.BER)(value.longForwardedToNumber, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ForwardingFeature(value, elGetter);
}


/* eslint-enable */
