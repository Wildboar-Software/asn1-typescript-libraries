/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { ConnectionID, _decode_ConnectionID, _encode_ConnectionID } from "../CSTA-call-connection-identifiers/ConnectionID.ta.mjs";

import { MediaCallCharacteristics, _decode_MediaCallCharacteristics, _encode_MediaCallCharacteristics } from "../CSTA-media-services/MediaCallCharacteristics.ta.mjs";

import { ConnectionInformation, _decode_ConnectionInformation, _encode_ConnectionInformation } from "../CSTA-media-services/ConnectionInformation.ta.mjs";

import { CallLinkageData, _decode_CallLinkageData, _encode_CallLinkageData } from "../CSTA-call-control/CallLinkageData.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary MakeConnectionResult
 * @description
 *
 * Positive acknowledgement for Make Connection (ECMA-269
 * §17.1.19 / ECMA-285 §15.1.19). Returns the initiating device's
 * connection. May include adjusted media/connection values.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MakeConnectionResult ::= SEQUENCE
 * {     initiatingDevice         ConnectionID,
 *     mediaCallCharacteristics     [0] IMPLICIT MediaCallCharacteristics         OPTIONAL,
 *     initiatedCallInfo         [1] IMPLICIT ConnectionInformation         OPTIONAL,
 *     callLinkageData         [2] IMPLICIT CallLinkageData             OPTIONAL,
 *     extensions             CSTACommonArguments                 OPTIONAL }
 * ```
 * 
 * @class
 */
export
class MakeConnectionResult {
    constructor (
        /**
         * @summary `initiatingDevice`.
         * @description
         *
         * Mandatory. Initiating device's connection in the new
         * call.
         *
         * @public
         * @readonly
         */
        readonly initiatingDevice: ConnectionID,
        /**
         * @summary `mediaCallCharacteristics`.
         * @description
         *
         * Optional. Media characteristics actually used; may be
         * adjusted from the request (§12.2.20).
         *
         * @public
         * @readonly
         */
        readonly mediaCallCharacteristics: OPTIONAL<MediaCallCharacteristics>,
        /**
         * @summary `initiatedCallInfo`.
         * @description
         *
         * Optional connection information (§12.2.8).
         *
         * @public
         * @readonly
         */
        readonly initiatedCallInfo: OPTIONAL<ConnectionInformation>,
        /**
         * @summary `callLinkageData`.
         * @description
         *
         * Optional call-linkage identifiers (§12.2.5).
         *
         * @public
         * @readonly
         */
        readonly callLinkageData: OPTIONAL<CallLinkageData>,
        /**
         * @summary `extensions`.
         * @description
         *
         * Optional `CSTACommonArguments` carrying the security and
         * privateData parameters from the ECMA-269 service table.
         *
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a MakeConnectionResult
     * @description
     * 
     * This takes an `object` and converts it to a `MakeConnectionResult`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MakeConnectionResult`.
     * @returns {MakeConnectionResult}
     */
    public static _from_object (_o: { [_K in keyof (MakeConnectionResult)]: (MakeConnectionResult)[_K] }): MakeConnectionResult {
        return new MakeConnectionResult(_o.initiatingDevice, _o.mediaCallCharacteristics, _o.initiatedCallInfo, _o.callLinkageData, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of MakeConnectionResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MakeConnectionResult: $.ComponentSpec[] = [
    new $.ComponentSpec("initiatingDevice", false, $.hasTag(_TagClass.application, 11)),
    new $.ComponentSpec("mediaCallCharacteristics", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("initiatedCallInfo", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("callLinkageData", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of MakeConnectionResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MakeConnectionResult: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MakeConnectionResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MakeConnectionResult: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MakeConnectionResult: $.ASN1Decoder<MakeConnectionResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MakeConnectionResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MakeConnectionResult (el: _Element): MakeConnectionResult {
    if (!_cached_decoder_for_MakeConnectionResult) { _cached_decoder_for_MakeConnectionResult = function (el: _Element): MakeConnectionResult {
    let initiatingDevice!: ConnectionID;
    let mediaCallCharacteristics: OPTIONAL<MediaCallCharacteristics>;
    let initiatedCallInfo: OPTIONAL<ConnectionInformation>;
    let callLinkageData: OPTIONAL<CallLinkageData>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "initiatingDevice": (_el: _Element): void => { initiatingDevice = _decode_ConnectionID(_el); },
        "mediaCallCharacteristics": (_el: _Element): void => { mediaCallCharacteristics = $._decode_implicit<MediaCallCharacteristics>(() => _decode_MediaCallCharacteristics)(_el); },
        "initiatedCallInfo": (_el: _Element): void => { initiatedCallInfo = $._decode_implicit<ConnectionInformation>(() => _decode_ConnectionInformation)(_el); },
        "callLinkageData": (_el: _Element): void => { callLinkageData = $._decode_implicit<CallLinkageData>(() => _decode_CallLinkageData)(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MakeConnectionResult,
        _extension_additions_list_spec_for_MakeConnectionResult,
        _root_component_type_list_2_spec_for_MakeConnectionResult,
        undefined,
    );
    return new MakeConnectionResult(
        initiatingDevice,
        mediaCallCharacteristics,
        initiatedCallInfo,
        callLinkageData,
        extensions
    );
}; }
    return _cached_decoder_for_MakeConnectionResult(el);
}

let _cached_encoder_for_MakeConnectionResult: $.ASN1Encoder<MakeConnectionResult> | null = null;

/**
 * @summary Encodes a(n) MakeConnectionResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MakeConnectionResult, encoded as an ASN.1 Element.
 */
export
function _encode_MakeConnectionResult (value: MakeConnectionResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MakeConnectionResult) { _cached_encoder_for_MakeConnectionResult = function (value: MakeConnectionResult, elGetter: $.ASN1Encoder<MakeConnectionResult>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ConnectionID(value.initiatingDevice, $.BER),
            /* IF_ABSENT  */ ((value.mediaCallCharacteristics === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_MediaCallCharacteristics, $.BER)(value.mediaCallCharacteristics, $.BER)),
            /* IF_ABSENT  */ ((value.initiatedCallInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_ConnectionInformation, $.BER)(value.initiatedCallInfo, $.BER)),
            /* IF_ABSENT  */ ((value.callLinkageData === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_CallLinkageData, $.BER)(value.callLinkageData, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_MakeConnectionResult(value, elGetter);
}


/* eslint-enable */
