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
import { ConnectionID, _decode_ConnectionID, _encode_ConnectionID } from "../CSTA-call-connection-identifiers/ConnectionID.ta.mjs";
// export { ConnectionID, _decode_ConnectionID, _encode_ConnectionID } from "../CSTA-call-connection-identifiers/ConnectionID.ta.mjs";
import { ConnectionInformation, _decode_ConnectionInformation, _encode_ConnectionInformation } from "../CSTA-media-services/ConnectionInformation.ta.mjs";
// export { ConnectionInformation, _decode_ConnectionInformation, _encode_ConnectionInformation } from "../CSTA-media-services/ConnectionInformation.ta.mjs";
import { CallLinkageData, _decode_CallLinkageData, _encode_CallLinkageData } from "../CSTA-call-control/CallLinkageData.ta.mjs";
// export { CallLinkageData, _decode_CallLinkageData, _encode_CallLinkageData } from "../CSTA-call-control/CallLinkageData.ta.mjs";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";
// export { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";


/**
 * @summary GroupPickupCallResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GroupPickupCallResult ::= SEQUENCE
 * {     pickedCall             ConnectionID             OPTIONAL,
 *     pickedCallInfo             ConnectionInformation         OPTIONAL,
 *     callLinkageData         [1] IMPLICIT CallLinkageData     OPTIONAL,
 *     extensions             CSTACommonArguments         OPTIONAL }
 * ```
 * 
 * @class
 */
export
class GroupPickupCallResult {
    constructor (
        /**
         * @summary `pickedCall`.
         * @public
         * @readonly
         */
        readonly pickedCall: OPTIONAL<ConnectionID>,
        /**
         * @summary `pickedCallInfo`.
         * @public
         * @readonly
         */
        readonly pickedCallInfo: OPTIONAL<ConnectionInformation>,
        /**
         * @summary `callLinkageData`.
         * @public
         * @readonly
         */
        readonly callLinkageData: OPTIONAL<CallLinkageData>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a GroupPickupCallResult
     * @description
     * 
     * This takes an `object` and converts it to a `GroupPickupCallResult`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GroupPickupCallResult`.
     * @returns {GroupPickupCallResult}
     */
    public static _from_object (_o: { [_K in keyof (GroupPickupCallResult)]: (GroupPickupCallResult)[_K] }): GroupPickupCallResult {
        return new GroupPickupCallResult(_o.pickedCall, _o.pickedCallInfo, _o.callLinkageData, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of GroupPickupCallResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GroupPickupCallResult: $.ComponentSpec[] = [
    new $.ComponentSpec("pickedCall", true, $.hasTag(_TagClass.application, 11), undefined, undefined),
    new $.ComponentSpec("pickedCallInfo", true, $.hasTag(_TagClass.universal, 16), undefined, undefined),
    new $.ComponentSpec("callLinkageData", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of GroupPickupCallResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GroupPickupCallResult: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GroupPickupCallResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GroupPickupCallResult: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GroupPickupCallResult: $.ASN1Decoder<GroupPickupCallResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GroupPickupCallResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GroupPickupCallResult (el: _Element): GroupPickupCallResult {
    if (!_cached_decoder_for_GroupPickupCallResult) { _cached_decoder_for_GroupPickupCallResult = function (el: _Element): GroupPickupCallResult {
    let pickedCall: OPTIONAL<ConnectionID>;
    let pickedCallInfo: OPTIONAL<ConnectionInformation>;
    let callLinkageData: OPTIONAL<CallLinkageData>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "pickedCall": (_el: _Element): void => { pickedCall = _decode_ConnectionID(_el); },
        "pickedCallInfo": (_el: _Element): void => { pickedCallInfo = _decode_ConnectionInformation(_el); },
        "callLinkageData": (_el: _Element): void => { callLinkageData = $._decode_implicit<CallLinkageData>(() => _decode_CallLinkageData)(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GroupPickupCallResult,
        _extension_additions_list_spec_for_GroupPickupCallResult,
        _root_component_type_list_2_spec_for_GroupPickupCallResult,
        undefined,
    );
    return new GroupPickupCallResult(
        pickedCall,
        pickedCallInfo,
        callLinkageData,
        extensions
    );
}; }
    return _cached_decoder_for_GroupPickupCallResult(el);
}

let _cached_encoder_for_GroupPickupCallResult: $.ASN1Encoder<GroupPickupCallResult> | null = null;

/**
 * @summary Encodes a(n) GroupPickupCallResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GroupPickupCallResult, encoded as an ASN.1 Element.
 */
export
function _encode_GroupPickupCallResult (value: GroupPickupCallResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GroupPickupCallResult) { _cached_encoder_for_GroupPickupCallResult = function (value: GroupPickupCallResult, elGetter: $.ASN1Encoder<GroupPickupCallResult>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.pickedCall === undefined) ? undefined : _encode_ConnectionID(value.pickedCall, $.BER)),
            /* IF_ABSENT  */ ((value.pickedCallInfo === undefined) ? undefined : _encode_ConnectionInformation(value.pickedCallInfo, $.BER)),
            /* IF_ABSENT  */ ((value.callLinkageData === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_CallLinkageData, $.BER)(value.callLinkageData, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GroupPickupCallResult(value, elGetter);
}


/* eslint-enable */
