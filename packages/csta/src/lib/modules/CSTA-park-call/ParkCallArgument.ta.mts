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

import { DeviceID, _decode_DeviceID, _encode_DeviceID } from "../CSTA-device-identifiers/DeviceID.ta.mjs";

import { SubjectOfCall, _decode_SubjectOfCall, _encode_SubjectOfCall } from "../CSTA-device-feature-types/SubjectOfCall.ta.mjs";

import { LanguagePreferences, _decode_LanguagePreferences, _encode_LanguagePreferences } from "../CSTA-device-feature-types/LanguagePreferences.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



import { CorrelatorData, _decode_CorrelatorData, _encode_CorrelatorData } from "../CSTA-device-feature-types/CorrelatorData.ta.mjs";

/**
 * @summary ParkCallArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ParkCallArgument ::= SEQUENCE
 * {     parking                ConnectionID,
 *     parkTo                DeviceID,
 *     correlatorData             CorrelatorData                 OPTIONAL, 
 *     subjectOfCall            [0] IMPLICIT SubjectOfCall        OPTIONAL,
 *     languagePreferences        [1] IMPLICIT LanguagePreferences    OPTIONAL,
 *     extensions             CSTACommonArguments             OPTIONAL }
 * ```
 * 
 * @class
 */
export
class ParkCallArgument {
    constructor (
        /**
         * @summary `parking`.
         * @public
         * @readonly
         */
        readonly parking: ConnectionID,
        /**
         * @summary `parkTo`.
         * @public
         * @readonly
         */
        readonly parkTo: DeviceID,
        /**
         * @summary `correlatorData`.
         * @public
         * @readonly
         */
        readonly correlatorData: OPTIONAL<CorrelatorData>,
        /**
         * @summary `subjectOfCall`.
         * @public
         * @readonly
         */
        readonly subjectOfCall: OPTIONAL<SubjectOfCall>,
        /**
         * @summary `languagePreferences`.
         * @public
         * @readonly
         */
        readonly languagePreferences: OPTIONAL<LanguagePreferences>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a ParkCallArgument
     * @description
     * 
     * This takes an `object` and converts it to a `ParkCallArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ParkCallArgument`.
     * @returns {ParkCallArgument}
     */
    public static _from_object (_o: { [_K in keyof (ParkCallArgument)]: (ParkCallArgument)[_K] }): ParkCallArgument {
        return new ParkCallArgument(_o.parking, _o.parkTo, _o.correlatorData, _o.subjectOfCall, _o.languagePreferences, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of ParkCallArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ParkCallArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("parking", false, $.hasTag(_TagClass.application, 11)),
    new $.ComponentSpec("parkTo", false, $.hasTag(_TagClass.context, 0)),
        new $.ComponentSpec("correlatorData", true, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("subjectOfCall", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("languagePreferences", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of ParkCallArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ParkCallArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ParkCallArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ParkCallArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ParkCallArgument: $.ASN1Decoder<ParkCallArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ParkCallArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ParkCallArgument (el: _Element): ParkCallArgument {
    if (!_cached_decoder_for_ParkCallArgument) { _cached_decoder_for_ParkCallArgument = function (el: _Element): ParkCallArgument {
    let parking!: ConnectionID;
    let parkTo!: DeviceID;
    let correlatorData: OPTIONAL<CorrelatorData>;
    let subjectOfCall: OPTIONAL<SubjectOfCall>;
    let languagePreferences: OPTIONAL<LanguagePreferences>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "parking": (_el: _Element): void => { parking = _decode_ConnectionID(_el); },
        "parkTo": (_el: _Element): void => { parkTo = _decode_DeviceID(_el); },
        "correlatorData": (_el: _Element): void => { correlatorData = _decode_CorrelatorData(_el); },
        "subjectOfCall": (_el: _Element): void => { subjectOfCall = $._decode_implicit<SubjectOfCall>(() => _decode_SubjectOfCall)(_el); },
        "languagePreferences": (_el: _Element): void => { languagePreferences = $._decode_implicit<LanguagePreferences>(() => _decode_LanguagePreferences)(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ParkCallArgument,
        _extension_additions_list_spec_for_ParkCallArgument,
        _root_component_type_list_2_spec_for_ParkCallArgument,
        undefined,
    );
    return new ParkCallArgument(
        parking,
        parkTo,
        correlatorData,
        subjectOfCall,
        languagePreferences,
        extensions
    );
}; }
    return _cached_decoder_for_ParkCallArgument(el);
}

let _cached_encoder_for_ParkCallArgument: $.ASN1Encoder<ParkCallArgument> | null = null;

/**
 * @summary Encodes a(n) ParkCallArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ParkCallArgument, encoded as an ASN.1 Element.
 */
export
function _encode_ParkCallArgument (value: ParkCallArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ParkCallArgument) { _cached_encoder_for_ParkCallArgument = function (value: ParkCallArgument, elGetter: $.ASN1Encoder<ParkCallArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ConnectionID(value.parking, $.BER),
            /* REQUIRED   */ _encode_DeviceID(value.parkTo, $.BER),
            /* IF_ABSENT  */ ((value.correlatorData === undefined) ? undefined : _encode_CorrelatorData(value.correlatorData, $.BER)),
            /* IF_ABSENT  */ ((value.subjectOfCall === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_SubjectOfCall, $.BER)(value.subjectOfCall, $.BER)),
            /* IF_ABSENT  */ ((value.languagePreferences === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_LanguagePreferences, $.BER)(value.languagePreferences, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ParkCallArgument(value, elGetter);
}


/* eslint-enable */
