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

import { CallCharacteristics, _decode_CallCharacteristics, _encode_CallCharacteristics } from "../CSTA-call-control/CallCharacteristics.ta.mjs";

import { SubjectOfCall, _decode_SubjectOfCall, _encode_SubjectOfCall } from "../CSTA-device-feature-types/SubjectOfCall.ta.mjs";

import { LanguagePreferences, _decode_LanguagePreferences, _encode_LanguagePreferences } from "../CSTA-device-feature-types/LanguagePreferences.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary CallBackArgument
 * @description
 *
 * Service request for Call Back Call-Related (ECMA-269 §17.1.4 /
 * ECMA-285 §15.1.4). Names the calling device's connection in the
 * original call. The called side may be Fail, Alerting, Queued, or
 * Null (e.g. after forward).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallBackArgument ::= SEQUENCE
 * {     callbackConnection         ConnectionID,
 *     callCharacteristics         CallCharacteristics             OPTIONAL,
 *     subjectOfCall            [0] IMPLICIT SubjectOfCall        OPTIONAL,
 *     languagePreferences        [1] IMPLICIT LanguagePreferences    OPTIONAL,
 *     extensions             CSTACommonArguments             OPTIONAL }
 * ```
 * 
 * @class
 */
export
class CallBackArgument {
    constructor (
        /**
         * @summary `callbackConnection`.
         * @description
         *
         * Mandatory. Calling device's connection in the original
         * call. Initial state Connected; typically becomes Null
         * (may Fail first if still off-hook).
         *
         * @public
         * @readonly
         */
        readonly callbackConnection: ConnectionID,
        /**
         * @summary `callCharacteristics`.
         * @description
         *
         * Optional call characteristics to apply (§12.2.4).
         *
         * @public
         * @readonly
         */
        readonly callCharacteristics: OPTIONAL<CallCharacteristics>,
        /**
         * @summary `subjectOfCall`.
         * @description
         *
         * Optional subject or intent of the call (§12.2.27).
         *
         * @public
         * @readonly
         */
        readonly subjectOfCall: OPTIONAL<SubjectOfCall>,
        /**
         * @summary `languagePreferences`.
         * @description
         *
         * Optional preferred language(s) for the call (§12.2.16).
         *
         * @public
         * @readonly
         */
        readonly languagePreferences: OPTIONAL<LanguagePreferences>,
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
     * @summary Restructures an object into a CallBackArgument
     * @description
     * 
     * This takes an `object` and converts it to a `CallBackArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CallBackArgument`.
     * @returns {CallBackArgument}
     */
    public static _from_object (_o: { [_K in keyof (CallBackArgument)]: (CallBackArgument)[_K] }): CallBackArgument {
        return new CallBackArgument(_o.callbackConnection, _o.callCharacteristics, _o.subjectOfCall, _o.languagePreferences, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of CallBackArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CallBackArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("callbackConnection", false, $.hasTag(_TagClass.application, 11)),
    new $.ComponentSpec("callCharacteristics", true, $.hasTag(_TagClass.universal, 3)),
    new $.ComponentSpec("subjectOfCall", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("languagePreferences", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of CallBackArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CallBackArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CallBackArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CallBackArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CallBackArgument: $.ASN1Decoder<CallBackArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CallBackArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CallBackArgument (el: _Element): CallBackArgument {
    if (!_cached_decoder_for_CallBackArgument) { _cached_decoder_for_CallBackArgument = function (el: _Element): CallBackArgument {
    let callbackConnection!: ConnectionID;
    let callCharacteristics: OPTIONAL<CallCharacteristics>;
    let subjectOfCall: OPTIONAL<SubjectOfCall>;
    let languagePreferences: OPTIONAL<LanguagePreferences>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "callbackConnection": (_el: _Element): void => { callbackConnection = _decode_ConnectionID(_el); },
        "callCharacteristics": (_el: _Element): void => { callCharacteristics = _decode_CallCharacteristics(_el); },
        "subjectOfCall": (_el: _Element): void => { subjectOfCall = $._decode_implicit<SubjectOfCall>(() => _decode_SubjectOfCall)(_el); },
        "languagePreferences": (_el: _Element): void => { languagePreferences = $._decode_implicit<LanguagePreferences>(() => _decode_LanguagePreferences)(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CallBackArgument,
        _extension_additions_list_spec_for_CallBackArgument,
        _root_component_type_list_2_spec_for_CallBackArgument,
        undefined,
    );
    return new CallBackArgument(
        callbackConnection,
        callCharacteristics,
        subjectOfCall,
        languagePreferences,
        extensions
    );
}; }
    return _cached_decoder_for_CallBackArgument(el);
}

let _cached_encoder_for_CallBackArgument: $.ASN1Encoder<CallBackArgument> | null = null;

/**
 * @summary Encodes a(n) CallBackArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CallBackArgument, encoded as an ASN.1 Element.
 */
export
function _encode_CallBackArgument (value: CallBackArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CallBackArgument) { _cached_encoder_for_CallBackArgument = function (value: CallBackArgument, elGetter: $.ASN1Encoder<CallBackArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ConnectionID(value.callbackConnection, $.BER),
            /* IF_ABSENT  */ ((value.callCharacteristics === undefined) ? undefined : _encode_CallCharacteristics(value.callCharacteristics, $.BER)),
            /* IF_ABSENT  */ ((value.subjectOfCall === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_SubjectOfCall, $.BER)(value.subjectOfCall, $.BER)),
            /* IF_ABSENT  */ ((value.languagePreferences === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_LanguagePreferences, $.BER)(value.languagePreferences, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CallBackArgument(value, elGetter);
}


/* eslint-enable */
