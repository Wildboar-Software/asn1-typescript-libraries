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
import { Ext_BasicServiceCode, _decode_Ext_BasicServiceCode, _encode_Ext_BasicServiceCode } from "../MAP-CommonDataTypes/Ext-BasicServiceCode.ta.mjs";
// export { Ext_BasicServiceCode, _decode_Ext_BasicServiceCode, _encode_Ext_BasicServiceCode } from "../MAP-CommonDataTypes/Ext-BasicServiceCode.ta.mjs";
import { Ext_SS_Status, _decode_Ext_SS_Status, _encode_Ext_SS_Status } from "../MAP-CommonDataTypes/Ext-SS-Status.ta.mjs";
// export { Ext_SS_Status, _decode_Ext_SS_Status, _encode_Ext_SS_Status } from "../MAP-CommonDataTypes/Ext-SS-Status.ta.mjs";
import { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";
// export { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";
import { ISDN_SubaddressString, _decode_ISDN_SubaddressString, _encode_ISDN_SubaddressString } from "../MAP-CommonDataTypes/ISDN-SubaddressString.ta.mjs";
// export { ISDN_SubaddressString, _decode_ISDN_SubaddressString, _encode_ISDN_SubaddressString } from "../MAP-CommonDataTypes/ISDN-SubaddressString.ta.mjs";
import { Ext_ForwOptions, _decode_Ext_ForwOptions, _encode_Ext_ForwOptions } from "../MAP-MS-DataTypes/Ext-ForwOptions.ta.mjs";
// export { Ext_ForwOptions, _decode_Ext_ForwOptions, _encode_Ext_ForwOptions } from "../MAP-MS-DataTypes/Ext-ForwOptions.ta.mjs";
import { Ext_NoRepCondTime, _decode_Ext_NoRepCondTime, _encode_Ext_NoRepCondTime } from "../MAP-MS-DataTypes/Ext-NoRepCondTime.ta.mjs";
// export { Ext_NoRepCondTime, _decode_Ext_NoRepCondTime, _encode_Ext_NoRepCondTime } from "../MAP-MS-DataTypes/Ext-NoRepCondTime.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
import { FTN_AddressString, _decode_FTN_AddressString, _encode_FTN_AddressString } from "../MAP-CommonDataTypes/FTN-AddressString.ta.mjs";
// export { FTN_AddressString, _decode_FTN_AddressString, _encode_FTN_AddressString } from "../MAP-CommonDataTypes/FTN-AddressString.ta.mjs";


/**
 * @summary Ext_ForwFeature
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Ext-ForwFeature ::= SEQUENCE {
 *     basicService    Ext-BasicServiceCode    OPTIONAL,
 *     ss-Status    [4] Ext-SS-Status,
 *     forwardedToNumber    [5] ISDN-AddressString    OPTIONAL,
 *     -- When this data type is sent from an HLR which supports CAMEL Phase 2
 *     -- to a VLR that supports CAMEL Phase 2 the VLR shall not check the
 *     -- format of the number
 *     forwardedToSubaddress    [8] ISDN-SubaddressString    OPTIONAL,
 *     forwardingOptions    [6] Ext-ForwOptions    OPTIONAL,
 *     noReplyConditionTime    [7] Ext-NoRepCondTime    OPTIONAL,
 *     extensionContainer    [9] ExtensionContainer    OPTIONAL,
 *     ...,
 *     longForwardedToNumber    [10] FTN-AddressString    OPTIONAL }
 * ```
 * 
 * @class
 */
export
class Ext_ForwFeature {
    constructor (
        /**
         * @summary `basicService`.
         * @public
         * @readonly
         */
        readonly basicService: OPTIONAL<Ext_BasicServiceCode>,
        /**
         * @summary `ss_Status`.
         * @public
         * @readonly
         */
        readonly ss_Status: Ext_SS_Status,
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
        readonly forwardingOptions: OPTIONAL<Ext_ForwOptions>,
        /**
         * @summary `noReplyConditionTime`.
         * @public
         * @readonly
         */
        readonly noReplyConditionTime: OPTIONAL<Ext_NoRepCondTime>,
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
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
     * @summary Restructures an object into a Ext_ForwFeature
     * @description
     * 
     * This takes an `object` and converts it to a `Ext_ForwFeature`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Ext_ForwFeature`.
     * @returns {Ext_ForwFeature}
     */
    public static _from_object (_o: { [_K in keyof (Ext_ForwFeature)]: (Ext_ForwFeature)[_K] }): Ext_ForwFeature {
        return new Ext_ForwFeature(_o.basicService, _o.ss_Status, _o.forwardedToNumber, _o.forwardedToSubaddress, _o.forwardingOptions, _o.noReplyConditionTime, _o.extensionContainer, _o.longForwardedToNumber, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of Ext_ForwFeature
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Ext_ForwFeature: $.ComponentSpec[] = [
    new $.ComponentSpec("basicService", true, $.or($.hasTag(_TagClass.context, 2), $.hasTag(_TagClass.context, 3)), undefined, undefined),
    new $.ComponentSpec("ss-Status", false, $.hasTag(_TagClass.context, 4), undefined, undefined),
    new $.ComponentSpec("forwardedToNumber", true, $.hasTag(_TagClass.context, 5), undefined, undefined),
    new $.ComponentSpec("forwardedToSubaddress", true, $.hasTag(_TagClass.context, 8), undefined, undefined),
    new $.ComponentSpec("forwardingOptions", true, $.hasTag(_TagClass.context, 6), undefined, undefined),
    new $.ComponentSpec("noReplyConditionTime", true, $.hasTag(_TagClass.context, 7), undefined, undefined),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 9), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of Ext_ForwFeature
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Ext_ForwFeature: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Ext_ForwFeature
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Ext_ForwFeature: $.ComponentSpec[] = [
    new $.ComponentSpec("longForwardedToNumber", true, $.hasTag(_TagClass.context, 10), undefined, undefined)
];

let _cached_decoder_for_Ext_ForwFeature: $.ASN1Decoder<Ext_ForwFeature> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Ext_ForwFeature
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Ext_ForwFeature (el: _Element): Ext_ForwFeature {
    if (!_cached_decoder_for_Ext_ForwFeature) { _cached_decoder_for_Ext_ForwFeature = function (el: _Element): Ext_ForwFeature {
    let basicService: OPTIONAL<Ext_BasicServiceCode>;
    let ss_Status!: Ext_SS_Status;
    let forwardedToNumber: OPTIONAL<ISDN_AddressString>;
    let forwardedToSubaddress: OPTIONAL<ISDN_SubaddressString>;
    let forwardingOptions: OPTIONAL<Ext_ForwOptions>;
    let noReplyConditionTime: OPTIONAL<Ext_NoRepCondTime>;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let longForwardedToNumber: OPTIONAL<FTN_AddressString>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "basicService": (_el: _Element): void => { basicService = _decode_Ext_BasicServiceCode(_el); },
        "ss-Status": (_el: _Element): void => { ss_Status = $._decode_implicit<Ext_SS_Status>(() => _decode_Ext_SS_Status)(_el); },
        "forwardedToNumber": (_el: _Element): void => { forwardedToNumber = $._decode_implicit<ISDN_AddressString>(() => _decode_ISDN_AddressString)(_el); },
        "forwardedToSubaddress": (_el: _Element): void => { forwardedToSubaddress = $._decode_implicit<ISDN_SubaddressString>(() => _decode_ISDN_SubaddressString)(_el); },
        "forwardingOptions": (_el: _Element): void => { forwardingOptions = $._decode_implicit<Ext_ForwOptions>(() => _decode_Ext_ForwOptions)(_el); },
        "noReplyConditionTime": (_el: _Element): void => { noReplyConditionTime = $._decode_implicit<Ext_NoRepCondTime>(() => _decode_Ext_NoRepCondTime)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); },
        "longForwardedToNumber": (_el: _Element): void => { longForwardedToNumber = $._decode_implicit<FTN_AddressString>(() => _decode_FTN_AddressString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Ext_ForwFeature,
        _extension_additions_list_spec_for_Ext_ForwFeature,
        _root_component_type_list_2_spec_for_Ext_ForwFeature,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new Ext_ForwFeature(
        basicService,
        ss_Status,
        forwardedToNumber,
        forwardedToSubaddress,
        forwardingOptions,
        noReplyConditionTime,
        extensionContainer,
        longForwardedToNumber,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_Ext_ForwFeature(el);
}

let _cached_encoder_for_Ext_ForwFeature: $.ASN1Encoder<Ext_ForwFeature> | null = null;

/**
 * @summary Encodes a(n) Ext_ForwFeature into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Ext_ForwFeature, encoded as an ASN.1 Element.
 */
export
function _encode_Ext_ForwFeature (value: Ext_ForwFeature, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Ext_ForwFeature) { _cached_encoder_for_Ext_ForwFeature = function (value: Ext_ForwFeature, elGetter: $.ASN1Encoder<Ext_ForwFeature>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.basicService === undefined) ? undefined : _encode_Ext_BasicServiceCode(value.basicService, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_Ext_SS_Status, $.BER)(value.ss_Status, $.BER),
            /* IF_ABSENT  */ ((value.forwardedToNumber === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_ISDN_AddressString, $.BER)(value.forwardedToNumber, $.BER)),
            /* IF_ABSENT  */ ((value.forwardedToSubaddress === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_ISDN_SubaddressString, $.BER)(value.forwardedToSubaddress, $.BER)),
            /* IF_ABSENT  */ ((value.forwardingOptions === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_Ext_ForwOptions, $.BER)(value.forwardingOptions, $.BER)),
            /* IF_ABSENT  */ ((value.noReplyConditionTime === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_Ext_NoRepCondTime, $.BER)(value.noReplyConditionTime, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.longForwardedToNumber === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => _encode_FTN_AddressString, $.BER)(value.longForwardedToNumber, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Ext_ForwFeature(value, elGetter);
}


/* eslint-enable */
